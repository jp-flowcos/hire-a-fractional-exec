-- Seed data for HireAFractionalExec.com
-- Run this in Supabase SQL Editor after running 001_initial_schema.sql

-- ============================================
-- SAMPLE JOBS
-- ============================================

INSERT INTO jobs (title, company_name, company_url, description, role_type, location_type, location, salary_min, salary_max, salary_type, hours_per_week, apply_url, is_featured, is_approved, source, slug, tags) VALUES

-- Fractional COO jobs
('Fractional COO for Series A SaaS Company', 'GrowthStack', 'https://growthstack.io', E'We''re looking for an experienced fractional COO to help us scale from $2M to $5M ARR. You''ll own our operational infrastructure — building processes, scaling the team from 15 to 30, and creating the systems that let us deliver consistently.\n\n**Responsibilities:**\n- Design and implement scalable operational processes\n- Build hiring pipeline and onboarding systems\n- Create OKR framework and accountability structures\n- Manage cross-functional project execution\n- Report directly to the CEO\n\n**Requirements:**\n- 10+ years of operations experience\n- Experience scaling SaaS companies past $5M ARR\n- Strong background in process design and team building\n- Experience working in a fractional or consulting capacity', 'fractional_coo', 'remote', NULL, 5000, 8000, 'monthly', '10-15 hrs/week', 'https://growthstack.io/careers/fractional-coo', true, true, 'manual', 'fractional-coo-growthstack-series-a', ARRAY['saas', 'startup', 'series-a']),

('Fractional COO — E-commerce Brand ($3M Revenue)', 'Velvet & Co', 'https://velvetco.com', E'Velvet & Co is a DTC e-commerce brand doing $3M in annual revenue. We need a fractional COO to build our operational backbone — supply chain, fulfillment, team structure, and process design.\n\n**What you''ll do:**\n- Optimize supply chain and fulfillment operations\n- Build SOPs for core business processes\n- Hire and manage operations team members\n- Create dashboards and reporting systems\n- Support the founder in strategic planning\n\n**What we''re looking for:**\n- E-commerce operations experience (DTC preferred)\n- Track record of building ops teams from scratch\n- Experience with 3PL management and supply chain optimization', 'fractional_coo', 'remote', NULL, 4000, 7000, 'monthly', '10-15 hrs/week', 'https://velvetco.com/careers', false, true, 'manual', 'fractional-coo-velvet-ecommerce', ARRAY['ecommerce', 'dtc', 'startup']),

-- Fractional CMO jobs
('Fractional CMO for B2B Fintech Startup', 'PayBridge', 'https://paybridge.io', E'PayBridge is a seed-stage B2B fintech startup looking for a fractional CMO to build our go-to-market engine from scratch. You''ll define our positioning, build the marketing team, and own our growth strategy.\n\n**Responsibilities:**\n- Define brand positioning and messaging\n- Build and execute GTM strategy\n- Hire and manage marketing team (content, demand gen)\n- Set up marketing analytics and attribution\n- Collaborate with sales on pipeline generation\n\n**Requirements:**\n- 12+ years in B2B marketing leadership\n- Fintech or financial services experience preferred\n- Track record of building marketing functions from zero\n- Experience with ABM and content-led growth strategies', 'fractional_cmo', 'hybrid', 'New York, NY', 7000, 12000, 'monthly', '15-20 hrs/week', 'https://paybridge.io/jobs/fractional-cmo', true, true, 'manual', 'fractional-cmo-paybridge-fintech', ARRAY['fintech', 'b2b', 'seed-stage']),

