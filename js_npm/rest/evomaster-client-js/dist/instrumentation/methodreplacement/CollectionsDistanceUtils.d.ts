import { EqualityAlgorithm } from "../heuristic/DistanceHelper";
export default class CollectionsDistanceUtils {
    /**
     * Compute distance of object from each one of the elements in the collection.
     * @param c is a collection to compute the distance
     * @param o is an element to compute its distance in the collection c
     * @param equalityRule a rule to process equality comparison
     * @param limit But look only up to limit elements. A negative values means look at all elements
     */
    static getHeuristicToIncludes(c: Array<any>, o: any, equalityRule?: EqualityAlgorithm, limit?: number): number;
}
