"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This represents the same data as in TargetInfoDto.
 * Here is replicated to have a clear distinction on how
 * such data is used
 */
class TargetInfo {
    constructor(mappedId, descriptiveId, value, actionIndex) {
        this.mappedId = mappedId;
        this.descriptiveId = descriptiveId;
        this.value = value;
        this.actionIndex = actionIndex;
    }
    static notReached(theID) {
        return new TargetInfo(theID, null, 0.0, -1);
    }
    withMappedId(theID) {
        if (this.mappedId) {
            throw new Error("Id already existing");
        }
        return new TargetInfo(theID, this.descriptiveId, this.value, this.actionIndex);
    }
    withNoDescriptiveId() {
        return new TargetInfo(this.mappedId, null, this.value, this.actionIndex);
    }
}
exports.default = TargetInfo;
//# sourceMappingURL=TargetInfo.js.map