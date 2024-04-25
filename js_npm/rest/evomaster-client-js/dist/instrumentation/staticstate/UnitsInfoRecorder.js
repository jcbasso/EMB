"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Keep track of static info on the SUT related to its classes,
 * eg total number of lines
 *
 */
class UnitsInfoRecorder {
    // private static readonly numberOfReplacedMethodsInSut: number;
    // private static readonly numberOfReplacedMethodsInThirdParty: number;
    // private static readonly numberOfTrackedMethods: number;
    /**
     * Only need for tests
     */
    static reset() {
        UnitsInfoRecorder.unitNames.clear();
        UnitsInfoRecorder.numberOfLines = 0;
        UnitsInfoRecorder.numberOfBranches = 0;
    }
    static markNewUnit(name) {
        UnitsInfoRecorder.unitNames.add(name);
    }
    static markNewLine() {
        UnitsInfoRecorder.numberOfLines++;
    }
    static markNewBranch() {
        UnitsInfoRecorder.numberOfBranches += 1;
    }
    // public static void markNewReplacedMethodInSut(){
    //     singleton.numberOfReplacedMethodsInSut.incrementAndGet();
    // }
    //
    // public static void markNewReplacedMethodInThirdParty(){
    //     singleton.numberOfReplacedMethodsInThirdParty.incrementAndGet();
    // }
    //
    // public static void markNewTrackedMethod(){
    //     singleton.numberOfTrackedMethods.incrementAndGet();
    // }
    static getNumberOfUnits() {
        return UnitsInfoRecorder.unitNames.size;
    }
    static getUnitNames() {
        return new Set(UnitsInfoRecorder.unitNames);
    }
    static getNumberOfLines() {
        return UnitsInfoRecorder.numberOfLines;
    }
    static getNumberOfBranches() {
        return UnitsInfoRecorder.numberOfBranches;
    }
}
exports.default = UnitsInfoRecorder;
//see entries in UnitsInfoDto
UnitsInfoRecorder.unitNames = new Set();
UnitsInfoRecorder.numberOfLines = 0;
UnitsInfoRecorder.numberOfBranches = 0;
//# sourceMappingURL=UnitsInfoRecorder.js.map