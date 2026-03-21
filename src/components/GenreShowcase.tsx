import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const genres = [
  { name: "Lo-Fi", color: "#7C3AED", bpm: "70-90" },
  { name: "Hip-Hop", color: "#34D399", bpm: "85-115" },
  { name: "EDM", color: "#A78BFA", bpm: "128-150" },
  { name: "R&B", color: "#10B981", bpm: "60-80" },
  { name: "Pop", color: "#9333EA", bpm: "100-130" },
  { name: "Trap", color: "#34D399", bpm: "130-170" },
];

export const GenreShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-5">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="section-label mb-3">{t("genre.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("genre.title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {genres.map((g, i) => (
            <ScrollReveal key={g.name} delay={i * 60}>
              <div className="glass-card rounded-[20px] p-6 text-center group cursor-pointer">
                <div
                  className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: `${g.color}20`,
                    color: g.color,
                    fontFamily: "'Space Grotesk'",
                  }}
                >
                  {g.name[0]}
                </div>
                <h4 className="font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>
                  {g.name}
                </h4>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {g.bpm} BPM
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
