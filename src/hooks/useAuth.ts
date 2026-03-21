import { useState, useCallback } from "react";

export type AuthUser = {
  username: string;
  email: string;
  plan: "free" | "premium" | "studio";
  avatar?: string;
};

const STORAGE_KEY = "prodly_auth_user";

export const useAuth = () => {
  const [user, setUserState] = useState<AuthUser | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  const login = useCallback((u: AuthUser) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUserState(u);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUserState(null);
  }, []);

  const register = useCallback((username: string, email: string, password: string) => {
    const u: AuthUser = { username, email, plan: "free" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUserState(u);
    return u;
  }, []);

  return { user, isLoggedIn: !!user, login, logout, register };
};
