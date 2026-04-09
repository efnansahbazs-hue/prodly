import { X, Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const benefits = [
  "upgrade.benefit1",
  "upgrade.benefit2",
  "upgrade.benefit3",
  "upgrade.benefit4",
];

interface Props {
  onClose: () => void;
}

export const UpgradeModal = ({ onClose }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-5 animate-fade-in"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-sm rounded-[20px] p-7"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6B7280] hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-5">
          <div
            className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-lg"
            style={{ background: "linear-gradient(135deg, #00C8FF, #34D399)", boxShadow: "0 0 20px rgba(0,200,255,0.4)" }}
          >
            🎛️
          </div>
          <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("upgrade.title")}
          </h3>
          <p className="text-sm mt-1" style={{ color: "#8B8FA8" }}>
            {t("upgrade.subtitle")}
          </p>
        </div>

        <ul className="space-y-2.5 mb-6">
          {benefits.map((key) => (
            <li key={key} className="flex items-center gap-2.5 text-sm" style={{ color: "#8B8FA8" }}>
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#34D399" }} />
              {t(key)}
            </li>
          ))}
        </ul>

        <div className="text-center mb-4">
          <span className="text-3xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk'" }}>$19</span>
          <span className="text-sm" style={{ color: "#6B7280" }}>/mo</span>
        </div>

        <div
          className="rounded-full p-[2px] animate-move-border mb-3"
          style={{ background: "linear-gradient(135deg, #00C8FF, #34D399, #00C8FF)", backgroundSize: "200% 200%" }}
        >
          <button
            className="w-full rounded-full py-3 text-sm font-semibold text-white transition-transform active:scale-[0.97]"
            style={{ background: "#00C8FF" }}
          >
            {t("upgrade.cta")}
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full text-center text-xs transition-opacity hover:opacity-80"
          style={{ color: "#6B7280" }}
        >
          {t("upgrade.later")}
        </button>
      </div>
    </div>
  );
};
