export default class FunctionCallHandler {
    static handleFunctionCallBase(f: () => any): any;
    static handleFunctionCallTracked(fileName: string, line: number, branchId: number, obj: any, functionName: string, ...args: any[]): any;
}
