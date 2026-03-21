import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const avatarColors = [
  "linear-gradient(135deg, #7C3AED, #9333EA)",
  "linear-gradient(135deg, #9333EA, #A78BFA)",
  "linear-gradient(135deg, #34D399, #10B981)",
  "linear-gradient(135deg, #7C3AED, #34D399)",
  "linear-gradient(135deg, #A78BFA, #7C3AED)",
];

export const SocialProof = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 px-5">
      <ScrollReveal>
        <div className="flex flex-col items-center gap-4">
          {/* Overlapping avatars */}
          <div className="flex -space-x-2.5">
            {avatarColors.map((bg, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2"
                style={{ background: bg, borderColor: "#0A0A0F", zIndex: 5 - i }}
              />
            ))}
          </div>
          <p className="text-sm text-white font-medium">{t("social.join")}</p>
          {/* 5 stars */}
          <div className="flex gap-0.5 text-lg" style={{ color: "#34D399" }}>
            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
