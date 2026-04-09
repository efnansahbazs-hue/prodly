import React from "react";

export interface AvatarPreset {
  id: string;
  label: string;
  render: React.ReactNode;
}

const s = (bg: string, content: React.ReactNode) => (
  <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: bg }}>
    {content}
  </div>
);

/* ─── Row 1: Sanatçı ─── */
const artistAvatars: AvatarPreset[] = [
  {
    id: "dj-hooded",
    label: "DJ",
    render: s("linear-gradient(135deg, #050a0d, #2d1b69)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <ellipse cx="24" cy="16" rx="10" ry="11" fill="#050a0d" />
        <path d="M14 14 Q14 8 24 6 Q34 8 34 14" fill="none" stroke="#2d1b69" strokeWidth="2" />
        <rect x="12" y="12" width="4" height="6" rx="2" fill="#00C8FF" />
        <rect x="32" y="12" width="4" height="6" rx="2" fill="#00C8FF" />
        <path d="M12 15 Q12 10 24 8 Q36 10 36 15" fill="none" stroke="#00C8FF" strokeWidth="1.5" />
        <circle cx="20" cy="17" r="1.5" fill="#00C8FF" opacity="0.9" />
        <circle cx="28" cy="17" r="1.5" fill="#00C8FF" opacity="0.9" />
        <path d="M14 30 Q24 36 34 30" fill="#050a0d" />
      </svg>
    )),
  },
  {
    id: "producer",
    label: "Producer",
    render: s("linear-gradient(135deg, #0a1214, #0d1a1f)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <ellipse cx="26" cy="20" rx="9" ry="10" fill="#0a1214" stroke="#334" strokeWidth="0.5" />
        <rect x="18" y="16" width="16" height="5" rx="2.5" fill="none" stroke="#00C8FF" strokeWidth="1" opacity="0.6" />
        <rect x="19" y="17" width="6" height="3" rx="1" fill="rgba(0,200,255,0.3)" />
        <rect x="27" y="17" width="6" height="3" rx="1" fill="rgba(0,200,255,0.3)" />
        <circle cx="22" cy="18.5" r="0.8" fill="#00C8FF" />
        <circle cx="30" cy="18.5" r="0.8" fill="#00C8FF" />
        <path d="M22 25 Q26 27 30 25" fill="none" stroke="#555" strokeWidth="0.5" />
      </svg>
    )),
  },
  {
    id: "wave-rider",
    label: "Wave Rider",
    render: s("linear-gradient(135deg, #0a2922, #134e4a)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <path d="M16 20 Q20 14 24 20 Q28 26 32 20" fill="none" stroke="#34D399" strokeWidth="2" opacity="0.8" />
        <path d="M14 24 Q18 18 22 24 Q26 30 30 24 Q34 18 36 24" fill="none" stroke="#6EE7B7" strokeWidth="1.5" opacity="0.6" />
        <path d="M12 28 Q18 22 24 28 Q30 34 36 28" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.4" />
        <circle cx="21" cy="19" r="1" fill="#6EE7B7" />
        <circle cx="27" cy="19" r="1" fill="#6EE7B7" />
      </svg>
    )),
  },
  {
    id: "pixel-beat",
    label: "Pixel Beat",
    render: s("linear-gradient(135deg, #050a0d, #0a2922)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        {[18,21,24,27,30].map((x, i) => [15,18,21,24,27].map((y, j) => (
          <rect key={`${i}-${j}`} x={x} y={y} width="2.5" height="2.5" rx="0.3"
            fill={(i+j) % 3 === 0 ? "#00C8FF" : (i+j) % 3 === 1 ? "#34D399" : "transparent"}
            opacity={(i+j) % 2 === 0 ? 0.9 : 0.5}
          />
        )))}
      </svg>
    )),
  },
  {
    id: "mystic",
    label: "Mystic",
    render: s("linear-gradient(135deg, #1a0a3e, #2d1b69)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <path d="M16 12 L24 8 L32 12 L32 28 Q24 34 16 28Z" fill="#050a0d" stroke="#00C8FF" strokeWidth="0.5" opacity="0.5" />
        <circle cx="24" cy="22" r="5" fill="none" stroke="#00C8FF" strokeWidth="1" opacity="0.7" />
        <circle cx="24" cy="22" r="3" fill="rgba(0,200,255,0.3)" />
        <path d="M21 22 Q22 20 24 22 Q26 20 27 22" fill="none" stroke="#6EE7B7" strokeWidth="0.5" />
        <circle cx="24" cy="22" r="1" fill="#00C8FF" opacity="0.9" />
      </svg>
    )),
  },
  {
    id: "voltage",
    label: "Voltage",
    render: s("linear-gradient(135deg, #050a0d, #2d1b69)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <path d="M24 10 L20 20 L26 20 L22 32" fill="none" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 16 L24 10 L30 16" fill="none" stroke="#00C8FF" strokeWidth="1" opacity="0.6" />
        <circle cx="21" cy="18" r="1" fill="#00C8FF" />
        <circle cx="27" cy="18" r="1" fill="#00C8FF" />
        <line x1="20" y1="24" x2="28" y2="24" stroke="#00C8FF" strokeWidth="0.5" opacity="0.4" />
      </svg>
    )),
  },
];

