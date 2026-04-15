const RULES = [
  { role: "fractional_coo", patterns: [/chief operating/i, /\bcoo\b/i] },
  { role: "fractional_cmo", patterns: [/chief marketing/i, /\bcmo\b/i] },
  { role: "fractional_cfo", patterns: [/chief financial/i, /\bcfo\b/i] },
  { role: "fractional_cto", patterns: [/chief technology/i, /\bcto\b/i] },
  { role: "fractional_cro", patterns: [/chief revenue/i, /\bcro\b/i] },
  {
    role: "fractional_chro",
    patterns: [/chief human/i, /chief people/i, /\bchro\b/i],
  },
  { role: "fractional_cos", patterns: [/chief of staff/i] },
  {
    role: "head_of_ops",
    patterns: [/head of ops/i, /head of operations/i, /\bvp ops\b/i, /vp of operations/i],
  },
];

/**
 * Map a JSearch listing title to one of our role_type enum values.
 * Falls back to "other" if nothing matches.
 */
export function categorizeTitle(title) {
  if (!title) return "other";
  for (const { role, patterns } of RULES) {
    if (patterns.some((p) => p.test(title))) return role;
  }
  return "other";
}

/**
 * Keyword queries to run against JSearch. Each query maps to a
 * hinted role_type used as a fallback if the title doesn't match.
 */
export const JSEARCH_QUERIES = [
  { query: "fractional COO", roleHint: "fractional_coo" },
  { query: "fractional CMO", roleHint: "fractional_cmo" },
  { query: "fractional CFO", roleHint: "fractional_cfo" },
  { query: "fractional CTO", roleHint: "fractional_cto" },
  { query: "fractional CRO", roleHint: "fractional_cro" },
  { query: "fractional CHRO", roleHint: "fractional_chro" },
  { query: "fractional Chief of Staff", roleHint: "fractional_cos" },
  { query: "fractional Head of Ops", roleHint: "head_of_ops" },
  { query: "fractional executive", roleHint: "other" },
  { query: "interim COO", roleHint: "fractional_coo" },
  { query: "interim CFO", roleHint: "fractional_cfo" },
  { query: "part-time COO", roleHint: "fractional_coo" },
  { query: "part-time CFO", roleHint: "fractional_cfo" },
];
