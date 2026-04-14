export const config = { runtime: 'edge' }

export default async function handler(req: Request): Promise<Response> {
  console.log("=== /api/chat called ===")

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

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.error("OPENAI_API_KEY not set")
    return new Response(JSON.stringify({ error: "API key not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 400,
        messages: [
          {
            role: "system",
            content:
              "You are Prodly. Studio buddy, not teacher. Short, action-oriented answers. No fluff. No motivational speeches. Just solutions. You speak like a producer who's been through it.",
          },
          { role: "user", content: question },
        ],
      }),
    })

    if (!openaiRes.ok) {
      const err = await openaiRes.text()
      console.error("OpenAI error:", err)
      return new Response(JSON.stringify({ error: "Upstream AI error" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      })
    }

    const data = await openaiRes.json() as {
      choices: Array<{ message: { content: string } }>
    }
    const answer = data.choices[0]?.message?.content ?? ""
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
