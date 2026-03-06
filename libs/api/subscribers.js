import supabaseAdmin from "@/libs/supabase";

/**
 * Create a new subscriber
 */
export async function createSubscriber({ email, name, role_preferences, subscriber_type = "job_seeker" }) {
  const { data, error } = await supabaseAdmin
    .from("subscribers")
    .upsert(
      { email, name, role_preferences, subscriber_type },
      { onConflict: "email" }
    )
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Get all active subscribers
 */
export async function getActiveSubscribers() {
  const { data, error } = await supabaseAdmin
    .from("subscribers")
    .select("*")
    .eq("is_active", true)
    .order("subscribed_at", { ascending: false });

  if (error) throw error;
  return data;
}

/**
 * Get subscribers by role preference
 */
export async function getSubscribersByRoleType(roleType) {
  const { data, error } = await supabaseAdmin
    .from("subscribers")
    .select("*")
    .eq("is_active", true)
    .contains("role_preferences", [roleType]);

  if (error) throw error;
  return data;
}

/**
 * Unsubscribe by email
 */
export async function unsubscribe(email) {
  const { error } = await supabaseAdmin
    .from("subscribers")
    .update({ is_active: false })
    .eq("email", email);

  if (error) throw error;
}

/**
 * Get all subscribers for admin
 */
export async function getAllSubscribers() {
  const { data, error } = await supabaseAdmin
    .from("subscribers")
    .select("*")
    .order("subscribed_at", { ascending: false });

  if (error) throw error;
  return data;
}
