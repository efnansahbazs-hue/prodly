import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError(t("auth.required")); return; }
    setLoading(true);
    setError("");
    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (authError) {
      setError(authError.message);
      return;
    }
    // Explicitly sync auth context before navigating so Navbar renders correctly
    if (data.user) {
      login({
        id: data.user.id,
        username: data.user.user_metadata?.username ?? data.user.email?.split("@")[0] ?? "user",
        email: data.user.email ?? "",
        plan: data.user.user_metadata?.plan ?? "free",
        avatar: data.user.user_metadata?.avatar,
      });
    }
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NoiseOverlay /><DotGrid /><Orbs />
      <div className="glass-card-static p-8 w-full max-w-sm z-10">
        <h1
          className="text-2xl font-bold text-white mb-1 text-center"
          style={{ fontFamily: "'Space Grotesk'" }}
        >
          {t("auth.loginTitle")}
        </h1>
        <p className="text-xs text-center mb-6" style={{ color: "#8B8FA8" }}>
          {t("auth.loginDesc")}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder={t("profile.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-[#6B7280] outline-none transition-all focus:border-[rgba(52,211,153,0.5)]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          />
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
              disabled={loading}
              className="w-full rounded-full py-2.5 text-sm font-semibold text-white active:scale-[0.97] transition-transform disabled:opacity-60"
              style={{ background: "#00C8FF" }}
            >
              {loading ? "..." : t("auth.login")}
            </button>
          </div>
        </form>

        <p className="text-xs text-center mt-5" style={{ color: "#8B8FA8" }}>
          {t("auth.noAccount")}{" "}
          <Link to="/auth/register" className="font-medium" style={{ color: "#34D399" }}>
            {t("auth.registerLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}
