import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Search } from "lucide-react";

const CATEGORIES = [
  "comm.libAll", "comm.libMixing", "comm.libSoundDesign",
  "comm.libArrangement", "comm.libMastering", "comm.libGenre",
];

interface Entry {
  title: string;
  category: string;
  badge: "ai" | "community" | "official";
  votes: number;
}

const BADGE_STYLES = {
  ai: { bg: "rgba(52,211,153,0.12)", color: "#34D399", label: "🟢 AI Verified" },
  community: { bg: "rgba(234,179,8,0.12)", color: "#EAB308", label: "🟡 Community" },
  official: { bg: "rgba(96,165,250,0.12)", color: "#60A5FA", label: "🔵 Official" },
};

const ENTRIES: Entry[] = [
  { title: "Sidechain compression explained", category: "comm.libMixing", badge: "ai", votes: 142 },
  { title: "How to layer kicks properly", category: "comm.libSoundDesign", badge: "official", votes: 98 },
  { title: "Arrangement templates for techno", category: "comm.libArrangement", badge: "community", votes: 76 },
  { title: "LUFS targets by platform", category: "comm.libMastering", badge: "ai", votes: 134 },
  { title: "Deep house chord progressions", category: "comm.libGenre", badge: "community", votes: 61 },
  { title: "Mid-side EQ techniques", category: "comm.libMixing", badge: "official", votes: 89 },
  { title: "Wavetable synthesis basics", category: "comm.libSoundDesign", badge: "ai", votes: 112 },
  { title: "Drum & Bass structure guide", category: "comm.libGenre", badge: "community", votes: 54 },
];

export const CommunityLibrary = () => {
  const { t } = useTranslation();
  const [activeCat, setActiveCat] = useState(CATEGORIES[0]);
  const [search, setSearch] = useState("");

  const filtered = ENTRIES.filter((e) => {
    const matchCat = activeCat === CATEGORIES[0] || e.category === activeCat;
    const matchSearch = !search || e.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="flex gap-6 flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-48 flex-shrink-0">
        <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className="text-left text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap transition-all"
              style={{
                color: activeCat === cat ? "#34D399" : "#8B8FA8",
                background: activeCat === cat ? "rgba(52,211,153,0.06)" : "transparent",
                borderBottom: activeCat === cat ? "2px solid #34D399" : "2px solid transparent",
              }}
            >
              {t(cat)}
            </button>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1">
        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#8B8FA8" }} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("comm.libSearch")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-white outline-none transition-all"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>

        {/* Entries */}
        <div className="space-y-3">
          {filtered.map((entry, i) => {
            const badge = BADGE_STYLES[entry.badge];
            return (
              <div
                key={i}
                className="glass-card-static p-4 flex items-center justify-between gap-3 transition-all hover:border-[var(--border-accent)]"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-white truncate">{entry.title}</h4>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{ background: badge.bg, color: badge.color }}
                    >
                      {badge.label}
                    </span>
                    <span className="text-[10px]" style={{ color: "#8B8FA8" }}>
                      ▲ {entry.votes}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
