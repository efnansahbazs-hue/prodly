import { useTranslation } from "@/hooks/useTranslation";

interface Props {
  annual: boolean;
  onToggle: () => void;
}

export const PricingToggle = ({ annual, onToggle }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-sm" style={{ color: annual ? "#6B7280" : "#FFFFFF" }}>{t("price.monthly")}</span>
      <button
        onClick={onToggle}
        className="relative w-12 h-6 rounded-full transition-colors duration-300"
        style={{ background: annual ? "#00C8FF" : "rgba(255,255,255,0.12)" }}
      >
        <span
          className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300"
          style={{ left: annual ? 26 : 2 }}
        />
      </button>
      <span className="text-sm" style={{ color: annual ? "#FFFFFF" : "#6B7280" }}>{t("price.annual")}</span>
    </div>
  );
};
