"use client";
import { useState } from "react";
import { ArrowRight, Plus, Minus, Flame } from "lucide-react";

const faqs = [
  { q: "Preciso ter experiência em TI para entrar?", a: "Não. O curso foi feito para quem está começando do zero. Nossos alunos vêm das mais variadas áreas — eletricistas, motoristas, atendimento, auxiliar administrativo. Se você tem disposição, a Hands On te forma." },
  { q: "Em quanto tempo consigo emprego?", a: "A média é de 6 meses do zero ao emprego. Vários alunos conseguiram ainda durante o curso. No plano Diamante o Sostenes acompanha de perto até você conquistar sua vaga." },
  { q: "Posso realmente receber em dólar ou euro?", a: "Sim. O mercado de QA tem muitas vagas em empresas internacionais que contratam brasileiros remotamente. Com domínio das ferramentas certas, essa realidade é possível e cada vez mais comum." },
  { q: "As aulas são ao vivo ou gravadas?", a: "Os planos Ouro e Diamante incluem aulas ao vivo + acesso à plataforma com gravações. O plano Prata tem acesso à plataforma com conteúdo gravado. Você pode rever quantas vezes precisar." },
  { q: "Como funciona a mentoria 1:1 com o Sostenes?", a: "Exclusivo do plano Diamante. Acesso direto ao Sostenes para mentoria individualizada, simulação de entrevista real com feedback detalhado, e orientação personalizada para sua situação de carreira." },
  { q: "Como funciona a indicação de vagas?", a: "O Instituto tem parcerias com empresas de tecnologia que buscam profissionais formados por nós. Nossos alunos têm acesso a oportunidades reais de entrevistas com essas empresas parceiras." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ padding: "5rem 0", background: "var(--surface)", borderTop: "1px solid var(--border)", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ maxWidth: 660, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="tag tag-purple" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Perguntas frequentes</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.01em", lineHeight: 1.05 }}>Ainda tem dúvidas?</h2>
          </div>

          {faqs.map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "1.125rem 0", background: "none", border: "none", cursor: "none", textAlign: "left", gap: "1rem"
              }}>
                <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 14, color: "var(--text-1)" }}>{q}</span>
                <span style={{ color: "var(--purple-light)", flexShrink: 0, display: "flex" }}>
                  {open === i ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
                </span>
              </button>
              <div className="faq-answer" style={{ maxHeight: open === i ? 200 : 0, opacity: open === i ? 1 : 0 }}>
                <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.8, paddingBottom: "1.125rem" }}>{a}</p>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "4rem", textAlign: "center", padding: "2.5rem 2rem", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, position: "relative", overflow: "hidden" }}>
            <div className="orb animate-pulse-glow" style={{ width: 280, height: 280, background: "rgba(192,38,211,0.09)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", filter: "blur(56px)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 14, color: "var(--pink)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.625rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <Flame size={14} color="var(--pink)" /> Última chamada
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, marginBottom: "0.625rem", letterSpacing: "-0.02em" }}>Sua carreira começa hoje</h2>
              <p style={{ color: "var(--text-2)", marginBottom: "1.75rem", fontSize: 14 }}>Não deixe mais uma turma fechar sem você estar dentro.</p>
              <button className="btn-primary" style={{ fontSize: 15, padding: "14px 36px", display: "inline-flex", alignItems: "center", gap: 6 }} onClick={() => window.location.href = "/checkout"}>
                Tenho interesse! <ArrowRight size={15} strokeWidth={2.5} />
              </button>
              <div style={{ marginTop: "0.875rem", fontSize: 12, color: "var(--text-3)" }}>
                Pix · Cartão em até 12x · Boleto
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
