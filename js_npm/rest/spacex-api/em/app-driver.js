const dbHandler = require("./db-handler");
const em = require("evomaster-client-js");


class AppController extends em.SutController {

    getInfoForAuthentication() {
        let header = new em.dto.HeaderDto();
        header.name = "spaceX-key";
        header.value = "foo";
        let auth = new em.dto.AuthenticationDto();
        auth.name = "spaceX-foo";
        auth.headers = [header];
        return [auth];
    }

    getPreferredOutputFormat() {
        return em.dto.OutputFormat.JS_JEST;
    }

    getProblemInfo() {
        const dto = new em.dto.RestProblemDto();
        dto.openApiUrl = "http://localhost:" + this.port + "/openapi.json";
        return dto;
    }

    isSutRunning() {
        if (!this.server) {
            return false;
        }
        return this.server.listening;
    }

    resetStateOfSUT() {
        return new Promise((async resolve => {
            await dbHandler.cleanDb();
            dbHandler.initAuth('foo');
            resolve();
        }))
    }

    startSut() {
        return new Promise(async (resolve) => {

            await dbHandler.startDb();

            this.server = require("./appAPIs");
            this.server.listen(0, "localhost", () => {
                this.port = this.server.address().port;
                resolve("http://localhost:" + this.port);
            });

        });
    }

    stopSut() {
        return new Promise((async resolve => {
                await dbHandler.stopDb();
                this.server.close(() => {
                    process.exit();
                    resolve();
                });
            })
        );
    }
}

module.exports = AppController;