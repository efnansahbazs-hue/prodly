import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const categories = [
  { icon: "🎚️", key: "ps.catMix" },
  { icon: "🎛️", key: "ps.catSound" },
  { icon: "🔊", key: "ps.catLoud" },
  { icon: "🎵", key: "ps.catArr" },
  { icon: "⚡", key: "ps.catPerf" },
];

interface Message {
  role: "user" | "prodly";
  textKey: string;
  source?: { color: string; label: string };
}

const conversations: Record<string, Message[]> = {
  "ps.catMix": [
    { role: "user", textKey: "ps.conv.mix.q1" },
    { role: "prodly", textKey: "ps.conv.mix.a1", source: { color: "🟢", label: "Sound On Sound" } },
    { role: "prodly", textKey: "ps.conv.mix.a2" },
    { role: "prodly", textKey: "ps.conv.mix.a3", source: { color: "🟡", label: "In The Mix" } },
  ],
  "ps.catSound": [
    { role: "user", textKey: "ps.conv.sound.q1" },
    { role: "prodly", textKey: "ps.conv.sound.a1", source: { color: "🔵", label: "Ableton Manual" } },
    { role: "prodly", textKey: "ps.conv.sound.a2" },
    { role: "prodly", textKey: "ps.conv.sound.a3" },
  ],
};

export const ProblemSolver = () => {
  const { t } = useTranslation();
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [visibleMsgs, setVisibleMsgs] = useState(0);

  const msgs = activeCat ? conversations[activeCat] || conversations["ps.catMix"] : [];

  useEffect(() => {
    if (!activeCat) return;
    setVisibleMsgs(0);
    const total = msgs.length;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setVisibleMsgs(i);
      if (i >= total) clearInterval(timer);
    }, 600);
    return () => clearInterval(timer);
  }, [activeCat, msgs.length]);

  return (
    <section className="relative py-24 md:py-32 px-5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-center mb-3" style={{ color: "#34D399" }}>
            {t("ps.label")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-white mb-4" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("ps.title")}
          </h2>
          <p className="text-sm text-center mb-10 mx-auto" style={{ color: "#8B8FA8", maxWidth: 460 }}>
            {t("ps.desc")}
          </p>
        </ScrollReveal>

        {/* Category cards */}
        <ScrollReveal delay={60}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => {
              const isActive = activeCat === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCat(cat.key)}
                  className="rounded-[14px] px-4 py-3 text-left transition-all duration-200 active:scale-[0.97]"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${isActive ? "rgba(52,211,153,0.5)" : "rgba(255,255,255,0.08)"}`,
                    backdropFilter: "blur(20px)",
                    boxShadow: isActive ? "0 0 16px rgba(52,211,153,0.1)" : "none",
                  }}
                >
                  <span className="text-lg mr-2">{cat.icon}</span>
                  <span className="text-[12px] font-semibold" style={{ color: isActive ? "#34D399" : "#8B8FA8", fontFamily: "'Space Grotesk'" }}>
                    {t(cat.key)}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Conversation flow */}
        {activeCat && (
          <div className="max-w-xl mx-auto space-y-3">
            {msgs.slice(0, visibleMsgs).map((msg, i) => (
              <div
                key={i}
                className="animate-in fade-in slide-in-from-bottom-2 duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {msg.role === "user" ? (
                  <div className="rounded-[14px] px-4 py-3 text-sm ml-8" style={{ background: "rgba(124,58,237,0.12)", color: "#A78BFA" }}>
                    {t(msg.textKey)}
                  </div>
                ) : (
                  <div
                    className="rounded-[14px] px-4 py-3 text-sm whitespace-pre-line"
                    style={{
                      background: "rgba(52,211,153,0.04)",
                      borderLeft: "3px solid #34D399",
                      color: "#8B8FA8",
                    }}
                  >
                    {t(msg.textKey)}
                    {msg.source && (
                      <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-medium" style={{ color: "#34D399", display: "block" }}>
                        {msg.source.color} {msg.source.label}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
