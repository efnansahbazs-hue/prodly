import { useState, useMemo } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { useExp } from "@/hooks/useExp";

export type ChatTopic = "kick" | "eq" | "sidechain" | "reverb" | "bass" | "mix" | null;

const TOPICS: Record<string, string[]> = {
  kick: ["kick", "davul", "bas drum", "muddy", "boom"],
  eq: ["eq", "equalizer", "frekans", "boost", "cut", "frequency"],
  sidechain: ["sidechain", "pumping", "ducker", "compressor"],
  reverb: ["reverb", "delay", "echo", "space", "room", "pre-delay"],
  bass: ["808", "bass", "bas", "low end", "sub"],
  mix: ["mix", "miksaj", "master", "loud", "volume", "headroom"],
};

export function detectTopic(text: string): ChatTopic {
  const lower = text.toLowerCase();
  for (const [topic, keywords] of Object.entries(TOPICS)) {
    if (keywords.some((k) => lower.includes(k))) return topic as ChatTopic;
  }
  return null;
}

interface ContextCard {
  title: string;
  content: React.ReactNode;
  border: string; // purple | mint | gray
}

const FreqBar = () => (
  <div className="mt-3 relative h-6 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
    <div className="absolute h-full rounded-full" style={{ left: "4%", width: "12%", background: "rgba(124,58,237,0.5)" }} />
    <div className="flex justify-between text-[9px] px-2 pt-1" style={{ color: "#555" }}>
      <span>20Hz</span><span>200</span><span>1kHz</span><span>5kHz</span><span>20kHz</span>
    </div>
  </div>
);

const BpmCalc = ({ label }: { label: string }) => {
  const [bpm, setBpm] = useState(130);
  const ms = Math.round(60000 / bpm);
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value) || 120)}
          className="w-16 bg-transparent text-white text-[13px] px-2 py-1 rounded-lg text-center"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        />
        <span className="text-[11px]" style={{ color: "#8B8FA8" }}>BPM</span>
      </div>
      <p className="text-[12px]" style={{ color: "#34D399" }}>
        {label}: <span className="font-semibold tabular-nums">{ms}ms</span>
      </p>
    </div>
  );
};

