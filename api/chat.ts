import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";

type Plan = "free" | "premium" | "studio";

const PLAN_LIMITS: Record<Plan, number> = { free: 5, premium: 50, studio: 200 };
const TOKEN_LIMITS: Record<Plan, number> = { free: 400, premium: 800, studio: 1500 };
const RATE_LIMIT_MS = 10_000;

// In-memory rate limiter (per-instance, resets on cold start)
const rateLimitMap = new Map<string, number>();

const STATIC_SYSTEM = `Sen Prodly'sin. Müzik prodüksiyon asistanısın.
Mixing, mastering, sound design, synthesis, DAW workflow,
müzik teorisi konularında derinlemesine bilgilisin.
Ableton, FL Studio, Logic Pro, Pro Tools, Reaper biliyorsun.

DAVRANIŞ KURALLARI:
- Kullanıcının yazım tonunu oku, aynı tonda cevap ver.
  Resmi yazıyorsa resmi, samimi yazıyorsa samimi ol.
  Yapay samimiyet kurma, zorla bro deme.
- Hangi dilde yazılıyorsa o dilde cevap ver. Otomatik algıla.
- Teknik terimleri kullan ama parantez içinde kısaca açıkla.
- Cevapların kısa ve aksiyona yönelik olsun.
- 'Harika soru' deme. Bazen 'klasik hata bu' de.
- Yargılama, her seviyeye saygılı ol.`;

async function sha256(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default async function handler(req: Request): Promise<Response> {
  console.log("=== /api/chat called ===");
  console.log("method:", req.method);

  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  // Auth
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    console.log("auth check done: missing/invalid header");
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const token = authHeader.slice(7);

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);

  if (authError || !user) {
    console.log("auth check done: invalid token", authError?.message);
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  console.log("auth check done: user", user.id);

  // Rate limit: 1 request per 10 seconds per user
  const lastRequest = rateLimitMap.get(user.id);
  if (lastRequest && Date.now() - lastRequest < RATE_LIMIT_MS) {
    console.log("rate limit hit for user", user.id);
    return Response.json({ error: "rate_limit" }, { status: 429 });
  }
  rateLimitMap.set(user.id, Date.now());

  // Parse body
  let question: string;
  try {
    const body = await req.json();
    question = String(body.question ?? "")
      .trim()
      .slice(0, 500);
  } catch {
    return Response.json({ error: "Invalid body" }, { status: 400 });
  }

  if (!question) {
    return Response.json({ error: "Empty question" }, { status: 400 });
  }
  console.log("body parsed: question length", question.length);

  const today = new Date().toISOString().slice(0, 10);

  // Parallel: plan, usage today, total questions
  const [profileRes, usageRes, archiveRes] = await Promise.all([
    supabase.from("profiles").select("plan").eq("id", user.id).single(),
    supabase
      .from("user_usage")
      .select("questions_used")
      .eq("user_id", user.id)
      .eq("date", today)
      .maybeSingle(),
    supabase
      .from("archive")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id),
  ]);

  const plan: Plan = ((profileRes.data?.plan as Plan) ?? "free") as Plan;
  const questionsUsed: number = usageRes.data?.questions_used ?? 0;
  const totalQuestions: number = archiveRes.count ?? 0;
  console.log("limit check done: plan", plan, "questionsUsed", questionsUsed, "totalQuestions", totalQuestions);

  // Daily limit check
  if (questionsUsed >= PLAN_LIMITS[plan]) {
    return Response.json({ error: "limit_reached" }, { status: 429 });
  }

  // Cache lookup
  const questionHash = await sha256(question.toLowerCase().trim());
  const { data: cachedRow } = await supabase
    .from("cached_answers")
    .select("answer, hit_count")
    .eq("question_hash", questionHash)
    .maybeSingle();

  if (cachedRow) {
    console.log("cache check done: HIT");
    // Increment hit_count (fire-and-forget)
    supabase
      .from("cached_answers")
      .update({ hit_count: (cachedRow.hit_count ?? 0) + 1 })
      .eq("question_hash", questionHash)
      .then(() => {});

    return Response.json(
      { answer: cachedRow.answer, cached: true, model: "cached" },
      { status: 200 }
    );
  }
  console.log("cache check done: MISS");

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

  // Classify: simple or complex (Haiku, max 10 tokens)
  let isComplex = false;
  try {
    console.log("classification: starting");
    const classification = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 10,
      messages: [
        {
          role: "user",
          content: `Is this question simple (basic definition or technical) or complex (analysis, troubleshoot, creative suggestion)? Reply ONLY with "simple" or "complex".\n\nQuestion: ${question}`,
        },
      ],
    });
    const label = (
      (classification.content[0] as { text: string }).text ?? ""
    )
      .toLowerCase()
      .trim();
    isComplex = label.includes("complex");
    console.log("classification done: isComplex", isComplex);
  } catch (e) {
    console.log("classification failed, defaulting to simple:", e);
    isComplex = false;
  }

  // Model selection
  let model: string;
  if (!isComplex || plan === "free") {
    model = "claude-haiku-4-5-20251001";
  } else if (plan === "premium") {
    model =
      Math.random() < 0.7
        ? "claude-haiku-4-5-20251001"
        : "claude-sonnet-4-6";
  } else {
    // studio + complex
    model = "claude-sonnet-4-6";
  }

  // Dynamic system prompt part (not cached)
  const levelHint =
    totalQuestions < 10
      ? "yeni başlıyor"
      : totalQuestions < 50
      ? "gelişiyor"
      : "deneyimli";
  const dynamicPart = `Kullanıcı ${totalQuestions} soru sormuş.\nSeviye ipucu: ${levelHint}.`;

  console.log("anthropic call: starting with model", model);
  // Anthropic API call — static part marked for prompt caching
  const response = await anthropic.messages.create({
    model,
    max_tokens: TOKEN_LIMITS[plan],
    system: [
      {
        type: "text",
        text: STATIC_SYSTEM,
        // @ts-expect-error cache_control is supported by the API but not yet typed in the SDK
        cache_control: { type: "ephemeral" },
      },
      {
        type: "text",
        text: dynamicPart,
      },
    ],
    messages: [{ role: "user", content: question }],
  });

  const answer = (response.content[0] as { text: string }).text;
  const tokensUsed =
    response.usage.input_tokens + response.usage.output_tokens;
  console.log("anthropic call done: tokensUsed", tokensUsed, "answer length", answer.length);

  // Persist: cache + archive + usage (parallel, fire-and-forget errors)
  console.log("db write: starting");
  await Promise.all([
    supabase.from("cached_answers").insert({
      question_hash: questionHash,
      question,
      answer,
      hit_count: 0,
    }),
    supabase.from("archive").insert({
      user_id: user.id,
      question,
      answer,
      model_used: model,
      tokens_used: tokensUsed,
    }),
    supabase.from("user_usage").upsert(
      {
        user_id: user.id,
        date: today,
        questions_used: questionsUsed + 1,
      },
      { onConflict: "user_id,date" }
    ),
  ]);

  console.log("db write done");
  console.log("=== /api/chat done ===");
  return Response.json({ answer, cached: false, model }, { status: 200 });
}
