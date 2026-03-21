import { useState, useRef, useCallback } from "react";
import { Share2, RotateCcw, ArrowRight, Copy, Check } from "lucide-react";

const GENRES = ["Techno", "House", "Trap", "Ambient", "DnB", "Lo-Fi", "Drill", "Afrobeats", "Hyperpop", "Dark Jazz"];
const MOODS = ["Angry", "Nostalgic", "Euphoric", "Lonely", "Chaotic", "Peaceful", "Mysterious", "Hopeful", "Paranoid", "Triumphant"];
const WILDCARDS = [
  "Only 3 samples",
  "No kick",
  "Must include a dog bark",
  "Make it sound Turkish",
  "BPM under 80",
  "No bass below 200Hz",
  "Only free plugins",
  "Record your own foley",
  "Use a field recording",
  "Flip a nursery rhyme",
];

const QUIPS = [
  "Good luck with that one.",
  "Classic combo.",
  "Someone actually made this. Allegedly.",
  "This one's going to be weird.",
  "You asked for it.",
  "Respect if you pull this off.",
  "Bold. Very bold.",
  "This is either genius or disaster.",
];

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

interface SpinResult {
  genre: string;
  mood: string;
  wildcard: string;
}

const ReelStrip = ({
  items,
  spinning,
  result,
  delay,
  colorStyle,
}: {
  items: string[];
  spinning: boolean;
  result: string;
  delay: number;
  colorStyle: React.CSSProperties;
}) => {
  // Build a strip of repeated items for the spin illusion
  const strip = [...items, ...items, ...items, result];

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{
        height: 56,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="flex flex-col items-center justify-center transition-transform"
        style={{
          transform: spinning
            ? `translateY(-${(strip.length - 1) * 56}px)`
            : "translateY(0px)",
          transition: spinning
            ? `transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
            : "none",
        }}
      >
        {spinning ? (
          strip.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="h-[56px] flex items-center justify-center px-4 w-full"
            >
              <span className="text-sm font-semibold text-center whitespace-nowrap" style={i === strip.length - 1 ? colorStyle : { color: "#6B7280" }}>
                {item}
              </span>
            </div>
          ))
        ) : (
          <div className="h-[56px] flex items-center justify-center px-4 w-full">
            <span className="text-sm font-semibold text-center" style={colorStyle}>
              {result}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

interface ProdlySpinProps {
  compact?: boolean;
}

export const ProdlySpin = ({ compact = false }: ProdlySpinProps) => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<SpinResult | null>(null);
  const [quip, setQuip] = useState("");
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [spinCount, setSpinCount] = useState(() => {
    const stored = localStorage.getItem("prodly_spin_count");
    return stored ? parseInt(stored) : 847;
  });
  const spinRef = useRef(false);

  const doSpin = useCallback(() => {
    if (spinRef.current) return;
    spinRef.current = true;
    setSpinning(true);
    setShowShare(false);

    const newResult: SpinResult = {
      genre: pick(GENRES),
      mood: pick(MOODS),
      wildcard: pick(WILDCARDS),
    };
    setResult(newResult);
    setQuip(pick(QUIPS));

    const newCount = spinCount + 1;
    setSpinCount(newCount);
    localStorage.setItem("prodly_spin_count", String(newCount));

    setTimeout(() => {
      setSpinning(false);
      spinRef.current = false;
    }, 1800);
  }, [spinCount]);

  const shareText = result
    ? `🎰 Prodly Spin Brief:\n\n🎵 ${result.genre}\n🎭 ${result.mood}\n🃏 ${result.wildcard}\n\nCan you make this? → prodly.io`
    : "";

  const copyLink = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  return (
    <div className={compact ? "" : "glass-card-static p-6 rounded-2xl"}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">🎰</span>
        <h3
          className="text-base font-bold text-white"
          style={{ fontFamily: "'Space Grotesk'" }}
        >
          Prodly Spin
        </h3>
        <span className="text-[10px] font-medium ml-auto" style={{ color: "#6B7280" }}>
          Spin your brief.
        </span>
      </div>

      {/* Reels */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div>
          <span className="text-[9px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: "#A78BFA" }}>
            Genre
          </span>
          <ReelStrip
            items={GENRES}
            spinning={spinning}
            result={result?.genre || "—"}
            delay={0}
            colorStyle={{ color: "#A78BFA" }}
          />
        </div>
        <div>
          <span className="text-[9px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: "#34D399" }}>
            Mood
          </span>
          <ReelStrip
            items={MOODS}
            spinning={spinning}
            result={result?.mood || "—"}
            delay={150}
            colorStyle={{ color: "#34D399" }}
          />
        </div>
        <div>
          <span className="text-[9px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: "#8B8FA8" }}>
            Wild Card
          </span>
          <ReelStrip
            items={WILDCARDS}
            spinning={spinning}
            result={result?.wildcard || "—"}
            delay={300}
            colorStyle={{ color: "#fff" }}
          />
        </div>
      </div>

      {/* Quip */}
      {result && !spinning && (
        <p
          className="text-xs text-center mb-4 animate-fade-in-up italic"
          style={{ color: "#6B7280" }}
        >
          "{quip}"
        </p>
      )}

      {/* Spin button */}
      {!result || spinning ? (
        <div className="flex justify-center">
          <div
            className="rounded-full p-[2px] animate-move-border"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)",
              backgroundSize: "200% 200%",
            }}
          >
            <button
              onClick={doSpin}
              disabled={spinning}
              className="rounded-full px-10 py-3 text-sm font-bold text-white transition-transform duration-200 active:scale-[0.95] disabled:opacity-60"
              style={{ background: "#7C3AED" }}
            >
              {spinning ? "Spinning..." : "🎰 SPIN"}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-2 animate-fade-in-up">
          <button
            onClick={doSpin}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all active:scale-[0.97]"
            style={{ color: "#8B8FA8", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <RotateCcw size={13} /> Spin Again
          </button>
          <button
            onClick={() => setShowShare(!showShare)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all active:scale-[0.97]"
            style={{ color: "#A78BFA", border: "1px solid rgba(124,58,237,0.3)" }}
          >
            <Share2 size={13} /> Share this brief
          </button>
          <button
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all active:scale-[0.97]"
            style={{ background: "#34D399", color: "#0A0A0F" }}
          >
            Try to make it <ArrowRight size={13} />
          </button>
        </div>
      )}

      {/* Share panel */}
      {showShare && result && (
        <div className="mt-4 animate-fade-in-up">
          {/* Share card preview */}
          <div
            className="p-5 rounded-xl mb-3 relative overflow-hidden"
            style={{
              background: "#0A0A0F",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            <div className="space-y-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                Prodly Spin Brief
              </span>
              <p className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk'" }}>
                <span style={{ color: "#A78BFA" }}>{result.genre}</span>
                <span style={{ color: "#6B7280" }}> × </span>
                <span style={{ color: "#34D399" }}>{result.mood}</span>
              </p>
              <p className="text-sm text-white">{result.wildcard}</p>
              <p className="text-[10px] mt-2" style={{ color: "#4B5563" }}>prodly.io</p>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex gap-2">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all"
              style={{ color: "#fff", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              𝕏 Twitter
            </a>
            <button
              onClick={copyLink}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all"
              style={{
                color: copied ? "#34D399" : "#8B8FA8",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${copied ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.08)"}`,
              }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? "Copied!" : "Copy link"}
            </button>
          </div>
        </div>
      )}

      {/* Stats */}
      <p className="text-[10px] text-center mt-4" style={{ color: "#4B5563" }}>
        Spun {spinCount.toLocaleString()} times. Only 3 claimed they made it.
      </p>
    </div>
  );
};
