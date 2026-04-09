import { useTranslation } from "@/hooks/useTranslation";
import { useLang } from "@/hooks/useLang";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Difficulty } from "@/lib/techniquesData";

const technique = {
  title: "Parallel Compression",
  difficulty: "intermediate" as Difficulty,
  description: {
    en: "Blend a heavily compressed copy of your signal with the dry original to add punch and sustain without destroying dynamics.",
    tr: "Sinyalinizin yoğun şekilde sıkıştırılmış bir kopyasını orijinal kuru sinyal ile harmanlayarak dinamikleri bozmadan punch ve sustain ekleyin.",
    de: "Mische eine stark komprimierte Kopie deines Signals mit dem trockenen Original, um Punch und Sustain hinzuzufügen, ohne die Dynamik zu zerstören.",
    es: "Mezcla una copia muy comprimida de tu señal con el original seco para añadir punch y sustain sin destruir la dinámica.",
  },
  whenToUse: {
    en: "Drums feel lifeless, vocals need presence, bus processing for glue.",
    tr: "Davullar cansız hissettirdiğinde, vokallerin varlık ihtiyacı olduğunda, yapıştırma için bus processing.",
    de: "Drums klingen leblos, Vocals brauchen Präsenz, Bus-Processing für Zusammenhalt.",
    es: "Los drums suenan sin vida, las voces necesitan presencia, bus processing para cohesión.",
  },
  quickTip: {
    en: "Add subtle saturation before the compressor on the parallel bus for smoother blending.",
    tr: "Daha yumuşak harmanlama için paralel bus'taki compressor'dan önce hafif saturation ekleyin.",
    de: "Füge vor dem Kompressor auf dem Parallel-Bus subtile Sättigung hinzu für glatteres Blending.",
    es: "Añade saturación sutil antes del compresor en el bus paralelo para una mezcla más suave.",
  },
  source: "Sound On Sound",
};

export const DailyTechnique = () => {
  const { t } = useTranslation();
  const { lang } = useLang();
  const getLang = (obj: Record<string, string>) => obj[lang] || obj.en;

  const diffKey = `dt.diff.${technique.difficulty}`;

  const diffStyles: Record<Difficulty, { bg: string; color: string }> = {
    beginner: { bg: "rgba(52,211,153,0.15)", color: "#34D399" },
    intermediate: { bg: "rgba(0,200,255,0.2)", color: "#00C8FF" },
    advanced: { bg: "linear-gradient(135deg, #00C8FF, #34D399)", color: "#FFFFFF" },
  };
  const diff = diffStyles[technique.difficulty];

  return (
    <section className="relative py-16 px-5">
      <div className="max-w-xl mx-auto">
        <ScrollReveal>
          <div
            className="rounded-[20px] p-6 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #00C8FF, #34D399)" }} />

            <div className="flex items-center justify-between mb-4">
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: "#34D399" }}>
                {t("dt.label")}
              </p>
              <span
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{ background: diff.bg, color: diff.color }}
              >
                {t(diffKey)}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk'" }}>
              {technique.title}
            </h3>

            <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B8FA8" }}>
              {getLang(technique.description)}
            </p>

            {/* When to use */}
            <div className="rounded-xl px-3 py-2.5 mb-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>{t("dt.whenToUse")}</p>
              <p className="text-[12px]" style={{ color: "#8B8FA8" }}>{getLang(technique.whenToUse)}</p>
            </div>

            {/* Pro tip */}
            <div className="rounded-xl px-3 py-2.5 mb-4" style={{ background: "rgba(52,211,153,0.04)", borderLeft: "3px solid #34D399" }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#34D399" }}>{t("dt.proTip")}</p>
              <p className="text-[12px]" style={{ color: "#8B8FA8" }}>{getLang(technique.quickTip)}</p>
            </div>

            {/* Source */}
            <span className="text-[10px] font-medium px-2.5 py-1 rounded-full" style={{ background: "rgba(52,211,153,0.1)", color: "#34D399" }}>
              🟢 {technique.source}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
