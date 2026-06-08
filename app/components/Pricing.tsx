"use client";
import { useState } from "react";
import { Shield, Zap, Star, Check, X, CreditCard, Banknote, Lock, RotateCcw, Award, Gem, ArrowRight } from "lucide-react";

const plans = [
  {
    key: "prata",
    Icon: Shield,
    name: "Prata",
    color: "#94a3b8",
    desc: "Módulo I — Teoria e Testes Manuais",
    price: { parcela: "247,50", vista: "R$2.970,00" },
    items: ["Fundamentos da Qualidade de Software","Estratégias e tipos de teste","Metodologias Ágeis (SDLC / STLC)","Testes manuais na prática","Mentalidade do QA","Plataforma com aulas gravadas"],
    missing: ["Automação de testes","Aulas ao vivo (Live)","Mentoria 1:1 com Sostenes","Comunidade + Bônus"],
    cta: "Escolher Prata",
    link: "https://kiwify.com.br/prata", // SUBSTITUIR
  },
  {
    key: "ouro",
    Icon: Award,
    name: "Ouro",
    color: "#fbbf24",
    desc: "Módulo II — Testes Manuais + Automação + Live",
    price: { parcela: "289,16", vista: "R$3.470,00" },
    items: ["Tudo do Prata","Lógica de Programação + Java","Automação de testes (Selenium)","Testes de API (Postman)","CI/CD + Acessibilidade Mobile","Aulas ao vivo (Live)","Preparação para entrevistas","LinkedIn e currículo"],
    missing: ["Mentoria 1:1 com Sostenes","Comunidade + Bônus"],
    cta: "Garantir Ouro",
    link: "https://kiwify.com.br/ouro", // SUBSTITUIR
    featured: true,
  },
  {
    key: "diamante",
    Icon: Gem,
    name: "Diamante",
    color: "#67e8f9",
    desc: "Módulo III — Completo + Live + Comunidade + Bônus + 1:1",
    price: { parcela: "330,83", vista: "R$3.970,00" },
    items: ["Tudo do Ouro","Mentoria 1:1 com o Sostenes","Simulação de entrevista real com feedback","Comunidade exclusiva","Indicação direta de vagas","IA aplicada a testes","Todos os bônus inclusos","Atualização constante da plataforma"],
    missing: [],
    cta: "Escolher Diamante",
    link: "https://kiwify.com.br/diamante", // SUBSTITUIR
    dia: true,
  },
];

const guarantees = [
  { Icon: CreditCard, label: "12x sem juros" },
  { Icon: Zap,        label: "Pix à vista" },
  { Icon: Banknote,   label: "Boleto" },
  { Icon: Lock,       label: "Pagamento seguro" },
  { Icon: RotateCcw,  label: "7 dias de garantia" },
];

export default function Pricing() {
  const [mode, setMode] = useState<"parcela" | "vista">("parcela");

  return (
    <section id="planos" style={{ padding: "5rem 0", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="tag tag-amber" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Investimento</span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.01em", lineHeight: 1.05 }}>Escolha seu plano</h2>
          <p style={{ color: "var(--text-2)", marginTop: "0.5rem", fontSize: 14 }}>Todos com parcelamento em até 12x sem juros no cartão</p>

          <div style={{ display: "inline-flex", gap: 3, marginTop: "1.25rem", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 100, padding: 3 }}>
            {(["parcela", "vista"] as const).map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                padding: "7px 18px", borderRadius: 100, border: "none", cursor: "pointer",
                background: mode === m ? "var(--purple)" : "transparent",
                color: mode === m ? "#fff" : "var(--text-2)",
                fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 12,
                transition: "all 0.2s"
              }}>
                {m === "parcela" ? "12x sem juros" : "À vista"}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1rem" }}>
          {plans.map(({ key, Icon, name, color, desc, price, badge, items, missing, cta, link, featured, dia }) => (
            <div key={key} className={`price-card${featured ? " featured" : ""}${dia ? " dia" : ""}`}>

              {/* Badge */}
              {badge && (
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, padding: "3px 11px", borderRadius: 100, background: `${color}14`, color, border: `1px solid ${color}28`, marginBottom: "0.75rem" }}>
                  <badge.Icon size={11} />
                  {badge.label}
                </div>
              )}

              {/* Ícone + Nome */}
              <div style={{ marginBottom: "0.375rem" }}>
                <Icon size={28} color={color} strokeWidth={1.5} />
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, color, marginBottom: 3 }}>{name}</div>
              <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: "1.125rem", lineHeight: 1.5 }}>{desc}</div>

              {/* Preço */}
              <div style={{ marginBottom: "1.125rem" }}>
                <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 1 }}>
                  {mode === "parcela" ? "12x de" : "À vista por"}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(54px, 12vw, 72px)", fontWeight: 800, color: "var(--text-1)", lineHeight: 1 }}>
                  {mode === "parcela" ? <>R$<span style={{ fontSize: "clamp(54px, 12vw, 72px)" }}>{price.parcela}</span></> : price.vista}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 3 }}>
                  {mode === "parcela" ? `ou ${price.vista} à vista` : `Equivale a 12x de R$${price.parcela}`}
                </div>
              </div>

              <div style={{ height: 1, background: "var(--border)", marginBottom: "1.125rem" }} />

              {/* Itens */}
              <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                {items.map(item => (
                  <div key={item} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
                    <Check size={13} color={color} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
                {missing.map(item => (
                  <div key={item} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
                    <X size={13} color="var(--border-2)" strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 12, color: "var(--text-3)", lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button onClick={() => window.open(link, "_blank")} style={{
                marginTop: "1.5rem", width: "100%", padding: "12px",
                borderRadius: 100, cursor: "pointer",
                border: featured ? "none" : `1px solid ${color}40`,
                background: featured ? "var(--pink)" : "transparent",
                color: featured ? "#fff" : color,
                fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 13,
                transition: "all 0.2s",
                boxShadow: featured ? "0 0 24px rgba(192,38,211,0.28)" : "none",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                {cta}
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          ))}
        </div>

        {/* Garantias */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.75rem", flexWrap: "wrap", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          {guarantees.map(({ Icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-3)" }}>
              <Icon size={13} strokeWidth={1.5} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
