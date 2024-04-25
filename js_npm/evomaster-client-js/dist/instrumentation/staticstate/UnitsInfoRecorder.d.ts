/**
 * Keep track of static info on the SUT related to its classes,
 * eg total number of lines
 *
 */
export default class UnitsInfoRecorder {
    private static readonly unitNames;
    private static numberOfLines;
    private static numberOfBranches;
    /**
     * Only need for tests
     */
    static reset(): void;
    static markNewUnit(name: string): void;
    static markNewLine(): void;
    static markNewBranch(): void;
    static getNumberOfUnits(): number;
    static getUnitNames(): Set<string>;
    static getNumberOfLines(): number;
    static getNumberOfBranches(): number;
}
