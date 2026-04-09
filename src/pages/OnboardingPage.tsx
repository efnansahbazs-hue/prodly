import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "@/hooks/useLang";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { PRODLY_VOICE } from "@/utils/systemPrompts";

type Lang = "en" | "tr" | "de" | "es";

const DAW_OPTIONS = ["Ableton Live", "FL Studio", "Logic Pro", "Cubase", "Reaper", "Other"];
const GENRE_OPTIONS = ["Techno", "House", "Hip-Hop", "Trap", "Drum & Bass", "Pop", "Ambient", "R&B", "Dubstep", "Trance", "Other"];
const EXP_OPTIONS = [
  { key: "beginner", en: "Less than 1 year", tr: "1 yıldan az", de: "Weniger als 1 Jahr", es: "Menos de 1 año" },
  { key: "intermediate", en: "1–3 years", tr: "1–3 yıl", de: "1–3 Jahre", es: "1–3 años" },
  { key: "advanced", en: "3–5 years", tr: "3–5 yıl", de: "3–5 Jahre", es: "3–5 años" },
  { key: "pro", en: "5+ years", tr: "5+ yıl", de: "5+ Jahre", es: "Más de 5 años" },
];

const ProdlyAvatar = () => (
  <div
    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
    style={{ background: "linear-gradient(135deg, #00C8FF, #34D399)" }}
  >
    P
  </div>
);

const ChatBubble = ({ children, animate = true }: { children: React.ReactNode; animate?: boolean }) => (
  <div className={`flex items-start gap-3 ${animate ? "animate-fade-in-up" : ""}`}>
    <ProdlyAvatar />
    <div
      className="px-4 py-3 rounded-2xl rounded-tl-md text-sm text-white max-w-[400px]"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {children}
    </div>
  </div>
);

const UserBubble = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-end animate-fade-in-up">
    <div
      className="px-4 py-2.5 rounded-2xl rounded-tr-md text-sm text-white"
      style={{
        background: "rgba(0,200,255,0.15)",
        border: "1px solid rgba(0,200,255,0.3)",
      }}
    >
      {children}
    </div>
  </div>
);

