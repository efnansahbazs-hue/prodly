import { useTranslation } from "@/hooks/useTranslation";
import { useLang } from "@/hooks/useLang";
import { HeroChatBar } from "@/components/HeroChatBar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypingTagline } from "@/components/TypingTagline";

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
  const tagText = lang === "tr" ? tagline.tr : tagline.en;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        {/* Headline with stagger reveal */}
        <h1
          className="text-center mb-4"
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
            className="inline-block text-gradient-mixed opacity-0"
            style={{
              animation: "heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s forwards",
            }}
          >
            {t("hero.titleLine2")}
          </span>
        </h1>

        {/* Typing tagline */}
        <TypingTagline text={tagText} />

        {/* Chat bar */}
        <ScrollReveal delay={200}>
          <HeroChatBar />
        </ScrollReveal>
      </div>
    </section>
  );
};
