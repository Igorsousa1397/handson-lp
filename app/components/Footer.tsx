export default function Footer() {
  return (
    <footer style={{ padding: "2rem 0", borderTop: "1px solid var(--border)", position: "relative", zIndex: 2 }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/logo.png" alt="Instituto Hands On" style={{ height: 36, width: "auto", objectFit: "contain" }} />
          <span style={{ fontSize: 12, color: "var(--text-3)" }}>© 2025 Instituto Hands On · Quality Assurance</span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="/politica-de-privacidade" style={{ fontSize: 12, color: "var(--text-3)", textDecoration: "none" }}>Política de Privacidade</a>
          <a href="/condicoes-e-suporte" style={{ fontSize: 12, color: "var(--text-3)", textDecoration: "none" }}>Condições e suporte</a>
        </div>
      </div>
    </footer>
  );
}
