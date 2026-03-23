import { useTranslation } from "@/hooks/useTranslation";

interface Props {
  onSelect: (q: string) => void;
}

export const DemoQuickChips = ({ onSelect }: Props) => {
  const { t } = useTranslation();
  const chips = [t("demo.chip1"), t("demo.chip2"), t("demo.chip3")];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {chips.map((chip) => (
        <button
          key={chip}
          onClick={() => onSelect(chip)}
          className="px-3.5 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#8B8FA8",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
        >
          {chip}
        </button>
      ))}
    </div>
  );
};
