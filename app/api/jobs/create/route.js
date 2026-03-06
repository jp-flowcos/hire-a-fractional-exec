import { NextResponse } from "next/server";
import { createJob } from "@/libs/api/jobs";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.title || !body.company_name || !body.description || !body.apply_url || !body.slug) {
      return NextResponse.json(
        { error: "Title, company name, description, apply URL, and slug are required." },
        { status: 400 }
      );
    }

    const job = await createJob({
      title: body.title,
      company_name: body.company_name,
      company_url: body.company_url || null,
      company_logo_url: body.company_logo_url || null,
      description: body.description,
      role_type: body.role_type || "other",
      location_type: body.location_type || "remote",
      location: body.location || null,
      salary_min: body.salary_min || null,
      salary_max: body.salary_max || null,
      salary_type: body.salary_type || null,
      hours_per_week: body.hours_per_week || null,
      apply_url: body.apply_url,
      apply_email: body.apply_email || null,
      slug: body.slug,
      source: body.source || "direct_post",
      is_approved: false,
      is_featured: false,
    });

    return NextResponse.json({ jobId: job.id });
  } catch (e) {
    console.error("Job creation error:", e);
    return NextResponse.json(
      { error: e.message || "Failed to create job listing" },
      { status: 500 }
    );
  }
}
