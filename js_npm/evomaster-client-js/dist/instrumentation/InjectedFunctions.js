"use strict";
/*
    This is a bit different from Controller in Java.
    In Java, each class is uniquely identified by its package, which is
    what used in the bytecode, where "import" in the source code is just
    syntactic sugar.
    But here in JavaScript we need to import a module in the instrumented files,
    and the import itself must be added as part of the instrumentation.
    To avoid mess in scope resolutions, all EM functions that can be called/injected
    in the SUT will be defined here
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExecutionTracer_1 = __importDefault(require("./staticstate/ExecutionTracer"));
const HeuristicsForBooleans_1 = __importDefault(require("./heuristic/HeuristicsForBooleans"));
const ObjectiveRecorder_1 = __importDefault(require("./staticstate/ObjectiveRecorder"));
const FunctionCallHandler_1 = __importDefault(require("./methodreplacement/FunctionCallHandler"));
const SquareBracketsHandler_1 = __importDefault(require("./methodreplacement/SquareBracketsHandler"));
class InjectedFunctions {
    static registerTargets(idArray) {
        for (let id of idArray) {
            ObjectiveRecorder_1.default.registerTarget(id);
        }
    }
    static enteringStatement(fileName, line, statementId) {
        ExecutionTracer_1.default.enteringStatement(fileName, line, statementId);
    }
    static completedStatement(fileName, line, statementId) {
        ExecutionTracer_1.default.completedStatement(fileName, line, statementId);
    }
    static completingStatement(value, fileName, line, statementId) {
        ExecutionTracer_1.default.completedStatement(fileName, line, statementId);
        return value;
    }
    /**
     *  Used for statements like:
     *  - return (with no data)
     *  - continue
     *  - break
     *  - throw
     */
    static markStatementForCompletion(fileName, line, statementId) {
        InjectedFunctions.enteringStatement(fileName, line, statementId);
        InjectedFunctions.completedStatement(fileName, line, statementId);
    }
    static cmp(left, op, right, fileName, line, branchId) {
        return HeuristicsForBooleans_1.default.evaluate(left, op, right, fileName, line, branchId);
    }
    static or(left, right, isRightPure, fileName, line, branchId) {
        return HeuristicsForBooleans_1.default.evaluateOr(left, right, isRightPure, fileName, line, branchId);
    }
    static and(left, right, isRightPure, fileName, line, branchId) {
        return HeuristicsForBooleans_1.default.evaluateAnd(left, right, isRightPure, fileName, line, branchId);
    }
    static not(value) {
        return HeuristicsForBooleans_1.default.handleNot(value);
    }
    static callBase(f) {
        return FunctionCallHandler_1.default.handleFunctionCallBase(f);
    }
    static callTracked(fileName, line, branchId, obj, functionName, ...args) {
        return FunctionCallHandler_1.default.handleFunctionCallTracked(fileName, line, branchId, obj, functionName, ...args);
    }
    static ternary(f, fileName, line, index) {
        return HeuristicsForBooleans_1.default.handleTernary(f, fileName, line, index);
    }
    static squareBrackets(fileName, line, branchId, object, property) {
        return SquareBracketsHandler_1.default.squareBracketInMemberExpression(fileName, line, branchId, object, property);
    }
}
exports.default = InjectedFunctions;
//# sourceMappingURL=InjectedFunctions.js.map