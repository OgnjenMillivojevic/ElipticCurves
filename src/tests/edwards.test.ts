import { Curves } from "../curves/curves";
import { CurveModel } from "../curves/models/curve.model";
import { Field } from "../field/prime-field";
import { ECPoint } from "../forms/abstracts/eliptic-curve-point";
import { EdwardsCurve } from "../forms/edwards-curve";

var assert = require('assert');

function calculateEq(point: ECPoint, curveName: string) {

    const CURVES: Curves = new Curves();
    const CURVE: CurveModel | undefined = CURVES.getCurve(curveName);
    const F: Field = new Field(BigInt(CURVE?.field.p));

    if (CURVE && CURVE.params && CURVE.params.d) {
        const A: bigint = BigInt(CURVE.params.a.raw);
        const D: bigint = BigInt(CURVE.params.d.raw);

        return F.reduce(A * point.x * point.x + point.y * point.y - 1n - D * point.x * point.x * point.y * point.y) == 0n;
    }

    return false;

}

describe('Testing Edward', function () {

    const CURVES: Curves = new Curves();
    const CURVE: CurveModel | undefined = CURVES.getCurve('numsp512t1');

    if (CURVE && CURVE.generator) {

        const X: bigint = BigInt(CURVE?.generator?.x.raw);
        const Y: bigint = BigInt(CURVE?.generator?.y.raw);
        const point: ECPoint = new ECPoint(X, Y);
        const edwards = new EdwardsCurve();
        edwards.setCurve('numsp512t1');


        it('Doubling Points', function () {

            let double: ECPoint = edwards.double(point);

            assert.ok(calculateEq(double, 'numsp512t1'), "Checking is doubled point on the curve");
            assert.ok(calculateEq(edwards.double(double), 'numsp512t1'), "Checking is doubled point on the curve");

        })

        it('Adding Points', function () {

            let double: ECPoint = edwards.double(point);
            let add: ECPoint = edwards.add(point, point);

            assert.ok(add.x == double.x && add.y == double.y, "Checking addition with itself");
            assert.ok(calculateEq(edwards.add(double, point), 'numsp512t1'), "Checking is result of addition on the curve");
        })

        it('Multiplying Points', function () {

            let mult: ECPoint = edwards.multiply(point, 3n);
            let double: ECPoint = edwards.double(point);
            let add: ECPoint = edwards.add(double, point);

            assert.ok(add.x == mult.x && add.y == mult.y, "Comparing multiplication results with addition");
            assert.ok(calculateEq(edwards.multiply(point, 2n), 'numsp512t1'), "Checking is result of multiplication on the curve");
            assert.ok(calculateEq(edwards.multiply(point, 100n), 'numsp512t1'), "Checking is result of multiplication on the curve");

        })
    }

})