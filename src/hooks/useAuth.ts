import { createContext, useContext } from "react";

export type AuthUser = {
  id: string;
  username: string;
  email: string;
  plan: "free" | "premium" | "studio";
  avatar?: string;
};

export type AuthContextType = {
  user: AuthUser | null;
  plan: "free" | "premium" | "studio";
  isLoggedIn: boolean;
  loading: boolean;
  login: (u: AuthUser) => void;
  logout: () => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<AuthUser>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
