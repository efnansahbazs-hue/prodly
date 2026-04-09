import { useState } from "react";
import { MessageSquareWarning, X, Check } from "lucide-react";

export const FloatingReportButton = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("bug");
  const [desc, setDesc] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = desc.length >= 20;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
      setDesc("");
    }, 2000);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium text-white transition-all active:scale-[0.96] animate-move-border"
        style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
          border: "2px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <div
          className="absolute inset-0 rounded-full p-[2px] -z-10 animate-move-border"
          style={{
            background: "linear-gradient(135deg, #00C8FF, #34D399, #00C8FF)",
            backgroundSize: "200% 200%",
            borderRadius: "inherit",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            padding: "1.5px",
          }}
        />
        <MessageSquareWarning className="w-4 h-4" style={{ color: "#34D399" }} />
        Report
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div
            className="w-full max-w-md rounded-2xl p-6 animate-fade-in-up"
            style={{ background: "#0F0F18", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(52,211,153,0.15)" }}>
                  <Check className="w-6 h-6" style={{ color: "#34D399" }} />
                </div>
                <p className="text-sm font-medium text-white">Report submitted!</p>
                <p className="text-xs mt-1" style={{ color: "#8B8FA8" }}>We'll review it shortly.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
                    Report an Issue
                  </h3>
                  <button onClick={() => setOpen(false)} className="p-1 rounded-lg hover:bg-white/[0.06]">
                    <X className="w-4 h-4" style={{ color: "#8B8FA8" }} />
                  </button>
                </div>

                {/* Type selector */}
                <div className="flex gap-2 mb-4">
                  {[
                    { value: "bug", label: "🐛 Bug" },
                    { value: "crash", label: "💥 Crash" },
                    { value: "content", label: "🚫 Content" },
                    { value: "other", label: "💬 Other" },
                  ].map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setType(t.value)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                      style={{
                        background: type === t.value ? "rgba(0,200,255,0.15)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${type === t.value ? "rgba(0,200,255,0.4)" : "rgba(255,255,255,0.08)"}`,
                        color: type === t.value ? "#00C8FF" : "#8B8FA8",
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Description */}
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Describe the issue (min 20 characters)..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none resize-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${desc.length >= 20 ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.08)"}`,
                  }}
                />
                <p className="text-[10px] mt-1 mb-4" style={{ color: desc.length >= 20 ? "#34D399" : "#8B8FA8" }}>
                  {desc.length}/20 min characters
                </p>

                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all active:scale-[0.97] disabled:opacity-40"
                  style={{ background: canSubmit ? "#34D399" : "rgba(52,211,153,0.3)" }}
                >
                  Submit Report
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
