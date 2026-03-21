import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Navbar } from "@/components/Navbar";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { FloatingReportButton } from "@/components/FloatingReportButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ThumbsUp, Send } from "lucide-react";

interface Suggestion {
  id: number;
  title: string;
  desc: string;
  votes: number;
  voted: boolean;
  status: "under_review" | "planned" | "implemented";
  author: string;
  date: string;
}

const STATUS_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  under_review: { bg: "rgba(234,179,8,0.12)", color: "#EAB308", label: "sug.statusReview" },
  planned: { bg: "rgba(124,58,237,0.12)", color: "#A78BFA", label: "sug.statusPlanned" },
  implemented: { bg: "rgba(52,211,153,0.12)", color: "#34D399", label: "sug.statusDone" },
};

const INITIAL: Suggestion[] = [
  { id: 1, title: "MIDI export from Chord Starter", desc: "Drag MIDI directly into DAW from the chord tool.", votes: 234, voted: false, status: "planned", author: "Maria S.", date: "2026-03-12" },
  { id: 2, title: "Collaboration rooms", desc: "Real-time collaboration where two producers share a session.", votes: 312, voted: false, status: "planned", author: "Kaan Y.", date: "2026-03-08" },
  { id: 3, title: "Plugin recommendation engine", desc: "AI-powered plugin suggestions based on genre and style.", votes: 178, voted: false, status: "implemented", author: "Aya N.", date: "2026-02-20" },
  { id: 4, title: "Mobile app", desc: "Native iOS/Android app for learning on the go.", votes: 456, voted: false, status: "under_review", author: "Leo C.", date: "2026-03-15" },
  { id: 5, title: "Dark/Light theme toggle", desc: "Option for a lighter UI theme for daytime studio sessions.", votes: 89, voted: false, status: "under_review", author: "Tom B.", date: "2026-03-10" },
  { id: 6, title: "Sample pack marketplace", desc: "Community-driven sample pack sharing and selling.", votes: 145, voted: false, status: "planned", author: "Sam R.", date: "2026-03-01" },
];

export default function SuggestionsPage() {
  const { t } = useTranslation();
  const [suggestions, setSuggestions] = useState<Suggestion[]>(INITIAL);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (id: number) => {
    setSuggestions((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, voted: !s.voted, votes: s.voted ? s.votes - 1 : s.votes + 1 }
          : s
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return;
    const newSuggestion: Suggestion = {
      id: Date.now(),
      title: title.trim(),
      desc: desc.trim(),
      votes: 1,
      voted: true,
      status: "under_review",
      author: "You",
      date: new Date().toISOString().split("T")[0],
    };
    setSuggestions((prev) => [newSuggestion, ...prev]);
    setTitle("");
    setDesc("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const sorted = [...suggestions].sort((a, b) => b.votes - a.votes);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NoiseOverlay />
      <DotGrid />
      <Orbs />
      <Navbar />

      <div className="container mx-auto px-5 pt-24 pb-20 max-w-3xl">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-label mb-3">{t("sug.label")}</p>
            <h1
              className="text-3xl md:text-4xl font-bold text-gradient-mixed"
              style={{ fontFamily: "'Space Grotesk'", lineHeight: 1.15 }}
            >
              {t("sug.title")}
            </h1>
            <p className="text-sm mt-3 max-w-md mx-auto" style={{ color: "#8B8FA8" }}>
              {t("sug.desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* Submit form */}
        <ScrollReveal>
          <form
            onSubmit={handleSubmit}
            className="glass-card-static p-6 mb-10"
          >
            <h3 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: "'Space Grotesk'" }}>
              {t("sug.submitTitle")}
            </h3>

            <div className="space-y-3">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t("sug.titlePlaceholder")}
                className="w-full px-4 py-2.5 rounded-xl text-sm text-white outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(52,211,153,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder={t("sug.descPlaceholder")}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl text-sm text-white outline-none resize-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(52,211,153,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              {submitted ? (
                <span className="text-xs font-medium" style={{ color: "#34D399" }}>
                  ✓ {t("sug.submitted")}
                </span>
              ) : (
                <span />
              )}
              <button
                type="submit"
                disabled={!title.trim() || !desc.trim()}
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium text-white transition-all active:scale-[0.97] disabled:opacity-40"
                style={{
                  background: "rgba(52,211,153,0.12)",
                  border: "1px solid rgba(52,211,153,0.3)",
                  color: "#34D399",
                }}
              >
                <Send className="w-3.5 h-3.5" /> {t("sug.submit")}
              </button>
            </div>
          </form>
        </ScrollReveal>

        {/* Feed */}
        <div className="space-y-3">
          {sorted.map((s) => {
            const status = STATUS_STYLES[s.status];
            return (
              <ScrollReveal key={s.id}>
                <div
                  className="glass-card-static p-5 flex items-start gap-4 transition-all hover:border-[var(--border-accent)]"
                >
                  {/* Vote button */}
                  <button
                    onClick={() => handleVote(s.id)}
                    className="flex flex-col items-center gap-1 pt-0.5 flex-shrink-0 transition-all"
                  >
                    <ThumbsUp
                      className="w-4 h-4 transition-colors"
                      style={{ color: s.voted ? "#34D399" : "#8B8FA8" }}
                    />
                    <span
                      className="text-sm font-bold transition-colors"
                      style={{ color: s.voted ? "#34D399" : "#8B8FA8" }}
                    >
                      {s.votes}
                    </span>
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{ background: status.bg, color: status.color }}
                      >
                        {t(status.label)}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "#8B8FA8" }}>
                      {s.desc}
                    </p>
                    <p className="text-[10px] mt-1.5" style={{ color: "#6B7280" }}>
                      {s.author} · {s.date}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <FloatingReportButton />
    </div>
  );
}
