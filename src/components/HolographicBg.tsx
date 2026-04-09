export const HolographicMesh = () => (
  <div
    className="fixed inset-0 pointer-events-none"
    style={{ zIndex: 0 }}
    aria-hidden="true"
  >
    {/* Layer 1 — Static holographic mesh */}
    <div
      className="absolute inset-0"
      style={{
        background: [
          "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(0,200,255,0.20) 0%, transparent 60%)",
          "radial-gradient(ellipse 60% 80% at 80% 80%, rgba(52,211,153,0.12) 0%, transparent 60%)",
          "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(167,139,250,0.08) 0%, transparent 70%)",
          "radial-gradient(ellipse 40% 60% at 70% 20%, rgba(99,102,241,0.10) 0%, transparent 50%)",
          "radial-gradient(ellipse 50% 40% at 30% 80%, rgba(16,185,129,0.08) 0%, transparent 50%)",
        ].join(", "),
      }}
    />
    {/* Layer 2 — Moving holographic shimmer */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(105deg, transparent 20%, rgba(0,200,255,0.04) 30%, rgba(52,211,153,0.06) 40%, rgba(167,139,250,0.04) 50%, rgba(99,102,241,0.03) 60%, transparent 70%)",
        backgroundSize: "200% 200%",
        animation: "holoShimmer 8s ease-in-out infinite",
      }}
    />
  </div>
);

export const HoloDotGrid = () => (
  <div
    className="fixed inset-0 pointer-events-none"
    style={{ zIndex: 0 }}
    aria-hidden="true"
  >
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  </div>
);

export const StaticGrain = () => (
  <div
    className="fixed inset-0 pointer-events-none"
    style={{ zIndex: 51, opacity: 0.025 }}
    aria-hidden="true"
  >
    <svg width="100%" height="100%" style={{ display: "block" }}>
      <filter id="static-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves={3} stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#static-grain)" />
    </svg>
  </div>
);
