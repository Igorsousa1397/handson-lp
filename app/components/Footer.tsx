import { MessageCircle, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ padding: "2.5rem 0 1.5rem", borderTop: "1px solid var(--border)", position: "relative", zIndex: 2 }}>
      <div className="container">

        {/* Linha superior — logo + contatos */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem", marginBottom: "1.5rem" }}>
          <img src="/logo.png" alt="Instituto Hands On" style={{ height: 44, width: "auto", objectFit: "contain" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
            <a href="https://wa.me/5511963319196" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--text-2)", textDecoration: "none" }}>
              <MessageCircle size={15} color="#25D366" />
              (11) 96331-9196
            </a>
            <a href="https://www.instagram.com/handsoninstituto/" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--text-2)", textDecoration: "none" }}>
              <Instagram size={15} color="#c026d3" />
              @handsoninstituto
            </a>
          </div>
        </div>

        {/* Divisor */}
        <div style={{ height: 1, background: "var(--border)", marginBottom: "1rem" }} />

        {/* Linha inferior — copyright + links */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <span style={{ fontSize: 11, color: "var(--text-3)" }}>
            © 2025 Instituto Hands On · Desenvolvido por{" "}
            <a href="https://wa.me/5511945132157" target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--purple-light)", textDecoration: "none" }}>
              iOS Tech Serviços de Tecnologia
            </a>
          </span>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <a href="/politica-de-privacidade" style={{ fontSize: 11, color: "var(--text-3)", textDecoration: "none" }}>Política de Privacidade</a>
            <a href="/condicoes-e-suporte"     style={{ fontSize: 11, color: "var(--text-3)", textDecoration: "none" }}>Condições e suporte</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
