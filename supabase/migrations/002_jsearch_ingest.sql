-- Adds fields needed for JSearch API ingest + dedup.
-- Assumes 001_initial_schema.sql has already been applied.
-- Run in Supabase SQL Editor.

-- Add 'jsearch' to the source_type enum so we can tag API-sourced listings.
ALTER TYPE source_type ADD VALUE IF NOT EXISTS 'jsearch';

-- external_id stores the JSearch job_id for dedup across ingest runs.
ALTER TABLE jobs ADD COLUMN IF NOT EXISTS external_id TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS idx_jobs_external_id ON jobs (external_id)
  WHERE external_id IS NOT NULL;
