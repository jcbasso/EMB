import SutController from "./SutController";
export default class EMController {
    private readonly sutController;
    private app;
    private baseUrlOfSUT;
    private controllerPort;
    private controllerHost;
    /**
     * Might be different from controllerPort, if that was ephemeral
     */
    private actualPort;
    private server;
    constructor(sutController: SutController);
    startTheControllerServer(): Promise<boolean>;
    stopTheControllerServer(): Promise<void>;
    setPort(value: number): void;
    getActualPort(): number;
    getBaseUrlOfSUT(): string;
    private initExpress;
}
