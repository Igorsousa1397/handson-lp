"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Shield, Award, Gem, Check, ChevronDown, Lock, CreditCard, QrCode, FileText, ArrowLeft, ArrowRight } from "lucide-react";

// ─── Dados dos planos ────────────────────────────────────────────────────────
const PLANS = {
  prata: {
    key: "prata", Icon: Shield, color: "#94a3b8", name: "Prata",
    desc: "Módulo I — Teoria e Testes Manuais",
    price: { vista: 297000, parcela: 24750, parcelas: 12 }, // em centavos
    items: ["Fundamentos da Qualidade de Software","Estratégias e tipos de teste","Metodologias Ágeis (SDLC / STLC)","Testes manuais na prática","Mentalidade do QA","Plataforma com aulas gravadas"],
  },
  ouro: {
    key: "ouro", Icon: Award, color: "#fbbf24", name: "Ouro",
    desc: "Módulo II — Testes Manuais + Automação + Live",
    price: { vista: 347000, parcela: 28916, parcelas: 12 },
    items: ["Tudo do Prata","Lógica de Programação + Java","Automação de testes (Selenium)","Testes de API (Postman)","CI/CD + Acessibilidade Mobile","Aulas ao vivo (Live)","Preparação para entrevistas","LinkedIn e currículo"],
  },
  diamante: {
    key: "diamante", Icon: Gem, color: "#67e8f9", name: "Diamante",
    desc: "Módulo III — Completo + Live + Comunidade + Bônus + 1:1",
    price: { vista: 397000, parcela: 33083, parcelas: 12 },
    items: ["Tudo do Ouro","Mentoria 1:1 com o Sostenes","Simulação de entrevista real com feedback","Comunidade exclusiva","Indicação direta de vagas","IA aplicada a testes","Todos os bônus inclusos","Atualização constante da plataforma"],
  },
};

type PlanKey = keyof typeof PLANS;
type PayMethod = "cartao" | "pix" | "boleto";

