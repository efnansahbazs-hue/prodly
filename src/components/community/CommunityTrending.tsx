import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { TrendingUp } from "lucide-react";

const GENRES = ["All", "Techno", "House", "Trap", "Hip-Hop", "Drum & Bass", "Ambient"];

interface TrendingItem {
  rank: number;
  topic: string;
  posts: number;
  genre: string;
  trend: "up" | "new";
}

const ITEMS: TrendingItem[] = [
  { rank: 1, topic: "Parallel compression on drums", posts: 89, genre: "Techno", trend: "up" },
  { rank: 2, topic: "808 tuning to key", posts: 72, genre: "Trap", trend: "up" },
  { rank: 3, topic: "Sidechain ducking vs volume shaping", posts: 64, genre: "House", trend: "new" },
  { rank: 4, topic: "Granular synthesis for ambient textures", posts: 48, genre: "Ambient", trend: "up" },
  { rank: 5, topic: "Resampling breaks in jungle", posts: 41, genre: "Drum & Bass", trend: "new" },
  { rank: 6, topic: "Lo-fi processing chains", posts: 38, genre: "Hip-Hop", trend: "up" },
  { rank: 7, topic: "Acid bass design with TB-303", posts: 35, genre: "Techno", trend: "up" },
  { rank: 8, topic: "Creating depth with send effects", posts: 31, genre: "House", trend: "new" },
];

export const CommunityTrending = () => {
  const { t } = useTranslation();
  const [activeGenre, setActiveGenre] = useState("All");

  const filtered = activeGenre === "All" ? ITEMS : ITEMS.filter((i) => i.genre === activeGenre);

  return (
    <div>
      {/* Genre filter pills */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {GENRES.map((g) => (
          <button
            key={g}
            onClick={() => setActiveGenre(g)}
            className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all"
            style={{
              background: activeGenre === g ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${activeGenre === g ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.08)"}`,
              color: activeGenre === g ? "#34D399" : "#8B8FA8",
            }}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Trending list */}
      <div className="space-y-2">
        {filtered.map((item) => (
          <div
            key={item.rank}
            className="glass-card-static p-4 flex items-center gap-4 transition-all hover:border-[var(--border-accent)]"
          >
            <span
              className="text-lg font-bold w-8 text-center flex-shrink-0"
              style={{ color: "rgba(255,255,255,0.15)", fontFamily: "'Space Grotesk'" }}
            >
              {item.rank}
            </span>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-white truncate">{item.topic}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px]" style={{ color: "#8B8FA8" }}>
                  {item.posts} {t("comm.trendPosts")}
                </span>
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full"
                  style={{
                    background: item.genre === activeGenre && activeGenre !== "All"
                      ? "rgba(52,211,153,0.12)" : "rgba(124,58,237,0.1)",
                    color: item.genre === activeGenre && activeGenre !== "All"
                      ? "#34D399" : "#A78BFA",
                  }}
                >
                  {item.genre}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
              <TrendingUp className="w-3.5 h-3.5" style={{ color: item.trend === "new" ? "#34D399" : "#A78BFA" }} />
              <span className="text-[10px] font-medium" style={{ color: item.trend === "new" ? "#34D399" : "#A78BFA" }}>
                {item.trend === "new" ? "NEW" : "↑"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
