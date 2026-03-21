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
    features: ["5 AI generations/day", "Basic mixing tools", "MP3 export", "Community support"],
  },
  {
    nameKey: "price.pro",
    price: "$19",
    ctaKey: "price.cta.pro",
    popular: true,
    features: ["Unlimited AI generations", "Advanced mixing & mastering", "WAV + MP3 export", "Live collaboration", "Priority support"],
  },
  {
    nameKey: "price.studio",
    price: "$49",
    ctaKey: "price.cta.studio",
    popular: false,
    features: ["Everything in Pro", "Custom AI model training", "Stem separation", "API access", "Dedicated account manager"],
  },
];

export const Pricing = () => {
  const { t } = useTranslation();

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
                className={`rounded-[20px] p-7 h-full flex flex-col ${
                  plan.popular ? "border-2" : "glass-card"
                }`}
                style={
                  plan.popular
                    ? {
                        background: "var(--bg-card)",
                        backdropFilter: "blur(20px)",
                        borderImage: "linear-gradient(135deg, #7C3AED, #34D399) 1",
                      }
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
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {t("price.mo")}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <Check className="w-4 h-4 flex-shrink-0 text-[var(--mint)]" />
                      {feat}
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
