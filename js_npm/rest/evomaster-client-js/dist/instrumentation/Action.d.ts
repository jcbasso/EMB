export default class Action {
    private readonly index;
    /**
     * A list (possibly empty) of String values used in the action.
     * This info can be used for different kinds of taint analysis, eg
     * to check how such values are used in the SUT
     */
    private readonly inputVariables;
    constructor(index: number, inputVariables: Set<string>);
    getIndex(): number;
    getInputVariables(): Set<string>;
}
