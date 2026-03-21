import { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollReveal } from "@/components/ScrollReveal";

export const DemoWidget = () => {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!sent) setSent(true);
  };

  return (
    <section className="relative py-20 px-5">
      <div className="container mx-auto max-w-2xl">
        <ScrollReveal>
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2" style={{ fontFamily: "'Space Grotesk'" }}>
              <Bot className="w-5 h-5 text-[var(--purple)]" />
              {t("demo.title")}
            </h3>

            {/* Chat area */}
            <div className="space-y-4 mb-5 min-h-[120px]">
              {sent && (
                <>
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-[var(--purple-light)] flex items-center justify-center flex-shrink-0">
                      <User className="w-3.5 h-3.5 text-[var(--purple)]" />
                    </div>
                    <p className="text-sm leading-relaxed pt-1" style={{ color: "var(--text-secondary)" }}>
                      {input || "How do I make lo-fi beats?"}
                    </p>
                  </div>
                  <div className="flex gap-3 items-start animate-fade-in-up">
                    <div className="w-7 h-7 rounded-full bg-[var(--mint-light)] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-[var(--mint)]" />
                    </div>
                    <p className="text-sm leading-relaxed pt-1" style={{ color: "var(--text-secondary)" }}>
                      {t("demo.response")}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={t("demo.placeholder")}
                className="flex-1 rounded-full px-5 py-3 text-sm bg-white/[0.04] border border-[var(--border-default)] text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--border-accent)] transition-colors"
              />
              <button
                onClick={handleSend}
                className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-transform active:scale-95"
                style={{ background: "var(--purple)" }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
