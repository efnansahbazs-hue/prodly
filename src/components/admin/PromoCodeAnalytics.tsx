import type { PromoCode } from "@/lib/promoCodes";

interface Props {
  code: PromoCode;
}

export const PromoCodeAnalytics = ({ code }: Props) => {
  // Mock analytics derived from usage data
  const conversionRate = code.usedCount > 0 ? Math.min(((code.usedCount / (code.usedCount * 3.2)) * 100), 100).toFixed(1) : "0.0";
  const estimatedRevenue = code.type === "percent"
    ? Math.round(code.usedCount * 15 * (1 - code.value / 100))
    : code.usedCount * 15;

  const stats = [
    { label: "Total Uses", value: code.usedCount.toLocaleString(), color: "#A78BFA" },
    { label: "Est. Revenue", value: `$${estimatedRevenue.toLocaleString()}`, color: "#34D399" },
    { label: "Unique Users", value: Math.round(code.usedCount * 0.92).toLocaleString(), color: "#FFFFFF" },
    { label: "Conversion", value: `${conversionRate}%`, color: "#34D399" },
  ];

  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.2)", backdropFilter: "blur(20px)" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono font-bold text-white text-lg">{code.code}</span>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: code.active ? "rgba(52,211,153,0.15)" : "rgba(239,68,68,0.15)",
            color: code.active ? "#34D399" : "#EF4444",
          }}
        >
          {code.active ? "Active" : "Inactive"}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>{s.label}</p>
            <p className="text-xl font-bold" style={{ color: s.color, fontFamily: "'Space Grotesk'" }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Usage progress bar */}
      <div className="mt-4">
        <div className="flex justify-between text-[10px] mb-1" style={{ color: "#6B7280" }}>
          <span>Usage</span>
          <span>{code.usedCount} / {code.maxUses}</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${Math.min((code.usedCount / code.maxUses) * 100, 100)}%`,
              background: "linear-gradient(90deg, #7C3AED, #34D399)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
