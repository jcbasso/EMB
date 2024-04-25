import ReplacementFunction from "./ReplacementFunction";
export default class ReplacementList {
    /**
     * Key -> target function for which a replacement exists
     *
     * Constraint: key === value.target
     */
    private static readonly replacements;
    static getReplacement(target: Function): ReplacementFunction;
    static init(): void;
}
