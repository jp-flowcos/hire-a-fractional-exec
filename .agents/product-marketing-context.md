# HireAFractionalExec — Product Marketing Context

**Last updated:** 2026-04-15
**Domain:** hireafractionalexec.com

This is the foundational context document for all marketing skills. It's read first by `ai-seo`, `seo-audit`, `copywriting`, `content-strategy`, `schema-markup`, `site-architecture`, `programmatic-seo`, and `page-cro` before they do any work. Update any section when reality shifts; stale context produces stale output.

---

## 1. Product Overview

**One-liner:** HireAFractionalExec is the top job board for fractional executive roles.

**Why it exists (problem we solve):** Finding fractional exec work is a pain. Roles are scattered across LinkedIn, Indeed, Twitter, newsletters, and DMs — fractionals spend time hunting instead of applying. We put the roles in one place so they don't have to hunt.

**Positioning belief:** Fractional work is the future of work. More companies will tap seasoned experts part-time instead of making full-time hires — and those fractionals need somewhere to find the work.

**Shelf (category we sit on):** Job board. Full stop. When an operator searches "fractional COO jobs" or a founder searches "how to hire a fractional CMO", we want to be the destination. Not a talent marketplace, not a recruiter, not a community.

**Tech:** Next.js 15 App Router on Vercel, Supabase for data, JSearch for job ingest, Adzuna for salary data (Phase 3), Resend for email, Stripe for paid job posts, NextAuth for admin auth. Implementation detail — invisible to users.

**Business model (hands-off by design):**
- **Free for job seekers.** Always.
- **Paid for employers.** Currently $299 standard / $499 featured for 30-day posts. Pricing and checkout flow can flex — a contact form with a payment link is fine while we ramp.
- **Primary revenue goal: traffic-first.** The product is built to be as hands-off as possible for the founder. Income comes from job posts (and eventually display/sponsor inventory) that compound with organic traffic. We don't push paid posts hard until there's enough traffic to justify the spend from an employer's side.
- **Newsletter is a planned lever, not live yet.** Sign-up form collects subs now; we don't send a digest until ~200+ subs make it worthwhile.

**Primary optimization target: organic traffic.** Category pages, internal linking, and AEO-friendly content all serve this. Employer-conversion is secondary and should never trade off against page-level SEO / AEO quality.

**Near-term goals (12-month star metrics):**
- ~1,000 monthly visits from fractional-targeted organic search
- ~500 newsletter subscribers

**Competitive lane:** Taylor at Fractional Jobs (~$50K/mo) = newsletter-first + community-driven. Us = SEO/job-board-first. Different motion, no head-on collision.

---

## 2. Target Audience

### Primary: Fractional COO / Head of Operations candidates (job seekers)

The site as a whole serves all 7 fractional exec roles, but **COO and Head of Ops is the deep vertical** — that's where the site founder's expertise sits, where copy is most credible, and where prior SEO research suggests the strongest organic opportunity. Other roles (CMO, CFO, CTO, CRO, CoS) get good-but-less-deep treatment.

**The veteran operator (primary persona for COO/ops content):**
- 10+ years of operating experience minimum, often 15-25+.
- Came from corporate or scale-up environments. Not their first executive role.
- Age range to write copy to: **40-55**.
- Often post-full-time-grind: choosing fractional deliberately for portfolio diversity, lifestyle, or a phased move out of executive intensity.
- Sophistication is very high. Can sniff out fluff copy in two sentences. Wants specific numbers, not vibes.

**The aspiring fractional (also captured, not gated out):**
- Younger/earlier-career searchers asking "how to become a fractional COO". Big query volume.
- Approach: don't gate them out — guide them in. They become future veterans, future newsletter subs, future word-of-mouth.

**Sourcing reality:** the user's network (where the site's voice rings true) sits squarely in the 40-55 / 15+ years bracket. Copy aimed at that bracket implicitly reads as credible to younger aspiring fractionals too.

### Secondary: Hiring managers & founders (employers)

- **Company stage:** Seed to Series B, or bootstrapped $1M–$10M ARR. Past the "I'll do it myself" stage but not ready for a $300K full-time exec hire.
- **Decision maker:** CEO / founder (most common), COO, or Chief of Staff doing hiring on the founder's behalf.
- **Emotional state when hiring:** Stuck. They've hit a ceiling — delivery is inconsistent, finances are opaque, marketing is uncoordinated — and they need experienced help, quickly, without committing to a full-time executive comp package.
- **Realistic monthly hire budget:** $3K-$15K/month for a fractional engagement (NOT $300-$1500 — that was a typo in the V1 draft, conflated with the $299 job-post fee). Senior fractionals charging $12K+/mo with 2-4 concurrent clients is normal.

### Audience-mix decision (locked)

**Option B: operator-first, founder-hub-secondary.** Build everything for the operator. Add a small cluster of 3-5 founder-intent pages (e.g., "how to hire a fractional COO", "what does a fractional CMO cost") that funnel founders into the post-a-job flow. One-time build, low ongoing effort, captures employer intent at the moment of need. Confirmed by user.

### Geographic focus

**US-first.** Most search volume is here, most fractional engagements happen here, most employers pay USD. Canada and UK can come later if data warrants.

---

## 3. Personas

### Persona A — "The Operator" (primary — 80% of traffic, center of all SEO/copy work)

