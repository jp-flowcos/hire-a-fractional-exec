-- HireAFractionalExec.com — Initial Database Schema
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor)

-- ============================================
-- ENUM TYPES
-- ============================================

CREATE TYPE role_type AS ENUM (
  'fractional_coo',
  'fractional_cmo',
  'fractional_cfo',
  'fractional_cto',
  'fractional_cro',
  'fractional_chro',
  'fractional_cos',
  'head_of_ops',
  'other'
);

CREATE TYPE location_type AS ENUM (
  'remote',
  'hybrid',
  'onsite'
);

CREATE TYPE salary_type AS ENUM (
  'annual',
  'monthly',
  'hourly'
);

CREATE TYPE source_type AS ENUM (
  'manual',
  'scraped',
  'direct_post',
  'api'
);

CREATE TYPE subscriber_type AS ENUM (
  'job_seeker',
  'employer',
  'both'
);

CREATE TYPE company_stage AS ENUM (
  'pre_seed',
  'seed',
  'series_a',
  'series_b_plus',
  'bootstrapped'
);

-- ============================================
-- TABLES
-- ============================================

-- Jobs table
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  company_name TEXT NOT NULL,
  company_logo_url TEXT,
  company_url TEXT,
  description TEXT NOT NULL,
  role_type role_type NOT NULL,
  location_type location_type NOT NULL,
  location TEXT,
  salary_min INTEGER,
  salary_max INTEGER,
  salary_type salary_type,
  hours_per_week TEXT,
  apply_url TEXT NOT NULL,
  apply_email TEXT,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  source source_type NOT NULL DEFAULT 'manual',
  source_url TEXT,
  posted_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (now() + INTERVAL '30 days'),
  slug TEXT UNIQUE NOT NULL,
  tags TEXT[],
  stripe_payment_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Subscribers table
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role_preferences role_type[],
  subscriber_type subscriber_type NOT NULL DEFAULT 'job_seeker',
  subscribed_at TIMESTAMPTZ DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Salary data table (powers the salary calculator)
CREATE TABLE salary_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_type role_type NOT NULL,
  company_stage company_stage NOT NULL,
  hours_per_week INTEGER NOT NULL,
  monthly_retainer_low INTEGER NOT NULL,
  monthly_retainer_high INTEGER NOT NULL,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_jobs_role_type ON jobs (role_type);
CREATE INDEX idx_jobs_is_approved ON jobs (is_approved);
CREATE INDEX idx_jobs_posted_at ON jobs (posted_at DESC);
CREATE INDEX idx_jobs_slug ON jobs (slug);
CREATE INDEX idx_jobs_is_featured ON jobs (is_featured);
CREATE INDEX idx_jobs_expires_at ON jobs (expires_at);

CREATE INDEX idx_subscribers_email ON subscribers (email);
CREATE INDEX idx_subscribers_is_active ON subscribers (is_active);

CREATE INDEX idx_salary_data_role_type ON salary_data (role_type);
CREATE INDEX idx_salary_data_company_stage ON salary_data (company_stage);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE salary_data ENABLE ROW LEVEL SECURITY;

-- Public can read approved, non-expired jobs
CREATE POLICY "Public can read approved jobs"
  ON jobs FOR SELECT
  USING (is_approved = true AND expires_at > now());

-- Service role can do everything (used by our API)
CREATE POLICY "Service role full access on jobs"
  ON jobs FOR ALL
  USING (auth.role() = 'service_role');

-- Only service role can access subscribers
CREATE POLICY "Service role full access on subscribers"
  ON subscribers FOR ALL
  USING (auth.role() = 'service_role');

-- Public can read salary data
CREATE POLICY "Public can read salary data"
  ON salary_data FOR SELECT
  USING (true);

-- Service role can manage salary data
CREATE POLICY "Service role full access on salary_data"
  ON salary_data FOR ALL
  USING (auth.role() = 'service_role');

-- ============================================
-- AUTO-UPDATE updated_at TRIGGER
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER jobs_updated_at
  BEFORE UPDATE ON jobs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
