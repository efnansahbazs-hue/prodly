import { useTranslation } from "@/hooks/useTranslation";
import { useLang } from "@/hooks/useLang";
import { Link } from "react-router-dom";
import type { Lang } from "@/lib/translations";

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
];

export const Footer = () => {
  const { t } = useTranslation();
  const { lang, setLang } = useLang();

  return (
    <footer className="relative py-12 px-5">
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, #00C8FF, #34D399, transparent)" }}
      />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span
              className="text-xl font-bold text-gradient-mixed"
              style={{ fontFamily: "'Space Grotesk'" }}
            >
              PRODLY
            </span>
            <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {t("footer.tagline")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">{t("footer.product")}</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li><a href="/#features" className="hover:text-white transition-colors">{t("nav.features")}</a></li>
              <li><Link to="/techniques" className="hover:text-white transition-colors">{t("footer.techniques")}</Link></li>
              <li><Link to="/roadmap" className="hover:text-white transition-colors">{t("nav.roadmap")}</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">{t("nav.community")}</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li><Link to="/community" className="hover:text-white transition-colors">{t("comm.tabFeed")}</Link></li>
              <li><Link to="/suggestions" className="hover:text-white transition-colors">{t("nav.suggestions")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.about")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.blog")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.careers")}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2026 Prodly. {t("footer.rights")}
          </span>

          {/* Language switcher */}
          <div className="flex gap-1">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-medium transition-all ${
                  lang === l.code ? "text-white" : "hover:text-white"
                }`}
                style={{
                  color: lang === l.code ? "#fff" : "#6B7280",
                  background: lang === l.code ? "rgba(0,200,255,0.2)" : "transparent",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
