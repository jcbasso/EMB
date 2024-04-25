export default class InjectedFunctions {
    static registerTargets(idArray: Array<string>): void;
    static enteringStatement(fileName: string, line: number, statementId: number): void;
    static completedStatement(fileName: string, line: number, statementId: number): void;
    static completingStatement(value: any, fileName: string, line: number, statementId: number): any;
    /**
     *  Used for statements like:
     *  - return (with no data)
     *  - continue
     *  - break
     *  - throw
     */
    static markStatementForCompletion(fileName: string, line: number, statementId: number): void;
    static cmp(left: any, op: string, right: any, fileName: string, line: number, branchId: number): any;
    static or(left: () => any, right: () => any, isRightPure: boolean, fileName: string, line: number, branchId: number): any;
    static and(left: () => any, right: () => any, isRightPure: boolean, fileName: string, line: number, branchId: number): any;
    static not(value: any): any;
    static callBase(f: () => any): any;
    static callTracked(fileName: string, line: number, branchId: number, obj: any, functionName: string, ...args: any[]): any;
    static ternary(f: () => any, fileName: string, line: number, index: number): any;
    static squareBrackets(fileName: string, line: number, branchId: number, object: Object, property: any): any;
}
