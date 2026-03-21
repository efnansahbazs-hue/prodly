import { useState, useCallback } from "react";

const STORAGE_KEY = "prodly_free_count";
const TIMESTAMP_KEY = "prodly_free_ts";
const USER_KEY = "prodly_user_type"; // "guest" | "free" | "premium"
const DAY_MS = 24 * 60 * 60 * 1000;

type UserType = "guest" | "free" | "premium";

const getLimit = (user: UserType) => (user === "guest" ? 5 : user === "free" ? 5 : 999);

const getStoredCount = (): number => {
  const ts = localStorage.getItem(TIMESTAMP_KEY);
  if (ts && Date.now() - parseInt(ts) > DAY_MS) {
    localStorage.setItem(STORAGE_KEY, "0");
    localStorage.setItem(TIMESTAMP_KEY, String(Date.now()));
    return 0;
  }
  return parseInt(localStorage.getItem(STORAGE_KEY) || "0");
};

const getStoredUserType = (): UserType =>
  (localStorage.getItem(USER_KEY) as UserType) || "guest";

export const useFreeUses = () => {
  const [count, setCount] = useState(getStoredCount);
  const [userType, setUserTypeState] = useState<UserType>(getStoredUserType);
  const max = getLimit(userType);
  const remaining = Math.max(0, max - count);
  const exhausted = count >= max;

  const increment = useCallback(() => {
    if (!localStorage.getItem(TIMESTAMP_KEY)) {
      localStorage.setItem(TIMESTAMP_KEY, String(Date.now()));
    }
    const next = count + 1;
    localStorage.setItem(STORAGE_KEY, String(next));
    setCount(next);
  }, [count]);

  const setUserType = useCallback((type: UserType) => {
    localStorage.setItem(USER_KEY, type);
    setUserTypeState(type);
    // Reset count on upgrade
    localStorage.setItem(STORAGE_KEY, "0");
    localStorage.setItem(TIMESTAMP_KEY, String(Date.now()));
    setCount(0);
  }, []);

  return { count, remaining, exhausted, increment, max, userType, setUserType };
};
