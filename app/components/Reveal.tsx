"use client";
import { useEffect, useRef, useState } from "react";

// Faz o conteúdo aparecer (fade + deslize) quando entra na tela. `delay` em ms para escalonar cards.
export default function Reveal({ children, delay = 0, className, style, as: Tag = "div" }: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    // @ts-expect-error — ref genérico para a tag escolhida
    <Tag ref={ref} className={`reveal${inView ? " in" : ""}${className ? ` ${className}` : ""}`} style={{ ...style, transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
