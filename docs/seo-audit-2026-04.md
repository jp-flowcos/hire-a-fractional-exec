# SEO Audit — HireAFractionalExec.com

**Date:** 2026-04-15
**Site:** https://hireafractionalexec.com
**Method:** Live crawl + on-page probes across homepage, all 7 category pages, and a sample job detail page, cross-referenced against the `seo-audit` skill framework and the locked keyword targets in [../hireafractionalexec-seo-keywords.md](../hireafractionalexec-seo-keywords.md) and [../.agents/product-marketing-context.md](../.agents/product-marketing-context.md).

**Scope limits:**
- No Core Web Vitals measurement (needs PageSpeed Insights API / Lighthouse; noted as follow-up).
- Schema validation done via raw HTML; Google Rich Results Test should confirm before we call it done.
- No Google Search Console data yet (property just verified — revisit in 2-3 weeks when impressions/clicks data exists).

---

## Executive Summary

**Overall health:** Strong technical foundation. Weak on-page optimization.

The site is technically well-built — clean ISR, proper sitemap, clean robots, complete JobPosting and FAQPage schema, HTTPS everywhere, sub-300ms TTFB. That's 70% of sites beat.

The gap is on-page SEO discipline. H1s dilute their primary keyword, homepage has no H1 at all, meta descriptions are generic, and category-body copy is written to the wrong audience (founders, not operators). This is the difference between "could rank" and "will rank." Fortunately it's all fixable in Part D.

**Top 5 priorities (fix these first):**

1. **[CRITICAL]** Homepage has **zero H1 tags**. Not just wrong — missing entirely. Add one.
2. **[HIGH]** Homepage has **zero JSON-LD schema** — no Organization, no WebSite. All AEO-citation signal is wasted here.
3. **[HIGH]** Category page H1s include "— Hire or Get Hired" which dilutes the primary keyword. Per the locked standard in [Section 4.5 of the context doc](../.agents/product-marketing-context.md), rewrite to tight keyword-first H1s.
4. **[HIGH]** Category page meta descriptions don't include the subheadline pain-point hook that converts. Align with the Section 4.5 subheadline pattern.
5. **[HIGH]** Body copy on all 7 category pages is founder-facing but the audience is 80% operator. Rewrite per Part D of the execution plan.

**Quick wins (all high-impact, all under 30 min each):**
- Fix homepage H1.
- Add Organization + WebSite JSON-LD to root layout.
- Rewrite the 7 category-page H1s + meta descriptions using the locked template.
- Add "Last updated" timestamps to category pages for freshness signal.

---

## Technical SEO Findings

### 1. [CRITICAL] Homepage has no H1

- **Issue:** `<h1>` tag count on `/` = 0.
- **Impact:** HIGH. `seo-audit` skill rule: *"One H1 per page. H1 contains primary keyword."* The homepage is the highest-authority page on the site and currently has no clear topical signal. Google falls back to title tag + content heuristics, which rank worse.
- **Evidence:** `curl -s https://hireafractionalexec.com/ | grep -c '<h1'` returns `0`.
- **Fix:** Add the locked homepage H1 from [Section 4.5](../.agents/product-marketing-context.md) of the context doc: "Fractional executive jobs. In one place." in [app/page.js](../app/page.js).
- **Priority:** 1 (ship with Part D).

### 2. [HIGH] Homepage has no structured data

- **Issue:** Zero JSON-LD `<script>` blocks on `/`. No Organization, no WebSite, no BreadcrumbList.
- **Impact:** HIGH for AEO. Per the `ai-seo` skill, Organization + WebSite schema on the homepage is a site-level authority signal that LLMs use to verify brand/authorship. Missing it means our brand-level entity is invisible to AI parsers.
- **Evidence:** `grep -c 'application/ld+json' /tmp/home.html` returns `0`.
- **Fix:** Add to [app/layout.js](../app/layout.js) (or homepage `page.js`) a JSON-LD block containing Organization (name, url, logo, sameAs to LinkedIn/Twitter if applicable) + WebSite (with potentialAction SearchAction for site search). The `schema-markup` skill's reference has exact patterns.
- **Priority:** 2.

### 3. [MEDIUM] Sitemap includes 101 URLs — good. But no `/guides/` or `/salary/` entries yet.

