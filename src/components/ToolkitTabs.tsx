import { useTranslation } from "@/hooks/useTranslation";
import type { ToolkitTab } from "@/components/Toolkit";

const tabLabels: Record<ToolkitTab, Record<string, string>> = {
  learn:     { en: "Learn", tr: "Öğren", de: "Lernen", es: "Aprender" },
  solve:     { en: "Solve", tr: "Çöz", de: "Lösen", es: "Resolver" },
  reference: { en: "Reference", tr: "Referans", de: "Referenz", es: "Referencia" },
  create:    { en: "Create", tr: "Oluştur", de: "Erstellen", es: "Crear" },
};

interface Props {
  tabs: ToolkitTab[];
  active: ToolkitTab;
  onSelect: (tab: ToolkitTab) => void;
}

export const ToolkitTabs = ({ tabs, active, onSelect }: Props) => {
  const { lang } = useTranslation();

  return (
    <div className="flex justify-center gap-2 mb-8 flex-wrap">
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            onClick={() => onSelect(tab)}
            className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
            style={{
              fontFamily: "'Space Grotesk'",
              background: isActive ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${isActive ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.08)"}`,
              color: isActive ? "#A78BFA" : "#8B8FA8",
              backdropFilter: "blur(20px)",
            }}
          >
            {tabLabels[tab]?.[lang] || tabLabels[tab]?.en}
            {isActive && (
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                style={{ width: "60%", background: "#34D399" }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
