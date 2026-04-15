import Anthropic from "@anthropic-ai/sdk"

export const config = { runtime: 'edge' }

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    })
  }

  let question: string | undefined
  try {
    const body = await req.json() as { question?: string }
    question = body.question
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  if (!question?.trim()) {
    return new Response(JSON.stringify({ error: "question is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY not set")
    return new Response(JSON.stringify({ error: "API key not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system:
        "You are Prodly. Studio buddy, not teacher. Short, action-oriented answers. No fluff. No motivational speeches. Just solutions. You speak like a producer who's been through it.\n\nONLY help with music production, mixing, mastering, sound design, synthesis, DAW usage, music theory, and studio-related topics. For anything unrelated to music, respond briefly in the user's language: 'Sadece müzik konularında yardımcı olabilirim.' (or the equivalent in their language).",
      messages: [{ role: "user", content: question }],
    })

    const answer =
      message.content[0]?.type === "text" ? message.content[0].text : ""

    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("chat handler error:", err)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
