"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UnitsInfoDto_1 = __importDefault(require("./api/dto/UnitsInfoDto"));
const ExecutionTracer_1 = __importDefault(require("../instrumentation/staticstate/ExecutionTracer"));
const ObjectiveRecorder_1 = __importDefault(require("../instrumentation/staticstate/ObjectiveRecorder"));
const TargetInfo_1 = __importDefault(require("../instrumentation/TargetInfo"));
const Action_1 = __importDefault(require("../instrumentation/Action"));
const UnitsInfoRecorder_1 = __importDefault(require("../instrumentation/staticstate/UnitsInfoRecorder"));
class SutController {
    setupForGeneratedTest() {
        //nothing to do, at least for now???
        return Promise.resolve(undefined);
    }
    // ------- other methods that MUST not be overridden -----------
    /*
        WARNING: there is no way in Typescript/Javascript to prevent a method from being
        overridden...
     */
    /**
     * @return additional info for each action in the test.
     * The list is ordered based on the action index.
     */
    getAdditionalInfoList() {
        return [...ExecutionTracer_1.default.exposeAdditionalInfoList()];
    }
    getUnitsInfoDto() {
        const dto = new UnitsInfoDto_1.default();
        dto.unitNames = Array.from(UnitsInfoRecorder_1.default.getUnitNames());
        dto.numberOfLines = UnitsInfoRecorder_1.default.getNumberOfLines();
        dto.numberOfBranches = UnitsInfoRecorder_1.default.getNumberOfBranches();
        return dto;
    }
    /**
     * Check if instrumentation is on.
     *
     * @return true if the instrumentation is on
     */
    isInstrumentationActivated() {
        return ObjectiveRecorder_1.default.getNumberOfTargets() > 0;
    }
    /**
     * Re-initialize all internal data to enable a completely new search phase
     * which should be independent from previous ones
     */
    newSearch() {
        ExecutionTracer_1.default.reset();
        ObjectiveRecorder_1.default.reset(false);
    }
    /**
     * Re-initialize some internal data needed before running a new test
     */
    newTest() {
        // actionIndex = -1;
        // resetExtraHeuristics();
        // extras.clear();
        ExecutionTracer_1.default.reset();
        /*
           Note: it should be fine but, if for any reason EM did not do
           a GET on the targets, then all those newly encountered targets
           would be lost, as EM will have no way to ask for them later, unless
           we explicitly say to return ALL targets
         */
        ObjectiveRecorder_1.default.clearFirstTimeEncountered();
    }
    getTargetInfos(ids) {
        const list = new Array();
        const objectives = ExecutionTracer_1.default.getInternalReferenceToObjectiveCoverage();
        ids.forEach(id => {
            const descriptiveId = ObjectiveRecorder_1.default.getDescriptiveId(id);
            let info = objectives.get(descriptiveId);
            if (!info) {
                info = TargetInfo_1.default.notReached(id);
            }
            else {
                info = info.withMappedId(id).withNoDescriptiveId();
            }
            list.push(info);
        });
        /*
         *  If new targets were found, we add them even if not requested by EM
         */
        ObjectiveRecorder_1.default.getTargetsSeenFirstTime().forEach(s => {
            const mappedId = ObjectiveRecorder_1.default.getMappedId(s);
            const info = objectives.get(s).withMappedId(mappedId);
            list.push(info);
        });
        return list;
    }
    /**
     * As some heuristics are based on which action (eg HTTP call, or click of button)
     * in the test sequence is executed, and their order, we need to keep track of which
     * action does cover what.
     *
     * @param dto the DTO with the information about the action (eg its index in the test)
     */
    newAction(dto) {
        /*
        if (dto.index > extras.size()) {
            extras.add(computeExtraHeuristics());
        }
        this.actionIndex = dto.index;
        resetExtraHeuristics();
        newActionSpecificHandler(dto);
         */
        ExecutionTracer_1.default.setAction(new Action_1.default(dto.index, new Set(dto.inputVariables)));
    }
}
exports.default = SutController;
//# sourceMappingURL=SutController.js.map