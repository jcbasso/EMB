/**
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#abstract_equality_strict_equality_and_same_value_in_the_specification
 */
export declare enum EqualityAlgorithm {
    AbstractEquality = 0,
    StrictEquality = 1,
    SameValueZero = 2,
    SameValue = 3
}
export default class DistanceHelper {
    static readonly H_REACHED_BUT_NULL = 0.05;
    static readonly H_NOT_NULL = 0.1;
    static readonly H_REACHED_BUT_EMPTY = 0.05;
    static readonly H_NOT_EMPTY = 0.1;
    static readonly MAX_CHAR_DISTANCE = 65536;
    static getDistanceToEqualityNumber(a: number, b: number): number;
    static getDistanceToEqualityString(a: string, b: string): number;
    static getLeftAlignmentDistance(a: string, b: string): number;
    /**
     * compute distance between left and right that is used in collection distance
     * @param left
     * @param right
     * @param equalityRule a rule to decide how to process equality comparison
     */
    static getDistance(left: any, right: any, equalityRule: EqualityAlgorithm): number;
    private static getDistanceToEqualityNumberWithAlgorithm;
    /**
     * Return a h=[0,1] heuristics from a scaled distance, taking into account a starting base
     * @param base
     * @param distance
     * @return
     */
    static heuristicFromScaledDistanceWithBase(base: number, distance: number): number;
}
