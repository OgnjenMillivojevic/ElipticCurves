import { Curve } from "./abstracts/eliptic-curve";
import { Field } from "../field/prime-field";
import { ECPoint } from "./abstracts/eliptic-curve-point";
import { CurveFamily, Curves } from "../curves/curves";
import { RFC5832 } from "../constants/default-curves.const"
import { PollyItem } from "../curves/models/polly.model";
import { FieldOperations } from "../field/field.model";
import { ExtendedField } from "../field/binary-field";
import { CurveModel } from "../curves/models/curve.model";

export class EdwardsCurve implements Curve {

    private _field: FieldOperations;
    private _generator: ECPoint | undefined;
    private _order: bigint | undefined;

    public get order() {
        return this._order;
    }

    public get generator() {
        return this._generator;
    }

    public get field(): FieldOperations {
        return this._field;
    }

    constructor(
        public coefficientD: bigint = RFC5832.d,
        public p: bigint | PollyItem[] = RFC5832.p,
        public coefficientA: bigint = RFC5832.a,
        public curveOrder?: bigint,
        public curveGenerator?: ECPoint) {

        this._field = typeof (p) == 'bigint' ? new Field(p) : new ExtendedField(p);
        this.checkParams();
        this.setParams();
    }


    double(point: ECPoint): ECPoint {

        const [X1, Y1]: bigint[] = [point.x, point.y];
        const F: FieldOperations = this._field;
        const A: bigint = this.coefficientA;

        const C: bigint = F.reduce(A * X1 * X1 + Y1 * Y1);
        const X: bigint = F.reduce(2n * X1 * Y1) * F.invers(C);
        const T: bigint = F.invers(F.reduce(2n - C));
        const Y: bigint = F.reduce((Y1 * Y1 - A * X1 * X1) * T);

        return new ECPoint(X, Y);
    }

    add(pointP: ECPoint, pointQ: ECPoint): ECPoint {

        const [P, Q]: ECPoint[] = [pointP, pointQ];

        if (P.isEqual(Q)) return this.double(P);
        if (P.isEdwardNeutral()) return Q;
        if (Q.isEdwardNeutral()) return P;

        const [X1, Y1, X2, Y2]: bigint[] = [P.x, P.y, Q.x, Q.y];
        const [A, D]: bigint[] = [this.coefficientA, this.coefficientD]
        const F: FieldOperations = this._field;

        const T: bigint = F.reduce(D * X1 * X2 * Y1 * Y2);
        const XD: bigint = F.invers(F.reduce(1n + T));
        const YD: bigint = F.invers(F.reduce(1n - T));
        const X: bigint = F.reduce((X1 * Y2 + X2 * Y1) * XD);
        const Y: bigint = F.reduce((Y1 * Y2 - A * X1 * X2) * YD);

        return new ECPoint(X, Y);
    }

    multiply(pointP: ECPoint, n: bigint): ECPoint {

        const ZERO: ECPoint = new ECPoint(0n, 1n);
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
        const CURVE: CurveModel | undefined = CURVES.getFormCurve(CurveFamily.TwistedEdwards, curveName);

        if (CURVE && CURVE.field && CURVE.params.d) {

            this.coefficientA = BigInt(CURVE.params.a.raw);
            this.coefficientD = BigInt(CURVE.params.d.raw);
            this.setField(CURVE);

            if (CURVE.generator) {

                const X: bigint = BigInt(CURVE.generator.x.raw);
                const Y: bigint = BigInt(CURVE.generator.y.raw);
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
        const [A, D]: bigint[] = [this.coefficientA, this.coefficientD];

        const EQ: bigint = A * X ** 2n + Y ** 2n - 1n - D * X ** 2n * Y ** 2n;
        const MOD_EQ: bigint = this._field.reduce(EQ);

        return MOD_EQ ? false : true;
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

    private setParams() {

        if (!this.coefficientD) {
            this._generator = new ECPoint(RFC5832.x, RFC5832.y);
            this._order = RFC5832.order;
        }
        if (this.curveOrder) {
            this._order = this.curveOrder;
        }
        if (this.curveGenerator) {
            this._generator = this.curveGenerator;
        }
    }

    private checkParams() {

        const D: bigint = this.coefficientD;
        const P: ECPoint | undefined = this.generator;
        const F: FieldOperations = this.field;

        if (D == 0n || D == 1n) {
            throw new Error('This parameters don\'t form curve');
        }

        if (P && !this.checkIsPointOnTheCurve(P)) {
            throw new Error('Provided point is not on the curve');

        }
    }

    

}