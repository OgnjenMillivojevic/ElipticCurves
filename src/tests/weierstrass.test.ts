import { Curves } from "../curves/curves";
import { CurveModel } from "../curves/models/curve.model";
import { Field } from "../field/prime-field";
import { ECPoint } from "../forms/abstracts/eliptic-curve-point";
import { MontgomeryCurve } from "../forms/montgomery-curve";
import { WeierstrassCurve } from "../forms/weierstrass-curve";

var assert = require('assert');

function calculateEq(point: ECPoint, curveName: string) {

    const CURVES: Curves = new Curves();
    const CURVE: CurveModel | undefined = CURVES.getCurve(curveName);
    const F: Field = new Field(BigInt(CURVE?.field.p));

    if (CURVE && CURVE.params && CURVE.params.b) {
        const A: bigint = BigInt(CURVE.params.a.raw);
        const B: bigint = BigInt(CURVE.params.b.raw);
        return F.reduce(point.y * point.y - point.x * point.x * point.x - A * point.x - B) == 0n;
    }

    return false;

}

describe('Testing Weierstrass', function () {

    const CURVES: Curves = new Curves();
    const CURVE: CurveModel | undefined = CURVES.getCurve('P-192');
    const F: Field = new Field(CURVE?.field.p);
    if (CURVE && CURVE.generator) {

        const X: bigint = BigInt(CURVE?.generator?.x.raw);
        const Y: bigint = BigInt(CURVE?.generator?.y.raw);
        const point: ECPoint = new ECPoint(X, Y);
        const weierstrass = new WeierstrassCurve();
        weierstrass.setCurve('P-192');


        it('Doubling Points', function () {

            let double: ECPoint = weierstrass.double(point);

            assert.ok(calculateEq(double, 'P-192'), "Checking is doubled point on the curve");
            assert.ok(calculateEq(weierstrass.double(double), 'P-192'), "Checking is doubled point on the curve");

        })

        it('Adding Points', function () {

            let double: ECPoint = weierstrass.double(point);
            let add: ECPoint = weierstrass.add(point, point);

            assert.ok(add.x == double.x && add.y == double.y, "Checking addition with itself");
            assert.ok(calculateEq(weierstrass.add(double, point), 'P-192'), "Checking is result of addition on the curve");
        })

        it('Multiplying Points', function () {

            let mult: ECPoint = weierstrass.multiply(point, 3n);
            let double: ECPoint = weierstrass.double(point);
            let add: ECPoint = weierstrass.add(double, point);

            assert.ok(add.x == mult.x && add.y == mult.y, "Comparing multiplication results with addition");
            assert.ok(calculateEq(weierstrass.multiply(point, 2n), 'P-192'), "Checking is result of multiplication on the curve");
            assert.ok(calculateEq(weierstrass.multiply(point, 100n), 'P-192'), "Checking is result of multiplication on the curve");

        })
    }

})