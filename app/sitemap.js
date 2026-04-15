import config from "@/config";
import { getAllJobSlugs } from "@/libs/api/jobs";

export const revalidate = 300;

const BASE = `https://${config.domainName}`;

const STATIC_ROUTES = [
  { path: "/", changeFrequency: "daily", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/post-a-job", changeFrequency: "weekly", priority: 0.8 },
  { path: "/salary-calculator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/tos", changeFrequency: "yearly", priority: 0.3 },
  { path: "/fractional-coo-jobs", changeFrequency: "daily", priority: 0.9 },
  { path: "/fractional-cmo-jobs", changeFrequency: "daily", priority: 0.9 },
  { path: "/fractional-cfo-jobs", changeFrequency: "daily", priority: 0.9 },
  { path: "/fractional-cto-jobs", changeFrequency: "daily", priority: 0.9 },
  { path: "/fractional-cro-jobs", changeFrequency: "daily", priority: 0.9 },
  { path: "/fractional-cos-jobs", changeFrequency: "daily", priority: 0.9 },
  { path: "/head-of-ops-jobs", changeFrequency: "daily", priority: 0.9 },
];

export default async function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  let jobEntries = [];
  try {
    const jobs = await getAllJobSlugs();
    jobEntries = (jobs || []).map((j) => ({
      url: `${BASE}/jobs/${j.slug}`,
      lastModified: j.updated_at ? new Date(j.updated_at) : now,
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  } catch (err) {
    // If Supabase is unreachable at build time, still return static routes
    // rather than failing the whole sitemap.
    console.error("[sitemap] failed to load job slugs:", err.message);
  }

  return [...staticEntries, ...jobEntries];
}
