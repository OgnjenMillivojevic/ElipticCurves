export class ECPoint {

    static ZERO = new ECPoint(0n, 0n);
    constructor(public x: bigint, public y: bigint) { }

    public isZero(): boolean {
        return this.x === 0n && this.y === 0n;
    }

    public isEdwardNeutral(): boolean {
        return this.x === 0n && this.y === 1n;
    }

    public isEqual(pointB: ECPoint): boolean {
        return this.x === pointB.x && this.y === pointB.y;
    }

    public isInvers(pointB: ECPoint): boolean {
        return this.x === pointB.x && this.y === -pointB.y;
    }

}