function getCards(topic: ChatTopic, lang: string): ContextCard[] {
  const tr = lang === "tr";
  switch (topic) {
    case "kick":
      return [
        {
          title: tr ? "Frekans Haritası" : "Frequency Map",
          border: "purple",
          content: (
            <>
              <p className="text-[12px]" style={{ color: "#8B8FA8", lineHeight: 1.5 }}>
                {tr ? "Kick burada yaşar: 50-80Hz temel, 2-5kHz attack" : "Kick lives here: 50-80Hz fundamental, 2-5kHz attack"}
              </p>
              <FreqBar />
            </>
          ),
        },
        {
          title: tr ? "Hızlı Ayarlar" : "Quick Settings",
          border: "purple",
          content: (
            <div className="space-y-1.5 text-[11px]" style={{ color: "#8B8FA8" }}>
              <p><span className="text-[#A78BFA] font-medium">Ableton:</span> EQ Eight → HPF 30Hz</p>
              <p><span className="text-[#A78BFA] font-medium">FL:</span> Parametric EQ 2 → HPF</p>
              <p><span className="text-[#A78BFA] font-medium">Logic:</span> Channel EQ → HPF</p>
            </div>
          ),
        },
        {
          title: tr ? "İlgili Teknikler" : "Related Techniques",
          border: "mint",
          content: (
            <div className="space-y-1.5 text-[11px]" style={{ color: "#34D399" }}>
              <p>→ Sidechain Compression</p>
              <p>→ EQ Carving</p>
              <p>→ Transient Shaping</p>
            </div>
          ),
        },
      ];
    case "eq":
      return [
        {
          title: tr ? "EQ Cheat Sheet" : "EQ Cheat Sheet",
          border: "purple",
          content: (
            <div className="space-y-1 text-[11px]" style={{ color: "#8B8FA8" }}>
              <p><span style={{ color: "#7C3AED" }}>■</span> 20-60Hz — Sub bass</p>
              <p><span style={{ color: "#8B5CF6" }}>■</span> 60-250Hz — Warmth / mud</p>
              <p><span style={{ color: "#A78BFA" }}>■</span> 250Hz-2kHz — Body</p>
              <p><span style={{ color: "#6EE7B7" }}>■</span> 2-8kHz — Presence</p>
              <p><span style={{ color: "#34D399" }}>■</span> 8-20kHz — Air</p>
            </div>
          ),
        },
        {
          title: tr ? "Günün Tekniği" : "Today's Technique",
          border: "mint",
          content: <p className="text-[11px]" style={{ color: "#34D399" }}>→ Subtractive EQ: {tr ? "Önce kes, sonra boost" : "Cut first, boost later"}</p>,
        },
        {
          title: "Problem Solver",
          border: "purple",
          content: <p className="text-[11px]" style={{ color: "#8B8FA8" }}>{tr ? "Mix'te bir sorun mu var? Problem Solver dene →" : "Issue in the mix? Try Problem Solver →"}</p>,
        },
      ];
    case "sidechain":
      return [
        {
          title: tr ? "Sidechain Hesaplayıcı" : "Sidechain Calculator",
          border: "purple",
          content: <BpmCalc label="Release" />,
        },
        {
          title: tr ? "DAW Adımları" : "DAW Steps",
          border: "purple",
          content: (
            <div className="space-y-1.5 text-[11px]" style={{ color: "#8B8FA8" }}>
              <p><span className="text-[#A78BFA] font-medium">Ableton:</span> {tr ? "Compressor → Sidechain → Kick input" : "Compressor → Sidechain → Kick input"}</p>
              <p><span className="text-[#A78BFA] font-medium">FL:</span> {tr ? "Fruity Limiter → Sidechain" : "Fruity Limiter → Sidechain"}</p>
              <p><span className="text-[#A78BFA] font-medium">Logic:</span> Compressor → Side Chain → Bus</p>
            </div>
          ),
        },
        {
          title: tr ? "Kaynak" : "Source",
          border: "mint",
          content: <p className="text-[11px]" style={{ color: "#34D399" }}>🟢 {tr ? "Prodly veritabanı — doğrulanmış" : "Prodly database — verified"}</p>,
        },
      ];
    case "reverb":
      return [
        {
          title: tr ? "BPM → ms Hesaplayıcı" : "BPM → ms Calculator",
          border: "purple",
          content: (
            <>
              <p className="text-[11px] mb-2" style={{ color: "#8B8FA8" }}>60000 / BPM = ♩ delay</p>
              <BpmCalc label="Quarter note" />
            </>
          ),
        },
        {
          title: tr ? "Pre-delay İpuçları" : "Pre-delay Tips",
          border: "mint",
          content: (
            <div className="space-y-1 text-[11px]" style={{ color: "#8B8FA8" }}>
              <p>{tr ? "Vokal: 20-40ms pre-delay" : "Vocals: 20-40ms pre-delay"}</p>
              <p>{tr ? "Snare: 10-20ms" : "Snare: 10-20ms"}</p>
              <p>{tr ? "Pad: 0-10ms (daha geniş)" : "Pads: 0-10ms (wider)"}</p>
            </div>
          ),
        },
        {
          title: tr ? "Derinlik Rehberi" : "Depth Guide",
          border: "purple",
          content: <p className="text-[11px]" style={{ color: "#8B8FA8" }}>{tr ? "Uzak = çok reverb, yakın = dry. Otomasyonla perspektif yarat." : "Far = more reverb, close = dry. Use automation for perspective."}</p>,
        },
      ];
    case "bass":
      return [
        {
          title: tr ? "Tuning Yardımcısı" : "Tuning Helper",
          border: "purple",
          content: <p className="text-[11px]" style={{ color: "#8B8FA8" }}>{tr ? "808 her zaman şarkının key'ine uymalı. Spectrum analyzer ile kontrol et." : "808 must match the song's key. Check with spectrum analyzer."}</p>,
        },
        {
          title: tr ? "Saturation Rehberi" : "Saturation Guide",
          border: "mint",
          content: <p className="text-[11px]" style={{ color: "#34D399" }}>{tr ? "Harmonikler küçük hoparlörlerde bass'ı duyulur kılar. Subtle saturation ekle." : "Harmonics make bass audible on small speakers. Add subtle saturation."}</p>,
        },
        {
          title: tr ? "Sidechain Hatırlatma" : "Sidechain Reminder",
          border: "purple",
          content: <p className="text-[11px]" style={{ color: "#8B8FA8" }}>{tr ? "Kick ve 808 çakışıyorsa sidechain şart. Yoksa mix çamur olur." : "If kick and 808 clash, sidechain is essential. Otherwise the mix gets muddy."}</p>,
        },
      ];
    case "mix":
      return [
        {
          title: tr ? "Mix Checklist" : "Mix Checklist",
          border: "purple",
          content: (
            <div className="space-y-1 text-[11px]" style={{ color: "#8B8FA8" }}>
              <p>☐ {tr ? "Headroom: -6dB master" : "Headroom: -6dB master"}</p>
              <p>☐ {tr ? "HPF her kanala" : "HPF on every channel"}</p>
              <p>☐ {tr ? "Mono uyumluluk kontrolü" : "Mono compatibility check"}</p>
              <p>☐ {tr ? "Referans parça A/B" : "Reference track A/B"}</p>
            </div>
          ),
        },
        {
          title: tr ? "Günün Tekniği" : "Today's Technique",
          border: "mint",
          content: <p className="text-[11px]" style={{ color: "#34D399" }}>→ Gain Staging: {tr ? "Her kanal -18dBFS civarında başla" : "Start each channel around -18dBFS"}</p>,
        },
        {
          title: "Problem Solver",
          border: "purple",
          content: <p className="text-[11px]" style={{ color: "#8B8FA8" }}>{tr ? "Mix sorunun ne? Problem Solver ile teşhis koy →" : "What's the mix issue? Diagnose with Problem Solver →"}</p>,
        },
      ];
    default:
      return [];
  }
}

