/**
 * This represents the same data as in TargetInfoDto.
 * Here is replicated to have a clear distinction on how
 * such data is used
 */
export default class TargetInfo {
    static notReached(theID: number): TargetInfo;
    readonly mappedId: number;
    readonly descriptiveId: string;
    /**
     * heuristic [0,1], where 1 means covered
     */
    readonly value: number;
    /**
     * Can be negative if target was never reached.
     * But this means that {@code value} must be 0
     */
    readonly actionIndex: number;
    constructor(mappedId: number, descriptiveId: string, value: number, actionIndex: number);
    withMappedId(theID: number): TargetInfo;
    withNoDescriptiveId(): TargetInfo;
}
