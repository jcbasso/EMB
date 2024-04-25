import AdditionalInfoDto from "./AdditionalInfoDto";
import ExtraHeuristicsDto from "./ExtraHeuristicsDto";
import TargetInfoDto from "./TargetInfoDto";
export default class TestResultsDto {
    targets: TargetInfoDto[];
    additionalInfoList: AdditionalInfoDto[];
    extraHeuristics: ExtraHeuristicsDto[];
}
