import { MessageSquare, Wand2, Download } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  { icon: MessageSquare, titleKey: "how.step1.title", descKey: "how.step1.desc", num: "01", color: "var(--purple)" },
  { icon: Wand2, titleKey: "how.step2.title", descKey: "how.step2.desc", num: "02", color: "var(--mint)" },
  { icon: Download, titleKey: "how.step3.title", descKey: "how.step3.desc", num: "03", color: "var(--purple)" },
];

export const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section id="howItWorks" className="relative py-24 md:py-32 px-5">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="section-label mb-3">{t("how.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("how.title")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 100}>
              <div className="glass-card rounded-[20px] p-8 h-full relative overflow-hidden">
                <span
                  className="absolute top-4 right-5 text-5xl font-extrabold opacity-[0.06]"
                  style={{ fontFamily: "'Space Grotesk'" }}
                >
                  {s.num}
                </span>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${s.color}20` }}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Space Grotesk'" }}>
                  {t(s.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {t(s.descKey)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
