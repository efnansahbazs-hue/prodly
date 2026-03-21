import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OrbitalHub } from "@/components/OrbitalHub";
import { FloatingWidgets, HeroGlowBlobs } from "@/components/FloatingWidgets";
import { HeroChatBar } from "@/components/HeroChatBar";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 overflow-hidden">
      {/* Top — label + headline + subtext */}
      <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
        <ScrollReveal>
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: "#34D399" }}>
            {t("hero.label")}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h1
            className="text-4xl md:text-[58px] font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: "'Space Grotesk'" }}
          >
            <span className="text-white">{t("hero.title1")}</span>
            <br />
            <span className="text-gradient-conic">{t("hero.title2")}</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <p className="text-[15px] leading-relaxed mx-auto" style={{ color: "#8B8FA8", maxWidth: 460 }}>
            {t("hero.desc")}
          </p>
        </ScrollReveal>
      </div>

      {/* Middle — orbital hub + floating widgets */}
      <ScrollReveal delay={240}>
        <div className="relative mx-auto" style={{ width: "fit-content" }}>
          <FloatingWidgets />
          <OrbitalHub />
        </div>
      </ScrollReveal>

      {/* Bottom — chat bar + genre pills */}
      <HeroChatBar />
    </section>
  );
};
