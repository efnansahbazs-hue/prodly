interface Sub {
  user: string;
  email: string;
  plan: "premium" | "studio";
  billing: "monthly" | "annual";
  amount: string;
  started: string;
  nextBill: string;
  status: "active" | "past_due" | "canceled";
}

const STATUS_S: Record<string, { bg: string; color: string }> = {
  active: { bg: "rgba(52,211,153,0.12)", color: "#34D399" },
  past_due: { bg: "rgba(234,179,8,0.12)", color: "#EAB308" },
  canceled: { bg: "rgba(239,68,68,0.12)", color: "#EF4444" },
};

const SUBS: Sub[] = [
  { user: "Kaan Yildiz", email: "kaan@email.com", plan: "studio", billing: "annual", amount: "$239/yr", started: "2026-01-15", nextBill: "2027-01-15", status: "active" },
  { user: "Maria Santos", email: "maria@email.com", plan: "premium", billing: "monthly", amount: "$15/mo", started: "2026-02-03", nextBill: "2026-04-03", status: "active" },
  { user: "Aya Nakamura", email: "aya@email.com", plan: "premium", billing: "annual", amount: "$129/yr", started: "2026-01-28", nextBill: "2027-01-28", status: "active" },
  { user: "Tom Berg", email: "tom@email.com", plan: "studio", billing: "monthly", amount: "$29/mo", started: "2025-12-01", nextBill: "2026-04-01", status: "past_due" },
  { user: "Sam Rivera", email: "sam@email.com", plan: "premium", billing: "monthly", amount: "$15/mo", started: "2026-02-10", nextBill: "—", status: "canceled" },
];

export default function AdminSubscriptions() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk'" }}>
        Subscriptions
      </h1>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Active Subs", value: "3", color: "#34D399" },
          { label: "MRR", value: "$4,230", color: "#34D399" },
          { label: "Churn Rate", value: "2.1%", color: "#EAB308" },
        ].map((s, i) => (
          <div key={i} className="p-4 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="text-xl font-bold" style={{ color: s.color, fontFamily: "'Space Grotesk'" }}>{s.value}</div>
            <div className="text-[10px] mt-1" style={{ color: "#8B8FA8" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
        <table className="w-full text-left">
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.03)" }}>
              {["User", "Plan", "Billing", "Amount", "Next Bill", "Status"].map((h) => (
                <th key={h} className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#8B8FA8" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SUBS.map((s, i) => (
              <tr key={i} className="transition-colors hover:bg-white/[0.02]" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <td className="px-4 py-3">
                  <p className="text-sm text-white">{s.user}</p>
                  <p className="text-[10px]" style={{ color: "#8B8FA8" }}>{s.email}</p>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium capitalize"
                    style={{ background: s.plan === "studio" ? "rgba(52,211,153,0.12)" : "rgba(124,58,237,0.15)", color: s.plan === "studio" ? "#34D399" : "#A78BFA" }}>
                    {s.plan}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs capitalize" style={{ color: "#8B8FA8" }}>{s.billing}</td>
                <td className="px-4 py-3 text-xs font-medium" style={{ color: "#34D399" }}>{s.amount}</td>
                <td className="px-4 py-3 text-xs" style={{ color: "#8B8FA8" }}>{s.nextBill}</td>
                <td className="px-4 py-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium capitalize" style={STATUS_S[s.status]}>
                    {s.status.replace("_", " ")}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
