"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectiveNaming_1 = __importDefault(require("../shared/ObjectiveNaming"));
const HeuristicsForBooleans_1 = __importDefault(require("../heuristic/HeuristicsForBooleans"));
const ExecutionTracer_1 = __importDefault(require("../staticstate/ExecutionTracer"));
const StringSpecialization_1 = require("../shared/StringSpecialization");
const StringSpecializationInfo_1 = require("../shared/StringSpecializationInfo");
const Truthness_1 = __importDefault(require("../heuristic/Truthness"));
const DistanceHelper_1 = __importStar(require("../heuristic/DistanceHelper"));
const CollectionsDistanceUtils_1 = __importDefault(require("./CollectionsDistanceUtils"));
class SquareBracketsHandler {
    /**
     * handle tt for squareBrackets, such as x["foo"]
     * @param fileName
     * @param line
     * @param branchId
     * @param object
     * @param property
     */
    static squareBracketInMemberExpression(fileName, line, branchId, object, property) {
        HeuristicsForBooleans_1.default.clearLastEvaluation();
        const idTemplate = ObjectiveNaming_1.default.methodReplacementObjectiveNameTemplate(fileName, line, branchId);
        const objType = typeof object;
        if (object === null || object === undefined ||
            // handle only object type
            objType != "object" ||
            // handle taint analysis for null, undefined, number and string
            (property && ((typeof property) != "number") && ((typeof property) != "string"))) {
            /*
                note that null or undefined is allowed, x = {null:"foo", undefined:"bar"}

                for other types of the property,
                    do not compute distance for them yet, eg, object,
                    might support later
             */
            return object[property];
        }
        const keys = Object.keys(object);
        if (ExecutionTracer_1.default.isTaintInput(property)) {
            keys.forEach(s => {
                ExecutionTracer_1.default.addStringSpecialization(property, new StringSpecializationInfo_1.StringSpecializationInfo(StringSpecialization_1.StringSpecialization.CONSTANT, s));
            });
        }
        const exist = property in object;
        let h;
        if (exist) {
            h = new Truthness_1.default(1, DistanceHelper_1.default.H_NOT_NULL);
        }
        else {
            /*
                we might set limit here for squareBrackets, ie, check all properties in the obj

                we allow the abstract equality comparison to compute the distance
             */
            let d = CollectionsDistanceUtils_1.default.getHeuristicToIncludes(keys, property, DistanceHelper_1.EqualityAlgorithm.AbstractEquality);
            h = new Truthness_1.default(d, 1);
        }
        ExecutionTracer_1.default.executedReplacedMethod(idTemplate, "BOOLEAN" /* BOOLEAN */, h);
        HeuristicsForBooleans_1.default.clearLastEvaluation();
        return object[property];
    }
}
exports.default = SquareBracketsHandler;
//# sourceMappingURL=SquareBracketsHandler.js.map