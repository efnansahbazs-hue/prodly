import { Navigate, Outlet } from "react-router-dom";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout() {
  const { isAdmin, loading } = useAdminAuth();

  if (loading) return null;
  if (!isAdmin) return <Navigate to="/auth/login" replace />;

  return (
    <div className="flex min-h-screen" style={{ background: "#0A0A0F" }}>
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
