import { useAuth } from "./useAuth";

const ADMIN_EMAIL = "efnansahbazs@gmail.com";

export const useAdminAuth = () => {
  const { user, isLoggedIn, logout: authLogout } = useAuth();

  const authed = isLoggedIn && user?.email === ADMIN_EMAIL;

  const logout = () => {
    authLogout();
  };

  return { authed, logout };
};