-- Fractional CFO jobs
('Fractional CFO — Pre-Series A Startup', 'NomadHealth', 'https://nomadhealth.co', E'NomadHealth is a digital health startup preparing for our Series A raise. We need a fractional CFO to build our financial infrastructure, create investor-ready models, and support the fundraising process.\n\n**What you''ll own:**\n- Financial modeling and forecasting\n- Series A data room preparation\n- Cash flow management and runway planning\n- Board reporting and financial dashboards\n- Accounting system setup and oversight\n\n**Ideal candidate:**\n- Experience supporting startups through Series A raises\n- Healthcare or health-tech financial experience\n- Strong financial modeling skills\n- Experience with startup accounting systems (QBO, Brex, etc.)', 'fractional_cfo', 'remote', NULL, 4000, 8000, 'monthly', '10-15 hrs/week', 'https://nomadhealth.co/careers/fractional-cfo', false, true, 'manual', 'fractional-cfo-nomadhealth-series-a', ARRAY['healthtech', 'fundraising', 'startup']),

-- Fractional CTO jobs
('Fractional CTO for AI-Powered EdTech Platform', 'LearnLoop', 'https://learnloop.ai', E'LearnLoop is building an AI-powered learning platform. We have a small dev team (3 engineers) and need a fractional CTO to guide our technical architecture, establish engineering practices, and help us scale.\n\n**Responsibilities:**\n- Guide technical architecture and infrastructure decisions\n- Establish code review and development processes\n- Evaluate and manage AI/ML technology stack\n- Support engineering hiring and onboarding\n- Own technical due diligence for investor conversations\n\n**Requirements:**\n- 15+ years in software engineering, 5+ in leadership\n- Experience with AI/ML systems in production\n- Track record of scaling engineering teams\n- Experience with cloud infrastructure (AWS/GCP)\n- EdTech experience is a plus', 'fractional_cto', 'remote', NULL, 8000, 15000, 'monthly', '15-20 hrs/week', 'https://learnloop.ai/careers/cto', true, true, 'manual', 'fractional-cto-learnloop-ai-edtech', ARRAY['ai', 'edtech', 'startup']),

-- Fractional CRO jobs
('Fractional CRO — B2B SaaS ($1M-$3M ARR)', 'DataPulse', 'https://datapulse.io', E'DataPulse is a B2B SaaS analytics platform at $1.5M ARR. We need a fractional CRO to unify our sales and marketing efforts and build a repeatable revenue engine.\n\n**What you''ll do:**\n- Design and implement a scalable sales process\n- Align marketing and sales on pipeline targets\n- Build outbound and inbound playbooks\n- Set up CRM and revenue operations infrastructure\n- Hire and train the first dedicated sales reps\n\n**What we need:**\n- B2B SaaS revenue leadership experience\n- Track record of building sales processes from $1M to $5M+\n- Experience with PLG + sales-assisted motions\n- Strong CRM and sales operations background', 'fractional_cro', 'remote', NULL, 6000, 10000, 'monthly', '15 hrs/week', 'https://datapulse.io/careers/cro', false, true, 'manual', 'fractional-cro-datapulse-saas', ARRAY['saas', 'b2b', 'analytics']),

-- Fractional Chief of Staff jobs
('Fractional Chief of Staff to CEO', 'Amplify Ventures', 'https://amplifyventures.co', E'Amplify Ventures is a venture studio building multiple companies simultaneously. The CEO needs a fractional Chief of Staff to manage strategic initiatives, coordinate across portfolio companies, and keep everything on track.\n\n**Responsibilities:**\n- Manage 3-5 strategic projects simultaneously\n- Prepare board materials and investor updates\n- Coordinate across portfolio company leadership\n- Run weekly leadership meetings and track action items\n- Handle special projects and ad-hoc priorities\n\n**Requirements:**\n- 5+ years in strategy, consulting, or operations\n- Experience working directly with CEOs or founders\n- Exceptional project management and communication skills\n- Ability to context-switch across multiple initiatives\n- Venture capital or startup studio experience preferred', 'fractional_cos', 'hybrid', 'Austin, TX', 3000, 6000, 'monthly', '10-15 hrs/week', 'https://amplifyventures.co/chief-of-staff', false, true, 'manual', 'fractional-cos-amplify-ventures', ARRAY['venture-studio', 'strategy', 'startup']),

