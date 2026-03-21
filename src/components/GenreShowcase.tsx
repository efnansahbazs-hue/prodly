import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const subGenres: Record<string, string[]> = {
  "Techno": ["Minimal", "Dark", "Industrial", "Melodic", "Dub", "Schranz", "Hard", "Detroit", "Acid"],
  "House": ["Deep", "Tech", "Afro", "Progressive", "Minimal", "Acid", "Chicago", "Organic"],
  "Trap": ["Hard", "Melodic", "Dark", "Phonk", "Mafia Phonk", "Memphis", "Rage"],
  "Hip-Hop": ["Boom Bap", "Lo-Fi", "Drill", "Cloud Rap", "Conscious", "G-Funk", "UK Drill"],
  "Drum & Bass": ["Liquid", "Neurofunk", "Jump-Up", "Jungle", "Darkstep", "Halftime"],
  "Electronic": ["Electro", "IDM", "Glitch", "Breakbeat", "Hardstyle", "Gabber"],
  "Dubstep": ["Brostep", "Riddim", "Dark", "Melodic", "Chillstep"],
  "Ambient": ["Dark", "Drone", "New Age", "Cinematic", "Space", "Field Recording"],
  "Trance": ["Progressive", "Psytrance", "Goa", "Uplifting", "Tech", "Dark Psy"],
  "Pop": ["Synth-Pop", "Indie Pop", "Electropop", "Dream Pop", "Hyperpop"],
  "R&B": ["Contemporary", "Neo-Soul", "Alternative", "Funk"],
  "Jazz": ["Jazz Fusion", "Nu-Jazz", "Jazz Hop", "Acid Jazz"],
  "Indie": ["Indie Rock", "Shoegaze", "Post-Rock", "Chillwave"],
  "World": ["Afrobeats", "Amapiano", "Dancehall", "Reggaeton", "Turkish Electronic"],
  "Garage": ["UK Garage", "2-Step", "Grime", "UK Bass"],
  "Future Bass": ["Future Pop", "Melodic Bass", "Wave", "Emo Rap"],
};

const genres = Object.keys(subGenres);

export const GenreShowcase = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="mt-3">
      <p className="text-[11px] mb-1.5" style={{ color: "#555" }}>{t("hero.exploreGenre")}</p>

      {/* Main genres — horizontal scroll */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(15,15,25,0.9), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(15,15,25,0.9), transparent)" }} />

        <div className="genre-scroll-row flex gap-1.5 overflow-x-auto pb-1" style={{ scrollBehavior: "smooth" }}>
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setExpanded(expanded === g ? null : g)}
              className="flex-shrink-0 rounded-full px-3 py-[5px] text-[12px] font-medium transition-all duration-200 active:scale-95 whitespace-nowrap"
              style={{
                background: expanded === g ? "rgba(124,58,237,0.18)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${expanded === g ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.1)"}`,
                color: expanded === g ? "#A78BFA" : "#8B8FA8",
              }}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-genres row */}
      {expanded && subGenres[expanded] && (
        <div className="relative mt-1 animate-fade-in">
          <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(15,15,25,0.9), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(15,15,25,0.9), transparent)" }} />

          <div className="genre-scroll-row flex gap-1.5 overflow-x-auto pb-0.5" style={{ scrollBehavior: "smooth" }}>
            {subGenres[expanded].map((s) => (
              <button
                key={s}
                className="flex-shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 active:scale-95 whitespace-nowrap"
                style={{
                  background: "rgba(52,211,153,0.08)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  color: "#34D399",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
