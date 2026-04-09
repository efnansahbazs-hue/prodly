import { useState } from "react";

interface Report {
  id: number;
  type: "bug" | "crash" | "violation";
  title: string;
  user: string;
  status: "new" | "in_review" | "resolved";
  date: string;
}

const STATUS_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  new: { bg: "rgba(239,68,68,0.12)", color: "#EF4444", label: "New" },
  in_review: { bg: "rgba(234,179,8,0.12)", color: "#EAB308", label: "In Review" },
  resolved: { bg: "rgba(52,211,153,0.12)", color: "#34D399", label: "Resolved" },
};

const TYPE_STYLES: Record<string, { bg: string; color: string }> = {
  bug: { bg: "rgba(234,179,8,0.12)", color: "#EAB308" },
  crash: { bg: "rgba(239,68,68,0.12)", color: "#EF4444" },
  violation: { bg: "rgba(0,200,255,0.12)", color: "#00C8FF" },
};

const REPORTS: Report[] = [
  { id: 1, type: "bug", title: "Demo widget not loading on mobile Safari", user: "Leo Chen", status: "new", date: "2026-03-20" },
  { id: 2, type: "crash", title: "App crashes when switching language during playback", user: "Kaan Yildiz", status: "in_review", date: "2026-03-19" },
  { id: 3, type: "violation", title: "Spam posts in community feed", user: "DJ Pulse", status: "resolved", date: "2026-03-18" },
  { id: 4, type: "bug", title: "Streak counter not resetting at midnight UTC", user: "Maria Santos", status: "new", date: "2026-03-20" },
  { id: 5, type: "bug", title: "Chord Starter shows wrong key signatures", user: "Tom Berg", status: "in_review", date: "2026-03-17" },
];

export default function AdminReports() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? REPORTS : REPORTS.filter((r) => r.status === filter);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk'" }}>
        Reports
      </h1>

      <div className="flex gap-2 mb-5">
        {["all", "new", "in_review", "resolved"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all capitalize"
            style={{
              background: filter === f ? "rgba(0,200,255,0.15)" : "rgba(255,255,255,0.04)",
              color: filter === f ? "#00C8FF" : "#8B8FA8",
              border: `1px solid ${filter === f ? "rgba(0,200,255,0.3)" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            {f.replace("_", " ")}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((r) => {
          const status = STATUS_STYLES[r.status];
          const type = TYPE_STYLES[r.type];
          return (
            <div
              key={r.id}
              className="p-4 rounded-2xl flex items-start justify-between gap-4 transition-all hover:border-[var(--border-accent)]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium capitalize" style={type}>
                    {r.type}
                  </span>
                  <span className="text-[10px]" style={{ color: "#8B8FA8" }}>{r.date}</span>
                </div>
                <h4 className="text-sm font-medium text-white">{r.title}</h4>
                <p className="text-[11px] mt-0.5" style={{ color: "#8B8FA8" }}>by {r.user}</p>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full font-medium flex-shrink-0" style={{ background: status.bg, color: status.color }}>
                {status.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