**Who they are (from the user's actual network):**
- Former senior ops leader at a scale-up (e.g., an Atlassian/mid-to-late-stage SaaS ops senior who ran an operations division)
- OR former CRO / VP Customer Success at Series A/B/C SaaS who transitioned to fractional
- OR a 2+ year veteran fractional operator already juggling multiple clients
- COOs skew older and come from bigger companies. Chiefs of Staff skew younger (see Persona A-sub below).

**Demographics to write copy to:**
- Age 40-55
- 15+ years of operating experience
- US-based, remote-native
- Has run or seen at scale (not early-stage-only)

**#1 frustration (load-bearing for all copy):**

Fractional operators have to **keep hunting for the next client even while delivering on current ones.** A full-time employee applies once and is done. A fractional has 2-4 clients at any moment, some are churning out, so they're *always* in a low-grade job-hunting mode on top of doing the actual work. That overhead is the tax of fractional life, and it's exhausting for people who just want to be doing ops.

They did not sign up to be BD reps. They signed up to do operations.

**The value prop the site delivers (distilled from above):**

**The watering hole.** You come here when a client's ending, find the next one, apply in minutes, get back to work. Low overhead. Low thinking required. No hunting through LinkedIn's 1,000 full-time COO listings to find 10 fractional ones.

This framing beats "we have fractional jobs" (table stakes) and "no middleman" (feature, not pain point). The watering hole framing hooks the real emotional truth — the hunt itself is the problem.

**What makes them say YES on a listing (ranked):**

1. Title clearly says "fractional" / "interim" / "part-time" — if it's not there, they bounce.
2. Remote (vs hybrid/onsite) — often a dealbreaker either way.
3. Industry/domain fit — some are generalist ops nerds who work across verticals; others are vertical specialists who only take SaaS or DTC or fintech.
4. Company stage clarity (Series A-C is the sweet spot for most).
5. Comp range — nice but not required; they can negotiate.
6. Company name recognition — not a big factor for this audience.

**What they search (maps to keyword doc):**
- "fractional COO jobs" (590/mo, $0.77 CPC — easiest win per keyword doc)
- "fractional CRO jobs" (200-400/mo)
- "head of operations jobs" (1,900/mo)
- "fractional chief of staff" (480/mo)
- "remote fractional COO"
- "how much does a fractional COO charge" (AEO query, feeds salary pages)

### Persona A-sub — "The Fractional Chief of Staff"

**Who:** 30s-40s, has been CoS at a high-growth startup, now doing fractional CoS across 2-3 companies simultaneously. Often found work through LinkedIn/Twitter/personal network before landing on our site. Different language but same core pain.

**Language they use:** "strategic projects", "OKR systems", "executive ops", "special projects", "managing the CEO's priorities", "portfolio clients".

**Relevance to SEO:** `/fractional-cos-jobs` targets "chief of staff jobs" (2,400/mo, $0.30 CPC) per keyword doc — the highest single-page volume target on the site. Write copy here with CoS-specific framing, not the more senior COO framing.

### Persona B — "The Hiring Founder" (secondary — 20% of traffic, ~100% of revenue)

- **Who:** Founder/CEO at $1M-$10M ARR company, or PE operator managing portfolio. Past DIY, not ready for a $300K full-time exec.
- **Hire-cost budget:** $3K-$15K/month retainer for a fractional (per user's retainer ranges: COO $8K-$18K, CMO $8K-$22K, CFO $8K-$18K, CTO $10K-$22K).
- **Posting budget:** $299-$499 for a 30-day job post on our site.
- **What they care about:** Speed (someone in 30 days not 90), quality, simplicity.
- **Their challenge:** LinkedIn posts attract generalists; recruiters charge $25K+ and take 60-90 days; network is tapped.
- **What we promise:** Your role lives in front of the exact people you want, for $299, for 30 days, no commission.
- **What they search:** "how to hire a fractional COO", "fractional CMO cost", "where to find fractional executives", "fractional CFO for startup".
- **Founder hub (3-5 dedicated pages) will target these queries** — see Audience-mix decision in Section 2.

### Persona C — "The Aspiring Fractional" (tertiary — traffic capture, not primary optimization)

- **Who:** Earlier-career operator (30s-40s), currently full-time, researching whether fractional is for them.
- **What they search:** "how to become a fractional COO", "how to become a fractional executive", "fractional COO certification", "fractional COO rates for beginners".
- **Approach:** Don't gate them out — guide them in. Content for this persona lives in the pillar/spoke guides (see plan Part H): "What is a fractional COO", "How to become a fractional executive", etc. They convert to newsletter subs now, paying clients-on-our-board later.
- **Not our primary focus** — but the "how-to-become" query cluster is high-volume and our authority on the topic (Jared as practicing fractional COO) makes it a natural free-traffic win.

---

## 4. Problems & Pain Points

**Source:** Interviews with ~10+ practicing fractionals (Moriah, Chris, Matt, Lance, Kevin, Brian Hansen, Filip, Ryan, Bernadette, Michaela, Shaun). Verbatim quotes preserved — use them in copy. Anonymize as "A fractional COO told me…" or "A fractional CRO we interviewed said…" unless you have consent to name them.

### Operator pain — ranked by intensity from real interviews

**🔴 #1 — Lead generation while fulfilling client work (the dominant pain; mentioned by nearly everyone)**

The universal, burning problem. Not a vague "I wish I had more clients" — a very specific operational nightmare:

- **Feast or famine cycles.** Slammed today, scrambling next month.
- **No consistent pipeline.** Referrals come sporadically. Nothing predictable or repeatable.
- **Can't do BD while fulfilling.** Mental exhaustion after client work kills evening outreach.
- **Referrals work but can't be controlled.**
- **LinkedIn posts feel ineffective.** Connection requests don't convert. Everyone's doing it, nobody loves it.

**Filip's magic wand quote (use verbatim or paraphrased):**
> "If I could have someone ghostwriting for me on LinkedIn and doing lead gen with proven ROI... I'd love to outsource that. I like to do the work. I don't love the sales process."

**Translation to site value prop:** The site IS "done-for-you lead gen with proven ROI" from the operator's side. Every fractional COO role posted in the last 30 days, in one place, apply in minutes. They don't need to write another LinkedIn post to find their next client — they just need to check this board. Name this explicitly in copy.

**🔴 #2 — Pricing & packaging confusion (mentioned by: Moriah, Chris, Matt, Lance, Kevin)**

Sharper than I'd captured. Specific failure modes:

- **Hourly vs retainer vs project.** Many started hourly, regretted it. Moriah: *"capped at 6 hours/month is nothing."*
- **Pricing time, not value.** Chris's story (citable stat): *"went from 9-10 clients earning 50% less to 5 clients earning 50% more after fixing pricing."*
- **No framework to follow.** Matt's blocker: "doesn't know how or what to charge."
- Newer fractionals affected most; veterans often have it dialed.

**🔴 #3 — Sales cycle uncertainty (mentioned by: Moriah, Lance, Brian)**

- **Unknown lead time.** Moriah: *"Not knowing how long that sales process is going to be is the burning question in my mind."*
- **Higher value = longer sales cycle** (assumed, rarely measured).
- **Hard to plan income.** Kevin: *"constant feast and famine, wanting predictability."*

**🔴 #4 — Positioning & market education (mentioned by: Filip, Ryan, Lance, Bernadette, Michaela)**

- **"Chief of Staff" title confusion.** Filip: *"Helpful for clients who get it, confusing for broader market."*
- **Fractional concept still needs explaining** in most sales conversations.
- **Ego resistance from clients.** Lance: *"It's a massive ego thing."*
- **Credibility problem.** Michaela: *"Most fractionals look like they're not really a professional. You need to look credible."* → Site design + bylines + author attribution all feed this.

**🔴 #5 — Payment & client quality (mentioned by: Lance, Shaun)**

- **Non-paying clients.** Lance uses a 3-day grace period → automatic collections.
- **Scope creep.** Shaun pulled into daily standups and extra meetings; struggles saying no.
- **Underpricing cheapens perceived value.** Shaun: clients treat low-priced fractionals as "part-time help" rather than expert.

**🟡 #6 — Scaling & systems (mentioned by: Chris, Kevin, Brian)**

- **Manual processes cap capacity.** Chris can't take more clients because bookkeeping isn't automated.
- **Working in vs on the business.** Bernadette: *"One needs to do things to make money and survive"* — AI tool prototype on hold because day-job pays today.
- **Hesitant about agency model.** Filip values personal rapport; worries quality drops if he scales.

**🟢 #7 — Isolation (mentioned by: Moriah; also noted by the user)**

- **Solo contractor life.** No peer group, no team. Moriah: *"Sometimes you meet people and they're like, what's fractional? I've never heard of it."*
- **Lower intensity than #1-#5, but real.**
- The user's take: "isolation is a thing, but you can solve it by talking to other people." Not a primary site problem to solve; newsletter community could address downstream.

### What they'd pay to fix (summary from interviews)

| Pain | Intensity | Would pay for |
|---|---|---|
| Consistent lead gen / pipeline | 🔥🔥🔥 | Done-for-you lead gen with proven ROI ← **this is what our site IS** |
| Pricing/packaging clarity | 🔥🔥 | Framework or coaching |
| Sales cycle predictability | 🔥🔥 | Process or data on typical timelines |
| Market positioning | 🔥 | Clear messaging / brand differentiation |
| Systems/automation | 🔥 | Tools to free up capacity |

### Founder pain (secondary)

- Can't afford a full-time COO/CMO/CFO at $250K-$400K + equity.
- LinkedIn's "Hiring" signal attracts generalists and junior applicants.
- Recruiters charge $25K+ and take 60-90 days; internal network is already tapped.
- Don't know what fractional rates should be; lowball gets no applicants, overpay wastes budget.

### Emotional tension (the "3am thought")

**Operator (verbatim from interview pool):**
- *"I like to do the work. I don't love the sales process."* — Filip
- *"Capped at 6 hours/month is nothing."* — Moriah
- *"Not knowing how long that sales process is going to be is the burning question in my mind."* — Moriah
- *"Constant feast and famine."* — Kevin
- *"Most fractionals look like they're not really a professional."* — Michaela

**Founder (inferred, confirm later):**
- "I need senior help for $5K-15K/mo. I don't want to interview 40 agencies or pay a recruiter $30K."

### How these pains translate to pages

- **Category page headlines** should tap the lead-gen-overhead pain directly. Not "find your next fractional role" (generic) — "Stop writing LinkedIn posts to find your next client" (specific to the pain).
- **Salary calculator + pricing guide** (pillar content, Part H) addresses Pain #2 head-on. Chris's data and Moriah's hourly regret are anchor anecdotes.
- **"How long is a fractional sales cycle"** is a pillar guide topic addressing Pain #3 — low competition, high intent.
- **Author bylines and site design polish** serve Pain #4 (credibility) by signaling the site itself isn't a flimsy fractional.
- **FAQs about non-payment, scope creep, and contracts** belong in the operator-resources spoke pages (Part H scope).

---

## 4.5 Headline & hero copy standards (locked)

These are the standard H1/subheadline patterns for the homepage and all 7 category pages. Derived from applying the `copywriting` skill's headline formulas + the `seo-audit` skill's keyword-in-H1 rule + Princeton GEO research on AEO citation patterns. This is a pure SEO/AEO play — not a vibe call. Any skill writing or editing headlines on this site should follow these patterns unless explicitly overridden.

### Why these standards exist

- `seo-audit` skill, line 195: *"H1 contains primary keyword. Primary keyword in first 100 words."* Non-negotiable for ranking.
- `copywriting` skill, line 112: *"Headline: your single most important message. Specific > generic."* The subheadline expands on the H1 with pain-point emotion.
- `ai-seo` skill, Pillar 2: expert quotes with attribution boost AI citations +30%. Testimonial-style quotes belong in the hero or in a section H2, not the H1.

### Homepage H1 standard (locked — Version A)

```
H1:  Fractional executive jobs. In one place.
Sub: Stop writing LinkedIn posts to find your next client. Every fractional role
     in the last 30 days, ready to apply.
```

**Why this wins:**
- **H1 contains exact primary keyword** ("fractional executive jobs" — 2,000-3,000/mo cluster).
- **"In one place"** signals the watering-hole promise without being cute.
- **Sub names Pain #1** (lead-gen overhead — Filip's "I like to do the work, I don't love the sales process" pain).
- **"In the last 30 days, ready to apply"** addresses Pain #4 (credibility / is this site real and fresh?).
- **Under 40 characters** — fits mobile and meta-title budget.

**Not the H1 (used elsewhere on the page):**
- Filip's quote *"I like to do the work. I don't love the sales process."* — use as a testimonial quote in a section below the hero. Attribution: "— a fractional COO." Earns +30% AEO citation boost per `ai-seo` skill.
- *"Stop writing LinkedIn posts to find your next client"* — already used as subheadline; can also be reused as an H2 above the jobs grid.

**Future A/B testing candidates** (documented for when we have traffic to test):
- Version B (Problem-Focused formula): "Find your next fractional executive role. / Stop writing LinkedIn posts between clients. The watering hole for fractional COOs, CMOs, CFOs, and Chiefs of Staff."
- Version C (Differentiation-Focused formula): "The job board built for fractional executives. / [Filip quote as attributed subhead]."

### Category page H1 standard (locked — applies to all 7 role pages)

One template, applied across `/fractional-coo-jobs`, `/fractional-cmo-jobs`, `/fractional-cfo-jobs`, `/fractional-cto-jobs`, `/fractional-cro-jobs`, `/fractional-cos-jobs`, `/head-of-ops-jobs`.

**Template:**

```
H1:  Fractional {Role} jobs
Sub: Every fractional {Full-title-of-role} role posted in the last 30 days.
     Stop hunting. Apply and get back to work.
```

**Filled examples:**

| URL | H1 | Subheadline |
|---|---|---|
| `/fractional-coo-jobs` | Fractional COO jobs | Every fractional Chief Operating Officer role posted in the last 30 days. Stop hunting. Apply and get back to work. |
| `/fractional-cmo-jobs` | Fractional CMO jobs | Every fractional Chief Marketing Officer role posted in the last 30 days. Stop hunting. Apply and get back to work. |
| `/fractional-cfo-jobs` | Fractional CFO jobs | Every fractional Chief Financial Officer role posted in the last 30 days. Stop hunting. Apply and get back to work. |
| `/fractional-cto-jobs` | Fractional CTO jobs | Every fractional Chief Technology Officer role posted in the last 30 days. Stop hunting. Apply and get back to work. |
| `/fractional-cro-jobs` | Fractional CRO jobs | Every fractional Chief Revenue Officer role posted in the last 30 days. Stop hunting. Apply and get back to work. |
| `/fractional-cos-jobs` | Fractional Chief of Staff jobs | Every fractional Chief of Staff role posted in the last 30 days. Stop hunting. Apply and get back to work. |
| `/head-of-ops-jobs` | Head of Operations jobs | Every fractional Head of Operations and VP of Ops role posted in the last 30 days. Stop hunting. Apply and get back to work. |

**Why this replaces current copy:**
- Current H1: *"Fractional COO Jobs — Hire or Get Hired"* tries to serve both audiences (operators + founders) and dilutes the keyword. Per the Option B audience decision, operators are 80% of traffic — the H1 writes to them.
- New H1 is a clean keyword match with no extra words ("Hire or Get Hired" adds zero SEO value).
- Subheadline does the emotional work ("Stop hunting") + credibility/freshness signal ("in the last 30 days").

**Rule for future skill invocations:** Any time `copywriting`, `ai-seo`, or `seo-audit` is asked to edit a category page headline, apply this template. Only deviate if a split test or a keyword-volume shift warrants it.

### The CoS page is a special case

`/fractional-cos-jobs` targets **"chief of staff jobs" (2,400/mo, $0.30 CPC)** per the keyword doc — the highest single-page volume target on the site. The H1 pattern above uses "Fractional Chief of Staff jobs" which misses the bare "chief of staff jobs" head term. Two options:

- **Option 1 (recommended by `seo-audit` priority rules):** H1 = "Chief of Staff jobs (fractional)". Captures the head term first, qualifies with "fractional" in parens.
- **Option 2:** Keep the standard pattern "Fractional Chief of Staff jobs" and rely on the body copy + meta title to capture the head term. Simpler, more consistent with other category pages.

**Open decision** — resolve when we get to Part D execution. Either way, the subheadline pattern stays.

### Copy tone rules baked into these standards

- No buzzwords. No "unlock", "leverage", "seamless", "world-class".
- Specific numbers over vague claims ("in the last 30 days" beats "recently updated").
- Second person allowed ("Apply and get back to work"). Not mandatory.
- Pain-named subheadlines beat benefit-stated subheadlines. "Stop hunting" > "Find roles easily".

---

## 5. Competitive Landscape

### Direct competitor — the one to actually study

**Fractional Jobs (Taylor)** — https://www.fractionaljobs.io
- Newsletter-first, curated-listings model. Community-driven.
- ~$50K/mo revenue (per user). Hands-on operation.
- Our model is deliberately different: SEO-driven, passive, job-board-first, minimal curation overhead. Same market, different motion. No head-on collision.
- **Ambition anchor:** user is happy with 1/5 of Taylor's revenue (~$10K/mo) at ~2 hrs/week. This is a passive-income play, not a grow-at-all-costs play. Optimize toward hands-off.
- **Research task (future):** study Taylor's curation process, newsletter cadence, employer flow, pricing. Cheap scouting that de-risks decisions later. Tracked in plan.

### Direct competitors — listed in the market, not primary threats

- **GigX** — self-service directory, employers free, execs pay $89/mo. Likely has more supply (fractionals) than demand (jobs).
- **Chief Outsiders, Bolster, Continuum, Go Fractional** — gated fractional placement services. Gatekeeper model.
- **Pallet Labs / other niche boards** — relationship unknown; listed in keyword doc.

### The real positioning-against-gated-services insight

The user has applied to gated placement services (Chief Outsiders, Go Fractional, etc.) and been ghosted. **This is an endorsement of our thesis, not a competitive threat.** Gated services are black boxes — you apply, put in effort, wait, rarely hear back, and if you're accepted, you still may never hear from job posters.

**Our opposite is the wedge:**
- No gate. No application to us. No waiting.
- Every job is a direct-apply link to the employer.
- If they don't respond, that's on them — not us.
- The user's take: "you kind of eat what you kill." Our site is the "you decide, you eat" venue. Not a gatekeeper.

Copy should (tastefully) name this contrast. Not by attacking competitors — by asserting our model. Example angle: "No applications to us. No gatekeepers. Every role links direct to the founder."

### Secondary competitors — general job boards that bury fractional roles

- **LinkedIn Jobs** — massive traffic, but fractional roles lost in the noise. Operators wade through 1,000 full-time COO postings to find 10 fractional ones. (This is Pain #1 in reverse.)
- **Indeed / Glassdoor / ZipRecruiter** — even worse; not designed for senior fractional work.
- **Wellfound (ex-AngelList Talent)** — startup-focused but dominated by engineering roles.

Note: we ingest from JSearch which pulls Google for Jobs (including LinkedIn, Indeed). So these aren't really competitors — they're our upstream data source. We add filtering + category structure + SEO they can't match for the "fractional" query cluster.

### Indirect competitors — the real alternative

**Personal network.** Every interview confirmed it. Fractional work is deeply trust-based; most engagements come from referrals, ex-colleagues, portfolio founders, LinkedIn DMs from people who already know your work.

**Critical positioning implication:** We are not trying to replace someone's network (impossible, not worth it). We are **the first place they look when the network is dry.** That's a lower-ask, more honest positioning than "ditch your network, use us." It also matches the real usage pattern from interviews — they hit up network first, then start hunting when that runs out.

Copy angle: *"Your network is the first place to look. This is the second."* (Draft, not locked.)

### Branded-term competitive signal — Hello Generalist

From [hireafractionalexec-seo-keywords.md](hireafractionalexec-seo-keywords.md): **Hello Generalist** — branded term for a fractional CoS placement service. $5.00 CPC (highest in entire keyword dataset), +30% growing trend, 260/mo volume. **Signal:** someone is paying $5 per click for leads in this niche. The market values fractional exec traffic very highly. We're not in a cheap commodity category.

### Email capture is the defensible business

A sharper read on the model from the user: *"The key thing is maybe not giving away too much and being able to capture emails so we build a bit of a business value that way."*

**Implication for site strategy:**
- Jobs are the loss leader (traffic generator, free value).
- Email list is the owned asset (defensible, relocatable, sellable).
- Newsletter signup CTA deserves peer billing with "apply to this job" on category pages, not second-billing.
- Don't over-gate: the jobs themselves stay free and public (that's the SEO play). But add prominent, non-annoying capture: inline forms after the hero, footer, possibly soft paywall on bonus content like salary calculators or guides.

### How we win (the value-prop synthesis)

Against gated fractional services: **No gate. Direct apply. No black box.**
Against LinkedIn/Indeed: **Built for fractional; every listing has been filtered to actually be fractional.**
Against "just use your network": **We're not trying to replace your network. We're where you go when it's dry.**
Against Taylor/Fractional Jobs: **SEO-driven and passive; different lane, not head-on.**

### The operator's real weekly time allocation (critical for copy depth + friction decisions)

A fractional operator in active pipeline-building mode is juggling six different activities simultaneously:

1. **Checking our site / other job boards** — where we live.
2. **Looking at full-time roles** — because their part-time pipeline is too thin to cover income. *Some visitors are semi-reluctantly fractional and would take full-time.*
3. **Having coffees with people** — 1:1 relationship building.
4. **Tapping their network** — DMs, warm intros.
5. **Attending networking events** — in-person hunting.
6. **Delivering on current clients** — the actual paying work.

**We are one of six competing time-sinks.** We're not fighting "other job boards" for their attention — we're fighting their entire hunt stack plus client work. We need to earn their 5 minutes, not their 30.

**Design and copy implications:**

- **Speed + friction reduction beat depth.** A scannable 5-second "here are the COO roles this week" grid beats a beautiful 2,000-word explainer page. This reinforces the category-page H1 decision (tight, keyword-led, sub-headline names the pain, jobs grid above the fold).
- **"Weekly check-in" framing beats "deep browse" framing.** The user landing on `/fractional-coo-jobs` is likely doing a 5-minute between-meetings scan, not an evening research session. Write to that reality.
- **Newsletter CTA becomes the conversion event.** If we can convert the 5-minute weekly-check user into a weekly-digest subscriber, we've shifted them from 5 minutes/week on our site to a passive 30-second scan of our email. That's a win for them (less time hunting) and for us (recurring touchpoint + owned asset).
- **"Full-time curious" traffic is real but not our focus.** Operators searching "fractional COO OR full-time COO" is a thing. Recommendation: don't add full-time listings (stay pure to the niche), but DO ensure subheadlines acknowledge the reality that fractional pipelines get thin. Example: *"Your network is the first place to look. This is the second — and when it's dry, we're where the fractional roles are."* That wording respects the mixed-intent reality without abandoning positioning.

**What this does NOT change:**

- Pillar/spoke guides (Part H) still get built — they're not for the weekly 5-minute check-in reader, they're for the monthly Google-search discovery reader. Different moment of use. Both matter for SEO / AEO. Don't sacrifice the long-form work because the job-board usage is fast.
- Homepage H1 standard holds — it's for first-time visitors who don't yet know the site, who need the keyword match to feel they're in the right place.

---

## 6. Differentiation

The five-word version: **no gate, direct apply, fractional-only, fast, honest.**

1. **No gate.** Gated placement services (Chief Outsiders, Go Fractional, etc.) take applications and ghost operators. We have no application, no approval, no black box. Every listing links directly to the employer's apply URL.
2. **Fractional-only filter.** Every job has been verified to have "fractional", "interim", or "part-time" in the title (or contractor/part-time employment type). ~30% of JSearch ingest hits are rejected. No full-time roles disguised with "fractional" buried in the JD.
3. **SEO-first category hubs.** Category pages target the exact keyword an operator types into Google. Ranking on page 1 is the business model, not a side benefit.
4. **Pricing transparency.** Salary calculator + category body copy cite real monthly retainers with dates and sources. A new-to-fractional operator learns what to charge without a coaching call.
5. **Fast, clean, low-friction UI.** No "create an account to apply." No recruiter popups. No modal scum. The 5-minute-between-meetings visitor gets what they came for and leaves.
6. **Credibility signals that match the audience.** Practicing-fractional-COO bylines on ops content. Last-updated dates visible. Citable statistics in body copy. Treats the reader like the senior operator they are, not a lead to be captured.

Against the three alternatives the operator actually considers:
- **vs. their network:** we're not a replacement. We're "the second place to look, for when the network is dry."
- **vs. LinkedIn/Indeed:** we filter what they can't — fractional roles as the default, not an afterthought.
- **vs. gated services (Chief Outsiders, Go Fractional):** no application, no gatekeepers, no wait, no ghosting. Direct apply only.

---

## 7. Objections & Anti-Personas

### Operator-side objections (with answers grounded in the site's mechanics)

- **"Is this just another scraped aggregator with dead links?"** — We ingest nightly via JSearch (Google for Jobs aggregation), verify apply links, and expire stale posts at 30 days. Rejection rate at ingest is ~30% — we keep the filter tight so the board stays clean.
- **"Will my resume go to a recruiter?"** — No. Apply links go directly to the employer. We don't collect resumes, don't broker applications, don't sell data.
- **"Are these roles actually fractional, or just renamed full-time?"** — Title-level filter requires "fractional", "interim", or "part-time" (or explicit contractor/part-time employment type). If a listing slips through that's obviously full-time, it's a filter bug, not policy.
- **"Is this just a side project that'll disappear in 6 months?"** — Built by a practicing fractional COO, monetized by paid job posts, ingesting daily, domain purchased long-term. Live since 2026.
- **"Why should I subscribe to your newsletter?"** — Because you don't want to check a job board every day. Weekly digest → you spend 30 seconds instead of 5 minutes.

### Employer-side objections

- **"$299 — why pay you when LinkedIn posting is free?"** — LinkedIn buries fractional roles under full-time listings, and its search doesn't distinguish fractional from contractor from part-time. Our traffic is filtered — operators searching for exactly this. If we can't send you qualified applicants at $299, your hiring process has bigger problems than a posting fee.
- **"Can you guarantee applicants?"** — No job board can. What we can do: show you page views and apply clicks after 7 days. If the role is well-written and the comp is in range, qualified fractionals will apply.
- **"How do I write a listing that gets applicants?"** — Clear "fractional" in title, comp range visible (even a range helps), remote/hybrid/onsite explicit, and a description that names the real scope and expected hours. Per our operator interviews, those four things are the difference between apply and skip.

### Anti-personas (who we are NOT for)

- **Junior-to-mid career candidates** looking for their first exec role. Fractional work requires pattern recognition from prior full-time exec experience. We don't gate them out — the "how to become a fractional COO" query is a traffic win — but they're not our paying employer's ideal candidate.
- **Recruiters/staffing agencies** listing on behalf of clients. Not blocked, but the value prop is direct-from-founder, not recruiter-fed. Their listings may underperform.
- **Full-time permanent executive roles** that happen to mention "fractional" in the description. Filtered out at ingest.
- **Enterprise employers** hiring for a traditional full-time C-suite role at a Fortune 500. Wrong shelf.
- **Fractional execs seeking community / coaching / content about being fractional.** That's Taylor's model at Fractional Jobs. We're a job board, not a community. Send them his way if asked.

---

## 8. Switching Dynamics (JTBD Four Forces)

**Push (away from status quo):**
- LinkedIn noise burying fractional roles under full-time listings
- Gated placement services that ghost applicants (Chief Outsiders, Go Fractional)
- Recruiter gatekeeping (20-30% skim)
- Unclear rates — new-to-fractional operators don't know what to charge
- The overhead of continuous client-acquisition on top of actual delivery work (Pain #1)

**Pull (toward us):**
- Fractional-first SEO pages that rank for the exact searches they run
- Direct apply, no application to us, no gate
- Transparent market rates in the body copy + salary calculator
- 5-minute weekly check-in rhythm respects their time
- Jared-as-author signals "built by an operator who gets it, not a marketing team"

**Anxiety (reasons not to switch):**
- "Is this site real/trustworthy?" → countered by last-updated dates, practicing-COO byline, specific citable numbers
- "Will I get spammed?" → countered by "no account required to apply" and explicit anti-recruiter policy
- "Is the job data actually fresh?" → countered by the "posted in the last 30 days" subheadline pattern + nightly ingest
- "Is the filtering real?" → countered by visible tags (fractional/interim/part-time) on every card

**Inertia (reasons to stay with old):**
- Habit — operators default to LinkedIn + network check first
- **Our counter:** be the #1 Google result for "fractional [role] jobs" + "fractional [role] salary" so we catch intent at the moment of search. Own the moment their network goes dry, and their muscle memory reroutes to us.

---

## 9. SEO & AEO target queries

See [hireafractionalexec-seo-keywords.md](hireafractionalexec-seo-keywords.md) for the full keyword map with volumes, CPCs, and trend data. This section is the working summary skills should reference.

### Tier 1 keywords (locked — build around these)

Per the keyword doc:

| Keyword | Vol/mo | CPC | Role |
|---|---|---|---|
| fractional coo | 2,400 | $2.54 | Head term for COO cluster |
| fractional cmo | 4,000-6,000 | $3.00-5.00+ | Biggest volume cluster |
| fractional cfo | 4,000-6,000 | $3.00-5.00+ | Most established market |
| fractional coo jobs | 590 | $0.77 | **Nobody owns this** — easiest win |
| chief of staff salary | 6,600 | $1.09 | Salary calculator target |
| fractional chief of staff | 480 | $1.74 | High intent |
| fractional executive | 2,000-3,000 | $2.00+ | Site-level hub term |

### Primary SEO queries (page-level targets)

For each of the 7 roles (COO, CMO, CFO, CTO, CRO, CoS, Head of Ops):
- "fractional [role] jobs" — category hub page
- "fractional [role] salary" — salary calculator / pricing spoke
- "fractional [role] rates" — pricing spoke
- "part-time [role] jobs" / "interim [role] jobs" — natural body copy integration
- "how to become a fractional [role]" — Persona C spoke guide
- "fractional [role] vs full-time [role]" — comparison spoke (33% AI citation rate)
- "what does a fractional [role] do" — definitive guide spoke (Part H)

Site-level:
- "fractional executive jobs" (2,000-3,000/mo) — homepage primary
- "fractional C-suite", "where to find fractional executives"

### Founder-intent queries (hub of 3-5 founder pages per Audience Option B)

- "how to hire a fractional [role]"
- "fractional [role] cost" / "fractional [role] rates for employers"
- "where to post fractional jobs"
- "fractional vs full-time executive"

### AEO queries (LLM citation targets)

Questions an operator (or hiring founder) asks ChatGPT / Claude / Perplexity / Google AI Overviews. Winning means our page appears in cited sources:

**Operator-side:**
- "How much do fractional COOs charge per month?"
- "What is a fractional CMO and when should I hire one?"
- "How many clients can a fractional executive handle?"
- "How do I land my first fractional COO role?"
- "What's the difference between fractional and interim?"
- "Typical engagement length for a fractional CFO?"
- "How do I price a fractional COO engagement?" — Chris's story is the citation-worthy anecdote here
- "How long is the fractional executive sales cycle?" — Moriah's burning question

**Founder-side:**
- "Fractional CFO vs full-time CFO — which should I hire at Series A?"
- "How much does a fractional COO cost?"
- "When should I hire a fractional COO?"

### AEO tactics (from `ai-seo` skill — Princeton GEO research)

- **Statistics with sources and dates** boost AI citations by **+37%**. Use citable numbers from [hireafractionalexec-seo-keywords.md](hireafractionalexec-seo-keywords.md) market-context section: 46% YoY market growth, 72% of CEOs increasing usage, 25%→35% US business adoption, workforce doubled 60K→120K, Chris's "50% fewer clients, 50% more revenue" story.
- **Citations to external authoritative sources** boost by **+40%**. For salary/rate content, cite Adzuna (when Phase 3 lands), BLS occupational stats, the Harvard Business Review / McKinsey fractional-exec articles.
- **Expert quotes with attribution** boost **+30%**. Attribution options:
  - "Jared Perry — practicing fractional COO, founder of HireAFractionalExec" on COO/ops content
  - Anonymized interview quotes: "A fractional CRO we interviewed told us…" (permission policy is anonymize-by-default, see Section 4 note)
- **40-60 word answer blocks** are optimal for snippet extraction. Every category page definition + first FAQ answer should hit this length.
- **Freshness signals:** Render "Last updated" date on every category, detail, and guide page. ISR already regenerates every 5 min — surface the date.
- **Keyword stuffing reduces AI visibility by 10%.** Use phrase families naturally 1-2x per paragraph, never more.
- **Comparison content gets cited at 33%** (highest of any format). Build "fractional vs full-time" comparison pages per role per Part H.

### Star metrics (from Section 1)

- **1,000 monthly organic visits** from fractional-targeted search
- **500 newsletter subscribers**
- **Total addressable cluster:** ~35,000-40,000 monthly searches. 1,000 = 2.5-3% capture, achievable for a site with focused topical authority.

---

## 10. Voice & tone

### Core rules (locked)

- **Direct.** "Find your next fractional COO. Skip the recruiter." Not "Unlock your hiring potential."
- **Opinionated.** Take positions — rate ranges, engagement length, what makes a good fractional. Vague is worse than wrong for AEO (LLMs don't cite hedged copy).
- **Specific numbers over vague claims.** "$8,000-$18,000/month" beats "affordable rates." "10-15 hours/week" beats "part-time."
- **Second person when natural.** "You come in at 10-15 hours a week…" Not mandatory.
- **No buzzwords.** Banned list: "synergy", "leverage", "optimize", "unlock", "seamless", "cutting-edge", "world-class", "innovative", "end-to-end", "holistic", "best-in-class."
- **Short paragraphs.** One idea per paragraph. Scannable beats comprehensive for the 5-minute-between-meetings reader.
- **No applicant pandering.** This audience is senior. They've read every flavor of marketing copy. Respect that — write to peers, not down to targets.

### Headline standards — see Section 4.5

All H1 and subheadline decisions are captured in Section 4.5 (locked). Any skill writing a new page headline should read that section first.

### Stock phrases (OK to reuse across the site)

- "Stop hunting." / "Stop writing LinkedIn posts."
- "Apply and get back to work."
- "In the last 30 days."
- "Direct to the founder." / "No gatekeepers."
- "Built by a practicing fractional COO."
- "Every fractional [role] role in one place."

### Stock phrases to AVOID

- "Your one-stop shop" (tired, and implies marketplace-not-job-board)
- "Revolutionary" / "disruptive" (cringe)
- "Passion for excellence" (corporate)
- "Join our community" (we're not a community, see anti-persona #5)

### Quote attribution policy

- **Interview quotes:** anonymize by default ("A fractional CFO we interviewed said…") unless explicit permission given.
- **Jared Perry bylines:** used on COO/ops content, where his expertise is direct. Not on CMO/CFO/CTO content where the authority would be stretched.

---

## 11. What's NOT in scope (for marketing skills to ignore)

- **Paid ads.** Not running Google/Meta/LinkedIn ads. SEO/AEO + email + direct. Display ads on the site are off the table unless economics are proven later.
- **Community building.** Not a priority. Refer interested users to Taylor's Fractional Jobs if they want community.
- **Referral programs.** Maybe later, not now.
- **Product pricing changes.** $299/$499 is locked for now. Checkout UX can flex (contact form with payment link is fine while we ramp).
- **Enterprise positioning.** Not an enterprise product.
- **Recruiter features** (inbox tools, candidate management). We are explicitly the no-middleman alternative.
- **Full-time job listings.** Even though some fractional operators also look at full-time roles (see Section 5), we don't add full-time listings. Stay pure to the niche.
- **Grow-at-all-costs framing.** User's ambition is 1/5 of Fractional Jobs' revenue at ~2 hrs/week. Optimize for hands-off passive income, not hypergrowth.
