"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Action {
    constructor(index, inputVariables) {
        this.index = index;
        this.inputVariables = new Set(inputVariables);
    }
    getIndex() {
        return this.index;
    }
    getInputVariables() {
        //TODO consider to use Immutable.js or equivalent
        return new Set(this.inputVariables);
    }
}
exports.default = Action;
//# sourceMappingURL=Action.js.map