import { useTranslation } from "@/hooks/useTranslation";
import { Heart, MessageCircle, Bookmark } from "lucide-react";

type PostType = "technique" | "project" | "question" | "tip" | "challenge";

interface Post {
  id: number;
  type: PostType;
  author: string;
  level: number;
  title: string;
  preview: string;
  likes: number;
  comments: number;
  time: string;
  badge?: string;
}

const BORDER_COLORS: Record<PostType, string> = {
  technique: "#34D399",
  project: "#00C8FF",
  question: "#34D399",
  tip: "#60A5FA",
  challenge: "transparent",
};

const TYPE_LABELS: Record<PostType, string> = {
  technique: "comm.typeTechnique",
  project: "comm.typeProject",
  question: "comm.typeQuestion",
  tip: "comm.typeTip",
  challenge: "comm.typeChallenge",
};

const TYPE_BG: Record<PostType, string> = {
  technique: "rgba(52,211,153,0.1)",
  project: "rgba(0,200,255,0.1)",
  question: "rgba(52,211,153,0.08)",
  tip: "rgba(96,165,250,0.1)",
  challenge: "rgba(0,200,255,0.15)",
};

const POSTS: Post[] = [
  {
    id: 1, type: "technique", author: "Kaan", level: 6, badge: "🟢",
    title: "Parallel compression trick for punchy drums",
    preview: "Send your drum bus to a parallel channel, crush it with a compressor (ratio 10:1), blend at -12dB...",
    likes: 34, comments: 8, time: "2h",
  },
  {
    id: 2, type: "project", author: "Maria", level: 8,
    title: "Dark techno WIP — looking for arrangement feedback",
    preview: "Working on a 130 BPM industrial techno track. The drop feels flat after the breakdown. Ideas?",
    likes: 21, comments: 15, time: "4h",
  },
  {
    id: 3, type: "question", author: "Leo", level: 3,
    title: "Why does my bass disappear in mono?",
    preview: "I have a wide bass in stereo but when I check mono it's almost gone. Using Serum...",
    likes: 12, comments: 6, time: "6h",
  },
  {
    id: 4, type: "tip", author: "Aya", level: 7, badge: "🔵",
    title: "Quick tip: Sidechain with volume automation instead of compressor",
    preview: "Draw a volume curve on your bass that ducks when the kick hits. More precise than a compressor...",
    likes: 48, comments: 3, time: "8h",
  },
  {
    id: 5, type: "challenge", author: "Prodly", level: 10,
    title: "🏆 Weekly Challenge: Make a track using only 3 samples",
    preview: "This week's constraint: pick 3 samples and build a full arrangement. No synths allowed.",
    likes: 67, comments: 22, time: "1d",
  },
];

export const CommunityFeed = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      {/* Premium posting note */}
      <div className="text-center py-3">
        <p className="text-[11px]" style={{ color: "#8B8FA8" }}>
          {t("comm.postNote")}
        </p>
      </div>

      {POSTS.map((post) => (
        <div
          key={post.id}
          className="glass-card-static p-5 transition-all duration-200 hover:border-[var(--border-accent)] group"
          style={{
            borderLeft: post.type === "challenge"
              ? "3px solid transparent"
              : `3px solid ${BORDER_COLORS[post.type]}`,
            ...(post.type === "challenge" ? {
              borderImage: "linear-gradient(to bottom, #00C8FF, #34D399) 1",
            } : {}),
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background: post.level >= 8 ? "linear-gradient(135deg, #00C8FF, #34D399)" : "rgba(0,200,255,0.25)" }}
              >
                {post.level}
              </div>
              <span className="text-sm font-medium text-white">{post.author}</span>
              <span className="text-[10px]" style={{ color: "#8B8FA8" }}>· {post.time}</span>
            </div>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-medium"
              style={{ background: TYPE_BG[post.type], color: BORDER_COLORS[post.type] === "transparent" ? "#00C8FF" : BORDER_COLORS[post.type] }}
            >
              {post.badge && `${post.badge} `}{t(TYPE_LABELS[post.type])}
            </span>
          </div>

          {/* Content */}
          <h4 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>
            {post.title}
          </h4>
          <p className="text-xs leading-relaxed" style={{ color: "#8B8FA8" }}>
            {post.preview}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-5 mt-3">
            <button className="flex items-center gap-1.5 text-[11px] transition-colors hover:text-[#34D399]" style={{ color: "#8B8FA8" }}>
              <Heart className="w-3.5 h-3.5" /> {post.likes}
            </button>
            <button className="flex items-center gap-1.5 text-[11px] transition-colors hover:text-[#00C8FF]" style={{ color: "#8B8FA8" }}>
              <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
            </button>
            <button className="flex items-center gap-1.5 text-[11px] transition-colors hover:text-white" style={{ color: "#8B8FA8" }}>
              <Bookmark className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
