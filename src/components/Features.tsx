import { Music, Headphones, Radio, Mic2, Disc3, Library } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const features = [
  { icon: Music, titleKey: "feat.ai.title", descKey: "feat.ai.desc", color: "purple" },
  { icon: Headphones, titleKey: "feat.mix.title", descKey: "feat.mix.desc", color: "mint" },
  { icon: Radio, titleKey: "feat.collab.title", descKey: "feat.collab.desc", color: "purple" },
  { icon: Mic2, titleKey: "feat.vocal.title", descKey: "feat.vocal.desc", color: "mint" },
  { icon: Disc3, titleKey: "feat.master.title", descKey: "feat.master.desc", color: "purple" },
  { icon: Library, titleKey: "feat.sample.title", descKey: "feat.sample.desc", color: "mint" },
] as const;

export const Features = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="relative py-24 md:py-32 px-5">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-label mb-3">{t("features.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-14" style={{ fontFamily: "'Space Grotesk'", textWrap: "balance" }}>
            {t("features.title")}
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.titleKey} delay={i * 70}>
              <div className="glass-card rounded-[20px] p-7 h-full group">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: f.color === "purple" ? "var(--purple-light)" : "var(--mint-light)",
                  }}
                >
                  <f.icon
                    className="w-5 h-5"
                    style={{ color: f.color === "purple" ? "var(--purple)" : "var(--mint)" }}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white" style={{ fontFamily: "'Space Grotesk'" }}>
                  {t(f.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {t(f.descKey)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
