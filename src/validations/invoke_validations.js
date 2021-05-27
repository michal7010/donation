import {requierd} from "./validations";

const VALIDATIONS = [requierd];

export const validate = value =>
    VALIDATIONS.map(validation => validation(value)).find(errorText => errorText);

