"use client";
import { useEffect, useState } from "react";

// Digita `text` letra a letra mantendo o layout final reservado (letras não digitadas ficam invisíveis)
export default function Typewriter({ text, delay = 600, speed = 55, className, style }: {
  text: string; delay?: number; speed?: number; className?: string; style?: React.CSSProperties;
}) {
  const [n, setN] = useState(0);
  const [caret, setCaret] = useState(true);
  const doneTyping = n >= text.length;

  useEffect(() => {
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i++; setN(i);
      if (i < text.length) t = setTimeout(tick, speed + Math.random() * 40);
      else t = setTimeout(() => setCaret(false), 1800);
    };
    t = setTimeout(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(text.length); setCaret(false); return; }
      tick();
    }, delay);
    return () => clearTimeout(t);
  }, [text, delay, speed]);

  return (
    <span className={doneTyping ? className : undefined} style={style}>
      {text.slice(0, n)}
      {caret && <span className="type-caret" />}
      <span style={{ opacity: 0 }}>{text.slice(n)}</span>
    </span>
  );
}
