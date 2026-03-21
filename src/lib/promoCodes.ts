export type PromoType = "percent" | "fixed" | "free_months" | "bonus_questions";

export interface PromoCode {
  code: string;
  type: PromoType;
  value: number;
  description: Record<string, string>;
  applicablePlans: ("premium" | "studio")[];
  maxUses: number;
  usedCount: number;
  expiry: string; // ISO date
  assignedTo: string;
  active: boolean;
}

export const promoCodes: PromoCode[] = [
  {
    code: "BETA30",
    type: "free_months",
    value: 1,
    description: {
      en: "1 month free Premium",
      tr: "1 ay ücretsiz Premium",
      de: "1 Monat Premium gratis",
      es: "1 mes gratis de Premium",
    },
    applicablePlans: ["premium"],
    maxUses: 500,
    usedCount: 147,
    expiry: "2026-12-31",
    assignedTo: "Beta Users",
    active: true,
  },
  {
    code: "ISTANBUL20",
    type: "percent",
    value: 20,
    description: {
      en: "20% off — Turkey scene",
      tr: "20% indirim — Türkiye sahnesi",
      de: "20% Rabatt — Türkei-Szene",
      es: "20% descuento — escena Turquía",
    },
    applicablePlans: ["premium", "studio"],
    maxUses: 300,
    usedCount: 82,
    expiry: "2026-09-30",
    assignedTo: "Istanbul Ambassador",
    active: true,
  },
  {
    code: "BERLIN20",
    type: "percent",
    value: 20,
    description: {
      en: "20% off — Berlin ambassador",
      tr: "20% indirim — Berlin elçisi",
      de: "20% Rabatt — Berlin-Botschafter",
      es: "20% descuento — embajador Berlín",
    },
    applicablePlans: ["premium", "studio"],
    maxUses: 300,
    usedCount: 64,
    expiry: "2026-09-30",
    assignedTo: "Berlin Ambassador",
    active: true,
  },
  {
    code: "LONDON20",
    type: "percent",
    value: 20,
    description: {
      en: "20% off — London ambassador",
      tr: "20% indirim — Londra elçisi",
      de: "20% Rabatt — London-Botschafter",
      es: "20% descuento — embajador Londres",
    },
    applicablePlans: ["premium", "studio"],
    maxUses: 300,
    usedCount: 38,
    expiry: "2026-09-30",
    assignedTo: "London Ambassador",
    active: true,
  },
  {
    code: "PRODLY30",
    type: "percent",
    value: 30,
    description: {
      en: "30% off — influencer partners",
      tr: "30% indirim — influencer ortakları",
      de: "30% Rabatt — Influencer-Partner",
      es: "30% descuento — socios influencers",
    },
    applicablePlans: ["premium", "studio"],
    maxUses: 1000,
    usedCount: 213,
    expiry: "2026-12-31",
    assignedTo: "Influencer Partners",
    active: true,
  },
  {
    code: "ADE2026",
    type: "percent",
    value: 15,
    description: {
      en: "15% off — Amsterdam Dance Event",
      tr: "15% indirim — Amsterdam Dance Event",
      de: "15% Rabatt — Amsterdam Dance Event",
      es: "15% descuento — Amsterdam Dance Event",
    },
    applicablePlans: ["premium", "studio"],
    maxUses: 500,
    usedCount: 0,
    expiry: "2026-10-31",
    assignedTo: "ADE 2026",
    active: false,
  },
];

export function validatePromoCode(code: string): { valid: boolean; promo?: PromoCode; error?: string } {
  const promo = promoCodes.find((p) => p.code === code.toUpperCase().trim());
  if (!promo) return { valid: false, error: "not_found" };
  if (!promo.active) return { valid: false, error: "inactive" };
  if (new Date(promo.expiry) < new Date()) return { valid: false, error: "expired" };
  if (promo.usedCount >= promo.maxUses) return { valid: false, error: "max_uses" };

  // Check localStorage for already used
  const used = JSON.parse(localStorage.getItem("prodly_used_promos") || "[]") as string[];
  if (used.includes(promo.code)) return { valid: false, error: "already_used" };

  return { valid: true, promo };
}

export function applyPromoCode(code: string) {
  const used = JSON.parse(localStorage.getItem("prodly_used_promos") || "[]") as string[];
  used.push(code.toUpperCase().trim());
  localStorage.setItem("prodly_used_promos", JSON.stringify(used));
}

export function getPromoTypeLabel(type: PromoType, lang: string): string {
  const labels: Record<PromoType, Record<string, string>> = {
    percent: { en: "% Off", tr: "% İndirim", de: "% Rabatt", es: "% Descuento" },
    fixed: { en: "Fixed", tr: "Sabit", de: "Festbetrag", es: "Fijo" },
    free_months: { en: "Free Months", tr: "Ücretsiz Ay", de: "Gratis-Monate", es: "Meses Gratis" },
    bonus_questions: { en: "Bonus Q's", tr: "Bonus Soru", de: "Bonus-Fragen", es: "Preguntas Bonus" },
  };
  return labels[type]?.[lang] || labels[type]?.en || type;
}
