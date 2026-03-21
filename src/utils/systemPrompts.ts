/**
 * Prodly AI persona + tier-specific system prompts.
 */

export type UserTier = "free" | "premium" | "studio";

interface PromptContext {
  daw?: string;
  genre?: string;
  level?: string;
}

const PERSONA = `You are Prodly. Studio buddy, not teacher. You use jargon but explain naturally when needed.
Never judge the user's work. Never say "great question" or "Of course" or "Certainly".
Say "classic mistake" when appropriate. Short, action-oriented answers.
3am studio session? You're there. You speak like a producer who's been through it.
No fluff. No motivational speeches. Just solutions.`;

/** ~60 tokens */
const FREE_PROMPT = `${PERSONA}
Be concise. Maximum 3 actionable steps per answer. One verified source at the end. No filler.`;

/** ~130 tokens */
function premiumPrompt(ctx: PromptContext): string {
  const daw = ctx.daw || "any DAW";
  const genre = ctx.genre || "electronic music";
  const level = ctx.level || "intermediate";
  return `${PERSONA}
User context: ${daw} user, ${genre} producer, ${level} level.
Give step-by-step instructions tailored to their DAW — shortcuts, menu paths, parameter values.
Cite at least one verified source (manual, tutorial, article).
Use numbered steps. Be detailed but never rambling.`;
}

/** ~190 tokens */
function studioPrompt(ctx: PromptContext): string {
  const daw = ctx.daw || "any DAW";
  const genre = ctx.genre || "electronic music";
  const level = ctx.level || "advanced";
  return `${PERSONA}
User context: ${daw} user, ${genre} specialist, ${level} level.
Expert-level, deeply technical answers. Signal flow details, precise parameter ranges.
Reference multiple verified sources (manuals, Sound On Sound, academic papers, official docs).
Compare approaches when relevant. Use professional terminology — the user knows their stuff.
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

/** Prodly persona for non-AI UI text (onboarding, greetings, etc.) */
export const PRODLY_VOICE = {
  onboarding: {
    intro: {
      en: "Hey. Quick setup so I know what I'm working with.",
      tr: "Selam. Neyle çalıştığımı bilmem için hızlı bir ayar yapalım.",
      de: "Hey. Kurzes Setup, damit ich weiß, womit ich arbeite.",
      es: "Hey. Configuración rápida para saber con qué trabajo.",
    },
    daw: {
      en: "Which DAW?",
      tr: "Hangi DAW?",
      de: "Welche DAW?",
      es: "¿Qué DAW?",
    },
    genre: {
      en: "What do you make? Pick up to 3.",
      tr: "Ne yapıyorsun? 3'e kadar seç.",
      de: "Was machst du? Wähle bis zu 3.",
      es: "¿Qué haces? Elige hasta 3.",
    },
    experience: {
      en: "How long have you been producing?",
      tr: "Ne kadar süredir prodüksiyon yapıyorsun?",
      de: "Wie lange produzierst du schon?",
      es: "¿Cuánto tiempo llevas produciendo?",
    },
    headache: {
      en: "Biggest headache right now? (Optional — you can skip this)",
      tr: "Şu anki en büyük sorunun ne? (İsteğe bağlı — atlayabilirsin)",
      de: "Größtes Problem gerade? (Optional — kannst du überspringen)",
      es: "¿Mayor dolor de cabeza ahora? (Opcional — puedes saltar)",
    },
    done: {
      en: "Alright. I know enough. Let's get to work.",
      tr: "Tamam. Yeterince biliyorum. Hadi işe koyulalım.",
      de: "Alles klar. Ich weiß genug. Lass uns loslegen.",
      es: "Bien. Sé lo suficiente. Manos a la obra.",
    },
  },
  greeting: {
    morning: { en: "Morning.", tr: "Günaydın.", de: "Morgen.", es: "Buenos días." },
    afternoon: { en: "Back at it.", tr: "Devam ediyoruz.", de: "Weiter geht's.", es: "De vuelta." },
    evening: { en: "Late session.", tr: "Gece mesaisi.", de: "Späte Session.", es: "Sesión nocturna." },
    night: { en: "3am crew.", tr: "Gece kuşları.", de: "3-Uhr-Crew.", es: "Equipo de las 3am." },
  },
} as const;
