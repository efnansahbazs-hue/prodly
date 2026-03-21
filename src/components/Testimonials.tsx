import { Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Lang } from "@/lib/translations";

const testimonials: { name: string; role: Record<Lang, string>; text: Record<Lang, string>; rating: number }[] = [
  {
    name: "Ayşe Kartal",
    role: { en: "Lo-Fi Producer", tr: "Lo-Fi Prodüktör", de: "Lo-Fi-Produzentin", es: "Productora Lo-Fi" },
    text: {
      en: "Prodly helped me understand mixing in a way no tutorial ever did. The sourced answers gave me confidence to actually apply what I learned.",
      tr: "Prodly, mix konusunu hiçbir eğitimin yapamadığı şekilde anlamamı sağladı. Kaynaklı cevaplar, öğrendiklerimi uygulamam için bana güven verdi.",
      de: "Prodly hat mir Mixing so erklärt, wie es kein Tutorial je geschafft hat. Die belegten Antworten gaben mir Vertrauen.",
      es: "Prodly me ayudó a entender la mezcla como ningún tutorial lo hizo. Las respuestas con fuentes me dieron confianza.",
    },
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: { en: "Hip-Hop Engineer", tr: "Hip-Hop Mühendisi", de: "Hip-Hop-Engineer", es: "Ingeniero Hip-Hop" },
    text: {
      en: "Having DAW-specific answers is incredible. I ask about Ableton and get exact steps — not generic advice. Saved me hours of searching.",
      tr: "DAW'a özel cevaplar almak inanılmaz. Ableton hakkında soruyorum ve tam adımlar alıyorum — genel tavsiyeler değil. Saatlerce aramaktan kurtardı.",
      de: "DAW-spezifische Antworten sind unglaublich. Ich frage zu Ableton und bekomme exakte Schritte — keine generischen Tipps.",
      es: "Las respuestas específicas por DAW son increíbles. Pregunto sobre Ableton y obtengo pasos exactos, no consejos genéricos.",
    },
    rating: 5,
  },
  {
    name: "Lena Schreiber",
    role: { en: "Electronic Producer", tr: "Elektronik Müzik Prodüktörü", de: "Elektronik-Produzentin", es: "Productora Electrónica" },
    text: {
      en: "The personal archive feature is a game-changer. Every answer I've ever gotten is searchable. It's like building my own production encyclopedia.",
      tr: "Kişisel arşiv özelliği oyunun kurallarını değiştiriyor. Aldığım her cevap aranabilir. Kendi prodüksiyon ansiklopedimi oluşturmak gibi.",
      de: "Das persönliche Archiv ist ein Gamechanger. Jede Antwort ist durchsuchbar — wie eine eigene Produktions-Enzyklopädie.",
      es: "El archivo personal es revolucionario. Cada respuesta es buscable. Es como construir mi propia enciclopedia de producción.",
    },
    rating: 5,
  },
];

export const Testimonials = () => {
  const { t, lang } = useTranslation();

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
                  "{item.text[lang]}"
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{item.role[lang]}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
