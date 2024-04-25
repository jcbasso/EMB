"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExecutionTracer_1 = __importDefault(require("./staticstate/ExecutionTracer"));
const TaintType_1 = require("./shared/TaintType");
class StatementDescription {
    constructor(line, method) {
        this.line = line;
        this.method = method;
    }
}
/**
 * Besides code coverage, there can be additional info that we want
 * to collect at runtime when test cases are executed.
 */
class AdditionalInfo {
    constructor() {
        /**
         * In REST APIs, it can happen that some query parameters do not
         * appear in the schema if they are indirectly accessed via
         * objects like WebRequest.
         * But we can track at runtime when such kind of objects are used
         * to access the query parameters
         */
        this.queryParameters = new Set();
        /**
         * In REST APIs, it can happen that some HTTP headers do not
         * appear in the schema if they are indirectly accessed via
         * objects like WebRequest.
         * But we can track at runtime when such kind of objects are used
         * to access the query parameters
         */
        this.headers = new Set();
        /**
         * Map from taint input name to string specializations for it
         */
        this.stringSpecializations = new Map();
        /*
            WARNING: code below on lastExecutedStatementStack is different from Java version:
            we always force a pop after each statement, and we do not collect info on Methdo
         */
        /**
         * Keep track of the last executed statement done in the SUT.
         * But not in the third-party libraries, just the business logic of the SUT.
         * The statement is represented with a descriptive unique id, like the class name and line number.
         *
         * We need to use a stack to handle method call invocations, as we can know when a statement
         * starts, but not so easily when it ends.
         */
        this.lastExecutedStatementStack = new Array();
        /**
         * In case we pop all elements from stack, keep track of last one separately.
         */
        this.noExceptionStatement = null;
    }
    addSpecialization(taintInputName, info) {
        if (ExecutionTracer_1.default.getTaintType(taintInputName) == TaintType_1.TaintType.NONE) {
            throw new Error("No valid input name: " + taintInputName);
        }
        if (!info) {
            throw new Error("Missing info object");
        }
        let set = this.stringSpecializations.get(taintInputName);
        if (!set) {
            set = new Set();
            this.stringSpecializations.set(taintInputName, set);
        }
        /*
            ah! the joys of JS Set when dealing with objects...
         */
        for (let s of set) {
            if (info.equalsTo(s)) {
                return;
            }
        }
        set.add(info);
    }
    getStringSpecializationsView() {
        return this.stringSpecializations;
    }
    addQueryParameter(param) {
        if (param && param.length > 0) {
            this.queryParameters.add(param);
        }
    }
    getQueryParametersView() {
        return this.queryParameters;
    }
    addHeader(header) {
        if (header && header.length > 0) {
            this.headers.add(header);
        }
    }
    getHeadersView() {
        return this.headers;
    }
    getLastExecutedStatement() {
        if (this.lastExecutedStatementStack.length == 0) {
            if (!this.noExceptionStatement) {
                return null;
            }
            return this.noExceptionStatement;
        }
        return this.lastExecutedStatementStack[this.lastExecutedStatementStack.length - 1];
    }
    pushLastExecutedStatement(lastLine) {
        this.noExceptionStatement = null;
        this.lastExecutedStatementStack.push(lastLine);
    }
    popLastExecutedStatement() {
        const statementDescription = this.lastExecutedStatementStack.pop();
        if (this.lastExecutedStatementStack.length == 0) {
            this.noExceptionStatement = statementDescription;
        }
        return statementDescription;
    }
}
exports.default = AdditionalInfo;
//# sourceMappingURL=AdditionalInfo.js.map