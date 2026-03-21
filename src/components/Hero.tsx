import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroWidgets } from "@/components/HeroWidgets";
import { HeroChatBar } from "@/components/HeroChatBar";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5">
      {/* Headline */}
      <div className="text-center max-w-2xl mx-auto mb-[60px]">
        <ScrollReveal>
          <h1
            className="text-4xl md:text-[58px] font-extrabold leading-[1.05] tracking-tight mb-5 text-white"
            style={{ fontFamily: "'Space Grotesk'" }}
          >
            {t("hero.title")}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <p className="text-base leading-relaxed mx-auto" style={{ color: "#8B8FA8", maxWidth: 460 }}>
            {t("hero.desc")}
          </p>
        </ScrollReveal>
      </div>

      {/* Visual area — widgets + hub */}
      <ScrollReveal delay={160}>
        <HeroWidgets />
      </ScrollReveal>

      {/* Chat bar */}
      <HeroChatBar />
    </section>
  );
};
