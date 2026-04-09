import { useState, useCallback, type ReactNode } from "react";
import { AuthContext, type AuthUser } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

const STORAGE_KEY = "prodly_auth_user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });

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
