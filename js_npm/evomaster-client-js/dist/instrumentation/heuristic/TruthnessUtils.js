"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Truthness_1 = __importDefault(require("./Truthness"));
const DistanceHelper_1 = __importDefault(require("./DistanceHelper"));
const HeuristicsForBooleans_1 = __importDefault(require("./HeuristicsForBooleans"));
class TruthnessUtils {
    static getEqualityTruthnessNumber(a, b) {
        const distance = DistanceHelper_1.default.getDistanceToEqualityNumber(a, b);
        const normalizedDistance = Truthness_1.default.normalizeValue(distance);
        return new Truthness_1.default(1 - normalizedDistance, a !== b ? 1 : HeuristicsForBooleans_1.default.FLAG_NO_EXCEPTION);
    }
    static getEqualityTruthnessString(a, b) {
        const distance = DistanceHelper_1.default.getLeftAlignmentDistance(a, b);
        const normalizedDistance = Truthness_1.default.normalizeValue(distance);
        return new Truthness_1.default(1 - normalizedDistance, a !== b ? 1 : HeuristicsForBooleans_1.default.FLAG_NO_EXCEPTION);
    }
    static getLessThanTruthnessNumber(a, b) {
        const distance = DistanceHelper_1.default.getDistanceToEqualityNumber(a, b);
        return new Truthness_1.default(a < b ?
            1 : 1 / (1.1 + distance), a >= b ? 1 : 1 / (1.1 + distance));
    }
    static getLessThanTruthnessString(a, b) {
        let distance = DistanceHelper_1.default.MAX_CHAR_DISTANCE;
        for (let i = 0; i < a.length && i < b.length; i++) {
            const x = a.charCodeAt(i);
            const y = b.charCodeAt(i);
            /*
                What determines the order is the first char they have different,
                starting from left to right
             */
            if (x === y) {
                continue;
            }
            distance = Math.abs(x - y);
            break;
        }
        return new Truthness_1.default(a < b ? 1 : 1 / (1.1 + distance), a >= b ? 1 : 1 / (1.1 + distance));
    }
}
exports.default = TruthnessUtils;
//# sourceMappingURL=TruthnessUtils.js.map