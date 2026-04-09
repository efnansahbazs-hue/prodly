import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

export const NavbarLoggedIn = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const initial = user?.email ? user.email[0].toUpperCase() : "?";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm text-white cursor-pointer outline-none"
        style={{ background: "#0d0d0d", border: "2px solid #00C8FF" }}
      >
        {initial}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-10 rounded-lg shadow-lg z-[9999] min-w-[180px] py-2"
          style={{
            background: "#0d0d0d",
            border: "1px solid #1a1a1a",
          }}
        >
          <div className="px-3 py-2 text-xs" style={{ color: "#8B8FA8" }}>
            {user?.email}
          </div>
          <div style={{ height: 1, background: "#1a1a1a", margin: "4px 0" }} />
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 text-xs cursor-pointer hover:bg-white/5 transition-colors"
            style={{ color: "#EF4444" }}
          >
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
};
