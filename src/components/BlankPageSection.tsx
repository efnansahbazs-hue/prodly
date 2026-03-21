import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BlankPageStage1 } from "@/components/blankpage/BlankPageStage1";
import { BlankPageStage2 } from "@/components/blankpage/BlankPageStage2";
import { BlankPageStage3 } from "@/components/blankpage/BlankPageStage3";
import { ChordStarter } from "@/components/blankpage/ChordStarter";
import { GrooveBuilder } from "@/components/blankpage/GrooveBuilder";

export const BlankPageSection = () => {
  const { t } = useTranslation();
  const [stage, setStage] = useState(0); // 0=choice, 1=project, 2=blueprint

  return (
    <section className="relative py-24 md:py-32 px-5">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-center mb-3" style={{ color: "#34D399" }}>
            {t("bp.label")}
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-center text-white mb-4"
            style={{ fontFamily: "'Space Grotesk'" }}
          >
            {t("bp.title")}
          </h2>
          <p className="text-sm text-center mb-12 mx-auto" style={{ color: "#8B8FA8", maxWidth: 440 }}>
            {t("bp.desc")}
          </p>
        </ScrollReveal>

        {/* 3 Stages */}
        <div className="space-y-6 max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <BlankPageStage1 active={stage === 0} onSelect={() => setStage(1)} />
          </ScrollReveal>
          {stage >= 1 && (
            <ScrollReveal delay={80}>
              <BlankPageStage2 onContinue={() => setStage(2)} />
            </ScrollReveal>
          )}
          {stage >= 2 && (
            <ScrollReveal delay={160}>
              <BlankPageStage3 />
            </ScrollReveal>
          )}
        </div>

        {/* Chord + Groove side by side */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <ChordStarter />
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <GrooveBuilder />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
