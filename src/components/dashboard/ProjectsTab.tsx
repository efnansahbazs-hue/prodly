import { useState } from "react";
import { Plus, MoreHorizontal, X, Check, Pause, Play, Trash2 } from "lucide-react";
import { useProjects, type Project } from "@/hooks/useProjects";
import { useLang } from "@/hooks/useLang";
import { ScrollReveal } from "@/components/ScrollReveal";

const GENRE_COLORS: Record<string, string> = {
  Techno: "#7C3AED", House: "#34D399", Trap: "#F59E0B", "Hip-Hop": "#3B82F6",
  "Drum & Bass": "#8B5CF6", Electronic: "#6366F1", Dubstep: "#A78BFA",
  Ambient: "#6EE7B7", Trance: "#818CF8", Pop: "#F472B6", "R&B": "#FB923C",
  Jazz: "#FBBF24", Indie: "#A3E635", World: "#2DD4BF", Garage: "#C084FC",
  "Future Bass": "#22D3EE",
};

const GENRES = Object.keys(GENRE_COLORS);
const KEYS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const MOODS = ["Dark", "Euphoric", "Melancholy", "Angry", "Peaceful", "Chaotic", "Nostalgic", "Hopeful"];

function timeAgo(dateStr: string, tr: boolean): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return tr ? `${mins} dk önce` : `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return tr ? `${hrs} saat önce` : `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return tr ? `${days} gün önce` : `${days}d ago`;
}

