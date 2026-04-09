import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, AlertTriangle, Lightbulb,
  CreditCard, MessageSquare, Tag, LogOut,
} from "lucide-react";
import { useAdminAuth } from "@/hooks/useAdminAuth";

const ITEMS = [
  { path: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/admin/users", icon: Users, label: "Users" },
  { path: "/admin/reports", icon: AlertTriangle, label: "Reports" },
  { path: "/admin/suggestions", icon: Lightbulb, label: "Suggestions" },
  { path: "/admin/subscriptions", icon: CreditCard, label: "Subscriptions" },
  { path: "/admin/community", icon: MessageSquare, label: "Community" },
  { path: "/admin/promo-codes", icon: Tag, label: "Promo Codes" },
];

export const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAdminAuth();

  return (
    <aside
      className="w-56 min-h-screen flex flex-col py-6 px-3 flex-shrink-0"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-3 mb-8">
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: "linear-gradient(135deg, #00C8FF, #34D399)" }}
        />
        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
          Prodly Admin
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex-1 space-y-1">
        {ITEMS.map((item) => {
          const active = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all"
              style={{
                background: active ? "rgba(0,200,255,0.15)" : "transparent",
                color: active ? "#fff" : "#8B8FA8",
                borderLeft: active ? "3px solid #34D399" : "3px solid transparent",
              }}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <button
        onClick={() => { logout(); navigate("/admin"); }}
        className="flex items-center gap-2 px-3 py-2 mt-4 text-xs font-medium transition-colors hover:text-white"
        style={{ color: "#8B8FA8" }}
      >
        <LogOut className="w-4 h-4" /> Logout
      </button>
    </aside>
  );
};
