import { Settings, MessageCircle, BadgeCheck } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  { icon: Settings, titleKey: "how.step1.title", descKey: "how.step1.desc" },
  { icon: MessageCircle, titleKey: "how.step2.title", descKey: "how.step2.desc" },
  { icon: BadgeCheck, titleKey: "how.step3.title", descKey: "how.step3.desc" },
];

export const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section id="howItWorks" className="relative py-24 md:py-32 px-5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-3 text-center">{t("how.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center text-white" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("how.title")}
          </h2>
        </ScrollReveal>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[56px] right-[56px] h-[2px]">
            <svg width="100%" height="2" className="overflow-visible">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00C8FF" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
              <line
                x1="0" y1="1" x2="100%" y2="1"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="8 6"
                className="animate-dash"
              />
            </svg>
          </div>

          {/* Connecting line (mobile) */}
          <div className="md:hidden absolute top-[28px] bottom-[28px] left-[27px] w-[2px]">
            <svg width="2" height="100%" className="overflow-visible">
              <defs>
                <linearGradient id="lineGradV" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00C8FF" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
              <line
                x1="1" y1="0" x2="1" y2="100%"
                stroke="url(#lineGradV)"
                strokeWidth="2"
                strokeDasharray="8 6"
                className="animate-dash"
              />
            </svg>
          </div>

          {steps.map((s, i) => (
            <ScrollReveal key={s.titleKey} delay={i * 120}>
              <div className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-3 flex-1 relative z-10">
                {/* Circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #00C8FF, #34D399)",
                    boxShadow: "0 0 20px rgba(0,200,255,0.3)",
                  }}
                >
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div className="md:text-center">
                  <h3 className="text-base font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>
                    {t(s.titleKey)}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: "#8B8FA8" }}>
                    {t(s.descKey)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
