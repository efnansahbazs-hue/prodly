import { Stethoscope, Monitor, BookCheck } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { ScrollReveal } from "@/components/ScrollReveal";

const items = [
  {
    icon: Stethoscope,
    title: { en: "Problem diagnosis", tr: "Sorun teşhisi" },
    desc: { en: "Step-by-step fix wherever you're stuck", tr: "Takıldığın yerde adım adım çözüm" },
  },
  {
    icon: Monitor,
    title: { en: "DAW-specific guidance", tr: "DAW'a özel rehberlik" },
    desc: { en: "Tailored answers for Ableton, FL, Logic", tr: "Ableton, FL, Logic için özel cevaplar" },
  },
  {
    icon: BookCheck,
    title: { en: "Sourced answers", tr: "Kaynaklı cevaplar" },
    desc: { en: "Every answer backed by real sources", tr: "Her cevap gerçek kaynaklara dayanır" },
  },
];

export const WhatProdlyDoes = () => {
  const { lang } = useLang();
  const get = (obj: Record<string, string>) => obj[lang] || obj.en;

  return (
    <section className="relative py-14 px-5">
      <div className="container mx-auto max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex flex-col items-center">
                <item.icon
                  className="mb-3"
                  size={22}
                  strokeWidth={1.5}
                  style={{ color: "#8B8FA8" }}
                />
                <p
                  className="text-[13px] font-semibold text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk'" }}
                >
                  {get(item.title)}
                </p>
                <p className="text-[12px] leading-relaxed" style={{ color: "#6B7280" }}>
                  {get(item.desc)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
