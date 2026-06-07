"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let cur = 0;
      const step = end / 50;
      const t = setInterval(() => {
        cur += step;
        if (cur >= end) { setVal(end); clearInterval(t); }
        else setVal(Math.floor(cur));
      }, 20);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
      {/* orbs */}
      <div className="orb animate-pulse-glow" style={{ width: 500, height: 500, background: "rgba(124,58,237,0.11)", top: -160, right: -80 }} />
      <div className="orb animate-pulse-glow" style={{ width: 350, height: 350, background: "rgba(192,38,211,0.07)", bottom: -80, left: -60, animationDelay: "2s" }} />
      {/* scan line */}
      <div style={{ position: "absolute", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.3),transparent)", animation: "scan 10s linear infinite", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{ marginBottom: "1.25rem", opacity: 0, animation: "fadeUp 0.6s ease 0.1s forwards" }}>
            <span className="tag tag-amber">
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--amber)", display: "inline-block" }} />
              Nova turma aberta — vagas limitadas
            </span>
          </div>

          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.01em", marginBottom: "1.25rem", opacity: 0, animation: "fadeUp 0.6s ease 0.2s forwards" }}>
            Torne-se um{" "}
            <span style={{ color: "var(--pink-light)" }} className="glow-pink">Testador de Software</span>
            <span style={{ color: "var(--text-2)", fontWeight: 600, fontSize: "0.72em", display: "block", marginTop: "0.05em" }}>em 6 meses.</span>
          </h1>

          <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "var(--text-2)", lineHeight: 1.7, maxWidth: 500, marginBottom: "0.625rem", opacity: 0, animation: "fadeUp 0.6s ease 0.35s forwards" }}>
            Domine as melhores práticas de QA e comece uma nova carreira ganhando de{" "}
            <strong style={{ color: "var(--text-1)" }}>R$4k a R$20k por mês</strong> — sem experiência prévia em TI.
          </p>
          <p style={{ fontSize: 16, color: "var(--purple-light)", fontFamily: "Syne, sans-serif", fontWeight: 600, marginBottom: "2rem", opacity: 0, animation: "fadeUp 0.6s ease 0.45s forwards" }}>
            Faria diferença no seu orçamento?
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3.5rem", opacity: 0, animation: "fadeUp 0.6s ease 0.55s forwards" }}>
            <button className="btn-primary" onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}>Tenho interesse! →</button>
            <button className="btn-outline" onClick={() => document.getElementById("modulos")?.scrollIntoView({ behavior: "smooth" })}>Ver como funciona</button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "0.75rem", opacity: 0, animation: "fadeUp 0.6s ease 0.7s forwards" }}>
            {[
              { n: 100, s: "+", l: "Alunos formados" },
              { n: 30, s: "+", l: "Transições de carreira" },
              { n: 6, s: " meses", l: "Do zero ao emprego" },
              { n: 20, s: "k/mês", l: "Potencial de ganho" },
            ].map(({ n, s, l }) => (
              <div key={l} style={{ padding: "1rem 1.125rem", border: "1px solid var(--border)", borderRadius: 12, background: "rgba(14,14,26,0.6)" }}>
                <div className="stat-num"><Counter end={n} suffix={s} /></div>
                <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
