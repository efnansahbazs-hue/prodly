import { useState } from "react";
import { useExp } from "@/hooks/useExp";
import { useLang } from "@/hooks/useLang";
import { useTranslation } from "@/hooks/useTranslation";
import { LEVELS } from "@/lib/levelData";
import { Navbar } from "@/components/Navbar";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { ArrowLeft, Archive, StickyNote, Users, Settings, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TABS = ["archive", "notes", "invite", "settings"] as const;
type Tab = typeof TABS[number];

const TAB_ICONS: Record<Tab, React.ReactNode> = {
  archive: <Archive className="w-4 h-4" />,
  notes: <StickyNote className="w-4 h-4" />,
  invite: <Users className="w-4 h-4" />,
  settings: <Settings className="w-4 h-4" />,
};

const BADGES = [
  { id: "first_question", icon: "💬", name: "First Question", earned: true },
  { id: "streak_3", icon: "🔥", name: "3-Day Streak", earned: true },
  { id: "streak_7", icon: "⚡", name: "7-Day Streak", earned: true },
  { id: "streak_30", icon: "🏆", name: "30-Day Streak", earned: false },
  { id: "streak_100", icon: "👑", name: "100-Day Streak", earned: false },
  { id: "level_5", icon: "🎵", name: "Sound Sculptor", earned: true },
  { id: "level_8", icon: "🧙", name: "Studio Wizard", earned: false },
  { id: "level_10", icon: "🌟", name: "Prodly Legend", earned: false },
  { id: "problem_10", icon: "🔧", name: "10 Problems Solved", earned: true },
  { id: "blueprint_5", icon: "📐", name: "5 Blueprints", earned: false },
  { id: "quiz_master", icon: "🧠", name: "Quiz Master", earned: false },
  { id: "technique_25", icon: "🎛️", name: "25 Techniques", earned: false },
];

const MOCK_ARCHIVE = [
  { q: "Why does my kick sound muddy?", date: "2026-03-18", genre: "Techno" },
  { q: "Best sidechain settings for deep house?", date: "2026-03-17", genre: "House" },
  { q: "How to add movement to pads?", date: "2026-03-16", genre: "Ambient" },
  { q: "808 tuning techniques?", date: "2026-03-15", genre: "Trap" },
];

const MOCK_NOTES = [
  { text: "High-pass kick at 60Hz to remove mud", date: "2026-03-18" },
  { text: "Pre-delay 20-40ms on reverb keeps mix clear", date: "2026-03-16" },
];

export default function ProfilePage() {
  const { exp, level, progress } = useExp();
  const { lang } = useLang();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("archive");
  const isHighLevel = level.level >= 8;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NoiseOverlay />
      <DotGrid />
      <Orbs />
      <Navbar />

      <div className="container mx-auto px-5 pt-24 pb-20 max-w-3xl">
        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
          style={{ color: "#8B8FA8" }}
        >
          <ArrowLeft className="w-4 h-4" /> {t("profile.back")}
        </button>

        {/* HEADER */}
        <div className="glass-card-static p-8 mb-8">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
              style={{
                background: isHighLevel
                  ? "linear-gradient(135deg, #7C3AED, #34D399)"
                  : "rgba(124,58,237,0.2)",
                border: `3px solid ${isHighLevel ? "rgba(52,211,153,0.5)" : "rgba(124,58,237,0.3)"}`,
                boxShadow: isHighLevel ? "0 0 30px rgba(124,58,237,0.3), 0 0 60px rgba(52,211,153,0.15)" : undefined,
              }}
            >
              {level.level}
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
                {level.name[lang] || level.name.en}
              </h1>
              <p className="text-sm mt-1" style={{ color: "#8B8FA8" }}>
                Level {level.level} · {exp.toLocaleString()} EXP
              </p>

              {/* EXP bar */}
              <div className="mt-3">
                <div className="flex justify-between text-[10px] mb-1" style={{ color: "#8B8FA8" }}>
                  <span>{exp.toLocaleString()}</span>
                  <span>{level.maxExp.toLocaleString()}</span>
                </div>
                <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${progress}%`,
                      background: "linear-gradient(90deg, #7C3AED, #34D399)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: t("profile.questions"), value: "47" },
            { label: t("profile.streak"), value: "12" },
            { label: t("profile.techniques"), value: "18" },
            { label: t("profile.badges"), value: `${BADGES.filter(b => b.earned).length}/${BADGES.length}` },
          ].map((s) => (
            <div key={s.label} className="glass-card-static p-4 text-center">
              <div className="text-xl font-bold" style={{ color: "#34D399" }}>{s.value}</div>
              <div className="text-[11px] mt-1" style={{ color: "#8B8FA8" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* BADGE GRID */}
        <div className="glass-card-static p-6 mb-8">
          <h3 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("profile.badgesTitle")}
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {BADGES.map((b) => (
              <div
                key={b.id}
                className="flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all"
                style={{
                  filter: b.earned ? "none" : "grayscale(1) opacity(0.4)",
                }}
              >
                <span className="text-2xl">{b.icon}</span>
                <span className="text-[9px] text-center leading-tight" style={{ color: b.earned ? "#fff" : "#6B7280" }}>
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-1 mb-6 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap"
              style={{
                color: activeTab === tab ? "#fff" : "#8B8FA8",
                background: activeTab === tab ? "rgba(255,255,255,0.06)" : "transparent",
                borderBottom: activeTab === tab ? "2px solid #34D399" : "2px solid transparent",
              }}
            >
              {TAB_ICONS[tab]}
              {t(`profile.tab.${tab}`)}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="glass-card-static p-6">
          {activeTab === "archive" && <ArchiveTab />}
          {activeTab === "notes" && <NotesTab />}
          {activeTab === "invite" && <InviteTab t={t} />}
          {activeTab === "settings" && <SettingsTab t={t} />}
        </div>
      </div>
    </div>
  );
}

function ArchiveTab() {
  return (
    <div className="space-y-3">
      {MOCK_ARCHIVE.map((item, i) => (
        <div
          key={i}
          className="flex items-start justify-between p-3 rounded-xl transition-colors hover:bg-white/[0.03]"
          style={{ borderLeft: "3px solid #34D399" }}
        >
          <div>
            <p className="text-sm text-white">{item.q}</p>
            <p className="text-[11px] mt-1" style={{ color: "#8B8FA8" }}>{item.date}</p>
          </div>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full flex-shrink-0"
            style={{ background: "rgba(124,58,237,0.15)", color: "#A78BFA" }}
          >
            {item.genre}
          </span>
        </div>
      ))}
    </div>
  );
}

function NotesTab() {
  return (
    <div className="space-y-3">
      {MOCK_NOTES.map((note, i) => (
        <div key={i} className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)" }}>
          <p className="text-sm text-white">{note.text}</p>
          <p className="text-[10px] mt-1.5" style={{ color: "#8B8FA8" }}>{note.date}</p>
        </div>
      ))}
    </div>
  );
}

function InviteTab({ t }: { t: (k: string) => string }) {
  return (
    <div className="text-center py-6">
      <p className="text-sm text-white mb-2">{t("profile.inviteTitle")}</p>
      <p className="text-xs mb-4" style={{ color: "#8B8FA8" }}>{t("profile.inviteDesc")}</p>
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span className="text-white font-mono">prodly.app/ref/abc123</span>
        <button
          className="px-2 py-1 rounded text-[10px] font-medium transition-colors"
          style={{ background: "rgba(52,211,153,0.15)", color: "#34D399" }}
        >
          {t("profile.copy")}
        </button>
      </div>
    </div>
  );
}

function SettingsTab({ t }: { t: (k: string) => string }) {
  const [showPw, setShowPw] = useState(false);
  const [pw, setPw] = useState("");

  const strength = pw.length === 0 ? 0 : pw.length < 6 ? 1 : pw.length < 10 ? 2 : /[A-Z]/.test(pw) && /[0-9]/.test(pw) && /[^A-Za-z0-9]/.test(pw) ? 4 : 3;
  const strengthColors = ["transparent", "#EF4444", "#F59E0B", "#EAB308", "#34D399"];
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];

  return (
    <div className="space-y-6 max-w-sm">
      {/* Email */}
      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "#8B8FA8" }}>{t("profile.email")}</label>
        <input
          type="email"
          defaultValue="producer@example.com"
          className="w-full px-3 py-2 rounded-lg text-sm text-white outline-none transition-all"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "#8B8FA8" }}>{t("profile.password")}</label>
        <div className="relative">
          <input
            type={showPw ? "text" : "password"}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="New password"
            className="w-full px-3 py-2 pr-10 rounded-lg text-sm text-white outline-none transition-all"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <button
            type="button"
            onClick={() => setShowPw(!showPw)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            style={{ color: "#8B8FA8" }}
          >
            {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {/* Strength bar */}
        {pw.length > 0 && (
          <div className="mt-2">
            <div className="h-1.5 rounded-full overflow-hidden flex gap-1" style={{ background: "rgba(255,255,255,0.06)" }}>
              {[1, 2, 3, 4].map((seg) => (
                <div
                  key={seg}
                  className="flex-1 h-full rounded-full transition-all duration-300"
                  style={{ background: strength >= seg ? strengthColors[strength] : "transparent" }}
                />
              ))}
            </div>
            <p className="text-[10px] mt-1" style={{ color: strengthColors[strength] }}>
              {strengthLabels[strength]}
            </p>
          </div>
        )}
      </div>

      <button
        className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-all active:scale-[0.97]"
        style={{ background: "#7C3AED" }}
      >
        {t("profile.save")}
      </button>
    </div>
  );
}
