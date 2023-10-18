-- INNVILGELSE -> INNVILGET
UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_BEREDSKAPSHJEM'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_BEREDSKAPSHJEM';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_HELE_FAMILIEN_TRYGDEAVTALE'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_HELE_FAMILIEN_TRYGDEAVTALE';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_HELE_FAMILIEN_PLIKTIG_MEDLEM'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_HELE_FAMILIEN_PLIKTIG_MEDLEM';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_SØKER_OG_BARN_PLIKTIG_MEDLEM'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_SØKER_OG_BARN_PLIKTIG_MEDLEM';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_ENIGHET_OM_OPPHØR_AV_AVTALE_OM_DELT_BOSTED'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_ENIGHET_OM_OPPHØR_AV_AVTALE_OM_DELT_BOSTED';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_VURDERING_HELE_FAMILIEN_FRIVILLIG_MEDLEM'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_VURDERING_HELE_FAMILIEN_FRIVILLIG_MEDLEM';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_UENIGHET_OM_OPPHØR_AV_AVTALE_OM_DELT_BOSTED'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_UENIGHET_OM_OPPHØR_AV_AVTALE_OM_DELT_BOSTED';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_HELE_FAMILIEN_FRIVILLIG_MEDLEM'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_HELE_FAMILIEN_FRIVILLIG_MEDLEM';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_VURDERING_HELE_FAMILIEN_PLIKTIG_MEDLEM'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_VURDERING_HELE_FAMILIEN_PLIKTIG_MEDLEM';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_SØKER_OG_BARN_OPPHOLD_I_UTLANDET_IKKE_MER_ENN_3_MÅNEDER'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_SØKER_OG_BARN_OPPHOLD_I_UTLANDET_IKKE_MER_ENN_3_MÅNEDER';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_SØKER_OG_BARN_FRIVILLIG_MEDLEM'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_SØKER_OG_BARN_FRIVILLIG_MEDLEM';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_VURDERING_SØKER_OG_BARN_FRIVILLIG_MEDLEM'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_VURDERING_SØKER_OG_BARN_FRIVILLIG_MEDLEM';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_ETTERBETALING_3_ÅR'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_ETTERBETALING_3_ÅR';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_SØKER_OG_BARN_TRYGDEAVTALE'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_SØKER_OG_BARN_TRYGDEAVTALE';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_ALENE_FRA_FØDSEL'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_ALENE_FRA_FØDSEL';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_VURDERING_SØKER_OG_BARN_PLIKTIG_MEDLEM'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_VURDERING_SØKER_OG_BARN_PLIKTIG_MEDLEM';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'INNVILGET_BARN_OPPHOLD_I_UTLANDET_IKKE_MER_ENN_3_MÅNEDER'
WHERE vedtak_begrunnelse_spesifikasjon like 'INNVILGELSE_BARN_OPPHOLD_I_UTLANDET_IKKE_MER_ENN_3_MÅNEDER';


-- ENDRET_UTBETALINGSPERIODE -> ENDRET_UTBETALING
UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'ENDRET_UTBETALING_DELT_BOSTED_FULL_UTBETALING'
WHERE vedtak_begrunnelse_spesifikasjon like 'ENDRET_UTBETALINGSPERIODE_DELT_BOSTED_FULL_UTBETALING';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'ENDRET_UTBETALING_DELT_BOSTED_INGEN_UTBETALING'
WHERE vedtak_begrunnelse_spesifikasjon like 'ENDRET_UTBETALINGSPERIODE_DELT_BOSTED_INGEN_UTBETALING';

-- PERIODE_ETTER_ENDRET_UTBETALING -> ETTER_ENDRET_UTBETALING
UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'ETTER_ENDRET_UTBETALING_RETTSAVGJØRELSE_DELT_BOSTED'
WHERE vedtak_begrunnelse_spesifikasjon like 'PERIODE_ETTER_ENDRET_UTBETALING_RETTSAVGJØRELSE_DELT_BOSTED';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'ETTER_ENDRET_UTBETALING_AVTALE_DELT_BOSTED_FØLGES'
WHERE vedtak_begrunnelse_spesifikasjon like 'PERIODE_ETTER_ENDRET_UTBETALING_AVTALE_DELT_BOSTED_FØLGES';

UPDATE vedtaksbegrunnelse
SET vedtak_begrunnelse_spesifikasjon = 'ETTER_ENDRET_UTBETALING_HAR_AVTALE_DELT_BOSTED'
WHERE vedtak_begrunnelse_spesifikasjon like 'PERIODE_ETTER_ENDRET_UTBETALING_HAR_AVTALE_DELT_BOSTED';