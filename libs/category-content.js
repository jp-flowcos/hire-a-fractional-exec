/**
 * Category content map for SEO landing pages.
 * Each category has its own route, title, meta description, definition block,
 * body copy, and FAQ content.
 */

const categories = {
  "fractional-coo-jobs": {
    roleType: "fractional_coo",
    title: "Fractional COO Jobs",
    h1: "Fractional COO Jobs — Hire or Get Hired",
    metaTitle: "Fractional COO Jobs | HireAFractionalExec",
    metaDescription:
      "Browse open fractional COO positions. Find part-time Chief Operating Officer roles at startups and growth-stage companies. Updated weekly.",
    definition:
      "A fractional COO is a part-time Chief Operating Officer who builds operational systems, scales teams, and frees up founder time — typically working 10-15 hours per week with multiple companies simultaneously.",
    body: `Founders between $500K and $3M in revenue often hit an operational ceiling. Sales are growing, but delivery is inconsistent, hiring is reactive, and the founder is stuck in every decision. That's when a fractional COO steps in.

A fractional COO typically works 10-15 hours per week, building the operational infrastructure that lets a company scale without breaking. They design repeatable processes, establish team structures, create accountability systems, and free the founder to focus on growth.

Companies that hire fractional COOs typically see measurable results within the first 90 days: documented SOPs, clear org charts, structured meeting cadences, and a founder who finally has time to think strategically instead of firefighting.`,
    faqs: [
      {
        question: "What does a fractional COO do?",
        answer:
          "A fractional COO handles operational leadership part-time — building systems, managing teams, and creating scalable processes. They typically own areas like hiring, process design, team structure, and cross-functional coordination.",
      },
      {
        question: "How much does a fractional COO cost?",
        answer:
          "Fractional COOs typically charge $3,000-$10,000 per month depending on hours and scope. This is a fraction of the $200K-$350K annual salary a full-time COO would command.",
      },
      {
        question: "When should a founder hire a fractional COO?",
        answer:
          "When you're spending more than 50% of your time on operations instead of growth, when your team has grown past 5-10 people, or when delivery quality is becoming inconsistent.",
      },
      {
        question: "How many hours per week does a fractional COO work?",
        answer:
          "Most fractional COO engagements are 10-15 hours per week, though some range from 5 hours per week (advisory) to 20+ hours per week (interim).",
      },
      {
        question: "What's the difference between a fractional COO and a consultant?",
        answer:
          "A consultant advises. A fractional COO executes. They embed with your team, attend your meetings, manage your people, and own outcomes — not just recommendations.",
      },
    ],
    relatedCategories: ["fractional-cos-jobs", "head-of-ops-jobs", "fractional-cmo-jobs"],
    keywords: ["fractional coo jobs", "part-time coo", "fractional chief operating officer"],
  },

  "fractional-cmo-jobs": {
    roleType: "fractional_cmo",
    title: "Fractional CMO Jobs",
    h1: "Fractional CMO Jobs — Hire or Get Hired",
    metaTitle: "Fractional CMO Jobs | HireAFractionalExec",
    metaDescription:
      "Find fractional CMO positions at startups and scale-ups. Part-time marketing leadership roles with strategic and hands-on responsibilities.",
    definition:
      "A fractional CMO is a part-time Chief Marketing Officer who leads marketing strategy, builds teams, and drives growth — providing senior marketing leadership without the full-time executive price tag.",
    body: `Startups and growth-stage companies need marketing leadership, but hiring a full-time CMO at $250K-$400K often doesn't make sense before product-market fit is locked in. A fractional CMO bridges that gap.

Fractional CMOs typically own go-to-market strategy, channel prioritization, team building, and marketing infrastructure. They'll audit your current efforts, build a roadmap, hire or manage your marketing team, and set up measurement systems that tie marketing spend to revenue.

The best fractional CMOs bring pattern recognition from working across multiple companies and industries. They've seen what works at your stage and can shortcut the experimentation that a first-time marketing leader would need.`,
    faqs: [
      {
        question: "What does a fractional CMO do?",
        answer:
          "A fractional CMO leads marketing strategy and execution part-time. They typically own GTM strategy, brand positioning, team building, channel optimization, and marketing analytics.",
      },
      {
        question: "How much does a fractional CMO cost?",
        answer:
          "Fractional CMOs typically charge $5,000-$15,000 per month depending on scope and experience. Compare this to $250K-$400K for a full-time CMO.",
      },
      {
        question: "Who hires fractional CMOs?",
        answer:
          "Startups with $1M-$10M in revenue, companies launching new products, organizations restructuring their marketing teams, and private equity firms improving portfolio company growth.",
      },
      {
        question: "How long is a typical fractional CMO engagement?",
        answer:
          "Most engagements last 6-12 months. Some evolve into ongoing advisory roles, while others conclude once a full-time CMO is hired.",
      },
    ],
    relatedCategories: ["fractional-cro-jobs", "fractional-coo-jobs", "fractional-cto-jobs"],
    keywords: ["fractional cmo jobs", "part-time cmo", "fractional marketing leader"],
  },

  "fractional-cfo-jobs": {
    roleType: "fractional_cfo",
    title: "Fractional CFO Jobs",
    h1: "Fractional CFO Jobs — Hire or Get Hired",
    metaTitle: "Fractional CFO Jobs | HireAFractionalExec",
    metaDescription:
      "Browse fractional CFO positions. Part-time financial leadership for startups, SMBs, and growth-stage companies. Updated weekly.",
    definition:
      "A fractional CFO is a part-time Chief Financial Officer who provides senior financial leadership — managing cash flow, building financial models, supporting fundraising, and creating the financial infrastructure companies need to scale.",
    body: `Most companies under $10M in revenue don't need a $300K full-time CFO, but they desperately need financial leadership beyond what a bookkeeper provides. Fractional CFOs fill this gap.

A fractional CFO handles financial modeling, cash flow management, fundraising support, board reporting, and financial systems design. They bring the strategic finance perspective that helps founders make better decisions about hiring, spending, and growth.

Companies preparing to raise capital especially benefit from fractional CFOs. They can build the financial models, data rooms, and reporting infrastructure that investors expect — work that would take a generalist weeks but a fractional CFO can do in days.`,
    faqs: [
      {
        question: "What does a fractional CFO do?",
        answer:
          "A fractional CFO handles financial strategy, cash flow management, financial modeling, fundraising support, board reporting, budgeting, and financial systems implementation.",
      },
      {
        question: "How much does a fractional CFO cost?",
        answer:
          "Fractional CFOs typically charge $3,000-$12,000 per month. This is roughly 20-30% of what a full-time CFO would cost when you factor in salary, benefits, and equity.",
      },
      {
        question: "When does a company need a fractional CFO?",
        answer:
          "When you're preparing to raise capital, when financial complexity outgrows your bookkeeper, when you need board-level financial reporting, or when cash flow management becomes critical.",
      },
      {
        question: "What's the difference between a fractional CFO and a bookkeeper?",
        answer:
          "A bookkeeper records transactions. A fractional CFO provides strategic financial leadership — forecasting, scenario planning, investor relations, and decision support.",
      },
    ],
    relatedCategories: ["fractional-coo-jobs", "fractional-cos-jobs", "fractional-cro-jobs"],
    keywords: ["fractional cfo jobs", "part-time cfo", "fractional finance leader"],
  },

  "fractional-cto-jobs": {
    roleType: "fractional_cto",
    title: "Fractional CTO Jobs",
    h1: "Fractional CTO Jobs — Hire or Get Hired",
    metaTitle: "Fractional CTO Jobs | HireAFractionalExec",
    metaDescription:
      "Find fractional CTO positions. Part-time technical leadership for startups needing architecture guidance, team scaling, and build-vs-buy decisions.",
    definition:
      "A fractional CTO is a part-time Chief Technology Officer who provides technical leadership — guiding architecture decisions, scaling engineering teams, and ensuring technology strategy aligns with business goals.",
    body: `Non-technical founders building tech products face a common dilemma: they need senior technical leadership to make architecture decisions and manage developers, but a full-time CTO costs $250K-$400K and equity.

A fractional CTO provides that technical leadership part-time. They evaluate your tech stack, guide architecture decisions, vet engineering hires, establish development processes, and ensure your team is building the right thing the right way.

Fractional CTOs are particularly valuable during technical inflection points: launching an MVP, migrating to a new platform, scaling infrastructure, or transitioning from an agency to an in-house team.`,
    faqs: [
      {
        question: "What does a fractional CTO do?",
        answer:
          "A fractional CTO provides technical strategy and leadership part-time. They handle architecture decisions, code reviews, engineering hiring, technical debt management, and build-vs-buy analysis.",
      },
      {
        question: "How much does a fractional CTO cost?",
        answer:
          "Fractional CTOs typically charge $5,000-$15,000 per month depending on the technical complexity and hours required.",
      },
      {
        question: "Can a fractional CTO write code?",
        answer:
          "Some do, some don't. Most fractional CTOs focus on architecture, team management, and technical strategy rather than writing production code. If you need hands-on coding, clarify this upfront.",
      },
      {
        question: "When should a startup hire a fractional CTO?",
        answer:
          "When you have a non-technical founding team building a tech product, when you need to scale your engineering team, or when you're facing major architecture decisions.",
      },
    ],
    relatedCategories: ["fractional-coo-jobs", "fractional-cmo-jobs", "fractional-cfo-jobs"],
    keywords: ["fractional cto jobs", "part-time cto", "fractional technical leader"],
  },

  "fractional-cos-jobs": {
    roleType: "fractional_cos",
    title: "Fractional Chief of Staff Jobs",
    h1: "Fractional Chief of Staff Jobs — Hire or Get Hired",
    metaTitle: "Fractional Chief of Staff Jobs | HireAFractionalExec",
    metaDescription:
      "Browse fractional Chief of Staff positions. Strategic project execution and cross-functional coordination roles for founders and CEOs.",
    definition:
      "A fractional Chief of Staff is a part-time strategic operator who extends the CEO's capacity — managing cross-functional projects, driving strategic initiatives, and ensuring organizational alignment.",
    body: `The Chief of Staff role has exploded in popularity at startups and growth-stage companies. A fractional Chief of Staff gives founders the strategic leverage of this role without the full-time commitment.

Fractional Chiefs of Staff typically manage strategic projects, coordinate across departments, prepare board materials, run leadership meetings, and handle the high-priority work that doesn't fit neatly into any other role. They're the founder's force multiplier.

This role is ideal for founders who find themselves spread too thin across strategic initiatives. A fractional Chief of Staff takes ownership of the projects and processes that would otherwise fall through the cracks or keep the founder stuck in execution mode.`,
    faqs: [
      {
        question: "What does a fractional Chief of Staff do?",
        answer:
          "A fractional Chief of Staff manages strategic projects, coordinates across teams, prepares board materials, runs leadership meetings, and handles high-priority initiatives on behalf of the CEO.",
      },
      {
        question: "How is a Chief of Staff different from a COO?",
        answer:
          "A COO owns ongoing operations and typically manages departments. A Chief of Staff focuses on strategic projects, cross-functional coordination, and extending the CEO's personal capacity.",
      },
      {
        question: "How much does a fractional Chief of Staff cost?",
        answer:
          "Fractional Chiefs of Staff typically charge $2,500-$8,000 per month depending on hours and scope. Full-time Chiefs of Staff earn $120K-$200K annually.",
      },
      {
        question: "What size company hires a fractional Chief of Staff?",
        answer:
          "Companies with 10-100 employees are the sweet spot. Large enough to have cross-functional complexity, but small enough that the CEO is still involved in execution.",
      },
    ],
    relatedCategories: ["fractional-coo-jobs", "head-of-ops-jobs", "fractional-cmo-jobs"],
    keywords: ["fractional chief of staff jobs", "chief of staff salary", "part-time chief of staff"],
  },

  "fractional-cro-jobs": {
    roleType: "fractional_cro",
    title: "Fractional CRO Jobs",
    h1: "Fractional CRO Jobs — Hire or Get Hired",
    metaTitle: "Fractional CRO Jobs | HireAFractionalExec",
    metaDescription:
      "Find fractional CRO positions. Part-time revenue leadership for GTM execution, sales process design, and pipeline management.",
    definition:
      "A fractional CRO is a part-time Chief Revenue Officer who unifies sales, marketing, and customer success under a single revenue strategy — driving pipeline growth and optimizing the full customer lifecycle.",
    body: `Revenue leadership is the most common gap in growth-stage companies. The founder has been running sales, marketing is a patchwork of contractors, and there's no unified revenue strategy. A fractional CRO solves this.

Fractional CROs own the entire revenue engine: sales process design, pipeline management, marketing and sales alignment, pricing strategy, and customer retention. They bring the systematic approach to revenue generation that separates scaling companies from stalled ones.

Companies between $1M and $10M in revenue benefit most from fractional CROs. They need someone who can design a repeatable sales process, build the team to run it, and connect marketing efforts directly to revenue outcomes.`,
    faqs: [
      {
        question: "What does a fractional CRO do?",
        answer:
          "A fractional CRO leads revenue strategy across sales, marketing, and customer success. They design sales processes, build pipeline systems, align GTM teams, and optimize conversion across the funnel.",
      },
      {
        question: "How much does a fractional CRO cost?",
        answer:
          "Fractional CROs typically charge $5,000-$15,000 per month. Full-time CROs command $250K-$400K in total compensation.",
      },
      {
        question: "What's the difference between a fractional CRO and a VP of Sales?",
        answer:
          "A VP of Sales manages the sales team and process. A CRO owns the entire revenue strategy including marketing, sales, and customer success alignment.",
      },
      {
        question: "When should a company hire a fractional CRO?",
        answer:
          "When revenue growth has plateaued, when sales and marketing aren't aligned, when you need a repeatable sales process, or when you're preparing to scale your GTM team.",
      },
    ],
    relatedCategories: ["fractional-cmo-jobs", "fractional-coo-jobs", "fractional-cfo-jobs"],
    keywords: ["fractional cro jobs", "part-time cro", "fractional revenue leader"],
  },

  "head-of-ops-jobs": {
    roleType: "head_of_ops",
    title: "Head of Ops Jobs",
    h1: "Head of Operations Jobs — Hire or Get Hired",
    metaTitle: "Head of Operations Jobs | HireAFractionalExec",
    metaDescription:
      "Browse Head of Operations positions. Operational leadership roles for companies making their first dedicated ops hire.",
    definition:
      "A Head of Operations is an operational leader who designs processes, builds team structures, and creates the systems that let a company deliver consistently — often a company's first dedicated ops hire.",
    body: `Many companies reach a point where operational complexity outgrows the founder's ability to manage it ad hoc. The Head of Ops is often the first dedicated operations hire, and it's a critical one.

A Head of Ops designs and implements the processes that let a company deliver consistently. They create SOPs, build team structures, manage vendors, and establish the operational rhythm that keeps everything running. Unlike a COO, they're typically more hands-on and execution-focused.

This role is ideal for companies with 10-30 employees who are experiencing growing pains: missed deadlines, inconsistent delivery, unclear ownership, and founders who are stuck in day-to-day operations.`,
    faqs: [
      {
        question: "What does a Head of Operations do?",
        answer:
          "A Head of Operations designs processes, manages team structures, oversees delivery, handles vendor relationships, and ensures operational consistency across the organization.",
      },
      {
        question: "What's the difference between Head of Ops and COO?",
        answer:
          "A Head of Ops is typically more execution-focused and hands-on. A COO operates at a more strategic level and usually has broader organizational authority. Head of Ops often grows into the COO role.",
      },
      {
        question: "How much does a Head of Operations earn?",
        answer:
          "Full-time Head of Operations salaries range from $100K-$180K. Fractional or contract Head of Ops roles typically pay $3,000-$8,000 per month.",
      },
      {
        question: "When should a company hire a Head of Operations?",
        answer:
          "When the founder is spending most of their time on operations, when delivery quality is inconsistent, when the team has grown past 10 people, or when you need someone to own internal processes.",
      },
    ],
    relatedCategories: ["fractional-coo-jobs", "fractional-cos-jobs", "fractional-cfo-jobs"],
    keywords: ["head of operations jobs", "operations manager", "head of ops"],
  },
};

export default categories;
