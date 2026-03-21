import { DAWS, techniques, type DAW } from "@/lib/techniquesData";

interface Props {
  daw: DAW;
  onDawChange: (daw: DAW) => void;
  completed: Set<string>;
}

export const TechniquesTopBar = ({ daw, onDawChange, completed }: Props) => {
  const total = techniques.length;
  const done = completed.size;
  const pct = total > 0 ? (done / total) * 100 : 0;

  return (
    <div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 py-4 border-b"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Progress */}
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-sm font-semibold text-white whitespace-nowrap" style={{ fontFamily: "'Space Grotesk'" }}>
          {done} / {total} techniques
        </span>
        <div className="w-32 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${pct}%`,
              background: pct >= 100 ? "#34D399" : "linear-gradient(90deg, #7C3AED, #A78BFA)",
            }}
          />
        </div>
      </div>

      {/* DAW selector */}
      <div className="flex gap-1.5 flex-wrap">
        {DAWS.map((d) => {
          const isActive = d.id === daw;
          return (
            <button
              key={d.id}
              onClick={() => onDawChange(d.id)}
              className="px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all duration-150 active:scale-[0.97]"
              style={{
                background: isActive ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${isActive ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.08)"}`,
                color: isActive ? "#34D399" : "#8B8FA8",
                fontFamily: "'Space Grotesk'",
              }}
            >
              {d.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
