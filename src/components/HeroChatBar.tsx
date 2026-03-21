import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useFreeUses } from "@/hooks/useFreeUses";
import { ScrollReveal } from "@/components/ScrollReveal";
import { UpgradeModal } from "@/components/UpgradeModal";

const genres = ["Lo-Fi", "Hip-Hop", "EDM", "R&B", "Pop", "Trap", "Jazz", "Ambient", "Drill"];

export const HeroChatBar = () => {
  const { t } = useTranslation();
  const { remaining, exhausted, increment, userType, setUserType, max } = useFreeUses();
  const [input, setInput] = useState("");
  const [showLimit, setShowLimit] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    if (exhausted) { setShowLimit(true); return; }
    increment();
    setInput("");
    if (remaining <= 1) setShowLimit(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12 md:mt-16 px-4">
      {/* Free user daily banner */}
      {userType === "free" && exhausted && (
        <div
          className="flex items-center justify-between rounded-[10px] px-4 py-3 mb-4 animate-fade-in"
          style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <p className="text-xs" style={{ color: "#A78BFA" }}>{t("upgrade.dailyLimit")}</p>
          <button
            onClick={() => setShowUpgrade(true)}
            className="text-[11px] font-semibold px-3 py-1 rounded-full transition-all active:scale-95"
            style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA", border: "1px solid rgba(124,58,237,0.4)" }}
          >
            {t("upgrade.seePremium")}
          </button>
        </div>
      )}

      {/* Free uses banner (guest) */}
      {userType === "guest" && !exhausted && (
        <ScrollReveal delay={400}>
          <div
            className="flex items-center justify-between rounded-[10px] px-4 py-3 mb-4"
            style={{ background: "rgba(52,211,153,0.07)", border: "1px solid rgba(52,211,153,0.15)" }}
          >
            <div>
              <p className="text-xs font-bold" style={{ color: "#34D399" }}>{t("hero.freeUses")}</p>
              <p className="text-[10px]" style={{ color: "#6B7280" }}>{t("hero.freeDesc")}</p>
            </div>
            <div className="flex gap-1.5">
              {Array.from({ length: max }).map((_, i) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{ background: i < remaining ? "#34D399" : "rgba(255,255,255,0.08)", transition: "background 0.3s" }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Guest exhausted */}
      {showLimit && exhausted && userType === "guest" && (
        <div className="rounded-xl p-5 mb-4 text-center animate-fade-in" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-sm mb-3 text-white">{t("hero.usedAll")}</p>
          <button
            onClick={() => setUserType("free")}
            className="w-full rounded-full py-2.5 text-sm font-semibold text-white mb-2 transition-transform active:scale-[0.97]"
            style={{ background: "#34D399" }}
          >
            {t("hero.signupCta")}
          </button>
          <button
            onClick={() => setShowUpgrade(true)}
            className="text-xs font-medium transition-opacity hover:opacity-80"
            style={{ color: "#A78BFA" }}
          >
            {t("hero.upgradeCta")}
          </button>
        </div>
      )}

      {/* Chat input */}
      <ScrollReveal delay={500}>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={t("hero.chatPlaceholder")}
            disabled={exhausted}
            className="flex-1 rounded-xl px-5 py-3 text-sm text-white placeholder:text-[#6B7280] focus:outline-none transition-all disabled:opacity-50"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.15)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <div
            className="rounded-xl p-[2px] animate-move-border flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #7C3AED, #34D399, #7C3AED)", backgroundSize: "200% 200%" }}
          >
            <button
              onClick={handleSend}
              disabled={exhausted}
              className="rounded-[10px] px-5 py-3 text-xs font-semibold text-white whitespace-nowrap transition-transform active:scale-[0.96] disabled:opacity-50"
              style={{ background: "#7C3AED" }}
            >
              {t("hero.askProdly")}
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Genre pills */}
      <ScrollReveal delay={600}>
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <span className="text-[11px] flex-shrink-0" style={{ color: "#6B7280" }}>{t("hero.exploreGenre")}</span>
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGenre(selectedGenre === g ? null : g)}
              className="flex-shrink-0 px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-200 active:scale-95"
              style={{
                background: selectedGenre === g ? "#7C3AED" : "rgba(255,255,255,0.04)",
                border: `1px solid ${selectedGenre === g ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.08)"}`,
                color: selectedGenre === g ? "#fff" : "#8B8FA8",
              }}
              onMouseEnter={(e) => { if (selectedGenre !== g) e.currentTarget.style.borderColor = "rgba(52,211,153,0.25)"; }}
              onMouseLeave={(e) => { if (selectedGenre !== g) e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              {g}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}
    </div>
  );
};
