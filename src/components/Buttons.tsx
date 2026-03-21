import { ReactNode } from "react";

interface MovingBorderButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MovingBorderButton = ({ children, className = "", onClick }: MovingBorderButtonProps) => (
  <div
    className="inline-block rounded-full p-[2px] animate-move-border"
    style={{
      background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)",
      backgroundSize: "200% 200%",
    }}
  >
    <button
      onClick={onClick}
      className={`rounded-full px-8 py-3 font-semibold text-white transition-transform duration-200 active:scale-[0.97] ${className}`}
      style={{ background: "#7C3AED" }}
    >
      {children}
    </button>
  </div>
);

export const GlassButton = ({ children, className = "", onClick }: MovingBorderButtonProps) => (
  <button
    onClick={onClick}
    className={`glass-card-static px-8 py-3 rounded-full font-medium text-white transition-all duration-200 hover:border-[var(--border-accent)] active:scale-[0.97] ${className}`}
  >
    {children}
  </button>
);
