import Truthness from "./Truthness";
export default class TruthnessUtils {
    static getEqualityTruthnessNumber(a: number, b: number): Truthness;
    static getEqualityTruthnessString(a: string, b: string): Truthness;
    static getLessThanTruthnessNumber(a: number, b: number): Truthness;
    static getLessThanTruthnessString(a: string, b: string): Truthness;
}
