import { useState } from "react";
import { Check, X } from "lucide-react";
import { validatePromoCode, applyPromoCode } from "@/lib/promoCodes";
import { useTranslation } from "@/hooks/useTranslation";

interface Props {
  onApplied?: (code: string, description: string) => void;
}

export const PromoCodeInput = ({ onApplied }: Props) => {
  const { t, lang } = useTranslation();
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const [message, setMessage] = useState("");

  const handleApply = () => {
    if (!code.trim()) return;
    const result = validatePromoCode(code);
    if (result.valid && result.promo) {
      applyPromoCode(result.promo.code);
      const desc = result.promo.description[lang] || result.promo.description.en;
      setStatus("valid");
      setMessage(desc);
      onApplied?.(result.promo.code, desc);
    } else {
      setStatus("invalid");
      setMessage(t("promo.invalid"));
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={code}
            onChange={(e) => { setCode(e.target.value.toUpperCase()); setStatus("idle"); }}
            onKeyDown={(e) => e.key === "Enter" && handleApply()}
            placeholder={t("promo.placeholder")}
            className="w-full h-10 px-4 text-sm text-white rounded-xl outline-none transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${status === "valid" ? "rgba(52,211,153,0.5)" : status === "invalid" ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"}`,
              backdropFilter: "blur(20px)",
              fontFamily: "'Space Grotesk'",
              letterSpacing: "0.05em",
            }}
          />
        </div>
        <button
          onClick={handleApply}
          className="h-10 px-5 text-sm font-semibold text-white rounded-xl transition-all duration-200 active:scale-[0.97]"
          style={{
            background: "rgba(0,200,255,0.2)",
            border: "1px solid rgba(0,200,255,0.4)",
            fontFamily: "'Space Grotesk'",
          }}
        >
          {t("promo.apply")}
        </button>
      </div>

      {status !== "idle" && (
        <div
          className="flex items-center gap-2 mt-2 text-xs px-1 animate-in fade-in slide-in-from-top-1 duration-200"
          style={{ color: status === "valid" ? "#34D399" : "#EF4444" }}
        >
          {status === "valid" ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
          <span>{status === "valid" ? `${t("promo.applied")} ${message}` : message}</span>
        </div>
      )}
    </div>
  );
};
