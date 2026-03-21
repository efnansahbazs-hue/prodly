import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const genreData: { name: string; subs: string[] }[] = [
  { name: "Techno", subs: ["Minimal Techno", "Dark Techno", "Industrial Techno", "Melodic Techno", "Dub Techno", "Schranz", "Hard Techno", "Rave Techno", "Detroit Techno", "Acid Techno"] },
  { name: "House", subs: ["Deep House", "Tech House", "Afro House", "Progressive House", "Minimal House", "Acid House", "Chicago House", "Organic House", "Electro House", "Nu-Disco"] },
  { name: "Trap", subs: ["Hard Trap", "Melodic Trap", "Dark Trap", "Hip-Hop Trap", "Festival Trap", "Phonk", "Mafia Phonk", "Memphis Rap", "Rage Trap"] },
  { name: "Hip-Hop", subs: ["Boom Bap", "Lo-Fi Hip-Hop", "Drill", "Cloud Rap", "Conscious Hip-Hop", "G-Funk", "East Coast", "West Coast", "UK Drill", "Jazz Rap"] },
  { name: "Drum & Bass", subs: ["Liquid DnB", "Neurofunk", "Jump-Up", "Jungle", "Darkstep", "Halftime", "Autonomic"] },
  { name: "Electronic", subs: ["Electro", "IDM", "Glitch", "Breakbeat", "Hardstyle", "Gabber", "Hardcore"] },
  { name: "Dubstep", subs: ["Brostep", "Riddim", "Dark Dubstep", "Melodic Dubstep", "Chillstep"] },
  { name: "Ambient", subs: ["Dark Ambient", "Drone", "New Age", "Cinematic", "Experimental", "Space Ambient", "Field Recording"] },
  { name: "Trance", subs: ["Progressive Trance", "Psytrance", "Goa Trance", "Uplifting Trance", "Tech Trance", "Dark Psytrance", "Hi-Tech"] },
  { name: "Pop", subs: ["Synth-Pop", "Indie Pop", "Electropop", "Dream Pop", "Hyperpop", "K-Pop"] },
  { name: "R&B", subs: ["Contemporary R&B", "Neo-Soul", "Alternative R&B", "Funk", "New Jack Swing"] },
  { name: "Jazz", subs: ["Jazz Fusion", "Nu-Jazz", "Jazz Hop", "Acid Jazz", "Smooth Jazz"] },
  { name: "Indie", subs: ["Indie Rock", "Shoegaze", "Post-Rock", "Math Rock", "Chillwave"] },
  { name: "World", subs: ["Afrobeats", "Amapiano", "Dancehall", "Reggaeton", "Latin House", "Baile Funk", "Turkish Electronic"] },
  { name: "Experimental", subs: ["Noise", "Vaporwave", "Witch House", "Post-Industrial", "Glitch Hop"] },
  { name: "Garage", subs: ["UK Garage", "2-Step", "Grime", "UK Bass", "Bassline"] },
  { name: "Future Bass", subs: ["Future Pop", "Melodic Bass", "Wave", "Emo Rap"] },
  { name: "Classical", subs: ["Neoclassical", "Film Score", "Epic Orchestral", "Minimalism"] },
];

export const GenreShowcase = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (name: string) => setExpanded(expanded === name ? null : name);

  return (
    <section className="relative py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-3 text-center">{t("genre.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10 text-center text-white" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("genre.title")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex flex-wrap justify-center gap-2">
            {genreData.map((g) => {
              const isOpen = expanded === g.name;
              return (
                <div key={g.name} className="contents">
                  <button
                    onClick={() => toggle(g.name)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95"
                    style={{
                      background: isOpen ? "rgba(124,58,237,0.2)" : "transparent",
                      border: `1px solid ${isOpen ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)"}`,
                      color: isOpen ? "#A78BFA" : "#8B8FA8",
                      boxShadow: isOpen ? "0 0 12px rgba(124,58,237,0.2)" : "none",
                    }}
                  >
                    {g.name}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Sub-genres panel */}
          {expanded && (
            <div
              className="mt-5 flex flex-wrap justify-center gap-2 animate-fade-in"
              style={{ animationDuration: "0.3s" }}
            >
              {genreData
                .find((g) => g.name === expanded)
                ?.subs.map((sub, i) => (
                  <span
                    key={sub}
                    className="px-3 py-1.5 rounded-full text-[12px] font-medium animate-fade-in"
                    style={{
                      background: "rgba(52,211,153,0.08)",
                      border: "1px solid rgba(52,211,153,0.2)",
                      color: "#34D399",
                      animationDelay: `${i * 30}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    {sub}
                  </span>
                ))}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};
