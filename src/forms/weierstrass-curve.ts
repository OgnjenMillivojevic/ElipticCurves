import { Curve } from "./abstracts/eliptic-curve";
import { Field } from "../field/prime-field";
import { ECPoint } from "./abstracts/eliptic-curve-point";
import { CurveFamily, Curves } from "../curves/curves";
import { P224 } from "../constants/default-curves.const"
import { ExtendedField } from "../field/binary-field";
import { PollyItem } from "../curves/models/polly.model";
import { FieldOperations } from "../field/field.model";
import { CurveModel } from "../curves/models/curve.model";

export class WeierstrassCurve implements Curve {

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
        public coefficientA: bigint = P224.a,
        public coefficientB: bigint = P224.b,
        public p: bigint | PollyItem[] = P224.p,
        public curveOrder?: bigint,
        public curveGenerator?: ECPoint) {

        this._field = typeof (p) == 'bigint' ? new Field(p) : new ExtendedField(p);
        this.checkParams();
        this.setParams();
    }

    double(point: ECPoint): ECPoint {

        const F: FieldOperations = this._field;
        const A: bigint = this.coefficientA;
        const P: ECPoint = point;
        const [X1, Y1]: bigint[] = [P.x, P.y];

        if (Y1 === 0n) return P;

        const invers: bigint = F.invers(2n * Y1);
        const K: bigint = F.reduce((3n * X1 ** 2n + A) * invers);
        const X: bigint = F.reduce(K * K - 2n * X1);
        const Y: bigint = F.reduce(K * (X1 - X) - Y1);

        return new ECPoint(X, Y);
    }

    add(pointP: ECPoint, pointQ: ECPoint): ECPoint {

        const F: FieldOperations = this._field;
        const [P, Q]: ECPoint[] = [pointP, pointQ]
        const [X1, Y1, X2, Y2]: bigint[] = [P.x, P.y, Q.x, Q.y];

        if (P.isZero()) return Q;
        if (Q.isZero()) return P;
        if (P.isEqual(Q)) return this.double(P);
        if (P.isInvers(Q)) return ECPoint.ZERO;

        const INVERS: bigint = F.invers(F.reduce(X1 - X2));
        const K: bigint = F.reduce((Y1 - Y2) * INVERS);
        const X: bigint = F.reduce(K * K - X2 - X1);
        const Y: bigint = F.reduce(K * (X2 - X) - Y2);

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

    checkIsPointOnTheCurve(point: ECPoint): boolean {

        const [X, Y]: bigint[] = [point.x, point.y];
        const [A, B]: bigint[] = [this.coefficientA, this.coefficientB];

        const EQ: bigint = Y ** 2n - X ** 3n - A * X - B;
        const MOD_EQ: bigint = this._field.reduce(EQ);

        return MOD_EQ ? false : true;
    }

    setCurve(curveName: string) {

        const CURVES: Curves = new Curves();
        const CURVE: CurveModel | undefined = CURVES.getFormCurve(CurveFamily.Weierstrass, curveName);
        if (CURVE && CURVE.field.p && CURVE.params.b) {

            this._order = BigInt(CURVE.order);
            this.coefficientA = BigInt(CURVE.params.a.raw);
            this.coefficientB = BigInt(CURVE.params.b.raw);
            this.setField(CURVE)

            if (CURVE.generator) {

                const X: bigint = BigInt(CURVE.generator?.x.raw);
                const Y: bigint = BigInt(CURVE.generator?.y.raw);
                this._generator = new ECPoint(X, Y);
            }
        }
        else {
            throw new Error('Spaecified Curve does not exist!')
        }
    }

    private checkParams() {

        const [A, B]: bigint[] = [this.coefficientA, this.coefficientB];
        const P: ECPoint | undefined = this.generator;
        const F: FieldOperations = this.field;
        const D = 4n * A ** 3n + 27n * B ** 2n;

        if (F.reduce(D) == 0n) {
            throw new Error('This parameters don\'t form curve');
        }

        if (P && !this.checkIsPointOnTheCurve(P)) {
            throw new Error('Provided point is not on the curve');

        }
    }

    private setParams() {

        if (!this.coefficientA) {
            this._generator = new ECPoint(P224.x, P224.y);
            this._order = P224.order;
        }
        if (this.curveOrder) {
            this._order = this.curveOrder;
        }
        if (this.curveGenerator) {
            this._generator = this.curveGenerator;
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

