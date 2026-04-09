import { useState, useCallback } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const ROWS = 4; // kick, snare, hat-closed, hat-open
const COLS = 16;
const labels = ["Kick", "Snare", "CH", "OH"];

const presets: Record<string, boolean[][]> = {
  techno: [
    [true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false],
    [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false],
    [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false],
  ],
  trap: [
    [true,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false],
    [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false],
    [true,false,true,true,false,true,true,false,true,false,true,true,false,true,true,false],
    [false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],
  ],
};

const emptyGrid = () => Array.from({ length: ROWS }, () => Array(COLS).fill(false));

export const GrooveBuilder = () => {
  const { t } = useTranslation();
  const [genre, setGenre] = useState<"techno" | "trap">("techno");
  const [grid, setGrid] = useState<boolean[][]>(presets.techno);

  const toggleDot = useCallback((row: number, col: number) => {
    setGrid((prev) => prev.map((r, ri) => ri === row ? r.map((c, ci) => ci === col ? !c : c) : r));
  }, []);

  const selectGenre = (g: "techno" | "trap") => {
    setGenre(g);
    setGrid(presets[g] || emptyGrid());
  };

  return (
    <div
      className="rounded-[20px] p-5 h-full"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}
    >
      <h3 className="text-sm font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk'" }}>
        🥁 {t("bp.grooveTitle")}
      </h3>

      {/* Genre pills */}
      <div className="flex gap-2 mb-4">
        {(["techno", "trap"] as const).map((g) => (
          <button
            key={g}
            onClick={() => selectGenre(g)}
            className="px-3 py-1.5 rounded-lg text-[11px] font-semibold capitalize transition-all active:scale-[0.95]"
            style={{
              background: g === genre ? "rgba(0,200,255,0.2)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${g === genre ? "rgba(0,200,255,0.5)" : "rgba(255,255,255,0.08)"}`,
              color: g === genre ? "#00C8FF" : "#8B8FA8",
            }}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Dot grid */}
      <div className="space-y-1.5">
        {grid.map((row, ri) => (
          <div key={ri} className="flex items-center gap-1.5">
            <span className="text-[9px] font-semibold w-8 text-right flex-shrink-0" style={{ color: "#6B7280" }}>
              {labels[ri]}
            </span>
            <div className="flex gap-[3px]">
              {row.map((active, ci) => (
                <button
                  key={ci}
                  onClick={() => toggleDot(ri, ci)}
                  className="w-4 h-4 rounded-[3px] transition-all duration-100 active:scale-[0.85]"
                  style={{
                    background: active
                      ? "linear-gradient(135deg, #00C8FF, #34D399)"
                      : "rgba(255,255,255,0.08)",
                    boxShadow: active ? "0 0 6px rgba(0,200,255,0.3)" : "none",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Beat markers */}
      <div className="flex items-center gap-[3px] mt-2 ml-[38px] pl-[6px]">
        {Array.from({ length: COLS }).map((_, i) => (
          <span key={i} className="w-4 text-center text-[7px]" style={{ color: i % 4 === 0 ? "#6B7280" : "transparent" }}>
            {i % 4 === 0 ? i / 4 + 1 : "·"}
          </span>
        ))}
      </div>
    </div>
  );
};
