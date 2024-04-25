"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of extra heuristic.
 * Note: for the moment, we only have heuristics on SQL commands
 */
var Type;
(function (Type) {
    Type["SQL"] = "SQL";
})(Type = exports.Type || (exports.Type = {}));
/**
 * Should we try to minimize or maximize the heuristic?
 */
var Objective;
(function (Objective) {
    /**
     * The lower the better.
     * Minimum is 0. It can be considered as a "distance" to minimize.
     */
    Objective["MINIMIZE_TO_ZERO"] = "MINIMIZE_TO_ZERO";
    /**
     * The higher the better.
     * Note: given x, we could rather considered the value
     * 1/x to minimize. But that wouldn't work for negative x,
     * and also would make debugging more difficult (ie better to
     * look at the raw, non-transformed values).
     */
    Objective["MAXIMIZE"] = "MAXIMIZE";
})(Objective = exports.Objective || (exports.Objective = {}));
class HeuristicEntryDto {
}
exports.HeuristicEntryDto = HeuristicEntryDto;
//# sourceMappingURL=HeuristicEntryDto.js.map