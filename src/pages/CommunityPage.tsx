import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Navbar } from "@/components/Navbar";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { CommunityDashboard } from "@/components/community/CommunityDashboard";
import { CommunityFeed } from "@/components/community/CommunityFeed";
import { CommunityLibrary } from "@/components/community/CommunityLibrary";
import { CommunityChallenges } from "@/components/community/CommunityChallenges";
import { StudioLounge } from "@/components/community/StudioLounge";
import { CommunityTrending } from "@/components/community/CommunityTrending";
import { ScrollReveal } from "@/components/ScrollReveal";

const TABS = ["feed", "library", "challenges", "studio", "trending"] as const;
type CTab = typeof TABS[number];

const TAB_LABELS: Record<CTab, string> = {
  feed: "comm.tabFeed",
  library: "comm.tabLibrary",
  challenges: "comm.tabChallenges",
  studio: "comm.tabStudio",
  trending: "comm.tabTrending",
};

export default function CommunityPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<CTab>("feed");

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NoiseOverlay />
      <DotGrid />
      <Orbs />
      <Navbar />

      <div className="container mx-auto px-5 pt-24 pb-20 max-w-5xl">
        {/* Dashboard greeting */}
        <ScrollReveal>
          <CommunityDashboard />
        </ScrollReveal>

        {/* Tab bar */}
        <div className="flex gap-1 mt-10 mb-8 overflow-x-auto pb-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-4 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap"
              style={{
                color: activeTab === tab ? "#fff" : "#8B8FA8",
                background: activeTab === tab ? "rgba(255,255,255,0.06)" : "transparent",
                borderBottom: activeTab === tab ? "2px solid #34D399" : "2px solid transparent",
              }}
            >
              {t(TAB_LABELS[tab])}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="animate-fade-in-up" key={activeTab}>
          {activeTab === "feed" && <CommunityFeed />}
          {activeTab === "library" && <CommunityLibrary />}
          {activeTab === "challenges" && <CommunityChallenges />}
          {activeTab === "studio" && <StudioLounge />}
          {activeTab === "trending" && <CommunityTrending />}
        </div>
      </div>
    </div>
  );
}
