import { useState } from "react";
import { useExp } from "@/hooks/useExp";
import { useLang } from "@/hooks/useLang";
import { useAvatar } from "@/hooks/useAvatar";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AvatarPickerModal } from "@/components/AvatarPickerModal";
import { getAvatarById } from "@/components/AvatarPresets";

const getLevelGradient = (level: number) => {
  if (level >= 10) return "linear-gradient(135deg, #F59E0B, #D97706)";
  if (level >= 7) return "linear-gradient(135deg, #34D399, #0D9488)";
  if (level >= 4) return "linear-gradient(135deg, #00C8FF, #34D399)";
  return "linear-gradient(135deg, #00C8FF, #0099CC)";
};

export const NavbarLoggedIn = () => {
  const { exp, level, progress } = useExp();
  const { lang } = useLang();
  const { avatarId, photo, hasAvatar } = useAvatar();
  const navigate = useNavigate();
  const [pickerOpen, setPickerOpen] = useState(false);

  const avatarPreset = avatarId ? getAvatarById(avatarId) : null;

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => setPickerOpen(true)}
            onContextMenu={(e) => { e.preventDefault(); navigate("/profile"); }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            {/* Avatar circle */}
            <div className="relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
              style={{
                background: hasAvatar ? "transparent" : getLevelGradient(level.level),
                border: "2px solid rgba(255,255,255,0.2)",
              }}
            >
              {photo ? (
                <img src={photo} alt="" className="w-full h-full object-cover" />
              ) : avatarPreset ? (
                <div className="w-full h-full">{avatarPreset.render}</div>
              ) : (
                <span className="text-xs font-bold text-white">{level.level}</span>
              )}

              {/* Online dot (only when no avatar) */}
              {!hasAvatar && (
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full animate-pulse-dot"
                  style={{ background: "#34D399", border: "2px solid #0A0A0F" }}
                />
              )}

              {/* Level badge (only when avatar is set) */}
              {hasAvatar && (
                <span
                  className="absolute flex items-center justify-center"
                  style={{
                    bottom: -2,
                    right: -2,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "rgba(10,10,15,0.85)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {level.level}
                </span>
              )}
            </div>

            {/* EXP bar — show Lv text only when no avatar */}
            <div className="hidden sm:flex flex-col gap-0.5">
              {!hasAvatar && (
                <span className="text-[10px] font-medium" style={{ color: "#8B8FA8" }}>
                  Lv.{level.level}
                </span>
              )}
              <div
                className="w-16 h-1.5 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #00C8FF, #34D399)",
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

      <AvatarPickerModal open={pickerOpen} onClose={() => setPickerOpen(false)} />
    </>
  );
};
