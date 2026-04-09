import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "@/hooks/useTranslation";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { Eye, EyeOff } from "lucide-react";

const getStrength = (pw: string): number => {
  let s = 0;
  if (pw.length >= 6) s++;
  if (pw.length >= 10) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return Math.min(s, 4);
};

const strengthColors = ["#EF4444", "#F97316", "#EAB308", "#34D399"];
const strengthLabels: Record<string, string[]> = {
  en: ["Weak", "Fair", "Good", "Strong"],
  tr: ["Zayıf", "Orta", "İyi", "Güçlü"],
  de: ["Schwach", "Mittel", "Gut", "Stark"],
  es: ["Débil", "Regular", "Buena", "Fuerte"],
};

export default function RegisterPage() {
  const { t, lang } = useTranslation();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const strength = getStrength(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) { setError(t("auth.required")); return; }
    if (password.length < 6) { setError(t("auth.weakPassword")); return; }
    try {
      await register(username, email, password);
      navigate("/onboarding");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : t("auth.required"));
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NoiseOverlay /><DotGrid /><Orbs />
      <div className="glass-card-static p-8 w-full max-w-sm z-10">
        <h1
          className="text-2xl font-bold text-white mb-1 text-center"
          style={{ fontFamily: "'Space Grotesk'" }}
        >
          {t("auth.registerTitle")}
        </h1>
        <p className="text-xs text-center mb-6" style={{ color: "#8B8FA8" }}>
          {t("auth.registerDesc")}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder={t("auth.username")}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-[#6B7280] outline-none transition-all focus:border-[rgba(52,211,153,0.5)]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          />
          <input
            type="email"
            placeholder={t("profile.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-[#6B7280] outline-none transition-all focus:border-[rgba(52,211,153,0.5)]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          />
          <div>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                placeholder={t("profile.password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-[#6B7280] outline-none transition-all focus:border-[rgba(52,211,153,0.5)]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: "#6B7280" }}
              >
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {password.length > 0 && (
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 flex gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all duration-300"
                      style={{
                        background: i < strength ? strengthColors[strength - 1] : "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-medium" style={{ color: strengthColors[strength - 1] || "#6B7280" }}>
                  {strength > 0 ? (strengthLabels[lang] || strengthLabels.en)[strength - 1] : ""}
                </span>
              </div>
            )}
          </div>

          {error && <p className="text-xs text-red-400">{error}</p>}

          <div
            className="rounded-full p-[2px] animate-move-border"
            style={{
              background: "linear-gradient(135deg, #00C8FF, #34D399, #00C8FF)",
              backgroundSize: "200% 200%",
            }}
          >
            <button
              type="submit"
              className="w-full rounded-full py-2.5 text-sm font-semibold text-white active:scale-[0.97] transition-transform"
              style={{ background: "#00C8FF" }}
            >
              {t("auth.register")}
            </button>
          </div>
        </form>

        <p className="text-xs text-center mt-5" style={{ color: "#8B8FA8" }}>
          {t("auth.hasAccount")}{" "}
          <Link to="/auth/login" className="font-medium" style={{ color: "#34D399" }}>
            {t("auth.loginLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}
