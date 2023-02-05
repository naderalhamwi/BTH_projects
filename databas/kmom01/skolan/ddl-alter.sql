-- Delete column if EXISTS
--ALTER TABLE larare DROP COLUMN kompetens;

-- Add column to table
ALTER TABLE larare ADD COLUMN kompetens INT NOT NULL DEFAULT 1;

-- source ./ddl-alter.sql