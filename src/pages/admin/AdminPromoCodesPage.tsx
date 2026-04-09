import { useState } from "react";
import { promoCodes, type PromoCode } from "@/lib/promoCodes";
import { PromoCodeTable } from "@/components/admin/PromoCodeTable";
import { PromoCodeForm } from "@/components/admin/PromoCodeForm";
import { PromoCodeAnalytics } from "@/components/admin/PromoCodeAnalytics";

export default function AdminPromoCodesPage() {
  const [codes, setCodes] = useState<PromoCode[]>(promoCodes);
  const [selectedCode, setSelectedCode] = useState<PromoCode | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleToggle = (code: string) => {
    setCodes((prev) => prev.map((c) => (c.code === code ? { ...c, active: !c.active } : c)));
  };

  const handleCreate = (newCode: PromoCode) => {
    setCodes((prev) => [...prev, newCode]);
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
          Promo Codes
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 text-sm font-semibold rounded-xl transition-all active:scale-[0.97]"
          style={{ background: "#00C8FF", color: "white" }}
        >
          {showForm ? "Cancel" : "Create Code"}
        </button>
      </div>

      {showForm && <PromoCodeForm onSubmit={handleCreate} />}
      <PromoCodeTable codes={codes} onToggle={handleToggle} onSelect={setSelectedCode} selectedCode={selectedCode?.code} />
      {selectedCode && <PromoCodeAnalytics code={selectedCode} />}
    </div>
  );
}
