import { useTranslation } from "@/hooks/useTranslation";
import { Lock, Palette, MessageSquare, Users, Mic } from "lucide-react";

const ROOMS = [
  {
    icon: <Palette className="w-5 h-5" />,
    titleKey: "comm.slWip",
    descKey: "comm.slWipDesc",
    members: 14,
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    titleKey: "comm.slDeepDive",
    descKey: "comm.slDeepDiveDesc",
    members: 8,
  },
  {
    icon: <Users className="w-5 h-5" />,
    titleKey: "comm.slMentor",
    descKey: "comm.slMentorDesc",
    members: 6,
  },
  {
    icon: <Mic className="w-5 h-5" />,
    titleKey: "comm.slRoundtable",
    descKey: "comm.slRoundtableDesc",
    members: 22,
  },
];

export const StudioLounge = () => {
  const { t } = useTranslation();
  // Mock: check if user is Studio tier
  const isStudio = false;

  if (!isStudio) {
    return (
      <div className="relative">
        {/* Blurred preview */}
        <div className="filter blur-sm pointer-events-none select-none opacity-60">
          <LoungeContent t={t} />
        </div>

        {/* Gate overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass-card-static p-8 text-center max-w-md">
            <Lock className="w-8 h-8 mx-auto mb-3" style={{ color: "#00C8FF" }} />
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk'" }}>
              {t("comm.slLocked")}
            </h3>
            <p className="text-xs mb-5" style={{ color: "#8B8FA8" }}>
              {t("comm.slLockedDesc")}
            </p>
            <div
              className="inline-block rounded-full p-[2px] animate-move-border"
              style={{
                background: "linear-gradient(135deg, #00C8FF, #34D399, #00C8FF)",
                backgroundSize: "200% 200%",
              }}
            >
              <button
                className="rounded-full px-6 py-2 text-sm font-semibold text-white active:scale-[0.96] transition-transform"
                style={{ background: "#00C8FF" }}
              >
                {t("comm.slUpgrade")}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <LoungeContent t={t} />;
};

function LoungeContent({ t }: { t: (k: string) => string }) {
  return (
    <div>
      {/* Entrance visual */}
      <div
        className="rounded-2xl p-8 mb-6 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,200,255,0.12), rgba(52,211,153,0.08))",
          border: "1px solid rgba(0,200,255,0.2)",
        }}
      >
        <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>
          {t("comm.slTitle")}
        </h3>
        <p className="text-xs" style={{ color: "#8B8FA8" }}>{t("comm.slSubtitle")}</p>
      </div>

      {/* Room cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ROOMS.map((room, i) => (
          <div
            key={i}
            className="glass-card-static p-5 transition-all hover:border-[var(--border-accent)]"
          >
            <div className="flex items-start gap-3">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(0,200,255,0.12)", color: "#00C8FF" }}
              >
                {room.icon}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white">{t(room.titleKey)}</h4>
                <p className="text-[11px] mt-0.5 leading-relaxed" style={{ color: "#8B8FA8" }}>
                  {t(room.descKey)}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#34D399" }} />
                  <span className="text-[10px]" style={{ color: "#34D399" }}>
                    {room.members} {t("comm.slOnline")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
