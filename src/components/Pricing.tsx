import { Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MovingBorderButton } from "@/components/Buttons";

const plans = [
  {
    nameKey: "price.free",
    price: "$0",
    ctaKey: "price.cta.free",
    popular: false,
    features: [
      { en: "3 questions/day", tr: "Günde 3 soru", de: "3 Fragen/Tag", es: "3 preguntas/día" },
      { en: "Basic sourced answers", tr: "Temel kaynaklı cevaplar", de: "Grundlegende belegte Antworten", es: "Respuestas básicas con fuentes" },
      { en: "All DAW support", tr: "Tüm DAW desteği", de: "Alle DAWs unterstützt", es: "Soporte para todos los DAW" },
      { en: "Community access", tr: "Topluluk erişimi", de: "Community-Zugang", es: "Acceso a la comunidad" },
    ],
  },
  {
    nameKey: "price.pro",
    price: "$19",
    ctaKey: "price.cta.pro",
    popular: true,
    features: [
      { en: "20 questions/day", tr: "Günde 20 soru", de: "20 Fragen/Tag", es: "20 preguntas/día" },
      { en: "Deep sourced answers", tr: "Detaylı kaynaklı cevaplar", de: "Tiefgehende belegte Antworten", es: "Respuestas profundas con fuentes" },
      { en: "Personal archive", tr: "Kişisel arşiv", de: "Persönliches Archiv", es: "Archivo personal" },
      { en: "Priority support", tr: "Öncelikli destek", de: "Prioritäts-Support", es: "Soporte prioritario" },
      { en: "Genre-specific guidance", tr: "Türe özel rehberlik", de: "Genre-spezifische Anleitung", es: "Guía específica por género" },
    ],
  },
  {
    nameKey: "price.studio",
    price: "$49",
    ctaKey: "price.cta.studio",
    popular: false,
    features: [
      { en: "Unlimited questions", tr: "Sınırsız soru", de: "Unbegrenzte Fragen", es: "Preguntas ilimitadas" },
      { en: "Everything in Pro", tr: "Pro'daki her şey", de: "Alles aus Pro", es: "Todo en Pro" },
      { en: "Team collaboration", tr: "Takım işbirliği", de: "Team-Zusammenarbeit", es: "Colaboración en equipo" },
      { en: "API access", tr: "API erişimi", de: "API-Zugang", es: "Acceso a API" },
      { en: "Dedicated account manager", tr: "Özel hesap yöneticisi", de: "Dedizierter Account Manager", es: "Gerente de cuenta dedicado" },
    ],
  },
];

export const Pricing = () => {
  const { t, lang } = useTranslation();

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-5">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="section-label mb-3">{t("price.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("price.title")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.nameKey} delay={i * 80}>
              <div
                className={`rounded-[20px] p-7 h-full flex flex-col ${plan.popular ? "border-2" : "glass-card"}`}
                style={
                  plan.popular
                    ? { background: "var(--bg-card)", backdropFilter: "blur(20px)", borderImage: "linear-gradient(135deg, #7C3AED, #34D399) 1" }
                    : undefined
                }
              >
                {plan.popular && (
                  <span className="inline-block self-start text-xs font-semibold rounded-full px-3 py-1 mb-4 text-white bg-[var(--purple)]">
                    {t("price.popular")}
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>
                  {t(plan.nameKey)}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{t("price.mo")}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat.en} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <Check className="w-4 h-4 flex-shrink-0 text-[var(--mint)]" />
                      {feat[lang]}
                    </li>
                  ))}
                </ul>

                {plan.popular ? (
                  <MovingBorderButton className="w-full text-center justify-center">
                    {t(plan.ctaKey)}
                  </MovingBorderButton>
                ) : (
                  <button className="w-full glass-card-static rounded-full py-3 text-sm font-semibold text-white hover:border-[var(--border-accent)] transition-colors active:scale-[0.97]">
                    {t(plan.ctaKey)}
                  </button>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