export default function OnboardingPage() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [headacheText, setHeadacheText] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const v = PRODLY_VOICE.onboarding;
  const l = lang as Lang;

  const progress = ((step + 1) / 6) * 100;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [step, showTyping]);

  const advanceWithTyping = (nextStep: number) => {
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      setStep(nextStep);
    }, 600);
  };

  const finish = () => {
    const data = { ...answers, headache: headacheText || undefined };
    localStorage.setItem("prodly_onboarding", JSON.stringify(data));
    setStep(6);
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  const selectDaw = (daw: string) => {
    setAnswers((a) => ({ ...a, daw }));
    advanceWithTyping(2);
  };

  const toggleGenre = (g: string) => {
    setSelectedGenres((prev) => {
      if (prev.includes(g)) return prev.filter((x) => x !== g);
      if (prev.length >= 3) return prev;
      return [...prev, g];
    });
  };

  const confirmGenres = () => {
    if (selectedGenres.length === 0) return;
    setAnswers((a) => ({ ...a, genres: selectedGenres }));
    advanceWithTyping(3);
  };

  const selectExp = (key: string) => {
    setAnswers((a) => ({ ...a, experience: key }));
    advanceWithTyping(4);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <NoiseOverlay /><DotGrid /><Orbs />

      <div className="glass-card-static w-full max-w-[560px] z-10 flex flex-col" style={{ maxHeight: "85vh" }}>
        {/* Progress bar */}
        <div className="px-6 pt-5 pb-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%`, background: "linear-gradient(90deg, #00C8FF, #34D399)" }}
              />
            </div>
            <span className="text-[10px] font-medium" style={{ color: "#8B8FA8" }}>
              {Math.min(step + 1, 5)}/5
            </span>
          </div>
        </div>

        {/* Chat area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 pb-6 space-y-4" style={{ minHeight: 300 }}>
          {/* Step 0: Intro */}
          <ChatBubble animate={step === 0}>
            {v.intro[l]}
          </ChatBubble>
          {step === 0 && (
            <div className="flex justify-end animate-fade-in-up">
              <button
                onClick={() => advanceWithTyping(1)}
                className="px-5 py-2 rounded-full text-sm font-semibold text-white active:scale-[0.96] transition-transform"
                style={{ background: "linear-gradient(135deg, #00C8FF, #34D399)" }}
              >
                Let's go →
              </button>
            </div>
          )}
          {step > 0 && (
            <UserBubble>Let's go</UserBubble>
          )}

          {/* Step 1: DAW */}
          {step >= 1 && (
            <>
              <ChatBubble animate={step === 1}>{v.daw[l]}</ChatBubble>
              {step === 1 ? (
                <div className="flex flex-wrap gap-2 ml-11 animate-fade-in-up">
                  {DAW_OPTIONS.map((daw) => (
                    <button
                      key={daw}
                      onClick={() => selectDaw(daw)}
                      className="px-3.5 py-2 rounded-full text-xs font-medium text-white transition-all active:scale-[0.96]"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {daw}
                    </button>
                  ))}
                </div>
              ) : answers.daw ? (
                <UserBubble>{answers.daw as string}</UserBubble>
              ) : null}
            </>
          )}

          {/* Step 2: Genre multi-select */}
          {step >= 2 && (
            <>
              <ChatBubble animate={step === 2}>{v.genre[l]}</ChatBubble>
              {step === 2 ? (
                <div className="ml-11 space-y-3 animate-fade-in-up">
                  <div className="flex flex-wrap gap-2">
                    {GENRE_OPTIONS.map((g) => {
                      const sel = selectedGenres.includes(g);
                      return (
                        <button
                          key={g}
                          onClick={() => toggleGenre(g)}
                          className="px-3.5 py-2 rounded-full text-xs font-medium transition-all active:scale-[0.96]"
                          style={{
                            background: sel ? "linear-gradient(135deg, #00C8FF, #34D399)" : "rgba(255,255,255,0.04)",
                            border: sel ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
                            color: "#fff",
                          }}
                        >
                          {g}
                        </button>
                      );
                    })}
                  </div>
                  {selectedGenres.length > 0 && (
                    <button
                      onClick={confirmGenres}
                      className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all active:scale-[0.96]"
                      style={{ color: "#34D399", border: "1px solid rgba(52,211,153,0.3)" }}
                    >
                      Continue →
                    </button>
                  )}
                </div>
              ) : answers.genres ? (
                <UserBubble>{(answers.genres as string[]).join(", ")}</UserBubble>
              ) : null}
            </>
          )}

          {/* Step 3: Experience */}
          {step >= 3 && (
            <>
              <ChatBubble animate={step === 3}>{v.experience[l]}</ChatBubble>
              {step === 3 ? (
                <div className="flex flex-wrap gap-2 ml-11 animate-fade-in-up">
                  {EXP_OPTIONS.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => selectExp(opt.key)}
                      className="px-3.5 py-2 rounded-full text-xs font-medium text-white transition-all active:scale-[0.96]"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {opt[l] || opt.en}
                    </button>
                  ))}
                </div>
              ) : answers.experience ? (
                <UserBubble>{EXP_OPTIONS.find((o) => o.key === answers.experience)?.[l] || answers.experience as string}</UserBubble>
              ) : null}
            </>
          )}

          {/* Step 4: Headache (optional) */}
          {step >= 4 && step < 6 && (
            <>
              <ChatBubble animate={step === 4}>{v.headache[l]}</ChatBubble>
              {step === 4 && (
                <div className="ml-11 space-y-3 animate-fade-in-up">
                  <input
                    type="text"
                    value={headacheText}
                    onChange={(e) => setHeadacheText(e.target.value)}
                    placeholder={l === "tr" ? "ör. Mix'lerim boğuk çıkıyor..." : "e.g. My mixes sound muddy..."}
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-[#6B7280] outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(52,211,153,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => { advanceWithTyping(5); }}
                      className="px-4 py-1.5 rounded-full text-xs font-medium transition-all"
                      style={{ color: "#8B8FA8" }}
                    >
                      Skip
                    </button>
                    <button
                      onClick={() => { if (headacheText.trim()) advanceWithTyping(5); }}
                      className="px-5 py-1.5 rounded-full text-xs font-semibold text-white active:scale-[0.96] transition-transform"
                      style={{
                        background: headacheText.trim() ? "#34D399" : "rgba(52,211,153,0.3)",
                        color: headacheText.trim() ? "#0A0A0F" : "#6B7280",
                      }}
                    >
                      Done →
                    </button>
                  </div>
                </div>
              )}
              {step >= 5 && headacheText && (
                <UserBubble>{headacheText}</UserBubble>
              )}
              {step >= 5 && !headacheText && (
                <UserBubble>—</UserBubble>
              )}
            </>
          )}

          {/* Step 5: Finish */}
          {step >= 5 && step < 6 && (
            <>
              <ChatBubble animate={step === 5}>{v.done[l]}</ChatBubble>
              {step === 5 && (
                <div className="flex justify-end animate-fade-in-up">
                  <button
                    onClick={finish}
                    className="rounded-full p-[2px] animate-move-border"
                    style={{
                      background: "linear-gradient(135deg, #00C8FF, #34D399, #00C8FF)",
                      backgroundSize: "200% 200%",
                    }}
                  >
                    <span
                      className="block rounded-full px-6 py-2 text-sm font-semibold text-white active:scale-[0.96] transition-transform"
                      style={{ background: "#00C8FF" }}
                    >
                      Let's go →
                    </span>
                  </button>
                </div>
              )}
            </>
          )}

          {/* Step 6: Redirect message */}
          {step === 6 && (
            <ChatBubble>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ background: "#34D399" }} />
                Loading your studio...
              </span>
            </ChatBubble>
          )}

          {/* Typing indicator */}
          {showTyping && (
            <div className="flex items-start gap-3 animate-fade-in-up">
              <ProdlyAvatar />
              <div
                className="px-4 py-3 rounded-2xl rounded-tl-md flex gap-1"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#8B8FA8",
                      animation: `pulseDot 1.2s ease-in-out ${i * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
