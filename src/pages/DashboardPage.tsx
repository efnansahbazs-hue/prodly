import { useState } from "react";
import { HolographicMesh, HoloDotGrid, StaticGrain } from "@/components/HolographicBg";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { useLang } from "@/hooks/useLang";
import { DashboardChat } from "@/components/dashboard/DashboardChat";
import { DashboardMain } from "@/components/dashboard/DashboardMain";
import { ContextPanel, type ChatTopic } from "@/components/dashboard/ContextPanel";
import { LockedOverlay } from "@/components/dashboard/LockedOverlay";
import { ProjectsTab } from "@/components/dashboard/ProjectsTab";

type DashTab = "room" | "projects" | "archive" | "settings";

const TABS: { id: DashTab; tr: string; en: string }[] = [
  { id: "room", tr: "Oda", en: "Room" },
  { id: "projects", tr: "Projeler", en: "Projects" },
  { id: "archive", tr: "Arşiv", en: "Archive" },
  { id: "settings", tr: "Ayarlar", en: "Settings" },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const { lang } = useLang();
  const plan = user?.plan || "free";
  const isFree = plan === "free";
  const [topic, setTopic] = useState<ChatTopic>(null);
  const [tab, setTab] = useState<DashTab>("room");
  const tr = lang === "tr";

  const renderCenter = () => {
    switch (tab) {
      case "room":
        return <DashboardMain plan={plan} />;
      case "projects":
        return <ProjectsTab />;
      case "archive":
        return (
          <div className="flex-1 flex items-center justify-center py-20">
            <p className="text-[14px]" style={{ color: "#8B8FA8" }}>{tr ? "Arşiv yakında geliyor." : "Archive coming soon."}</p>
          </div>
        );
      case "settings":
        return (
          <div className="flex-1 flex items-center justify-center py-20">
            <p className="text-[14px]" style={{ color: "#8B8FA8" }}>{tr ? "Ayarlar yakında geliyor." : "Settings coming soon."}</p>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HolographicMesh />
      <HoloDotGrid />
      <StaticGrain />
      <Navbar />

      {/* Dashboard tabs */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 pt-[72px]">
        <div className="flex items-center gap-1.5 py-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-4 py-2 rounded-full text-[12px] font-semibold transition-all active:scale-95"
              style={{
                background: tab === t.id ? "rgba(124,58,237,0.2)" : "transparent",
                color: tab === t.id ? "#A78BFA" : "#6B7280",
                border: tab === t.id ? "1px solid rgba(124,58,237,0.3)" : "1px solid transparent",
              }}
            >
              {tr ? t.tr : t.en}
            </button>
          ))}
        </div>
      </div>

      {/* 3-column layout — CSS Grid */}
      <div className="dashboard-grid relative z-10 pb-8 max-w-[1440px] mx-auto px-4">
        {/* Left — Chat */}
        <div className="dashboard-chat-col sticky top-24" style={{ height: "calc(100vh - 120px)" }}>
          <DashboardChat onTopicChange={setTopic} />
        </div>

        {/* Center — Tab content */}
        <div className="min-w-0" style={{ animation: "fadeTabIn 0.2s ease both" }}>
          {renderCenter()}
        </div>

        {/* Right — Context Panel */}
        <div
          className="dashboard-right-col sticky top-24"
          style={{
            height: "calc(100vh - 120px)",
            overflowY: "auto",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(124,58,237,0.4) transparent",
          }}
        >
          {isFree ? (
            <div className="h-full" style={{ width: "100%" }}>
              <LockedOverlay label={tr ? "Bağlamsal araçlar — Premium'da açılır" : "Context tools — Premium feature"} plan="premium">
                <ContextPanel topic={null} />
              </LockedOverlay>
            </div>
          ) : (
            <ContextPanel topic={topic} />
          )}
        </div>
      </div>

      {/* Mobile bottom chat */}
      <div className="dashboard-mobile-chat fixed bottom-4 left-4 right-4 z-40">
        <button
          className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-[13px] font-semibold text-white active:scale-[0.97] transition-transform"
          style={{ background: "rgba(15,15,25,0.9)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", boxShadow: "0 8px 30px rgba(0,0,0,0.5)" }}
        >
          <span className="rounded-full flex-shrink-0" style={{ width: 8, height: 8, background: "linear-gradient(135deg, #7C3AED, #34D399)" }} />
          Prodly'ye Sor
        </button>
      </div>
    </div>
  );
}
