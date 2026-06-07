"use client";
import { useState } from "react";

const plans = [
  {
    key: "prata", icon: "🥈", name: "Prata", color: "#94a3b8",
    desc: "Módulo I — Teoria e Testes Manuais",
    price: { parcela: "247,50", vista: "R$2.970,00" },
    items: ["Fundamentos da Qualidade de Software","Estratégias e tipos de teste","Metodologias Ágeis (SDLC / STLC)","Testes manuais na prática","Mentalidade do QA","Plataforma com aulas gravadas"],
    missing: ["Automação de testes","Aulas ao vivo (Live)","Mentoria 1:1 com Sostenes","Comunidade + Bônus"],
    cta: "Escolher Prata",
  },
  {
    key: "ouro", icon: "🏆", name: "Ouro", color: "#fbbf24",
    desc: "Módulo II — Testes Manuais + Automação + Live",
    price: { parcela: "289,16", vista: "R$3.470,00" },
    badge: "⭐ Mais popular",
    items: ["Tudo do Prata","Lógica de Programação + Java","Automação de testes (Selenium)","Testes de API (Postman)","CI/CD + Acessibilidade Mobile","Aulas ao vivo (Live)","Preparação para entrevistas","LinkedIn e currículo"],
    missing: ["Mentoria 1:1 com Sostenes","Comunidade + Bônus"],
    cta: "Garantir Ouro",
    featured: true,
  },
  {
    key: "diamante", icon: "💎", name: "Diamante", color: "#67e8f9",
    desc: "Módulo III — Completo + Live + Comunidade + Bônus + 1:1",
    price: { parcela: "330,83", vista: "R$3.970,00" },
    badge: "💎 Melhor resultado",
    items: ["Tudo do Ouro","Mentoria 1:1 com o Sostenes","Simulação de entrevista real com feedback","Comunidade exclusiva","Indicação direta de vagas","IA aplicada a testes","Todos os bônus inclusos","Atualização constante da plataforma"],
    missing: [],
    cta: "Escolher Diamante",
    dia: true,
  },
];

export default function Pricing() {
  const [mode, setMode] = useState<"parcela" | "vista">("parcela");

  return (
    <section id="planos" style={{ padding: "5rem 0", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="tag tag-amber" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Investimento</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.02em" }}>Escolha seu plano</h2>
          <p style={{ color: "var(--text-2)", marginTop: "0.5rem", fontSize: 14 }}>Todos com parcelamento em até 12x sem juros no cartão</p>

          <div style={{ display: "inline-flex", gap: 3, marginTop: "1.25rem", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 100, padding: 3 }}>
            {(["parcela", "vista"] as const).map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                padding: "7px 18px", borderRadius: 100, border: "none", cursor: "none",
                background: mode === m ? "var(--purple)" : "transparent",
                color: mode === m ? "#fff" : "var(--text-2)",
                fontFamily: "Syne, sans-serif", fontWeight: 500, fontSize: 12,
                transition: "all 0.2s"
              }}>
                {m === "parcela" ? "12x sem juros" : "À vista"}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {plans.map(({ key, icon, name, color, desc, price, badge, items, missing, cta, featured, dia }) => (
            <div key={key} className={`price-card${featured ? " featured" : ""}${dia ? " dia" : ""}`}>
              {badge && (
                <div style={{ fontSize: 11, padding: "3px 11px", borderRadius: 100, background: `${color}14`, color, border: `1px solid ${color}28`, display: "inline-block", marginBottom: "0.75rem" }}>{badge}</div>
              )}
              <div style={{ fontSize: 28, marginBottom: "0.375rem" }}>{icon}</div>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: 20, fontWeight: 800, color, marginBottom: 3 }}>{name}</div>
              <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: "1.125rem", lineHeight: 1.5 }}>{desc}</div>

              <div style={{ marginBottom: "1.125rem" }}>
                <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 1 }}>
                  {mode === "parcela" ? "12x de" : "À vista por"}
                </div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: 32, fontWeight: 800, color: "var(--text-1)", lineHeight: 1 }}>
                  {mode === "parcela" ? <>R$<span style={{ fontSize: 20 }}>{price.parcela}</span></> : price.vista}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 3 }}>
                  {mode === "parcela" ? `ou ${price.vista} à vista` : `Equivale a 12x de R$${price.parcela}`}
                </div>
              </div>

              <div style={{ height: 1, background: "var(--border)", marginBottom: "1.125rem" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                {items.map(item => (
                  <div key={item} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
                    <span style={{ color, flexShrink: 0, marginTop: 1, fontSize: 13 }}>✓</span>
                    <span style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
                {missing.map(item => (
                  <div key={item} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--border-2)", flexShrink: 0, marginTop: 1, fontSize: 13 }}>✗</span>
                    <span style={{ fontSize: 12, color: "var(--text-3)", lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => window.open("https://wa.me/5511963319196", "_blank")} style={{
                marginTop: "1.5rem", width: "100%", padding: "12px",
                borderRadius: 100, cursor: "none",
                border: featured ? "none" : `1px solid ${color}40`,
                background: featured ? "var(--pink)" : "transparent",
                color: featured ? "#fff" : color,
                fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 13,
                transition: "all 0.2s",
                boxShadow: featured ? "0 0 24px rgba(192,38,211,0.28)" : "none"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                {cta} →
              </button>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "1.75rem", flexWrap: "wrap", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          {[["💳","12x sem juros"],["⚡","Pix à vista"],["🔖","Boleto"],["🔒","Pagamento seguro"],["↩️","7 dias de garantia"]].map(([icon, label]) => (
            <div key={label as string} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--text-3)" }}>
              <span>{icon}</span>{label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
