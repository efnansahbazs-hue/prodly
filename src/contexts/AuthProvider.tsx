import { useState, useCallback, useEffect, type ReactNode } from "react";
import { AuthContext, type AuthUser } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

const STORAGE_KEY = "prodly_auth_user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    // Sync with active Supabase session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user && !localStorage.getItem(STORAGE_KEY)) {
        const u: AuthUser = {
          username: session.user.user_metadata?.username ?? session.user.email?.split("@")[0] ?? "user",
          email: session.user.email ?? "",
          plan: session.user.user_metadata?.plan ?? "free",
          avatar: session.user.user_metadata?.avatar,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
        setUser(u);
      }
    });

    // Keep state in sync with Supabase auth events
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
          const u: AuthUser = {
            username: session.user.user_metadata?.username ?? session.user.email?.split("@")[0] ?? "user",
            email: session.user.email ?? "",
            plan: session.user.user_metadata?.plan ?? "free",
            avatar: session.user.user_metadata?.avatar,
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
          setUser(u);
        }
      } else {
        localStorage.removeItem(STORAGE_KEY);
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = useCallback((u: AuthUser) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUser(u);
  }, []);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    localStorage.clear();
    sessionStorage.clear();
    setUser(null);
    window.location.href = "/";
  }, []);

  const register = useCallback((username: string, email: string, _password: string): AuthUser => {
    const u: AuthUser = { username, email, plan: "free" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUser(u);
    return u;
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
