import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const keys = ["C", "D", "E", "F", "G", "A", "B"];
const moods = ["Dark", "Melancholy", "Euphoric", "Chill"];

const progressions: Record<string, { name: string; chords: string }[]> = {
  "D-Dark": [
    { name: "Classic Minor", chords: "Dm → Am → Bb → Gm" },
    { name: "Phrygian Tension", chords: "Dm → Eb → C → Dm" },
    { name: "Dorian Groove", chords: "Dm → G → Am → Dm" },
  ],
  default: [
    { name: "Natural Minor", chords: "i → VI → III → VII" },
    { name: "Harmonic Minor", chords: "i → iv → V → i" },
    { name: "Modal Mix", chords: "i → bVII → bVI → V" },
  ],
};

export const ChordStarter = () => {
  const { t } = useTranslation();
  const [key, setKey] = useState("D");
  const [mood, setMood] = useState("Dark");

  const progs = progressions[`${key}-${mood}`] || progressions.default;

  return (
    <div
      className="rounded-[20px] p-5 h-full"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}
    >
      <h3 className="text-sm font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk'" }}>
        🎹 {t("bp.chordTitle")}
      </h3>

      {/* Key selector */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {keys.map((k) => (
          <button
            key={k}
            onClick={() => setKey(k)}
            className="w-8 h-8 rounded-lg text-[12px] font-semibold transition-all active:scale-[0.95]"
            style={{
              background: k === key ? "rgba(0,200,255,0.2)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${k === key ? "rgba(0,200,255,0.5)" : "rgba(255,255,255,0.08)"}`,
              color: k === key ? "#00C8FF" : "#8B8FA8",
            }}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Mood */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {moods.map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            className="px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all active:scale-[0.95]"
            style={{
              background: m === mood ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${m === mood ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.08)"}`,
              color: m === mood ? "#34D399" : "#8B8FA8",
            }}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Progressions */}
      <div className="space-y-2 mb-4">
        {progs.map((p) => (
          <div key={p.name} className="rounded-xl px-3 py-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[10px] mb-0.5" style={{ color: "#6B7280" }}>{p.name}</p>
            <p className="text-sm font-mono" style={{ color: "#00C8FF" }}>{p.chords}</p>
          </div>
        ))}
      </div>

      <p className="text-[10px]" style={{ color: "#6B7280" }}>
        Scale: {key} natural minor — {key} {mood === "Dark" ? "Phrygian available" : "Aeolian / Dorian"}
      </p>
    </div>
  );
};
