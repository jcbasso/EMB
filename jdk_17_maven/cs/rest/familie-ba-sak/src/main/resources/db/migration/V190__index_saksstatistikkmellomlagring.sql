create index saksstatistikk_mellomlagring_sendt_tid_null_idx on saksstatistikk_mellomlagring (sendt_tid) where sendt_tid is null;