import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "prodly_free_count";
const TIMESTAMP_KEY = "prodly_free_ts";
const MAX_FREE = 3;
const DAY_MS = 24 * 60 * 60 * 1000;

const getStoredCount = (): number => {
  const ts = localStorage.getItem(TIMESTAMP_KEY);
  if (ts && Date.now() - parseInt(ts) > DAY_MS) {
    localStorage.setItem(STORAGE_KEY, "0");
    localStorage.setItem(TIMESTAMP_KEY, String(Date.now()));
    return 0;
  }
  return parseInt(localStorage.getItem(STORAGE_KEY) || "0");
};

export const useFreeUses = () => {
  const [count, setCount] = useState(getStoredCount);
  const remaining = Math.max(0, MAX_FREE - count);
  const exhausted = count >= MAX_FREE;

  const increment = useCallback(() => {
    if (!localStorage.getItem(TIMESTAMP_KEY)) {
      localStorage.setItem(TIMESTAMP_KEY, String(Date.now()));
    }
    const next = count + 1;
    localStorage.setItem(STORAGE_KEY, String(next));
    setCount(next);
  }, [count]);

  return { count, remaining, exhausted, increment, max: MAX_FREE };
};
