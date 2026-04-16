/**
 * Category content map for SEO landing pages.
 * Each category has its own route, title, meta description, definition block,
 * body copy, and FAQ content.
 *
 * Content standards locked in .agents/product-marketing-context.md §4.5:
 *  - H1: "Fractional {Role} jobs" (keyword-first, no "— Hire or Get Hired").
 *  - Subheadline: "Every fractional {Full-title} role posted in the last 30 days.
 *    Stop hunting. Apply and get back to work."
 *  - Body: 3 paragraphs. (1) 40-60 word definition block for snippets.
 *    (2) Statistic-dense reality check. (3) Compensation + pricing.
 *  - Operator-facing voice (80% of traffic per §2 audience mix).
 *  - Retainer ranges from hireafractionalexec-seo-keywords.md §1 (2026 data).
 *  - Anonymized interview quotes permitted; Jared byline on COO/ops pages only.
 *
 * Market stats for AEO citation (from hireafractionalexec-seo-keywords.md):
 *  - Fractional market growing 46% YoY
 *  - 72% of CEOs plan to increase fractional use
 *  - 25% of US businesses use fractional → 35% projected end of 2026
 *  - Fractional workforce doubled 60K → 120K (2022-2024)
 */

const categories = {
  "fractional-coo-jobs": {
    roleType: "fractional_coo",
    title: "Fractional COO Jobs",
    h1: "Fractional COO jobs",
    subheadline:
      "Every fractional Chief Operating Officer role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    metaTitle: "Fractional COO Jobs | HireAFractionalExec",
    metaDescription:
      "Every fractional Chief Operating Officer role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    definition:
      "A fractional COO is a part-time Chief Operating Officer who builds operational systems, scales teams, and frees up founder time — typically working 10-15 hours per week across 2-4 client companies.",
    author: "Jared Perry",
    authorTitle: "Practicing fractional COO",
    body: `A fractional COO is a part-time Chief Operating Officer who builds operational systems, scales teams, and frees up founder time. Most engagements run 10-15 hours per week across 2-4 concurrent clients. Scope is clear: design repeatable processes, establish team structures, set up accountability systems, and hand it off once it runs without you.

The fractional exec market grew 46% YoY into 2026, and 72% of CEOs plan to increase fractional usage in the next 12 months. The fractional workforce doubled from 60,000 to 120,000 professionals between 2022 and 2024. Most fractional COO engagements are fully remote, 3-9 months in duration, with a mix of weekly leadership meetings and deep-focus days. Experienced operators run 2-4 clients at once; more than 4 becomes context-switching, not operating.

Fractional COO rates typically run $8,000-$18,000 per month per client in 2026 (source: market research, April 2026). Senior operators with scale-up or enterprise experience charge the top of that range; newer fractionals start at $4,000-$6,000 per month per client and build case studies before raising. "Part-time COO," "interim COO," and "fractional COO" are used interchangeably — employers sometimes prefer "interim" when there's a defined end date tied to a full-time hire or exit.`,
    faqs: [
      {
        question: "How much does a fractional COO charge per month?",
        answer:
          "Fractional COO retainers run $8,000-$18,000 per month per client in 2026. Senior operators with scale-up or enterprise experience charge the top of that range. Newer fractionals start at $4,000-$6,000 and build case studies before raising rates.",
      },
      {
        question: "How many fractional COO clients can one person handle?",
        answer:
          "Two to four is the sustainable range. One client at 20 hours a week produces the same income as three clients at 10 hours each — but three clients give you revenue diversification and broader pattern exposure. Past four clients, you're context-switching instead of operating, and quality drops.",
      },
      {
        question: "How do I land my first fractional COO role?",
        answer:
          "Most first fractional COO engagements come from founders who already know your work — an ex-colleague, a company you advised, or a portfolio founder at a VC that knows you. Ship one pro-bono or discounted engagement first to build a case study, then use that specific outcome (not a generic resume) to close paid retainers. Job boards like this one work best once you have at least one engagement to reference.",
      },
      {
        question: "What does a fractional COO actually do?",
        answer:
          "A fractional COO owns operational leadership part-time: process design, team structures, hiring pipelines, cross-functional coordination, and accountability systems. They embed with your team, run your meetings, and own outcomes — not just recommendations.",
      },
      {
        question: "How is a fractional COO different from a consultant?",
        answer:
          "A consultant advises. A fractional COO executes. They sit in your leadership meetings, manage your people, own delivery, and stay long enough to watch the systems run. Most engagements are 3-9 months; consulting engagements are typically shorter and advisory-only.",
      },
      {
        question: "How long is a typical fractional COO engagement?",
        answer:
          "3-9 months is the common range. Some evolve into 12+ month retainers; others wrap once the founder hires a full-time COO. Shorter-than-3-month engagements are usually mislabeled — they're consulting engagements, not fractional COO work.",
      },
      {
        question: "When should a founder hire a fractional COO?",
        answer:
          "When the founder spends more than half their time on operations, when the team has grown past 10 people, when delivery is becoming inconsistent, or when the company needs operational infrastructure before making a full-time COO hire.",
      },
      {
        question: "Should I charge hourly or by retainer as a fractional COO?",
        answer:
          "Retainer. Hourly billing caps your income and incentivizes clients to minimize your involvement. A monthly retainer ($8,000-$18,000) aligns incentives — the client thinks of you as their COO, not a contractor watching a clock. One fractional COO we interviewed went from 9-10 clients earning 50% less to 5 clients earning 50% more after switching from hourly to retainer.",
      },
      {
        question: "How do I handle the feast-or-famine cycle as a fractional COO?",
        answer:
          "Build a 3-month cash reserve before going full-time fractional. Keep your pipeline warm even when fully booked — warm relationships with 2-3 potential clients at all times. When an engagement ends, you should already have a conversation in progress. Check curated job boards like this one weekly so you're never starting from zero.",
      },
    ],
    relatedCategories: ["fractional-cos-jobs", "head-of-ops-jobs", "fractional-cmo-jobs"],
    keywords: ["fractional coo jobs", "part-time coo", "fractional chief operating officer", "interim coo"],
  },

  "fractional-cmo-jobs": {
    roleType: "fractional_cmo",
    title: "Fractional CMO Jobs",
    h1: "Fractional CMO jobs",
    subheadline:
      "Every fractional Chief Marketing Officer role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    metaTitle: "Fractional CMO Jobs | HireAFractionalExec",
    metaDescription:
      "Every fractional Chief Marketing Officer role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    definition:
      "A fractional CMO is a part-time Chief Marketing Officer who leads marketing strategy, builds the team, and drives growth — typically working 10-20 hours per week across 2-3 client companies.",
    body: `A fractional CMO is a part-time Chief Marketing Officer who leads marketing strategy, builds teams, and drives growth. Engagements typically run 10-20 hours per week per client, often with 2-3 clients at once. Scope covers positioning, go-to-market strategy, channel prioritization, team hiring, and marketing analytics — everything a full-time CMO would own, compressed into the hours where strategic leverage matters most.

The fractional executive market grew 46% YoY into 2026, and the fractional CMO category alone is $1.27B in 2026, projected to reach $2.68B by 2031. 72% of CEOs plan to increase fractional usage in the next 12 months. Most fractional CMO engagements are fully remote, 6-12 months in duration, and focused on a specific inflection: launching a new product, scaling marketing from zero, or bridging the gap to a full-time hire.

Fractional CMO rates typically run $8,000-$22,000 per month per client in 2026 — the widest range of any fractional role, reflecting the variety of scope from "advisory only" to "running the entire marketing function." B2B SaaS and fintech engagements tend to cluster at the top of that range. "Part-time CMO" and "fractional CMO" are used interchangeably; "marketing consultant" usually means something different (project-based, no team leadership).`,
    faqs: [
      {
        question: "How much does a fractional CMO charge per month?",
        answer:
          "Fractional CMO retainers run $8,000-$22,000 per month per client in 2026 — the widest range of any fractional role. B2B SaaS, fintech, and private-equity-backed companies tend to pay the top of the range. Newer fractionals start at $5,000-$8,000 and build case studies before raising.",
      },
      {
        question: "How many fractional CMO clients can one person handle?",
        answer:
          "Two to three concurrent clients is typical. CMO work requires deeper context-switching than some other fractional roles because brand, positioning, and team-building all require sustained attention. Four clients is possible but pushes quality.",
      },
      {
        question: "How do I land my first fractional CMO role?",
        answer:
          "Most first fractional CMO engagements come through prior colleagues, ex-founders you've worked with, or via a proven portfolio of marketing wins at named companies. Package your strongest outcome (revenue attribution, launch success, team scale-up) into one case study, use it everywhere, and pitch fractional as a lower-risk way for founders to get that same result.",
      },
      {
        question: "What does a fractional CMO actually do?",
        answer:
          "A fractional CMO owns marketing strategy and execution oversight: positioning, GTM, channel mix, team hiring and management, marketing-sales alignment, and attribution. They're hands-on enough to hire the right people and hands-off enough to not do the day-to-day campaigns themselves.",
      },
      {
        question: "How long is a typical fractional CMO engagement?",
        answer:
          "6-12 months is the most common range. Some evolve into ongoing advisory relationships at reduced hours; others conclude when a full-time CMO is hired. Fractional CMO engagements tend to be longer than fractional COO engagements because brand and positioning work compound over time.",
      },
      {
        question: "When does a company need a fractional CMO vs a marketing manager?",
        answer:
          "A fractional CMO is right when the company needs strategic direction on positioning, channel mix, and team building — not when they need someone to run paid ads or manage a calendar. If the work is mostly execution, hire a marketing manager or agency. If the work is 'what should we be doing and why?', it's fractional CMO territory.",
      },
      {
        question: "How do I avoid scope creep as a fractional CMO?",
        answer:
          "Define the engagement scope in writing before day one: which channels, which metrics, who reports to you, and what's explicitly out of scope. Review scope quarterly. The most common trap is getting pulled into execution (writing copy, managing ads) when you were hired for strategy. If the client needs execution, help them hire for it — don't absorb it into your retainer.",
      },
      {
        question: "How do I build a fractional CMO pipeline between clients?",
        answer:
          "Three channels matter most: your existing network (highest conversion), VC/PE portfolio introductions (high quality leads), and LinkedIn content demonstrating specific marketing outcomes you've driven. Check curated fractional job boards weekly. Most fractional CMOs who maintain a steady 2-3 client portfolio credit consistent LinkedIn presence and staying visible to founders they've worked with before.",
      },
    ],
    relatedCategories: ["fractional-cro-jobs", "fractional-coo-jobs", "fractional-cto-jobs"],
    keywords: ["fractional cmo jobs", "part-time cmo", "fractional chief marketing officer", "interim cmo"],
  },

  "fractional-cfo-jobs": {
    roleType: "fractional_cfo",
    title: "Fractional CFO Jobs",
    h1: "Fractional CFO jobs",
    subheadline:
      "Every fractional Chief Financial Officer role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    metaTitle: "Fractional CFO Jobs | HireAFractionalExec",
    metaDescription:
      "Every fractional Chief Financial Officer role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    definition:
      "A fractional CFO is a part-time Chief Financial Officer who builds financial infrastructure, manages cash flow, supports fundraising, and provides strategic finance leadership — typically working 10-15 hours per week across 2-4 clients.",
    body: `A fractional CFO is a part-time Chief Financial Officer who provides strategic finance leadership beyond what a bookkeeper or controller can offer. Engagements typically run 10-15 hours per week per client, often with 2-4 clients at once. Scope covers financial modeling, cash flow management, fundraising support, board reporting, and accounting system oversight — the strategic finance work that determines whether a company makes the right hiring and spending decisions.

The fractional CFO category is the most established of any fractional exec role — CFOs were doing this before "fractional" had a name. 72% of CEOs plan to increase fractional usage through 2026, and the fractional workforce has doubled from 60,000 to 120,000 professionals since 2022. Most fractional CFO engagements are fully remote, 6-18 months in duration, with peaks around fundraising cycles (Series A prep, bridge rounds, annual budget).

Fractional CFO rates typically run $8,000-$18,000 per month per client in 2026. Fundraising-heavy engagements (Series A data rooms, financial modeling for a raise) command the top of the range because the work is compressed into 60-90 days. "Fractional CFO," "part-time CFO," and "outsourced CFO" are used interchangeably. Compare fractional rates to a full-time CFO at $200K-$350K plus equity — the economics favor fractional for any company under ~$15M ARR.`,
    faqs: [
      {
        question: "How much does a fractional CFO charge per month?",
        answer:
          "Fractional CFO retainers run $8,000-$18,000 per month per client in 2026. Fundraising-heavy engagements (Series A modeling, data room prep) command the top of the range because the work is compressed into 60-90 days. Ongoing advisory retainers cluster at $6,000-$12,000.",
      },
      {
        question: "How many fractional CFO clients can one person handle?",
        answer:
          "Three to four clients is the sustainable range for experienced fractional CFOs. Most CFO work is cyclical (monthly close, quarterly board) so 4 clients' worth of cycles fits into 40-50 billable hours per week when managed well.",
      },
      {
        question: "How do I land my first fractional CFO role?",
        answer:
          "Fractional CFO is the most mature fractional category, which means the typical path is different: prior CFO experience at a VC-backed company, or a Big 4 / controller background followed by a move to startup finance. First engagements often come through accountant referrals, VC portfolio introductions, or prior CEO relationships.",
      },
      {
        question: "What does a fractional CFO actually do?",
        answer:
          "A fractional CFO owns strategic finance: financial modeling, cash flow management, fundraising support, board reporting, budget vs actuals, and accounting system design. They work above the controller or bookkeeper — managing, not doing, the day-to-day transactional work.",
      },
      {
        question: "When does a company need a fractional CFO?",
        answer:
          "When the company is preparing to raise capital, when revenue crosses $1M and financial complexity grows, when investors start asking for monthly reporting, or when the founder can't confidently answer 'what's our runway?' without a spreadsheet refresh.",
      },
      {
        question: "How is a fractional CFO different from a controller or bookkeeper?",
        answer:
          "A bookkeeper records transactions. A controller manages monthly close and basic reporting. A fractional CFO does financial strategy: modeling, forecasting, fundraising support, and board-level communication. Most companies need all three at different points, but they're distinct roles.",
      },
      {
        question: "How do I price a fractional CFO engagement during a fundraise?",
        answer:
          "Fundraising-heavy engagements (Series A data rooms, financial modeling, investor decks) command the top of the retainer range ($14,000-$18,000/month) because the work is compressed into 60-90 days and the stakes are high. Some fractional CFOs also negotiate a success bonus tied to the round closing. Don't bill hourly for fundraise work — scope is unpredictable and hourly incentivizes the wrong behavior.",
      },
      {
        question: "How do I manage multiple fractional CFO clients during month-end close?",
        answer:
          "Stagger your close schedules. Most companies can flex their internal close date by 2-3 days, so negotiate close weeks that don't overlap. With 3-4 clients, you'll likely have 2 closes in week 1 and 2 in week 2 of each month. Build a close checklist per client so nothing falls through the cracks during the crunch.",
      },
    ],
    relatedCategories: ["fractional-coo-jobs", "fractional-cos-jobs", "fractional-cro-jobs"],
    keywords: ["fractional cfo jobs", "part-time cfo", "fractional chief financial officer", "outsourced cfo"],
  },

  "fractional-cto-jobs": {
    roleType: "fractional_cto",
    title: "Fractional CTO Jobs",
    h1: "Fractional CTO jobs",
    subheadline:
      "Every fractional Chief Technology Officer role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    metaTitle: "Fractional CTO Jobs | HireAFractionalExec",
    metaDescription:
      "Every fractional Chief Technology Officer role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    definition:
      "A fractional CTO is a part-time Chief Technology Officer who provides technical leadership — guiding architecture, scaling engineering teams, and owning technical strategy — typically working 10-20 hours per week across 2-3 clients.",
    body: `A fractional CTO is a part-time Chief Technology Officer who provides senior technical leadership without the full-time commitment. Engagements typically run 10-20 hours per week per client, often with 2-3 clients at once. Scope covers architecture decisions, engineering hiring, technical due diligence, build-vs-buy analysis, and team processes. Most fractional CTOs focus on strategy and leadership rather than writing production code, though some do both.

The fractional executive market grew 46% YoY into 2026, and fractional CTOs are particularly in demand at the MVP-to-scale transition and at AI-driven startups where the founding team lacks senior AI/ML experience. 72% of CEOs plan to increase fractional usage in the next 12 months. Most fractional CTO engagements are fully remote, 6-12 months in duration, with peaks during platform migrations, technical due diligence for fundraising, or transitions from agency-built MVPs to in-house engineering teams.

Fractional CTO rates typically run $10,000-$22,000 per month per client in 2026 — the highest range of any fractional role, reflecting the scarcity of senior technical leadership. Engagements with AI, machine learning, or compliance-heavy domains (healthtech, fintech) command the top of the range. "Part-time CTO" and "fractional CTO" are used interchangeably; "technical advisor" usually means fewer hours and no team management responsibility.`,
    faqs: [
      {
        question: "How much does a fractional CTO charge per month?",
        answer:
          "Fractional CTO retainers run $10,000-$22,000 per month per client in 2026 — the highest of any fractional role. AI/ML, healthtech, and fintech engagements command the top of the range because of technical scarcity and compliance complexity.",
      },
      {
        question: "How many fractional CTO clients can one person handle?",
        answer:
          "Two to three clients is typical. CTO work requires deeper technical context per client than some other fractional roles — you need to know the codebase, the stack, and the team's strengths to make good architecture decisions. Four clients becomes context-switching.",
      },
      {
        question: "Can a fractional CTO write code?",
        answer:
          "Some do, most don't. The majority of fractional CTOs focus on architecture, hiring, and technical strategy rather than shipping production code. If a company needs hands-on coding, a senior engineer or tech lead is usually a better fit than a fractional CTO. Clarify upfront in the engagement scope.",
      },
      {
        question: "How do I land my first fractional CTO role?",
        answer:
          "Most first fractional CTO engagements come through prior CEO relationships or by advising on technical due diligence for a VC. A common path: senior engineering leader at a scale-up takes on one discounted engagement with a former colleague's company, builds a case study, then uses that to land paid retainers.",
      },
      {
        question: "What does a fractional CTO actually do?",
        answer:
          "A fractional CTO owns technical strategy: architecture decisions, stack evaluation, engineering hiring, code review process, build-vs-buy analysis, and technical due diligence for fundraising. They sit above the senior engineer or tech lead.",
      },
      {
        question: "When does a startup need a fractional CTO?",
        answer:
          "When a non-technical founder is building a tech product, when the company is transitioning from an agency-built MVP to in-house engineering, when the engineering team needs to scale past 5-10 people, or when the company is facing technical due diligence from investors.",
      },
      {
        question: "How do I scope a fractional CTO engagement to avoid getting pulled into dev work?",
        answer:
          "Define upfront: you own architecture decisions, hiring, technical strategy, and team process. You don't own sprint work, production code, or on-call. Put it in writing. The most common scope creep for fractional CTOs is getting pulled into hands-on coding because the team is short-staffed. If the client needs a developer, help them hire one.",
      },
      {
        question: "How do I stay current on technology while managing multiple CTO clients?",
        answer:
          "Running 2-3 clients across different stacks actually keeps you sharper than a single full-time role — you see more architectures, more failure modes, and more tooling decisions. Supplement with 2-3 hours/week of focused learning (reading, side projects, conference talks). Your value is pattern recognition across companies, not expertise in one stack.",
      },
    ],
    relatedCategories: ["fractional-coo-jobs", "fractional-cmo-jobs", "fractional-cfo-jobs"],
    keywords: ["fractional cto jobs", "part-time cto", "fractional chief technology officer", "interim cto"],
  },

  "fractional-cos-jobs": {
    roleType: "fractional_cos",
    title: "Fractional Chief of Staff Jobs",
    h1: "Fractional Chief of Staff jobs",
    subheadline:
      "Every fractional Chief of Staff role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    metaTitle: "Fractional Chief of Staff Jobs | HireAFractionalExec",
    metaDescription:
      "Every fractional Chief of Staff role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    definition:
      "A fractional Chief of Staff is a part-time strategic operator who extends the CEO's capacity — owning cross-functional projects, strategic initiatives, and the special-project work that falls outside any other role. Typically 10-15 hours per week across 2-3 clients.",
    body: `A fractional Chief of Staff is a part-time strategic operator who extends the CEO's personal capacity. Engagements typically run 10-15 hours per week per client, often with 2-3 clients at once. Scope covers cross-functional project execution, board material preparation, OKR systems, leadership meeting facilitation, and the special-project work that doesn't fit neatly into any other role. They're the founder's force multiplier, not their assistant.

The Chief of Staff role has exploded — "chief of staff" is searched 2,400 times per month in the US — and the fractional version is growing even faster. Fractional Chiefs of Staff tend to skew younger than fractional COOs (30s-40s, versus 40s-55 for COOs), often coming from prior full-time CoS roles at high-growth startups. Most engagements are fully remote, 6-12 months in duration, with founders at 10-100-employee companies — large enough to have cross-functional complexity, small enough that the CEO is still involved in execution.

Fractional Chief of Staff retainers typically run $2,500-$8,000 per month per client in 2026 — the lowest range of any fractional C-suite role because CoS work tends to be lower-scope than a full COO or CMO engagement. Full-time Chiefs of Staff earn $120,000-$200,000 annually. Title confusion is real: founders outside the startup world sometimes don't recognize "Chief of Staff," so fractional CoS candidates often translate the role as "strategic projects lead" or "founder's operational partner" when explaining the fit.`,
    faqs: [
      {
        question: "How much does a fractional Chief of Staff charge per month?",
        answer:
          "Fractional Chief of Staff retainers run $2,500-$8,000 per month per client in 2026. Senior Chiefs of Staff with CEO-pairing experience at venture-backed companies command the top of the range; newer fractional CoS start at $1,500-$3,000 and build from there.",
      },
      {
        question: "How many fractional Chief of Staff clients can one person handle?",
        answer:
          "Two to three concurrent clients is typical. CoS work is high-context — you need to understand each CEO's priorities, communication style, and strategic calendar — so context-switching is the biggest constraint. Four clients is possible but requires tight calendar discipline.",
      },
      {
        question: "How is a Chief of Staff different from a COO?",
        answer:
          "A COO owns operations as an ongoing function — processes, teams, delivery. A Chief of Staff owns strategic projects and CEO capacity — the things that don't fit neatly into any one department. COOs tend to be more senior, more operational, and longer-tenured. Chiefs of Staff are usually younger, more strategic, and often stepping-stone roles to COO or general-management positions.",
      },
      {
        question: "How do I land my first fractional Chief of Staff role?",
        answer:
          "Most first fractional CoS engagements come via a founder you've worked with closely — either as a prior full-time CoS, a consulting engagement, or a portfolio introduction. Build one strong case study that demonstrates the kind of strategic leverage you create for a CEO, and use it to close subsequent clients.",
      },
      {
        question: "What does a fractional Chief of Staff actually do?",
        answer:
          "A fractional Chief of Staff runs strategic projects, prepares board materials, facilitates leadership meetings, tracks OKRs, manages cross-functional initiatives, and handles the high-priority work that the CEO can't delegate anywhere else. They extend the CEO's capacity without replacing department heads.",
      },
      {
        question: "What size company hires a fractional Chief of Staff?",
        answer:
          "Companies with 10-100 employees are the sweet spot. Large enough to have cross-functional coordination problems the CEO can't solve alone. Small enough that the CEO is still actively involved in execution and needs someone operating at their level, not below it.",
      },
      {
        question: "How do I position myself as a fractional Chief of Staff when the title confuses people?",
        answer:
          "Lead with the outcome, not the title. 'I help CEOs get 10 hours a week back by owning the cross-functional projects that don't fit anywhere else' works better than 'I'm a fractional Chief of Staff.' Once you're in the conversation, explain the role. On your LinkedIn, use both — 'Fractional Chief of Staff / Strategic Ops' captures both the search term and the translation.",
      },
      {
        question: "Should a fractional Chief of Staff try to become a fractional COO?",
        answer:
          "It depends on what you want. CoS work is strategic and project-based — you're the CEO's force multiplier. COO work is operational and ongoing — you own the machine. Some fractional CoS professionals evolve into fractional COOs as they take on broader scope. Others prefer the CoS lane because the work stays closer to strategy and special projects.",
      },
    ],
    relatedCategories: ["fractional-coo-jobs", "head-of-ops-jobs", "fractional-cmo-jobs"],
    keywords: ["fractional chief of staff jobs", "chief of staff jobs", "chief of staff salary", "part-time chief of staff"],
  },

  "fractional-cro-jobs": {
    roleType: "fractional_cro",
    title: "Fractional CRO Jobs",
    h1: "Fractional CRO jobs",
    subheadline:
      "Every fractional Chief Revenue Officer role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    metaTitle: "Fractional CRO Jobs | HireAFractionalExec",
    metaDescription:
      "Every fractional Chief Revenue Officer role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    definition:
      "A fractional CRO is a part-time Chief Revenue Officer who unifies sales, marketing, and customer success under a single revenue strategy — typically working 10-15 hours per week across 2-3 clients.",
    body: `A fractional CRO is a part-time Chief Revenue Officer who unifies sales, marketing, and customer success under a single revenue strategy. Engagements typically run 10-15 hours per week per client, often with 2-3 clients at once. Scope covers sales process design, pipeline management, marketing-sales alignment, pricing strategy, and retention. Fractional CROs are often former CROs or VPs of Sales who moved to fractional work after 2-3 full-time revenue leadership tours.

The fractional exec market grew 46% YoY into 2026, and CRO is one of the newest and fastest-growing fractional categories — as go-to-market complexity has increased, more $1M-$10M ARR companies need CRO-level coordination but can't afford full-time. 72% of CEOs plan to increase fractional usage in the next 12 months. Most fractional CRO engagements are fully remote, 6-12 months in duration, at companies that have product-market fit but haven't yet built a repeatable sales engine.

Fractional CRO rates typically run $10,000-$20,000 per month per client in 2026 — the second-highest range of any fractional role after CTO. Engagements that include hands-on team hiring and enterprise sales commands top of range. "Part-time CRO," "interim CRO," and "fractional head of revenue" are used interchangeably. The CRO role is distinct from a VP of Sales: CROs own the full revenue engine (sales + marketing + success alignment), VPs of Sales own the sales team and process.`,
    faqs: [
      {
        question: "How much does a fractional CRO charge per month?",
        answer:
          "Fractional CRO retainers run $10,000-$20,000 per month per client in 2026 — the second-highest of any fractional role. Enterprise SaaS and B2B fintech engagements command the top; early-stage engagements cluster at $6,000-$12,000.",
      },
      {
        question: "How many fractional CRO clients can one person handle?",
        answer:
          "Two to three concurrent clients is typical. Revenue leadership requires deep context on each company's sales motion, product, and customer base — more context than some other fractional roles — so three is often the practical upper limit for quality.",
      },
      {
        question: "How do I land my first fractional CRO role?",
        answer:
          "Most first fractional CRO engagements come through prior CEO relationships or VC portfolio introductions. The strongest path: a full-time CRO tenure at a B2B SaaS company that scaled from $1M to $10M+ ARR, packaged into a specific playbook (e.g., 'I took X company from $2M to $8M ARR by doing Y, Z'), used as a case study for fractional clients in similar situations.",
      },
      {
        question: "What does a fractional CRO actually do?",
        answer:
          "A fractional CRO owns the revenue engine: sales process design, pipeline management, sales-marketing alignment, pricing strategy, customer retention, and revenue operations infrastructure. They sit above the VP of Sales and the Head of Marketing, making strategic calls about how those functions work together.",
      },
      {
        question: "How is a fractional CRO different from a VP of Sales?",
        answer:
          "A VP of Sales manages the sales team and sales process. A CRO owns the full revenue strategy including marketing, sales, customer success, and pricing. CROs work above VPs of Sales and typically have more P&L accountability for the full customer lifecycle.",
      },
      {
        question: "When does a company need a fractional CRO?",
        answer:
          "When revenue growth has plateaued at $1M-$5M ARR, when sales and marketing aren't aligned, when you need a repeatable sales process but can't justify a full-time CRO, or when you're preparing to scale the GTM team from 2-3 sellers to a real org.",
      },
      {
        question: "How do I prove ROI as a fractional CRO to keep clients?",
        answer:
          "Tie your engagement to a specific revenue metric from day one — pipeline velocity, close rate, net revenue retention, or ARR growth. Report on it monthly. The most common reason fractional CRO engagements end early is the founder can't see the revenue impact. Make the numbers visible and attributable, even if the full payoff takes 2-3 quarters.",
      },
      {
        question: "How do I handle the tension between sales and marketing teams as a fractional CRO?",
        answer:
          "Start by aligning both teams on a shared revenue number and a shared definition of a qualified lead. Most sales-marketing friction comes from misaligned definitions, not bad intent. Build a weekly revenue meeting where both teams review the same pipeline data. You'll spot the misalignment in the first meeting and can fix it over the next 30 days.",
      },
    ],
    relatedCategories: ["fractional-cmo-jobs", "fractional-coo-jobs", "fractional-cfo-jobs"],
    keywords: ["fractional cro jobs", "part-time cro", "fractional chief revenue officer", "interim cro"],
  },

  "head-of-ops-jobs": {
    roleType: "head_of_ops",
    title: "Head of Operations Jobs",
    h1: "Head of Operations jobs",
    subheadline:
      "Every fractional Head of Operations and VP of Ops role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    metaTitle: "Head of Operations Jobs | HireAFractionalExec",
    metaDescription:
      "Every fractional Head of Operations and VP of Ops role posted in the last 30 days. Stop hunting. Apply and get back to work.",
    definition:
      "A fractional Head of Operations is a part-time operations leader who designs processes, builds team structures, and creates the systems that let a company deliver consistently — often a company's first dedicated ops hire. Typically 10-15 hours per week across 2-3 clients.",
    author: "Jared Perry",
    authorTitle: "Practicing fractional COO",
    body: `A Head of Operations (sometimes titled VP of Operations) is an operations leader who designs processes, builds team structures, and creates the systems that let a company deliver consistently. The fractional version of the role typically runs 10-15 hours per week per client, often with 2-3 clients at once. Scope covers SOP design, vendor management, delivery cadence, tool selection, and establishing the operational rhythm that keeps things running. More execution-focused than a COO.

The fractional executive market grew 46% YoY into 2026, and Head of Operations is one of the most common first fractional engagements for scale-up operators transitioning from full-time roles. 72% of CEOs plan to increase fractional usage in the next 12 months. Most fractional Head of Ops engagements are fully remote, 3-9 months in duration, at companies with 10-50 employees experiencing growing pains: missed deadlines, inconsistent delivery quality, unclear ownership, and founders stuck doing operations themselves.

Fractional Head of Operations retainers typically run $3,000-$8,000 per month per client in 2026, which is lower than the full COO range because scope is typically tighter — execution of defined operational work versus ownership of broader organizational strategy. Senior operators with prior COO or Director-of-Operations experience at scale-ups charge the top of the range. Full-time Head of Operations salaries run $100,000-$180,000 in 2026 for comparison.`,
    faqs: [
      {
        question: "How much does a fractional Head of Operations charge per month?",
        answer:
          "Fractional Head of Ops retainers run $3,000-$8,000 per month per client in 2026. Senior operators with prior Director-of-Operations or COO experience command the top of the range. Full-time Head of Ops roles pay $100,000-$180,000 per year in 2026 for comparison.",
      },
      {
        question: "How many fractional Head of Operations clients can one person handle?",
        answer:
          "Three to four clients is typical. Head of Ops work tends to be more process-execution-driven than fractional COO work, so context-switching is lower — more of the work is building the same kind of SOPs, delivery cadences, and vendor management across different companies.",
      },
      {
        question: "How do I land my first fractional Head of Operations role?",
        answer:
          "Most first Head of Ops engagements come through prior colleagues or founders who saw you run operations at scale at your last full-time company. The fastest path: a specific story about a process you fixed or a team you scaled (e.g., 'I took delivery lead time from 12 days to 4 days at X company') becomes your opening pitch.",
      },
      {
        question: "What does a fractional Head of Operations actually do?",
        answer:
          "A fractional Head of Ops designs SOPs, manages vendors, owns delivery cadence and quality, handles tool selection and implementation, and establishes the operational rhythm across the team. More execution-focused than a COO — more hands-on than strategic.",
      },
      {
        question: "What's the difference between Head of Ops and fractional COO?",
        answer:
          "A fractional COO owns broader organizational strategy: team structures, hiring, cross-functional coordination, and the operational roadmap. A Head of Ops is more execution-focused: running the processes the COO designs, managing the tooling and vendors, owning delivery quality. Head of Ops is often a stepping-stone role to COO.",
      },
      {
        question: "When does a company need a Head of Operations?",
        answer:
          "When the company has 10-50 employees, delivery is inconsistent, ownership is unclear, and the founder is still doing operations themselves. Often this is the company's first dedicated operations hire — the moment when 'everyone does ops' stops working.",
      },
      {
        question: "How do I transition from fractional Head of Ops to fractional COO?",
        answer:
          "Take on broader scope gradually: move from process execution to organizational strategy, from managing tools to managing people, from owning delivery to owning the operating model. The transition often happens naturally when a Head of Ops client asks you to hire and manage a team, set OKRs, or own cross-functional coordination. Update your positioning and raise your rates once you have 1-2 COO-scope case studies.",
      },
      {
        question: "What tools should a fractional Head of Operations know?",
        answer:
          "Project management (Asana, Monday, Linear, ClickUp), documentation (Notion, Confluence), communication (Slack), and data/reporting (Looker, Google Sheets, Airtable). The specific tools matter less than the ability to evaluate, implement, and train a team on any of them quickly. Clients care about your process thinking, not your tool preferences.",
      },
    ],
    relatedCategories: ["fractional-coo-jobs", "fractional-cos-jobs", "fractional-cfo-jobs"],
    keywords: ["head of operations jobs", "fractional head of ops", "vp of operations", "fractional operations leader"],
  },
};

export default categories;
