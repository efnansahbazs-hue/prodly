/** Orbital hub — spinning conic rings with Prodly face center */
export const OrbitalHub = () => (
  <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] mx-auto">
    {/* Outer slow ring */}
    <div
      className="absolute rounded-full animate-spin-ring-slow"
      style={{
        inset: -22,
        border: "1px solid transparent",
        background:
          "linear-gradient(#0A0A0F, #0A0A0F) padding-box, conic-gradient(from 90deg, rgba(124,58,237,0.15), rgba(52,211,153,0.15), rgba(124,58,237,0.15)) border-box",
        filter: "blur(2px)",
      }}
    />
    {/* Main gradient ring */}
    <div
      className="absolute rounded-full animate-spin-ring"
      style={{
        inset: -10,
        border: "2px solid transparent",
        background:
          "linear-gradient(#0A0A0F, #0A0A0F) padding-box, conic-gradient(from 0deg, #7C3AED, #9333EA, #34D399, #10B981, #7C3AED) border-box",
      }}
    />
    {/* Glow behind ring */}
    <div
      className="absolute rounded-full animate-spin-ring"
      style={{
        inset: -4,
        border: "6px solid transparent",
        background:
          "linear-gradient(#0A0A0F, #0A0A0F) padding-box, conic-gradient(from 180deg, #7C3AED, #34D399, #7C3AED) border-box",
        filter: "blur(8px)",
        animationDirection: "reverse",
      }}
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
