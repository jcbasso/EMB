package no.nav.tag.tiltaksgjennomforing.varsel.kafka;

import org.apache.kafka.clients.CommonClientConfigs;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.config.SslConfigs;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.support.serializer.JsonSerializer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;

import java.util.HashMap;
import java.util.Map;

@ConditionalOnProperty("tiltaksgjennomforing.kafka.enabled")
@Configuration
@EnableKafka
public class RefusjonVarselTestProducerConfig {

    @Value("${no.nav.gcp.kafka.aiven.bootstrap-servers}")
    private String bootstrapServers;
    @Value("${no.nav.gcp.kafka.aiven.security-protocol}")
    private String securityProtocol;
    @Value("${no.nav.gcp.kafka.aiven.truststore-path}")
    private String sslTruststoreLocationEnvKey;
    @Value("${no.nav.gcp.kafka.aiven.truststore-password}")
    private String sslTruststorePasswordEnvKey;
    @Value("${no.nav.gcp.kafka.aiven.keystore-path}")
    private String sslKeystoreLocationEnvKey;
    @Value("${no.nav.gcp.kafka.aiven.keystore-password}")
    private String sslKeystorePasswordEnvKey;

    private Map<String, Object> producerKafkaConfig() {
        final String javaKeystore = "jks";
        final String pkcs12 = "PKCS12";
        Map<String, Object> props = new HashMap<>();

        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        props.put(CommonClientConfigs.SECURITY_PROTOCOL_CONFIG, securityProtocol);
        props.put(CommonClientConfigs.GROUP_ID_CONFIG, "tiltaksgjennomforing-api");
        props.put(SslConfigs.SSL_ENDPOINT_IDENTIFICATION_ALGORITHM_CONFIG, "");
        props.put(SslConfigs.SSL_TRUSTSTORE_TYPE_CONFIG, javaKeystore);
        props.put(SslConfigs.SSL_KEYSTORE_TYPE_CONFIG, pkcs12);
        props.put(SslConfigs.SSL_TRUSTSTORE_LOCATION_CONFIG, sslTruststoreLocationEnvKey);
        props.put(SslConfigs.SSL_TRUSTSTORE_PASSWORD_CONFIG, sslTruststorePasswordEnvKey);
        props.put(SslConfigs.SSL_KEYSTORE_LOCATION_CONFIG, sslKeystoreLocationEnvKey);
        props.put(SslConfigs.SSL_KEYSTORE_PASSWORD_CONFIG, sslKeystorePasswordEnvKey);
        return props;
    }

    @Bean
    public KafkaTemplate<String, RefusjonVarselMelding> refusjonVarselTestMeldingKafkaTemplate() {
        return new KafkaTemplate<>(new DefaultKafkaProducerFactory<>(producerKafkaConfig()));
    }

}
