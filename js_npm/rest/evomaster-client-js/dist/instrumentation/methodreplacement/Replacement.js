"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReplacementList_1 = __importDefault(require("./ReplacementList"));
class Replacement {
    static replaceCall(idTemplate, caller, targetFunction, ...inputs) {
        const r = ReplacementList_1.default.getReplacement(targetFunction);
        if (r) {
            return r.replacement(idTemplate, caller, ...inputs);
        }
        else {
            return targetFunction.call(caller, ...inputs);
        }
    }
}
exports.default = Replacement;
//# sourceMappingURL=Replacement.js.map