export interface Level {
  level: number;
  name: Record<string, string>;
  minExp: number;
  maxExp: number;
}

export const LEVELS: Level[] = [
  { level: 1, name: { en: "Listener", tr: "Dinleyici", de: "Zuhörer", es: "Oyente" }, minExp: 0, maxExp: 200 },
  { level: 2, name: { en: "Beat Curious", tr: "Beat Meraklısı", de: "Beat-Neugieriger", es: "Curioso del Beat" }, minExp: 200, maxExp: 500 },
  { level: 3, name: { en: "Sample Digger", tr: "Sample Avcısı", de: "Sample-Jäger", es: "Buscador de Samples" }, minExp: 500, maxExp: 1000 },
  { level: 4, name: { en: "Beat Architect", tr: "Beat Mimarı", de: "Beat-Architekt", es: "Arquitecto de Beats" }, minExp: 1000, maxExp: 2000 },
  { level: 5, name: { en: "Sound Sculptor", tr: "Ses Heykeltıraşı", de: "Sound-Bildhauer", es: "Escultor de Sonido" }, minExp: 2000, maxExp: 3500 },
  { level: 6, name: { en: "Mix Engineer", tr: "Mix Mühendisi", de: "Mix-Ingenieur", es: "Ingeniero de Mezcla" }, minExp: 3500, maxExp: 5500 },
  { level: 7, name: { en: "Groove Master", tr: "Groove Ustası", de: "Groove-Meister", es: "Maestro del Groove" }, minExp: 5500, maxExp: 8000 },
  { level: 8, name: { en: "Studio Wizard", tr: "Stüdyo Sihirbazı", de: "Studio-Zauberer", es: "Mago del Estudio" }, minExp: 8000, maxExp: 12000 },
  { level: 9, name: { en: "Sonic Alchemist", tr: "Sonik Simyacı", de: "Klang-Alchemist", es: "Alquimista Sónico" }, minExp: 12000, maxExp: 18000 },
  { level: 10, name: { en: "Prodly Legend", tr: "Prodly Efsanesi", de: "Prodly-Legende", es: "Leyenda Prodly" }, minExp: 18000, maxExp: 99999 },
];

export const EXP_RULES: Record<string, number> = {
  ai_question: 10,
  problem_solver: 20,
  blueprint: 30,
  technique_complete: 25,
  quiz_pass: 15,
  daily_login: 5,
  streak_milestone: 50,
};

export function getLevelForExp(exp: number): Level {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (exp >= LEVELS[i].minExp) return LEVELS[i];
  }
  return LEVELS[0];
}

export function getLevelProgress(exp: number): number {
  const level = getLevelForExp(exp);
  const range = level.maxExp - level.minExp;
  const progress = exp - level.minExp;
  return Math.min((progress / range) * 100, 100);
}
