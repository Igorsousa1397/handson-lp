"use client";
import { useState, useEffect, useRef } from "react";
import { Shield, Zap, Check, X, CreditCard, Banknote, Lock, RotateCcw, Award, Gem, ArrowRight } from "lucide-react";

const plans = [
  {
    key: "prata", Icon: Shield, name: "Prata", color: "#94a3b8",
    desc: "Módulo I — Teoria e Testes Manuais",
    price: { parcela: "307,17", vista: "R$2.970,00" },
    items: ["Fundamentos da Qualidade de Software","Estratégias e tipos de teste","Metodologias Ágeis (SDLC / STLC)","Testes manuais na prática","Mentalidade do QA","Plataforma com aulas gravadas"],
    missing: ["Automação de testes","Aulas ao vivo (Live)","Mentoria 1:1 com Sostenes","Comunidade + Bônus"],
    cta: "Escolher Prata",
  },
  {
    key: "ouro", Icon: Award, name: "Ouro", color: "#fbbf24",
    desc: "Módulo II — Testes Manuais + Automação + Live",
    price: { parcela: "358,88", vista: "R$3.470,00" },
    items: ["Tudo do Prata","Lógica de Programação + Java","Automação de testes (Selenium)","Testes de API (Postman)","CI/CD + Acessibilidade Mobile","Aulas ao vivo (Live)","Preparação para entrevistas","LinkedIn e currículo"],
    missing: ["Mentoria 1:1 com Sostenes","Comunidade + Bônus"],
    cta: "Garantir Ouro",
    featured: true,
  },
  {
    key: "diamante", Icon: Gem, name: "Diamante", color: "#67e8f9",
    desc: "Módulo III — Completo + Live + Comunidade + Bônus + 1:1",
    price: { parcela: "410,59", vista: "R$3.970,00" },
    items: ["Tudo do Ouro","Mentoria 1:1 com o Sostenes","Simulação de entrevista real com feedback","Comunidade exclusiva","Indicação direta de vagas","IA aplicada a testes","Todos os bônus inclusos","Atualização constante da plataforma"],
    missing: [],
    cta: "Escolher Diamante",
    dia: true,
  },
];

const KIWIFY_LINKS = {
  prata:    "https://pay.kiwify.com.br/0GMs92A",
  ouro:     "https://pay.kiwify.com.br/oS1SdyF",
  diamante: "https://pay.kiwify.com.br/zozMu7q",
};

const guarantees = [
  { Icon: CreditCard, label: "12x no cartão" },
  { Icon: Zap,        label: "Pix à vista" },
  { Icon: Banknote,   label: "Boleto" },
  { Icon: Lock,       label: "Pagamento seguro" },
  { Icon: RotateCcw,  label: "7 dias de garantia" },
];

function PlanCard({ plan, mode }: { plan: typeof plans[0]; mode: "parcela" | "vista" }) {
  const { key, Icon, name, color, desc, price, items, missing, cta, featured, dia } = plan as any;
  return (
    <div className={`price-card${featured ? " featured" : ""}${dia ? " dia" : ""}`} style={{ minWidth: 0, height: "100%", boxSizing: "border-box" }}>
      <div style={{ marginBottom: "0.375rem" }}><Icon size={28} color={color} strokeWidth={1.5} /></div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, color, marginBottom: 3 }}>{name}</div>
      <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: "1.125rem", lineHeight: 1.5 }}>{desc}</div>
      <div style={{ marginBottom: "1.125rem" }}>
        <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 1 }}>{mode === "parcela" ? "12x de" : "À vista por"}</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, color: "var(--text-1)", lineHeight: 1 }}>
          {mode === "parcela" ? <>R$<span>{price.parcela}</span></> : price.vista}
        </div>
        <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 3 }}>
          {mode === "parcela" ? `ou ${price.vista} à vista` : `Equivale a 12x de R$${price.parcela}`}
        </div>
      </div>
      <div style={{ height: 1, background: "var(--border)", marginBottom: "1.125rem" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
        {items.map((item: string) => (
          <div key={item} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
            <Check size={13} color={color} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
            <span style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.4 }}>{item}</span>
          </div>
        ))}
        {missing.map((item: string) => (
          <div key={item} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
            <X size={13} color="var(--border-2)" strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
            <span style={{ fontSize: 12, color: "var(--text-3)", lineHeight: 1.4 }}>{item}</span>
          </div>
        ))}
      </div>
      <button onClick={() => window.open(KIWIFY_LINKS[key as keyof typeof KIWIFY_LINKS], "_blank")} style={{
        marginTop: "1.5rem", width: "100%", padding: "12px", borderRadius: 100, cursor: "pointer",
        border: featured ? "none" : `1px solid ${color}40`,
        background: featured ? "var(--pink)" : "transparent",
        color: featured ? "#fff" : color,
        fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 13, transition: "all 0.2s",
        boxShadow: featured ? "0 0 24px rgba(192,38,211,0.28)" : "none",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
        {cta} <ArrowRight size={14} strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default function Pricing() {
  const [mode, setMode] = useState<"parcela" | "vista">("parcela");
  const [active, setActive] = useState(1); // começa no Ouro
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % plans.length);
    }, 5000);
  }

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function goTo(i: number) {
    setActive(i);
    startTimer(); // reseta timer ao clicar
  }

  return (
    <section id="planos" style={{ padding: "5rem 0", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="tag tag-amber" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Investimento</span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.01em", lineHeight: 1.05 }}>Escolha seu plano</h2>
          <p style={{ color: "var(--text-2)", marginTop: "0.5rem", fontSize: 14 }}>Todos com parcelamento em até 12x no cartão com juros</p>
          <div style={{ display: "inline-flex", gap: 3, marginTop: "1.25rem", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 100, padding: 3 }}>
            {(["parcela", "vista"] as const).map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                padding: "7px 18px", borderRadius: 100, border: "none", cursor: "pointer",
                background: mode === m ? "var(--purple)" : "transparent",
                color: mode === m ? "#fff" : "var(--text-2)",
                fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 12, transition: "all 0.2s",
              }}>{m === "parcela" ? "12x no cartão" : "À vista"}</button>
            ))}
          </div>
        </div>

        {/* Desktop — 3 colunas fixas */}
        <div className="pricing-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {plans.map(p => <PlanCard key={p.key} plan={p} mode={mode} />)}
        </div>

        {/* Mobile — carrossel */}
        <div className="pricing-mobile">
          <div style={{ overflow: "hidden" }}>
            <div style={{
              display: "flex",
              transform: `translateX(calc(-${active * 100}% - ${active * 1}rem))`,
              transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              gap: "1rem",
            }}>
              {plans.map(p => (
                <div key={p.key} style={{ minWidth: "100%", flexShrink: 0 }}>
                  <PlanCard plan={p} mode={mode} />
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: "1.25rem" }}>
            {plans.map((p, i) => (
              <button key={p.key} onClick={() => goTo(i)} style={{
                width: i === active ? 24 : 8, height: 8, borderRadius: 100, padding: 0, border: "none", cursor: "pointer",
                background: i === active ? "var(--purple)" : "var(--border)",
                transition: "all 0.3s ease",
              }} />
            ))}
          </div>
        </div>

        {/* Garantias */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.75rem", flexWrap: "wrap", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          {guarantees.map(({ Icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-3)" }}>
              <Icon size={13} strokeWidth={1.5} /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
