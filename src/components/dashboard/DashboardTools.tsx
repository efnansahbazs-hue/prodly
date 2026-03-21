import { useState } from "react";
import { Dna, AlertTriangle, Shuffle, BookOpen, Hammer, PanelRightClose, PanelRightOpen } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const TOOLS = [
  { icon: Dna, label: { tr: "Genre DNA", en: "Genre DNA" }, route: "/tools/effects" },
  { icon: AlertTriangle, label: { tr: "Problem Solver", en: "Problem Solver" }, route: "/" },
  { icon: Shuffle, label: { tr: "Rastgele Proje", en: "Random Project" }, route: "/" },
  { icon: BookOpen, label: { tr: "Günün Tekniği", en: "Daily Technique" }, route: "/techniques" },
  { icon: Hammer, label: { tr: "Build Mode", en: "Build Mode" }, route: "/" },
];

export const DashboardTools = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { lang } = useLang();

  return (
    <div
      className="h-full flex flex-col rounded-2xl overflow-hidden transition-all"
      style={{
        width: collapsed ? 48 : 220,
        minWidth: collapsed ? 48 : 220,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        transition: "width 0.35s cubic-bezier(0.34,1.56,0.64,1), min-width 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {/* Collapse toggle */}
      <div className="px-3 py-3 flex justify-end" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg transition-all active:scale-95"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          {collapsed
            ? <PanelRightOpen size={14} className="text-[#8B8FA8]" />
            : <PanelRightClose size={14} className="text-[#8B8FA8]" />}
        </button>
      </div>

      {/* Tools */}
      <div className="flex-1 px-2 py-3 space-y-1.5">
        {TOOLS.map((tool) => (
          <button
            key={tool.label.en}
            className="w-full flex items-center gap-3 rounded-xl transition-all active:scale-[0.97] group"
            style={{
              padding: collapsed ? "10px 12px" : "10px 14px",
              background: "transparent",
              justifyContent: collapsed ? "center" : "flex-start",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.border = "1px solid rgba(52,211,153,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.border = "1px solid transparent";
            }}
          >
            <tool.icon size={16} className="text-[#8B8FA8] group-hover:text-[#34D399] transition-colors flex-shrink-0" />
            {!collapsed && (
              <span className="text-[12px] font-medium text-[#8B8FA8] group-hover:text-white transition-colors whitespace-nowrap">
                {lang === "tr" ? tool.label.tr : tool.label.en}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
