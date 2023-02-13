import { Field } from "../field/prime-field";
import { Curve } from "../forms/abstracts/eliptic-curve";
import { ECPoint } from "../forms/abstracts/eliptic-curve-point";
import { getRandomInt } from "../helpers/random-generator";
import { SHA256 } from "../helpers/sha256";

export interface DS {
    r: bigint;
    s: bigint;
}

export class ECDSA {

    constructor( private curve: Curve) {}

    generateDS(m: string, privateKey: bigint): DS {

        if(this.curve.order && this.curve.generator){

            const N: bigint = this.curve.order;
            const G: ECPoint = this.curve.generator;
            const F = new Field(N);
            const K: bigint = privateKey;

            const E: string = SHA256(m);
            let [r, k, s]: bigint[] = [0n, 1n, 0n];
            let z: bigint = this.getLeftBits(E, N);
            let P :ECPoint;
    
            while (r == 0n || s == 0n) {

                k = this.generateRandomNumber();
                P = this.curve.multiply(G, k);
                r = F.reduce(P.x);
                s = F.reduce(F.invers(k) * (z + r * K))
            }
    
            return { r: r, s: s }
        }
        throw new Error('Invalid params')
    }

    verifyDS(m: string, ds: DS, publicKey: ECPoint): boolean {

        if( this.curve.order && this.curve.generator){
            const N: bigint  = this.curve.order;
            const [G, PU_K]: ECPoint[] = [this.curve.generator, publicKey];
            const F = new Field(N);

            if (this.checkDomain(ds.r, ds.s)) {
                return false;
            }
            const E = SHA256(m);
            const Z: bigint = this.getLeftBits(E, N);
            const U1: bigint = F.reduce(Z * F.invers(ds.s));
            const U2: bigint = F.reduce(ds.r * F.invers(ds.s));

            const A: ECPoint = this.curve.multiply(G, U1);
            const B: ECPoint = this.curve.multiply(PU_K, U2);
            const S = this.curve.add(A, B);

            if (S.isZero() || S.isEdwardNeutral()) {
                return false;
            }

            if (F.reduce(S.x) == F.reduce(ds.r)) {
                return true;
            }

            return false;
        }

        throw new Error('Invalid params')
    }

    private checkDomain(r: bigint, s: bigint): boolean{

        if(this.curve.order){
            const N: bigint = this.curve.order;
            return r < 1 || r > N || s < 1 || s > N
        }

        return false;
    }

    private generateRandomNumber(): bigint {
        return BigInt(getRandomInt(1, Number(this.curve.order)))
    }

    private getLeftBits(m: string, n: bigint) {

        let binary = this.stringToBinary(m);
        let nbits = binary.slice(0, Number(n));
        return BigInt(parseInt(nbits, 2));
    }

    private stringToBinary(str: string) {

        let strOut = "";
        for (var i = 0; i < str.length; i++) {
            strOut += str[i].charCodeAt(0).toString(2);
        }
        return strOut;
    }
}

