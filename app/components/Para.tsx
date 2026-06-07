"use client";
export default function Para() {
  const profiles = [
    { icon: "🏠", title: "Quer qualidade de vida", desc: "Cansado de pressão, hora extra e sem tempo para a família" },
    { icon: "💻", title: "Quer trabalhar home office", desc: "Liberdade geográfica e trabalhar de onde quiser" },
    { icon: "🧪", title: "Testador manual querendo crescer", desc: "Já atua na área mas quer evoluir para automação" },
    { icon: "🎯", title: "Em busca do 1º emprego em TI", desc: "Quer começar ganhando bem, sem experiência prévia" },
    { icon: "📈", title: "Não consegue ganhar mais", desc: "Quer dar um salto financeiro e sair da estagnação" },
    { icon: "🔥", title: "Estagnado na carreira", desc: "Disposto a ser o agente de mudança da sua vida profissional" },
  ];
  return (
    <section id="para-voce" style={{ padding: "5rem 0", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="tag tag-purple" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Veja se o curso é para você</span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.01em", lineHeight: 1.05 }}>
            Você se encaixa em algum<br />
            <span style={{ color: "var(--purple-light)" }}>desses perfis?</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.875rem" }}>
          {profiles.map(({ icon, title, desc }) => (
            <div key={title} className="card" style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
              <div style={{ fontSize: 24, flexShrink: 0, marginTop: 1 }}>{icon}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, fontFamily: "Syne, sans-serif", marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "1.75rem", padding: "1rem 1.25rem", background: "rgba(192,38,211,0.05)", border: "1px solid rgba(192,38,211,0.18)", borderLeft: "3px solid var(--pink)", borderRadius: "0 12px 12px 0" }}>
          <p style={{ fontSize: 14, color: "var(--pink-light)", lineHeight: 1.7 }}>
            Se você se identificou com pelo menos um desses perfis, o Instituto Hands On foi feito pra você.
          </p>
        </div>
      </div>
    </section>
  );
}