- **Issue:** Sitemap has 7 static + 7 category + ~87 job detail pages. Fine for today. Will need updating when Parts G (city pages) and H (guides) ship.
- **Impact:** LOW today, will become HIGH as guides/cities get built.
- **Fix:** When Part H lands, add the guide URLs to the sitemap generator in [app/sitemap.js](../app/sitemap.js). Same for Part G city pages.
- **Priority:** 5 (dependency — do when building those parts).

### 4. [NICE-TO-HAVE] No Core Web Vitals measurement yet

- **Issue:** Haven't measured LCP / INP / CLS.
- **Evidence:** Homepage TTFB is 230ms (excellent). Response size 78KB (reasonable). But I don't have real LCP/INP/CLS data.
- **Fix:** Run PageSpeed Insights on the homepage + one category page + one detail page. Fix anything that fails Core Web Vitals thresholds.
- **Priority:** 3. Cheap — ~15 minutes. Do before any performance changes so we have a baseline.

### 5. [NICE-TO-HAVE] No `llms.txt` or machine-readable AI-agent files

- **Issue:** Per the `ai-seo` skill, some sites now add `/llms.txt` or `/pricing.md` as machine-readable files AI agents can crawl without JS rendering. We have neither.
- **Impact:** LOW in April 2026 (the spec is early). MEDIUM to HIGH as this standard matures.
- **Fix:** Add `public/llms.txt` with a 200-word site summary pointing to the key pages. Free real estate.
- **Priority:** 4. Can do alongside Part D.

### 6. [NICE-TO-HAVE] robots.txt doesn't explicitly allow AI crawlers

- **Issue:** `robots.txt` uses a generic `User-Agent: *` / `Allow: /` which does allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended by default. But they aren't explicitly named.
- **Impact:** LOW (default allow is sufficient). Explicit allow is belt-and-suspenders.
- **Fix:** Optionally add explicit `User-agent: GPTBot / ClaudeBot / PerplexityBot / Google-Extended → Allow: /` blocks. Or leave as-is.
- **Priority:** 5. Skip unless we find a crawler-blocking issue.

---

## On-Page SEO Findings

### 7. [CRITICAL] Category H1s dilute the primary keyword

- **Issue:** All 7 category pages have H1 = *"Fractional [Role] Jobs — Hire or Get Hired"*. The "— Hire or Get Hired" adds zero SEO value, splits audience focus (operator vs founder), and pushes the primary keyword further from sentence-start.
- **Impact:** HIGH. `seo-audit` skill rule: *"H1 contains primary keyword. Primary keyword near beginning."*
- **Evidence:** All 7 pages probed; confirmed on COO, CMO, CFO, CTO, CRO, CoS, Head of Ops.
- **Fix:** Apply the locked category H1 template in [Section 4.5 of the context doc](../.agents/product-marketing-context.md). Ship as part of Part D.
- **Priority:** 1.

### 8. [HIGH] Category meta descriptions miss the locked subheadline pattern

- **Issue:** Current meta descriptions are generic ("Browse open fractional COO positions. Find part-time Chief Operating Officer roles…"). They don't include the "Stop hunting. Apply and get back to work." pain-point hook we locked.
- **Impact:** HIGH for click-through rate from SERP. Per `seo-audit` skill: *"Meta description: clear value proposition, call to action."* The locked subheadline pattern is literally designed for this.
- **Fix:** Update each category's `metaDescription` in [libs/category-content.js](../libs/category-content.js) to match the Section 4.5 subheadline, trimmed to ~155 chars. Example for COO: *"Every fractional Chief Operating Officer role posted in the last 30 days. Stop hunting. Apply and get back to work."* — 124 chars, fits with room to spare.
- **Priority:** 1.

### 9. [HIGH] Category body copy is founder-facing; audience is 80% operator

- **Issue:** All 7 category pages' body copy opens with founder-side framing ("Founders between $500K and $3M in revenue often hit an operational ceiling…"). Per the Audience-mix decision (Option B in context doc Section 2), primary audience is operators.
- **Impact:** HIGH. Wrong-audience copy reduces time-on-page, raises bounce rate, and misses the keyword cluster that actually matches operator-intent search queries.
- **Fix:** Rewrite the `body` field in [libs/category-content.js](../libs/category-content.js) for all 7 roles using the `ai-seo` Pillar 1 structure: definition block (40-60 words) → statistic-dense reality check → compensation block. Stay operator-facing. This is literally Part D.
- **Priority:** 1.

### 10. [HIGH] Title tag + H1 do not match (category pages)

