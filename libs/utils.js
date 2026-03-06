const ROLE_TYPE_LABELS = {
  fractional_coo: "Fractional COO",
  fractional_cfo: "Fractional CFO",
  fractional_cmo: "Fractional CMO",
  fractional_cto: "Fractional CTO",
  fractional_cro: "Fractional CRO",
  fractional_cpo: "Fractional CPO",
  fractional_chro: "Fractional CHRO",
  fractional_cso: "Fractional CSO",
  head_of_ops: "Head of Ops",
  head_of_finance: "Head of Finance",
  head_of_marketing: "Head of Marketing",
  head_of_engineering: "Head of Engineering",
  head_of_sales: "Head of Sales",
  head_of_product: "Head of Product",
  head_of_hr: "Head of HR",
  head_of_growth: "Head of Growth",
};

const LOCATION_TYPE_LABELS = {
  remote: "Remote",
  hybrid: "Hybrid",
  onsite: "Onsite",
};

/**
 * Converts a role_type enum value to a human-readable display name.
 * Falls back to title-casing the underscored string.
 */
export function formatRoleType(roleType) {
  if (!roleType) return "";
  if (ROLE_TYPE_LABELS[roleType]) return ROLE_TYPE_LABELS[roleType];
  return roleType
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Converts a location_type enum value to a display name.
 */
export function formatLocationType(locationType) {
  if (!locationType) return "";
  if (LOCATION_TYPE_LABELS[locationType])
    return LOCATION_TYPE_LABELS[locationType];
  return locationType.charAt(0).toUpperCase() + locationType.slice(1);
}

/**
 * Formats a salary range for display.
 * @param {number|null} min - Minimum salary
 * @param {number|null} max - Maximum salary
 * @param {string} type - "monthly", "hourly", "annual"
 * @returns {string} Formatted salary string
 */
export function formatSalary(min, max, type = "monthly") {
  if (!min && !max) return "";

  const fmt = (n) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  const suffix =
    type === "hourly" ? "/hr" : type === "annual" ? "/yr" : "/mo";

  if (min && max) return `${fmt(min)} - ${fmt(max)}${suffix}`;
  if (min) return `From ${fmt(min)}${suffix}`;
  return `Up to ${fmt(max)}${suffix}`;
}

/**
 * Converts a date to a relative time string (e.g., "3 days ago").
 */
export function timeAgo(date) {
  if (!date) return "";

  const now = new Date();
  const then = new Date(date);
  const seconds = Math.floor((now - then) / 1000);

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;

  const days = Math.floor(hours / 24);
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months === 1) return "1 month ago";
  if (months < 12) return `${months} months ago`;

  const years = Math.floor(months / 12);
  if (years === 1) return "1 year ago";
  return `${years} years ago`;
}

/**
 * Converts a role_type enum to a URL slug.
 * "fractional_coo" -> "fractional-coo-jobs"
 */
export function roleTypeToSlug(roleType) {
  if (!roleType) return "";
  return roleType.replace(/_/g, "-") + "-jobs";
}

/**
 * Converts a URL slug back to a role_type enum value.
 * "fractional-coo-jobs" -> "fractional_coo"
 */
export function slugToRoleType(slug) {
  if (!slug) return "";
  return slug.replace(/-jobs$/, "").replace(/-/g, "_");
}
