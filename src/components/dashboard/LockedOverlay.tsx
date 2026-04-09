import { useState } from "react";
import { Lock } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { UpgradeModal } from "@/components/UpgradeModal";

interface LockedOverlayProps {
  label: string;
  plan: string;
  children: React.ReactNode;
}

export const LockedOverlay = ({ label, plan, children }: LockedOverlayProps) => {
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <div className="relative">
      <div style={{ filter: "blur(6px)", pointerEvents: "none", userSelect: "none" }}>
        {children}
      </div>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl"
        style={{ background: "rgba(10,10,15,0.6)", backdropFilter: "blur(2px)" }}
      >
        <Lock size={18} className="mb-2" style={{ color: "#8B8FA8" }} />
        <p className="text-[12px] font-medium text-center text-white/80 mb-2 px-4">{label}</p>
        <button
          onClick={() => setShowUpgrade(true)}
          className="text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all active:scale-95"
          style={{
            background: "rgba(0,200,255,0.2)",
            border: "1px solid rgba(0,200,255,0.4)",
            color: "#00C8FF",
          }}
        >
          {plan === "studio" ? "Studio'ya geç →" : "Premium'a geç →"}
        </button>
      </div>
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}
    </div>
  );
};
