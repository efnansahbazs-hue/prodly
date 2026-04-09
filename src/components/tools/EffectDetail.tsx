import type { Effect } from "@/lib/effectsData";

interface Props {
  effect: Effect;
}

export const EffectDetail = ({ effect }: Props) => (
  <div className="space-y-5">
    {/* Header */}
    <div className="glass-card-static p-6 rounded-2xl">
      <h2
        className="text-xl font-bold text-white mb-3"
        style={{ fontFamily: "'Space Grotesk'" }}
      >
        {effect.name}
      </h2>
      <p className="text-sm leading-relaxed" style={{ color: "#8B8FA8" }}>
        {effect.what}
      </p>
    </div>

    {/* When to use */}
    <div className="glass-card-static p-5 rounded-2xl">
      <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#00C8FF" }}>
        When to use
      </h3>
      <ul className="space-y-2">
        {effect.when.map((w, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#8B8FA8" }}>
            <span style={{ color: "#34D399" }}>→</span>
            {w}
          </li>
        ))}
      </ul>
    </div>

    {/* Parameters */}
    <div className="glass-card-static p-5 rounded-2xl">
      <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#00C8FF" }}>
        Key Parameters
      </h3>
      <div className="space-y-3">
        {effect.params.map((p) => (
          <div key={p.name} className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white">{p.name}</span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full"
                style={{ color: "#34D399", background: "rgba(52,211,153,0.1)" }}
              >
                {p.range}
              </span>
            </div>
            <p className="text-xs" style={{ color: "#6B7280" }}>{p.tip}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Classic Mistake + Pro Tip side by side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Classic Mistake */}
      <div
        className="p-5 rounded-2xl"
        style={{
          background: "rgba(239,68,68,0.04)",
          border: "1px solid rgba(239,68,68,0.1)",
          borderLeft: "3px solid #EF4444",
        }}
      >
        <h3 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#EF4444" }}>
          Classic Mistake
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#8B8FA8" }}>
          {effect.classicMistake}
        </p>
      </div>

      {/* Pro Tip */}
      <div
        className="p-5 rounded-2xl"
        style={{
          background: "rgba(52,211,153,0.04)",
          border: "1px solid rgba(52,211,153,0.1)",
          borderLeft: "3px solid #34D399",
        }}
      >
        <h3 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#34D399" }}>
          Pro Tip
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#8B8FA8" }}>
          {effect.proTip}
        </p>
      </div>
    </div>

    {/* DAW Paths */}
    <div className="glass-card-static p-5 rounded-2xl">
      <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#00C8FF" }}>
        Find it in your DAW
      </h3>
      <div className="space-y-2">
        {effect.dawPaths.map((d) => (
          <div key={d.daw} className="flex items-center gap-3">
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                color: "#00C8FF",
                background: "rgba(0,200,255,0.15)",
              }}
            >
              {d.daw}
            </span>
            <span className="text-xs font-mono" style={{ color: "#8B8FA8" }}>
              {d.path}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
