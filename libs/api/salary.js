import supabaseAdmin from "@/libs/supabase";

/**
 * Get salary data with optional filters
 */
export async function getSalaryData({ roleType, companyStage, hoursPerWeek } = {}) {
  let query = supabaseAdmin.from("salary_data").select("*");

  if (roleType) {
    query = query.eq("role_type", roleType);
  }
  if (companyStage) {
    query = query.eq("company_stage", companyStage);
  }
  if (hoursPerWeek) {
    query = query.eq("hours_per_week", hoursPerWeek);
  }

  const { data, error } = await query.order("role_type");

  if (error) throw error;
  return data;
}

/**
 * Get salary data for a specific role type
 */
export async function getSalaryByRoleType(roleType) {
  const { data, error } = await supabaseAdmin
    .from("salary_data")
    .select("*")
    .eq("role_type", roleType)
    .order("company_stage");

  if (error) throw error;
  return data;
}
