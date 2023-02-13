import { FieldOperations } from "../../field/field.model";
import { ECPoint } from "./eliptic-curve-point";

export interface Curve {

    get generator(): ECPoint | undefined;

    get order(): bigint | undefined;

    get field(): FieldOperations;

    double(point: ECPoint): ECPoint;

    add(pointP: ECPoint, pointQ: ECPoint): ECPoint;

    multiply(pointP: ECPoint, n: bigint): ECPoint;

    setCurve(curveName: string): void;

    checkIsPointOnTheCurve(point: ECPoint): boolean;

}

