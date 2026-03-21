import { useState, useEffect, useCallback } from "react";

const LOCKOUT_KEY = "prodly-admin-lockout";
const FAILS_KEY = "prodly-admin-fails";
const AUTH_KEY = "prodly-admin-auth";
const MAX_FAILS = 3;
const LOCKOUT_MS = 15 * 60 * 1000;

// Credentials checked against env-style constants (mock for frontend)
const ADMIN_USER = "prodly_admin";
const ADMIN_HASH = "pr0dly2026!";

export const useAdminAuth = () => {
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
    if (user === ADMIN_USER && pass === ADMIN_HASH) {
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

  return { authed, locked, lockRemaining, fails, login, logout };
};
