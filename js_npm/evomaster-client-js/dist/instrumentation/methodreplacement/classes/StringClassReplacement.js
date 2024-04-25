"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MethodReplacementClass_1 = __importDefault(require("../MethodReplacementClass"));
const ReplacementFunction_1 = __importDefault(require("../ReplacementFunction"));
const Truthness_1 = __importDefault(require("../../heuristic/Truthness"));
const ExecutionTracer_1 = __importDefault(require("../../staticstate/ExecutionTracer"));
const DistanceHelper_1 = __importDefault(require("../../heuristic/DistanceHelper"));
const TruthnessUtils_1 = __importDefault(require("../../heuristic/TruthnessUtils"));
const HeuristicsForBooleans_1 = __importDefault(require("../../heuristic/HeuristicsForBooleans"));
class StringClassReplacement extends MethodReplacementClass_1.default {
    getReplacements() {
        return [
            new ReplacementFunction_1.default("".startsWith, StringClassReplacement.startsWith),
            new ReplacementFunction_1.default("".endsWith, StringClassReplacement.endsWith),
            new ReplacementFunction_1.default("".includes, StringClassReplacement.includes),
            new ReplacementFunction_1.default("".indexOf, StringClassReplacement.indexOf),
            new ReplacementFunction_1.default("".lastIndexOf, StringClassReplacement.lastIndexOf)
        ];
    }
}
exports.default = StringClassReplacement;
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
StringClassReplacement.startsWith = (idTemplate, caller, searchString, position) => {
    if (caller === null || caller === undefined || typeof searchString !== "string" || (position && typeof position !== "number")) {
        //can't compute distance, so just fallback on standard behavior
        return caller.startsWith(searchString, position);
    }
    const prefix = searchString;
    const result = caller.startsWith(prefix, position);
    if (idTemplate == null) {
        return result;
    }
    const pl = prefix.length;
    const toffset = (position !== null && position !== void 0 ? position : 0);
    /*
        The penalty when there is a mismatch of lengths/offset
        should be at least pl, as should be always worse than
        when doing "equals" comparisons.
        Furthermore, need to add extra penalty in case string is
        shorter than prefix
     */
    let penalty = pl;
    if (caller.length < pl) {
        penalty += (pl - caller.length);
    }
    let t;
    if (toffset < 0) {
        const dist = (-toffset + penalty) * DistanceHelper_1.default.MAX_CHAR_DISTANCE;
        t = new Truthness_1.default(1 / (1 + dist), 1);
    }
    else if (toffset > caller.length - pl) {
        const dist = (toffset + penalty) * DistanceHelper_1.default.MAX_CHAR_DISTANCE;
        t = new Truthness_1.default(1 / (1 + dist), 1);
    }
    else {
        const len = Math.min(prefix.length, caller.length);
        const sub = caller.substring(toffset, Math.min(toffset + len, caller.length));
        t = TruthnessUtils_1.default.getEqualityTruthnessString(sub, prefix);
    }
    ExecutionTracer_1.default.executedReplacedMethod(idTemplate, "BOOLEAN" /* BOOLEAN */, t);
    HeuristicsForBooleans_1.default.updateLastEvaluation(t);
    return result;
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
StringClassReplacement.endsWith = (idTemplate, caller, searchString, length) => {
    if (caller === null || caller === undefined || typeof searchString !== "string" || (length && typeof length !== "number")) {
        //can't compute distance, so just fallback on standard behavior
        return caller.endsWith(searchString, length);
    }
    const n = length ? length : caller.length;
    const startingPoint = n - searchString.length;
    if (n < 0) {
        return caller.endsWith(searchString, length);
    }
    return StringClassReplacement.startsWith(idTemplate, caller, searchString, startingPoint);
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
StringClassReplacement.includes = (idTemplate, caller, searchString, position) => {
    if (caller === null || caller === undefined || typeof searchString !== "string" || (position && typeof position !== "number")) {
        //can't compute distance, so just fallback on standard behavior
        return caller.includes(searchString, position);
    }
    const result = caller.includes(searchString, position);
    if (idTemplate == null) {
        return result;
    }
    const n = position ? position : 0;
    const source = caller.substring(n);
    let t;
    if (result) {
        t = new Truthness_1.default(1, HeuristicsForBooleans_1.default.FLAG_NO_EXCEPTION);
    }
    else if (source.length <= searchString.length) {
        t = TruthnessUtils_1.default.getEqualityTruthnessString(source, searchString);
    }
    else {
        let best = Number.MAX_VALUE;
        for (let i = 0; i < (source.length - searchString.length) + 1; i++) {
            const sub = source.substring(i, i + searchString.length);
            const h = DistanceHelper_1.default.getLeftAlignmentDistance(sub, searchString);
            if (h < best) {
                best = h;
            }
        }
        t = new Truthness_1.default(1.0 / (1.0 + best), 1);
    }
    ExecutionTracer_1.default.executedReplacedMethod(idTemplate, "BOOLEAN" /* BOOLEAN */, t);
    HeuristicsForBooleans_1.default.updateLastEvaluation(t);
    return result;
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
StringClassReplacement.indexOf = (idTemplate, caller, searchString, fromIndex) => {
    let position = fromIndex;
    if (fromIndex >= caller.length) {
        position = 0; // damn you JS!!! what an inconsistent behavior compared to "includes"...
    }
    StringClassReplacement.includes(idTemplate, caller, searchString, position);
    return caller.indexOf(searchString, fromIndex);
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
StringClassReplacement.lastIndexOf = (idTemplate, caller, searchString, fromIndex) => {
    let position = fromIndex;
    if (fromIndex >= caller.length) {
        position = 0;
    }
    StringClassReplacement.includes(idTemplate, caller, searchString, position);
    return caller.lastIndexOf(searchString, fromIndex);
};
//# sourceMappingURL=StringClassReplacement.js.map