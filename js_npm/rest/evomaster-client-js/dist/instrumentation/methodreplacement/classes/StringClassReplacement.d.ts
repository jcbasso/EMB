import MethodReplacementClass from "../MethodReplacementClass";
import ReplacementFunction from "../ReplacementFunction";
export default class StringClassReplacement extends MethodReplacementClass {
    getReplacements(): Array<ReplacementFunction>;
    static startsWith: (idTemplate: string, caller: string, searchString: any, position?: any) => boolean;
    static endsWith: (idTemplate: string, caller: string, searchString: any, length?: any) => boolean;
    static includes: (idTemplate: string, caller: string, searchString: any, position?: any) => boolean;
    static indexOf: (idTemplate: string, caller: string, searchString: any, fromIndex?: any) => Number;
    static lastIndexOf: (idTemplate: string, caller: string, searchString: any, fromIndex?: any) => Number;
}