/* ─── Row 2: Karakter ─── */
const characterAvatars: AvatarPreset[] = [
  {
    id: "wolf",
    label: "Wolf",
    render: s("linear-gradient(135deg, #0a1214, #2d2d44)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <path d="M14 18 L20 10 L24 16 L28 10 L34 18" fill="#2d2d44" stroke="#555" strokeWidth="0.5" />
        <ellipse cx="24" cy="22" rx="8" ry="7" fill="#2d2d44" stroke="#555" strokeWidth="0.5" />
        <circle cx="20" cy="20" r="2" fill="#0a2922" />
        <circle cx="20" cy="20" r="1" fill="#34D399" />
        <circle cx="28" cy="20" r="2" fill="#0a2922" />
        <circle cx="28" cy="20" r="1" fill="#34D399" />
        <ellipse cx="24" cy="25" rx="2" ry="1" fill="#0a1214" />
      </svg>
    )),
  },
  {
    id: "synth-bot",
    label: "Synth Bot",
    render: s("linear-gradient(135deg, #0a1214, #0d1a1f)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <rect x="16" y="12" width="16" height="18" rx="4" fill="#0d1a1f" stroke="#00C8FF" strokeWidth="1" />
        <rect x="14" y="16" width="3" height="2" rx="1" fill="#00C8FF" opacity="0.5" />
        <rect x="31" y="16" width="3" height="2" rx="1" fill="#00C8FF" opacity="0.5" />
        <circle cx="21" cy="19" r="2" fill="#34D399" opacity="0.8" />
        <circle cx="27" cy="19" r="2" fill="#34D399" opacity="0.8" />
        <rect x="20" y="24" width="8" height="3" rx="1" fill="#0a1214" stroke="#555" strokeWidth="0.5" />
        <line x1="22" y1="24" x2="22" y2="27" stroke="#555" strokeWidth="0.3" />
        <line x1="24" y1="24" x2="24" y2="27" stroke="#555" strokeWidth="0.3" />
        <line x1="26" y1="24" x2="26" y2="27" stroke="#555" strokeWidth="0.3" />
      </svg>
    )),
  },
  {
    id: "fox-dj",
    label: "Fox DJ",
    render: s("linear-gradient(135deg, #2e1a0a, #4a2f1a)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <path d="M16 20 L19 10 L22 16" fill="#4a2f1a" />
        <path d="M32 20 L29 10 L26 16" fill="#4a2f1a" />
        <ellipse cx="24" cy="22" rx="8" ry="7" fill="#4a2f1a" />
        <circle cx="20" cy="20" r="1.5" fill="#050a0d" />
        <circle cx="20" cy="20" r="0.7" fill="#00C8FF" />
        <circle cx="28" cy="20" r="1.5" fill="#050a0d" />
        <circle cx="28" cy="20" r="0.7" fill="#00C8FF" />
        <ellipse cx="24" cy="25" rx="1.5" ry="1" fill="#2e1a0a" />
      </svg>
    )),
  },
  {
    id: "the-eye",
    label: "The Eye",
    render: s("linear-gradient(135deg, #0a0a1f, #050a0d)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <ellipse cx="24" cy="22" rx="12" ry="7" fill="none" stroke="#00C8FF" strokeWidth="1.5" />
        <circle cx="24" cy="22" r="5" fill="#050a0d" stroke="#00C8FF" strokeWidth="1" />
        <circle cx="24" cy="22" r="2.5" fill="#00C8FF" />
        <circle cx="24" cy="22" r="1" fill="#fff" opacity="0.8" />
        {[-3,-2,-1,0,1,2,3].map(i => (
          <line key={i} x1={24 + i * 2} y1={14 + Math.abs(i)} x2={24 + i * 2} y2={12 + Math.abs(i)} stroke="#00C8FF" strokeWidth="0.5" opacity={0.3 + Math.abs(i) * 0.1} />
        ))}
      </svg>
    )),
  },
  {
    id: "night-owl",
    label: "Night Owl",
    render: s("linear-gradient(135deg, #0a0a2e, #1a1a3e)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <circle cx="34" cy="12" r="4" fill="#2d2d44" opacity="0.3" />
        <path d="M18 14 L22 10 L24 14 L26 10 L30 14" fill="#1a1a3e" stroke="#555" strokeWidth="0.5" />
        <ellipse cx="24" cy="22" rx="8" ry="9" fill="#1a1a3e" stroke="#555" strokeWidth="0.5" />
        <circle cx="20" cy="19" r="3" fill="#0a0a2e" stroke="#00C8FF" strokeWidth="0.5" />
        <circle cx="28" cy="19" r="3" fill="#0a0a2e" stroke="#00C8FF" strokeWidth="0.5" />
        <circle cx="20" cy="19" r="1.5" fill="#F59E0B" opacity="0.9" />
        <circle cx="28" cy="19" r="1.5" fill="#F59E0B" opacity="0.9" />
        <path d="M22 25 L24 27 L26 25" fill="#4a2f1a" />
      </svg>
    )),
  },
  {
    id: "octopus",
    label: "Octopus",
    render: s("linear-gradient(135deg, #050a0d, #0d1a1f)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <ellipse cx="24" cy="18" rx="8" ry="7" fill="#0d1a1f" stroke="#00C8FF" strokeWidth="0.5" />
        <circle cx="21" cy="16" r="1.5" fill="#00C8FF" />
        <circle cx="27" cy="16" r="1.5" fill="#00C8FF" />
        {[0,1,2,3].map(i => (
          <React.Fragment key={i}>
            <path d={`M${16 + i * 4} 24 Q${14 + i * 4} 32 ${12 + i * 5} 30`} fill="none" stroke="#00C8FF" strokeWidth="1.5" strokeLinecap="round" opacity={0.6} />
            <path d={`M${18 + i * 4} 24 Q${20 + i * 4} 32 ${22 + i * 5} 30`} fill="none" stroke="#34D399" strokeWidth="1" strokeLinecap="round" opacity={0.4} />
          </React.Fragment>
        ))}
      </svg>
    )),
  },
];

