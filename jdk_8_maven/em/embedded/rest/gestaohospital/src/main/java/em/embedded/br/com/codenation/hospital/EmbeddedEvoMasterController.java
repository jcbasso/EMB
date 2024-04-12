package em.embedded.br.com.codenation.hospital;

import br.com.codenation.hospital.GestaohospitalarApplication;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.evomaster.client.java.controller.EmbeddedSutController;
import org.evomaster.client.java.controller.InstrumentedSutStarter;
import org.evomaster.client.java.controller.api.dto.auth.AuthenticationDto;
import org.evomaster.client.java.controller.api.dto.SutInfoDto;
import org.evomaster.client.java.sql.DbSpecification;
import org.evomaster.client.java.controller.problem.ProblemInfo;
import org.evomaster.client.java.controller.problem.RestProblem;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.testcontainers.containers.GenericContainer;

import java.util.Collections;
import java.util.List;
import java.util.Map;


/**
 * Class used to start/stop the SUT. This will be controller by the EvoMaster process
 */
public class EmbeddedEvoMasterController extends EmbeddedSutController {

    public static void main(String[] args) {

        int port = 40100;
        if (args.length > 0) {
            port = Integer.parseInt(args[0]);
        }

        EmbeddedEvoMasterController controller = new EmbeddedEvoMasterController(port);
        InstrumentedSutStarter starter = new InstrumentedSutStarter(controller);

        starter.start();
    }


    private ConfigurableApplicationContext ctx;

    private static final int MONGODB_PORT = 27017;

    private static final String MONGODB_VERSION = "6.0";

    private static final String MONGODB_DATABASE_NAME = "HospitalDB";

    private static final GenericContainer mongodbContainer = new GenericContainer("mongo:" + MONGODB_VERSION)
            .withTmpFs(Collections.singletonMap("/data/db", "rw"))
            .withExposedPorts(MONGODB_PORT);

    private MongoClient mongoClient;

    public EmbeddedEvoMasterController() {
        this(0);
    }

    public EmbeddedEvoMasterController(int port) {
        setControllerPort(port);
    }


    @Override
    public String startSut() {

        mongodbContainer.start();
        mongoClient = MongoClients.create("mongodb://" + mongodbContainer.getContainerIpAddress() + ":" + mongodbContainer.getMappedPort(MONGODB_PORT));

        ctx = SpringApplication.run(GestaohospitalarApplication.class,
                new String[]{"--server.port=0",
                        "--liquibase.enabled=false",
                        "--spring.data.mongodb.uri=mongodb://" + mongodbContainer.getContainerIpAddress() + ":" + mongodbContainer.getMappedPort(MONGODB_PORT) + "/" + MONGODB_DATABASE_NAME,
                        "--spring.datasource.username=sa",
                        "--spring.datasource.password",
                        "--dg-toolkit.derby.port=0",
                        "--spring.cache.type=NONE"
                });

        return "http://localhost:" + getSutPort();
    }

    protected int getSutPort() {
        return (Integer) ((Map) ctx.getEnvironment()
                .getPropertySources().get("server.ports").getSource())
                .get("local.server.port");
    }


    @Override
    public boolean isSutRunning() {
        return ctx != null && ctx.isRunning();
    }

    @Override
    public void stopSut() {
        ctx.stop();
        ctx.close();

        mongodbContainer.stop();
    }

    @Override
    public String getPackagePrefixesToCover() {
        return "br.com.codenation.hospital.";
    }

    @Override
    public void resetStateOfSUT() {
        mongoClient.getDatabase(MONGODB_DATABASE_NAME).drop();
    }

    @Override
    public boolean handleLocalAuthenticationSetup(String authenticationInfo) {
        return super.handleLocalAuthenticationSetup(authenticationInfo);
    }

    @Override
    public List<DbSpecification> getDbSpecifications() {
        return null;
    }

    @Override
    public void resetDatabase(List<String> tablesToClean) {
        super.resetDatabase(tablesToClean);
    }


    @Override
    public List<AuthenticationDto> getInfoForAuthentication() {
        return null;
    }


    @Override
    public ProblemInfo getProblemInfo() {
        return new RestProblem(
                "http://localhost:" + getSutPort() + "/v2/api-docs",
                null
        );
    }

    @Override
    public SutInfoDto.OutputFormat getPreferredOutputFormat() {
        return SutInfoDto.OutputFormat.JAVA_JUNIT_4;
    }

    @Override
    public Object getMongoConnection() {
        return mongoClient;
    }
}
