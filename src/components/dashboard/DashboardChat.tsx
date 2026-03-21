import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, Send } from "lucide-react";

interface Message {
  id: number;
  from: "user" | "prodly";
  text: string;
  time: string;
}

const INITIAL_MESSAGES: Message[] = [
  { id: 1, from: "prodly", text: "Stüdyo açık. Ne üzerinde çalışıyorsun?", time: "23:41" },
  { id: 2, from: "user", text: "Kick'im mix'te kayboluyor, yardım eder misin?", time: "23:42" },
  { id: 3, from: "prodly", text: "Klasik sorun. Kick'in temel frekansı nerede oturuyor — 50-60Hz civarı mı? Eğer bass ile çakışıyorsa, sidechain ya da EQ carving ile ayırman lazım. Hangi DAW'dasın?", time: "23:42" },
  { id: 4, from: "user", text: "Ableton kullanıyorum", time: "23:43" },
  { id: 5, from: "prodly", text: "Ableton'da Glue Compressor'ı sidechain input olarak ayarla. Kick'i trigger yap, bass'a uygula. Attack 0.1ms, release 50-100ms arası. Mix'te hemen netleşir.", time: "23:43" },
];

export const DashboardChat = () => {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    setMessages((prev) => [...prev, { id: Date.now(), from: "user", text: input, time }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "prodly", text: "Bunu bi kontrol edeyim. Bir saniye...", time },
      ]);
    }, 800);
  };

  return (
    <div
      className="h-full flex flex-col rounded-2xl overflow-hidden transition-all"
      style={{
        width: expanded ? 480 : 280,
        minWidth: expanded ? 480 : 280,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        transition: "width 0.4s cubic-bezier(0.34,1.56,0.64,1), min-width 0.4s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2.5">
          <div
            className="flex items-center justify-center rounded-full text-white text-[11px] font-bold flex-shrink-0"
            style={{
              width: 28, height: 28,
              background: "linear-gradient(135deg, #7C3AED, #34D399)",
            }}
          >
            P
          </div>
          <span className="text-[13px] font-semibold text-white" style={{ fontFamily: "'Space Grotesk'" }}>Prodly</span>
          <span
            className="rounded-full animate-pulse-dot flex-shrink-0"
            style={{ width: 6, height: 6, background: "#34D399" }}
          />
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-1.5 rounded-lg transition-all active:scale-95"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <ArrowLeftRight
            size={14}
            className="text-[#8B8FA8] transition-transform"
            style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }}
          />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5" style={{ scrollbarWidth: "none" }}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className="max-w-[85%] px-3.5 py-2.5 transition-all"
              style={{
                fontSize: expanded ? 14 : 13,
                lineHeight: 1.5,
                color: msg.from === "user" ? "#E0D4FC" : "#C4C7D4",
                background: msg.from === "user" ? "rgba(124,58,237,0.25)" : "rgba(255,255,255,0.06)",
                borderRadius: msg.from === "user" ? "18px 18px 4px 18px" : "4px 18px 18px 18px",
                transition: "font-size 0.3s ease",
              }}
            >
              <p className="break-words">{msg.text}</p>
              {expanded && (
                <span className="block text-[10px] mt-1.5 opacity-40">{msg.time}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-3 pb-3 pt-1">
        <div
          className="flex items-center gap-2 rounded-full px-4 py-2.5"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Sor..."
            className="flex-1 bg-transparent text-[13px] text-white placeholder:text-[#555] focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="p-1.5 rounded-full transition-all active:scale-90"
            style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
          >
            <Send size={12} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
