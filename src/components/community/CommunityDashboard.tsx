import { useTranslation } from "@/hooks/useTranslation";
import { Zap, BookOpen, MessageCircle, Trophy } from "lucide-react";

export const CommunityDashboard = () => {
  const { t } = useTranslation();

  const hour = new Date().getHours();
  const greeting = hour < 12 ? t("comm.morning") : hour < 18 ? t("comm.afternoon") : t("comm.evening");

  const actions = [
    { icon: <Zap className="w-4 h-4" />, label: t("comm.askQuestion") },
    { icon: <BookOpen className="w-4 h-4" />, label: t("comm.shareTechnique") },
    { icon: <MessageCircle className="w-4 h-4" />, label: t("comm.startDiscussion") },
    { icon: <Trophy className="w-4 h-4" />, label: t("comm.joinChallenge") },
  ];

  return (
    <div>
      {/* Greeting card */}
      <div
        className="glass-card-static p-6 mb-6"
        style={{
          borderLeft: "3px solid transparent",
          borderImage: "linear-gradient(to bottom, #00C8FF, #34D399) 1",
        }}
      >
        <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
          {greeting}, Producer 🎧
        </h2>
        <p className="text-sm mt-1" style={{ color: "#8B8FA8" }}>
          {t("comm.dashDesc")}
        </p>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {actions.map((a, i) => (
          <button
            key={i}
            className="glass-card-static flex items-center gap-2.5 p-4 text-left transition-all duration-200 hover:border-[var(--border-mint)] active:scale-[0.97] group"
            style={{ borderRadius: 16 }}
          >
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ background: "rgba(52,211,153,0.1)", color: "#34D399" }}
            >
              {a.icon}
            </span>
            <span className="text-xs font-medium text-white">{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
