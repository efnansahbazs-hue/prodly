import { Outlet } from "react-router-dom";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout() {
  const { authed } = useAdminAuth();

  if (!authed) return <AdminLogin />;

  return (
    <div className="flex min-h-screen" style={{ background: "#0A0A0F" }}>
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
