import { HeroCenterHub } from "@/components/HeroCenterHub";

const widgetCard = "backdrop-blur-[20px] rounded-[16px] p-3 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]";

const AnswerWidget = () => (
  <div className={widgetCard} style={{ maxWidth: 400, width: "100%", animation: "floatDrift 5s ease-in-out infinite" }}>
    <p className="text-[10px] mb-2" style={{ color: "#6B7280" }}>Latest answer</p>
    <div className="rounded-lg px-2.5 py-1.5 mb-1.5 text-[11px]" style={{ background: "rgba(124,58,237,0.12)", color: "#A78BFA" }}>
      Why does my kick sound muddy?
    </div>
    <div className="rounded-lg px-2.5 py-1.5 text-[11px] leading-snug border-l-2" style={{ borderColor: "#34D399", color: "#8B8FA8" }}>
      Classic. HPF at 60Hz, cut 300Hz. Check bass masking.
    </div>
    <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-medium" style={{ color: "#34D399" }}>🟢 Sound On Sound</span>
  </div>
);

const StreakWidget = () => (
  <div className={widgetCard} style={{ width: 160, animation: "floatDrift 7s ease-in-out infinite 0.5s" }}>
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

const LevelWidget = () => (
  <div className={widgetCard} style={{ width: 180, animation: "floatDrift 8s ease-in-out infinite 0.3s" }}>
    <p className="text-[10px] mb-1.5" style={{ color: "#6B7280" }}>Your level</p>
    <p className="text-[12px] font-semibold mb-0.5" style={{ color: "#A78BFA", fontFamily: "'Space Grotesk'" }}>Beat Architect</p>
    <p className="text-[10px] mb-2" style={{ color: "#8B8FA8" }}>1,240 / 2,000 EXP</p>
    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
      <div className="h-full rounded-full" style={{ width: "62%", background: "linear-gradient(90deg, #7C3AED, #34D399)" }} />
    </div>
  </div>
);

const ChallengeWidget = () => (
  <div className={widgetCard} style={{ width: 170, animation: "floatDrift 6s ease-in-out infinite 1s" }}>
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

const TechniqueWidget = () => (
  <div className={widgetCard} style={{ width: 180, animation: "floatDrift 5.5s ease-in-out infinite 1.5s" }}>
    <span className="inline-block text-[9px] font-semibold rounded-full px-2 py-0.5 mb-2" style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA" }}>
      Today's technique
    </span>
    <p className="text-[12px] font-semibold text-white mb-1">Parallel Compression</p>
    <p className="text-[10px] leading-snug" style={{ color: "#6B7280" }}>
      Blend dry & compressed signals for punchy yet dynamic mixes.
    </p>
  </div>
);

export const HeroWidgets = () => (
  <div className="w-full max-w-4xl mx-auto">
    {/* Answer widget — centered above grid */}
    <div className="flex justify-center mb-6">
      <AnswerWidget />
    </div>

    {/* 3-column grid: desktop only; stack on mobile */}
    <div
      className="hidden lg:grid items-center"
      style={{ gridTemplateColumns: "1fr 280px 1fr", gap: 40 }}
    >
      {/* Left */}
      <div className="flex flex-col items-end gap-4">
        <StreakWidget />
        <LevelWidget />
      </div>

      {/* Center */}
      <HeroCenterHub />

      {/* Right */}
      <div className="flex flex-col items-start gap-4">
        <ChallengeWidget />
        <TechniqueWidget />
      </div>
    </div>

    {/* Mobile: just center hub */}
    <div className="lg:hidden flex justify-center">
      <HeroCenterHub />
    </div>
  </div>
);
