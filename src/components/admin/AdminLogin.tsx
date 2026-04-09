import { useState } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Lock, AlertTriangle } from "lucide-react";

export const AdminLogin = () => {
  const { login, locked, lockRemaining, fails } = useAdminAuth();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(user, pass)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-5"
      style={{ background: "#0A0A0F" }}
    >
      <div className="glass-card-static p-8 w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Lock className="w-5 h-5" style={{ color: "#00C8FF" }} />
          <h1 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
            Admin Access
          </h1>
        </div>

        {locked ? (
          <div className="text-center">
            <AlertTriangle className="w-8 h-8 mx-auto mb-3" style={{ color: "#EF4444" }} />
            <p className="text-sm text-white mb-1">Account locked</p>
            <p className="text-xs" style={{ color: "#8B8FA8" }}>
              Too many failed attempts. Try again in {Math.ceil(lockRemaining / 60)}m {lockRemaining % 60}s
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "#8B8FA8" }}>Username</label>
              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none transition-all focus:border-[var(--border-accent)]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "#8B8FA8" }}>Password</label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl text-sm text-white outline-none transition-all focus:border-[var(--border-accent)]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>

            {error && (
              <p className="text-xs" style={{ color: "#EF4444" }}>
                Invalid credentials. {3 - fails > 0 ? `${3 - fails} attempts remaining.` : ""}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all active:scale-[0.97]"
              style={{ background: "#00C8FF" }}
            >
              Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
