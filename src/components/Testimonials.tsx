import { Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Ayşe Kartal",
    role: "Lo-Fi Producer",
    text: "Prodly completely changed my workflow. I went from spending 6 hours on a beat to finishing in under 2. The AI mixing suggestions are scarily accurate.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Hip-Hop Engineer",
    text: "The vocal processing alone is worth the subscription. Crystal clear results with zero artifacts. Best tool I've used in 12 years of production.",
    rating: 5,
  },
  {
    name: "Lena Schreiber",
    role: "EDM Artist",
    text: "Live collaboration feature is a game-changer. Working with my co-producer in Berlin while I'm in Tokyo — zero latency issues.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="relative py-24 px-5">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-label mb-3">{t("test.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("test.title")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 80}>
              <div className="glass-card rounded-[20px] p-7 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[var(--mint)] text-[var(--mint)]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--text-secondary)" }}>
                  "{item.text}"
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{item.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
