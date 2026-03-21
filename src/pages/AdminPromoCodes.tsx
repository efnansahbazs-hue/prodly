import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { promoCodes, getPromoTypeLabel, type PromoCode, type PromoType } from "@/lib/promoCodes";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { Navbar } from "@/components/Navbar";
import { PromoCodeTable } from "@/components/admin/PromoCodeTable";
import { PromoCodeForm } from "@/components/admin/PromoCodeForm";
import { PromoCodeAnalytics } from "@/components/admin/PromoCodeAnalytics";

const AdminPromoCodes = () => {
  const { t } = useTranslation();
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
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#0A0A0F" }}>
      <NoiseOverlay />
      <DotGrid />
      <Orbs />
      <Navbar />
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-28 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-1" style={{ color: "#34D399" }}>
              {t("admin.promoLabel")}
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
              {t("admin.promoTitle")}
            </h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="h-9 px-5 text-sm font-semibold rounded-xl transition-all active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #9333EA)",
              color: "white",
              fontFamily: "'Space Grotesk'",
            }}
          >
            {showForm ? t("admin.cancel") : t("admin.createCode")}
          </button>
        </div>

        {showForm && <PromoCodeForm onSubmit={handleCreate} />}

        <PromoCodeTable codes={codes} onToggle={handleToggle} onSelect={setSelectedCode} selectedCode={selectedCode?.code} />

        {selectedCode && <PromoCodeAnalytics code={selectedCode} />}
      </div>
    </div>
  );
};

export default AdminPromoCodes;
