import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { useTranslation } from "@/hooks/useTranslation";
import type { Lang } from "@/lib/translations";

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
];

const navLinks = ["features", "howItWorks", "pricing", "testimonials"] as const;

export const Navbar = () => {
  const { t } = useTranslation();
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        <span className="text-xl font-bold tracking-tight text-gradient-mixed" style={{ fontFamily: "'Space Grotesk'" }}>
          PRODLY
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: "var(--text-secondary)" }}>
          {navLinks.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="hover:text-white transition-colors duration-200"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Lang switcher */}
          <div className="flex items-center gap-1 glass-card-static rounded-full px-1 py-1">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  lang === l.code
                    ? "bg-[var(--purple)] text-white"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <div
            className="inline-block rounded-full p-[1.5px] animate-move-border"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)",
              backgroundSize: "200% 200%",
            }}
          >
            <button
              className="rounded-full px-5 py-2 text-sm font-semibold text-white"
              style={{ background: "#7C3AED" }}
            >
              {t("nav.launchApp")}
            </button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-5 pb-6 glass-card-static border-t" style={{ borderColor: "var(--border-default)" }}>
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setOpen(false)}
                className="text-sm hover:text-white transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                {t(`nav.${key}`)}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                    lang === l.code ? "bg-[var(--purple)] text-white" : "text-[var(--text-secondary)]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
