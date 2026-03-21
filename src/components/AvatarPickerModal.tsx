import { useState, useRef } from "react";
import { X, Upload } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { useAvatar } from "@/hooks/useAvatar";
import { AVATAR_CATEGORIES, getAvatarById } from "@/components/AvatarPresets";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AvatarPickerModal = ({ open, onClose }: Props) => {
  const { lang } = useLang();
  const { avatarId, setAvatarId, setPhoto } = useAvatar();
  const [tab, setTab] = useState<"avatars" | "upload">("avatars");
  const [selectedId, setSelectedId] = useState<string | null>(avatarId);
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const tr = lang === "tr";

  if (!open) return null;

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert(tr ? "Maksimum 5MB" : "Max 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSaveAvatar = () => {
    if (selectedId) {
      setAvatarId(selectedId);
      onClose();
    }
  };

  const handleSavePhoto = () => {
    if (preview) {
      setPhoto(preview);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[600px] rounded-2xl overflow-hidden"
        style={{
          background: "rgba(15,15,25,0.95)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 80px rgba(0,0,0,0.6)",
          animation: "fadeInUp 0.3s cubic-bezier(0.16,1,0.3,1) both",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-[16px] font-bold text-white" style={{ fontFamily: "'Space Grotesk'" }}>
            {tr ? "Avatar Seç" : "Choose Avatar"}
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-lg active:scale-95" style={{ background: "rgba(255,255,255,0.05)" }}>
            <X size={16} className="text-[#8B8FA8]" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 px-5 pt-3">
          {(["avatars", "upload"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-4 py-2 rounded-full text-[12px] font-semibold transition-all active:scale-95"
              style={{
                background: tab === t ? "rgba(124,58,237,0.2)" : "transparent",
                color: tab === t ? "#A78BFA" : "#6B7280",
                border: tab === t ? "1px solid rgba(124,58,237,0.3)" : "1px solid transparent",
              }}
            >
              {t === "avatars" ? (tr ? "Avatarlar" : "Avatars") : (tr ? "Fotoğraf Yükle" : "Upload Photo")}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="px-5 py-4 max-h-[420px] overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(124,58,237,0.4) transparent" }}>
          {tab === "avatars" ? (
            <div className="space-y-4">
              {AVATAR_CATEGORIES.map((cat) => (
                <div key={cat.label.en}>
                  <span className="text-[10px] font-semibold uppercase" style={{ color: "#34D399", letterSpacing: "0.15em" }}>
                    {tr ? cat.label.tr : cat.label.en}
                  </span>
                  <div className="grid grid-cols-6 gap-2.5 mt-2">
                    {cat.avatars.map((av) => (
                      <button
                        key={av.id}
                        onClick={() => setSelectedId(av.id)}
                        className="relative rounded-full overflow-hidden transition-all active:scale-90"
                        style={{
                          width: 72,
                          height: 72,
                          border: selectedId === av.id ? "3px solid #7C3AED" : "2px solid rgba(255,255,255,0.08)",
                          boxShadow: selectedId === av.id ? "0 0 16px rgba(124,58,237,0.4)" : "none",
                        }}
                      >
                        {av.render}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-6">
              {preview ? (
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden"
                    style={{ border: "3px solid rgba(124,58,237,0.4)" }}
                  >
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <button
                    onClick={() => { setPreview(null); if (fileRef.current) fileRef.current.value = ""; }}
                    className="text-[12px] font-medium"
                    style={{ color: "#8B8FA8" }}
                  >
                    {tr ? "Değiştir" : "Change"}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => fileRef.current?.click()}
                  className="w-full py-12 rounded-xl flex flex-col items-center gap-3 transition-all active:scale-[0.98]"
                  style={{
                    border: "2px dashed rgba(124,58,237,0.3)",
                    background: "rgba(124,58,237,0.04)",
                  }}
                >
                  <Upload size={28} style={{ color: "#7C3AED" }} />
                  <span className="text-[13px] font-medium" style={{ color: "#8B8FA8" }}>
                    {tr ? "Fotoğrafını sürükle veya tıkla" : "Drag your photo or click"}
                  </span>
                  <span className="text-[11px]" style={{ color: "#555" }}>JPG, PNG, WebP — max 5MB</span>
                </button>
              )}
              <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFile} className="hidden" />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-5 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-[12px] font-medium transition-all active:scale-95"
            style={{ color: "#8B8FA8" }}
          >
            {tr ? "İptal" : "Cancel"}
          </button>
          <button
            onClick={tab === "avatars" ? handleSaveAvatar : handleSavePhoto}
            disabled={tab === "avatars" ? !selectedId : !preview}
            className="px-5 py-2 rounded-full text-[12px] font-semibold text-white transition-all active:scale-95 disabled:opacity-30"
            style={{ background: "#7C3AED" }}
          >
            {tr ? "Kaydet" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};
