import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { X, Pause, ArrowDown, LogOut, Check } from "lucide-react";

type Choice = "pause" | "downgrade" | "cancel" | null;

interface Props {
  open: boolean;
  onClose: () => void;
  currentPlan: "premium" | "studio";
  billingEnd: string; // e.g. "April 21, 2026"
}

export const CancelModal = ({ open, onClose, currentPlan, billingEnd }: Props) => {
  const { t } = useTranslation();
  const [choice, setChoice] = useState<Choice>(null);
  const [confirmed, setConfirmed] = useState(false);

  if (!open) return null;

  const handleConfirm = () => {
    if (!choice) return;
    setConfirmed(true);
  };

  const reset = () => {
    setChoice(null);
    setConfirmed(false);
    onClose();
  };

  const options: { key: Choice; icon: React.ReactNode; titleKey: string; descKey: string }[] = [
    {
      key: "pause",
      icon: <Pause className="w-4 h-4" />,
      titleKey: "cancel.pauseTitle",
      descKey: "cancel.pauseDesc",
    },
    {
      key: "downgrade",
      icon: <ArrowDown className="w-4 h-4" />,
      titleKey: "cancel.downgradeTitle",
      descKey: "cancel.downgradeDesc",
    },
    {
      key: "cancel",
      icon: <LogOut className="w-4 h-4" />,
      titleKey: "cancel.cancelTitle",
      descKey: "cancel.cancelDesc",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-5"
      style={{ background: "rgba(0,0,0,0.6)" }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-7 animate-fade-in-up"
        style={{ background: "#0F0F18", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {confirmed ? (
          /* ── Confirmation ── */
          <div className="text-center py-6">
            <div
              className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: "rgba(52,211,153,0.12)" }}
            >
              <Check className="w-6 h-6" style={{ color: "#34D399" }} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk'" }}>
              {t("cancel.confirmed")}
            </h3>
            <p className="text-sm" style={{ color: "#8B8FA8" }}>
              {t("cancel.accessUntil")} <span style={{ color: "#34D399" }}>{billingEnd}</span>
            </p>
            <button
              onClick={reset}
              className="mt-6 px-6 py-2 rounded-xl text-sm font-medium text-white transition-all active:scale-[0.97]"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {t("cancel.close")}
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
                {t("cancel.title")}
              </h3>
              <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/[0.06] transition-colors">
                <X className="w-4 h-4" style={{ color: "#8B8FA8" }} />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {options.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setChoice(opt.key)}
                  className="w-full text-left p-4 rounded-xl transition-all"
                  style={{
                    background: choice === opt.key ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${choice === opt.key ? "rgba(0,200,255,0.4)" : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: choice === opt.key ? "rgba(0,200,255,0.15)" : "rgba(255,255,255,0.04)",
                        color: choice === opt.key ? "#00C8FF" : "#8B8FA8",
                      }}
                    >
                      {opt.icon}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">{t(opt.titleKey)}</p>
                      <p className="text-[11px] mt-0.5" style={{ color: "#8B8FA8" }}>
                        {t(opt.descKey)}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Actions — Keep plan is primary, confirm is subtle */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #00C8FF, #34D399)",
                }}
              >
                {t("cancel.keepPlan")}
              </button>
              <button
                onClick={handleConfirm}
                disabled={!choice}
                className="py-2.5 px-5 rounded-xl text-sm font-medium transition-all active:scale-[0.97] disabled:opacity-30"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#8B8FA8",
                }}
              >
                {t("cancel.confirm")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
