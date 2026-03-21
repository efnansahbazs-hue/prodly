/** Orbital hub — Lottie ring with Prodly face center */
import Lottie from "lottie-react";
import prodlyRing from "@/assets/prodly-ring.json";

export const OrbitalHub = () => (
  <div className="relative" style={{ width: 280, height: 280 }}>
    <Lottie
      animationData={prodlyRing}
      loop
      style={{ position: "absolute", inset: -30, width: 340, height: 340 }}
    />
    {/* Prodly face */}
    <div
      className="absolute inset-0 rounded-full flex flex-col items-center justify-center gap-1.5"
      style={{
        background: "#0A0A0F",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{
          background: "linear-gradient(135deg, #7C3AED, #34D399)",
          boxShadow: "0 0 20px rgba(124,58,237,0.4)",
        }}
      >
        🎛️
      </div>
      <span className="text-sm font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
        Prodly
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-[5px] h-[5px] rounded-full bg-[#34D399] animate-pulse-dot" />
        <span className="text-[11px] font-medium" style={{ color: "#34D399" }}>Online</span>
      </span>
      <span className="text-[9px]" style={{ color: "#6B7280" }}>your studio buddy</span>
    </div>
  </div>
);
