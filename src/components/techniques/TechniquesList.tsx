import { Check, Star } from "lucide-react";
import { getTechniquesByCategory, type Category, type Difficulty } from "@/lib/techniquesData";

interface Props {
  category: Category;
  completed: Set<string>;
  onSelect: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const diffBadge = (d: Difficulty) => {
  const styles: Record<Difficulty, React.CSSProperties> = {
    beginner: { background: "rgba(52,211,153,0.15)", color: "#34D399" },
    intermediate: { background: "rgba(124,58,237,0.2)", color: "#A78BFA" },
    advanced: { background: "linear-gradient(135deg, #7C3AED, #34D399)", color: "#FFFFFF" },
  };
  return (
    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize" style={styles[d]}>
      {d}
    </span>
  );
};

export const TechniquesList = ({ category, completed, onSelect, onToggleComplete }: Props) => {
  const items = getTechniquesByCategory(category);

  return (
    <div className="flex-1 overflow-y-auto p-5">
      <div className="grid gap-3 max-w-3xl">
        {items.map((t) => {
          const isDone = completed.has(t.id);
          return (
            <div
              key={t.id}
              className="rounded-[16px] p-4 transition-all duration-200 cursor-pointer group"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: t.isStudioTask
                  ? "1px solid rgba(212,175,55,0.3)"
                  : "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                boxShadow: t.isStudioTask ? "0 0 20px rgba(212,175,55,0.06)" : undefined,
              }}
              onClick={() => onSelect(t.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.isStudioTask ? "rgba(212,175,55,0.3)" : "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Complete toggle */}
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleComplete(t.id); }}
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 active:scale-[0.9]"
                    style={{
                      background: isDone ? "#34D399" : "rgba(255,255,255,0.06)",
                      border: isDone ? "none" : "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {isDone && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3
                        className="text-sm font-semibold truncate"
                        style={{ color: isDone ? "#6B7280" : "#FFFFFF", fontFamily: "'Space Grotesk'", textDecoration: isDone ? "line-through" : "none" }}
                      >
                        {t.title}
                      </h3>
                      {t.isStudioTask && <Star className="w-3 h-3 flex-shrink-0" style={{ color: "#D4AF37" }} />}
                    </div>
                    <p className="text-[11px] truncate" style={{ color: "#6B7280" }}>
                      {t.description.slice(0, 80)}…
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {diffBadge(t.difficulty)}
                  <span className="text-[10px] font-semibold" style={{ color: "#34D399" }}>+{t.expReward} EXP</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
