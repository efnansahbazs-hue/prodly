import { useState } from "react";
import { Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PricingToggle } from "@/components/PricingToggle";
import { InviteSection } from "@/components/InviteSection";
import type { Lang } from "@/lib/translations";

type F = Record<Lang, string>;
const f = (en: string, tr: string, de: string, es: string): F => ({ en, tr, de, es });

const freeFeatures: F[] = [
  f("5 AI questions/day", "Günde 5 AI sorusu", "5 KI-Fragen/Tag", "5 preguntas IA/día"),
  f("Problem Solver 1/day", "Günde 1 Problem Solver", "1 Problem Solver/Tag", "1 Problem Solver/día"),
  f("Concept Dictionary", "Kavram Sözlüğü", "Konzept-Wörterbuch", "Diccionario de Conceptos"),
  f("Daily Technique", "Günün Tekniği", "Tägliche Technik", "Técnica Diaria"),
  f("Genre DNA (2 genres)", "Genre DNA (2 tür)", "Genre DNA (2 Genres)", "Genre DNA (2 géneros)"),
  f("BPM + Key Calculator", "BPM + Key Hesaplayıcı", "BPM + Key Rechner", "Calculadora BPM + Key"),
  f("Archive last 10", "Son 10 arşiv", "Archiv letzte 10", "Archivo últimos 10"),
  f("Community read only", "Topluluk (salt okunur)", "Community (nur lesen)", "Comunidad (solo lectura)"),
  f("All 4 languages", "4 dil desteği", "Alle 4 Sprachen", "Los 4 idiomas"),
];

const premiumFeatures: F[] = [
  f("20 AI questions/day", "Günde 20 AI sorusu", "20 KI-Fragen/Tag", "20 preguntas IA/día"),
  f("Problem Solver 10/day", "Günde 10 Problem Solver", "10 Problem Solver/Tag", "10 Problem Solver/día"),
  f("All Genre DNA Maps", "Tüm Genre DNA Haritaları", "Alle Genre DNA Maps", "Todos los mapas Genre DNA"),
  f("DAW-specific mode", "DAW'a özel mod", "DAW-spezifischer Modus", "Modo específico por DAW"),
  f("Conversation memory (20 msgs)", "Konuşma hafızası (20 mesaj)", "Gesprächsspeicher (20 Nachr.)", "Memoria de conversación (20 msgs)"),
  f("Unlimited archive + search", "Sınırsız arşiv + arama", "Unbegrenztes Archiv + Suche", "Archivo ilimitado + búsqueda"),
  f("Mix checklist & Plugin DB", "Mix kontrol listesi & Plugin DB", "Mix-Checkliste & Plugin DB", "Lista de mix & Plugin DB"),
  f("PDF export & Quiz", "PDF dışa aktarma & Quiz", "PDF-Export & Quiz", "Exportar PDF & Quiz"),
  f("Weekly report", "Haftalık rapor", "Wochenbericht", "Informe semanal"),
  f("Community posting", "Toplulukta paylaşım", "Community-Beiträge", "Publicar en comunidad"),
  f("Streak freeze 1/month", "Ayda 1 seri dondurma", "Streak-Freeze 1/Monat", "Congelar racha 1/mes"),
];

const studioFeatures: F[] = [
  f("35 AI questions/day", "Günde 35 AI sorusu", "35 KI-Fragen/Tag", "35 preguntas IA/día"),
  f("Full session memory", "Tam oturum hafızası", "Vollständiger Sitzungsspeicher", "Memoria de sesión completa"),
  f("DAW Screen Analyzer", "DAW Ekran Analizcisi", "DAW Screen Analyzer", "Analizador de pantalla DAW"),
  f("Extended AI sessions", "Genişletilmiş AI oturumları", "Erweiterte KI-Sitzungen", "Sesiones IA extendidas"),
  f("Blind A/B tool", "Kör A/B aracı", "Blind A/B-Tool", "Herramienta A/B ciega"),
  f("Production Techniques Panel", "Prodüksiyon Teknikleri Paneli", "Produktionstechnik-Panel", "Panel de Técnicas de Producción"),
  f("Monthly curated pack", "Aylık küratörlü paket", "Monatliches kuratiertes Paket", "Paquete curado mensual"),
  f("30-day starter plan", "30 günlük başlangıç planı", "30-Tage-Starterplan", "Plan inicial de 30 días"),
  f("Verified Producer badge", "Doğrulanmış Prodüktör rozeti", "Verifiziertes Produzenten-Badge", "Insignia de Productor Verificado"),
  f("Beta access & Priority support", "Beta erişimi & Öncelikli destek", "Beta-Zugang & Prioritäts-Support", "Acceso beta & Soporte prioritario"),
  f("Streak freeze 2/month", "Ayda 2 seri dondurma", "Streak-Freeze 2/Monat", "Congelar racha 2/mes"),
];

