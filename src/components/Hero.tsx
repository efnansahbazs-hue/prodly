import { useTranslation } from "@/hooks/useTranslation";
import { HeroWidgets } from "@/components/HeroWidgets";
import { HeroChatBar } from "@/components/HeroChatBar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5">
      {/* Background widgets — blurred, behind everything */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <HeroWidgets />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <ScrollReveal>
            <h1
              className="text-4xl md:text-[58px] font-extrabold leading-[1.05] tracking-tight mb-5"
              style={{ fontFamily: "'Space Grotesk'" }}
            >
              <span className="text-white">{t("hero.titleLine1")} </span>
              <span className="text-gradient-mixed">{t("hero.titleLine2")}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-base leading-relaxed mx-auto" style={{ color: "#8B8FA8", maxWidth: 460 }}>
              {t("hero.desc")}
            </p>
          </ScrollReveal>
        </div>

        {/* Chat bar — main focus, centered */}
        <HeroChatBar />
      </div>
    </section>
  );
};
