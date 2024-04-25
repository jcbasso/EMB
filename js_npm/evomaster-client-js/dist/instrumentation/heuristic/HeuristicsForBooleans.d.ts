import Truthness from "./Truthness";
export default class HeuristicsForBooleans {
    static readonly FLAG_NO_EXCEPTION = 0.01;
    static readonly EXCEPTION: number;
    private static readonly validOps;
    private static lastEvaluation;
    static handleNot(value: any): any;
    /**
     * This is mainly needed in MethodReplacement
     */
    static updateLastEvaluation(t: Truthness): void;
    static getLastEvaluation(): Truthness;
    static clearLastEvaluation(): void;
    static evaluateAnd(left: () => any, right: () => any, isRightPure: boolean, fileName: string, line: number, branchId: number): any;
    static evaluateOr(left: () => any, right: () => any, isRightPure: boolean, fileName: string, line: number, branchId: number): any;
    static evaluate(left: any, op: string, right: any, fileName: string, line: number, branchId: number): any;
    static compare(left: any, op: string, right: any): Truthness;
    static handleTernary(f: () => any, fileName: string, line: number, index: number): any;
}
