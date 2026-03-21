import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MovingBorderButton } from "@/components/Buttons";

export const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 px-5 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <span className="ghost-text">MUSIC</span>
      </div>
      <div className="container mx-auto max-w-3xl relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("cta.title1")}{" "}
            <span className="text-gradient-purple">{t("cta.title2")}</span>
            {t("cta.title3")}
          </h2>
          <p className="text-base md:text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
            {t("cta.desc")}
          </p>
          <MovingBorderButton className="text-base px-10 py-4">
            {t("cta.button")}
          </MovingBorderButton>
        </ScrollReveal>
      </div>
    </section>
  );
};
