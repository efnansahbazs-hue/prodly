import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";

export const PLAN_LIMITS = {
  free: 5,
  premium: 50,
  studio: 200,
} as const;

const todayDate = () => new Date().toISOString().slice(0, 10);

export const useUsage = () => {
  const { user, plan } = useAuth();
  const [used, setUsed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const limit = PLAN_LIMITS[plan];

  useEffect(() => {
    if (!user?.id) return;
    setLoading(true);
    setError(null);
    supabase
      .from("user_usage")
      .select("questions_used")
      .eq("user_id", user.id)
      .eq("date", todayDate())
      .maybeSingle()
      .then(({ data, error: err }) => {
        if (err) setError(err.message);
        setUsed(data?.questions_used ?? 0);
        setLoading(false);
      });
  }, [user?.id]);

  const isLimitReached = useCallback(() => used >= limit, [used, limit]);

  return { used, limit, loading, error, isLimitReached };
};
