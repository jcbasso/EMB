"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaintInputName {
    /**
     * Check if a given string value is a tainted value
     */
    static isTaintInput(value) {
        if (!value) {
            return false;
        }
        return TaintInputName.fullMatch.test(value);
    }
    static includesTaintInput(value) {
        if (!value) {
            return false;
        }
        return TaintInputName.partialMatch.test(value);
    }
    /**
     * Create a tainted value, with the input id being part of it
     */
    static getTaintName(id) {
        if (id < 0) {
            throw Error("Negative id");
        }
        /*
            Note: this is quite simple, we simply add a unique prefix
            and postfix, in lowercase.
            But we would not be able to check if the part of the id was
            modified.
         */
        return TaintInputName.PREFIX + id + TaintInputName.POSTFIX;
    }
}
exports.TaintInputName = TaintInputName;
/*
    WARNING:
    the naming here has to be kept in sync in ALL implementations of this class,
    including Java, JS and C#
 */
TaintInputName.PREFIX = "_EM_";
TaintInputName.POSTFIX = "_XYZ_";
//Pattern.compile("\\Q"+PREFIX+"\\E\\d+\\Q"+POSTFIX+"\\E");
TaintInputName.regex = TaintInputName.PREFIX + "\\d+" + TaintInputName.POSTFIX;
TaintInputName.partialMatch = new RegExp(TaintInputName.regex, "i");
TaintInputName.fullMatch = new RegExp("^" + TaintInputName.regex + "$", "i");
//# sourceMappingURL=TaintInputName.js.map