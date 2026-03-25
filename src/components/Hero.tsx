import { useTranslation } from "@/hooks/useTranslation";
import { HeroChatBar } from "@/components/HeroChatBar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        <h1
          className="text-center mb-10 whitespace-nowrap"
          style={{
            fontFamily: "'Space Grotesk'",
            fontSize: "clamp(42px, 6.5vw, 76px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            textShadow: "0 4px 24px rgba(0,0,0,0.5), 0 0 60px rgba(124,58,237,0.25)",
            animation: "heroFadeUp 0.4s ease forwards",
            opacity: 0,
          }}
        >
          <span className="text-white">
            {t("hero.titleLine1")}{" "}
          </span>
          <span
            className="text-gradient-purple"
            style={{
              filter: "drop-shadow(0 2px 12px rgba(124,58,237,0.4))",
            }}
          >
            {t("hero.titleLine2")}
          </span>
        </h1>

        <ScrollReveal delay={200}>
          <HeroChatBar />
        </ScrollReveal>
      </div>
    </section>
  );
};
