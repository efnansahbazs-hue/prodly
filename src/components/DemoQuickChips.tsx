const CHIPS = [
  "Why does my kick sound muddy?",
  "How do I set up sidechain compression?",
  "Best reverb settings for vocals?",
];

interface Props {
  onSelect: (q: string) => void;
}

export const DemoQuickChips = ({ onSelect }: Props) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {CHIPS.map((chip) => (
      <button
        key={chip}
        onClick={() => onSelect(chip)}
        className="px-3.5 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 active:scale-95"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#8B8FA8",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
      >
        {chip}
      </button>
    ))}
  </div>
);