function fmt(centavos: number) {
  return (centavos / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ─── Componente principal ─────────────────────────────────────────────────────
function CheckoutContent() {
  const params = useSearchParams();
  const planParam = (params.get("plano") ?? "ouro") as PlanKey;
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>(planParam in PLANS ? planParam : "ouro");
  const [payMethod, setPayMethod] = useState<PayMethod>("cartao");
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ nome: "", email: "", cpf: "", telefone: "", parcelas: "12" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const plan = PLANS[selectedPlan];

  function formatCPF(v: string) {
    return v.replace(/\D/g, "").slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  function formatPhone(v: string) {
    return v.replace(/\D/g, "").slice(0, 11)
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.nome.trim() || form.nome.trim().split(" ").length < 2) e.nome = "Informe nome completo";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    if (form.cpf.replace(/\D/g, "").length < 11) e.cpf = "CPF inválido";
    if (form.telefone.replace(/\D/g, "").length < 10) e.telefone = "Telefone inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleNext() {
    if (validate()) setStep(2);
  }

  async function handleSubmit() {
    setLoading(true);
    // TODO: integrar com Efí Bank
    // const res = await fetch("/api/pagamento", {
    //   method: "POST",
    //   body: JSON.stringify({ plano: selectedPlan, metodo: payMethod, form }),
    // });
    // const data = await res.json();
    // if (payMethod === "pix") mostrarQRCode(data.qrcode);
    // if (payMethod === "boleto") window.open(data.url, "_blank");
    // if (payMethod === "cartao") redirecionar(data.checkout_url);
    await new Promise(r => setTimeout(r, 1500));
    window.location.href = "/obrigado";
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%", padding: "12px 14px", borderRadius: 10,
    background: "var(--card)", border: `1px solid ${errors[field] ? "#f87171" : "var(--border)"}`,
    color: "var(--text-1)", fontFamily: "DM Sans, sans-serif", fontSize: 14, outline: "none",
    transition: "border 0.2s",
  });

  const labelStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, color: "var(--text-2)",
    display: "block", marginBottom: 6, letterSpacing: "0.03em",
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", padding: "0 0 80px" }} className="checkout-page">
      <style>{`body { cursor: default !important; } body * { cursor: auto; } body button, body a { cursor: pointer !important; }`}</style>
      {/* Nav */}
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 0", position: "sticky", top: 0, background: "var(--bg)", zIndex: 100 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-3)", textDecoration: "none", fontSize: 13 }}>
            <ArrowLeft size={15} /> Voltar
          </a>
          <img src="/logo.png" alt="Hands On" style={{ height: 36, objectFit: "contain", position: "absolute", left: "50%", transform: "translateX(-50%)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--text-3)" }}>
            <Lock size={12} /> Checkout seguro
          </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: 960, paddingTop: "2rem" }}>
        {/* Steps — centralizado */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: "2rem" }}>
          {[{ n: 1, label: "Seus dados" }, { n: 2, label: "Pagamento" }].map(({ n, label }) => (
            <div key={n} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                background: step >= n ? "var(--purple)" : "var(--card)",
                border: `1px solid ${step >= n ? "var(--purple)" : "var(--border)"}`,
                fontSize: 12, fontWeight: 700, color: step >= n ? "#fff" : "var(--text-3)",
                transition: "all 0.3s",
              }}>{step > n ? <Check size={13} /> : n}</div>
              <span style={{ fontSize: 13, color: step >= n ? "var(--text-1)" : "var(--text-3)", fontWeight: step === n ? 600 : 400 }}>{label}</span>
              {n < 2 && <div style={{ width: 32, height: 1, background: "var(--border)", margin: "0 4px" }} />}
            </div>
          ))}
        </div>

        <div className="checkout-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "1.5rem", alignItems: "start" }}>

          {/* Coluna esquerda */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", minWidth: 0 }}>

            {/* Step 1 — Dados pessoais */}
            {step === 1 && (
              <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem" }}>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 800, marginBottom: "1.5rem" }}>Seus dados</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Nome completo</label>
                    <input style={inputStyle("nome")} placeholder="Seu nome completo" value={form.nome}
                      onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} />
                    {errors.nome && <span style={{ fontSize: 11, color: "#f87171", marginTop: 4, display: "block" }}>{errors.nome}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail</label>
                    <input style={inputStyle("email")} placeholder="seu@email.com" type="email" value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                    {errors.email && <span style={{ fontSize: 11, color: "#f87171", marginTop: 4, display: "block" }}>{errors.email}</span>}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>CPF</label>
                      <input style={inputStyle("cpf")} placeholder="000.000.000-00" value={form.cpf}
                        onChange={e => setForm(f => ({ ...f, cpf: formatCPF(e.target.value) }))} />
                      {errors.cpf && <span style={{ fontSize: 11, color: "#f87171", marginTop: 4, display: "block" }}>{errors.cpf}</span>}
                    </div>
                    <div>
                      <label style={labelStyle}>Telefone / WhatsApp</label>
                      <input style={inputStyle("telefone")} placeholder="(11) 99999-9999" value={form.telefone}
                        onChange={e => setForm(f => ({ ...f, telefone: formatPhone(e.target.value) }))} />
                      {errors.telefone && <span style={{ fontSize: 11, color: "#f87171", marginTop: 4, display: "block" }}>{errors.telefone}</span>}
                    </div>
                  </div>
                </div>
                <button onClick={handleNext} style={{
                  marginTop: "1.5rem", width: "100%", padding: "14px", borderRadius: 100,
                  background: "var(--purple)", border: "none", color: "#fff",
                  fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8, whiteSpace: "nowrap",
                  transition: "opacity 0.2s",
                }}>
                  Continuar para pagamento <ArrowRight size={15} />
                </button>
              </div>
            )}

            {/* Step 2 — Pagamento */}
            {step === 2 && (
              <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
                  <button onClick={() => setStep(1)} style={{ background: "none", border: "none", color: "var(--text-3)", cursor: "pointer", display: "flex" }}>
                    <ArrowLeft size={18} />
                  </button>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 800 }}>Forma de pagamento</h2>
                </div>

                {/* Seleção método */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  {([
                    { key: "cartao", Icon: CreditCard, label: "Cartão de crédito", sub: "em até 12x sem juros" },
                    { key: "pix",    Icon: QrCode,     label: "Pix",               sub: "aprovação imediata" },
                    { key: "boleto", Icon: FileText,   label: "Boleto bancário",   sub: "vence em 3 dias úteis" },
                  ] as const).map(({ key, Icon, label, sub }) => (
                    <button key={key} onClick={() => setPayMethod(key)} style={{
                      display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
                      borderRadius: 12, border: `1px solid ${payMethod === key ? "var(--purple)" : "var(--border)"}`,
                      background: payMethod === key ? "rgba(124,58,237,0.08)" : "transparent",
                      cursor: "pointer", textAlign: "left", transition: "all 0.2s", width: "100%",
                    }}>
                      <Icon size={18} color={payMethod === key ? "var(--purple-light)" : "var(--text-3)"} />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-1)", fontFamily: "DM Sans, sans-serif" }}>{label}</div>
                        <div style={{ fontSize: 12, color: "var(--text-3)" }}>{sub}</div>
                      </div>
                      <div style={{
                        marginLeft: "auto", width: 18, height: 18, borderRadius: "50%",
                        border: `2px solid ${payMethod === key ? "var(--purple)" : "var(--border)"}`,
                        background: payMethod === key ? "var(--purple)" : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.2s", flexShrink: 0,
                      }}>
                        {payMethod === key && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Campos cartão */}
                {payMethod === "cartao" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div>
                      <label style={labelStyle}>Número do cartão</label>
                      <input style={inputStyle("cartao")} placeholder="0000 0000 0000 0000" maxLength={19} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label style={labelStyle}>Validade</label>
                        <input style={inputStyle("validade")} placeholder="MM/AA" maxLength={5} />
                      </div>
                      <div>
                        <label style={labelStyle}>CVV</label>
                        <input style={inputStyle("cvv")} placeholder="000" maxLength={4} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Nome no cartão</label>
                      <input style={inputStyle("nomecartao")} placeholder="Como está impresso no cartão" />
                    </div>
                    <div>
                      <label style={labelStyle}>Parcelas</label>
                      <div style={{ position: "relative" }}>
                        <select value={form.parcelas} onChange={e => setForm(f => ({ ...f, parcelas: e.target.value }))}
                          style={{ ...inputStyle("parcelas"), appearance: "none", paddingRight: 36 }}>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map(n => (
                            <option key={n} value={n} style={{ background: "var(--card)" }}>
                              {n}x de {fmt(Math.round(plan.price.vista / n))} {n === 1 ? "à vista" : "sem juros"}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={14} color="var(--text-3)" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Pix info */}
                {payMethod === "pix" && (
                  <div style={{ padding: "1.25rem", background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: 12, marginBottom: "1.5rem", textAlign: "center" }}>
                    <QrCode size={48} color="var(--cyan)" style={{ margin: "0 auto 12px" }} />
                    <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>
                      Após confirmar, você receberá o QR Code do Pix.<br />
                      Aprovação em segundos, acesso liberado na hora.
                    </p>
                    <div style={{ marginTop: 10, fontSize: 18, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, color: "var(--cyan)" }}>
                      {fmt(plan.price.vista)}
                    </div>
                  </div>
                )}

                {/* Boleto info */}
                {payMethod === "boleto" && (
                  <div style={{ padding: "1.25rem", background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, marginBottom: "1.5rem" }}>
                    <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>
                      O boleto será gerado após a confirmação. O acesso é liberado em até <strong style={{ color: "var(--text-1)" }}>2 dias úteis</strong> após o pagamento ser processado pelo banco.
                    </p>
                    <div style={{ marginTop: 10, fontSize: 18, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, color: "#fbbf24" }}>
                      {fmt(plan.price.vista)}
                    </div>
                  </div>
                )}

                <button onClick={handleSubmit} disabled={loading} style={{
                  width: "100%", padding: "14px", borderRadius: 100,
                  background: loading ? "var(--border)" : "var(--pink)", border: "none", color: "#fff",
                  fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 14, cursor: loading ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  boxShadow: loading ? "none" : "0 0 24px rgba(192,38,211,0.3)",
                  transition: "all 0.2s",
                }}>
                  {loading ? "Processando..." : payMethod === "pix" ? "Gerar QR Code Pix" : payMethod === "boleto" ? "Gerar boleto" : "Finalizar pagamento"}
                  {!loading && <Lock size={14} />}
                </button>

                <p style={{ marginTop: "0.75rem", fontSize: 11, color: "var(--text-3)", textAlign: "center" }}>
                  Pagamento 100% seguro · Seus dados são criptografados
                </p>
              </div>
            )}
          </div>

          {/* Coluna direita — Resumo */}
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem" }}>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, marginBottom: "1rem", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Resumo do pedido</h3>

            {/* Seletor de plano */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              {(Object.values(PLANS)).map(({ key, Icon, name, color, price }) => (
                <button key={key} onClick={() => setSelectedPlan(key as PlanKey)} style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10,
                  border: `1px solid ${selectedPlan === key ? color + "60" : "var(--border)"}`,
                  background: selectedPlan === key ? color + "10" : "transparent",
                  cursor: "pointer", transition: "all 0.2s", width: "100%",
                }}>
                  <Icon size={16} color={color} strokeWidth={1.75} />
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: selectedPlan === key ? color : "var(--text-2)", fontFamily: "DM Sans, sans-serif" }}>{name}</div>
                    <div style={{ fontSize: 11, color: "var(--text-3)" }}>12x de {fmt(price.parcela)}</div>
                  </div>
                  {selectedPlan === key && <Check size={13} color={color} style={{ marginLeft: "auto" }} />}
                </button>
              ))}
            </div>

            <div style={{ height: 1, background: "var(--border)", marginBottom: "1rem" }} />

            {/* Itens */}
            <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: "1.25rem" }}>
              {plan.items.slice(0, 5).map(item => (
                <div key={item} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
                  <Check size={12} color={plan.color} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
              {plan.items.length > 5 && (
                <span style={{ fontSize: 11, color: "var(--text-3)" }}>+{plan.items.length - 5} benefícios inclusos</span>
              )}
            </div>

            <div style={{ height: 1, background: "var(--border)", marginBottom: "1rem" }} />

            {/* Total */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
              <span style={{ fontSize: 12, color: "var(--text-3)" }}>12x sem juros</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 800, color: "var(--text-1)" }}>
                {fmt(plan.price.parcela)}
              </span>
            </div>
            <div style={{ fontSize: 11, color: "var(--text-3)", textAlign: "right" }}>
              ou {fmt(plan.price.vista)} à vista no Pix
            </div>

            <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: 5, justifyContent: "center" }}>
              <Lock size={11} color="var(--text-3)" />
              <span style={{ fontSize: 11, color: "var(--text-3)" }}>7 dias de garantia incondicional</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  );
}
