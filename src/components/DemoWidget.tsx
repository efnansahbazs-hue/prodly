import { useTranslation } from "@/hooks/useTranslation";
import { useDemoWidget } from "@/hooks/useDemoWidget";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DemoQuickChips } from "@/components/DemoQuickChips";
import { DemoResponse } from "@/components/DemoResponse";

export const DemoWidget = () => {
  const { t } = useTranslation();
  const { selectedDaw, setSelectedDaw, input, setInput, response, handleAsk, DAWS } = useDemoWidget();

  return (
    <section className="relative py-20 px-5" id="demo">
      <div className="max-w-[680px] mx-auto">
        <ScrollReveal>
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-center mb-3" style={{ color: "#34D399" }}>
            {t("demo.label")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8" style={{ fontFamily: "'Space Grotesk'" }}>
            {t("demo.title")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="glass-card p-5 md:p-7">
            {/* DAW pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {DAWS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDaw(d.id)}
                  className="px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 active:scale-95"
                  style={{
                    background: selectedDaw === d.id ? "rgba(124,58,237,0.2)" : "transparent",
                    border: `1px solid ${selectedDaw === d.id ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)"}`,
                    color: selectedDaw === d.id ? "#A78BFA" : "#8B8FA8",
                  }}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                placeholder={t("demo.placeholder")}
                className="flex-1 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-[#6B7280] focus:outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)";
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
                  onClick={handleAsk}
                  className="rounded-[10px] px-5 py-3.5 text-xs font-semibold text-white whitespace-nowrap transition-transform active:scale-[0.96]"
                  style={{ background: "#7C3AED" }}
                >
                  {t("hero.askProdly")}
                </button>
              </div>
            </div>

            {/* Quick chips */}
            <DemoQuickChips onSelect={(q) => { setInput(q); }} />

            {/* Response */}
            {response && <DemoResponse response={response} signupCta={t("demo.signupCta")} />}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
