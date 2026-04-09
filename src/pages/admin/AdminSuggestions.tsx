import { ThumbsUp } from "lucide-react";

interface Suggestion {
  id: number;
  title: string;
  desc: string;
  votes: number;
  status: "under_review" | "planned" | "implemented";
  author: string;
}

const STATUS_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  under_review: { bg: "rgba(234,179,8,0.12)", color: "#EAB308", label: "Under Review" },
  planned: { bg: "rgba(0,200,255,0.12)", color: "#00C8FF", label: "Planned" },
  implemented: { bg: "rgba(52,211,153,0.12)", color: "#34D399", label: "Implemented" },
};

const SUGGESTIONS: Suggestion[] = [
  { id: 1, title: "Add MIDI export from Chord Starter", desc: "Would love to drag MIDI directly into my DAW from the chord tool.", votes: 234, status: "planned", author: "Maria Santos" },
  { id: 2, title: "Dark/Light theme toggle", desc: "Option for a lighter UI theme for daytime studio sessions.", votes: 89, status: "under_review", author: "Tom Berg" },
  { id: 3, title: "Collaboration rooms", desc: "Real-time collaboration where two producers can share a session.", votes: 312, status: "planned", author: "Kaan Yildiz" },
  { id: 4, title: "Mobile app", desc: "Native iOS/Android app for learning on the go.", votes: 456, status: "under_review", author: "Leo Chen" },
  { id: 5, title: "Plugin recommendation engine", desc: "AI-powered plugin suggestions based on genre and style.", votes: 178, status: "implemented", author: "Aya Nakamura" },
];

export default function AdminSuggestions() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk'" }}>
        Suggestions
      </h1>

      <div className="space-y-3">
        {SUGGESTIONS.sort((a, b) => b.votes - a.votes).map((s) => {
          const status = STATUS_STYLES[s.status];
          return (
            <div
              key={s.id}
              className="p-5 rounded-2xl flex items-start gap-4 transition-all hover:border-[var(--border-accent)]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Vote count */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-1">
                <ThumbsUp className="w-4 h-4" style={{ color: "#34D399" }} />
                <span className="text-sm font-bold" style={{ color: "#34D399" }}>{s.votes}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: status.bg, color: status.color }}>
                    {status.label}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#8B8FA8" }}>{s.desc}</p>
                <p className="text-[10px] mt-1.5" style={{ color: "#6B7280" }}>by {s.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
