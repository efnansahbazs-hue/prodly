import { useTranslation } from "@/hooks/useTranslation";

interface Props {
  onContinue: () => void;
}

const tags = [
  { label: "Dark Techno", color: "#00C8FF" },
  { label: "Industrial", color: "#8B8FA8" },
  { label: "Melancholy", color: "#8B8FA8" },
];

const stats = [
  { key: "BPM", value: "134" },
  { key: "Key", value: "D Minor" },
  { key: "Difficulty", value: "⭐⭐⭐" },
];

const refs = ["Surgeon", "Blawan"];

export const BlankPageStage2 = ({ onContinue }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className="rounded-[20px] p-6 animate-in fade-in slide-in-from-bottom-3 duration-500"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: "2px solid #34D399",
        backdropFilter: "blur(20px)",
      }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>Stage 2</p>
      <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk'" }}>
        {t("bp.stage2Title")}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className="text-[11px] font-semibold px-3 py-1 rounded-full"
            style={{ background: "rgba(0,200,255,0.12)", color: tag.color, border: "1px solid rgba(0,200,255,0.2)" }}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap gap-4 mb-3">
        {stats.map((s) => (
          <div key={s.key}>
            <span className="text-[10px] uppercase tracking-wider" style={{ color: "#6B7280" }}>{s.key}</span>
            <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Space Grotesk'" }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Refs */}
      <div className="mb-5">
        <span className="text-[10px] uppercase tracking-wider" style={{ color: "#6B7280" }}>References</span>
        <div className="flex gap-2 mt-1">
          {refs.map((r) => (
            <span key={r} className="text-[11px] px-2.5 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8B8FA8" }}>
              {r}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onContinue}
        className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all active:scale-[0.97]"
        style={{ background: "linear-gradient(135deg, #00C8FF, #00C8FF)" }}
      >
        {t("bp.generateBlueprint")}
      </button>
    </div>
  );
};
