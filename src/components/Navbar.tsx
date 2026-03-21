import { useRef, useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { useTranslation } from "@/hooks/useTranslation";
import { useNavbar } from "@/hooks/useNavbar";
import { NavbarLoggedIn } from "@/components/NavbarLoggedIn";
import type { Lang } from "@/lib/translations";

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
];

const navKeys = ["features", "community", "roadmap"] as const;

const LogoDot = () => (
  <span
    className="inline-block rounded-full animate-pulse-glow flex-shrink-0"
    style={{
      width: 9, height: 9,
      background: "linear-gradient(135deg, #7C3AED, #34D399)",
      boxShadow: "0 0 14px rgba(124,58,237,0.9)",
    }}
  />
);

export const Navbar = () => {
  const { t } = useTranslation();
  const { lang, setLang } = useLang();
  const { scrolled, mobileOpen, toggleMobile, closeMobile, langOpen, toggleLang, closeLang } = useNavbar();
  const langRef = useRef<HTMLDivElement>(null);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) closeLang();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [closeLang]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(10,10,15,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <LogoDot />
            <span className="text-[17px] font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
              Prodly
            </span>
          </a>

          {/* Center nav pills — desktop */}
          <div className="hidden md:flex items-center gap-2">
            {navKeys.map((key) => {
              const href = key === "community" ? "/community" : key === "roadmap" ? "/roadmap" : `#${key}`;
              return (
                <a
                  key={key}
                  href={href}
                  className="px-2.5 py-1 rounded-full text-xs transition-colors duration-200 hover:text-white"
                  style={{
                    color: "#8B8FA8",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {t(`nav.${key}`)}
                </a>
              );
            })}
          </div>

          {/* Right side — desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors hover:text-white"
                style={{ color: "#8B8FA8" }}
              >
                {lang.toUpperCase()} <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div
                  className="absolute top-full right-0 mt-2 rounded-xl py-1 min-w-[56px] border z-50"
                  style={{
                    background: "#0A0A0F",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); closeLang(); }}
                      className={`block w-full text-left px-4 py-1.5 text-xs font-medium transition-colors ${
                        lang === l.code ? "text-white" : "text-[#8B8FA8] hover:text-white"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Logged-in: avatar + EXP bar */}
            <NavbarLoggedIn />

            {/* Moving border CTA */}
            <div
              className="rounded-full p-[2px] animate-move-border"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)",
                backgroundSize: "200% 200%",
              }}
            >
              <button
                className="rounded-full px-5 py-1.5 text-xs font-semibold text-white transition-transform duration-200 active:scale-[0.96]"
                style={{ background: "#7C3AED" }}
              >
                {t("nav.startFree")}
              </button>
            </div>
          </div>

          {/* Hamburger — mobile */}
          <button className="md:hidden text-white active:scale-95 transition-transform" onClick={toggleMobile}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {mobileOpen && <MobileOverlay lang={lang} setLang={setLang} t={t} onClose={closeMobile} />}
    </>
  );
};

/* ─── Mobile overlay (extracted to stay under 150 lines) ─── */
const MobileOverlay = ({
  lang, setLang, t, onClose,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 animate-fade-in-up"
    style={{
      background: "rgba(10,10,15,0.96)",
      backdropFilter: "blur(30px)",
      WebkitBackdropFilter: "blur(30px)",
    }}
  >
    {navKeys.map((key) => (
      <a
        key={key}
        href={`#${key}`}
        onClick={onClose}
        className="text-2xl font-semibold text-white hover:text-gradient-mixed transition-colors"
        style={{ fontFamily: "'Space Grotesk'" }}
      >
        {t(`nav.${key}`)}
      </a>
    ))}

    {/* Lang switcher row */}
    <div className="flex gap-3 mt-4">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            lang === l.code
              ? "text-white border border-[var(--border-accent)]"
              : "text-[#8B8FA8] border border-transparent hover:text-white"
          }`}
          style={lang === l.code ? { background: "rgba(124,58,237,0.15)" } : {}}
        >
          {l.label}
        </button>
      ))}
    </div>

    {/* CTA */}
    <div
      className="rounded-full p-[2px] animate-move-border mt-2"
      style={{
        background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)",
        backgroundSize: "200% 200%",
      }}
    >
      <button
        className="rounded-full px-8 py-3 text-sm font-semibold text-white active:scale-[0.96] transition-transform"
        style={{ background: "#7C3AED" }}
      >
        {t("nav.startFree")}
      </button>
    </div>
  </div>
);
