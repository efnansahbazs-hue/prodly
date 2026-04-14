import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { question } = req.body as { question?: string };
  if (!question?.trim()) {
    return res.status(400).json({ error: "question is required" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("OPENAI_API_KEY not set");
    return res.status(500).json({ error: "API key not configured" });
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
    });

    if (!openaiRes.ok) {
      const err = await openaiRes.text();
      console.error("OpenAI error:", err);
      return res.status(502).json({ error: "Upstream AI error" });
    }

    const data = await openaiRes.json() as {
      choices: Array<{ message: { content: string } }>;
    };
    const answer = data.choices[0]?.message?.content ?? "";
    return res.status(200).json({ answer });
  } catch (err) {
    console.error("chat handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
