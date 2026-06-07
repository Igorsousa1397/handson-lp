export default function Footer() {
  return (
    <footer style={{ padding: "1.5rem 0", borderTop: "1px solid var(--border)", position: "relative", zIndex: 2 }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg, var(--purple), var(--pink))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, fontFamily: "DM Sans, sans-serif" }}>H</div>
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
