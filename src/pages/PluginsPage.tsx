import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Search } from "lucide-react";

interface Plugin {
  id: string;
  name: string;
  category: string;
  type: string;
  price: "free" | "paid";
  priceLabel?: string;
  desc: string;
  tags: string[];
}

const CATEGORIES = ["All", "Synths", "EQ", "Compressor", "Reverb", "Delay", "Distortion", "Utility", "Analyzer"];

const PLUGINS: Plugin[] = [
  { id: "vital", name: "Vital", category: "Synths", type: "Wavetable Synth", price: "free", desc: "Spectral warping wavetable synth. The best free synth, period. Competes with Serum.", tags: ["wavetable", "synth", "sound design"] },
  { id: "tdr-nova", name: "TDR Nova", category: "EQ", type: "Dynamic EQ", price: "free", desc: "Surgical dynamic EQ. Transparent and CPU-efficient. Used on mastering chains.", tags: ["eq", "dynamic", "mastering"] },
  { id: "tdr-kotelnikov", name: "TDR Kotelnikov", category: "Compressor", type: "Wideband Compressor", price: "free", desc: "Clean, transparent bus compressor. Excellent on master bus and drum groups.", tags: ["compressor", "bus", "mastering"] },
  { id: "orilriver", name: "OrilRiver", category: "Reverb", type: "Algorithmic Reverb", price: "free", desc: "12 early reflections, 5 late reverb variations. Surprisingly good for a free reverb.", tags: ["reverb", "algorithmic", "space"] },
  { id: "span", name: "Voxengo SPAN", category: "Analyzer", type: "Spectrum Analyzer", price: "free", desc: "Industry-standard free spectrum analyzer. Highly configurable, low CPU.", tags: ["analyzer", "metering", "spectrum"] },
  { id: "serum", name: "Serum", category: "Synths", type: "Wavetable Synth", price: "paid", priceLabel: "$189", desc: "Industry standard wavetable synth. Massive preset ecosystem and wavetable editing.", tags: ["wavetable", "synth", "xfer"] },
  { id: "fabfilter-pro-q3", name: "FabFilter Pro-Q 3", category: "EQ", type: "Parametric EQ", price: "paid", priceLabel: "$179", desc: "The EQ every pro uses. Dynamic bands, mid/side, linear phase. Incredible UI.", tags: ["eq", "parametric", "fabfilter"] },
  { id: "fabfilter-pro-c2", name: "FabFilter Pro-C 2", category: "Compressor", type: "Compressor", price: "paid", priceLabel: "$179", desc: "Versatile compressor with 8 styles. Clean to aggressive. Visual feedback is unmatched.", tags: ["compressor", "fabfilter", "dynamics"] },
  { id: "valhalla-room", name: "Valhalla Room", category: "Reverb", type: "Algorithmic Reverb", price: "paid", priceLabel: "$50", desc: "Lush algorithmic reverb. Incredible value. Used in countless Hollywood scores.", tags: ["reverb", "valhalla", "algorithmic"] },
  { id: "valhalla-supermassive", name: "Valhalla Supermassive", category: "Delay", type: "Delay / Reverb", price: "free", desc: "Massive delays and reverbs for ambient, drone, and experimental textures.", tags: ["delay", "reverb", "ambient", "free"] },
  { id: "soundtoys-decapitator", name: "Soundtoys Decapitator", category: "Distortion", type: "Analog Saturation", price: "paid", priceLabel: "$199", desc: "5 saturation models (tube, tape, transistor). The go-to for analog warmth and grit.", tags: ["saturation", "distortion", "analog"] },
  { id: "kilohearts-snap-heap", name: "Kilohearts Snap Heap", category: "Utility", type: "Multi-FX Host", price: "free", desc: "Host multiple Kilohearts effects in series/parallel. Free tier includes essential effects.", tags: ["utility", "multi-fx", "modular"] },
  { id: "youlean", name: "Youlean Loudness Meter", category: "Analyzer", type: "Loudness Meter", price: "free", desc: "LUFS metering for streaming platforms. Short-term, integrated, and true peak. Essential.", tags: ["metering", "lufs", "mastering"] },
  { id: "rc20", name: "RC-20 Retro Color", category: "Distortion", type: "Lo-Fi / Character", price: "paid", priceLabel: "$99", desc: "Noise, wobble, distortion, space, magnetic. 6 modules for instant lo-fi character.", tags: ["lofi", "character", "retro"] },
  { id: "pro-l2", name: "FabFilter Pro-L 2", category: "Utility", type: "Limiter", price: "paid", priceLabel: "$199", desc: "Transparent brickwall limiter with 8 algorithms. True peak limiting. Industry standard.", tags: ["limiter", "mastering", "fabfilter"] },
];

