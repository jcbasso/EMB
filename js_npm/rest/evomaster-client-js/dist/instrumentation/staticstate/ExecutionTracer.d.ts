/**
 * Methods of this class will be injected in the SUT to
 * keep track of what the tests do execute/cover.
 */
import TargetInfo from "../TargetInfo";
import Action from "../Action";
import AdditionalInfo from "../AdditionalInfo";
import Truthness from "../heuristic/Truthness";
import { ReplacementType } from "../methodreplacement/ReplacementType";
import { TaintType } from "../shared/TaintType";
import { StringSpecializationInfo } from "../shared/StringSpecializationInfo";
export default class ExecutionTracer {
    /**
     * Key -> the unique descriptive id of the coverage objective
     */
    private static readonly objectiveCoverage;
    /**
     * A test case can be composed by 1 or more actions, eg HTTP calls.
     * When we get the best distance for a testing target, we might
     * also want to know which action in the test led to it.
     */
    private static actionIndex;
    /**
     * A set of possible values used in the tests, needed for some kinds
     * of taint analyses
     */
    private static inputVariables;
    /**
     * Besides code coverage, there might be other events that we want to
     * keep track during test execution.
     * We keep track of it separately for each action
     */
    private static readonly additionalInfoList;
    static reset(): void;
    static setAction(action: Action): void;
    /**
     * Check if the given input represented a tainted value from the test cases.
     * This could be based on static info of the input (eg, according to a precise
     * name convention given by TaintInputName), or dynamic info given directly by
     * the test itself (eg, the test at action can register a list of values to check
     * for)
     */
    static isTaintInput(input: string): boolean;
    static handleTaintForStringEquals(left: string, right: string, ignoreCase: boolean): void;
    static getTaintType(input: string): TaintType;
    static exposeAdditionalInfoList(): Array<AdditionalInfo>;
    static addStringSpecialization(taintInputName: string, info: StringSpecializationInfo): void;
    static markLastExecutedStatement(lastLine: string): void;
    static completedLastExecutedStatement(lastLine: string): void;
    static getInternalReferenceToObjectiveCoverage(): Map<String, TargetInfo>;
    /**
     * @return the number of objectives that have been encountered
     * during the test execution
     */
    static getNumberOfObjectives(prefix?: string): number;
    /**
     * Note: only the objectives encountered so far can have
     * been recorded. So, this is a relative value, not based
     * on the code of the whole SUT (just the parts executed so far).
     * Therefore, it is quite useless for binary values (ie 0 or 1),
     * like current implementation of basic line coverage.
     *
     * @param prefix used for string matching of which objectives types
     *               to consider, eg only lines or only branches.
     *               Use "" or {@code null} to pick up everything
     * @return
     */
    static getNumberOfNonCoveredObjectives(prefix: string): number;
    static getNonCoveredObjectives(prefix: string): Set<string>;
    static getValue(id: string): number;
    /**
     * @param id specifies the target id
     * @return whether the target is reached
     *
     * note that it is only useful for testing
     */
    static isTargetReached(id: string): boolean;
    static updateObjective(id: string, value: number): void;
    static executedReplacedMethod(idTemplate: string, type: ReplacementType, t: Truthness): void;
    /**
     *
     * WARNING: here we do differently from Java, as we can not rely on reflection
     * to get unique id for methods.
     *
     * We rather do "statement" coverage, and have a further id for it.
     */
    static enteringStatement(fileName: string, line: number, statementId: number): void;
    static completedStatement(fileName: string, line: number, statementId: number): void;
    /**
     *  Report on whether method calls have been successfully completed.
     *  Failures can happen due to thrown exceptions.
     *
     * @param fileName
     * @param line
     * @param index    as there can be many method calls on same line, need to differentiate them
     * @param completed whether the method call was successfully completed.
     */
    static executingMethod(fileName: string, line: number, index: number, completed: boolean): void;
    static updateBranch(fileName: string, line: number, branchId: number, t: Truthness): void;
}
