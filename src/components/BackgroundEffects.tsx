export const NoiseOverlay = () => (
  <svg className="noise-overlay" width="100%" height="100%">
    <filter id="n">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={4} stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#n)" />
  </svg>
);

export const DotGrid = () => (
  <div className="fixed inset-0 pointer-events-none grid-dot-bg" aria-hidden="true" />
);

export const Orbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div
      className="absolute -top-48 -left-48"
      style={{
        width: 480, height: 480,
        background: "radial-gradient(circle, rgba(0,200,255,0.16), transparent 70%)",
        filter: "blur(120px)",
      }}
    />
    <div
      className="absolute top-20 -right-32 animate-float-orb"
      style={{
        width: 360, height: 360,
        background: "radial-gradient(circle, rgba(52,211,153,0.10), transparent 70%)",
        filter: "blur(120px)",
      }}
    />
    <div
      className="absolute -bottom-32 left-1/3 animate-float-orb-reverse"
      style={{
        width: 420, height: 420,
        background: "radial-gradient(circle, rgba(0,200,255,0.07), transparent 70%)",
        filter: "blur(120px)",
      }}
    />
  </div>
);

export const GhostText = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
    <span className="ghost-text">PRODLY</span>
  </div>
);
