import { StringSpecialization } from "./StringSpecialization";
import { TaintType } from "./TaintType";
export declare class StringSpecializationInfo {
    private readonly stringSpecialization;
    /**
     * A possible value to provide context to the specialization.
     * For example, if the specialization is a CONSTANT, then the "value" here would
     * the content of the constant
     */
    private readonly value;
    private readonly type;
    constructor(stringSpecialization: StringSpecialization, value: string, taintType?: TaintType);
    getStringSpecialization(): StringSpecialization;
    getValue(): string;
    getType(): TaintType;
    equalsTo(other: StringSpecializationInfo): boolean;
}
