"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents possible extra heuristics related to the code
 * execution and that do apply to all the reached testing targets.
 *
 * Example: rewarding SQL "select" operations that return non-empty sets
 */
class ExtraHeuristicsDto {
    constructor() {
        /**
         * List of extra heuristic values we want to optimize
         */
        this.heuristics = [];
        // TODO
        // databaseExecutionDto: ExecutionDto;
    }
}
exports.default = ExtraHeuristicsDto;
//# sourceMappingURL=ExtraHeuristicsDto.js.map