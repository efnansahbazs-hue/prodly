import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Orbs } from "@/components/Orbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Music, Headphones, Radio, Mic2, Play, ArrowRight } from "lucide-react";

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 glass-card border-0 border-b" style={{ borderColor: "var(--border-default)" }}>
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <span className="text-xl font-bold tracking-tight text-gradient-mixed">PRODLY</span>
      <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "var(--text-secondary)" }}>
        <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
        <a href="#showcase" className="hover:text-white transition-colors duration-200">Showcase</a>
        <a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a>
      </div>
      <button className="btn-primary-glow px-5 py-2 rounded-lg text-sm font-medium text-white">
        Launch App
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-dot-bg">
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="ghost-text select-none">PRODLY</span>
    </div>
    <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-xs mb-8" style={{ color: "var(--text-secondary)", borderColor: "var(--border-accent)" }}>
          <span className="w-2 h-2 rounded-full bg-mint animate-pulse-glow" />
          Now in Public Beta
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6" style={{ textWrap: "balance" }}>
          <span className="text-gradient-purple">Create</span>{" "}
          <span className="text-gradient-mint">Music</span>
          <br />
          <span className="text-white">Without Limits</span>
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text-secondary)", textWrap: "pretty" }}>
          Professional-grade music production tools powered by AI. Compose, mix, and master your tracks in a single workspace.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary-glow px-8 py-3.5 rounded-xl text-base font-semibold text-white flex items-center gap-2">
            <Play className="w-4 h-4" /> Start Creating
          </button>
          <button className="glass-card px-8 py-3.5 rounded-xl text-base font-medium text-white flex items-center gap-2 hover:border-purple" style={{ borderColor: "var(--border-accent)" }}>
            Watch Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const features = [
  { icon: Music, title: "AI Composition", desc: "Generate melodies, harmonies, and arrangements with neural networks trained on millions of tracks.", color: "purple" as const },
  { icon: Headphones, title: "Smart Mixing", desc: "Auto-balance frequencies, stereo width, and dynamics. Studio-quality results in seconds.", color: "mint" as const },
  { icon: Radio, title: "Live Collaboration", desc: "Work with producers worldwide in real-time. Shared timelines, stems, and instant feedback.", color: "purple" as const },
  { icon: Mic2, title: "Vocal Processing", desc: "Pitch correction, harmonization, and de-essing with one click. Crystal-clear vocals every time.", color: "mint" as const },
];

const Features = () => (
  <section id="features" className="relative py-32 px-6">
    <div className="container mx-auto max-w-6xl">
      <ScrollReveal>
        <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "var(--mint)" }}>Features</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16" style={{ textWrap: "balance" }}>
          Everything you need to <span className="text-gradient-mixed">produce</span>
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 80}>
            <div className="glass-card rounded-2xl p-8 h-full group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: f.color === "purple" ? "var(--purple-light)" : "var(--mint-light)",
                }}
              >
                <f.icon className="w-6 h-6" style={{ color: f.color === "purple" ? "var(--purple)" : "var(--mint)" }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{f.title}</h3>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const stats = [
  { value: "12.4K", label: "Active Producers" },
  { value: "847K", label: "Tracks Created" },
  { value: "98.7%", label: "Uptime SLA" },
  { value: "23ms", label: "Avg Latency" },
];

const Stats = () => (
  <section className="relative py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="glass-card rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 60}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient-mixed tabular-nums">{s.value}</p>
              <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>{s.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="relative py-32 px-6">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="ghost-text">MUSIC</span>
    </div>
    <div className="container mx-auto max-w-3xl relative z-10 text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to <span className="text-gradient-purple">create</span>?
        </h2>
        <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          Join thousands of producers already building their next hit with Prodly.
        </p>
        <button className="btn-primary-glow px-10 py-4 rounded-xl text-lg font-semibold text-white">
          Get Early Access
        </button>
      </ScrollReveal>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t py-10 px-6" style={{ borderColor: "var(--border-default)" }}>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-bold text-gradient-mixed">PRODLY</span>
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>© 2026 Prodly. All rights reserved.</p>
    </div>
  </footer>
);

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <NoiseOverlay />
    <Orbs />
    <Nav />
    <Hero />
    <Features />
    <Stats />
    <CTA />
    <Footer />
  </div>
);

export default Index;
