import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "@/hooks/useAuth";
import type { AuthUser } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

const fetchPlan = async (userId: string): Promise<"free" | "premium" | "studio"> => {
  const { data } = await supabase
    .from("profiles")
    .select("plan")
    .eq("id", userId)
    .single();
  return (data?.plan as "free" | "premium" | "studio") ?? "free";
};

const toAuthUser = async (supabaseUser: {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
}): Promise<AuthUser> => {
  const plan = await fetchPlan(supabaseUser.id);
  return {
    id: supabaseUser.id,
    username:
      (supabaseUser.user_metadata?.username as string) ??
      supabaseUser.email?.split("@")[0] ??
      "user",
    email: supabaseUser.email ?? "",
    plan,
    avatar: supabaseUser.user_metadata?.avatar as string | undefined,
  };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [plan, setPlan] = useState<"free" | "premium" | "studio">("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mevcut session'ı kontrol et
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        const u = await toAuthUser(session.user);
        setUser(u);
        setPlan(u.plan);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Session değişikliklerini dinle
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const u = await toAuthUser(session.user);
        setUser(u);
        setPlan(u.plan);
      } else {
        setUser(null);
        setPlan("free");
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<AuthUser> => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    const u = await toAuthUser(data.user);
    setUser(u);
    setPlan(u.plan);
    return u;
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ): Promise<AuthUser> => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username } },
    });
    if (error) throw error;
    const u: AuthUser = { id: data.user?.id ?? "", username, email, plan: "free" };
    return u;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setPlan("free");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, plan, isLoggedIn: !!user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
