/**
 * In REST, when we have an error, at most we would see a HTTP
 * status code.
 * But it can be very useful to get an actual description of the error.
 * So, it is a common practice to have "Wrapped Responses", which can
 * contain the error message (if any)
 *
 */
export default class WrappedResponseDto<T> {
    static withData<K>(data: K): WrappedResponseDto<K>;
    static withNoData(): WrappedResponseDto<void>;
    static withError(error: string): WrappedResponseDto<void>;
    /**
     * The actual payload we are sending and are "wrapping" here
     */
    data: T;
    /**
     * A message describing the error, if any.
     * If this is not null, then "data" must be null.
     */
    error: string;
}
