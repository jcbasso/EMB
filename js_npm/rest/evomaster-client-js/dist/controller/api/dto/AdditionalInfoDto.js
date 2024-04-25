"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdditionalInfoDto {
    constructor() {
        /**
         * In REST APIs, it can happen that some query parameters do not
         * appear in the schema if they are indirectly accessed via
         * objects like WebRequest.
         * But we can track at runtime when such kind of objects are used
         * to access the query parameters
         */
        this.queryParameters = new Array();
        /**
         * In REST APIs, it can happen that some HTTP headers do not
         * appear in the schema if they are indirectly accessed via
         * objects like WebRequest.
         * But we can track at runtime when such kind of objects are used
         * to access the query parameters
         */
        this.headers = new Array();
        /**
         * Information for taint analysis.
         * When some string inputs are recognized of a specific type (eg,
         * they are used as integers or dates), we keep track of it.
         * The key in this map is the value of the tainted input.
         * The associated list is its possible specializations (which usually
         * will be at most 1).
         */
        //public stringSpecializations = new Map<string, StringSpecializationInfoDto[]>();
        /*
           Note: JSON marshallers in JS/TS are pretty crappy, as they SILENTLY ignore string-key maps...
         */
        this.stringSpecializations = new Object();
    }
}
exports.default = AdditionalInfoDto;
//# sourceMappingURL=AdditionalInfoDto.js.map