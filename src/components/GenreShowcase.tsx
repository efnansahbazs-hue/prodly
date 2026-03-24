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

      {/* Main genres — centered wrap */}
      <div className="flex flex-wrap justify-center items-center gap-2 mx-auto" style={{ maxWidth: 800 }}>
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setExpanded(expanded === g ? null : g)}
            className="rounded-full transition-all duration-200 active:scale-95"
            style={{
              padding: "6px 16px",
              fontSize: 13,
              background: expanded === g ? "rgba(124,58,237,0.18)" : "rgba(255,255,255,0.05)",
              border: `1px solid ${expanded === g ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.1)"}`,
              color: expanded === g ? "#A78BFA" : "#8B8FA8",
              cursor: "pointer",
            }}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Sub-genres — centered wrap */}
      {expanded && subGenres[expanded] && (
        <div className="flex flex-wrap justify-center items-center gap-2 mx-auto mt-2 animate-fade-in" style={{ maxWidth: 800 }}>
          {subGenres[expanded].map((s) => (
            <button
              key={s}
              className="rounded-full transition-all duration-200 active:scale-95"
              style={{
                padding: "6px 16px",
                fontSize: 13,
                background: "rgba(52,211,153,0.08)",
                border: "1px solid rgba(52,211,153,0.2)",
                color: "#34D399",
                cursor: "pointer",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
