import { useExp } from "@/hooks/useExp";
import { useLang } from "@/hooks/useLang";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const NavbarLoggedIn = () => {
  const { exp, level, progress } = useExp();
  const { lang } = useLang();
  const navigate = useNavigate();
  const isHighLevel = level.level >= 8;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          {/* Avatar circle */}
          <div
            className="relative w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{
              background: isHighLevel
                ? "linear-gradient(135deg, #7C3AED, #34D399)"
                : "rgba(124,58,237,0.3)",
              border: `2px solid ${isHighLevel ? "rgba(52,211,153,0.5)" : "rgba(124,58,237,0.4)"}`,
            }}
          >
            {level.level}
            {/* Online dot */}
            <span
              className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full animate-pulse-dot"
              style={{ background: "#34D399", border: "2px solid #0A0A0F" }}
            />
          </div>

          {/* EXP bar */}
          <div className="hidden sm:flex flex-col gap-0.5">
            <span className="text-[10px] font-medium" style={{ color: "#8B8FA8" }}>
              Lv.{level.level}
            </span>
            <div
              className="w-16 h-1.5 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #7C3AED, #34D399)",
                }}
              />
            </div>
          </div>
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="border-0 px-3 py-2 text-xs"
        style={{
          background: "#0A0A0F",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#fff",
        }}
      >
        Level {level.level} — {level.name[lang] || level.name.en} | {exp.toLocaleString()} / {level.maxExp.toLocaleString()} EXP
      </TooltipContent>
    </Tooltip>
  );
};
