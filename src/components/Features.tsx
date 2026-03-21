import { Brain, SlidersHorizontal, FolderLock } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const cards = [
  {
    num: "01",
    icon: Brain,
    iconBg: "rgba(124,58,237,0.15)",
    iconColor: "#A78BFA",
    titleKey: "feat.ask.title",
    descKey: "feat.ask.desc",
    badge: { emoji: "🟢", text: "Verified", color: "#34D399" },
  },
  {
    num: "02",
    icon: SlidersHorizontal,
    iconBg: "rgba(52,211,153,0.15)",
    iconColor: "#34D399",
    titleKey: "feat.daw.title",
    descKey: "feat.daw.desc",
    pills: ["Ableton", "FL Studio", "Logic"],
  },
  {
    num: "03",
    icon: FolderLock,
    iconBg: "rgba(124,58,237,0.15)",
    iconColor: "#A78BFA",
    titleKey: "feat.archive.title",
    descKey: "feat.archive.desc",
    badge: { emoji: "🔒", text: "Never lose a solution", color: "#8B8FA8" },
  },
] as const;

export const Features = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="relative py-24 md:py-32 px-5">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-3 text-center">{t("features.label")}</p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-14 text-center text-white"
            style={{ fontFamily: "'Space Grotesk'", textWrap: "balance" }}
          >
            {t("features.title")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <ScrollReveal key={c.num} delay={i * 90}>
              <div
                className="relative overflow-hidden rounded-[20px] p-6 h-full transition-all duration-300 group hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: "2px solid transparent",
                  backgroundClip: "padding-box",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(124,58,237,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Top gradient border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, #7C3AED, transparent)" }}
                />
                {/* Ghost number */}
                <span
                  className="absolute top-3 right-4 text-[72px] font-extrabold leading-none pointer-events-none select-none"
                  style={{ color: "rgba(255,255,255,0.04)", fontFamily: "'Space Grotesk'" }}
                >
                  {c.num}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ background: c.iconBg }}
                >
                  <c.icon className="w-5 h-5" style={{ color: c.iconColor }} />
                </div>

                <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: "'Space Grotesk'" }}>
                  {t(c.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B8FA8" }}>
                  {t(c.descKey)}
                </p>

                {/* Badge or pills */}
                {"badge" in c && c.badge && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium" style={{ color: c.badge.color }}>
                    {c.badge.emoji} {c.badge.text}
                  </span>
                )}
                {"pills" in c && c.pills && (
                  <div className="flex flex-wrap gap-1.5">
                    {c.pills.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                        style={{ border: "1px solid rgba(52,211,153,0.25)", color: "#34D399" }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
