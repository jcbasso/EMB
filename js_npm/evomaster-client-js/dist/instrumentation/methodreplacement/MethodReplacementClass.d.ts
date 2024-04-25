import ReplacementFunction from "./ReplacementFunction";
export default abstract class MethodReplacementClass {
    abstract getReplacements(): Array<ReplacementFunction>;
}
