export const AuroraMesh = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
    <div
      className="absolute rounded-full"
      style={{
        width: 700,
        height: 700,
        top: "-5%",
        left: "-5%",
        background: "rgba(124,58,237,0.35)",
        filter: "blur(120px)",
        mixBlendMode: "screen",
        animation: "auroraOrb1 16s ease-in-out infinite alternate",
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: 800,
        height: 800,
        bottom: "-10%",
        right: "-10%",
        background: "rgba(52,211,153,0.20)",
        filter: "blur(120px)",
        mixBlendMode: "screen",
        animation: "auroraOrb2 20s ease-in-out infinite alternate",
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: 650,
        height: 650,
        top: "20%",
        right: "5%",
        background: "rgba(167,139,250,0.18)",
        filter: "blur(120px)",
        mixBlendMode: "screen",
        animation: "auroraOrb3 14s ease-in-out infinite alternate",
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: 600,
        height: 600,
        bottom: "5%",
        left: "-5%",
        background: "rgba(16,185,129,0.12)",
        filter: "blur(120px)",
        mixBlendMode: "screen",
        animation: "auroraOrb4 18s ease-in-out infinite alternate",
      }}
    />
  </div>
);

export const GrainOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none"
    style={{ zIndex: 51, opacity: 0.06, animation: "grain 0.5s steps(1) infinite" }}
    aria-hidden="true"
  >
    <svg width="100%" height="100%" style={{ display: "block" }}>
      <filter id="grain-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves={3} stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-filter)" />
    </svg>
  </div>
);
