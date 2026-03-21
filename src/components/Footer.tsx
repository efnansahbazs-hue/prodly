import { useTranslation } from "@/hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t py-12 px-5" style={{ borderColor: "var(--border-default)" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold text-gradient-mixed" style={{ fontFamily: "'Space Grotesk'" }}>
              PRODLY
            </span>
            <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">{t("footer.product")}</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li><a href="#features" className="hover:text-white transition-colors">{t("nav.features")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.about")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.blog")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("footer.careers")}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "var(--border-default)" }}>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2026 Prodly. {t("footer.rights")}
          </span>
        </div>
      </div>
    </footer>
  );
};
