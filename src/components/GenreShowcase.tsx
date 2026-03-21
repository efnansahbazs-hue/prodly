import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

const genres = ["Techno", "Trap", "House", "Ambient", "Hip-Hop"] as const;

const qaData: Record<string, { q: string; a: string }[]> = {
  Techno: [
    { q: "How do I get that driving techno kick?", a: "Layer a punchy acoustic kick with a sine sub. Compress hard, 4:1 ratio. Add subtle saturation for presence in the 2-4kHz range." },
    { q: "Best reverb approach for techno?", a: "Use short, dark reverbs. Pre-delay 10ms, decay under 1.5s. High-cut the return at 6kHz to keep things tight." },
    { q: "How to build tension in a techno track?", a: "Automate a high-pass filter sweep over 16 bars. Layer risers and remove elements gradually — the drop hits harder with contrast." },
  ],
  Trap: [
    { q: "How do I make my 808s hit harder?", a: "Tune to the key, add soft-clip saturation. Sidechain to the kick with a fast release. Boost around 60Hz subtly." },
    { q: "Best hi-hat patterns for trap?", a: "Use triplet rolls with velocity variation. Alternate between 1/16 and 1/32 rolls. Add pitch automation for movement." },
    { q: "How to mix trap vocals?", a: "De-ess first, compress 3-6dB. Add a 1/4 delay and plate reverb. Parallel compress for thickness without losing dynamics." },
  ],
  House: [
    { q: "Classic house chord stab sound?", a: "Use a saw-based pad with a short amp envelope. Add chorus and subtle low-pass filter. Layer with a pluck for attack." },
    { q: "How to get that groovy house bassline?", a: "Sine or triangle wave, mono. Add slight portamento between notes. Sidechain to kick — the pump IS the groove." },
    { q: "Best way to layer house drums?", a: "Acoustic kick + 909 layered. Clap with a short room reverb. Open hats on off-beats. Keep it simple — groove over complexity." },
  ],
  Ambient: [
    { q: "How to create evolving ambient pads?", a: "Use granular synthesis or long wavetable sweeps. Automate filter cutoff and reverb size over 32+ bars. Less is more." },
    { q: "Best reverb for ambient music?", a: "Shimmer reverb with long decay (8-12s). Modulated plate works too. Feed reverb into another reverb for infinite space." },
    { q: "How to add texture to ambient tracks?", a: "Field recordings at low volume. Tape hiss, vinyl crackle. Process with convolution reverb using impulses from real spaces." },
  ],
  "Hip-Hop": [
    { q: "How to sample vinyl for hip-hop beats?", a: "Chop into one-shots or loop sections. Time-stretch to your BPM. Add vinyl noise, pitch down slightly for that lo-fi warmth." },
    { q: "Mixing kick and bass in hip-hop?", a: "Sidechain compression is key. High-pass the bass at 30Hz. Let the kick own 50-80Hz, bass sits at 80-150Hz." },
    { q: "Best drum patterns for boom-bap?", a: "Swing at 54-62%. Kick on 1 and 3, snare on 2 and 4. Ghost kicks and hat variations make it feel human." },
  ],
};

export const GenreShowcase = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<string>("Techno");

  return (
    <section className="relative py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-3 text-center">{t("genre.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10 text-center text-white" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("genre.title")}
          </h2>
        </ScrollReveal>

        {/* Genre tabs */}
        <ScrollReveal delay={80}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {genres.map((g) => {
              const selected = active === g;
              return (
                <button
                  key={g}
                  onClick={() => setActive(g)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95"
                  style={{
                    background: selected ? "rgba(124,58,237,0.2)" : "transparent",
                    border: `1px solid ${selected ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)"}`,
                    color: selected ? "#A78BFA" : "#8B8FA8",
                    boxShadow: selected ? "0 0 12px rgba(124,58,237,0.2)" : "none",
                  }}
                >
                  {g}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Q&A cards */}
        <div className="space-y-4" key={active}>
          {qaData[active]?.map((item, i) => (
            <div
              key={i}
              className="rounded-[16px] p-5 animate-fade-in"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "2px solid #34D399",
                animationDelay: `${i * 80}ms`,
                animationFillMode: "both",
              }}
            >
              <p className="text-sm font-medium text-white mb-2">{item.q}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#8B8FA8" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
