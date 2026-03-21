import { useState, useEffect } from "react";

export const TypingTagline = ({ text }: { text: string }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 40);
    return () => clearInterval(id);
  }, [text]);

  return (
    <p
      className="text-center mb-10"
      style={{ fontFamily: "'Inter'", fontSize: 17, color: "#8B8FA8", lineHeight: 1.5, minHeight: 26 }}
    >
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: 2,
          height: "1em",
          marginLeft: 2,
          verticalAlign: "text-bottom",
          background: "#8B8FA8",
          animation: done ? "blink 1s step-end infinite" : "none",
          opacity: done ? undefined : 1,
        }}
      />
    </p>
  );
};
