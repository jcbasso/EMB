"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectiveNaming_1 = __importDefault(require("../shared/ObjectiveNaming"));
const Replacement_1 = __importDefault(require("./Replacement"));
const HeuristicsForBooleans_1 = __importDefault(require("../heuristic/HeuristicsForBooleans"));
/*
    Note: this class was needed to avoid import cycles between replacement classes and ReplacementList
 */
class FunctionCallHandler {
    static handleFunctionCallBase(f) {
        HeuristicsForBooleans_1.default.clearLastEvaluation();
        const res = f();
        HeuristicsForBooleans_1.default.clearLastEvaluation();
        return res;
    }
    static handleFunctionCallTracked(fileName, line, branchId, obj, functionName, ...args) {
        HeuristicsForBooleans_1.default.clearLastEvaluation();
        const idTemplate = ObjectiveNaming_1.default.methodReplacementObjectiveNameTemplate(fileName, line, branchId);
        //const res = obj[functionName](...args);
        const res = Replacement_1.default.replaceCall(idTemplate, obj, obj[functionName], ...args);
        HeuristicsForBooleans_1.default.clearLastEvaluation();
        return res;
    }
}
exports.default = FunctionCallHandler;
//# sourceMappingURL=FunctionCallHandler.js.map