import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { ScrollReveal } from "@/components/ScrollReveal";
import { EffectDetail } from "@/components/tools/EffectDetail";
import { EFFECTS_DATA, EFFECT_CATEGORIES } from "@/lib/effectsData";

export default function EffectsPage() {
  const [activeCategory, setActiveCategory] = useState(EFFECT_CATEGORIES[0].key);
  const [selectedEffect, setSelectedEffect] = useState(EFFECTS_DATA[0].id);

  const filteredEffects = EFFECTS_DATA.filter((e) => e.category === activeCategory);
  const currentEffect = EFFECTS_DATA.find((e) => e.id === selectedEffect) || filteredEffects[0];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NoiseOverlay /><DotGrid /><Orbs /><Navbar />

      <div className="container mx-auto px-5 pt-24 pb-20 max-w-6xl">
        <ScrollReveal>
          <span className="section-label">EFFECTS REFERENCE</span>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mt-2 mb-8"
            style={{ fontFamily: "'Space Grotesk'" }}
          >
            Every effect, explained.
          </h1>
        </ScrollReveal>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="hidden md:block w-48 flex-shrink-0 space-y-1">
            {EFFECT_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  const first = EFFECTS_DATA.find((e) => e.category === cat.key);
                  if (first) setSelectedEffect(first.id);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all"
                style={{
                  color: activeCategory === cat.key ? "#34D399" : "#8B8FA8",
                  background: activeCategory === cat.key ? "rgba(52,211,153,0.06)" : "transparent",
                  borderLeft: activeCategory === cat.key ? "3px solid #34D399" : "3px solid transparent",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile category pills */}
          <div className="md:hidden flex gap-2 overflow-x-auto pb-3 mb-4 w-full">
            {EFFECT_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  const first = EFFECTS_DATA.find((e) => e.category === cat.key);
                  if (first) setSelectedEffect(first.id);
                }}
                className="px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap transition-all"
                style={{
                  color: activeCategory === cat.key ? "#34D399" : "#8B8FA8",
                  background: activeCategory === cat.key ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeCategory === cat.key ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Effect list */}
            <div className="flex gap-2 flex-wrap mb-6">
              {filteredEffects.map((effect) => (
                <button
                  key={effect.id}
                  onClick={() => setSelectedEffect(effect.id)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-[0.97]"
                  style={{
                    color: selectedEffect === effect.id ? "#fff" : "#8B8FA8",
                    background: selectedEffect === effect.id ? "rgba(0,200,255,0.2)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${selectedEffect === effect.id ? "rgba(0,200,255,0.4)" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  {effect.name}
                </button>
              ))}
            </div>

            {/* Detail panel */}
            {currentEffect && (
              <div key={currentEffect.id} className="animate-fade-in-up">
                <EffectDetail effect={currentEffect} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