const STARTER_KIT = PLUGINS.filter((p) => ["vital", "tdr-nova", "tdr-kotelnikov", "orilriver", "span"].includes(p.id));

export default function PluginsPage() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<"all" | "free" | "paid">("all");

  const filtered = PLUGINS.filter((p) => {
    if (activeCat !== "All" && p.category !== activeCat) return false;
    if (priceFilter !== "all" && p.price !== priceFilter) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.tags.some((t) => t.includes(search.toLowerCase()))) return false;
    return true;
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NoiseOverlay /><DotGrid /><Orbs /><Navbar />

      <div className="container mx-auto px-5 pt-24 pb-20 max-w-5xl">
        <ScrollReveal>
          <span className="section-label">PLUGIN DATABASE</span>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3"
            style={{ fontFamily: "'Space Grotesk'" }}
          >
            Find the right tool for the job.
          </h1>
          <p className="text-sm mb-8" style={{ color: "#8B8FA8" }}>
            Search, compare, and discover plugins for every stage of production.
          </p>
        </ScrollReveal>

        {/* Starter Kit featured card */}
        <ScrollReveal delay={100}>
          <div
            className="glass-card-static p-6 rounded-2xl mb-8 relative overflow-hidden"
            style={{ borderTop: "2px solid transparent", backgroundImage: "linear-gradient(rgba(255,255,255,0.04), rgba(255,255,255,0.04)), linear-gradient(90deg, #00C8FF, #34D399)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box", borderTopWidth: 2 }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#34D399" }}>
                  Starter Kit
                </span>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(52,211,153,0.15)", color: "#34D399" }}
                >
                  100% FREE
                </span>
              </div>
              <h3
                className="text-lg font-bold text-white mb-1"
                style={{ fontFamily: "'Space Grotesk'" }}
              >
                $0 budget. Everything you need.
              </h3>
              <p className="text-xs mb-4" style={{ color: "#8B8FA8" }}>
                These five plugins cover synth, EQ, compression, reverb, and metering. Professional results, zero cost.
              </p>
              <div className="flex flex-wrap gap-2">
                {STARTER_KIT.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-xs font-medium text-white">{p.name}</span>
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                      style={{ background: "#34D399", color: "#0A0A0F" }}
                    >
                      FREE
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={200}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#6B7280" }} />
              <input
                type="text"
                placeholder="Search plugins..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-sm text-white placeholder:text-[#6B7280] outline-none transition-all focus:border-[rgba(52,211,153,0.5)]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>

            {/* Category pills */}
            <div className="flex gap-1.5 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium transition-all active:scale-[0.97]"
                  style={{
                    color: activeCat === cat ? "#34D399" : "#8B8FA8",
                    background: activeCat === cat ? "rgba(52,211,153,0.1)" : "transparent",
                    border: `1px solid ${activeCat === cat ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Price filter */}
            <div className="flex gap-1.5">
              {(["all", "free", "paid"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setPriceFilter(f)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium transition-all capitalize"
                  style={{
                    color: priceFilter === f ? "#34D399" : "#8B8FA8",
                    background: priceFilter === f ? "rgba(52,211,153,0.1)" : "transparent",
                    border: `1px solid ${priceFilter === f ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Plugin grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((plugin, i) => (
            <ScrollReveal key={plugin.id} delay={100 + i * 60}>
              <div className="glass-card p-5 rounded-2xl h-full flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-sm font-bold text-white">{plugin.name}</h3>
                    <span className="text-[10px]" style={{ color: "#6B7280" }}>{plugin.type}</span>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={
                      plugin.price === "free"
                        ? { background: "#34D399", color: "#0A0A0F" }
                        : { background: "rgba(0,200,255,0.2)", color: "#00C8FF" }
                    }
                  >
                    {plugin.price === "free" ? "FREE" : plugin.priceLabel}
                  </span>
                </div>
                <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: "#8B8FA8" }}>
                  {plugin.desc}
                </p>
                <div className="flex gap-1 flex-wrap">
                  {plugin.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] px-2 py-0.5 rounded-full"
                      style={{ color: "#6B7280", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm" style={{ color: "#6B7280" }}>No plugins match your filters.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
