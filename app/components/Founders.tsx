"use client";
import { useEffect, useState } from "react";

const stats = [
  { n: "+200", l: "Alunos formados" },
  { n: "+50",  l: "Transições de carreira" },
  { n: "6 meses", l: "Do zero ao emprego" },
  { n: "R$4–20k", l: "Faixa salarial" },
];

export default function Founders() {
  const steps = [
    { color: "var(--purple)", label: "Agosto 2023 — O começo", text: "Sostenes e Daniel fundaram o Instituto Hands On com um ideal claro: transformar vidas por meio da tecnologia. O mercado de QA crescia, mas ninguém ensinava do jeito certo — prático, direto e acessível." },
    { color: "var(--pink)", label: "A metodologia", text: "Criaram o método hands on — teoria e prática desde o primeiro dia. Sem enrolação, sem pré-requisitos. Qualquer pessoa pode entrar do zero e sair empregada." },
    { color: "var(--amber)", label: "A missão", text: "Transformar vidas por meio da educação tecnológica, formando profissionais qualificados em testes de software e preparando-os para os desafios reais do mercado de tecnologia." },
    { color: "var(--cyan)", label: "Hoje — 2025", text: "Em apenas 2 anos, mais de 200 profissionais formados e +50 transições de carreira concluídas, com alunos empregados em empresas como Sicredi, Santander e outras referências do setor." },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % stats.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="founders" style={{ padding: "5rem 0", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span className="tag tag-cyan" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Quem está por trás</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.01em", lineHeight: 1.05 }}>
              Sostenes e Daniel —<br />
              <span style={{ color: "var(--cyan-light)" }}>a história real do Instituto</span>
            </h2>

            {/* Fotos dos founders */}
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem", justifyContent: "center", alignItems: "flex-end" }}>
              {[
                { src: "/sostenes.png", name: "Sostenes", role: "Co-fundador & Mentor" },
                { src: "/daniel.png",   name: "Daniel",   role: "Co-fundador & Instrutor" },
              ].map(({ src, name, role }) => (
                <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, flex: 1, maxWidth: 220 }}>
                  <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", background: "linear-gradient(135deg, rgba(6,182,212,0.08), var(--card))" }}>
                    <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 800, color: "var(--text-1)" }}>{name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-3)" }}>{role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map(({ color, label, text }, i) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem", paddingBottom: i < steps.length - 1 ? "2rem" : 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", border: `2px solid ${color}`, background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 3 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
                  </div>
                  {i < steps.length - 1 && <div style={{ width: 1, flex: 1, background: "var(--border)", marginTop: 6 }} />}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color, textTransform: "uppercase", marginBottom: "0.375rem" }}>{label}</div>
                  <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats carrossel */}
          <div style={{ marginTop: "2.5rem" }}>
            {/* Desktop — lado a lado */}
            <div className="stats-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
              {stats.map(({ n, l }) => (
                <div key={l} style={{ padding: "1.25rem 1rem", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, color: "var(--text-1)", marginBottom: 4 }}>{n}</div>
                  <div style={{ fontSize: 12, color: "var(--text-3)", lineHeight: 1.4 }}>{l}</div>
                </div>
              ))}
            </div>

            {/* Mobile — carrossel */}
            <div className="stats-mobile">
              <div style={{
                padding: "1.75rem 1.5rem", background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: 16, textAlign: "center", transition: "all 0.4s ease",
              }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 52, fontWeight: 800, color: "var(--text-1)", lineHeight: 1, marginBottom: 6 }}>
                  {stats[active].n}
                </div>
                <div style={{ fontSize: 14, color: "var(--text-3)" }}>{stats[active].l}</div>
              </div>
              {/* Dots */}
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: "1rem" }}>
                {stats.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} style={{
                    width: i === active ? 20 : 6, height: 6, borderRadius: 100,
                    background: i === active ? "var(--purple)" : "var(--border)",
                    border: "none", cursor: "pointer", padding: 0,
                    transition: "all 0.3s ease",
                  }} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
