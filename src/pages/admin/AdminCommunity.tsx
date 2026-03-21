import { Flag, Trash2, Eye } from "lucide-react";

interface ReportedPost {
  id: number;
  author: string;
  title: string;
  reason: string;
  reports: number;
  date: string;
  status: "pending" | "removed" | "cleared";
}

const STATUS_S: Record<string, { bg: string; color: string; label: string }> = {
  pending: { bg: "rgba(234,179,8,0.12)", color: "#EAB308", label: "Pending" },
  removed: { bg: "rgba(239,68,68,0.12)", color: "#EF4444", label: "Removed" },
  cleared: { bg: "rgba(52,211,153,0.12)", color: "#34D399", label: "Cleared" },
};

const POSTS: ReportedPost[] = [
  { id: 1, author: "DJ Pulse", title: "Check out my SoundCloud (spam link)", reason: "Spam", reports: 12, date: "2026-03-20", status: "pending" },
  { id: 2, author: "Unknown", title: "Offensive content in technique thread", reason: "Inappropriate", reports: 8, date: "2026-03-19", status: "removed" },
  { id: 3, author: "NewUser99", title: "Selling plugins (unauthorized promotion)", reason: "Promotion", reports: 5, date: "2026-03-18", status: "pending" },
  { id: 4, author: "BeatMaker", title: "Misleading production advice", reason: "Misinformation", reports: 3, date: "2026-03-17", status: "cleared" },
];

export default function AdminCommunity() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk'" }}>
        Community Moderation
      </h1>

      <div className="space-y-3">
        {POSTS.map((p) => {
          const status = STATUS_S[p.status];
          return (
            <div
              key={p.id}
              className="p-5 rounded-2xl flex items-start justify-between gap-4 transition-all hover:border-[var(--border-accent)]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <Flag className="w-3 h-3" style={{ color: "#EF4444" }} />
                  <span className="text-[10px] font-medium" style={{ color: "#EF4444" }}>{p.reports} reports</span>
                  <span className="text-[10px]" style={{ color: "#8B8FA8" }}>· {p.reason}</span>
                </div>
                <h4 className="text-sm font-medium text-white">{p.title}</h4>
                <p className="text-[10px] mt-0.5" style={{ color: "#8B8FA8" }}>by {p.author} · {p.date}</p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: status.bg, color: status.color }}>
                  {status.label}
                </span>
                <button className="p-1.5 rounded-lg transition-colors hover:bg-white/[0.06]"><Eye className="w-3.5 h-3.5" style={{ color: "#8B8FA8" }} /></button>
                <button className="p-1.5 rounded-lg transition-colors hover:bg-white/[0.06]"><Trash2 className="w-3.5 h-3.5" style={{ color: "#EF4444" }} /></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
