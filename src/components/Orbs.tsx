export const Orbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div
      className="absolute -top-40 -left-40 animate-float"
      style={{
        width: 480,
        height: 480,
        background: "radial-gradient(circle, rgba(124,58,237,0.16), transparent 70%)",
      }}
    />
    <div
      className="absolute top-1/3 -right-32 animate-float"
      style={{
        width: 360,
        height: 360,
        background: "radial-gradient(circle, rgba(52,211,153,0.10), transparent 70%)",
        animationDelay: "2s",
      }}
    />
    <div
      className="absolute bottom-20 left-1/3 animate-float"
      style={{
        width: 420,
        height: 420,
        background: "radial-gradient(circle, rgba(124,58,237,0.07), transparent 70%)",
        animationDelay: "4s",
      }}
    />
  </div>
);
