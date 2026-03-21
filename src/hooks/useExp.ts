import { useState, useCallback } from "react";
import { getLevelForExp, getLevelProgress, EXP_RULES } from "@/lib/levelData";

const STORAGE_KEY = "prodly-exp";

export const useExp = () => {
  const [exp, setExpState] = useState<number>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? parseInt(stored, 10) : 0;
  });

  const addExp = useCallback((action: keyof typeof EXP_RULES) => {
    setExpState((prev) => {
      const next = prev + (EXP_RULES[action] || 0);
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  const level = getLevelForExp(exp);
  const progress = getLevelProgress(exp);

  return { exp, addExp, level, progress };
};
