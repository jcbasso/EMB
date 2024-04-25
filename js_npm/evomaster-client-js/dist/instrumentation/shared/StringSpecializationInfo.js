"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaintType_1 = require("./TaintType");
class StringSpecializationInfo {
    constructor(stringSpecialization, value, taintType = TaintType_1.TaintType.FULL_MATCH) {
        this.stringSpecialization = stringSpecialization;
        this.value = value;
        if (!taintType || taintType === TaintType_1.TaintType.NONE) {
            throw new Error("Invalid type: " + taintType);
        }
        this.type = taintType;
    }
    getStringSpecialization() {
        return this.stringSpecialization;
    }
    getValue() {
        return this.value;
    }
    getType() {
        return this.type;
    }
    equalsTo(other) {
        if (!other) {
            return false;
        }
        return this.value === other.value && this.type === other.type && this.stringSpecialization === other.stringSpecialization;
    }
}
exports.StringSpecializationInfo = StringSpecializationInfo;
//# sourceMappingURL=StringSpecializationInfo.js.map