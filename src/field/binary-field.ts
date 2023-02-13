import { PollyItem } from "../curves/models/polly.model";
import { FieldOperations } from "./field.model";

export class ExtendedField implements FieldOperations {

    basePoly: bigint = 0n;
    degree: bigint = 0n;
    order: bigint = 0n;

    constructor(polly: PollyItem[]) {

        this.initBasePollinom(polly);
    }

    add(p: bigint, q: bigint): bigint {
        return p ^ q;
    }


    reduce(p: bigint): bigint {

        let [res, i]: bigint[] = [0n, 0n];

        while (p != 0n) {

            if (p & 1n)
                res ^= this.reducePower(i);
            p >>= 1n;
            i++;
        }

        return res;
    }

    multiply(p: bigint, q: bigint): bigint {

        let prod: bigint = this.multiplyWithoutReduction(p, q);
        prod = this.reduce(prod);

        return prod;
    }

    inversEuler(p: bigint): bigint {
        return this.reduce(this.pow(p, (this.order - 2n)));
    }

    invers(p: bigint) {

        let m: bigint = this.basePoly;
        let [u, v]: bigint[] = [1n, 0n]
        let i: bigint = this.deg(p) - this.degree;

        while (p != 1n) {

            if (i < 0n) {
                [p, m, u, v, i] = [m, p, v, u, -i];
            }

            u ^= v << i
            p ^= m << i

            p %= 256n;
            u %= 256n;

            i = this.deg(p) - this.deg(m);
        }

        return u;
    }

    private initBasePollinom(polly: PollyItem[]) {

        this.degree = BigInt(polly[0].power);
        this.order = 2n ** this.degree;

        polly.forEach((x: PollyItem) => {
            this.basePoly += 2n ** BigInt(x.power);
        });
    }

    private reducePower(n: bigint): bigint {

        const N: bigint = this.order;
        const P: bigint = this.basePoly;
        let res: bigint = 1n;

        for (let i: bigint = n; i > 0; i--) {
            res *= 2n;
            if (res > N - 1n)
                res ^= P;
        }

        return res;
    }

    private multiplyWithoutReduction(p: bigint, q: bigint) {

        let res: bigint = 0n;

        while (q > 0) {
            if (q & 1n)
                res ^= p;
            p <<= 1n;
            q >>= 1n;
        }

        return res;
    }

    private pow(a: bigint, n: bigint): bigint {
        let res = a;
        while (n > 1) {
            res = this.reduce(this.multiply(res, a));
            n--;
        }
        return res;
    }

    private deg(p: bigint): bigint {

        let degree: bigint = 0n;
        p >>= 1n;

        while (p != 0n) {
            p >>= 1n;
            degree += 1n;
        }

        return degree;
    }


}