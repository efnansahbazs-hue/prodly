import { useTranslation } from "@/hooks/useTranslation";
import { useLang } from "@/hooks/useLang";
import { useExp } from "@/hooks/useExp";
import { DailyUsageBar } from "@/components/DailyUsageBar";
import { ScrollReveal } from "@/components/ScrollReveal";

const getGreeting = (lang: string) => {
  const h = new Date().getHours();
  if (h >= 6 && h < 12) return lang === "tr" ? "Günaydın." : "Good morning.";
  if (h >= 12 && h < 18) return lang === "tr" ? "İyi günler." : "Good afternoon.";
  if (h >= 18 && h < 22) return lang === "tr" ? "Akşam seansı." : "Evening session.";
  if (h >= 22) return lang === "tr" ? "Gece modunda." : "Night mode.";
  return lang === "tr" ? "Gece 3. Stüdyodasın." : "It's 3am. Studio time.";
};

const TECHNIQUE = {
  title: { tr: "Parallel Compression", en: "Parallel Compression" },
  difficulty: "intermediate" as const,
  desc: {
    tr: "Dry sinyalin yanına ağır compress edilmiş kopya karıştır. Punch + detail bir arada.",
    en: "Blend a heavily compressed copy alongside the dry signal. Punch + detail together.",
  },
};

const STREAK_DAYS = [true, true, true, true, true, false, false];
const WEEKDAYS_TR = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pa"];
const WEEKDAYS_EN = ["M", "T", "W", "T", "F", "S", "S"];

const ARCHIVE = [
  { q: "Kick neden mix'te kayboluyor?", a: "Sidechain + EQ carving ile ayır...", time: "Bugün" },
  { q: "Reverb ne zaman fazla?", a: "Mono'ya çevirdiğinde kayboluyorsa fazla...", time: "Dün" },
  { q: "808 nasıl punch yapar?", a: "Saturation + transient shaper + layering...", time: "2 gün önce" },
];

