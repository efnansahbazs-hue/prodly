/**
 * AI Model Router — selects model based on user tier and query complexity.
 * Models reference Lovable AI gateway identifiers.
 */

export type UserTier = "free" | "premium" | "studio";

const COMPLEX_KEYWORDS = [
  "compare", "comparison", "versus", "vs",
  "arrangement", "advanced", "master", "mastering",
  "frequency", "spectrum", "analysis", "theory",
  "multiband", "mid-side", "stereo imaging",
  "harmonic", "synthesis", "modular",
  "orchestration", "counterpoint",
];

const MINI_MODEL = "openai/gpt-5-nano";
const FULL_MODEL = "openai/gpt-5-mini";

function isComplexQuery(question: string): boolean {
  if (question.length > 120) return true;
  const lower = question.toLowerCase();
  return COMPLEX_KEYWORDS.some((kw) => lower.includes(kw));
}

export function routeModel(tier: UserTier, question: string): string {
  if (tier === "free") return MINI_MODEL;

  const complex = isComplexQuery(question);
  if (!complex) return MINI_MODEL;

  // Complex queries: premium gets full model 10% of time, studio 25%
  const roll = Math.random();
  if (tier === "premium") return roll < 0.1 ? FULL_MODEL : MINI_MODEL;
  if (tier === "studio") return roll < 0.25 ? FULL_MODEL : MINI_MODEL;

  return MINI_MODEL;
}
