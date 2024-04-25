"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DistanceHelper_1 = __importStar(require("../heuristic/DistanceHelper"));
const assert_1 = __importDefault(require("assert"));
class CollectionsDistanceUtils {
    /**
     * Compute distance of object from each one of the elements in the collection.
     * @param c is a collection to compute the distance
     * @param o is an element to compute its distance in the collection c
     * @param equalityRule a rule to process equality comparison
     * @param limit But look only up to limit elements. A negative values means look at all elements
     */
    static getHeuristicToIncludes(c, o, equalityRule = DistanceHelper_1.EqualityAlgorithm.SameValueZero, limit = -1) {
        // check c is null?
        let result = false;
        if (equalityRule == DistanceHelper_1.EqualityAlgorithm.SameValueZero)
            result = c.includes(o);
        if (result) {
            return 1;
        }
        else if (c && c.length == 0) {
            return DistanceHelper_1.default.H_REACHED_BUT_EMPTY;
        }
        else if (o === null || o === undefined) {
            return DistanceHelper_1.default.H_NOT_EMPTY;
        }
        else {
            const base = DistanceHelper_1.default.H_NOT_EMPTY;
            let max = base;
            let counter = 0;
            for (let value of c) {
                if (counter == limit)
                    break;
                counter++;
                if (value == null)
                    continue;
                let d = DistanceHelper_1.default.getDistance(o, value, equalityRule);
                if (d == Number.MAX_VALUE)
                    continue;
                let h = DistanceHelper_1.default.heuristicFromScaledDistanceWithBase(base, d);
                if (h > max)
                    max = h;
            }
            assert_1.default(max <= 1);
            return max;
        }
    }
}
exports.default = CollectionsDistanceUtils;
//# sourceMappingURL=CollectionsDistanceUtils.js.map