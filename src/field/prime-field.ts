import { FieldOperations } from "./field.model";


export class Field implements FieldOperations {

    constructor(private order: bigint) { }

    reduce(x: bigint) {

        const result = x % this.order;
        return result >= 0 ? result : this.order + result;
    }

    add(a: bigint, b: bigint) {
        return this.reduce(a + b);
    }

    multiply(a: bigint, b: bigint) {
        return this.reduce(a * b);
    }

    substract(x: bigint, y: bigint) {
        return this.reduce(x - y);
    }

    invers(x: bigint): bigint {

        if (this.reduce(x) == 0n) {
            throw new Error(`Zero doesn't have invers`);
        }
        let [gcd, invers_x] = this.extendedEuclideanAlgorithm(x, this.order);
        if (gcd == 1n)
            return this.reduce(invers_x);
        else {
            throw new Error(`Element ` + x + `doesn't  have invers.`);
        }
    }

    private gcd(a: bigint, b: bigint): bigint {
        if (a == 0n)
            return b;
        return this.gcd(b % a, a);
    }

    private extendedEuclideanAlgorithm(a: bigint, b: bigint) {

        if (a == 0n) {
            return [b, 0n, 1n];
        }
        let [gcd, x1, y1] = [b, 0n, 1n];
        [gcd, x1, y1] = this.extendedEuclideanAlgorithm(b % a, a);
        let x = y1 - (b / a) * x1;
        let y = x1;

        return [gcd, x, y];
    }

}


