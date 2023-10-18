package no.nav.tag.tiltaksgjennomforing.avtale.events;

import lombok.Value;
import no.nav.tag.tiltaksgjennomforing.avtale.Avtale;

import java.time.LocalDate;

@Value
public class RefusjonKlar {
    Avtale avtale;
    LocalDate fristForGodkjenning;
}