export const DashboardMain = () => {
  const { t } = useTranslation();
  const { lang } = useLang();
  const { level, exp, progress } = useExp();
  const greeting = getGreeting(lang);
  const weekdays = lang === "tr" ? WEEKDAYS_TR : WEEKDAYS_EN;

  return (
    <div className="flex-1 min-w-0 space-y-5">
      {/* Greeting card */}
      <ScrollReveal>
        <div
          className="glass-card-static rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <p className="text-[22px] font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
              {greeting}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs font-medium" style={{ color: "#8B8FA8" }}>
                Level {level.level}
              </span>
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA" }}
              >
                {lang === "tr" ? level.name.tr : level.name.en}
              </span>
              <span className="text-sm">🔥 5</span>
            </div>
          </div>
          <div className="w-full md:w-64">
            <DailyUsageBar used={12} max={20} />
          </div>
        </div>
      </ScrollReveal>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Daily Technique — wide */}
        <ScrollReveal className="md:col-span-4">
          <div
            className="glass-card rounded-2xl p-5 h-full"
            style={{ borderTop: "2px solid transparent", borderImage: "linear-gradient(90deg, #7C3AED, #34D399) 1" }}
          >
            <span className="section-label text-[10px]">{lang === "tr" ? "GÜNÜN TEKNİĞİ" : "TODAY'S TECHNIQUE"}</span>
            <h3 className="text-lg font-bold text-white mt-2" style={{ fontFamily: "'Space Grotesk'" }}>
              {lang === "tr" ? TECHNIQUE.title.tr : TECHNIQUE.title.en}
            </h3>
            <span
              className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mt-2"
              style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA" }}
            >
              Intermediate
            </span>
            <p className="text-[13px] mt-3" style={{ color: "#8B8FA8", lineHeight: 1.6 }}>
              {lang === "tr" ? TECHNIQUE.desc.tr : TECHNIQUE.desc.en}
            </p>
          </div>
        </ScrollReveal>

        {/* Streak Calendar — narrow */}
        <ScrollReveal delay={80} className="md:col-span-2">
          <div className="glass-card rounded-2xl p-5 h-full">
            <span className="section-label text-[10px]">STREAK</span>
            <div className="flex items-center gap-2 mt-3">
              {STREAK_DAYS.map((done, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="rounded-full flex items-center justify-center text-[9px] font-bold"
                    style={{
                      width: 28, height: 28,
                      background: done ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.04)",
                      border: i === 5 ? "2px solid #34D399" : done ? "1px solid rgba(124,58,237,0.4)" : "1px solid rgba(255,255,255,0.06)",
                      color: done ? "#A78BFA" : "#555",
                      animation: i === 5 ? "pulseDot 2s ease-in-out infinite" : undefined,
                    }}
                  >
                    {done ? "✓" : ""}
                  </div>
                  <span className="text-[9px]" style={{ color: "#555" }}>{weekdays[i]}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3 font-medium" style={{ color: "#34D399" }}>
              🔥 5 {lang === "tr" ? "gün serisi" : "day streak"}
            </p>
          </div>
        </ScrollReveal>

        {/* Active Challenge */}
        <ScrollReveal delay={120} className="md:col-span-2">
          <div className="glass-card rounded-2xl p-5 h-full">
            <span className="section-label text-[10px]">{lang === "tr" ? "AKTİF CHALLENGE" : "ACTIVE CHALLENGE"}</span>
            <p className="text-sm font-semibold text-white mt-2">🎯 Minimal Techno</p>
            <p className="text-[11px] mt-1" style={{ color: "#8B8FA8" }}>
              {lang === "tr" ? "3 gün kaldı" : "3 days left"}
            </p>
            <div className="w-full h-1 rounded-full mt-3" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="h-full rounded-full" style={{ width: "62%", background: "linear-gradient(90deg, #7C3AED, #34D399)" }} />
            </div>
          </div>
        </ScrollReveal>

        {/* EXP Progress */}
        <ScrollReveal delay={160} className="md:col-span-2">
          <div className="glass-card rounded-2xl p-5 h-full">
            <span className="section-label text-[10px]">EXP</span>
            <p className="text-2xl font-bold text-white mt-2 tabular-nums">{exp.toLocaleString()}</p>
            <p className="text-[11px] mt-1" style={{ color: "#8B8FA8" }}>
              {lang === "tr" ? `Level ${level.level + 1}'e ${level.maxExp - exp} EXP` : `${level.maxExp - exp} EXP to Level ${level.level + 1}`}
            </p>
            <div className="w-full h-1.5 rounded-full mt-3" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progress}%`, background: "linear-gradient(90deg, #7C3AED, #34D399)" }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Quick Stats */}
        <ScrollReveal delay={200} className="md:col-span-2">
          <div className="glass-card rounded-2xl p-5 h-full">
            <span className="section-label text-[10px]">{lang === "tr" ? "İSTATİSTİKLER" : "STATS"}</span>
            <div className="space-y-2.5 mt-3">
              {[
                { label: lang === "tr" ? "Toplam soru" : "Total questions", value: "47" },
                { label: lang === "tr" ? "Teknik tamamlandı" : "Techniques done", value: "12" },
                { label: lang === "tr" ? "Blueprint" : "Blueprints", value: "3" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between">
                  <span className="text-[11px]" style={{ color: "#8B8FA8" }}>{s.label}</span>
                  <span className="text-[13px] font-semibold tabular-nums" style={{ color: "#34D399" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Recent Archive — full width */}
        <ScrollReveal delay={240} className="md:col-span-6">
          <div className="glass-card rounded-2xl p-5">
            <span className="section-label text-[10px]">{lang === "tr" ? "SON SORULAR" : "RECENT QUESTIONS"}</span>
            <div className="space-y-3 mt-3">
              {ARCHIVE.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl transition-colors"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-white truncate">{item.q}</p>
                    <p className="text-[11px] mt-1 truncate" style={{ color: "#8B8FA8" }}>{item.a}</p>
                  </div>
                  <span className="text-[10px] flex-shrink-0" style={{ color: "#555" }}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
