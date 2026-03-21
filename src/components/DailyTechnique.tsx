import { useTranslation } from "@/hooks/useTranslation";
import { useLang } from "@/hooks/useLang";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Difficulty } from "@/lib/techniquesData";
import type { Lang } from "@/lib/translations";
import type { Difficulty } from "@/lib/techniquesData";

const technique = {
  title: "Parallel Compression",
  difficulty: "intermediate" as Difficulty,
  description: {
    en: "Blend a heavily compressed copy of your signal with the dry original to add punch and sustain without destroying dynamics.",
    tr: "Sinyalinizin yoğun şekilde sıkıştırılmış bir kopyasını orijinal kuru sinyal ile harmanlayarak dinamikleri bozmadan punch ve sustain ekleyin.",
  },
  whenToUse: {
    en: "Drums feel lifeless, vocals need presence, bus processing for glue.",
    tr: "Davullar cansız hissettirdiğinde, vokallerin varlık ihtiyacı olduğunda, yapıştırma için bus processing.",
  },
  quickTip: {
    en: "Add subtle saturation before the compressor on the parallel bus for smoother blending.",
    tr: "Daha yumuşak harmanlama için paralel bus'taki compressor'dan önce hafif saturation ekleyin.",
  },
  source: "Sound On Sound",
};

const diffStyles: Record<Difficulty, { bg: string; color: string; label: string }> = {
  beginner: { bg: "rgba(52,211,153,0.15)", color: "#34D399", label: "Beginner" },
  intermediate: { bg: "rgba(124,58,237,0.2)", color: "#A78BFA", label: "Intermediate" },
  advanced: { bg: "linear-gradient(135deg, #7C3AED, #34D399)", color: "#FFFFFF", label: "Advanced" },
};

export const DailyTechnique = () => {
  const { t } = useTranslation();
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
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #7C3AED, #34D399)" }} />

            <div className="flex items-center justify-between mb-4">
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: "#34D399" }}>
                {t("dt.label")}
              </p>
              <span
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{ background: diff.bg, color: diff.color }}
              >
                {diff.label}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk'" }}>
              {technique.title}
            </h3>

            <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B8FA8" }}>
              {technique.description}
            </p>

            {/* When to use */}
            <div className="rounded-xl px-3 py-2.5 mb-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>When to use</p>
              <p className="text-[12px]" style={{ color: "#8B8FA8" }}>{technique.whenToUse}</p>
            </div>

            {/* Pro tip */}
            <div className="rounded-xl px-3 py-2.5 mb-4" style={{ background: "rgba(52,211,153,0.04)", borderLeft: "3px solid #34D399" }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#34D399" }}>Pro tip</p>
              <p className="text-[12px]" style={{ color: "#8B8FA8" }}>{technique.quickTip}</p>
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
