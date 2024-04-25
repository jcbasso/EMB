"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In REST, when we have an error, at most we would see a HTTP
 * status code.
 * But it can be very useful to get an actual description of the error.
 * So, it is a common practice to have "Wrapped Responses", which can
 * contain the error message (if any)
 *
 */
class WrappedResponseDto {
    static withData(data) {
        const dto = new WrappedResponseDto();
        dto.data = data;
        return dto;
    }
    static withNoData() {
        return new WrappedResponseDto();
    }
    static withError(error) {
        if (!error || error.length === 0) {
            throw new Error("Empty error message");
        }
        const dto = new WrappedResponseDto();
        dto.error = error;
        return dto;
    }
}
exports.default = WrappedResponseDto;
//# sourceMappingURL=WrappedResponseDto.js.map