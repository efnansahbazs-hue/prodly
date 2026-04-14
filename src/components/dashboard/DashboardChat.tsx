import { useState } from "react"
import { supabase } from "@/lib/supabase"

export const DashboardChat = () => {
  const [question, setQuestion] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([
    { role: "assistant", text: "Stüdyo açık. Ne üzerinde çalışıyorsun?" },
  ])
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!question.trim() || loading) return

    console.log("BUTTON CLICKED:", question)

    const userMsg = question.trim()
    setQuestion("")
    setMessages((prev) => [...prev, { role: "user", text: userMsg }])
    setLoading(true)

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      console.log("SESSION:", session?.access_token ? "OK" : "NULL")

      if (!session) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: "Oturum bulunamadı, tekrar giriş yap." },
        ])
        return
      }

      console.log("FETCHING /api/chat...")
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ question: userMsg }),
      })

      console.log("RESPONSE STATUS:", res.status)
      const data = await res.json()
      console.log("RESPONSE DATA:", data)

      if (data.answer) {
        setMessages((prev) => [...prev, { role: "assistant", text: data.answer }])
      } else if (data.error === "limit_reached") {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: "Günlük limitine ulaştın. Yarın devam et veya planını yükselt." },
        ])
      } else {
        setMessages((prev) => [...prev, { role: "assistant", text: "Bir hata oluştu, tekrar dene." }])
      }
    } catch (err) {
      console.error("FETCH ERROR:", err)
      setMessages((prev) => [...prev, { role: "assistant", text: "Bağlantı hatası." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px", scrollbarWidth: "none" }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: 8,
            }}
          >
            <div
              style={{
                maxWidth: "85%",
                padding: "10px 14px",
                background:
                  msg.role === "user" ? "rgba(0,200,255,0.25)" : "rgba(255,255,255,0.06)",
                borderRadius:
                  msg.role === "user" ? "18px 18px 4px 18px" : "4px 18px 18px 18px",
                color: msg.role === "user" ? "#E0D4FC" : "#C4C7D4",
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <p style={{ color: "#555", fontSize: 12, padding: "4px 8px" }}>düşünüyor...</p>
        )}
      </div>

      {/* Input */}
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "8px 12px 12px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Sor..."
          disabled={loading}
          style={{
            flex: 1,
            background: "#0d0d0d",
            border: "1px solid #1a1a1a",
            borderRadius: 8,
            padding: "10px 14px",
            color: "#e0e0e0",
            fontSize: 14,
            outline: "none",
          }}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            background: "linear-gradient(135deg, #00C8FF, #0099CC)",
            border: "none",
            borderRadius: 8,
            padding: "10px 16px",
            color: "white",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: 16,
            opacity: loading ? 0.6 : 1,
          }}
        >
          →
        </button>
      </div>
    </div>
  )
}
