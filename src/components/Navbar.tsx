import { useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { useTranslation } from "@/hooks/useTranslation";
import { useNavbar } from "@/hooks/useNavbar";
import { useAuth } from "@/hooks/useAuth";
import { NavbarLoggedIn } from "@/components/NavbarLoggedIn";
import type { Lang } from "@/lib/translations";
import { Link, useNavigate } from "react-router-dom";

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
];

const WaveformLogo = () => {
  const heights = [6, 12, 18, 12, 6];
  const durations = [0.8, 0.6, 1, 0.7, 0.9];
  const colors = ["#7C3AED", "#8B5CF6", "#A78BFA", "#6EE7B7", "#34D399"];
  return (
    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" className="flex-shrink-0">
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 5}
          y={10 - h / 2}
          width={3}
          height={h}
          rx={1.5}
          fill={colors[i]}
        >
          <animate
            attributeName="height"
            values={`${h};${h * 1.6};${h}`}
            dur={`${durations[i]}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
          />
          <animate
            attributeName="y"
            values={`${10 - h / 2};${10 - (h * 1.6) / 2};${10 - h / 2}`}
            dur={`${durations[i]}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
          />
        </rect>
      ))}
    </svg>
  );
};

export const Navbar = () => {
  const { t } = useTranslation();
  const { lang, setLang } = useLang();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { scrolled, mobileOpen, toggleMobile, closeMobile, langOpen, toggleLang, closeLang } = useNavbar();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) closeLang();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [closeLang]);

  const navLinks = isLoggedIn
    ? [
        { key: "features", href: "/#features" },
        { key: "community", href: "/community" },
        { key: "roadmap", href: "/roadmap" },
        { key: "suggestions", href: "/suggestions" },
      ]
    : [
        { key: "features", href: "/#features" },
        { key: "community", href: "/community" },
        { key: "roadmap", href: "/roadmap" },
      ];

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
          <Link to="/" className="flex items-center gap-2.5 group">
            <WaveformLogo />
            <span className="text-[15px] font-bold text-white uppercase" style={{ fontFamily: "'Space Grotesk'", letterSpacing: "0.08em" }}>
              PRODLY
            </span>
          </Link>

          {/* Center nav pills */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className="px-2.5 py-1 rounded-full text-xs transition-colors duration-200 hover:text-white"
                style={{ color: "#8B8FA8", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <LangDropdown langRef={langRef} lang={lang} setLang={setLang} langOpen={langOpen} toggleLang={toggleLang} closeLang={closeLang} />

            {isLoggedIn ? (
              <NavbarLoggedIn />
            ) : (
              <>
                <button
                  onClick={() => navigate("/auth/login")}
                  className="px-3 py-1.5 text-xs font-medium transition-colors hover:text-white"
                  style={{ color: "#8B8FA8" }}
                >
                  {t("auth.login")}
                </button>
                <div
                  className="rounded-full p-[2px] animate-move-border"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)",
                    backgroundSize: "200% 200%",
                  }}
                >
                  <button
                    onClick={() => navigate("/auth/register")}
                    className="rounded-full px-5 py-1.5 text-xs font-semibold text-white transition-transform duration-200 active:scale-[0.96]"
                    style={{ background: "#7C3AED" }}
                  >
                    {t("nav.startFree")}
                  </button>
                </div>
              </>
            )}
          </div>

          <button className="md:hidden text-white active:scale-95 transition-transform" onClick={toggleMobile}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <MobileOverlay
          lang={lang} setLang={setLang} t={t} onClose={closeMobile}
          isLoggedIn={isLoggedIn} navLinks={navLinks}
        />
      )}
    </>
  );
};

/* ─── Lang Dropdown ─── */
const LangDropdown = ({
  langRef, lang, setLang, langOpen, toggleLang, closeLang,
}: {
  langRef: React.RefObject<HTMLDivElement>;
  lang: Lang; setLang: (l: Lang) => void;
  langOpen: boolean; toggleLang: () => void; closeLang: () => void;
}) => (
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
        style={{ background: "#0A0A0F", borderColor: "rgba(255,255,255,0.08)" }}
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
);

/* ─── Mobile Overlay ─── */
const MobileOverlay = ({
  lang, setLang, t, onClose, isLoggedIn, navLinks,
}: {
  lang: Lang; setLang: (l: Lang) => void;
  t: (key: string) => string; onClose: () => void;
  isLoggedIn: boolean;
  navLinks: { key: string; href: string }[];
}) => (
  <div
    className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 animate-fade-in-up"
    style={{ background: "rgba(10,10,15,0.96)", backdropFilter: "blur(30px)" }}
  >
    {navLinks.map((link) => (
      <Link
        key={link.key}
        to={link.href}
        onClick={onClose}
        className="text-2xl font-semibold text-white hover:text-gradient-mixed transition-colors"
        style={{ fontFamily: "'Space Grotesk'" }}
      >
        {t(`nav.${link.key}`)}
      </Link>
    ))}

    <div className="flex gap-3 mt-4">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            lang === l.code ? "text-white border border-[var(--border-accent)]" : "text-[#8B8FA8] border border-transparent hover:text-white"
          }`}
          style={lang === l.code ? { background: "rgba(124,58,237,0.15)" } : {}}
        >
          {l.label}
        </button>
      ))}
    </div>

    {!isLoggedIn && (
      <div className="flex flex-col items-center gap-3 mt-2">
        <Link to="/auth/login" onClick={onClose} className="text-sm font-medium" style={{ color: "#8B8FA8" }}>
          {t("auth.login")}
        </Link>
        <div
          className="rounded-full p-[2px] animate-move-border"
          style={{
            background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)",
            backgroundSize: "200% 200%",
          }}
        >
          <Link
            to="/auth/register"
            onClick={onClose}
            className="block rounded-full px-8 py-3 text-sm font-semibold text-white active:scale-[0.96] transition-transform"
            style={{ background: "#7C3AED" }}
          >
            {t("nav.startFree")}
          </Link>
        </div>
      </div>
    )}
  </div>
);
