import { Curve } from "./abstracts/eliptic-curve";
import { Field } from "../field/prime-field";
import { ECPoint } from "./abstracts/eliptic-curve-point";
import { CurveFamily, Curves } from "../curves/curves";
import { M221 } from "../constants/default-curves.const"
import { ExtendedField } from "../field/binary-field";
import { FieldOperations } from "../field/field.model";
import { PollyItem } from "../curves/models/polly.model";
import { CurveModel } from "../curves/models/curve.model";

export class MontgomeryCurve implements Curve {

    private _field: FieldOperations;
    private _generator: ECPoint | undefined;
    private _order: bigint | undefined;

    public get generator(): ECPoint | undefined {
        return this._generator;
    }

    public get order(): bigint | undefined {
        return this._order;
    }

    public get field(): FieldOperations {
        return this._field;
    }

    constructor(
        public coefficientA: bigint = M221.a,
        public coefficientB: bigint = M221.b,
        public p: bigint | PollyItem[] = M221.p,
        public curve_order?: bigint,
        public curve_generator?: ECPoint) {

        this._field = typeof (p) == 'bigint' ? new Field(p) : new ExtendedField(p);
        this.checkParams();
        this.setParams();
    }

    double(point: ECPoint): ECPoint {

        const P: ECPoint = point;
        const [X1, Y1]: bigint[] = [P.x, P.y];

        if (Y1 === 0n) return P;

        const [A, B]: bigint[] = [this.coefficientA, this.coefficientB];
        const F: FieldOperations = this._field;

        const LD: bigint = F.invers(F.reduce(2n * B * Y1));
        const L: bigint = F.reduce((3n * X1 * X1 + 2n * A * X1 + 1n) * LD);
        const X: bigint = F.reduce(B * L * L - A - 2n * X1);
        const Y: bigint = F.reduce(L * (X1 - X) - Y1);

        return new ECPoint(X, Y);
    }

    add(pointP: ECPoint, pointQ: ECPoint): ECPoint {

        const [P, Q]: ECPoint[] = [pointP, pointQ];

        if (P.isZero()) return Q;
        if (Q.isZero()) return P;
        if (P.isEqual(Q)) return this.double(P);
        if (P.isInvers(Q)) return ECPoint.ZERO;

        const [X1, Y1, X2, Y2]: bigint[] = [P.x, P.y, Q.x, Q.y];
        const [A, B]: bigint[] = [this.coefficientA, this.coefficientB];
        const F: FieldOperations = this._field;

        const XD: bigint = F.reduce(X2 - X1);
        const YD: bigint = F.reduce(Y2 - Y1);
        const L: bigint = F.reduce(YD * F.invers(XD));
        const X: bigint = F.reduce(B * L * L - A - X1 - X2);
        const Y: bigint = F.reduce(L * (X1 - X) - Y1);

        return new ECPoint(X, Y);
    }


    multiply(pointP: ECPoint, n: bigint): ECPoint {

        const ZERO: ECPoint = new ECPoint(0n, 0n);
        let [product, P]: ECPoint[] = [ZERO, pointP];

        while (n > 0n) {
            if (n & 1n) {
                product = this.add(P, product);
            }
            P = this.double(P);
            n >>= 1n;
        }

        return product;
    }

    setCurve(curveName: string) {

        const CURVES: Curves = new Curves();
        const CURVE: CurveModel | undefined = CURVES.getFormCurve(CurveFamily.Montgomery, curveName);

        if (CURVE && CURVE.field.p && CURVE.params.b) {

            this.coefficientA = BigInt(CURVE.params.a.raw);
            this.coefficientB = BigInt(CURVE.params.b.raw);
            this.setField(CURVE);

            if (CURVE.generator) {

                const X: bigint = BigInt(CURVE.generator.x.raw);
                const Y: bigint = BigInt(CURVE.generator.x.raw);
                this._generator = new ECPoint(X, Y);
                this._order = BigInt(CURVE.order);
            }
        }
        else {
            throw new Error('Spaecified Curve does not exist!')
        }
    }

    checkIsPointOnTheCurve(point: ECPoint): boolean {

        const [X, Y]: bigint[] = [point.x, point.y];
        const [A, B]: bigint[] = [this.coefficientA, this.coefficientB];

        const EQ: bigint = B * Y ** 2n - X ** 3n - A * X ** 2n - X;
        const MOD_EQ: bigint = this._field.reduce(EQ);

        return MOD_EQ ? false : true;
    }

    private setParams() {

        if (!this.coefficientA) {
            this._generator = new ECPoint(M221.x, M221.y);
            this._order = M221.order;
        }
        if (this.curve_order) {
            this._order = this.curve_order;
        }
        if (this.curve_generator) {
            this._generator = this.curve_generator;
        }
    }

    private checkParams() {

        const [A, B]: bigint[] = [this.coefficientA, this.coefficientB];
        const P: ECPoint | undefined = this.generator;
        const F: FieldOperations = this.field;
        const D = B * (A ** 2n - 4n);

        if (F.reduce(D) == 0n) {
            throw new Error('This parameters don\'t form curve');
        }

        if (P && !this.checkIsPointOnTheCurve(P)) {
            throw new Error('Provided point is not on the curve');

        }
    }

    private setField(curve: CurveModel) {

        const TYPE = curve.field.type;

        if (TYPE == 'Prime') {

            this.p = BigInt(curve.field.p);
            this._field = new Field(this.p);
        }
        else if (TYPE == 'Binary') {

            const P: PollyItem[] = curve.field.poly;
            this.p = P;
            this._field = new ExtendedField(P);
        }

    }

}