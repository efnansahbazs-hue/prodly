/** Orbital hub — simple dark circle with glow blobs behind */
export const OrbitalHub = () => (
  <div className="relative w-[220px] h-[220px] mx-auto">
    {/* Glow blob 1 — purple pulse */}
    <div
      className="absolute rounded-full animate-[pulse_6s_ease-in-out_infinite]"
      style={{
        width: 400,
        height: 400,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)",
        filter: "blur(60px)",
      }}
    />
    {/* Glow blob 2 — mint pulse */}
    <div
      className="absolute rounded-full animate-[pulse_8s_ease-in-out_infinite_1s]"
      style={{
        width: 300,
        height: 300,
        top: "50%",
        left: "60%",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(52,211,153,0.08), transparent 70%)",
        filter: "blur(50px)",
      }}
    />
    {/* Dark circle */}
    <div
      className="absolute inset-0 rounded-full flex flex-col items-center justify-center gap-1.5"
      style={{
        background: "rgba(255,255,255,0.03)",
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