/* ─── Row 3: Soyut ─── */
const abstractAvatars: AvatarPreset[] = [
  {
    id: "prism",
    label: "Prism",
    render: s("linear-gradient(135deg, #0a0a1f, #050a0d)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <polygon points="24,10 34,28 14,28" fill="none" stroke="#00C8FF" strokeWidth="1.5" />
        <polygon points="24,14 30,25 18,25" fill="rgba(0,200,255,0.2)" />
        <line x1="24" y1="28" x2="20" y2="34" stroke="#00C8FF" strokeWidth="1" opacity="0.5" />
        <line x1="24" y1="28" x2="24" y2="35" stroke="#00C8FF" strokeWidth="1" opacity="0.5" />
        <line x1="24" y1="28" x2="28" y2="34" stroke="#34D399" strokeWidth="1" opacity="0.5" />
      </svg>
    )),
  },
  {
    id: "waveform-face",
    label: "Waveform",
    render: s("linear-gradient(135deg, #0a0a1f, #0a1214)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        {[14,17,20,23,26,29,32].map((x, i) => (
          <rect key={i} x={x} y={18 - (i % 2 === 0 ? 4 : 2)} width="2" height={8 + (i % 2 === 0 ? 8 : 4)} rx="1"
            fill={i < 4 ? "#00C8FF" : "#34D399"} opacity={0.4 + i * 0.08} />
        ))}
      </svg>
    )),
  },
  {
    id: "hexagon",
    label: "Hexagon",
    render: s("linear-gradient(135deg, #0a1a1f, #0a2922)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        {[[24,16],[20,20],[28,20],[20,26],[28,26],[24,30]].map(([cx,cy], i) => (
          <polygon key={i}
            points={`${cx},${cy-3} ${cx+2.6},${cy-1.5} ${cx+2.6},${cy+1.5} ${cx},${cy+3} ${cx-2.6},${cy+1.5} ${cx-2.6},${cy-1.5}`}
            fill={i < 3 ? "rgba(0,200,255,0.3)" : "rgba(52,211,153,0.2)"}
            stroke={i < 3 ? "#00C8FF" : "#34D399"} strokeWidth="0.5" />
        ))}
      </svg>
    )),
  },
  {
    id: "void",
    label: "Void",
    render: s("#050505", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <circle cx="24" cy="22" r="10" fill="#050505" />
        <circle cx="24" cy="22" r="10" fill="none" stroke="#00C8FF" strokeWidth="2" opacity="0.6" />
        <circle cx="24" cy="22" r="12" fill="none" stroke="#00C8FF" strokeWidth="0.5" opacity="0.2" />
        <circle cx="24" cy="22" r="8" fill="none" stroke="#00C8FF" strokeWidth="0.5" opacity="0.3" />
      </svg>
    )),
  },
  {
    id: "starburst",
    label: "Starburst",
    render: s("linear-gradient(135deg, #050a0d, #0a2922)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const len = i % 2 === 0 ? 10 : 6;
          return (
            <line key={deg} x1="24" y1="22" x2={24 + Math.cos(rad) * len} y2={22 + Math.sin(rad) * len}
              stroke={i % 2 === 0 ? "#00C8FF" : "#34D399"} strokeWidth="1.5" strokeLinecap="round" opacity={0.6} />
          );
        })}
        <circle cx="24" cy="22" r="2" fill="#00C8FF" />
      </svg>
    )),
  },
  {
    id: "infinity",
    label: "Infinity",
    render: s("linear-gradient(135deg, #0a0a1f, #050a0d)", (
      <svg viewBox="0 0 48 48" width="100%" height="100%">
        <path d="M18 22 C18 18 22 16 24 20 C26 24 30 22 30 18 C30 14 26 16 24 20 C22 24 18 26 18 22Z"
          fill="none" stroke="#00C8FF" strokeWidth="2" />
        <circle cx="19" cy="20" r="1" fill="#00C8FF" />
        <circle cx="29" cy="20" r="1" fill="#34D399" />
      </svg>
    )),
  },
];

