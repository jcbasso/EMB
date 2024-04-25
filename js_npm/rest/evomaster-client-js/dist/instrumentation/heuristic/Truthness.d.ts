/**
 * 2 values: one for true, and one for false.
 * The values are in [0,1].
 * One of them is necessarily equal to 1 (which
 * represents the actual result of the expression),but not both, ie
 * an expression evaluates to either true or false.
 * The non-1 value represents how close the other option
 * would had been from being taken
 *
 *
 * NOTE: had to change it compared to JVM, as here we need to handle the
 * case of exceptions, in which a predicate can be neither true nor false
 */
export default class Truthness {
    private readonly ofTrue;
    private readonly ofFalse;
    constructor(ofTrue: number, ofFalse: number);
    invert(): Truthness;
    rescaleFromMin(min: number): Truthness;
    /**
     * scales to a positive double value to the [0,1] range
     *
     * @param v a non-negative double value
     * @return
     */
    static normalizeValue(v: number): number;
    /**
     * @return a value in [0,1], where 1 means the expression evaluated to true
     */
    getOfTrue(): number;
    isTrue(): boolean;
    /**
     * @return a value in [0,1], where 1 means the expression evaluated to false
     */
    getOfFalse(): number;
    isFalse(): boolean;
}
