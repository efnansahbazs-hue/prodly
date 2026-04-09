import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export type Profile = {
  id: string;
  username: string;
  email: string;
  plan: "free" | "premium" | "studio";
};

export const useProfile = (userId: string | undefined) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setProfile(null);
      return;
    }
    setLoading(true);
    setError(null);
    supabase
      .from("profiles")
      .select("id, username, email, plan")
      .eq("id", userId)
      .single()
      .then(({ data, error: err }) => {
        if (err) setError(err.message);
        else setProfile(data as Profile);
        setLoading(false);
      });
  }, [userId]);

  return { profile, loading, error };
};
