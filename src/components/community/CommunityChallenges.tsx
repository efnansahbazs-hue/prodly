import { useTranslation } from "@/hooks/useTranslation";
import { Clock, Trophy, Star, Zap } from "lucide-react";

interface Challenge {
  type: "weekly" | "studio" | "grandprix" | "flash";
  title: string;
  desc: string;
  participants: number;
  deadline: string;
  prize?: string;
}

const TYPE_META: Record<string, { icon: React.ReactNode; label: string; bg: string; border: string }> = {
  weekly: { icon: <Trophy className="w-4 h-4" />, label: "comm.chWeekly", bg: "rgba(52,211,153,0.08)", border: "#34D399" },
  studio: { icon: <Star className="w-4 h-4" />, label: "comm.chStudio", bg: "rgba(0,200,255,0.1)", border: "#00C8FF" },
  grandprix: { icon: <Trophy className="w-4 h-4" />, label: "comm.chGrandPrix", bg: "rgba(0,200,255,0.12)", border: "transparent" },
  flash: { icon: <Zap className="w-4 h-4" />, label: "comm.chFlash", bg: "rgba(52,211,153,0.1)", border: "#34D399" },
};

const CHALLENGES: Challenge[] = [
  {
    type: "weekly",
    title: "3-Sample Challenge",
    desc: "Build a full track using only 3 samples. No synths.",
    participants: 134,
    deadline: "3d 14h",
    prize: "+50 EXP + Featured Post",
  },
  {
    type: "studio",
    title: "Sound Design Showdown",
    desc: "Create the most complex bass patch from a sine wave. Studio members only.",
    participants: 28,
    deadline: "5d 8h",
    prize: "+100 EXP + Verified Badge",
  },
  {
    type: "grandprix",
    title: "Prodly Grand Prix — March 2026",
    desc: "Monthly top challenge. Best overall track wins grand prize.",
    participants: 312,
    deadline: "12d 6h",
    prize: "1 Month Free Studio + Badge",
  },
  {
    type: "flash",
    title: "⚡ 60-Minute Beat Sprint",
    desc: "Start to finish in 60 minutes. Timer starts when you enter.",
    participants: 47,
    deadline: "18h",
  },
];

export const CommunityChallenges = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      {CHALLENGES.map((ch, i) => {
        const meta = TYPE_META[ch.type];
        const isGrandPrix = ch.type === "grandprix";

        return (
          <div
            key={i}
            className="glass-card-static p-6 transition-all hover:border-[var(--border-accent)]"
            style={{
              borderLeft: isGrandPrix ? "3px solid transparent" : `3px solid ${meta.border}`,
              ...(isGrandPrix ? { borderImage: "linear-gradient(to bottom, #00C8FF, #34D399) 1" } : {}),
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Type badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full"
                    style={{ background: meta.bg, color: meta.border === "transparent" ? "#00C8FF" : meta.border }}
                  >
                    {meta.icon} {t(meta.label)}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>
                  {ch.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "#8B8FA8" }}>
                  {ch.desc}
                </p>

                {ch.prize && (
                  <p className="text-[11px] mt-2 font-medium" style={{ color: "#34D399" }}>
                    🎁 {ch.prize}
                  </p>
                )}
              </div>

              {/* Right: countdown + participants */}
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,200,255,0.15), rgba(52,211,153,0.1))",
                    color: "#fff",
                  }}
                >
                  <Clock className="w-3 h-3" style={{ color: "#34D399" }} />
                  {ch.deadline}
                </div>
                <span className="text-[10px]" style={{ color: "#8B8FA8" }}>
                  {ch.participants} {t("comm.chParticipants")}
                </span>
              </div>
            </div>

            {/* Join button */}
            <button
              className="mt-4 px-4 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-[0.97]"
              style={{
                background: "rgba(52,211,153,0.1)",
                border: "1px solid rgba(52,211,153,0.3)",
                color: "#34D399",
              }}
            >
              {t("comm.chJoin")}
            </button>
          </div>
        );
      })}

      {/* Winner announcement card */}
      <div
        className="glass-card-static p-6 text-center"
        style={{
          border: "1px solid rgba(52,211,153,0.3)",
          background: "rgba(52,211,153,0.04)",
        }}
      >
        <div className="text-3xl mb-2">🏆</div>
        <h4 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>
          {t("comm.chWinnerTitle")}
        </h4>
        <p className="text-sm" style={{ color: "#34D399" }}>
          Maria — "Neon Drift" (Dark Techno)
        </p>
        <p className="text-xs mt-1" style={{ color: "#8B8FA8" }}>
          {t("comm.chWinnerDesc")}
        </p>
      </div>
    </div>
  );
};
