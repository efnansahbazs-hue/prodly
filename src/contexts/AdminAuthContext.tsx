import { createContext, useContext, ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";

const ADMIN_EMAIL = "efnansahbazs@gmail.com";

interface AdminAuthState {
  isAdmin: boolean;
  loading: boolean;
  logout: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthState | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const { user, loading, logout } = useAuth();
  const isAdmin = user?.email === ADMIN_EMAIL;

  return (
    <AdminAuthContext.Provider value={{ isAdmin, loading, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth(): AdminAuthState {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
