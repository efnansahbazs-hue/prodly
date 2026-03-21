import { useTranslation } from "@/hooks/useTranslation";
import { useLang } from "@/hooks/useLang";
import { HeroChatBar } from "@/components/HeroChatBar";
import { ScrollReveal } from "@/components/ScrollReveal";

const getTagline = () => {
  const h = new Date().getHours();
  if (h >= 6 && h < 9) return { tr: "Sabah erken, iyi zaman. Ne üzerinde çalışıyorsun?", en: "Early morning. Good time to work. What are you building?" };
  if (h >= 9 && h < 12) return { tr: "Stüdyo açık. Prodly hazır.", en: "Studio's open. Prodly is ready." };
  if (h >= 12 && h < 15) return { tr: "Öğle molası mı? Yoksa devam mı?", en: "Lunch break? Or still going?" };
  if (h >= 15 && h < 18) return { tr: "Öğleden sonra sesi daha net duyarsın.", en: "Afternoon ears are sharper. Good time to mix." };
  if (h >= 18 && h < 21) return { tr: "Akşam seansı. En verimli zaman.", en: "Evening session. Most productive time." };
  if (h >= 21 && h < 24) return { tr: "Gece moduna geçildi. Ne takıldı?", en: "Night mode on. What's the problem?" };
  return { tr: "Gece 3. Stüdyodasın. Prodly burada.", en: "It's 3am. You're in the studio. Prodly is here." };
};

export const Hero = () => {
  const { t } = useTranslation();
  const { lang } = useLang();
  const tagline = getTagline();
  const tagText = (lang === "tr" ? tagline.tr : tagline.en);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)",
          filter: "blur(100px)",
          animation: "floatDrift 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: "8%",
          right: "10%",
          background: "radial-gradient(circle, rgba(52,211,153,0.10), transparent 70%)",
          filter: "blur(80px)",
          animation: "floatDrift 16s ease-in-out infinite 3s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        {/* Headline */}
        <ScrollReveal>
          <h1
            className="text-center mb-4"
            style={{
              fontFamily: "'Space Grotesk'",
              fontSize: "clamp(36px, 5.5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="text-white">{t("hero.titleLine1")} </span>
            <span className="text-gradient-mixed">{t("hero.titleLine2")}</span>
          </h1>
        </ScrollReveal>

        {/* Dynamic tagline */}
        <ScrollReveal delay={60}>
          <p
            className="text-center mb-10"
            style={{
              fontFamily: "'Inter'",
              fontSize: 17,
              color: "#8B8FA8",
              lineHeight: 1.5,
            }}
          >
            {tagText}
          </p>
        </ScrollReveal>

        {/* Chat bar */}
        <ScrollReveal delay={120}>
          <HeroChatBar />
        </ScrollReveal>
      </div>
    </section>
  );
};
