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
const MethodReplacementClass_1 = __importDefault(require("../MethodReplacementClass"));
const ReplacementFunction_1 = __importDefault(require("../ReplacementFunction"));
const StringSpecializationInfo_1 = require("../../shared/StringSpecializationInfo");
const StringSpecialization_1 = require("../../shared/StringSpecialization");
const ExecutionTracer_1 = __importDefault(require("../../staticstate/ExecutionTracer"));
const Truthness_1 = __importDefault(require("../../heuristic/Truthness"));
const DistanceHelper_1 = __importStar(require("../../heuristic/DistanceHelper"));
const CollectionsDistanceUtils_1 = __importDefault(require("../CollectionsDistanceUtils"));
class ArrayClassReplacement extends MethodReplacementClass_1.default {
    getReplacements() {
        return [
            new ReplacementFunction_1.default(Array.prototype.includes, ArrayClassReplacement.includes)
        ];
    }
    static isNumberOrString(e) {
        const st = typeof e;
        return st == "number" || st == "string";
    }
}
exports.default = ArrayClassReplacement;
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
ArrayClassReplacement.includes = (idTemplate, caller, searchElement, fromIndex) => {
    if (caller == null || (fromIndex && typeof fromIndex != "number")) {
        return caller.includes(searchElement, fromIndex);
    }
    if (ArrayClassReplacement.isNumberOrString(searchElement) && ExecutionTracer_1.default.isTaintInput(searchElement)) {
        // TODO shall we add all or fromIndex?
        for (let e of caller) {
            if (ArrayClassReplacement.isNumberOrString(e)) {
                ExecutionTracer_1.default.addStringSpecialization(searchElement, new StringSpecializationInfo_1.StringSpecializationInfo(StringSpecialization_1.StringSpecialization.CONSTANT, e));
            }
        }
    }
    const result = caller.includes(searchElement, fromIndex);
    if (idTemplate == null)
        return result;
    const candidates = caller.slice(fromIndex);
    let t;
    if (result) {
        t = new Truthness_1.default(1, DistanceHelper_1.default.H_NOT_NULL);
    }
    else {
        // array.includes employs sameValueZero algorithm
        let d = CollectionsDistanceUtils_1.default.getHeuristicToIncludes(candidates, searchElement, DistanceHelper_1.EqualityAlgorithm.SameValueZero);
        t = new Truthness_1.default(d, 1);
    }
    ExecutionTracer_1.default.executedReplacedMethod(idTemplate, "BOOLEAN" /* BOOLEAN */, t);
    return result;
};
//# sourceMappingURL=ArrayClassReplacement.js.map