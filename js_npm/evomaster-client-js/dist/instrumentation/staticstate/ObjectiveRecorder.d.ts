export default class ObjectiveRecorder {
    /**
     * Key -> the unique numeric id of the coverage objective
     * <br>
     * Value -> heuristic [0,1], where 1 means covered.
     * Only the highest value found so far is kept.
     */
    private static readonly maxObjectiveCoverage;
    /**
     * Keep track of all target ids.
     * In contrast to the other data-structures in this class,
     * this info is when the SUT classes are loaded.
     * However, it is also important to notice that which classes
     * are loaded depends on what is executed.
     * We can force the loading of all classes, but usually that
     * is not a good idea, as static initializers might have
     * side effects.
     * However, we can do that at the end of the search once we are
     * done.
     * This can be useful to calculate how many targets we have missed.
     */
    private static readonly allTargets;
    /**
     * Key -> id of an objective/target
     * <br>
     * Value -> a mapped unique id in numeric format
     * <br>
     * Note: we need this mapping to reduce the id size,
     * as to reduce TCP bandwidth consumption when communicating
     * with the EvoMaster process
     */
    private static idMapping;
    private static reversedIdMapping;
    /**
     * Counter used to generate unique numeric ids for idMapping
     */
    private static idMappingCounter;
    /**
     * Counter used to get unique ids, where the number ordering and continuity
     * is not important. In other words, if an entity gets "n", that does not
     * mean that its next call will get "n+1", just a value "k" with "k!=n"
     */
    private static counter;
    /**
     * It will be the EvoMaster process that does ask the SUT controller
     * which objectives to report on.
     * This is needed to save bandwidth, as coverage of already covered objectives
     * would be redundant information (this is due to the use of archives).
     * However, EvoMaster process can only know of objectives that have been
     * reported so far. Therefore, we need a way to report every time a
     * new objective is found (not necessarily fully covered).
     * Here, we keep track of objective ids that have been encountered
     * for the first time and have not been reported yet to the EvoMaster
     * process.
     */
    private static readonly firstTimeEncountered;
    /**
     * Reset all the static state in this class
     */
    static reset(alsoAtLoadTime: boolean): void;
    static getNumberOfTargets(): number;
    /**
     * Mark the existence of a testing target.
     * This is important to do when SUT classes are loaded
     * and instrumented.
     * This cannot be done with the added probes in the
     * instrumentation, as what executed in the SUT depends
     * on test data.
     *
     * @param target a descriptive string representing the id of the target
     */
    static registerTarget(target: string): void;
    /**
     * @return a coverage value in [0,1]
     */
    static computeCoverage(prefix: string): number;
    static getTargetsSeenFirstTime(): Array<string>;
    static clearFirstTimeEncountered(): void;
    /**
     * @param descriptiveId of the objective/target
     * @param value         of the coverage heuristic, in [0,1]
     */
    static update(descriptiveId: string, value: number): void;
    static getMappedId(descriptiveId: string): number;
    static getDescriptiveIds(ids: Set<number>): Map<number, string>;
    static getDescriptiveId(id: number): string;
}
