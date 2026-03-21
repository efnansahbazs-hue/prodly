const widgetCard = "backdrop-blur-[20px] rounded-[16px] p-3 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]";
const shadow = "0 8px 32px rgba(0,0,0,0.4)";

const AnswerWidget = () => (
  <div className={widgetCard} style={{ width: 240, boxShadow: shadow }}>
    <p className="text-[10px] mb-2" style={{ color: "#6B7280" }}>Latest answer</p>
    <div className="rounded-lg px-2.5 py-1.5 mb-1.5 text-[11px]" style={{ background: "rgba(124,58,237,0.12)", color: "#A78BFA" }}>
      Why does my kick sound muddy?
    </div>
    <div className="rounded-lg px-2.5 py-1.5 text-[11px] leading-snug border-l-2" style={{ borderColor: "#34D399", color: "#8B8FA8" }}>
      Classic. HPF at 60Hz, cut 300Hz.
    </div>
    <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-medium" style={{ color: "#34D399" }}>🟢 Sound On Sound</span>
  </div>
);

const StreakWidget = () => (
  <div className={widgetCard} style={{ width: 140, boxShadow: shadow }}>
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

const TechniqueWidget = () => (
  <div className={widgetCard} style={{ width: 180, boxShadow: shadow }}>
    <span className="inline-block text-[9px] font-semibold rounded-full px-2 py-0.5 mb-2" style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA" }}>
      Today's technique
    </span>
    <p className="text-[12px] font-semibold text-white mb-1">Parallel Compression</p>
    <p className="text-[10px] leading-snug" style={{ color: "#6B7280" }}>
      Blend dry & compressed signals for punchy yet dynamic mixes.
    </p>
  </div>
);

const LevelWidget = () => (
  <div className={widgetCard} style={{ width: 160, boxShadow: shadow }}>
    <p className="text-[10px] mb-1.5" style={{ color: "#6B7280" }}>Your level</p>
    <p className="text-[12px] font-semibold mb-0.5" style={{ color: "#A78BFA", fontFamily: "'Space Grotesk'" }}>Beat Architect</p>
    <p className="text-[10px] mb-2" style={{ color: "#8B8FA8" }}>1,240 / 2,000 EXP</p>
    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
      <div className="h-full rounded-full" style={{ width: "62%", background: "linear-gradient(90deg, #7C3AED, #34D399)" }} />
    </div>
  </div>
);

const ChallengeWidget = () => (
  <div className={widgetCard} style={{ width: 170, boxShadow: shadow }}>
    <p className="text-[10px] mb-1.5" style={{ color: "#6B7280" }}>This week</p>
    <p className="text-[11px] font-semibold mb-1" style={{ color: "#34D399" }}>⏱ 3d 14h left</p>
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

export const HeroWidgets = () => (
  <div className="absolute inset-0">
    {/* Atmospheric glow blobs */}
    <div className="absolute pointer-events-none" style={{ width: 600, height: 600, top: "5%", left: "-5%", background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)", filter: "blur(100px)", animation: "floatDrift 14s ease-in-out infinite" }} />
    <div className="absolute pointer-events-none" style={{ width: 500, height: 500, bottom: "5%", right: "-3%", background: "radial-gradient(circle, rgba(52,211,153,0.18), transparent 70%)", filter: "blur(80px)", animation: "floatDrift 16s ease-in-out infinite 3s" }} />
    <div className="absolute pointer-events-none" style={{ width: 400, height: 400, top: "15%", right: "10%", background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)", filter: "blur(80px)", animation: "floatDrift 12s ease-in-out infinite 6s" }} />
    <div className="absolute pointer-events-none" style={{ width: 300, height: 300, top: "10%", right: "25%", background: "radial-gradient(circle, rgba(52,211,153,0.10), transparent 70%)", filter: "blur(70px)", animation: "floatDrift 13s ease-in-out infinite 2s" }} />

    {/* Scattered ghost widgets */}
    <div className="hidden md:block">
      {/* Top-center */}
      <div className="absolute" style={{ top: "6%", left: "50%", transform: "translateX(-50%)", animation: "ghostFade1 4s ease-in-out infinite, floatDrift 8s ease-in-out infinite" }}>
        <AnswerWidget />
      </div>
      {/* Far left top */}
      <div className="absolute" style={{ top: "28%", left: "2%", animation: "ghostFade2 6s ease-in-out infinite, floatDrift 9s ease-in-out infinite 1s" }}>
        <StreakWidget />
      </div>
      {/* Far left bottom */}
      <div className="absolute" style={{ top: "62%", left: "3%", animation: "ghostFade3 5s ease-in-out infinite, floatDrift 7s ease-in-out infinite 2s" }}>
        <LevelWidget />
      </div>
      {/* Far right top */}
      <div className="absolute" style={{ top: "24%", right: "2%", animation: "ghostFade4 7s ease-in-out infinite, floatDrift 10s ease-in-out infinite 0.5s" }}>
        <TechniqueWidget />
      </div>
      {/* Far right bottom */}
      <div className="absolute" style={{ top: "60%", right: "2%", animation: "ghostFade5 4.5s ease-in-out infinite, floatDrift 8.5s ease-in-out infinite 1.5s" }}>
        <ChallengeWidget />
      </div>
    </div>
  </div>
);
