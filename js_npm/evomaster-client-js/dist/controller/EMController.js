"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const ControllerConstants_1 = __importDefault(require("./api/ControllerConstants"));
const ControllerInfoDto_1 = __importDefault(require("./api/dto/ControllerInfoDto"));
const RestProblemDto_1 = __importDefault(require("./api/dto/problem/RestProblemDto"));
const SutInfoDto_1 = require("./api/dto/SutInfoDto");
const TestResultsDto_1 = __importDefault(require("./api/dto/TestResultsDto"));
const WrappedResponseDto_1 = __importDefault(require("./api/dto/WrappedResponseDto"));
const AdditionalInfoDto_1 = __importDefault(require("./api/dto/AdditionalInfoDto"));
const TargetInfoDto_1 = __importDefault(require("./api/dto/TargetInfoDto"));
const GraphQLProblemDto_1 = __importDefault(require("./api/dto/problem/GraphQLProblemDto"));
const StringSpecializationInfoDto_1 = __importDefault(require("./api/dto/StringSpecializationInfoDto"));
class EMController {
    constructor(sutController) {
        this.app = express_1.default();
        this.controllerPort = ControllerConstants_1.default.DEFAULT_CONTROLLER_PORT;
        this.controllerHost = ControllerConstants_1.default.DEFAULT_CONTROLLER_HOST;
        this.sutController = sutController;
        this.initExpress();
    }
    startTheControllerServer() {
        return new Promise((resolve) => {
            this.server = this.app.listen(this.controllerPort, this.controllerHost, () => {
                this.actualPort = this.server.address().port;
                console.log("Started EM Controller on port " + this.actualPort);
                resolve(true);
            });
        });
    }
    stopTheControllerServer() {
        const sut = this.sutController.isSutRunning() ?
            this.sutController.stopSut()
            : Promise.resolve();
        const controller = new Promise((resolve) => {
            if (this.server) {
                this.server.close(() => resolve());
            }
        });
        return Promise.all([sut, controller]).then();
    }
    setPort(value) {
        this.controllerPort = value;
    }
    getActualPort() {
        return this.actualPort;
    }
    getBaseUrlOfSUT() {
        return this.baseUrlOfSUT;
    }
    initExpress() {
        // to handle JSON payloads
        this.app.use(body_parser_1.default.json());
        this.app.get(ControllerConstants_1.default.BASE_PATH + ControllerConstants_1.default.INFO_SUT_PATH, (req, res) => {
            const dto = new SutInfoDto_1.SutInfoDto();
            dto.isSutRunning = this.sutController.isSutRunning();
            dto.baseUrlOfSUT = this.baseUrlOfSUT;
            dto.infoForAuthentication = this.sutController.getInfoForAuthentication();
            // dto.sqlSchemaDto = this.sutController.getSqlDatabaseSchema();
            dto.defaultOutputFormat = this.sutController.getPreferredOutputFormat();
            const info = this.sutController.getProblemInfo();
            if (!info) {
                res.status(500);
                res.json(WrappedResponseDto_1.default.withError("Undefined problem type in the EM Controller"));
                return;
            }
            else if (info instanceof RestProblemDto_1.default) {
                dto.restProblem = info;
            }
            else if (info instanceof GraphQLProblemDto_1.default) {
                dto.graphQLProblem = info;
            }
            else {
                res.status(500);
                res.json(WrappedResponseDto_1.default.withError("Unrecognized problem type: " + (typeof info)));
                return;
            }
            dto.unitsInfoDto = this.sutController.getUnitsInfoDto();
            if (!dto.unitsInfoDto) {
                res.status(500);
                res.json(WrappedResponseDto_1.default.withError("Failed to extract units info"));
                return;
            }
            res.status(200);
            res.json(WrappedResponseDto_1.default.withData(dto));
        });
        this.app.get(ControllerConstants_1.default.BASE_PATH + ControllerConstants_1.default.CONTROLLER_INFO, (req, res) => {
            const dto = new ControllerInfoDto_1.default();
            dto.fullName = this.sutController.constructor.name;
            dto.isInstrumentationOn = this.sutController.isInstrumentationActivated();
            // TODO will need something to identify the file to import
            res.status(200);
            res.json(WrappedResponseDto_1.default.withData(dto));
        });
        this.app.post(ControllerConstants_1.default.BASE_PATH + ControllerConstants_1.default.NEW_SEARCH, (req, res) => {
            this.sutController.newSearch();
            res.status(201);
            res.json(WrappedResponseDto_1.default.withNoData());
        });
        this.app.put(ControllerConstants_1.default.BASE_PATH + ControllerConstants_1.default.RUN_SUT_PATH, (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.body) {
                res.status(400);
                res.json(WrappedResponseDto_1.default.withError("No provided JSON payload"));
                return;
            }
            const dto = req.body;
            if (dto.run === undefined || dto.run === null) {
                res.status(400);
                res.json(WrappedResponseDto_1.default.withError("Invalid JSON: 'run' field is required"));
                return;
            }
            if (!dto.run) {
                if (dto.resetState) {
                    res.status(400);
                    res.json(WrappedResponseDto_1.default.withError("Invalid JSON: cannot reset state and stop service at same time"));
                    return;
                }
                // if on, we want to shut down the server
                if (this.sutController.isSutRunning()) {
                    yield this.sutController.stopSut();
                    this.baseUrlOfSUT = null;
                }
            }
            else {
                /*
                  If SUT is not up and running, let's start it
                 */
                if (!this.sutController.isSutRunning()) {
                    this.baseUrlOfSUT = yield this.sutController.startSut();
                    if (this.baseUrlOfSUT == null) {
                        // there has been an internal failure in starting the SUT
                        res.status(500);
                        res.json(WrappedResponseDto_1.default.withError("Internal failure: cannot start SUT based on given configuration"));
                        return;
                    }
                }
                else {
                    // TODO as starting should be blocking, need to check
                    // if initialized, and wait if not
                }
                /*
                regardless of where it was running or not, need to reset state.
                this is controlled by a boolean, although most likely we ll always
                want to do it
                */
                if (dto.resetState != null && dto.resetState) {
                    yield this.sutController.resetStateOfSUT();
                    this.sutController.newTest();
                }
                /*
                Note: here even if we start the SUT, the starting of a "New Search"
                cannot be done here, as in this endpoint we also deal with the reset
                of state. When we reset state for a new test run, we do not want to
                reset all the other data regarding the whole search
                */
            }
            res.status(204);
            res.json(WrappedResponseDto_1.default.withNoData());
        }));
        this.app.get(ControllerConstants_1.default.BASE_PATH + ControllerConstants_1.default.TEST_RESULTS, (req, res) => {
            const idsParam = (req.query.ids);
            const ids = new Set(idsParam
                .split(",")
                .filter((s) => s && s.trim().length > 0)
                .map((s) => parseInt(s, 10)));
            const targetInfos = this.sutController.getTargetInfos(ids);
            if (!targetInfos) {
                res.status(500);
                res.json(WrappedResponseDto_1.default.withError("Failed to collect target information for " + ids.size + " ids"));
                return;
            }
            const dto = new TestResultsDto_1.default();
            targetInfos.forEach((t) => {
                const info = new TargetInfoDto_1.default();
                info.id = t.mappedId;
                info.value = t.value;
                info.descriptiveId = t.descriptiveId;
                info.actionIndex = t.actionIndex;
                dto.targets.push(info);
            });
            const additionalInfos = this.sutController.getAdditionalInfoList();
            if (!additionalInfos) {
                res.status(500);
                res.json(WrappedResponseDto_1.default.withError("Failed to collect additional info"));
                return;
            }
            additionalInfos.forEach(a => {
                const info = new AdditionalInfoDto_1.default();
                info.queryParameters = Array.from(a.getQueryParametersView());
                info.headers = Array.from(a.getHeadersView());
                info.lastExecutedStatement = a.getLastExecutedStatement();
                info.stringSpecializations = new Object();
                for (let [key, value] of a.getStringSpecializationsView().entries()) {
                    const list = Array.from(value).map(v => {
                        const dto = new StringSpecializationInfoDto_1.default();
                        dto.value = v.getValue();
                        dto.type = v.getType().toString();
                        dto.stringSpecialization = v.getStringSpecialization().toString();
                        return dto;
                    });
                    // @ts-ignore
                    info.stringSpecializations[key] = list;
                }
                dto.additionalInfoList.push(info);
            });
            res.status(200);
            res.json(WrappedResponseDto_1.default.withData(dto));
        });
        this.app.put(ControllerConstants_1.default.BASE_PATH + ControllerConstants_1.default.NEW_ACTION, (req, res) => {
            const dto = (req.body);
            this.sutController.newAction(dto);
            res.status(204);
            res.json(WrappedResponseDto_1.default.withNoData());
        });
    }
}
exports.default = EMController;
//# sourceMappingURL=EMController.js.map