/** Five floating glass widgets positioned around the orbital hub */
const widgetBase = "backdrop-blur-[20px] rounded-[14px] p-3"
  + " border border-[rgba(255,255,255,0.08)]"
  + " bg-[rgba(255,255,255,0.04)]";

const shadow = "0 8px 32px rgba(0,0,0,0.4)";

const W1_Answer = () => (
  <div className={widgetBase} style={{ width: 200, boxShadow: shadow, animation: "floatDrift 5s ease-in-out infinite" }}>
    <p className="text-[10px] mb-2" style={{ color: "#6B7280" }}>Latest answer</p>
    <div className="rounded-lg px-2.5 py-1.5 mb-1.5 text-[11px]" style={{ background: "rgba(124,58,237,0.12)", color: "#A78BFA" }}>
      Why does my kick sound muddy?
    </div>
    <div className="rounded-lg px-2.5 py-1.5 text-[11px] leading-snug border-l-2" style={{ borderColor: "#34D399", color: "#8B8FA8" }}>
      Classic. HPF at 60Hz, cut 300Hz. Check bass masking.
    </div>
    <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-medium" style={{ color: "#34D399" }}>
      🟢 Sound On Sound
    </span>
  </div>
);

const W2_Streak = () => (
  <div className={widgetBase} style={{ width: 130, boxShadow: shadow, animation: "floatDrift 7s ease-in-out infinite 0.5s" }}>
    <p className="text-[10px] mb-1.5" style={{ color: "#6B7280" }}>Streak</p>
    <p className="text-base font-bold" style={{ color: "#34D399", fontFamily: "'Space Grotesk'" }}>23 🔥</p>
    <p className="text-[10px] mb-2" style={{ color: "#8B8FA8" }}>days in a row</p>
    <div className="flex gap-1">
      {[1,2,3,4,5,6,7].map(i => (
        <span key={i} className="w-2 h-2 rounded-full" style={{ background: i <= 5 ? "linear-gradient(135deg, #7C3AED, #34D399)" : "rgba(255,255,255,0.08)" }} />
      ))}
    </div>
  </div>
);

const W3_Challenge = () => (
  <div className={widgetBase} style={{ width: 145, boxShadow: shadow, animation: "floatDrift 6s ease-in-out infinite 1s" }}>
    <p className="text-[10px] mb-1.5" style={{ color: "#6B7280" }}>This week</p>
    <p className="text-[11px] font-semibold mb-1" style={{ color: "#F59E0B" }}>⏱ 3d 14h left</p>
    <p className="text-[11px] font-medium text-white mb-0.5">Sidechain Master</p>
    <p className="text-[10px] mb-2" style={{ color: "#34D399" }}>Win 1 month Studio free</p>
    <div className="flex items-center">
      {[0,1,2,3].map(i => (
        <div key={i} className="w-4 h-4 rounded-full border-[1.5px] -ml-1 first:ml-0" style={{ borderColor: "#0A0A0F", background: `hsl(${260 + i * 30}, 60%, ${50 + i * 5}%)` }} />
      ))}
      <span className="text-[9px] ml-1.5" style={{ color: "#6B7280" }}>+47 entered</span>
    </div>
  </div>
);

const W4_Level = () => (
  <div className={widgetBase} style={{ width: 140, boxShadow: shadow, animation: "floatDrift 8s ease-in-out infinite 0.3s" }}>
    <p className="text-[10px] mb-1.5" style={{ color: "#6B7280" }}>Your level</p>
    <p className="text-[12px] font-semibold mb-0.5" style={{ color: "#A78BFA", fontFamily: "'Space Grotesk'" }}>Beat Architect</p>
    <p className="text-[10px] mb-2" style={{ color: "#8B8FA8" }}>1,240 / 2,000 EXP</p>
    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
      <div className="h-full rounded-full" style={{ width: "62%", background: "linear-gradient(90deg, #7C3AED, #34D399)" }} />
    </div>
  </div>
);

const W5_Technique = () => (
  <div className={widgetBase} style={{ width: 155, boxShadow: shadow, animation: "floatDrift 5.5s ease-in-out infinite 1.5s" }}>
    <span className="inline-block text-[9px] font-semibold rounded-full px-2 py-0.5 mb-2" style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA" }}>
      Today's technique
    </span>
    <p className="text-[12px] font-semibold text-white mb-1">Parallel Compression</p>
    <p className="text-[10px] leading-snug" style={{ color: "#6B7280" }}>
      Blend dry & compressed signals for punchy yet dynamic mixes.
    </p>
  </div>
);

/** Background glow blobs for the hero orbital area */
export const HeroGlowBlobs = () => (
  <>
    <div className="absolute pointer-events-none" style={{ width: 500, height: 500, top: -100, left: -150, background: "radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)", filter: "blur(80px)", animation: "floatDrift 12s ease-in-out infinite" }} />
    <div className="absolute pointer-events-none" style={{ width: 400, height: 400, bottom: -80, right: -120, background: "radial-gradient(circle, rgba(52,211,153,0.06), transparent 70%)", filter: "blur(80px)", animation: "floatDrift 14s ease-in-out infinite 2s" }} />
    <div className="absolute pointer-events-none" style={{ width: 350, height: 350, top: "30%", right: -60, background: "radial-gradient(circle, rgba(124,58,237,0.06), transparent 70%)", filter: "blur(80px)", animation: "floatDrift 10s ease-in-out infinite 1s" }} />
  </>
);

export const FloatingWidgets = () => (
  <>
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 hidden md:block"><W1_Answer /></div>
    <div className="absolute top-1/2 -translate-y-1/2 -left-[160px] z-10 hidden lg:block"><W2_Streak /></div>
    <div className="absolute top-1/2 -translate-y-1/2 -right-[175px] z-10 hidden lg:block"><W3_Challenge /></div>
    <div className="absolute -bottom-4 -left-[80px] z-10 hidden md:block"><W4_Level /></div>
    <div className="absolute -bottom-4 -right-[90px] z-10 hidden md:block"><W5_Technique /></div>
  </>
);
