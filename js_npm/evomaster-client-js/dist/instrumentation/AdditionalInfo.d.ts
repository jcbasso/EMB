import { StringSpecializationInfo } from "./shared/StringSpecializationInfo";
/**
 * Besides code coverage, there can be additional info that we want
 * to collect at runtime when test cases are executed.
 */
export default class AdditionalInfo {
    /**
     * In REST APIs, it can happen that some query parameters do not
     * appear in the schema if they are indirectly accessed via
     * objects like WebRequest.
     * But we can track at runtime when such kind of objects are used
     * to access the query parameters
     */
    private queryParameters;
    /**
     * In REST APIs, it can happen that some HTTP headers do not
     * appear in the schema if they are indirectly accessed via
     * objects like WebRequest.
     * But we can track at runtime when such kind of objects are used
     * to access the query parameters
     */
    private headers;
    /**
     * Map from taint input name to string specializations for it
     */
    private stringSpecializations;
    /**
     * Keep track of the last executed statement done in the SUT.
     * But not in the third-party libraries, just the business logic of the SUT.
     * The statement is represented with a descriptive unique id, like the class name and line number.
     *
     * We need to use a stack to handle method call invocations, as we can know when a statement
     * starts, but not so easily when it ends.
     */
    private lastExecutedStatementStack;
    /**
     * In case we pop all elements from stack, keep track of last one separately.
     */
    private noExceptionStatement;
    addSpecialization(taintInputName: string, info: StringSpecializationInfo): void;
    getStringSpecializationsView(): Map<string, Set<StringSpecializationInfo>>;
    addQueryParameter(param: string): void;
    getQueryParametersView(): Set<string>;
    addHeader(header: string): void;
    getHeadersView(): Set<string>;
    getLastExecutedStatement(): string;
    pushLastExecutedStatement(lastLine: string): void;
    popLastExecutedStatement(): string;
}
