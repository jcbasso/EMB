import MethodReplacementClass from "../MethodReplacementClass";
import ReplacementFunction from "../ReplacementFunction";
export default class ArrayClassReplacement extends MethodReplacementClass {
    getReplacements(): Array<ReplacementFunction>;
    static includes: (idTemplate: string, caller: any[], searchElement: any, fromIndex?: any) => boolean;
    static isNumberOrString(e: any): boolean;
}
