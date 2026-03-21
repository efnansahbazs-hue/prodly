import { useState } from "react";
import { Lock } from "lucide-react";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { Navbar } from "@/components/Navbar";
import { TechniquesSidebar } from "@/components/techniques/TechniquesSidebar";
import { TechniquesTopBar } from "@/components/techniques/TechniquesTopBar";
import { TechniquesList } from "@/components/techniques/TechniquesList";
import { TechniqueDetail } from "@/components/techniques/TechniqueDetail";
import { useFreeUses } from "@/hooks/useFreeUses";
import type { Category, DAW } from "@/lib/techniquesData";

const TechniquesPage = () => {
  const { userType } = useFreeUses();
  const isStudio = userType === "premium"; // mock: premium acts as studio for demo
  const [category, setCategory] = useState<Category>("mixing");
  const [daw, setDaw] = useState<DAW>("ableton");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(() => {
    const saved = localStorage.getItem("prodly_completed_techniques");
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const toggleComplete = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      localStorage.setItem("prodly_completed_techniques", JSON.stringify([...next]));
      return next;
    });
  };

  // Non-studio: blurred overlay
  if (!isStudio && userType !== "premium") {
    return (
      <div className="relative min-h-screen" style={{ background: "#0A0A0F" }}>
        <NoiseOverlay /><DotGrid /><Orbs /><Navbar />
        <div className="relative z-10 flex items-center justify-center min-h-screen px-5">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "rgba(124,58,237,0.15)" }}>
              <Lock className="w-7 h-7" style={{ color: "#A78BFA" }} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk'" }}>
              Production Techniques Panel
            </h2>
            <p className="text-sm mb-6" style={{ color: "#8B8FA8" }}>
              87 expert-level techniques with DAW-specific steps. Exclusive to Studio members.
            </p>
            <div className="inline-block rounded-full p-[2px] animate-move-border" style={{ background: "linear-gradient(135deg, #34D399, #7C3AED, #34D399)", backgroundSize: "200% 200%" }}>
              <button className="px-8 py-3 rounded-full text-sm font-semibold text-white" style={{ background: "#0F0F18" }}>
                Upgrade to Studio →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen" style={{ background: "#0A0A0F" }}>
      <NoiseOverlay /><DotGrid /><Orbs /><Navbar />
      <div className="relative z-10 flex pt-16 min-h-screen">
        <TechniquesSidebar category={category} onSelect={(c) => { setCategory(c); setSelectedId(null); }} completed={completed} />
        <div className="flex-1 flex flex-col min-w-0">
          <TechniquesTopBar daw={daw} onDawChange={setDaw} completed={completed} />
          {selectedId ? (
            <TechniqueDetail
              id={selectedId}
              daw={daw}
              completed={completed.has(selectedId)}
              onToggleComplete={() => toggleComplete(selectedId)}
              onBack={() => setSelectedId(null)}
            />
          ) : (
            <TechniquesList
              category={category}
              completed={completed}
              onSelect={setSelectedId}
              onToggleComplete={toggleComplete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TechniquesPage;
