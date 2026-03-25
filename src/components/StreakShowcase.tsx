import { Snowflake, Trophy } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const dayKeys = ["streak.mon", "streak.tue", "streak.wed", "streak.thu", "streak.fri", "streak.sat", "streak.sun"];

const milestones = [
  { days: 3, labelKey: "streak.m3", unlocked: true },
  { days: 7, labelKey: "streak.m7", unlocked: true },
  { days: 30, labelKey: "streak.m30", unlocked: false },
  { days: 100, labelKey: "streak.m100", unlocked: false },
];

export const StreakShowcase = () => {
  const { t } = useTranslation();
  const completedDays = [true, true, true, true, true, false, false];
  const todayIdx = 5;
  const streakCount = 23;
  const freezesLeft = 1;

  return (
    <section className="relative py-16 px-5">
      <div className="max-w-xl mx-auto">
        <ScrollReveal>
          <div
            className="rounded-[20px] p-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-1" style={{ color: "#34D399" }}>
                  {t("streak.label")}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
                    {streakCount}
                  </span>
                  <span className="text-lg">🔥</span>
                  <span className="text-sm" style={{ color: "#8B8FA8" }}>{t("streak.days")}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Snowflake className="w-3.5 h-3.5" style={{ color: "#34D399" }} />
                <span className="text-[11px] font-semibold" style={{ color: "#34D399" }}>{freezesLeft}</span>
                <span className="text-[10px]" style={{ color: "#6B7280" }}>{t("streak.freeze")}</span>
              </div>
            </div>

            {/* 7-day calendar */}
            <div className="flex justify-between gap-2 mb-6">
              {dayKeys.map((dayKey, i) => {
                const isDone = completedDays[i];
                const isToday = i === todayIdx;
                return (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <span className="text-[10px] font-semibold" style={{ color: "#6B7280" }}>{t(dayKey)}</span>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isDone
                          ? "linear-gradient(135deg, #7C3AED, #9333EA)"
                          : "rgba(255,255,255,0.04)",
                        border: isToday && !isDone
                          ? "2px solid #34D399"
                          : isDone
                          ? "none"
                          : "1px solid rgba(255,255,255,0.08)",
                        boxShadow: isToday && !isDone
                          ? "0 0 12px rgba(52,211,153,0.3)"
                          : isDone
                          ? "0 0 8px rgba(124,58,237,0.2)"
                          : "none",
                        animation: isToday && !isDone ? "pulse 2s ease-in-out infinite" : "none",
                      }}
                    >
                      {isDone && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Milestones */}
            <p className="text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: "#6B7280" }}>
              {t("streak.milestones")}
            </p>
            <div className="flex flex-wrap gap-2">
              {milestones.map((m) => (
                <div
                  key={m.days}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: m.unlocked
                      ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(52,211,153,0.1))"
                      : "rgba(255,255,255,0.03)",
                    border: `1px solid ${m.unlocked ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  <Trophy className="w-3 h-3" style={{ color: m.unlocked ? "#A78BFA" : "#6B7280" }} />
                  <span className="text-[11px] font-semibold" style={{ color: m.unlocked ? "#A78BFA" : "#6B7280" }}>
                    {t(m.labelKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
