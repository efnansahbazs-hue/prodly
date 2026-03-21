interface MockResponse {
  text: string;
  source: string;
  sourceColor: string;
  sourceEmoji: string;
}

interface Props {
  response: MockResponse;
  signupCta: string;
}

export const DemoResponse = ({ response, signupCta }: Props) => (
  <div className="animate-fade-in">
    <div
      className="rounded-xl p-4 mb-3"
      style={{
        background: "rgba(52,211,153,0.04)",
        borderLeft: "3px solid #34D399",
      }}
    >
      <p className="text-sm leading-relaxed text-white mb-2">{response.text}</p>
      <span className="text-[11px] font-medium" style={{ color: response.sourceColor }}>
        {response.sourceEmoji} {response.source}
      </span>
    </div>
    <p className="text-center">
      <a href="#" className="text-xs font-semibold transition-opacity hover:opacity-80" style={{ color: "#34D399" }}>
        {signupCta}
      </a>
    </p>
  </div>
);
