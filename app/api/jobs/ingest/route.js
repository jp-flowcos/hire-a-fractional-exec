import { NextResponse } from "next/server";
import supabaseAdmin from "@/libs/supabase";
import { searchJSearch, mapListingToJob, looksFractional } from "@/libs/jsearch";
import { categorizeTitle, JSEARCH_QUERIES } from "@/libs/categories";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

function authorize(req) {
  // Vercel Cron sets this header on scheduled invocations.
  if (req.headers.get("x-vercel-cron")) return true;

  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = req.headers.get("authorization") || "";
  if (header === `Bearer ${secret}`) return true;
  const url = new URL(req.url);
  if (url.searchParams.get("secret") === secret) return true;
  return false;
}

async function runIngest({ dryRun }) {
  if (!dryRun && !supabaseAdmin) {
    throw new Error("Supabase admin client not configured");
  }

  const stats = {
    queries: JSEARCH_QUERIES.length,
    fetched: 0,
    fractional: 0,
    inserted: 0,
    duplicates: 0,
    errors: [],
    byRole: {},
  };

  const seenExternalIds = new Set();
  const candidates = [];

  for (const { query, roleHint } of JSEARCH_QUERIES) {
    try {
      const listings = await searchJSearch(query, { datePosted: "week" });
      stats.fetched += listings.length;

      for (const listing of listings) {
        if (!listing.job_id || seenExternalIds.has(listing.job_id)) continue;
        seenExternalIds.add(listing.job_id);

        if (!looksFractional(listing)) continue;
        stats.fractional += 1;

        const role = categorizeTitle(listing.job_title) || roleHint || "other";
        const row = mapListingToJob(listing, role);
        if (!row) continue;

        candidates.push(row);
        stats.byRole[role] = (stats.byRole[role] || 0) + 1;
      }
    } catch (err) {
      stats.errors.push(`${query}: ${err.message}`);
    }
  }

  if (candidates.length === 0 || dryRun) {
    return { ...stats, dryRun, sample: candidates.slice(0, 3) };
  }

  // Dedup against existing rows by external_id.
  const ids = candidates.map((c) => c.external_id);
  const { data: existing, error: existingErr } = await supabaseAdmin
    .from("jobs")
    .select("external_id")
    .in("external_id", ids);
  if (existingErr) throw existingErr;

  const existingSet = new Set((existing || []).map((r) => r.external_id));
  const toInsert = candidates.filter((c) => !existingSet.has(c.external_id));
  stats.duplicates = candidates.length - toInsert.length;

  if (toInsert.length > 0) {
    const { error: insertErr, count } = await supabaseAdmin
      .from("jobs")
      .insert(toInsert, { count: "exact" });
    if (insertErr) throw insertErr;
    stats.inserted = count ?? toInsert.length;
  }

  return stats;
}

export async function GET(req) {
  if (!authorize(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const url = new URL(req.url);
  const dryRun = url.searchParams.get("dryRun") === "1";
  try {
    const stats = await runIngest({ dryRun });
    return NextResponse.json({ ok: true, ...stats });
  } catch (err) {
    console.error("[jobs/ingest] failed", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  return GET(req);
}
