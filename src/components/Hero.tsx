import { useTranslation } from "@/hooks/useTranslation";
import { HeroChatBar } from "@/components/HeroChatBar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        <h1
          className="text-center mb-10"
          style={{
            fontFamily: "'Space Grotesk'",
            fontSize: "clamp(48px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
          }}
        >
          <span
            className="inline-block text-white opacity-0"
            style={{
              textShadow: "0 0 40px rgba(124,58,237,0.3)",
              animation: "heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            {t("hero.titleLine1")}{" "}
          </span>
          <span
            className="inline-block opacity-0"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s forwards",
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
