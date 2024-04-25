"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Truthness_1 = __importDefault(require("./Truthness"));
const TruthnessUtils_1 = __importDefault(require("./TruthnessUtils"));
const ExecutionTracer_1 = __importDefault(require("../staticstate/ExecutionTracer"));
const ObjectiveNaming_1 = __importDefault(require("../shared/ObjectiveNaming"));
class HeuristicsForBooleans {
    static handleNot(value) {
        if (HeuristicsForBooleans.lastEvaluation) {
            HeuristicsForBooleans.lastEvaluation = HeuristicsForBooleans.lastEvaluation.invert();
        }
        return !value;
    }
    /**
     * This is mainly needed in MethodReplacement
     */
    static updateLastEvaluation(t) {
        HeuristicsForBooleans.lastEvaluation = t;
    }
    static getLastEvaluation() {
        return HeuristicsForBooleans.lastEvaluation;
    }
    static clearLastEvaluation() {
        HeuristicsForBooleans.lastEvaluation = null;
    }
    static evaluateAnd(left, right, isRightPure, fileName, line, branchId) {
        // (x && y) == ! (!x || !y)
        HeuristicsForBooleans.lastEvaluation = null;
        const base = HeuristicsForBooleans.FLAG_NO_EXCEPTION;
        const exception = HeuristicsForBooleans.EXCEPTION;
        let x;
        let xT;
        let xE = null;
        try {
            x = left();
            xT = HeuristicsForBooleans.lastEvaluation;
            if (!xT) {
                xT = new Truthness_1.default(x ? 1 : base, x ? base : 1);
            }
            else {
                xT = xT.rescaleFromMin(base);
            }
        }
        catch (e) {
            xT = new Truthness_1.default(exception, exception);
            xE = e;
        }
        const leftIsTrue = (x && xE === null);
        let h;
        let yE = null;
        let y;
        /*
            Two cases in which we can evaluate the right:
            - it is pure
            - left was false, and without exception
         */
        if (leftIsTrue || isRightPure) {
            HeuristicsForBooleans.lastEvaluation = null;
            let yT;
            try {
                y = right();
                yT = HeuristicsForBooleans.lastEvaluation;
                if (!yT) {
                    yT = new Truthness_1.default(y ? 1 : base, y ? base : 1);
                }
                else {
                    yT = yT.rescaleFromMin(base);
                }
            }
            catch (e) {
                yT = new Truthness_1.default(exception, exception);
                yE = e;
            }
            h = new Truthness_1.default((xT.getOfTrue() / 2) + (yT.getOfTrue() / 2), Math.max(xT.getOfFalse(), xE ? yT.getOfFalse() / 2 : yT.getOfFalse()));
        }
        else {
            // this means either the left threw an exception, or it was false and right is not pure
            h = new Truthness_1.default(xT.getOfTrue() / 2, xT.getOfFalse());
        }
        ExecutionTracer_1.default.updateBranch(fileName, line, branchId, h);
        HeuristicsForBooleans.lastEvaluation = h;
        if (xE) {
            throw xE;
        }
        if (leftIsTrue && yE) {
            throw yE;
        }
        return x && y;
    }
    static evaluateOr(left, right, isRightPure, fileName, line, branchId) {
        HeuristicsForBooleans.lastEvaluation = null;
        const base = HeuristicsForBooleans.FLAG_NO_EXCEPTION;
        const exception = HeuristicsForBooleans.EXCEPTION;
        let x;
        let xT;
        let xE = null;
        try {
            x = left();
            xT = HeuristicsForBooleans.lastEvaluation;
            if (!xT) {
                xT = new Truthness_1.default(x ? 1 : base, x ? base : 1);
            }
            else {
                xT = xT.rescaleFromMin(base);
            }
        }
        catch (e) {
            xT = new Truthness_1.default(exception, exception);
            xE = e;
        }
        const leftIsFalse = (!x && xE === null);
        let h;
        let yE = null;
        let y;
        /*
            Two cases in which we can evaluate the right:
            - it is pure
            - left was false, and without exception
         */
        if (leftIsFalse || isRightPure) {
            HeuristicsForBooleans.lastEvaluation = null;
            let yT;
            try {
                y = right();
                yT = HeuristicsForBooleans.lastEvaluation;
                if (!yT) {
                    yT = new Truthness_1.default(y ? 1 : base, y ? base : 1);
                }
                else {
                    yT = yT.rescaleFromMin(base);
                }
            }
            catch (e) {
                yT = new Truthness_1.default(exception, exception);
                yE = e;
            }
            h = new Truthness_1.default(Math.max(xT.getOfTrue(), xE ? yT.getOfTrue() / 2 : yT.getOfTrue()), (xT.getOfFalse() / 2) + (yT.getOfFalse() / 2));
        }
        else {
            // this means either the left threw an exception, or it was true and right is not pure
            h = new Truthness_1.default(xT.getOfTrue(), xT.getOfFalse() / 2);
        }
        ExecutionTracer_1.default.updateBranch(fileName, line, branchId, h);
        HeuristicsForBooleans.lastEvaluation = h;
        if (xE) {
            throw xE;
        }
        if (leftIsFalse && yE) {
            throw yE;
        }
        return x || y;
    }
    static evaluate(left, op, right, fileName, line, branchId) {
        /*
            Make sure we get exactly the same result
         */
        let res;
        if (op === "==") {
            res = left == right;
        }
        else if (op === "===") {
            res = left === right;
        }
        else if (op === "!=") {
            res = left != right;
        }
        else if (op === "!==") {
            res = left !== right;
        }
        else if (op === "<") {
            res = left < right;
        }
        else if (op === "<=") {
            res = left <= right;
        }
        else if (op === ">") {
            res = left > right;
        }
        else if (op === ">=") {
            res = left >= right;
        }
        const h = HeuristicsForBooleans.compare(left, op, right);
        ExecutionTracer_1.default.updateBranch(fileName, line, branchId, h);
        HeuristicsForBooleans.lastEvaluation = h;
        return res;
    }
    static compare(left, op, right) {
        if (!HeuristicsForBooleans.validOps.includes(op)) {
            throw new Error("Invalid op: " + op);
        }
        const tl = typeof left;
        const tr = typeof right;
        const isLeftNumber = tl === "number";
        const isLeftString = tl === "string";
        const isRightNumber = tr === "number";
        const isRightString = tr === "string";
        const bothNumbers = isLeftNumber && isRightNumber;
        const bothStrings = isLeftString && isRightString;
        const aNumberAndString = (isLeftString && isRightNumber) || (isLeftNumber && isRightString);
        let h;
        if (op === "===") {
            if (isLeftNumber && isRightNumber) {
                h = TruthnessUtils_1.default.getEqualityTruthnessNumber(left, right);
            }
            else if (isLeftString && isRightString) {
                ExecutionTracer_1.default.handleTaintForStringEquals(left, right, false);
                h = TruthnessUtils_1.default.getEqualityTruthnessString(left, right);
            }
            else {
                const b = left === right;
                h = new Truthness_1.default(b ? 1 : HeuristicsForBooleans.FLAG_NO_EXCEPTION, b ? HeuristicsForBooleans.FLAG_NO_EXCEPTION : 1);
            }
        }
        else if (op === "!==") {
            h = HeuristicsForBooleans.compare(left, "===", right).invert();
        }
        else if (op === "==") {
            if (bothNumbers || bothStrings) {
                h = HeuristicsForBooleans.compare(left, "===", right);
            }
            else if (aNumberAndString) {
                h = HeuristicsForBooleans.compare("" + left, "===", "" + right);
            }
            else {
                const b = left == right;
                h = new Truthness_1.default(b ? 1 : HeuristicsForBooleans.FLAG_NO_EXCEPTION, b ? HeuristicsForBooleans.FLAG_NO_EXCEPTION : 1);
            }
        }
        else if (op === "!=") {
            h = HeuristicsForBooleans.compare(left, "==", right).invert();
        }
        else if (op === "<") {
            if (bothNumbers) {
                h = TruthnessUtils_1.default.getLessThanTruthnessNumber(left, right);
            }
            else if (bothStrings || aNumberAndString) {
                h = TruthnessUtils_1.default.getLessThanTruthnessString("" + left, "" + right);
            }
            else {
                const b = left < right;
                h = new Truthness_1.default(b ? 1 : HeuristicsForBooleans.FLAG_NO_EXCEPTION, b ? HeuristicsForBooleans.FLAG_NO_EXCEPTION : 1);
            }
        }
        else if (op === ">=") {
            h = HeuristicsForBooleans.compare(left, "<", right).invert();
        }
        else if (op === "<=") {
            // (l <= r)  same as  (r >= l)  same as  !(r < l)
            h = HeuristicsForBooleans.compare(right, "<", left).invert();
        }
        else if (op === ">") {
            h = HeuristicsForBooleans.compare(left, "<=", right).invert();
        }
        return h;
    }
    static handleTernary(f, fileName, line, index) {
        /*
            Make sure that nested evaluations of && and || do not use unrelated previous computation.
         */
        HeuristicsForBooleans.lastEvaluation = null;
        const id = ObjectiveNaming_1.default.statementObjectiveName(fileName, line, index);
        let res;
        try {
            res = f();
            ExecutionTracer_1.default.updateObjective(id, 1);
        }
        catch (e) {
            ExecutionTracer_1.default.updateObjective(id, 0.5);
            throw e;
        }
        finally {
            HeuristicsForBooleans.lastEvaluation = null;
        }
        return res;
    }
}
exports.default = HeuristicsForBooleans;
HeuristicsForBooleans.FLAG_NO_EXCEPTION = 0.01;
HeuristicsForBooleans.EXCEPTION = HeuristicsForBooleans.FLAG_NO_EXCEPTION / 2;
HeuristicsForBooleans.validOps = ["==", "===", "!=", "!==", "<", "<=", ">", ">="];
HeuristicsForBooleans.lastEvaluation = null;
//# sourceMappingURL=HeuristicsForBooleans.js.map