import { useState } from "react";
import type { PromoCode, PromoType } from "@/lib/promoCodes";

interface Props {
  onSubmit: (code: PromoCode) => void;
}

const inputStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "white",
  backdropFilter: "blur(20px)",
};

const focusClass = "focus:outline-none focus:border-[rgba(52,211,153,0.5)]";

export const PromoCodeForm = ({ onSubmit }: Props) => {
  const [form, setForm] = useState({
    code: "",
    type: "percent" as PromoType,
    value: 20,
    maxUses: 300,
    expiry: "2026-12-31",
    assignedTo: "",
    plans: ["premium", "studio"] as ("premium" | "studio")[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.code.trim()) return;
    onSubmit({
      code: form.code.toUpperCase().trim(),
      type: form.type,
      value: form.value,
      description: { en: `${form.value}${form.type === "percent" ? "%" : ""} off`, tr: `${form.value}${form.type === "percent" ? "%" : ""} indirim`, de: `${form.value}${form.type === "percent" ? "%" : ""} Rabatt`, es: `${form.value}${form.type === "percent" ? "%" : ""} descuento` },
      applicablePlans: form.plans,
      maxUses: form.maxUses,
      usedCount: 0,
      expiry: form.expiry,
      assignedTo: form.assignedTo,
      active: true,
    });
  };

  const set = (key: string, val: any) => setForm((p) => ({ ...p, [key]: val }));

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-5 mb-6 grid grid-cols-2 md:grid-cols-4 gap-3"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(52,211,153,0.15)", backdropFilter: "blur(20px)" }}
    >
      <input placeholder="Code (e.g. SUMMER25)" value={form.code} onChange={(e) => set("code", e.target.value.toUpperCase())}
        className={`col-span-2 md:col-span-1 h-9 px-3 rounded-lg text-sm font-mono ${focusClass}`} style={inputStyle} />

      <select value={form.type} onChange={(e) => set("type", e.target.value)}
        className={`h-9 px-3 rounded-lg text-sm ${focusClass}`} style={inputStyle}>
        <option value="percent">% Off</option>
        <option value="fixed">Fixed $</option>
        <option value="free_months">Free Months</option>
        <option value="bonus_questions">Bonus Q's</option>
      </select>

      <input type="number" placeholder="Value" value={form.value} onChange={(e) => set("value", Number(e.target.value))}
        className={`h-9 px-3 rounded-lg text-sm ${focusClass}`} style={inputStyle} />

      <input type="number" placeholder="Max uses" value={form.maxUses} onChange={(e) => set("maxUses", Number(e.target.value))}
        className={`h-9 px-3 rounded-lg text-sm ${focusClass}`} style={inputStyle} />

      <input type="date" value={form.expiry} onChange={(e) => set("expiry", e.target.value)}
        className={`h-9 px-3 rounded-lg text-sm ${focusClass}`} style={inputStyle} />

      <input placeholder="Assigned to" value={form.assignedTo} onChange={(e) => set("assignedTo", e.target.value)}
        className={`h-9 px-3 rounded-lg text-sm ${focusClass}`} style={inputStyle} />

      <div className="flex items-center gap-3 text-xs" style={{ color: "#8B8FA8" }}>
        <label className="flex items-center gap-1">
          <input type="checkbox" checked={form.plans.includes("premium")}
            onChange={(e) => set("plans", e.target.checked ? [...form.plans, "premium"] : form.plans.filter((p) => p !== "premium"))} />
          Premium
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" checked={form.plans.includes("studio")}
            onChange={(e) => set("plans", e.target.checked ? [...form.plans, "studio"] : form.plans.filter((p) => p !== "studio"))} />
          Studio
        </label>
      </div>

      <button type="submit" className="h-9 px-5 rounded-lg text-sm font-semibold text-white active:scale-[0.97] transition-all"
        style={{ background: "linear-gradient(135deg, #00C8FF, #34D399)" }}>
        Create
      </button>
    </form>
  );
};
