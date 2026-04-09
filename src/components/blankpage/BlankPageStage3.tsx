import { useState } from "react";

const sections = [
  { time: "0:00", label: "Intro", bars: "16 bars", tip: "Ambient drone + filtered kick. Build tension with a slow LP filter sweep. No melodic elements yet." },
  { time: "0:32", label: "Layer 1", bars: "16 bars", tip: "Introduce hi-hats and a subtle acid line. Keep it minimal — one new element every 4 bars." },
  { time: "1:04", label: "Breakdown", bars: "16 bars", tip: "Pull the kick out. Add a reverb tail to the last hit. White noise riser + automation for tension." },
  { time: "1:36", label: "Drop", bars: "48 bars", tip: "Full energy. Kick + bass + leads + percussion. This is the peak. Subtle variations every 8 bars." },
  { time: "3:12", label: "Outro", bars: "16 bars", tip: "Mirror the intro. Remove elements gradually. End with the same drone you started with." },
];

export const BlankPageStage3 = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div
      className="rounded-[20px] p-6 animate-in fade-in slide-in-from-bottom-3 duration-500"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>Stage 3</p>
      <h3 className="text-lg font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Blueprint Timeline</h3>

      {/* Timeline */}
      <div className="relative flex items-start gap-0 overflow-x-auto pb-4">
        {sections.map((s, i) => (
          <div key={s.label} className="flex items-start flex-shrink-0" style={{ minWidth: 100 }}>
            {/* Node */}
            <div className="flex flex-col items-center relative">
              <button
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-200 active:scale-[0.9] z-10"
                style={{
                  background: activeIdx === i ? "linear-gradient(135deg, #00C8FF, #34D399)" : "rgba(255,255,255,0.06)",
                  border: `2px solid ${activeIdx === i ? "#34D399" : "rgba(255,255,255,0.12)"}`,
                  color: activeIdx === i ? "#FFFFFF" : "#8B8FA8",
                  boxShadow: activeIdx === i ? "0 0 16px rgba(0,200,255,0.3)" : "none",
                }}
              >
                {i + 1}
              </button>
              <span className="text-[10px] font-semibold mt-1.5" style={{ color: "#FFFFFF", fontFamily: "'Space Grotesk'" }}>{s.label}</span>
              <span className="text-[9px]" style={{ color: "#6B7280" }}>{s.time}</span>

              {/* Popover */}
              {activeIdx === i && (
                <div
                  className="absolute top-14 left-1/2 -translate-x-1/2 w-52 rounded-[14px] p-3 z-20 animate-in fade-in scale-in duration-200"
                  style={{ background: "rgba(15,15,24,0.95)", border: "1px solid rgba(0,200,255,0.3)", backdropFilter: "blur(20px)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
                >
                  <p className="text-[10px] font-semibold mb-1" style={{ color: "#34D399" }}>{s.bars}</p>
                  <p className="text-[11px] leading-relaxed" style={{ color: "#8B8FA8" }}>{s.tip}</p>
                </div>
              )}
            </div>

            {/* Connecting line */}
            {i < sections.length - 1 && (
              <div className="flex-1 h-[2px] mt-4 mx-1 rounded-full" style={{ background: `linear-gradient(90deg, #00C8FF, #34D399)`, minWidth: 40, opacity: 0.4 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
