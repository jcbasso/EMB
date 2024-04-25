"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const babel_plugin_evomaster_1 = __importDefault(require("./instrumentation/babel-plugin-evomaster"));
const EMController_1 = __importDefault(require("./controller/EMController"));
const SutController_1 = __importDefault(require("./controller/SutController"));
const AuthenticationDto_1 = __importDefault(require("./controller/api/dto/AuthenticationDto"));
const HeaderDto_1 = __importDefault(require("./controller/api/dto/HeaderDto"));
const ProblemInfo_1 = __importDefault(require("./controller/api/dto/problem/ProblemInfo"));
const RestProblemDto_1 = __importDefault(require("./controller/api/dto/problem/RestProblemDto"));
const GraphQLProblemDto_1 = __importDefault(require("./controller/api/dto/problem/GraphQLProblemDto"));
const SutInfoDto_1 = require("./controller/api/dto/SutInfoDto");
const SutRunDto_1 = __importDefault(require("./controller/api/dto/SutRunDto"));
const ControllerConstants_1 = __importDefault(require("./controller/api/ControllerConstants"));
const InjectedFunctions_1 = __importDefault(require("./instrumentation/InjectedFunctions"));
const ExecutionTracer_1 = __importDefault(require("./instrumentation/staticstate/ExecutionTracer"));
const ObjectiveRecorder_1 = __importDefault(require("./instrumentation/staticstate/ObjectiveRecorder"));
const ObjectiveNaming_1 = __importDefault(require("./instrumentation/shared/ObjectiveNaming"));
const EMTestUtils_1 = __importDefault(require("./EMTestUtils"));
const JsonTokenPostLoginDto_1 = __importDefault(require("./controller/api/dto/JsonTokenPostLoginDto"));
//@ts-ignore
const f = babel_plugin_evomaster_1.default;
f.SutController = SutController_1.default;
f.EMController = EMController_1.default;
f.dto = {
    AuthenticationDto: AuthenticationDto_1.default,
    HeaderDto: HeaderDto_1.default,
    JsonTokenPostLoginDto: JsonTokenPostLoginDto_1.default,
    ProblemInfo: ProblemInfo_1.default,
    RestProblemDto: RestProblemDto_1.default,
    GraphQLProblemDto: GraphQLProblemDto_1.default,
    OutputFormat: SutInfoDto_1.OutputFormat,
    SutRunDto: SutRunDto_1.default
};
f.InjectedFunctions = InjectedFunctions_1.default;
f.internal = {
    ExecutionTracer: ExecutionTracer_1.default,
    ObjectiveRecorder: ObjectiveRecorder_1.default,
    ObjectiveNaming: ObjectiveNaming_1.default,
    ControllerConstants: ControllerConstants_1.default
};
f.EMTestUtils = EMTestUtils_1.default;
module.exports = f;
//# sourceMappingURL=index.js.map