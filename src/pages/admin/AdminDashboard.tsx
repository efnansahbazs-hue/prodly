import { Users, FileText, TrendingUp, CreditCard, MessageSquare, Tag } from "lucide-react";

const METRICS = [
  { icon: Users, label: "Total Users", value: "2,847", change: "+12%", positive: true },
  { icon: TrendingUp, label: "Active Today", value: "341", change: "+8%", positive: true },
  { icon: CreditCard, label: "MRR", value: "$4,230", change: "+23%", positive: true },
  { icon: FileText, label: "Open Reports", value: "7", change: "-3", positive: false },
  { icon: MessageSquare, label: "Posts Today", value: "124", change: "+18%", positive: true },
  { icon: Tag, label: "Active Promos", value: "6", change: "0", positive: true },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk'" }}>
        Dashboard
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {METRICS.map((m, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl transition-all hover:border-[var(--border-accent)]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <m.icon className="w-4 h-4" style={{ color: "#8B8FA8" }} />
              <span className="text-[11px] font-medium" style={{ color: "#8B8FA8" }}>{m.label}</span>
            </div>
            <div className="text-2xl font-bold" style={{ color: "#fff", fontFamily: "'Space Grotesk'" }}>
              {m.value}
            </div>
            <span
              className="text-[11px] font-medium mt-1 inline-block"
              style={{ color: m.positive ? "#34D399" : "#EF4444" }}
            >
              {m.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
