import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { detectTopic, type ChatTopic } from "@/components/dashboard/ContextPanel";
import { supabase } from "@/lib/supabase";

interface Message {
  id: number;
  from: "user" | "prodly";
  text: string;
  time: string;
}

const INITIAL_MESSAGES: Message[] = [
  { id: 1, from: "prodly", text: "Stüdyo açık. Ne üzerinde çalışıyorsun?", time: "23:41" },
];

interface Props {
  onTopicChange?: (topic: ChatTopic) => void;
}

function nowTime() {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
}

export const DashboardChat = ({ onTopicChange }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const question = input.trim();
    if (!question || loading) return;

    const time = nowTime();
    setMessages((prev) => [...prev, { id: Date.now(), from: "user", text: question, time }]);
    setInput("");
    setLoading(true);

    const topic = detectTopic(question);
    onTopicChange?.(topic);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        toast.error("Oturum bulunamadı. Lütfen tekrar giriş yap.");
        setLoading(false);
        return;
      }

      console.log("Sending request to /api/chat");
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30_000);

      let res: Response;
      try {
        res = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ question }),
          signal: controller.signal,
        });
      } catch (fetchErr) {
        if ((fetchErr as Error).name === "AbortError") {
          toast.error("İstek zaman aşımına uğradı (30s). Tekrar dene.");
        } else {
          throw fetchErr;
        }
        setLoading(false);
        return;
      } finally {
        clearTimeout(timeoutId);
      }

      console.log("Response status:", res.status);
      const rawText = await res.text();
      console.log("Response body:", rawText);

      let parsedBody: { error?: string; answer?: string; cached?: boolean; model?: string };
      try {
        parsedBody = JSON.parse(rawText);
      } catch {
        throw new Error(`Non-JSON response: ${rawText.slice(0, 200)}`);
      }

      if (res.status === 429) {
        if (parsedBody.error === "limit_reached") {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              from: "prodly",
              text: "Günlük limitine ulaştın 🎛️ Yarın devam et veya planını yükselt.",
              time: nowTime(),
            },
          ]);
        } else {
          toast.error("Çok hızlı soruyorsun. 10 saniye bekle.");
        }
        setLoading(false);
        return;
      }

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "prodly", text: parsedBody.answer ?? "", time: nowTime() },
      ]);
    } catch (err) {
      console.error(err);
      toast.error("Bir hata oluştu. Tekrar dene.");
    } finally {
      setLoading(false);
    }
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
            style={{ width: 28, height: 28, background: "linear-gradient(135deg, #00C8FF, #34D399)" }}
          >
            P
          </div>
          <span className="text-[13px] font-semibold text-white" style={{ fontFamily: "'Space Grotesk'" }}>Prodly</span>
          <span
            className={`rounded-full flex-shrink-0 ${loading ? "" : "animate-pulse-dot"}`}
            style={{ width: 6, height: 6, background: loading ? "#F59E0B" : "#34D399" }}
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
                background: msg.from === "user" ? "rgba(0,200,255,0.25)" : "rgba(255,255,255,0.06)",
                borderRadius: msg.from === "user" ? "18px 18px 4px 18px" : "4px 18px 18px 18px",
                transition: "font-size 0.3s ease",
              }}
            >
              <p className="break-words whitespace-pre-wrap">{msg.text}</p>
              {expanded && <span className="block text-[10px] mt-1.5 opacity-40">{msg.time}</span>}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div
              className="px-3.5 py-2.5 flex items-center gap-2"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "4px 18px 18px 18px",
              }}
            >
              <Loader2 size={12} className="text-[#00C8FF] animate-spin" />
              <span className="text-[12px] text-[#8B8FA8]">düşünüyor...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-3 pb-3 pt-1">
        <div
          className="flex items-center gap-2 rounded-full px-4 py-2.5"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${loading ? "rgba(0,200,255,0.3)" : "rgba(255,255,255,0.08)"}`,
            transition: "border-color 0.2s",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !loading && handleSend()}
            placeholder="Sor..."
            disabled={loading}
            maxLength={500}
            className="flex-1 bg-transparent text-[13px] text-white placeholder:text-[#555] focus:outline-none disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="p-1.5 rounded-full transition-all active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #00C8FF, #0099CC)" }}
          >
            {loading ? (
              <Loader2 size={12} className="text-white animate-spin" />
            ) : (
              <Send size={12} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
