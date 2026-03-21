import { Play, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { MovingBorderButton, GlassButton } from "@/components/Buttons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GhostText } from "@/components/BackgroundEffects";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <GhostText />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-5">
        <ScrollReveal>
          <div
            className="inline-flex items-center gap-2 glass-card-static rounded-full px-4 py-1.5 text-xs font-medium mb-8"
            style={{ color: "var(--text-secondary)", borderColor: "var(--border-accent)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--mint)] animate-pulse-glow" />
            {t("hero.badge")}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6"
            style={{ fontFamily: "'Space Grotesk'", textWrap: "balance" }}
          >
            <span className="text-gradient-purple">{t("hero.title1")}</span>{" "}
            <span className="text-gradient-mint">{t("hero.title2")}</span>
            <br />
            <span className="text-white">{t("hero.title3")}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-secondary)", textWrap: "pretty" }}
          >
            {t("hero.desc")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MovingBorderButton>
              <span className="flex items-center gap-2">
                <Play className="w-4 h-4" /> {t("hero.cta")}
              </span>
            </MovingBorderButton>
            <GlassButton>
              <span className="flex items-center gap-2">
                {t("hero.demo")} <ArrowRight className="w-4 h-4" />
              </span>
            </GlassButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
