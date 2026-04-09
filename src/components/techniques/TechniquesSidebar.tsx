import { CATEGORIES, techniques, type Category } from "@/lib/techniquesData";

interface Props {
  category: Category;
  onSelect: (cat: Category) => void;
  completed: Set<string>;
}

export const TechniquesSidebar = ({ category, onSelect, completed }: Props) => {
  return (
    <aside
      className="hidden md:flex flex-col w-56 flex-shrink-0 border-r pt-4 px-3 gap-1"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
    >
      <p className="text-[10px] font-semibold tracking-[0.1em] uppercase px-3 mb-2" style={{ color: "#6B7280" }}>
        Categories
      </p>
      {CATEGORIES.map((cat) => {
        const isActive = cat.id === category;
        const catTechniques = techniques.filter((t) => t.category === cat.id);
        const done = catTechniques.filter((t) => completed.has(t.id)).length;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-sm transition-all duration-150 active:scale-[0.97]"
            style={{
              background: isActive ? "rgba(0,200,255,0.15)" : "transparent",
              color: isActive ? "#00C8FF" : "#8B8FA8",
              fontFamily: "'Space Grotesk'",
            }}
          >
            <span className="text-base">{cat.icon}</span>
            <span className="flex-1 truncate">{cat.label}</span>
            {done > 0 && (
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(52,211,153,0.15)", color: "#34D399" }}>
                {done}
              </span>
            )}
          </button>
        );
      })}
    </aside>
  );
};
