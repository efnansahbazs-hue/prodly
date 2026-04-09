import { useState } from "react";
import { Search, Eye, Ban, Trash2 } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  plan: "free" | "premium" | "studio";
  status: "active" | "suspended";
  joined: string;
  questions: number;
}

const PLAN_COLORS: Record<string, { bg: string; color: string }> = {
  free: { bg: "rgba(255,255,255,0.06)", color: "#8B8FA8" },
  premium: { bg: "rgba(0,200,255,0.15)", color: "#00C8FF" },
  studio: { bg: "rgba(52,211,153,0.12)", color: "#34D399" },
};

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  active: { bg: "rgba(52,211,153,0.12)", color: "#34D399" },
  suspended: { bg: "rgba(239,68,68,0.12)", color: "#EF4444" },
};

const MOCK_USERS: User[] = [
  { id: "1", name: "Kaan Yildiz", email: "kaan@email.com", plan: "studio", status: "active", joined: "2026-01-15", questions: 342 },
  { id: "2", name: "Maria Santos", email: "maria@email.com", plan: "premium", status: "active", joined: "2026-02-03", questions: 187 },
  { id: "3", name: "Leo Chen", email: "leo@email.com", plan: "free", status: "active", joined: "2026-03-10", questions: 24 },
  { id: "4", name: "Aya Nakamura", email: "aya@email.com", plan: "premium", status: "active", joined: "2026-01-28", questions: 156 },
  { id: "5", name: "DJ Pulse", email: "pulse@email.com", plan: "free", status: "suspended", joined: "2026-02-20", questions: 8 },
  { id: "6", name: "Tom Berg", email: "tom@email.com", plan: "studio", status: "active", joined: "2025-12-01", questions: 412 },
];

export default function AdminUsers() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");

  const filtered = MOCK_USERS.filter((u) => {
    const matchSearch = !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || u.plan === filter || u.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk'" }}>
        Users
      </h1>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#8B8FA8" }} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 rounded-xl text-sm text-white outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          />
        </div>
        {["all", "free", "premium", "studio", "suspended"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-3 py-2 rounded-lg text-[11px] font-medium transition-all capitalize"
            style={{
              background: filter === f ? "rgba(0,200,255,0.15)" : "rgba(255,255,255,0.04)",
              color: filter === f ? "#00C8FF" : "#8B8FA8",
              border: `1px solid ${filter === f ? "rgba(0,200,255,0.3)" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
        <table className="w-full text-left">
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.03)" }}>
              {["User", "Plan", "Status", "Joined", "Questions", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#8B8FA8" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="transition-colors hover:bg-white/[0.02]" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-white">{u.name}</p>
                  <p className="text-[10px]" style={{ color: "#8B8FA8" }}>{u.email}</p>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium capitalize" style={PLAN_COLORS[u.plan]}>
                    {u.plan}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium capitalize" style={STATUS_COLORS[u.status]}>
                    {u.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs" style={{ color: "#8B8FA8" }}>{u.joined}</td>
                <td className="px-4 py-3 text-xs font-medium" style={{ color: "#34D399" }}>{u.questions}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1.5">
                    <button className="p-1.5 rounded-lg transition-colors hover:bg-white/[0.06]" title="View"><Eye className="w-3.5 h-3.5" style={{ color: "#8B8FA8" }} /></button>
                    <button className="p-1.5 rounded-lg transition-colors hover:bg-white/[0.06]" title="Suspend"><Ban className="w-3.5 h-3.5" style={{ color: "#EAB308" }} /></button>
                    <button className="p-1.5 rounded-lg transition-colors hover:bg-white/[0.06]" title="Delete"><Trash2 className="w-3.5 h-3.5" style={{ color: "#EF4444" }} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
