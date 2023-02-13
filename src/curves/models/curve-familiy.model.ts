import { CurveModel } from "./curve.model";

export interface CurveFamilyModel {

    name: string;

    desc: string;

    curves: CurveModel[];
}