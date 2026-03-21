/**
 * Prompt cache utilities — normalize questions and generate cache keys.
 * DB layer (Supabase cached_answers table) to be wired when Cloud is enabled.
 */

/** Normalize a question for consistent cache keys */
export function normalizeQuestion(q: string): string {
  return q
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, "")     // strip punctuation
    .replace(/\s+/g, " ")        // collapse whitespace
    .replace(/\b(the|a|an|is|are|was|were|do|does|did|my|your|i|me)\b/g, "") // stop words
    .trim();
}

/** Simple hash for cache key (MD5 substitute — browser-safe) */
export async function hashQuestion(normalized: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** Cache TTL in milliseconds (7 days) */
export const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * In-memory cache fallback until Supabase is connected.
 * Production: replace with cached_answers table queries.
 */
const memoryCache = new Map<string, { answer: string; createdAt: number }>();

export async function getCachedAnswer(question: string): Promise<string | null> {
  const normalized = normalizeQuestion(question);
  const hash = await hashQuestion(normalized);
  const entry = memoryCache.get(hash);
  if (!entry) return null;
  if (Date.now() - entry.createdAt > CACHE_TTL_MS) {
    memoryCache.delete(hash);
    return null;
  }
  return entry.answer;
}

export async function setCachedAnswer(question: string, answer: string): Promise<void> {
  const normalized = normalizeQuestion(question);
  const hash = await hashQuestion(normalized);
  memoryCache.set(hash, { answer, createdAt: Date.now() });
}
