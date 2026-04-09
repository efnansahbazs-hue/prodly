import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

const LOCKOUT_KEY = "prodly-admin-lockout";
const FAILS_KEY = "prodly-admin-fails";
const AUTH_KEY = "prodly-admin-auth";
const MAX_FAILS = 3;
const LOCKOUT_MS = 15 * 60 * 1000;

const ADMIN_USER = import.meta.env.VITE_ADMIN_EMAIL ?? "prodly_admin";
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD ?? "pr0dly2026!";

interface AdminAuthState {
  authed: boolean;
  locked: boolean;
  lockRemaining: number;
  fails: number;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthState | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === "1");
  const [locked, setLocked] = useState(false);
  const [lockRemaining, setLockRemaining] = useState(0);
  const [fails, setFails] = useState(() => parseInt(localStorage.getItem(FAILS_KEY) || "0", 10));

  const checkLockout = useCallback(() => {
    const lockUntil = parseInt(localStorage.getItem(LOCKOUT_KEY) || "0", 10);
    if (lockUntil > Date.now()) {
      setLocked(true);
      setLockRemaining(Math.ceil((lockUntil - Date.now()) / 1000));
      return true;
    }
    setLocked(false);
    return false;
  }, []);

  useEffect(() => {
    checkLockout();
    const iv = setInterval(checkLockout, 1000);
    return () => clearInterval(iv);
  }, [checkLockout]);

  const login = (user: string, pass: string): boolean => {
    if (checkLockout()) return false;
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      sessionStorage.setItem(AUTH_KEY, "1");
      localStorage.setItem(FAILS_KEY, "0");
      setAuthed(true);
      setFails(0);
      return true;
    }
    const newFails = fails + 1;
    setFails(newFails);
    localStorage.setItem(FAILS_KEY, String(newFails));
    if (newFails >= MAX_FAILS) {
      localStorage.setItem(LOCKOUT_KEY, String(Date.now() + LOCKOUT_MS));
      setLocked(true);
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  };

  return (
    <AdminAuthContext.Provider value={{ authed, locked, lockRemaining, fails, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth(): AdminAuthState {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
