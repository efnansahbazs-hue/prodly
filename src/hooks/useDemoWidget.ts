import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

type DawId = "ableton" | "flstudio" | "logic" | "other";

interface MockResponse {
  text: string;
  source: string;
  sourceColor: string;
  sourceEmoji: string;
}

function getResponse(input: string): MockResponse {
  const q = input.toLowerCase();
  if (q.includes("kick") || q.includes("muddy") || q.includes("dumpf") || q.includes("opaco"))
    return {
      text: "Classic. High-pass at 60Hz, cut 300Hz by 3dB. Check your bass isn't masking the fundamental — solo both and sweep a narrow EQ to find the clash.",
      source: "Sound On Sound",
      sourceColor: "#34D399",
      sourceEmoji: "🟢",
    };
  if (q.includes("sidechain"))
    return {
      text: "Compressor on bass → Audio From → kick channel. Attack 1ms, release 60ms, ratio 4:1. Adjust threshold until the bass ducks ~3-6dB on each hit.",
      source: "Ableton Manual",
      sourceColor: "#60A5FA",
      sourceEmoji: "🔵",
    };
  if (q.includes("reverb"))
    return {
      text: "Pre-delay 20-40ms always. Keeps your dry signal upfront while the tail fills the space. Use a high-cut at 8kHz on the reverb return to avoid sizzle.",
      source: "In The Mix YouTube",
      sourceColor: "#FBBF24",
      sourceEmoji: "🟡",
    };
  if (q.includes("808") || q.includes("punch") || q.includes("punchy"))
    return {
      text: "Tune your 808 to the key of the track. Add light saturation for harmonics on smaller speakers. Sidechain to the kick with a fast release.",
      source: "Verified",
      sourceColor: "#34D399",
      sourceEmoji: "🟢",
    };
  return {
    text: "Try a specific question about your production — like mixing, sound design, arrangement, or a particular technique.",
    source: "Prodly AI",
    sourceColor: "#00C8FF",
    sourceEmoji: "🟣",
  };
}

export function useDemoWidget() {
  const { t } = useTranslation();
  const [selectedDaw, setSelectedDaw] = useState<DawId>("ableton");
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<MockResponse | null>(null);

  const DAWS: { id: DawId; label: string }[] = [
    { id: "ableton", label: "Ableton" },
    { id: "flstudio", label: "FL Studio" },
    { id: "logic", label: "Logic Pro" },
    { id: "other", label: t("demo.dawOther") },
  ];

  const handleAsk = () => {
    if (!input.trim()) return;
    setResponse(getResponse(input));
  };

  return { selectedDaw, setSelectedDaw, input, setInput, response, handleAsk, DAWS };
}