export const ProjectsTab = () => {
  const { projects, add, update, remove } = useProjects();
  const { lang } = useLang();
  const tr = lang === "tr";

  const [showNew, setShowNew] = useState(false);
  const [newStep, setNewStep] = useState(1);
  const [newGenre, setNewGenre] = useState("");
  const [newBpm, setNewBpm] = useState(128);
  const [newKey, setNewKey] = useState("A");
  const [newMood, setNewMood] = useState("Dark");
  const [newName, setNewName] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [menuId, setMenuId] = useState<string | null>(null);
  const [editingNotes, setEditingNotes] = useState<string | null>(null);

  const resetNew = () => {
    setShowNew(false);
    setNewStep(1);
    setNewGenre("");
    setNewBpm(128);
    setNewKey("A");
    setNewMood("Dark");
    setNewName("");
  };

  const handleCreate = () => {
    const name = newName.trim() || `${newMood} ${newGenre} #${projects.length + 1}`;
    add({ name, genre: newGenre, bpm: newBpm, key: newKey + " Minor", mood: newMood });
    resetNew();
  };

  const statusBorder = (s: Project["status"]) =>
    s === "active" ? "#7C3AED" : s === "completed" ? "#34D399" : "rgba(255,255,255,0.15)";

  if (projects.length === 0 && !showNew) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        {/* CSS circles illustration */}
        <div className="relative w-32 h-32 mb-8">
          {[64, 48, 32, 18].map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: s * 2, height: s * 2,
                top: `calc(50% - ${s}px)`, left: `calc(50% - ${s}px)`,
                border: `1px solid rgba(${i % 2 === 0 ? "124,58,237" : "52,211,153"}, ${0.15 + i * 0.05})`,
              }}
            />
          ))}
        </div>
        <p className="text-[15px] font-semibold text-white mb-2">{tr ? "Henüz proje yok." : "No projects yet."}</p>
        <p className="text-[13px] text-center max-w-xs mb-6" style={{ color: "#8B8FA8" }}>
          {tr ? "Bir proje başlat ve Prodly süreci takip etsin." : "Start a project and let Prodly track your progress."}
        </p>
        <button
          onClick={() => setShowNew(true)}
          className="px-5 py-2.5 rounded-full text-[13px] font-semibold text-white animate-move-border transition-all active:scale-[0.96]"
          style={{
            background: "linear-gradient(90deg, #7C3AED, #34D399, #7C3AED)",
            backgroundSize: "200% 100%",
          }}
        >
          {tr ? "Yeni Proje Başlat →" : "Start New Project →"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 min-w-0 space-y-5">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
          {tr ? "Projeler" : "Projects"}
        </h2>
        <button
          onClick={() => setShowNew(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-all active:scale-95"
          style={{ color: "#34D399", border: "1px solid rgba(52,211,153,0.4)", background: "transparent" }}
        >
          <Plus size={14} />
          {tr ? "Yeni Proje" : "New Project"}
        </button>
      </div>

      {/* New project modal */}
      {showNew && (
        <div
          className="rounded-2xl p-5 space-y-4"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            animation: "contextCardIn 0.3s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold text-white">
              {newStep === 1 ? (tr ? "Tür seç" : "Pick genre") : newStep === 2 ? (tr ? "BPM + Key" : "BPM + Key") : (tr ? "Proje adı" : "Project name")}
            </p>
            <button onClick={resetNew} className="p-1 rounded-lg active:scale-90" style={{ background: "rgba(255,255,255,0.05)" }}>
              <X size={14} className="text-[#8B8FA8]" />
            </button>
          </div>

          {newStep === 1 && (
            <div className="flex flex-wrap gap-2">
              {GENRES.map((g) => (
                <button
                  key={g}
                  onClick={() => { setNewGenre(g); setNewStep(2); }}
                  className="px-3 py-1.5 rounded-full text-[11px] font-medium transition-all active:scale-95"
                  style={{
                    background: newGenre === g ? "rgba(124,58,237,0.18)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${newGenre === g ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.1)"}`,
                    color: newGenre === g ? "#A78BFA" : "#8B8FA8",
                  }}
                >
                  {g}
                </button>
              ))}
            </div>
          )}

          {newStep === 2 && (
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider block mb-1" style={{ color: "#6B7280" }}>BPM</label>
                  <input
                    type="number"
                    value={newBpm}
                    onChange={(e) => setNewBpm(Number(e.target.value) || 120)}
                    className="w-20 bg-transparent text-white text-[14px] font-semibold px-3 py-2 rounded-xl text-center"
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider block mb-1" style={{ color: "#6B7280" }}>KEY</label>
                  <div className="flex gap-1 flex-wrap">
                    {KEYS.map((k) => (
                      <button
                        key={k}
                        onClick={() => setNewKey(k)}
                        className="w-8 h-8 rounded-lg text-[11px] font-medium transition-all active:scale-95"
                        style={{
                          background: newKey === k ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${newKey === k ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.06)"}`,
                          color: newKey === k ? "#A78BFA" : "#8B8FA8",
                        }}
                      >
                        {k}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider block mb-1" style={{ color: "#6B7280" }}>MOOD</label>
                <div className="flex flex-wrap gap-1.5">
                  {MOODS.map((m) => (
                    <button
                      key={m}
                      onClick={() => setNewMood(m)}
                      className="px-3 py-1.5 rounded-full text-[11px] font-medium transition-all active:scale-95"
                      style={{
                        background: newMood === m ? "rgba(52,211,153,0.12)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${newMood === m ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.06)"}`,
                        color: newMood === m ? "#34D399" : "#8B8FA8",
                      }}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setNewStep(3)}
                className="px-4 py-2 rounded-full text-[12px] font-semibold text-white transition-all active:scale-95"
                style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
              >
                {tr ? "Devam →" : "Continue →"}
              </button>
            </div>
          )}

          {newStep === 3 && (
            <div className="space-y-3">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder={`${newMood} ${newGenre} #${projects.length + 1}`}
                className="w-full bg-transparent text-white text-[14px] px-4 py-3 rounded-xl placeholder:text-[#555] focus:outline-none"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <button
                onClick={handleCreate}
                className="px-5 py-2.5 rounded-full text-[13px] font-semibold text-white transition-all active:scale-95"
                style={{ background: "linear-gradient(135deg, #7C3AED, #34D399)" }}
              >
                {tr ? "Oluştur" : "Create"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Project grid */}
      <div className={expandedId ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        {projects.map((p) => {
          const isExpanded = expandedId === p.id;
          const genreColor = GENRE_COLORS[p.genre] || "#7C3AED";

          if (expandedId && !isExpanded) {
            return (
              <div
                key={p.id}
                className="rounded-2xl p-4 flex items-center gap-3 cursor-pointer transition-all"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  opacity: 0.5,
                }}
                onClick={() => setExpandedId(p.id)}
              >
                <div className="w-1 h-8 rounded-full" style={{ background: statusBorder(p.status) }} />
                <span className="text-[12px] text-white font-medium truncate">{p.name}</span>
              </div>
            );
          }

          return (
            <div
              key={p.id}
              className="rounded-2xl overflow-hidden transition-all"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${isExpanded ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.08)"}`,
                borderLeft: `3px solid ${statusBorder(p.status)}`,
                boxShadow: p.status === "active" ? "0 0 20px rgba(124,58,237,0.08)" : "none",
                opacity: p.status === "paused" ? 0.7 : 1,
                animation: "contextCardIn 0.3s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              <div className="p-5">
                {/* Header row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${genreColor}20`, color: genreColor, border: `1px solid ${genreColor}40` }}
                    >
                      {p.genre}
                    </span>
                    {p.status === "completed" && <Check size={14} style={{ color: "#34D399" }} />}
                    {p.status === "paused" && <Pause size={12} style={{ color: "#6B7280" }} />}
                  </div>
                  <div className="relative">
                    <button
                      onClick={(e) => { e.stopPropagation(); setMenuId(menuId === p.id ? null : p.id); }}
                      className="p-1 rounded-lg active:scale-90"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <MoreHorizontal size={14} className="text-[#6B7280]" />
                    </button>
                    {menuId === p.id && (
                      <div
                        className="absolute right-0 top-8 z-20 rounded-xl py-1 min-w-[120px]"
                        style={{ background: "rgba(15,15,25,0.95)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}
                      >
                        {[
                          { label: tr ? "Aç" : "Open", action: () => { setExpandedId(p.id); setMenuId(null); } },
                          { label: tr ? "Duraklat" : "Pause", action: () => { update(p.id, { status: p.status === "paused" ? "active" : "paused" }); setMenuId(null); } },
                          { label: tr ? "Tamamla" : "Complete", action: () => { update(p.id, { status: "completed", progress: 100 }); setMenuId(null); } },
                          { label: tr ? "Sil" : "Delete", action: () => { remove(p.id); setMenuId(null); }, color: "#EF4444" },
                        ].map((item) => (
                          <button
                            key={item.label}
                            onClick={item.action}
                            className="w-full text-left px-4 py-2 text-[12px] transition-colors hover:bg-white/5"
                            style={{ color: item.color || "#C4C7D4" }}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Name */}
                <p className="text-[15px] font-semibold text-white mb-1 cursor-pointer" onClick={() => !isExpanded && setExpandedId(p.id)}>
                  {p.name}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-[11px] mb-3" style={{ color: "#8B8FA8" }}>
                  <span className="tabular-nums">{p.bpm} BPM</span>
                  <span>{p.key}</span>
                  <span style={{ color: "#6EE7B7" }}>{p.mood}</span>
                </div>

                {/* Progress */}
                <div className="w-full h-1 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${p.progress}%`, background: p.progress >= 100 ? "#34D399" : "linear-gradient(90deg, #7C3AED, #34D399)" }} />
                </div>

                <p className="text-[10px]" style={{ color: "#555" }}>
                  {tr ? "Son aktivite:" : "Last activity:"} {timeAgo(p.updatedAt, tr)}
                </p>
              </div>

              {/* Expanded detail */}
              {isExpanded && (
                <div
                  className="px-5 pb-5 space-y-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)", animation: "contextCardIn 0.3s ease both" }}
                >
                  <div className="pt-4">
                    <label className="text-[10px] uppercase tracking-wider block mb-2" style={{ color: "#6B7280" }}>
                      {tr ? "NOTLAR" : "NOTES"}
                    </label>
                    <textarea
                      value={p.notes}
                      onChange={(e) => update(p.id, { notes: e.target.value })}
                      placeholder={tr ? "Proje notlarını yaz..." : "Write project notes..."}
                      rows={4}
                      className="w-full bg-transparent text-[13px] text-white/80 px-4 py-3 rounded-xl placeholder:text-[#444] focus:outline-none resize-none"
                      style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => update(p.id, { progress: Math.min(p.progress + 20, 100) })}
                      className="px-3 py-1.5 rounded-full text-[11px] font-medium transition-all active:scale-95"
                      style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", color: "#34D399" }}
                    >
                      +20% {tr ? "ilerleme" : "progress"}
                    </button>
                    <button
                      onClick={() => setExpandedId(null)}
                      className="px-3 py-1.5 rounded-full text-[11px] font-medium transition-all active:scale-95"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#8B8FA8" }}
                    >
                      {tr ? "Kapat" : "Close"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
