/**
 * City content for programmatic SEO city pages.
 *
 * Each city page targets "fractional {role} jobs in {city}" long-tail queries.
 * Pages nest under the parent category route: /fractional-coo-jobs/austin.
 *
 * Content guidelines (from .agents/product-marketing-context.md):
 *  - Operator-facing voice (80% of traffic).
 *  - Specific numbers, not vibes. City-specific stats where available.
 *  - No buzzwords. Short paragraphs. Scannable.
 *  - Every page must provide genuine unique value — not just city name swapped.
 *
 * Starting with COO/ops cities only (founder's core niche, per Part G plan).
 * Other roles can be added later by extending the roleCity map.
 */

/**
 * Target cities — top US metros for fractional exec demand.
 * Ordered roughly by startup/scale-up density.
 *
 * Each entry has:
 *  - slug: URL segment (lowercase, hyphenated)
 *  - name: Display name
 *  - state: Two-letter state code
 *  - metro: Broader metro description (for matching job.location text)
 *  - locationPatterns: strings to match against the freeform job.location field
 *  - description: 2-3 sentence city-specific copy for the page body
 */
const cities = {
  "new-york": {
    slug: "new-york",
    name: "New York",
    state: "NY",
    metro: "New York City metro",
    locationPatterns: ["New York", "NYC", "Manhattan", "Brooklyn", "NY,", "NY "],
    description:
      "New York is the largest market for fractional COO work in the US. The density of Series A-C startups in Manhattan and Brooklyn — plus a deep bench of former operators from finance, media, and enterprise SaaS — means both supply and demand run high. Most NYC fractional COO engagements are hybrid: 1-2 days onsite per week, the rest remote.",
  },
  "san-francisco": {
    slug: "san-francisco",
    name: "San Francisco",
    state: "CA",
    metro: "San Francisco Bay Area",
    locationPatterns: ["San Francisco", "SF,", "Bay Area", "SF "],
    description:
      "San Francisco remains the center of gravity for venture-backed startups, and fractional COO demand follows the funding. Bay Area engagements skew toward post-seed, pre-Series B companies that have outgrown founder-led ops but aren't ready for a $350K+ full-time COO. Remote-first is common here — many SF-based companies hire fractional COOs anywhere in the US.",
  },
  austin: {
    slug: "austin",
    name: "Austin",
    state: "TX",
    metro: "Austin-Round Rock metro",
    locationPatterns: ["Austin", "ATX"],
    description:
      "Austin's tech migration — accelerated by Tesla, Oracle, and a wave of Series A-C startups relocating from the coasts — has created a fast-growing fractional COO market. No state income tax makes Texas attractive for fractional operators running multiple clients. Most Austin engagements are fully remote or hybrid with light onsite requirements.",
  },
  "los-angeles": {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "CA",
    metro: "Greater Los Angeles",
    locationPatterns: ["Los Angeles", "LA,", "LA ", "Santa Monica", "Venice"],
    description:
      "LA's fractional COO market is driven by DTC brands, entertainment-tech, and the growing SaaS ecosystem in Silicon Beach. Fractional operators here often specialize in consumer-facing companies where the operational playbook differs from enterprise SaaS. Expect a mix of remote and hybrid engagements across the sprawling metro.",
  },
  chicago: {
    slug: "chicago",
    name: "Chicago",
    state: "IL",
    metro: "Chicagoland",
    locationPatterns: ["Chicago", "IL,", "IL "],
    description:
      "Chicago is an underrated fractional exec market. Strong mid-market companies, PE-backed portfolio companies, and a growing tech scene create steady demand for operational leadership without the coastal price premium. Many Chicago-area fractional COO roles come through PE operating partners filling portfolio company gaps.",
  },
  boston: {
    slug: "boston",
    name: "Boston",
    state: "MA",
    metro: "Greater Boston",
    locationPatterns: ["Boston", "Cambridge", "MA,", "MA "],
    description:
      "Boston's biotech, healthtech, and enterprise SaaS clusters fuel consistent fractional COO demand. The concentration of venture capital along the Route 128 corridor and in Kendall Square means a steady pipeline of growth-stage companies that need senior ops leadership on a fractional basis. Many engagements are hybrid — operators split time between Boston offices and remote work.",
  },
  denver: {
    slug: "denver",
    name: "Denver",
    state: "CO",
    metro: "Denver-Boulder metro",
    locationPatterns: ["Denver", "Boulder", "CO,", "CO "],
    description:
      "Denver-Boulder has become a magnet for remote-first companies and fractional operators who want mountain-town quality of life without sacrificing deal flow. The local startup scene is strong in outdoor/climate tech, SaaS, and health — and the time zone works for both coast collaborations. Most fractional COO engagements here are fully remote.",
  },
  seattle: {
    slug: "seattle",
    name: "Seattle",
    state: "WA",
    metro: "Greater Seattle",
    locationPatterns: ["Seattle", "WA,", "WA ", "Bellevue"],
    description:
      "Seattle's enterprise tech ecosystem — anchored by Amazon, Microsoft, and a deep pool of ex-FAANG operators — creates both demand and supply for fractional COO talent. Startups here tend to be more engineering-heavy, so fractional COOs often fill a critical gap bridging product and business operations. No state income tax makes Washington attractive for multi-client operators.",
  },
  miami: {
    slug: "miami",
    name: "Miami",
    state: "FL",
    metro: "South Florida",
    locationPatterns: ["Miami", "FL,", "FL ", "Fort Lauderdale", "Boca Raton"],
    description:
      "Miami's tech scene has exploded since 2020, with founders and operators relocating from New York and San Francisco. The fractional COO market here skews toward crypto/web3, fintech, and LatAm-facing startups. No state income tax and a growing operator community make South Florida increasingly attractive for fractional execs running multi-client portfolios.",
  },
  atlanta: {
    slug: "atlanta",
    name: "Atlanta",
    state: "GA",
    metro: "Metro Atlanta",
    locationPatterns: ["Atlanta", "GA,", "GA "],
    description:
      "Atlanta is a hub for fintech, logistics-tech, and enterprise SaaS — all sectors with strong fractional COO demand. The city's lower cost of living compared to coastal metros means operators can charge competitive rates while maintaining healthy margins. Atlanta-based fractional COO engagements are typically remote-first with occasional onsite days.",
  },
  dallas: {
    slug: "dallas",
    name: "Dallas",
    state: "TX",
    metro: "Dallas-Fort Worth metro",
    locationPatterns: ["Dallas", "Fort Worth", "DFW", "Plano", "Frisco"],
    description:
      "Dallas-Fort Worth's large corporate presence and growing startup ecosystem create a steady market for fractional COOs, especially in PE-backed portfolio companies and mid-market firms making their first senior ops hire. No state income tax and central time zone make DFW a practical base for fractional operators serving clients nationwide.",
  },
  "san-diego": {
    slug: "san-diego",
    name: "San Diego",
    state: "CA",
    metro: "San Diego metro",
    locationPatterns: ["San Diego", "SD,"],
    description:
      "San Diego's biotech corridor and defense-tech cluster create niche fractional COO demand — operators with regulatory or government-contracting experience are especially valued here. The market is smaller than LA or SF but less competitive, making it a good wedge for fractional operators building a client base in Southern California.",
  },
  "washington-dc": {
    slug: "washington-dc",
    name: "Washington, D.C.",
    state: "DC",
    metro: "DC-Maryland-Virginia metro",
    locationPatterns: ["Washington", "D.C.", "DC,", "DC ", "Arlington", "Bethesda", "Reston"],
    description:
      "The DC metro area's GovTech, cybersecurity, and defense startup ecosystem drives fractional COO demand with a distinctive flavor — operators here often need clearance familiarity or federal procurement experience. Northern Virginia's corridor from Arlington to Reston is particularly dense with growth-stage companies seeking senior ops help.",
  },
  nashville: {
    slug: "nashville",
    name: "Nashville",
    state: "TN",
    metro: "Nashville metro",
    locationPatterns: ["Nashville", "TN,", "TN "],
    description:
      "Nashville's healthcare-tech ecosystem and growing startup scene create fractional COO opportunities in a market with less competition than coastal cities. No state income tax and a central time zone make Tennessee attractive for fractional operators. Healthcare operations experience is a differentiator in this market.",
  },
  phoenix: {
    slug: "phoenix",
    name: "Phoenix",
    state: "AZ",
    metro: "Phoenix-Scottsdale metro",
    locationPatterns: ["Phoenix", "Scottsdale", "AZ,", "AZ ", "Tempe"],
    description:
      "Phoenix-Scottsdale has quietly built a strong tech and fintech presence, with companies attracted by the low cost of doing business and talent availability. Fractional COO demand here often comes from companies scaling out of the founder-led stage. The market is early — less saturated than Austin or Denver, with room to build a local reputation.",
  },
  minneapolis: {
    slug: "minneapolis",
    name: "Minneapolis",
    state: "MN",
    metro: "Twin Cities metro",
    locationPatterns: ["Minneapolis", "St. Paul", "MN,", "MN "],
    description:
      "The Twin Cities punch above their weight in fractional exec demand, driven by a deep bench of Fortune 500 corporate talent (Target, UnitedHealth, 3M, General Mills) transitioning into fractional and advisory work. Mid-market companies and PE-backed portfolio companies in the region value the operational discipline these operators bring.",
  },
  portland: {
    slug: "portland",
    name: "Portland",
    state: "OR",
    metro: "Portland metro",
    locationPatterns: ["Portland", "OR,", "OR "],
    description:
      "Portland's outdoor, sustainability, and consumer-brand ecosystem creates a niche but loyal fractional COO market. Operators here often serve purpose-driven companies where the COO role blends traditional ops with impact measurement. Smaller than Seattle but with a collaborative operator community and lower cost of living.",
  },
  "salt-lake-city": {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    state: "UT",
    metro: "Salt Lake City metro",
    locationPatterns: ["Salt Lake", "SLC", "UT,", "UT ", "Provo", "Lehi"],
    description:
      "Utah's Silicon Slopes — the Lehi-to-Provo corridor — has produced a disproportionate number of SaaS unicorns and high-growth startups. Fractional COO demand here is driven by companies scaling fast on efficient capital. The market values operators who've seen the $5M-to-$50M ARR scaling playbook before.",
  },
  raleigh: {
    slug: "raleigh",
    name: "Raleigh",
    state: "NC",
    metro: "Research Triangle",
    locationPatterns: ["Raleigh", "Durham", "NC,", "NC ", "Chapel Hill"],
    description:
      "The Research Triangle's mix of biotech, SaaS, and university spin-outs creates consistent fractional COO demand in a market with reasonable rates and high quality of life. Operators in the Triangle often serve companies at the intersection of deep tech and commercial scale — a niche that rewards domain-specific operational experience.",
  },
  remote: {
    slug: "remote",
    name: "Remote",
    state: null,
    metro: "Remote / Anywhere in the US",
    locationPatterns: [], // Special case — matches location_type = 'remote'
    description:
      "Most fractional COO engagements are fully remote. The shift to distributed work since 2020 means geography matters less than timezone overlap and domain expertise. Remote fractional COOs typically align to US business hours (or overlap 4+ hours with their client's core team) and travel onsite 1-2 days per quarter for strategy sessions or team offsites.",
  },
};

/**
 * Role → city slug map. Determines which roles get city pages.
 * Start with COO only (Part G). Extend to other roles later.
 */
const roleCityMap = {
  "fractional-coo-jobs": Object.keys(cities),
  // Future: "fractional-cmo-jobs": Object.keys(cities),
  // Future: "fractional-cfo-jobs": Object.keys(cities),
};

/**
 * Get city data by slug.
 */
export function getCity(citySlug) {
  return cities[citySlug] || null;
}

/**
 * Get all city slugs for a given category slug.
 */
export function getCitySlugsForRole(categorySlug) {
  return roleCityMap[categorySlug] || [];
}

/**
 * Get all cities as an array (for sitemap, internal linking, etc.)
 */
export function getAllCities() {
  return Object.values(cities);
}

/**
 * Get all city entries as [slug, data] pairs.
 */
export function getAllCityEntries() {
  return Object.entries(cities);
}

export default cities;
