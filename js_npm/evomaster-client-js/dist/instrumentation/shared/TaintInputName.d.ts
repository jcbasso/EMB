export declare class TaintInputName {
    private static readonly PREFIX;
    private static readonly POSTFIX;
    private static regex;
    private static partialMatch;
    private static fullMatch;
    /**
     * Check if a given string value is a tainted value
     */
    static isTaintInput(value: string): boolean;
    static includesTaintInput(value: string): boolean;
    /**
     * Create a tainted value, with the input id being part of it
     */
    static getTaintName(id: number): string;
}
