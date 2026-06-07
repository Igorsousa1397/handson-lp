"use client";
import { useState } from "react";

const deps = [
  { initials: "A", color: "#5b21b6", empresa: "Sicredi", role: "QA Analyst", text: "Fala galera HandsOn! Passando pra agradecer a toda equipe pelo ensinamento e suporte pro meu PRIMEIRO SIM!! Quase 2 meses do melhor emprego da minha vida. Como é maravilhoso trabalhar em uma área que valoriza o funcionário e a família. Vocês fazem parte do emprego dos meus sonhos!!" },
  { initials: "M", color: "#0e4f6e", empresa: "Santander", role: "QA Consultant", text: "O Sostenes foi um pivô muito importante na minha vida. Comecei a trabalhar em consultoria para o Santander como QA. Minha qualidade de vida melhorou imensamente e posso acompanhar o crescimento dos meus filhos." },
  { initials: "C", color: "#065f46", empresa: "Tecnologia", role: "QA Engineer", text: "Após 1 mês e meio fui remanejada para uma área onde pude exercer o que estava sendo aplicado — Consultas API, Banco de dados, Java. Foi um tempo que me agregou muito conhecimento e crescimento profissional." },
  { initials: "R", color: "#7c2d12", empresa: "Consultoria", role: "QA Tester", text: "Recebi o retorno deles falando que passei no processo seletivo! Todo o suporte da equipe HandsOn, desde o primeiro contato até o pós-curso, sempre que precisei alguém estava disponível para responder." },
];

export default function Depoimentos() {
  const [active, setActive] = useState(0);
  return (
    <section id="resultados" style={{ padding: "5rem 0", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="tag tag-purple" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Transformações reais</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.01em", lineHeight: 1.05 }}>
              O que nossos alunos dizem
            </h2>
            <p style={{ color: "var(--text-3)", marginTop: "0.5rem", fontSize: 13 }}>mensagens reais — sem filtro</p>
          </div>

          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "2rem", marginBottom: "1.25rem", minHeight: 180, position: "relative" }}>
            <div style={{ position: "absolute", top: 20, left: 24, fontSize: 56, color: "var(--purple)", opacity: 0.12, fontFamily: "serif", lineHeight: 1 }}>"</div>
            <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", marginBottom: "1.25rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: deps[active].color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
                {deps[active].initials}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 14 }}>Aluno empregado</div>
                <div style={{ fontSize: 12, color: "var(--text-3)" }}>{deps[active].role} · {deps[active].empresa}</div>
              </div>
              <span style={{ fontSize: 12, color: "#fbbf24" }}>★★★★★</span>
            </div>
            <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.8, position: "relative", zIndex: 1 }}>{deps[active].text}</p>
          </div>

          <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
            {deps.map(({ initials, color, empresa }, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "7px 13px", borderRadius: 100, cursor: "none",
                border: `1px solid ${active === i ? "var(--purple)" : "var(--border)"}`,
                background: active === i ? "var(--purple-glow)" : "transparent",
                transition: "all 0.2s"
              }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>{initials}</div>
                <span style={{ fontSize: 12, color: active === i ? "var(--purple-light)" : "var(--text-3)" }}>{empresa}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
