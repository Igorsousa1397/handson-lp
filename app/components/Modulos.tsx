"use client";
import { useState } from "react";
import { ArrowRight, Gift, Diamond, Gem } from "lucide-react";

const modulos = [
  {
    badge: "Módulo I — Prata", color: "#a78bfa",
    title: "Teoria e Testes Manuais",
    items: ["Introdução ao Teste de Software","Princípios Fundamentais de Teste","Estratégias e Tipos de Teste","Metodologias Ágeis (SDLC / STLC)","Ciclo de Vida de Testes de Software","Mentalidade do QA","Testes manuais na prática"],
  },
  {
    badge: "Módulo II — Ouro", color: "#fbbf24",
    title: "Automação + Live",
    items: ["Tudo do Módulo I","Lógica de Programação","Linguagem Java + POO","Automação de Testes (Selenium, Cucumber)","Testes de API com Postman","CI/CD + Acessibilidade Mobile","Ferramentas de gestão ágil (Jira)"],
  },
  {
    badge: "Módulo III — Diamante", color: "#67e8f9",
    title: "Carreira + Mentoria 1:1",
    items: ["Tudo do Módulo II","Preparação para Entrevistas","Simulação de Entrevistas Técnicas","Edição de LinkedIn e Currículo","IA aplicada a testes (ChatGPT / Gemini)","Mentoria 1:1 com o Sostenes","Comunidade exclusiva + Bônus"],
  },
];

const bonus = ["Plataforma com aulas gravadas","Atualização constante dos cursos","Preparação personalizada para o mercado","Indicação de vagas em empresas parceiras","Suporte para entrevistas técnicas","IA aplicada a testes de software"];
const tools = ["Java","Selenium","Cucumber","Git","Postman","Jira","Eclipse","ChatGPT","Gemini","ISTQB"];

export default function Modulos() {
  const [active, setActive] = useState(0);
  const mod = modulos[active];

  return (
    <section id="modulos" style={{ padding: "5rem 0", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="tag tag-purple" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Conteúdo programático</span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.01em", lineHeight: 1.05 }}>
            3 módulos do zero<br />
            <span style={{ color: "var(--purple-light)" }}>ao avançado</span>
          </h2>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {modulos.map(({ badge, color }, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: "7px 18px", borderRadius: 100, cursor: "none",
              border: `1px solid ${active === i ? color : "var(--border)"}`,
              background: active === i ? `${color}14` : "transparent",
              color: active === i ? color : "var(--text-3)",
              fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 12,
              transition: "all 0.2s"
            }}>{badge}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
          {/* Module */}
          <div style={{ background: "var(--card)", border: `1px solid ${mod.color}35`, borderRadius: 18, padding: "1.75rem", transition: "all 0.3s" }}>
            <div style={{ fontSize: 10, color: mod.color, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 7 }}>{mod.badge}</div>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 800, marginBottom: "1.25rem", color: mod.color }}>{mod.title}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {mod.items.map((item) => (
                <div key={item} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: `${mod.color}18`, border: `1px solid ${mod.color}35`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: mod.color }} />
                  </div>
                  <span style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus + Tools */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            <div style={{ background: "var(--card)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 18, padding: "1.5rem" }}>
              {/* Header bônus com badge Diamante */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <Gift size={18} color="#fbbf24" strokeWidth={1.75} />
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, color: "#fbbf24", fontSize: 14 }}>Bônus inclusos</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(103,232,249,0.08)", border: "1px solid rgba(103,232,249,0.25)", borderRadius: 100, padding: "3px 10px" }}>
                  <Gem size={11} color="#67e8f9" strokeWidth={1.75} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#67e8f9", letterSpacing: "0.05em" }}>EXCLUSIVO DIAMANTE</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: "1rem" }}>
                {bonus.map((b) => (
                  <div key={b} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                    <Diamond size={11} color="#fbbf24" fill="#fbbf24" strokeWidth={0} style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
              {/* CTA upgrade */}
              <button onClick={() => window.open("https://pay.kiwify.com.br/zozMu7q", "_blank")} style={{
                width: "100%", padding: "11px", borderRadius: 100, border: "1px solid rgba(103,232,249,0.3)",
                background: "rgba(103,232,249,0.06)", color: "#67e8f9",
                fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(103,232,249,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(103,232,249,0.06)"; }}>
                <Gem size={13} strokeWidth={1.75} /> Quero o Diamante com bônus
              </button>
            </div>
            <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: "1.25rem" }}>
              <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 9, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase" }}>Ferramentas que você vai dominar</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {tools.map(t => (
                  <span key={t} style={{ padding: "3px 10px", borderRadius: 6, background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)", fontSize: 12, color: "var(--purple-light)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <button className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }} onClick={() => window.open("https://pay.kiwify.com.br/oS1SdyF", "_blank")}>
            Quero aprender tudo isso <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