- **Issue:** Title tag says *"Fractional COO Jobs | HireAFractionalExec"* (49 chars — good). H1 says *"Fractional COO Jobs — Hire or Get Hired"*. Title tag is on-brand; H1 is not. The inconsistency weakens topical relevance.
- **Impact:** MEDIUM. Google treats title-H1 alignment as a relevance signal.
- **Fix:** Resolved by fix #7 (new H1 template). After that, title and H1 both lead with "Fractional [Role] Jobs".
- **Priority:** 1 (rolls up with #7).

### 11. [HIGH] No internal linking between category pages (hub-and-spoke gap)

- **Issue:** Category pages have a "Related Categories" section at the bottom (3 role links per role) — good. But homepage doesn't consistently link to all 7 category pages with descriptive anchor text, and category pages don't link to the salary calculator or forthcoming guides.
- **Impact:** HIGH for topical authority per `site-architecture` skill's hub-and-spoke model.
- **Fix:** (a) Ensure homepage has visible links to all 7 category pages with anchor text matching primary keyword ("Fractional COO Jobs" → `/fractional-coo-jobs`). (b) Add a "Learn more about fractional COOs →" link in each category page pointing to the corresponding guide (Part H) and salary page (Phase 3). (c) Add category ↔ salary-calculator cross-links.
- **Priority:** 2.

### 12. [MEDIUM] Canonical URLs present and correct on category pages

- **Issue:** None — they're all set correctly (e.g. `<link rel="canonical" href="https://hireafractionalexec.com/fractional-coo-jobs">`).
- **Action:** No change.
- **Priority:** N/A. Called out as a pass, not a fail.

### 13. [NICE-TO-HAVE] No author attribution on category pages

- **Issue:** Context doc locks in that COO/ops pages should have "By Jared Perry — practicing fractional COO" byline for +30% AEO citation boost per the `ai-seo` skill. Not there today.
- **Impact:** MEDIUM. Missing AEO signal specifically for the queries we most want to win ("how much does a fractional COO charge", "what does a fractional COO do").
- **Fix:** Add a byline + Last-updated block near the top of each category page. Simple component.
- **Priority:** 2.

---

## Content Quality (E-E-A-T) Findings

### 14. [HIGH] No visible freshness signal on any page

- **Issue:** Per the `ai-seo` skill: *"'Last updated: [date]' prominently displayed"* is a top-tier freshness signal for AI citation. Our site has zero visible "last updated" or "posted on" metadata on category or detail pages. (Detail pages have `timeAgo` for job post date — that's a start, but not explicit freshness.)
- **Impact:** HIGH for AEO. LLMs weight freshness signals.
- **Fix:** Add a "Last updated: [date]" line to every category page (use the `lastUpdated` field pattern from the plan). Our ISR regenerates every 5 min so the date can simply be `new Date().toISOString().split("T")[0]` formatted on render.
- **Priority:** 2.

### 15. [HIGH] No E-E-A-T author page or /about content linking to credentials

- **Issue:** `/about` page exists but audit hasn't validated its E-E-A-T quality. Recommendation: confirm it names Jared Perry as founder + practicing fractional COO, links to LinkedIn / prior engagements, and establishes authority for the operator audience.
- **Impact:** HIGH. Per `seo-audit` skill E-E-A-T rules: *"Expertise: author credentials visible. Authoritativeness: recognized in the space."*
- **Fix:** Manual inspection of `/about` required. If weak, beef it up. Add "Founder: Jared Perry" with credentials and link to it from the global footer.
- **Priority:** 2.

### 16. [MEDIUM] Thin body copy on low-supply categories

- **Issue:** `/fractional-cos-jobs` shows 2 job links, `/head-of-ops-jobs` shows 5. Combined with founder-facing body copy, these pages look thin to Google.
- **Impact:** MEDIUM. Thin-content warnings and ranking drops are real risks for pages with <5 listings + generic copy.
- **Fix:** (a) Part D rewrite gives them denser, operator-facing body copy that stands on its own without needing many listings. (b) The CoS page targets a 2,400/mo head term; it deserves extra care — consider adding the CoS Option-1 H1 decision (*"Chief of Staff jobs (fractional)"*) to capture the bare head term. (c) If a category routinely has <3 approved jobs, consider promoting a newsletter signup CTA to the top of the page so the page delivers value even when supply is low.
- **Priority:** 2.

### 17. [MEDIUM] Keyword-audience mismatch on CMO/CFO/CTO/CRO copy

- **Issue:** The keyword research shows CMO/CFO are the biggest volume spokes ($3-5 CPC). But their category copy is weaker than COO's — reflects user's deeper COO/ops expertise. This is a real constraint, not a bug.
- **Impact:** MEDIUM. We won't rank as well for the non-ops categories without commissioned depth.
- **Fix:** Part D writes all 7 to the same template, but CMO/CFO/CTO/CRO copy can be less bylined and rely more on statistics + neutral framing vs first-person expertise. Document this as a known constraint; don't try to fake authority we don't have.
- **Priority:** 3. Part D follows the template; deeper CMO/CFO content is a future commissioned-writer task.

### 18. [NICE-TO-HAVE] FAQ audience mismatch

- **Issue:** Category FAQs currently mix operator-side (e.g. "How many hours per week does a fractional COO work?") with founder-side (e.g. "When should a founder hire a fractional COO?"). Per the Section 2 audience-mix decision, operator-focused FAQs should dominate and founder-side FAQs should move to the 3-5-page founder hub (per Option B).
- **Impact:** LOW. FAQs still get picked up for FAQPage schema either way.
- **Fix:** During Part D, add 2-3 new operator-focused FAQs per role ("How do I land my first fractional COO role?", "How many fractional COO clients can one person handle?", "What should I charge for my first engagement?"). Leave existing founder FAQs in place for now — they don't harm, and we'll relocate them to the founder hub when Part D-bis ships.
- **Priority:** 2.

---

## Prioritized Action Plan

### Critical (do first; ship in Part D)
1. Add H1 to homepage (**#1**)
2. Rewrite all 7 category H1s per locked template (**#7, #10**)
3. Rewrite all 7 category meta descriptions per locked subheadline pattern (**#8**)
4. Rewrite all 7 category body copies, operator-facing (**#9**)

### High-impact (do in Part D or immediately after)
5. Add Organization + WebSite JSON-LD to root layout (**#2**)
6. Add "Last updated" date visible on every category page (**#14**)
7. Add "By Jared Perry — practicing fractional COO" byline on COO/ops pages (**#13**)
8. Improve internal linking: homepage → category pages with keyword anchor text; category → forthcoming guides + salary calculator (**#11**)
9. Audit + harden `/about` page for E-E-A-T (**#15**)
10. Add 2-3 operator-focused FAQs per category (**#18**)

### Quick wins
11. Run PageSpeed Insights baseline on homepage + 1 category + 1 detail page (**#4**)
12. Add `public/llms.txt` (200-word site summary) (**#5**)

### Long-term
13. Relocate founder-side FAQs to the founder hub when that ships (**#18**)
14. Commission deeper CMO/CFO/CTO/CRO content (**#17**)
15. Update sitemap when Parts G + H land (**#3**)

### Won't-do (for now)
- Explicit AI-crawler allowlist in robots.txt (**#6**). Default-allow is sufficient; revisit if we see crawl issues.

---

## What's solid — do NOT change

These were checked and found working. Don't touch:

- **Sitemap** at `/sitemap.xml` — 101 valid URLs, proper App Router `sitemap.js`.
- **robots.txt** — clean, allows all, disallows `/api/` and `/dashboard/`, references sitemap.
- **Canonical URLs** — correctly set on all category pages.
- **JobPosting JSON-LD** on detail pages — complete (title, description, dates, employmentType, jobLocationType, hiringOrganization, baseSalary, applicantLocationRequirements). Ready for Google's Rich Results Test.
- **FAQPage JSON-LD** on category pages — complete with all 5 Q&As per role.
- **BreadcrumbList JSON-LD** on both category and detail pages — present.
- **HTTPS + HSTS** everywhere, clean.
- **ISR revalidation** working (previous bug fixed).
- **TTFB ~230ms** — excellent.
- **URL structure** — clean, readable, keyword-aligned, lowercase, hyphen-separated.

---

## Follow-ups for next session

- Run Google Rich Results Test on: `/` (after Organization schema added), one category page, one detail page, one forthcoming `/guides/` page (Part H).
- Pull Google Search Console impressions + clicks data once it accrues (2-3 weeks out).
- Run Lighthouse / PageSpeed Insights to establish a Core Web Vitals baseline.
- Study Taylor's Fractional Jobs site (per plan). What guide-level content does he publish? What's his newsletter cadence? What roles actually get posted on his site?
