import supabaseAdmin from "@/libs/supabase";

/**
 * Get approved, non-expired jobs with optional filters
 */
export async function getApprovedJobs({
  roleType,
  locationType,
  salaryMin,
  salaryMax,
  page = 1,
  limit = 20,
} = {}) {
  let query = supabaseAdmin
    .from("jobs")
    .select("*", { count: "exact" })
    .eq("is_approved", true)
    .gt("expires_at", new Date().toISOString())
    .order("is_featured", { ascending: false })
    .order("posted_at", { ascending: false });

  if (roleType) {
    query = query.eq("role_type", roleType);
  }
  if (locationType) {
    query = query.eq("location_type", locationType);
  }
  if (salaryMin) {
    query = query.gte("salary_max", salaryMin);
  }
  if (salaryMax) {
    query = query.lte("salary_min", salaryMax);
  }

  const from = (page - 1) * limit;
  const to = from + limit - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) throw error;
  return { jobs: data, total: count };
}

/**
 * Get a single job by slug
 */
export async function getJobBySlug(slug) {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;
  return data;
}

/**
 * Get jobs by role type (for category pages)
 */
export async function getJobsByRoleType(roleType, limit = 50) {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("*")
    .eq("role_type", roleType)
    .eq("is_approved", true)
    .gt("expires_at", new Date().toISOString())
    .order("is_featured", { ascending: false })
    .order("posted_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}

/**
 * Get featured jobs (for homepage)
 */
export async function getFeaturedJobs(limit = 6) {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("*")
    .eq("is_approved", true)
    .eq("is_featured", true)
    .gt("expires_at", new Date().toISOString())
    .order("posted_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}

/**
 * Get recent jobs (for homepage fallback and digest)
 */
export async function getRecentJobs(limit = 6) {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("*")
    .eq("is_approved", true)
    .gt("expires_at", new Date().toISOString())
    .order("posted_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}

/**
 * Create a new job listing
 */
export async function createJob(jobData) {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .insert(jobData)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Update a job listing
 */
export async function updateJob(id, updates) {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Get all jobs for admin (includes unapproved)
 */
export async function getAllJobs() {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

/**
 * Delete a job listing
 */
export async function deleteJob(id) {
  const { error } = await supabaseAdmin.from("jobs").delete().eq("id", id);

  if (error) throw error;
}

/**
 * Get similar jobs (same role_type, excluding current job)
 */
export async function getSimilarJobs(roleType, excludeId, limit = 3) {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("*")
    .eq("role_type", roleType)
    .eq("is_approved", true)
    .gt("expires_at", new Date().toISOString())
    .neq("id", excludeId)
    .order("posted_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}

/**
 * Get all active job slugs (for sitemap)
 */
export async function getAllJobSlugs() {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("slug, updated_at")
    .eq("is_approved", true)
    .gt("expires_at", new Date().toISOString());

  if (error) throw error;
  return data;
}

/**
 * Count jobs by role type (for category cards)
 */
export async function getJobCountsByRoleType() {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("role_type")
    .eq("is_approved", true)
    .gt("expires_at", new Date().toISOString());

  if (error) throw error;

  const counts = {};
  data.forEach((job) => {
    counts[job.role_type] = (counts[job.role_type] || 0) + 1;
  });
  return counts;
}
