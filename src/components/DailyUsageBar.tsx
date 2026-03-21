import { useTranslation } from "@/hooks/useTranslation";

interface DailyUsageBarProps {
  used: number;
  max: number;
  onUpgrade?: () => void;
}

export const DailyUsageBar = ({ used, max, onUpgrade }: DailyUsageBarProps) => {
  const { t } = useTranslation();
  const pct = Math.min((used / max) * 100, 100);
  const isWarning = pct >= 80 && pct < 100;
  const isExhausted = pct >= 100;

  const barBg = isExhausted
    ? "linear-gradient(90deg, #EF4444, #DC2626)"
    : isWarning
    ? "linear-gradient(90deg, #7C3AED, #F59E0B)"
    : "linear-gradient(90deg, #7C3AED, #34D399)";

  return (
    <div className="glass-card-static px-4 py-3 flex items-center gap-3">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium" style={{ color: "#8B8FA8" }}>
            {used} / {max} {t("usage.questionsToday")}
          </span>
          {isExhausted && onUpgrade && (
            <button
              onClick={onUpgrade}
              className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full transition-colors"
              style={{ color: "#34D399", border: "1px solid rgba(52,211,153,0.3)" }}
            >
              {t("upgrade.seePremium")}
            </button>
          )}
        </div>
        <div
          className="w-full h-1.5 rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${pct}%`, background: barBg }}
          />
        </div>
      </div>
    </div>
  );
};
