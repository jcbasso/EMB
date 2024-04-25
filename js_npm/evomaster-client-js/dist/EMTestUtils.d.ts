/**
 * Note: this code needs to be kept in sync among the different programming
 * languages, eg, Java, JavaScript and C#.
 */
export default class EMTestUtils {
    /**
     *
     * @param locationHeader a URI-reference, coming from a "location" header. See RFC 7231.
     *                       Note: it can be a relative reference
     * @param expectedTemplate a full URI of the target resource, but with some path elements
     *                         that might (or might not) be unresolved. If {@code locationHeader} is not
     *                         empty, it will replace the beginning of this template.
     * @return a fully resolved URI for the target resource. If there are problems, just
     *          return the input locationHeader. If this latter is empty/null, then return the template
     */
    static resolveLocation(locationHeader: string, expectedTemplate: string): string;
    /**
     * @param uri a string representing a URI
     * @return whether the given input string is either empty or a valid URI
     *
     * FIXME this currently always returns true...
     */
    static isValidURIorEmpty(uri: string): boolean;
}
