
import { CURVE_FAMILIES } from "../constants/curves.constants";
import { CurveModel } from "./models/curve.model";


export enum CurveFamily {
    Weierstrass = "Weierstrass",
    TwistedEdwards = "TwistedEdwards",
    Montgomery = "Montgomery"
}

export class Curves {

    getAllCurves(): CurveModel[] {
        return CURVE_FAMILIES.map((x) => x.curves).flat();
    }

    getCurvesByCriteria(form: string, fieldType: string, generatoreRequired: boolean): CurveModel[] {

        let curves: CurveModel[] = this.getAllCurves();

        if (form != 'All')
            curves = curves.filter((x: CurveModel) => x.form == form);

        if (fieldType != 'All')
            curves = curves.filter((x: CurveModel) => x.field.type == fieldType);

        if (generatoreRequired)
            curves = curves.filter((x: CurveModel) => x.generator);

        return curves;
    }

    getSpecificFormCurves(form: CurveFamily): CurveModel[] {

        return this.getAllCurves().filter((x: CurveModel) => x.form == form);
    }

    getCurve(name: string): CurveModel | undefined {

        return this.getAllCurves().find((x: CurveModel) => x.name == name);
    }

    getFormCurve(form: CurveFamily, name: string): CurveModel | undefined {

        return this.getAllCurves().find((x: CurveModel) => x.name == name && x.form == form);
    }

    getCurveOrder(name: string): string | undefined {

        let curve = this.getCurve(name);
        if (curve) return curve.order
    }

}