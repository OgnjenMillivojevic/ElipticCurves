import { Curves } from "../curves/curves";
import { CurveModel } from "../curves/models/curve.model";
import { DS, ECDSA } from "../protocol/ecdsa";
import { ECPoint } from "../forms/abstracts/eliptic-curve-point";
import { WeierstrassCurve } from "../forms/weierstrass-curve";
import { SHA256 } from "../helpers/sha256";


var assert = require('assert');


describe('Testing ECDSA', function () {

 
    let weierstrass = new WeierstrassCurve();
    weierstrass.setCurve('P-192');
    const DSA: ECDSA = new ECDSA(weierstrass);

     
        it('DSA should verify message', function () {

            assert.ok(weierstrass, "Checking is curve initialized");
            assert.ok(weierstrass.generator, "Is generator exist");

            if(weierstrass.order && weierstrass.generator){

                const G: ECPoint = weierstrass.generator;
                const M:string = 'Hello World';
                const PR_K: bigint = 100n;

                const DS: DS = DSA.generateDS(M, 100n);
                const PU_K: ECPoint = weierstrass.multiply(G, PR_K);
                const V: boolean = DSA.verifyDS(M, DS, PU_K);

                assert.ok(V, "Checking verify function");
            }
        })

        it('DSA should not verify message', function () {

            assert.ok(weierstrass, "Checking is curve initialized");
            assert.ok(weierstrass.generator, "Is generator exist");

            if(weierstrass.order && weierstrass.generator){

                const G :ECPoint = weierstrass.generator;
                const OM: string = 'Hello World';
                const CM: string = 'Hello Worlddd'
                const PR_K: bigint = 100n;
                
                const DS: DS = DSA.generateDS(OM, 100n);
                const PU_K: ECPoint = weierstrass.multiply(G, PR_K);
                const V: boolean = DSA.verifyDS(CM, DS, PU_K);

                assert.ok(V == false, "Checking DSA verify function");
            }
        })

        it('SHA256', function () {
            assert.ok(SHA256('Hello world') == '64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c', "Testing SHA256");
        })
     

})