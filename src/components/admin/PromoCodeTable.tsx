import { useTranslation } from "@/hooks/useTranslation";
import { getPromoTypeLabel, type PromoCode } from "@/lib/promoCodes";

interface Props {
  codes: PromoCode[];
  onToggle: (code: string) => void;
  onSelect: (code: PromoCode) => void;
  selectedCode?: string;
}

export const PromoCodeTable = ({ codes, onToggle, onSelect, selectedCode }: Props) => {
  const { lang } = useTranslation();

  return (
    <div
      className="rounded-2xl overflow-hidden mb-6"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {["Code", "Type", "Value", "Uses", "Assigned", "Expiry", "Status"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {codes.map((c) => {
              const isExpired = new Date(c.expiry) < new Date();
              const isSelected = selectedCode === c.code;
              return (
                <tr
                  key={c.code}
                  onClick={() => onSelect(c)}
                  className="cursor-pointer transition-colors duration-150"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    background: isSelected ? "rgba(0,200,255,0.08)" : "transparent",
                  }}
                  onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                  onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = "transparent"; }}
                >
                  <td className="px-4 py-3 font-mono font-semibold text-white">{c.code}</td>
                  <td className="px-4 py-3" style={{ color: "#8B8FA8" }}>{getPromoTypeLabel(c.type, lang)}</td>
                  <td className="px-4 py-3 text-white">
                    {c.type === "percent" ? `${c.value}%` : c.type === "free_months" ? `${c.value}mo` : c.value}
                  </td>
                  <td className="px-4 py-3" style={{ color: "#8B8FA8" }}>
                    {c.usedCount}/{c.maxUses}
                  </td>
                  <td className="px-4 py-3" style={{ color: "#8B8FA8" }}>{c.assignedTo}</td>
                  <td className="px-4 py-3" style={{ color: isExpired ? "#EF4444" : "#8B8FA8" }}>
                    {new Date(c.expiry).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); onToggle(c.code); }}
                      className="relative w-9 h-5 rounded-full transition-colors duration-200"
                      style={{ background: c.active ? "#34D399" : "rgba(255,255,255,0.1)" }}
                    >
                      <span
                        className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200"
                        style={{ left: c.active ? 18 : 2 }}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
