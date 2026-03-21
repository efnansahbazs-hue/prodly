import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ToolkitTabs } from "@/components/ToolkitTabs";
import { ToolkitCards } from "@/components/ToolkitCards";

const tabs = ["learn", "solve", "reference", "create"] as const;
export type ToolkitTab = (typeof tabs)[number];

export interface ToolItem {
  icon: string;
  titleKey: string;
  descKey: string;
  plan: "free" | "premium" | "studio";
  limit?: string;
}

export const tabData: Record<ToolkitTab, ToolItem[]> = {
  learn: [
    { icon: "📖", titleKey: "tk.conceptDict", descKey: "tk.conceptDictDesc", plan: "free" },
    { icon: "🎒", titleKey: "tk.starterKit", descKey: "tk.starterKitDesc", plan: "premium" },
    { icon: "🎬", titleKey: "tk.videoFinder", descKey: "tk.videoFinderDesc", plan: "premium" },
    { icon: "🧠", titleKey: "tk.quiz", descKey: "tk.quizDesc", plan: "premium" },
  ],
  solve: [
    { icon: "🔧", titleKey: "tk.problemSolver", descKey: "tk.problemSolverDesc", plan: "free", limit: "1/day" },
    { icon: "✅", titleKey: "tk.mixChecklist", descKey: "tk.mixChecklistDesc", plan: "premium" },
    { icon: "⚠️", titleKey: "tk.mistakes", descKey: "tk.mistakesDesc", plan: "premium" },
    { icon: "🖥️", titleKey: "tk.dawAnalyzer", descKey: "tk.dawAnalyzerDesc", plan: "studio" },
  ],
  reference: [
    { icon: "🧬", titleKey: "tk.genreDna", descKey: "tk.genreDnaDesc", plan: "free", limit: "2 genres" },
    { icon: "🎵", titleKey: "tk.bpmKey", descKey: "tk.bpmKeyDesc", plan: "free" },
    { icon: "📊", titleKey: "tk.frequency", descKey: "tk.frequencyDesc", plan: "free" },
    { icon: "🔗", titleKey: "tk.sidechainCalc", descKey: "tk.sidechainCalcDesc", plan: "premium" },
    { icon: "🔌", titleKey: "tk.pluginDb", descKey: "tk.pluginDbDesc", plan: "premium" },
  ],
  create: [
    { icon: "🎲", titleKey: "tk.randomProject", descKey: "tk.randomProjectDesc", plan: "free", limit: "3/day" },
    { icon: "📐", titleKey: "tk.blueprint", descKey: "tk.blueprintDesc", plan: "premium" },
    { icon: "🎹", titleKey: "tk.chordStarter", descKey: "tk.chordStarterDesc", plan: "free" },
    { icon: "🥁", titleKey: "tk.grooveBuilder", descKey: "tk.grooveBuilderDesc", plan: "premium" },
    { icon: "🎤", titleKey: "tk.sampleDev", descKey: "tk.sampleDevDesc", plan: "premium" },
  ],
};

export const Toolkit = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ToolkitTab>("learn");

  return (
    <section className="relative py-24 md:py-32 px-5">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-center mb-3" style={{ color: "#34D399" }}>
            {t("tk.label")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-white mb-10" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("tk.title")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <ToolkitTabs tabs={tabs as unknown as ToolkitTab[]} active={activeTab} onSelect={setActiveTab} />
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <ToolkitCards items={tabData[activeTab]} />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex justify-center mt-12">
            <button
              className="rounded-full px-8 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
              style={{
                border: "1px solid rgba(52,211,153,0.4)",
                color: "#34D399",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(52,211,153,0.1)";
                e.currentTarget.style.borderColor = "#34D399";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(52,211,153,0.4)";
              }}
            >
              {t("tk.cta")}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
