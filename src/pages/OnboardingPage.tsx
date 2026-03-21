import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { Music, Headphones, Sliders, BarChart3, Target } from "lucide-react";

const STEPS = [
  { icon: Music, key: "daw", options: ["Ableton Live", "FL Studio", "Logic Pro", "Other"] },
  { icon: Headphones, key: "genre", options: ["Techno", "House", "Hip-Hop", "Trap", "Pop", "Other"] },
  { icon: Sliders, key: "level", options: ["beginner", "intermediate", "advanced"] },
  { icon: BarChart3, key: "goal", options: ["mixing", "sound_design", "arrangement", "mastering"] },
  { icon: Target, key: "frequency", options: ["daily", "few_week", "weekends", "exploring"] },
];

export default function OnboardingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const current = STEPS[step];
  const Icon = current.icon;
  const progress = ((step + 1) / STEPS.length) * 100;

  const select = (val: string) => {
    const next = { ...answers, [current.key]: val };
    setAnswers(next);
    if (step < STEPS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      localStorage.setItem("prodly_onboarding", JSON.stringify(next));
      navigate("/");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NoiseOverlay /><DotGrid /><Orbs />
      <div className="glass-card-static p-8 w-full max-w-md z-10">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="flex-1 h-1 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%`, background: "linear-gradient(90deg, #7C3AED, #34D399)" }}
            />
          </div>
          <span className="text-[10px] font-medium" style={{ color: "#8B8FA8" }}>
            {step + 1}/{STEPS.length}
          </span>
        </div>

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(124,58,237,0.15)" }}
        >
          <Icon size={22} style={{ color: "#A78BFA" }} />
        </div>

        <h2
          className="text-lg font-bold text-white text-center mb-1"
          style={{ fontFamily: "'Space Grotesk'" }}
        >
          {t(`onboard.${current.key}Title`)}
        </h2>
        <p className="text-xs text-center mb-6" style={{ color: "#8B8FA8" }}>
          {t(`onboard.${current.key}Desc`)}
        </p>

        {/* Options */}
        <div className="grid gap-2" key={step}>
          {current.options.map((opt) => (
            <button
              key={opt}
              onClick={() => select(opt)}
              className="w-full px-4 py-3 rounded-xl text-sm font-medium text-white text-left transition-all active:scale-[0.97] animate-fade-in-up hover:border-[rgba(124,58,237,0.4)]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {t(`onboard.${current.key}.${opt}`) || opt}
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="text-xs mt-4 mx-auto block transition-colors"
            style={{ color: "#6B7280" }}
          >
            ← {t("profile.back")}
          </button>
        )}
      </div>
    </div>
  );
}
