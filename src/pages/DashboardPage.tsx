import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { DailyUsageBar } from "@/components/DailyUsageBar";
import { useTranslation } from "@/hooks/useTranslation";
import { useExp } from "@/hooks/useExp";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function DashboardPage() {
  const { t } = useTranslation();
  const { level, exp, progress } = useExp();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NoiseOverlay /><DotGrid /><Orbs /><Navbar />
      <div className="container mx-auto px-5 pt-24 pb-20 max-w-4xl">
        <ScrollReveal>
          <h1
            className="text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk'" }}
          >
            {t("dash.title")}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DailyUsageBar used={12} max={20} />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <ScrollReveal delay={200}>
            <div className="glass-card-static p-5 rounded-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#8B8FA8" }}>Level</span>
              <p className="text-2xl font-bold text-white mt-1 tabular-nums">{level.level}</p>
              <p className="text-xs mt-0.5" style={{ color: "#34D399" }}>{level.name.en}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="glass-card-static p-5 rounded-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#8B8FA8" }}>EXP</span>
              <p className="text-2xl font-bold text-white mt-1 tabular-nums">{exp.toLocaleString()}</p>
              <div className="w-full h-1.5 rounded-full mt-2" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #7C3AED, #34D399)" }} />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="glass-card-static p-5 rounded-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#8B8FA8" }}>Streak</span>
              <p className="text-2xl font-bold text-white mt-1 tabular-nums">5 🔥</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </div>
  );
}
