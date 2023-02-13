import { Curve } from "../forms/abstracts/eliptic-curve";
import { ECPoint } from "../forms/abstracts/eliptic-curve-point";
import { getRandomInt } from "../helpers/random-generator";

export class ECDH {

    constructor(
        private curve: Curve,
        private point: ECPoint,
        private orderOfCurve: bigint) { }

    generatePrivateKey(): bigint {
        return BigInt(getRandomInt(1, Number(this.orderOfCurve)));
    }

    generatePublicKey(privateKeyA: bigint) {
        return this.curve.multiply(this.point, privateKeyA);
    }

    getSharedSecret(publicKeyB: ECPoint, privateKeyA: bigint) {
        return this.curve.multiply(publicKeyB, privateKeyA);
    }

    generateKeys() {

        const privateKey: bigint = this.generatePrivateKey();
        const publicKey: ECPoint = this.generatePublicKey(privateKey);
        return { privateKey: privateKey, publicKey: publicKey };
    }

}