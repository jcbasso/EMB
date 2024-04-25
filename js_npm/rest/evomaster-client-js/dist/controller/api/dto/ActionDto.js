"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionDto {
    constructor() {
        /**
         * A list (possibly empty) of String values used in the action.
         * This info can be used for different kinds of taint analysis, eg
         * to check how such values are used in the SUT
         */
        this.inputVariables = new Array();
    }
}
exports.default = ActionDto;
//# sourceMappingURL=ActionDto.js.map