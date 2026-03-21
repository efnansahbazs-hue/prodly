import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { PRODLY_VOICE } from "@/utils/systemPrompts";

type Lang = "en" | "tr" | "de" | "es";

const getTimeGreeting = (lang: Lang) => {
  const h = new Date().getHours();
  const g = PRODLY_VOICE.greeting;
  if (h >= 5 && h < 12) return g.morning[lang];
  if (h >= 12 && h < 18) return g.afternoon[lang];
  if (h >= 18 && h < 23) return g.evening[lang];
  return g.night[lang];
};

const streakMessages: Record<Lang, (days: number) => string> = {
  en: (d) => `Day ${d} streak. Don't break it now.`,
  tr: (d) => `${d}. gün serisi. Şimdi bozma.`,
  de: (d) => `Tag ${d} Streak. Jetzt nicht abbrechen.`,
  es: (d) => `Racha de ${d} días. No la rompas ahora.`,
};

interface Props {
  streakDays?: number;
}

export const ReturningGreeting = ({ streakDays = 5 }: Props) => {
  const { lang } = useLang();
  const l = lang as Lang;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasOnboarded = localStorage.getItem("prodly_onboarding");
    if (hasOnboarded) {
      const lastDismiss = localStorage.getItem("prodly_greeting_dismiss");
      const today = new Date().toDateString();
      if (lastDismiss !== today) setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem("prodly_greeting_dismiss", new Date().toDateString());
  };

  if (!visible) return null;

  return (
    <div
      className="fixed top-16 left-1/2 -translate-x-1/2 z-40 glass-card-static px-5 py-3 flex items-center gap-4 animate-fade-in-up"
      style={{ maxWidth: 480 }}
    >
      {/* Prodly avatar */}
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #7C3AED, #34D399)" }}
      >
        P
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white">{getTimeGreeting(l)}</p>
        {streakDays > 0 && (
          <p className="text-xs mt-0.5" style={{ color: "#34D399" }}>
            🔥 {streakMessages[l](streakDays)}
          </p>
        )}
      </div>

      <button onClick={dismiss} className="text-white/40 hover:text-white transition-colors flex-shrink-0">
        <X size={14} />
      </button>
    </div>
  );
};
