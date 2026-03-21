import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: "12.4K", key: "social.producers" },
  { value: "847K", key: "social.tracks" },
  { value: "98.7%", key: "social.uptime" },
  { value: "23ms", key: "social.latency" },
];

export const SocialProof = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 px-5">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="glass-card-static p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.key} className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-gradient-mixed tabular-nums" style={{ fontFamily: "'Space Grotesk'" }}>
                  {s.value}
                </p>
                <p className="text-xs md:text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                  {t(s.key)}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
