import { Curves } from "../curves/curves";
import { CurveModel } from "../curves/models/curve.model";
import { Field } from "../field/prime-field";
import { ECPoint } from "../forms/abstracts/eliptic-curve-point";
import { MontgomeryCurve } from "../forms/montgomery-curve";

var assert = require('assert');

function calculateEq(point: ECPoint, curveName: string) {

    const CURVES: Curves = new Curves();
    const CURVE: CurveModel | undefined = CURVES.getCurve('M-221');
    const F: Field = new Field(BigInt(CURVE?.field.p));

    if (CURVE && CURVE.params && CURVE.params.b) {
        const A: bigint = BigInt(CURVE.params.a.raw);
        const B: bigint = BigInt(CURVE.params.b.raw);
        return F.reduce(B * point.y * point.y - point.x * point.x * point.x - A * point.x * point.x - point.x) == 0n;
    }

    return false;

}

describe('Testing Mongomery', function () {

    const CURVES: Curves = new Curves();
    const CURVE: CurveModel | undefined = CURVES.getCurve('M-221');
    const F: Field = new Field(CURVE?.field.p);
    if (CURVE && CURVE.generator) {

        const X: bigint = BigInt(CURVE?.generator?.x.raw);
        const Y: bigint = BigInt(CURVE?.generator?.y.raw);
        const point: ECPoint = new ECPoint(X, Y);
        const montgomery = new MontgomeryCurve();
        montgomery.setCurve('M-221');


        it('Doubling Points', function () {

            let double: ECPoint = montgomery.double(point);

            assert.ok(calculateEq(double, 'M-221'), "Checking is doubled point on the curve");
            assert.ok(calculateEq(montgomery.double(double), 'M-221'), "Checking is doubled point on the curve");

        })

        it('Adding Points', function () {

            let double: ECPoint = montgomery.double(point);
            let add: ECPoint = montgomery.add(point, point);

            assert.ok(add.x == double.x && add.y == double.y, "Checking addition with itself");
            assert.ok(calculateEq(montgomery.add(double, point), 'M-221'), "Checking is result of addition on the curve");
        })

        it('Multiplying Points', function () {

            let mult: ECPoint = montgomery.multiply(point, 3n);
            let double: ECPoint = montgomery.double(point);
            let add: ECPoint = montgomery.add(double, point);

            assert.ok(add.x == mult.x && add.y == mult.y, "Comparing multiplication results with addition");
            assert.ok(calculateEq(montgomery.multiply(point, 2n), 'M-221'), "Checking is result of multiplication on the curve");
            assert.ok(calculateEq(montgomery.multiply(point, 100n), 'M-221'), "Checking is result of multiplication on the curve");

        })
    }

})