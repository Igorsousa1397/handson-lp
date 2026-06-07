export default function Marquee() {
  const tools = ["Java","Selenium","Cucumber","Git & GitHub","Postman","Jira","ChatGPT","Gemini","ISTQB","BSTQB","CI/CD","Eclipse","QA Manual","Automação"];
  const all = [...tools, ...tools];
  return (
    <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "1rem 0", overflow: "hidden", background: "var(--surface)", position: "relative", zIndex: 2 }}>
      <div style={{ display: "flex", gap: "2.5rem", width: "max-content", animation: "marquee 22s linear infinite" }}>
        {all.map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", whiteSpace: "nowrap" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--purple)", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "var(--text-2)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