const BORDER_COLORS: Record<string, string> = {
  purple: "#7C3AED",
  mint: "#34D399",
  gray: "rgba(255,255,255,0.1)",
};

interface Props {
  topic: ChatTopic;
}

export const ContextPanel = ({ topic }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { lang } = useLang();
  const { level, exp, progress } = useExp();
  const tr = lang === "tr";

  const cards = useMemo(() => getCards(topic, lang), [topic, lang]);
  const hasContext = cards.length > 0;
  const headerLabel = hasContext
    ? (tr ? "KONUYLA İLGİLİ" : "CONTEXTUAL")
    : (tr ? "HIZLI ARAÇLAR" : "QUICK TOOLS");

  return (
    <div
      className="h-full flex flex-col rounded-2xl overflow-hidden"
      style={{
        width: collapsed ? 0 : 280,
        minWidth: collapsed ? 0 : 280,
        opacity: collapsed ? 0 : 1,
        background: collapsed ? "transparent" : "rgba(255,255,255,0.03)",
        border: collapsed ? "none" : "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        transition: "width 0.3s ease, min-width 0.3s ease, opacity 0.25s ease",
      }}
    >
      {!collapsed && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <span
              className="text-[11px] font-semibold uppercase"
              style={{ color: "#6B7280", letterSpacing: "0.1em" }}
            >
              {headerLabel}
            </span>
            <button
              onClick={() => setCollapsed(true)}
              className="p-1 rounded-lg active:scale-95"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <ChevronRight size={12} className="text-[#6B7280]" />
            </button>
          </div>

          {/* Cards */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3" style={{ scrollbarWidth: "none" }}>
            {hasContext ? (
              cards.map((card, i) => (
                <div
                  key={`${topic}-${i}`}
                  className="rounded-[14px] p-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderLeft: `3px solid ${BORDER_COLORS[card.border]}`,
                    animation: `contextCardIn 0.3s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both`,
                  }}
                >
                  <p className="text-[12px] font-semibold text-white mb-2" style={{ fontFamily: "'Space Grotesk'" }}>
                    {card.title}
                  </p>
                  {card.content}
                </div>
              ))
            ) : (
              <>
                {/* Default: Daily Technique */}
                <div
                  className="rounded-[14px] p-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderLeft: "3px solid #34D399",
                    animation: "contextCardIn 0.3s ease both",
                  }}
                >
                  <p className="text-[12px] font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>
                    {tr ? "Günün Tekniği" : "Daily Technique"}
                  </p>
                  <p className="text-[11px]" style={{ color: "#34D399" }}>Parallel Compression</p>
                  <p className="text-[11px] mt-1" style={{ color: "#8B8FA8" }}>
                    {tr ? "Punch + detail bir arada." : "Punch + detail together."}
                  </p>
                </div>

                {/* Default: EXP */}
                <div
                  className="rounded-[14px] p-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderLeft: "3px solid #7C3AED",
                    animation: "contextCardIn 0.3s ease 80ms both",
                  }}
                >
                  <p className="text-[12px] font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>EXP</p>
                  <p className="text-lg font-bold text-white tabular-nums">{exp}</p>
                  <div className="w-full h-1 rounded-full mt-2" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-full rounded-full" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #7C3AED, #34D399)" }} />
                  </div>
                  <p className="text-[10px] mt-1" style={{ color: "#8B8FA8" }}>
                    Level {level.level} — {tr ? level.name.tr : level.name.en}
                  </p>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {/* Collapsed: show expand button */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="fixed right-2 top-24 p-2 rounded-xl active:scale-95 z-20"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <ChevronLeft size={14} className="text-[#8B8FA8]" />
        </button>
      )}
    </div>
  );
};
