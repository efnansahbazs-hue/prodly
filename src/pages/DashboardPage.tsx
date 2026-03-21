import { useState } from "react";
import { HolographicMesh, HoloDotGrid, StaticGrain } from "@/components/HolographicBg";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { useLang } from "@/hooks/useLang";
import { DashboardChat } from "@/components/dashboard/DashboardChat";
import { DashboardMain } from "@/components/dashboard/DashboardMain";
import { ContextPanel, type ChatTopic } from "@/components/dashboard/ContextPanel";
import { LockedOverlay } from "@/components/dashboard/LockedOverlay";

export default function DashboardPage() {
  const { user } = useAuth();
  const { lang } = useLang();
  const plan = user?.plan || "free";
  const isFree = plan === "free";
  const [topic, setTopic] = useState<ChatTopic>(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HolographicMesh />
      <HoloDotGrid />
      <StaticGrain />
      <Navbar />

      <div className="relative z-10 flex gap-4 px-4 pt-20 pb-8 min-h-screen max-w-[1440px] mx-auto">
        {/* Left — Chat */}
        <div className="hidden lg:block flex-shrink-0 sticky top-20" style={{ height: "calc(100vh - 96px)" }}>
          <DashboardChat onTopicChange={setTopic} />
        </div>

        {/* Center — Main */}
        <DashboardMain plan={plan} />

        {/* Right — Context Panel */}
        <div className="hidden lg:block flex-shrink-0 sticky top-20" style={{ height: "calc(100vh - 96px)" }}>
          {isFree ? (
            <div className="h-full" style={{ width: 280 }}>
              <LockedOverlay label={lang === "tr" ? "Bağlamsal araçlar — Premium'da açılır" : "Context tools — Premium feature"} plan="premium">
                <ContextPanel topic={null} />
              </LockedOverlay>
            </div>
          ) : (
            <ContextPanel topic={topic} />
          )}
        </div>
      </div>

      {/* Mobile bottom chat */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
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
