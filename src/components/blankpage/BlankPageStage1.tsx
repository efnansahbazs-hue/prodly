import { useTranslation } from "@/hooks/useTranslation";

interface Props {
  active: boolean;
  onSelect: () => void;
}

const choices = [
  { labelKey: "bp.choice1", style: "primary" },
  { labelKey: "bp.choice2", style: "outline" },
  { labelKey: "bp.choice3", style: "text" },
] as const;

export const BlankPageStage1 = ({ active, onSelect }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className="rounded-[20px] p-6 text-center transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        opacity: active ? 1 : 0.5,
      }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>Stage 1</p>
      <h3 className="text-lg font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk'" }}>
        {t("bp.stage1Title")}
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {choices.map((c) => {
          if (c.style === "primary") {
            return (
              <div
                key={c.labelKey}
                className="rounded-full p-[2px] animate-move-border cursor-pointer"
                style={{ background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)", backgroundSize: "200% 200%" }}
                onClick={onSelect}
              >
                <button className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-transform active:scale-[0.97]" style={{ background: "#7C3AED" }}>
                  {t(c.labelKey)}
                </button>
              </div>
            );
          }
          if (c.style === "outline") {
            return (
              <button
                key={c.labelKey}
                onClick={onSelect}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-[0.97]"
                style={{ border: "1px solid rgba(124,58,237,0.4)", color: "#A78BFA", background: "transparent" }}
              >
                {t(c.labelKey)}
              </button>
            );
          }
          return (
            <button
              key={c.labelKey}
              onClick={onSelect}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-[0.97]"
              style={{ color: "#8B8FA8" }}
            >
              {t(c.labelKey)}
            </button>
          );
        })}
      </div>
    </div>
  );
};
