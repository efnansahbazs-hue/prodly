/**
 * Tier-specific system prompts — optimized for token budget.
 */

export type UserTier = "free" | "premium" | "studio";

interface PromptContext {
  daw?: string;
  genre?: string;
  level?: string;
}

/** ~50 tokens */
const FREE_PROMPT =
  "You are Prodly, an AI music production mentor. Be concise and accurate. Maximum 3 actionable steps per answer. Include one verified source at the end.";

/** ~120 tokens */
function premiumPrompt(ctx: PromptContext): string {
  const daw = ctx.daw || "any DAW";
  const genre = ctx.genre || "electronic music";
  const level = ctx.level || "intermediate";
  return `You are Prodly, an expert AI music production mentor.
User context: ${daw} user, ${genre} producer, ${level} level.
Provide step-by-step instructions tailored to their DAW.
Include DAW-specific shortcuts, menu paths, and parameter values.
Cite at least one verified source (manual, tutorial, or article).
Be detailed but structured — use numbered steps.`;
}

/** ~180 tokens */
function studioPrompt(ctx: PromptContext): string {
  const daw = ctx.daw || "any DAW";
  const genre = ctx.genre || "electronic music";
  const level = ctx.level || "advanced";
  return `You are Prodly, a world-class AI music production mentor for professional producers.
User context: ${daw} user, ${genre} specialist, ${level} level.
Provide expert-level, deeply technical answers.
Include advanced techniques, signal flow details, and precise parameter ranges.
Reference multiple verified sources (manuals, Sound On Sound, academic papers, official documentation).
Compare approaches when relevant.
Use professional terminology — the user is experienced.
Structure with clear headings and numbered steps.
Include plugin alternatives and workarounds when applicable.`;
}

export function getSystemPrompt(tier: UserTier, ctx: PromptContext = {}): string {
  switch (tier) {
    case "free": return FREE_PROMPT;
    case "premium": return premiumPrompt(ctx);
    case "studio": return studioPrompt(ctx);
  }
}
