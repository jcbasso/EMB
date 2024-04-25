"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringClassReplacement_1 = __importDefault(require("./classes/StringClassReplacement"));
const ArrayClassReplacement_1 = __importDefault(require("./classes/ArrayClassReplacement"));
/*
    For list of global objects, see:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 */
class ReplacementList {
    static getReplacement(target) {
        return ReplacementList.replacements.get(target);
    }
    static init() {
        new StringClassReplacement_1.default().getReplacements().forEach(f => {
            ReplacementList.replacements.set(f.target, f);
        });
        new ArrayClassReplacement_1.default().getReplacements().forEach(f => {
            ReplacementList.replacements.set(f.target, f);
        });
    }
}
exports.default = ReplacementList;
/**
 * Key -> target function for which a replacement exists
 *
 * Constraint: key === value.target
 */
ReplacementList.replacements = new Map();
ReplacementList.init();
//# sourceMappingURL=ReplacementList.js.map