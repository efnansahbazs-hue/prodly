import { ArrowLeft, Check, Star } from "lucide-react";
import { getTechniqueById, type DAW, type Difficulty } from "@/lib/techniquesData";

interface Props {
  id: string;
  daw: DAW;
  completed: boolean;
  onToggleComplete: () => void;
  onBack: () => void;
}

const diffBadge = (d: Difficulty) => {
  const styles: Record<Difficulty, React.CSSProperties> = {
    beginner: { background: "rgba(52,211,153,0.15)", color: "#34D399" },
    intermediate: { background: "rgba(0,200,255,0.2)", color: "#00C8FF" },
    advanced: { background: "linear-gradient(135deg, #00C8FF, #34D399)", color: "#FFFFFF" },
  };
  return <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize" style={styles[d]}>{d}</span>;
};

export const TechniqueDetail = ({ id, daw, completed, onToggleComplete, onBack }: Props) => {
  const t = getTechniqueById(id);
  if (!t) return null;

  const dawSteps = t.dawSteps.find((s) => s.daw === daw) || t.dawSteps.find((s) => s.daw === "other");
  const glass = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" };

  return (
    <div className="flex-1 overflow-y-auto p-5 max-w-3xl">
      {/* Back + header */}
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm mb-6 transition-colors active:scale-[0.97]" style={{ color: "#8B8FA8" }}>
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="flex items-center gap-3 mb-2 flex-wrap">
        {diffBadge(t.difficulty)}
        {t.isStudioTask && (
          <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}>
            <Star className="w-3 h-3" /> Studio Task · +{t.expReward} EXP
          </span>
        )}
        {!t.isStudioTask && <span className="text-[10px] font-semibold" style={{ color: "#34D399" }}>+{t.expReward} EXP</span>}
      </div>

      <h1 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk'" }}>{t.title}</h1>

      {/* 1. Description */}
      <div className="rounded-[14px] p-4 mb-4" style={glass}>
        <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#34D399" }}>What it is</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#8B8FA8" }}>{t.description}</p>
      </div>

      {/* 2. When to use */}
      <div className="rounded-[14px] p-4 mb-4" style={glass}>
        <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#34D399" }}>When to use</h3>
        <ul className="space-y-1.5">
          {t.whenToUse.map((w, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#8B8FA8" }}>
              <span style={{ color: "#34D399" }}>→</span> {w}
            </li>
          ))}
        </ul>
      </div>

      {/* 3. DAW steps */}
      {dawSteps && (
        <div className="rounded-[14px] p-4 mb-4" style={{ ...glass, borderColor: "rgba(0,200,255,0.2)" }}>
          <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: "#00C8FF" }}>
            Step-by-step — {daw.replace("-", " ")}
          </h3>
          <ol className="space-y-2">
            {dawSteps.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "#8B8FA8" }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold" style={{ background: "rgba(0,200,255,0.2)", color: "#00C8FF" }}>
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* 4. Parameters */}
      <div className="rounded-[14px] p-4 mb-4" style={glass}>
        <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: "#34D399" }}>Key parameters</h3>
        <div className="grid gap-2">
          {t.parameters.map((p) => (
            <div key={p.name} className="flex items-center gap-3 text-sm">
              <span className="font-semibold text-white w-24 flex-shrink-0" style={{ fontFamily: "'Space Grotesk'" }}>{p.name}</span>
              <span className="font-mono text-[12px]" style={{ color: "#00C8FF" }}>{p.value}</span>
              <span className="text-[11px]" style={{ color: "#6B7280" }}>{p.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Mistakes */}
      <div className="space-y-2 mb-4">
        <h3 className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#EF4444" }}>Classic mistakes</h3>
        {t.mistakes.map((m, i) => (
          <div key={i} className="rounded-[12px] p-3 text-sm border-l-3" style={{ ...glass, borderLeft: "3px solid #EF4444", color: "#8B8FA8" }}>
            {m}
          </div>
        ))}
      </div>

      {/* 6. Pro tip */}
      <div className="rounded-[14px] p-4 mb-4 border-l-3" style={{ ...glass, borderLeft: "3px solid #34D399" }}>
        <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#34D399" }}>Pro tip</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#8B8FA8" }}>{t.proTip}</p>
      </div>

      {/* 7. Source */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(52,211,153,0.1)", color: "#34D399" }}>
          🟢 {t.source}
        </span>
      </div>

      {/* 8. Related */}
      {t.related.length > 0 && (
        <div className="mb-6">
          <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#6B7280" }}>Related techniques</h3>
          <div className="flex flex-wrap gap-2">
            {t.related.map((r) => (
              <span key={r} className="text-[11px] px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8B8FA8" }}>
                {r.replace(/-/g, " ")}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mark complete */}
      <button
        onClick={onToggleComplete}
        className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
        style={{
          background: completed ? "rgba(52,211,153,0.15)" : "linear-gradient(135deg, #00C8FF, #00C8FF)",
          color: completed ? "#34D399" : "white",
          border: completed ? "1px solid rgba(52,211,153,0.3)" : "none",
        }}
      >
        {completed ? <><Check className="w-4 h-4" /> Completed · +{t.expReward} EXP</> : `Mark as Complete · +${t.expReward} EXP`}
      </button>
    </div>
  );
};
