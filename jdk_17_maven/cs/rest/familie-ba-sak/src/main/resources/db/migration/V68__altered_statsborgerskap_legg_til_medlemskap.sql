ALTER TABLE PO_PERSON DROP COLUMN medlemskap;
ALTER TABLE PO_PERSON DROP COLUMN statsborgerskap_id;
ALTER TABLE PO_STATSBORGERSKAP ADD COLUMN medlemskap varchar DEFAULT 'UKJENT' NOT NULL;