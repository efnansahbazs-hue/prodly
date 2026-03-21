import { Share2, UserPlus, Gift } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  { icon: Share2, titleKey: "invite.step1", descKey: "invite.step1Desc" },
  { icon: UserPlus, titleKey: "invite.step2", descKey: "invite.step2Desc" },
  { icon: Gift, titleKey: "invite.step3", descKey: "invite.step3Desc" },
];

export const InviteSection = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <ScrollReveal>
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-center mb-3" style={{ color: "#34D399" }}>
          {t("invite.label")}
        </p>
        <h3
          className="text-2xl md:text-3xl font-bold text-center text-white mb-4"
          style={{ fontFamily: "'Space Grotesk'" }}
        >
          {t("invite.title")}
        </h3>
        <p className="text-sm text-center mb-10 mx-auto" style={{ color: "#8B8FA8", maxWidth: 420 }}>
          {t("invite.desc")}
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {steps.map((s, i) => (
          <ScrollReveal key={s.titleKey} delay={i * 80}>
            <div
              className="rounded-[16px] p-5 text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(52,211,153,0.15)", backdropFilter: "blur(20px)" }}
            >
              <div
                className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center"
                style={{ background: "rgba(52,211,153,0.1)" }}
              >
                <s.icon className="w-5 h-5" style={{ color: "#34D399" }} />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>
                {t(s.titleKey)}
              </h4>
              <p className="text-[12px] leading-relaxed" style={{ color: "#8B8FA8" }}>
                {t(s.descKey)}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <p className="text-[11px] text-center mt-5" style={{ color: "#6B7280" }}>
          {t("invite.max")}
        </p>
      </ScrollReveal>
    </div>
  );
};
