import ActionDto from "./api/dto/ActionDto";
import AuthenticationDto from "./api/dto/AuthenticationDto";
import ProblemInfo from "./api/dto/problem/ProblemInfo";
import { OutputFormat } from "./api/dto/SutInfoDto";
import UnitsInfoDto from "./api/dto/UnitsInfoDto";
import SutHandler from "./SutHandler";
import AdditionalInfo from "../instrumentation/AdditionalInfo";
import TargetInfo from "../instrumentation/TargetInfo";
export default abstract class SutController implements SutHandler {
    abstract resetStateOfSUT(): Promise<void>;
    abstract startSut(): Promise<string>;
    abstract stopSut(): Promise<void>;
    setupForGeneratedTest(): Promise<void>;
    /**
     * @return a list of valid authentication credentials, or {@code null} if
     *      * none is necessary
     */
    abstract getInfoForAuthentication(): AuthenticationDto[];
    /**
     * @return the format in which the test cases should be generated
     */
    abstract getPreferredOutputFormat(): OutputFormat;
    /**
     * Check if the system under test (SUT) is running and fully initialized
     *
     * @return true if the SUT is running
     */
    abstract isSutRunning(): boolean;
    /**
     * Depending of which kind of SUT we are dealing with (eg, REST, GraphQL or SPA frontend),
     * there is different info that must be provided
     *
     * @return an instance of object with all the needed data for the specific addressed problem
     */
    abstract getProblemInfo(): ProblemInfo;
    /**
     * @return additional info for each action in the test.
     * The list is ordered based on the action index.
     */
    getAdditionalInfoList(): Array<AdditionalInfo>;
    getUnitsInfoDto(): UnitsInfoDto;
    /**
     * Check if instrumentation is on.
     *
     * @return true if the instrumentation is on
     */
    isInstrumentationActivated(): boolean;
    /**
     * Re-initialize all internal data to enable a completely new search phase
     * which should be independent from previous ones
     */
    newSearch(): void;
    /**
     * Re-initialize some internal data needed before running a new test
     */
    newTest(): void;
    getTargetInfos(ids: Set<number>): Array<TargetInfo>;
    /**
     * As some heuristics are based on which action (eg HTTP call, or click of button)
     * in the test sequence is executed, and their order, we need to keep track of which
     * action does cover what.
     *
     * @param dto the DTO with the information about the action (eg its index in the test)
     */
    newAction(dto: ActionDto): void;
}
