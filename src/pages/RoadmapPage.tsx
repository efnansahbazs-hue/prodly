import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Navbar } from "@/components/Navbar";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { FloatingReportButton } from "@/components/FloatingReportButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check, Sparkles, Clock, HelpCircle, ThumbsUp, Crown } from "lucide-react";

/* ── Phase data ── */
interface Phase {
  status: "live" | "building" | "planned" | "exploring";
  titleKey: string;
  items: { textKey: string; done?: boolean }[];
}

const PHASE_STYLES = {
  live:      { border: "#34D399", bg: "rgba(52,211,153,0.06)",  badge: "#34D399", badgeBg: "rgba(52,211,153,0.12)", icon: <Check className="w-3.5 h-3.5" /> },
  building:  { border: "#7C3AED", bg: "rgba(124,58,237,0.06)", badge: "#A78BFA", badgeBg: "rgba(124,58,237,0.12)", icon: <Sparkles className="w-3.5 h-3.5" /> },
  planned:   { border: "#60A5FA", bg: "rgba(96,165,250,0.06)", badge: "#60A5FA", badgeBg: "rgba(96,165,250,0.12)", icon: <Clock className="w-3.5 h-3.5" /> },
  exploring: { border: "rgba(255,255,255,0.15)", bg: "rgba(255,255,255,0.02)", badge: "#8B8FA8", badgeBg: "rgba(255,255,255,0.06)", icon: <HelpCircle className="w-3.5 h-3.5" /> },
};

const PHASES: Phase[] = [
  {
    status: "live", titleKey: "road.phase1",
    items: [
      { textKey: "road.p1i1", done: true },
      { textKey: "road.p1i2", done: true },
      { textKey: "road.p1i3", done: true },
      { textKey: "road.p1i4", done: true },
      { textKey: "road.p1i5", done: true },
    ],
  },
  {
    status: "building", titleKey: "road.phase2",
    items: [
      { textKey: "road.p2i1" },
      { textKey: "road.p2i2" },
      { textKey: "road.p2i3" },
      { textKey: "road.p2i4" },
    ],
  },
  {
    status: "planned", titleKey: "road.phase3",
    items: [
      { textKey: "road.p3i1" },
      { textKey: "road.p3i2" },
      { textKey: "road.p3i3" },
      { textKey: "road.p3i4" },
    ],
  },
  {
    status: "exploring", titleKey: "road.phase4",
    items: [
      { textKey: "road.p4i1" },
      { textKey: "road.p4i2" },
      { textKey: "road.p4i3" },
    ],
  },
];

/* ── Vote cards ── */
interface VoteCard {
  titleKey: string;
  descKey: string;
  votes: number;
  favourite?: boolean;
}

const VOTE_CARDS: VoteCard[] = [
  { titleKey: "road.v1Title", descKey: "road.v1Desc", votes: 312, favourite: true },
  { titleKey: "road.v2Title", descKey: "road.v2Desc", votes: 234 },
  { titleKey: "road.v3Title", descKey: "road.v3Desc", votes: 187 },
];

export default function RoadmapPage() {
  const { t } = useTranslation();
  const [voted, setVoted] = useState<Record<number, boolean>>({});

  const toggleVote = (i: number) => setVoted((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NoiseOverlay />
      <DotGrid />
      <Orbs />
      <Navbar />

      <div className="container mx-auto px-5 pt-24 pb-20 max-w-6xl">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label mb-3">{t("road.label")}</p>
            <h1
              className="text-3xl md:text-4xl font-bold text-gradient-mixed"
              style={{ fontFamily: "'Space Grotesk'", lineHeight: 1.15 }}
            >
              {t("road.title")}
            </h1>
            <p className="text-sm mt-3 max-w-lg mx-auto" style={{ color: "#8B8FA8" }}>
              {t("road.desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-0 right-0 h-[2px] z-0"
            style={{ background: "linear-gradient(90deg, #34D399, #7C3AED, #60A5FA, rgba(255,255,255,0.1))" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative z-10">
            {PHASES.map((phase, pi) => {
              const s = PHASE_STYLES[phase.status];
              return (
                <ScrollReveal key={pi}>
                  <div
                    className="rounded-2xl p-5 h-full transition-all"
                    style={{
                      background: s.bg,
                      borderLeft: `3px solid ${s.border}`,
                      border: `1px solid ${phase.status === "building" ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.06)"}`,
                      borderLeftWidth: 3,
                      borderLeftColor: s.border,
                      boxShadow: phase.status === "building" ? "0 0 30px rgba(124,58,237,0.1)" : undefined,
                    }}
                  >
                    {/* Status badge */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <span
                        className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                        style={{ background: s.badgeBg, color: s.badge }}
                      >
                        {s.icon}
                        {t(`road.status.${phase.status}`)}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk'" }}>
                      {t(phase.titleKey)}
                    </h3>

                    <ul className="space-y-2">
                      {phase.items.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-2 text-xs leading-relaxed">
                          {item.done ? (
                            <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#34D399" }} />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: s.border }} />
                          )}
                          <span style={{ color: item.done ? "#fff" : "#8B8FA8" }}>{t(item.textKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* ── Community Vote ── */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="section-label mb-2">{t("road.voteLabel")}</p>
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
                {t("road.voteTitle")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VOTE_CARDS.map((card, i) => (
              <ScrollReveal key={i}>
                <div
                  className="relative rounded-2xl group"
                >
                  {/* Moving border wrapper */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-move-border"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)",
                      backgroundSize: "200% 200%",
                      padding: 1.5,
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "xor",
                      WebkitMaskComposite: "xor",
                    }}
                  />

                  <div
                    className="relative rounded-2xl p-6 h-full"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Favourite badge */}
                    {card.favourite && (
                      <div className="flex items-center gap-1 mb-3">
                        <Crown className="w-3 h-3" />
                        <span
                          className="text-[10px] font-semibold text-gradient-mixed"
                        >
                          {t("road.favourite")}
                        </span>
                      </div>
                    )}

                    <h4 className="text-sm font-semibold text-white mb-1.5" style={{ fontFamily: "'Space Grotesk'" }}>
                      {t(card.titleKey)}
                    </h4>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "#8B8FA8" }}>
                      {t(card.descKey)}
                    </p>

                    {/* Vote button */}
                    <button
                      onClick={() => toggleVote(i)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all active:scale-[0.96]"
                      style={{
                        background: voted[i] ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${voted[i] ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.08)"}`,
                        color: voted[i] ? "#34D399" : "#8B8FA8",
                      }}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      {(voted[i] ? card.votes + 1 : card.votes).toLocaleString()}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <FloatingReportButton />
    </div>
  );
}
