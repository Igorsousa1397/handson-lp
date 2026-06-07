export default function Founders() {
  const steps = [
    { color: "var(--purple)", label: "Agosto 2023 — O começo", text: "Sostenes e Daniel fundaram o Instituto Hands On com um ideal claro: transformar vidas por meio da tecnologia. O mercado de QA crescia, mas ninguém ensinava do jeito certo — prático, direto e acessível." },
    { color: "var(--pink)", label: "A metodologia", text: "Criaram o método hands on — teoria e prática desde o primeiro dia. Sem enrolação, sem pré-requisitos. Qualquer pessoa pode entrar do zero e sair empregada." },
    { color: "var(--amber)", label: "A missão", text: "Transformar vidas por meio da educação tecnológica, formando profissionais qualificados em testes de software e preparando-os para os desafios reais do mercado de tecnologia." },
    { color: "var(--cyan)", label: "Hoje — 2025", text: "Em apenas 2 anos, mais de 100 profissionais formados e +30 transições de carreira concluídas, com alunos empregados em empresas como Sicredi, Santander e outras referências do setor." },
  ];
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
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map(({ color, label, text }, i) => (
              <div key={i} style={{ display: "flex", gap: "1.125rem", alignItems: "stretch" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 26 }}>
                  <div className="tl-dot" style={{ background: `${color}18`, border: `1.5px solid ${color}` }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: color }} />
                  </div>
                  {i < steps.length - 1 && <div style={{ width: "1px", flex: 1, background: "var(--border)", minHeight: 20 }} />}
                </div>
                <div style={{ flex: 1, paddingBottom: i < steps.length - 1 ? "1.75rem" : 0 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{label}</div>
                  <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.75 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", marginTop: "2.5rem" }}>
            {[
              { n: "+100", l: "Alunos formados" },
              { n: "+30", l: "Transições" },
              { n: "6 meses", l: "Do zero ao emprego" },
              { n: "R$4–20k", l: "Faixa salarial" },
            ].map(({ n, l }) => (
              <div key={l} style={{ padding: "1rem 0.875rem", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, textAlign: "center" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(18px,2vw,22px)", fontWeight: 800, color: "var(--text-1)", marginBottom: 3 }}>{n}</div>
                <div style={{ fontSize: 11, color: "var(--text-3)", lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