('Fractional Chief of Staff — Healthcare Startup', 'CareSync', 'https://caresync.health', E'CareSync is a Series A healthcare startup (50 employees). Our CEO needs a fractional Chief of Staff to drive strategic initiatives and improve cross-functional coordination.\n\n**What you''ll do:**\n- Own strategic project execution across departments\n- Build and maintain OKR tracking systems\n- Prepare materials for board meetings and all-hands\n- Facilitate cross-functional communication\n- Drive hiring process improvements\n\n**Ideal candidate:**\n- Background in healthcare, operations, or consulting\n- Experience supporting executive-level leadership\n- Strong analytical and communication skills\n- Comfortable with ambiguity and fast-paced environments', 'fractional_cos', 'remote', NULL, 2500, 5000, 'monthly', '10 hrs/week', 'https://caresync.health/jobs/cos', true, true, 'manual', 'fractional-cos-caresync-health', ARRAY['healthcare', 'series-a', 'startup']),

-- CHRO jobs
('Fractional CHRO for Scaling Startup (50→150 employees)', 'BuildRight', 'https://buildright.io', E'BuildRight is a construction tech startup scaling rapidly from 50 to 150 employees this year. We need a fractional CHRO to build our people infrastructure.\n\n**Responsibilities:**\n- Design compensation and benefits framework\n- Build performance management system\n- Create onboarding and training programs\n- Establish HR policies and compliance\n- Support leadership team development\n\n**Requirements:**\n- 10+ years in HR leadership roles\n- Experience scaling companies through rapid growth\n- Knowledge of employment law and compliance\n- Experience building people ops from scratch\n- Tech startup experience preferred', 'fractional_chro', 'remote', NULL, 4000, 7000, 'monthly', '10-15 hrs/week', 'https://buildright.io/careers/chro', false, true, 'manual', 'fractional-chro-buildright-contech', ARRAY['contech', 'startup', 'scaling']),

-- Head of Ops jobs
('Head of Operations — Agency (First Ops Hire)', 'Pixel Perfect', 'https://pixelperfect.agency', E'Pixel Perfect is a 20-person digital agency doing $2M in revenue. We''re making our first dedicated operations hire to bring order to our growing chaos.\n\n**What you''ll own:**\n- Project delivery process and resource allocation\n- Team utilization tracking and optimization\n- Client onboarding and handoff processes\n- Vendor and contractor management\n- Internal tools and systems setup\n\n**What we need:**\n- Agency or professional services operations experience\n- Strong project management background\n- Experience building processes for creative teams\n- Familiarity with project management tools (Asana, Monday, etc.)\n- Comfortable being a builder, not just a manager', 'head_of_ops', 'hybrid', 'Los Angeles, CA', 3000, 6000, 'monthly', '15-20 hrs/week', 'https://pixelperfect.agency/careers/head-of-ops', false, true, 'manual', 'head-of-ops-pixel-perfect-agency', ARRAY['agency', 'creative', 'first-hire']),

('Head of Operations — Remote SaaS Team', 'CloudBase', 'https://cloudbase.dev', E'CloudBase is a fully remote SaaS company with 25 team members. We need a Head of Operations to build the operational foundation for our next phase of growth.\n\n**Responsibilities:**\n- Design and implement remote-first operational processes\n- Build project management and communication systems\n- Own hiring pipeline and candidate experience\n- Create employee onboarding and offboarding workflows\n- Manage vendor relationships and procurement\n\n**Requirements:**\n- Experience running operations for remote/distributed teams\n- Strong background in process design and documentation\n- Experience with remote collaboration tools\n- Track record of building ops functions from scratch', 'head_of_ops', 'remote', NULL, 3500, 6000, 'monthly', '15 hrs/week', 'https://cloudbase.dev/jobs/head-of-ops', false, true, 'manual', 'head-of-ops-cloudbase-remote-saas', ARRAY['saas', 'remote', 'startup']);

-- ============================================
-- SALARY DATA
-- ============================================