/* ─── Row 4: Düz (letter avatars) ─── */
const gradients = [
  "linear-gradient(135deg, #00C8FF, #34D399)",
  "linear-gradient(135deg, #00C8FF, #00C8FF)",
  "linear-gradient(135deg, #34D399, #0D9488)",
  "linear-gradient(135deg, #00C8FF, #00C8FF)",
  "linear-gradient(135deg, #00C8FF, #EC4899)",
  "linear-gradient(135deg, #0D9488, #34D399)",
];

const letterAvatars: AvatarPreset[] = "ABCDEF".split("").map((letter, i) => ({
  id: `letter-${letter.toLowerCase()}`,
  label: letter,
  render: s(gradients[i], (
    <span className="text-white font-bold" style={{ fontSize: 24, fontFamily: "'Space Grotesk'" }}>{letter}</span>
  )),
}));

export const AVATAR_CATEGORIES = [
  { label: { tr: "Sanatçı", en: "Artist" }, avatars: artistAvatars },
  { label: { tr: "Karakter", en: "Character" }, avatars: characterAvatars },
  { label: { tr: "Soyut", en: "Abstract" }, avatars: abstractAvatars },
  { label: { tr: "Düz", en: "Simple" }, avatars: letterAvatars },
];

export const ALL_AVATARS = [...artistAvatars, ...characterAvatars, ...abstractAvatars, ...letterAvatars];

export const getAvatarById = (id: string) => ALL_AVATARS.find((a) => a.id === id);
