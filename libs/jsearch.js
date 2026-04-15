import slugify from "slugify";

const BASE_URL = "https://jsearch.p.rapidapi.com/search";

/**
 * Call the JSearch search endpoint. Returns raw `data` array from the response.
 * @param {string} query - search keywords
 * @param {object} opts
 * @param {"today"|"3days"|"week"|"month"|"all"} [opts.datePosted="week"]
 * @param {string} [opts.employmentTypes] - comma-separated: FULLTIME,CONTRACTOR,PARTTIME,INTERN
 * @param {number} [opts.page=1]
 * @param {number} [opts.numPages=1]
 */
export async function searchJSearch(query, opts = {}) {
  const key = process.env.RAPIDAPI_KEY;
  const host = process.env.RAPIDAPI_HOST || "jsearch.p.rapidapi.com";
  if (!key) throw new Error("RAPIDAPI_KEY is not set");

  const params = new URLSearchParams({
    query,
    page: String(opts.page ?? 1),
    num_pages: String(opts.numPages ?? 1),
    date_posted: opts.datePosted ?? "week",
  });
  if (opts.employmentTypes) {
    params.set("employment_types", opts.employmentTypes);
  }

  const res = await fetch(`${BASE_URL}?${params.toString()}`, {
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`JSearch ${res.status}: ${body.slice(0, 200)}`);
  }

  const json = await res.json();
  return Array.isArray(json?.data) ? json.data : [];
}

/**
 * True if the listing is likely a fractional/interim/part-time role.
 * We require the signal to appear in the TITLE — description-only matches
 * produced too many false positives (full-time permanent roles whose JD
 * merely mentioned "fractional" in passing).
 */
export function looksFractional(listing) {
  const title = (listing.job_title || "").toLowerCase();
  if (/\bfractional\b/.test(title)) return true;
  if (/\binterim\b/.test(title)) return true;
  if (/\bpart[-\s]?time\b/.test(title)) return true;
  // JSearch explicit contract/part-time employment types are also a strong signal.
  if (listing.job_employment_type === "CONTRACTOR") return true;
  if (listing.job_employment_type === "PARTTIME") return true;
  return false;
}

const LOCATION_TYPE_MAP = {
  true: "remote",
};

function mapLocationType(listing) {
  if (listing.job_is_remote) return "remote";
  // JSearch doesn't expose hybrid reliably; default to onsite when city is set.
  if (listing.job_city || listing.job_state) return "onsite";
  return "remote";
}

function mapSalary(listing) {
  const min = listing.job_min_salary ?? null;
  const max = listing.job_max_salary ?? null;
  const period = (listing.job_salary_period || "").toUpperCase();

  let salary_type = null;
  if (period === "YEAR") salary_type = "annual";
  else if (period === "MONTH") salary_type = "monthly";
  else if (period === "HOUR") salary_type = "hourly";
  else if (min || max) salary_type = "annual"; // best guess

  return {
    salary_min: min ? Math.round(min) : null,
    salary_max: max ? Math.round(max) : null,
    salary_type,
  };
}

function mapLocation(listing) {
  const parts = [listing.job_city, listing.job_state, listing.job_country].filter(Boolean);
  return parts.length ? parts.join(", ") : null;
}

/**
 * Build a unique slug from title + company + job_id suffix.
 * The DB has a UNIQUE constraint on slug, so we always include a suffix
 * to guarantee uniqueness across reruns.
 */
export function buildSlug(listing) {
  const base = slugify(
    `${listing.job_title} ${listing.employer_name || ""}`,
    { lower: true, strict: true }
  ).slice(0, 80);
  const suffix = (listing.job_id || "").replace(/[^a-z0-9]/gi, "").slice(-8).toLowerCase() || Date.now().toString(36);
  return `${base}-${suffix}`;
}

/**
 * Normalize a raw JSearch listing into a row ready for insertion into `jobs`.
 * Returns null if the listing is unusable (missing title / apply URL).
 */
export function mapListingToJob(listing, roleType) {
  if (!listing?.job_title || !listing?.job_apply_link) return null;

  const { salary_min, salary_max, salary_type } = mapSalary(listing);
  const posted = listing.job_posted_at_datetime_utc
    ? new Date(listing.job_posted_at_datetime_utc).toISOString()
    : new Date().toISOString();

  return {
    external_id: listing.job_id,
    title: listing.job_title,
    company_name: listing.employer_name || "Unknown",
    company_logo_url: listing.employer_logo || null,
    company_url: listing.employer_website || null,
    description: listing.job_description || "",
    role_type: roleType,
    location_type: mapLocationType(listing),
    location: mapLocation(listing),
    salary_min,
    salary_max,
    salary_type,
    hours_per_week: null,
    apply_url: listing.job_apply_link,
    apply_email: null,
    is_featured: false,
    is_approved: true,
    source: "jsearch",
    source_url: listing.job_apply_link,
    posted_at: posted,
    slug: buildSlug(listing),
    tags: listing.job_required_skills || null,
  };
}
