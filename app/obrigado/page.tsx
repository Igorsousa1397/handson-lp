import { Check, MessageCircle } from "lucide-react";

export default function Obrigado() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <style>{`
        body, body * { cursor: auto !important; }
        body button, body a { cursor: pointer !important; }
      `}</style>
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        <div style={{
          width: 72, height: 72, borderRadius: "50%", margin: "0 auto 1.5rem",
          background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Check size={32} color="#34d399" strokeWidth={2.5} />
        </div>

        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 800, marginBottom: "0.75rem" }}>
          Pagamento confirmado!
        </h1>
        <p style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.7, marginBottom: "2rem" }}>
          Bem-vindo ao Instituto Hands On. Você receberá um e-mail com os próximos passos em instantes. Se tiver dúvidas, fale direto com a nossa equipe.
        </p>

        <a href="https://wa.me/5511963319196?text=Ol%C3%A1%2C%20acabei%20de%20me%20matricular%20no%20Instituto%20Hands%20On!"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px",
            borderRadius: 100, background: "#25D366", color: "#fff", textDecoration: "none",
            fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 14,
            boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
          }}>
          <MessageCircle size={16} /> Falar com a equipe no WhatsApp
        </a>

        <div style={{ marginTop: "1.5rem" }}>
          <a href="/" style={{ fontSize: 13, color: "var(--text-3)", textDecoration: "none" }}>Voltar para o início</a>
        </div>
      </div>
    </main>
  );
}
