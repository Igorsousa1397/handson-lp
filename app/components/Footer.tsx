export default function Footer() {
  return (
    <footer style={{ padding: "1.5rem 0", borderTop: "1px solid var(--border)", position: "relative", zIndex: 2 }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/logo.png" alt="Instituto Hands On" style={{ height: 36, width: "auto", objectFit: "contain" }} />
          <span style={{ fontSize: 12, color: "var(--text-3)" }}>© 2025 Instituto Hands On · Quality Assurance</span>
        </div>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          {["Política de Privacidade","Condições e suporte"].map(l => (
            <a key={l} href="#" style={{ fontSize: 12, color: "var(--text-3)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