INSERT INTO salary_data (role_type, company_stage, hours_per_week, monthly_retainer_low, monthly_retainer_high, source) VALUES
-- Fractional COO
('fractional_coo', 'pre_seed', 5, 2000, 4000, 'Market research 2026'),
('fractional_coo', 'seed', 10, 3000, 6000, 'Market research 2026'),
('fractional_coo', 'series_a', 15, 5000, 10000, 'Market research 2026'),
('fractional_coo', 'series_b_plus', 20, 8000, 15000, 'Market research 2026'),
('fractional_coo', 'bootstrapped', 10, 3000, 7000, 'Market research 2026'),

-- Fractional CMO
('fractional_cmo', 'pre_seed', 5, 2500, 5000, 'Market research 2026'),
('fractional_cmo', 'seed', 10, 5000, 8000, 'Market research 2026'),
('fractional_cmo', 'series_a', 15, 7000, 12000, 'Market research 2026'),
('fractional_cmo', 'series_b_plus', 20, 10000, 18000, 'Market research 2026'),
('fractional_cmo', 'bootstrapped', 10, 4000, 8000, 'Market research 2026'),

-- Fractional CFO
('fractional_cfo', 'pre_seed', 5, 2000, 4000, 'Market research 2026'),
('fractional_cfo', 'seed', 10, 3000, 6000, 'Market research 2026'),
('fractional_cfo', 'series_a', 15, 5000, 10000, 'Market research 2026'),
('fractional_cfo', 'series_b_plus', 20, 8000, 15000, 'Market research 2026'),
('fractional_cfo', 'bootstrapped', 10, 3000, 7000, 'Market research 2026'),

-- Fractional CTO
('fractional_cto', 'pre_seed', 5, 3000, 6000, 'Market research 2026'),
('fractional_cto', 'seed', 10, 5000, 10000, 'Market research 2026'),
('fractional_cto', 'series_a', 15, 8000, 15000, 'Market research 2026'),
('fractional_cto', 'series_b_plus', 20, 12000, 20000, 'Market research 2026'),
('fractional_cto', 'bootstrapped', 10, 5000, 10000, 'Market research 2026'),

-- Fractional CRO
('fractional_cro', 'pre_seed', 5, 2500, 5000, 'Market research 2026'),
('fractional_cro', 'seed', 10, 5000, 8000, 'Market research 2026'),
('fractional_cro', 'series_a', 15, 7000, 12000, 'Market research 2026'),
('fractional_cro', 'series_b_plus', 20, 10000, 18000, 'Market research 2026'),
('fractional_cro', 'bootstrapped', 10, 4000, 8000, 'Market research 2026'),

-- Fractional CHRO
('fractional_chro', 'pre_seed', 5, 2000, 3500, 'Market research 2026'),
('fractional_chro', 'seed', 10, 3000, 5000, 'Market research 2026'),
('fractional_chro', 'series_a', 15, 4000, 8000, 'Market research 2026'),
('fractional_chro', 'series_b_plus', 20, 6000, 12000, 'Market research 2026'),
('fractional_chro', 'bootstrapped', 10, 3000, 6000, 'Market research 2026'),

-- Fractional Chief of Staff
('fractional_cos', 'pre_seed', 5, 1500, 3000, 'Market research 2026'),
('fractional_cos', 'seed', 10, 2500, 5000, 'Market research 2026'),
('fractional_cos', 'series_a', 15, 4000, 8000, 'Market research 2026'),
('fractional_cos', 'series_b_plus', 20, 6000, 12000, 'Market research 2026'),
('fractional_cos', 'bootstrapped', 10, 2500, 5000, 'Market research 2026'),

-- Head of Ops
('head_of_ops', 'pre_seed', 5, 1500, 3000, 'Market research 2026'),
('head_of_ops', 'seed', 10, 3000, 5000, 'Market research 2026'),
('head_of_ops', 'series_a', 15, 4000, 7000, 'Market research 2026'),
('head_of_ops', 'series_b_plus', 20, 6000, 10000, 'Market research 2026'),
('head_of_ops', 'bootstrapped', 10, 2500, 5000, 'Market research 2026');
