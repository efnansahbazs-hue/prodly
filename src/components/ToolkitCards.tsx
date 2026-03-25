import { useTranslation } from "@/hooks/useTranslation";
import type { ToolItem } from "@/components/Toolkit";

const planLabelKeys: Record<string, string> = {
  free: "price.free",
  premium: "price.cta.pro",
  studio: "price.studio",
};

interface Props {
  items: ToolItem[];
}

export const ToolkitCards = ({ items }: Props) => {
  const { t } = useTranslation();

  const planBadge = (plan: ToolItem["plan"], limit?: string) => {
    const base = "text-[10px] font-semibold px-2 py-0.5 rounded-full";
    const styles: Record<string, React.CSSProperties> = {
      free: { background: "rgba(52,211,153,0.15)", color: "#34D399" },
      premium: { background: "rgba(124,58,237,0.2)", color: "#A78BFA" },
      studio: { background: "linear-gradient(135deg, #7C3AED, #34D399)", color: "#FFFFFF" },
    };
    const label = plan === "free" ? t("price.free") : plan === "studio" ? t("price.studio") : "Premium";
    return (
      <span className={base} style={styles[plan]}>
        {label}{limit ? ` · ${limit}` : ""}
      </span>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <div
          key={item.titleKey}
          className="rounded-[16px] p-5 transition-all duration-200 group cursor-default"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            animationDelay: `${i * 60}ms`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = "1px solid rgba(124,58,237,0.4)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(52,211,153,0.08)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <span className="text-2xl">{item.icon}</span>
            {planBadge(item.plan, item.limit)}
          </div>
          <h4
            className="text-sm font-semibold text-white mb-1"
            style={{ fontFamily: "'Space Grotesk'" }}
          >
            {t(item.titleKey)}
          </h4>
          <p className="text-[12px] leading-relaxed" style={{ color: "#8B8FA8" }}>
            {t(item.descKey)}
          </p>
        </div>
      ))}
    </div>
  );
};
