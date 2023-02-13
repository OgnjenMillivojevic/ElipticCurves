import { CharacteristicsModel } from "./characteristics.model";
import { GeneratorModel } from "./generator.model";
import { ParamsModel } from "./param.model";

export interface CurveModel {

    name: string;

    category: string;

    desc: string;

    oid?: string;

    field: any;

    form: string;

    params: ParamsModel;

    generator?: GeneratorModel;

    order: string;

    cofactor: string;

    aliases?: string[];

    characteristics?: CharacteristicsModel;
}