export const Pricing = () => {
  const { t, lang } = useTranslation();
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-3 text-center">{t("price.label")}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-center text-white" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("price.title")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <PricingToggle annual={annual} onToggle={() => setAnnual(!annual)} />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {/* FREE */}
          <ScrollReveal delay={80}>
            <div
              className="rounded-[20px] p-7 h-full flex flex-col"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}
            >
              <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>{t("price.free")}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk'" }}>$0</span>
                <span className="text-sm" style={{ color: "#6B7280" }}>{t("price.mo")}</span>
              </div>
              <p className="text-[11px] mb-6" style={{ color: "#6B7280" }}>{t("price.noCard")}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {freeFeatures.map((feat) => (
                  <li key={feat.en} className="flex items-start gap-2.5 text-sm" style={{ color: "#8B8FA8" }}>
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#34D399" }} />
                    {feat[lang]}
                  </li>
                ))}
              </ul>

              <button
                className="w-full rounded-full py-3 text-sm font-semibold transition-all active:scale-[0.97]"
                style={{ border: "1px solid rgba(52,211,153,0.4)", color: "#34D399", background: "transparent" }}
              >
                {t("price.cta.free")}
              </button>
            </div>
          </ScrollReveal>

          {/* PREMIUM */}
          <ScrollReveal delay={160}>
            <div
              className="rounded-[20px] p-7 h-full flex flex-col relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.5)", backdropFilter: "blur(20px)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #7C3AED, #34D399)" }} />
              <span className="inline-block self-start text-[11px] font-semibold rounded-full px-3 py-1 mb-4" style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA" }}>
                {t("price.popular")}
              </span>

              <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>Premium</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
                  {annual ? "$129" : "$15"}
                </span>
                <span className="text-sm" style={{ color: "#6B7280" }}>{annual ? "/yr" : t("price.mo")}</span>
                {annual && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(52,211,153,0.15)", color: "#34D399" }}>
                    Save 28%
                  </span>
                )}
              </div>
              <p className="text-[11px] mb-6" style={{ color: "#8B8FA8" }}>{t("price.includesFree")}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {premiumFeatures.map((feat) => (
                  <li key={feat.en} className="flex items-start gap-2.5 text-sm" style={{ color: "#8B8FA8" }}>
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#34D399" }} />
                    {feat[lang]}
                  </li>
                ))}
              </ul>

              <div
                className="rounded-full p-[2px] animate-move-border"
                style={{ background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)", backgroundSize: "200% 200%" }}
              >
                <button className="w-full rounded-full py-3 text-sm font-semibold text-white transition-transform active:scale-[0.97]" style={{ background: "#7C3AED" }}>
                  {t("price.cta.pro")}
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* STUDIO */}
          <ScrollReveal delay={240}>
            <div
              className="rounded-[20px] p-7 h-full flex flex-col relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(52,211,153,0.2)", backdropFilter: "blur(20px)" }}
            >
              <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>{t("price.studio")}</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
                  {annual ? "$239" : "$29"}
                </span>
                <span className="text-sm" style={{ color: "#6B7280" }}>{annual ? "/yr" : t("price.mo")}</span>
                {annual && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(52,211,153,0.15)", color: "#34D399" }}>
                    Save 31%
                  </span>
                )}
              </div>
              <p className="text-[11px] mb-6" style={{ color: "#8B8FA8" }}>{t("price.includesPremium")}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {studioFeatures.map((feat) => (
                  <li key={feat.en} className="flex items-start gap-2.5 text-sm" style={{ color: "#8B8FA8" }}>
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#34D399" }} />
                    {feat[lang]}
                  </li>
                ))}
              </ul>

              <div
                className="rounded-full p-[2px] animate-move-border"
                style={{ background: "linear-gradient(135deg, #34D399, #7C3AED, #34D399)", backgroundSize: "200% 200%" }}
              >
                <button className="w-full rounded-full py-3 text-sm font-semibold text-white transition-transform active:scale-[0.97]" style={{ background: "#0F0F18" }}>
                  {t("price.cta.studio")}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Invite section */}
        <InviteSection />
      </div>
    </section>
  );
};
