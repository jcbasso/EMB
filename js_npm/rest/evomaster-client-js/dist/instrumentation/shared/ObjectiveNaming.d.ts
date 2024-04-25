import { ReplacementType } from "../methodreplacement/ReplacementType";
export default class ObjectiveNaming {
    /**
     * Prefix identifier for file coverage objectives.
     * A file is "covered" if at least one of its lines is executed.
     *
     * Note: this is different from Java where we rather look at CLASS
     */
    static readonly FILE: string;
    /**
     * Prefix identifier for line coverage objectives
     */
    static readonly LINE: string;
    /**
     * Prefix identifier for statement coverage objectives
     */
    static readonly STATEMENT: string;
    /**
     * Prefix identifier for branch coverage objectives
     */
    static readonly BRANCH: string;
    /**
     * Tag used in a branch id to specify it is for the "true"/then branch
     */
    static readonly TRUE_BRANCH: string;
    /**
     * Tag used in a branch id to specify it is for the "false"/else branch
     */
    static readonly FALSE_BRANCH: string;
    /**
     * Prefix identifier for MethodReplacement objectives, where we want
     * to cover both possible outcomes, eg true and false
     */
    static readonly METHOD_REPLACEMENT: string;
    /**
     * Prefix identifier for objectives related to calling methods without exceptions
     */
    static readonly SUCCESS_CALL: string;
    static fileObjectiveName(fileId: string): string;
    static getFileIdFromFileObjectiveName(target: string): string;
    static lineObjectiveName(fileId: string, line: number): string;
    static statementObjectiveName(fileId: string, line: number, index: number): string;
    static successCallObjectiveName(fileId: string, line: number, index: number): string;
    static methodReplacementObjectiveNameTemplate(fileId: string, line: number, index: number): string;
    static methodReplacementObjectiveName(template: string, result: boolean, type: ReplacementType): string;
    static branchObjectiveName(fileId: string, line: number, branchId: number, thenBranch: boolean): string;
    static padNumber(value: number): string;
}
