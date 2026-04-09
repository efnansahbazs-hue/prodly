import { useState, useCallback, useEffect, type ReactNode } from "react";
import { AuthContext, type AuthUser } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

const STORAGE_KEY = "prodly_auth_user";

const fetchPlan = async (userId: string): Promise<"free" | "premium" | "studio"> => {
  const { data } = await supabase
    .from("profiles")
    .select("plan")
    .eq("id", userId)
    .single();
  return (data?.plan as "free" | "premium" | "studio") ?? "free";
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        const plan = await fetchPlan(session.user.id);
        const u: AuthUser = {
          id: session.user.id,
          username: session.user.user_metadata?.username ?? session.user.email?.split("@")[0] ?? "user",
          email: session.user.email ?? "",
          plan,
          avatar: session.user.user_metadata?.avatar,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
        setUser(u);
      } else {
        localStorage.removeItem(STORAGE_KEY);
        setUser(null);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const plan = await fetchPlan(session.user.id);
        const u: AuthUser = {
          id: session.user.id,
          username: session.user.user_metadata?.username ?? session.user.email?.split("@")[0] ?? "user",
          email: session.user.email ?? "",
          plan,
          avatar: session.user.user_metadata?.avatar,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
        setUser(u);
      } else {
        localStorage.removeItem(STORAGE_KEY);
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = useCallback((u: AuthUser) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUser(u);
  }, []);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    localStorage.clear();
    sessionStorage.clear();
    setUser(null);
    window.location.href = "/";
  }, []);

  const register = useCallback(async (username: string, email: string, password: string): Promise<AuthUser> => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username, plan: "free" } },
    });
    if (error) throw error;
    const u: AuthUser = { id: data.user?.id ?? "", username, email, plan: "free" };
    return u;
  }, []);

  const plan = user?.plan ?? "free";

  return (
    <AuthContext.Provider value={{ user, plan, isLoggedIn: !!user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
