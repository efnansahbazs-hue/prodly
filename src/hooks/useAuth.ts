import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

export type AuthUser = {
  id: string;
  username: string;
  email: string;
  plan: "free" | "premium" | "studio";
  avatar?: string;
};

const toAuthUser = (user: User): AuthUser => ({
  id: user.id,
  username: user.user_metadata?.username ?? user.email?.split("@")[0] ?? "user",
  email: user.email ?? "",
  plan: user.user_metadata?.plan ?? "free",
  avatar: user.user_metadata?.avatar,
});

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ? toAuthUser(session.user) : null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ? toAuthUser(session.user) : null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  const register = async (username: string, email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username, plan: "free" } },
    });
    if (error) throw error;
  };

  return { user, isLoggedIn: !!user, loading, login, logout, register };
};
