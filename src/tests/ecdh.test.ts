import { Curves } from "../curves/curves";
import { CurveModel } from "../curves/models/curve.model";
import { ECDH } from "../protocol/ecdh";
import { Field } from "../field/prime-field";
import { ECPoint } from "../forms/abstracts/eliptic-curve-point";
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

describe('Testing ECDH', function () {

    const CURVES: Curves = new Curves();
    const CURVE: CurveModel | undefined = CURVES.getCurve('P-192');


    it('Cheking is curve P-192 exist', function () {

        assert.ok(CURVE, "Checking is doubled point on the curve");
    })

    if (CURVE && CURVE.generator) {

        const X: bigint = BigInt(CURVE?.generator?.x.raw);
        const Y: bigint = BigInt(CURVE?.generator?.y.raw);
        const POINT: ECPoint = new ECPoint(X, Y);
        const ORDER: bigint = BigInt(CURVE.order);

        const WEIESTRASSCURVE: WeierstrassCurve = new WeierstrassCurve();
        WEIESTRASSCURVE.setCurve('P-192');

        let ecdh: ECDH = new ECDH(WEIESTRASSCURVE, POINT, ORDER);

        it('Generating Key', function () {

            let publicKey: ECPoint = ecdh.generateKeys().publicKey;
            assert.ok(calculateEq(publicKey, 'P-192'), "Checking is public key point on the curve");
        })
    }



})