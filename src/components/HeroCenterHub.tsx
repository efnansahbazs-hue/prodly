/** Static center hub — dark circle with glow blobs behind */
export const HeroCenterHub = () => (
  <div className="relative flex items-center justify-center" style={{ width: 280, height: 280 }}>
    {/* Purple glow */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: 400, height: 400,
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)",
        filter: "blur(60px)",
        zIndex: -1,
      }}
    />
    {/* Mint glow */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: 300, height: 300,
        top: "60%", left: "60%",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(52,211,153,0.08), transparent 70%)",
        filter: "blur(50px)",
        zIndex: -1,
      }}
    />
    {/* Circle */}
    <div
      className="w-full h-full rounded-full flex flex-col items-center justify-center gap-1.5"
      style={{ background: "#0F0F18", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ background: "linear-gradient(135deg, #7C3AED, #34D399)", boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
      >
        🎛️
      </div>
      <span className="text-sm font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>Prodly</span>
      <span className="flex items-center gap-1.5">
        <span className="w-[5px] h-[5px] rounded-full bg-[#34D399] animate-pulse-dot" />
        <span className="text-[11px] font-medium" style={{ color: "#34D399" }}>Online</span>
      </span>
      <span className="text-[9px]" style={{ color: "#6B7280" }}>your studio buddy</span>
    </div>
  </div>
);
