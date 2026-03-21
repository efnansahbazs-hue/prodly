import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useFreeUses } from "@/hooks/useFreeUses";
import { UpgradeModal } from "@/components/UpgradeModal";
import { GenreShowcase } from "@/components/GenreShowcase";

export const HeroChatBar = () => {
  const { t } = useTranslation();
  const { remaining, exhausted, increment, userType, setUserType, max } = useFreeUses();
  const [input, setInput] = useState("");
  const [showLimit, setShowLimit] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  

  const handleSend = () => {
    if (!input.trim()) return;
    if (exhausted) { setShowLimit(true); return; }
    increment();
    setInput("");
    if (remaining <= 1) setShowLimit(true);
  };

  return (
    <div
      className="w-full max-w-[580px] mx-auto rounded-[20px] p-5"
      style={{
        background: "rgba(15,15,25,0.8)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {/* Free uses indicator */}
      {userType === "guest" && !exhausted && (
        <p className="text-center text-[12px] font-medium mb-4" style={{ color: "#34D399" }}>
          {t("hero.freeUses")}
        </p>
      )}

      {/* Free user daily limit */}
      {userType === "free" && exhausted && (
        <div
          className="flex items-center justify-between rounded-[12px] px-4 py-3 mb-4 animate-fade-in"
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
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder={t("hero.chatPlaceholder")}
          disabled={exhausted}
          className="flex-1 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-[#555] focus:outline-none transition-all disabled:opacity-50"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.1)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        <button
          onClick={handleSend}
          disabled={exhausted}
          className="rounded-xl px-5 py-3.5 text-xs font-semibold text-white whitespace-nowrap transition-all active:scale-[0.96] disabled:opacity-50"
          style={{
            background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
            boxShadow: "0 4px 16px rgba(124,58,237,0.3)",
          }}
        >
          {t("hero.askProdly")}
        </button>
      </div>

      {/* Quick suggestion chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {[t("hero.chip1"), t("hero.chip2"), t("hero.chip3")].map((chip) => (
          <button
            key={chip}
            onClick={() => setInput(chip)}
            className="px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#6B7280",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(52,211,153,0.4)"; e.currentTarget.style.color = "#8B8FA8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#6B7280"; }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Genre pills */}
      <div className="mt-3">
        <p className="text-[11px] mb-2" style={{ color: "#555" }}>{t("hero.exploreGenre")}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGenre(selectedGenre === g ? null : g)}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 active:scale-95"
              style={{
                background: selectedGenre === g ? "rgba(124,58,237,0.18)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${selectedGenre === g ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.1)"}`,
                color: selectedGenre === g ? "#A78BFA" : "#8B8FA8",
              }}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}
    </div>
  );
};
