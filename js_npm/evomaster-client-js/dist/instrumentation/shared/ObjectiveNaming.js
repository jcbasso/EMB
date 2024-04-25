"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectiveNaming {
    static fileObjectiveName(fileId) {
        return ObjectiveNaming.FILE + "_" + fileId;
    }
    static getFileIdFromFileObjectiveName(target) {
        const prefix = ObjectiveNaming.FILE + "_";
        return target.substr(prefix.length);
    }
    static lineObjectiveName(fileId, line) {
        return ObjectiveNaming.LINE + "_" + fileId + "_" + ObjectiveNaming.padNumber(line);
    }
    static statementObjectiveName(fileId, line, index) {
        return ObjectiveNaming.STATEMENT + "_" + fileId + "_"
            + ObjectiveNaming.padNumber(line) + "_" + index;
    }
    static successCallObjectiveName(fileId, line, index) {
        return ObjectiveNaming.SUCCESS_CALL + "_at_" + fileId + "_"
            + ObjectiveNaming.padNumber(line) + "_" + index;
    }
    static methodReplacementObjectiveNameTemplate(fileId, line, index) {
        return ObjectiveNaming.METHOD_REPLACEMENT + "_at_" + fileId + "_"
            + ObjectiveNaming.padNumber(line) + "_" + index;
    }
    static methodReplacementObjectiveName(template, result, type) {
        if (!template || !template.startsWith(ObjectiveNaming.METHOD_REPLACEMENT)) {
            throw new Error("Invalid template for boolean method replacement: " + template);
        }
        return template + "_" + type + "_" + result;
    }
    static branchObjectiveName(fileId, line, branchId, thenBranch) {
        let name = ObjectiveNaming.BRANCH + "_at_" + fileId
            + "_at_line_" + ObjectiveNaming.padNumber(line) + "_position_" + branchId;
        if (thenBranch) {
            name += ObjectiveNaming.TRUE_BRANCH;
        }
        else {
            name += ObjectiveNaming.FALSE_BRANCH;
        }
        return name;
    }
    static padNumber(value) {
        if (value < 0) {
            throw new Error("Negative number to pad");
        }
        if (value < 10) {
            return "0000" + value;
        }
        if (value < 100) {
            return "000" + value;
        }
        if (value < 1000) {
            return "00" + value;
        }
        if (value < 10000) {
            return "0" + value;
        }
        else {
            return "" + value;
        }
    }
}
exports.default = ObjectiveNaming;
/**
 * Prefix identifier for file coverage objectives.
 * A file is "covered" if at least one of its lines is executed.
 *
 * Note: this is different from Java where we rather look at CLASS
 */
ObjectiveNaming.FILE = "File";
/**
 * Prefix identifier for line coverage objectives
 */
ObjectiveNaming.LINE = "Line";
/**
 * Prefix identifier for statement coverage objectives
 */
ObjectiveNaming.STATEMENT = "Statement";
/**
 * Prefix identifier for branch coverage objectives
 */
ObjectiveNaming.BRANCH = "Branch";
/**
 * Tag used in a branch id to specify it is for the "true"/then branch
 */
ObjectiveNaming.TRUE_BRANCH = "_trueBranch";
/**
 * Tag used in a branch id to specify it is for the "false"/else branch
 */
ObjectiveNaming.FALSE_BRANCH = "_falseBranch";
/**
 * Prefix identifier for MethodReplacement objectives, where we want
 * to cover both possible outcomes, eg true and false
 */
ObjectiveNaming.METHOD_REPLACEMENT = "MethodReplacement";
//FIXME: with statement objective, this maybe is not so important?
/**
 * Prefix identifier for objectives related to calling methods without exceptions
 */
ObjectiveNaming.SUCCESS_CALL = "Success_Call";
//# sourceMappingURL=ObjectiveNaming.js.map