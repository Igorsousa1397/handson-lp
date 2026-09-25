"use client";
import { useEffect, useState } from "react";

// ─── Roteiro da suíte que roda em loop no hero ───────────────────────────────
type Step =
  | { kind: "cmd";  text: string; wait: number }
  | { kind: "test"; text: string; ms: number; run: number; fail?: boolean }
  | { kind: "info"; text: string; color: string; wait: number }
  | { kind: "done"; wait: number };

const script: Step[] = [
  { kind: "cmd",  text: "npx handson test --suite=regressao", wait: 900 },
  { kind: "test", text: "login com credenciais válidas",      ms: 142, run: 650 },
  { kind: "test", text: "carrinho adiciona produto",          ms: 98,  run: 500 },
  { kind: "test", text: "API /pagamentos responde 200",       ms: 210, run: 700 },
  { kind: "test", text: "checkout finaliza pedido",           ms: 0,   run: 1100, fail: true },
  { kind: "info", text: "esperado: 200  ·  recebido: 500",    color: "#f87171", wait: 900 },
  { kind: "info", text: "↳ bug HO-142 aberto no Jira",        color: "#fbbf24", wait: 1100 },
  { kind: "info", text: "↻ reexecutando após correção…",      color: "#67e8f9", wait: 900 },
  { kind: "test", text: "checkout finaliza pedido",           ms: 131, run: 800 },
  { kind: "test", text: "e-mail de confirmação enviado",      ms: 76,  run: 450 },
  { kind: "done", wait: 4200 },
];

const SPINNER = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

export default function TestRunner() {
  // quantos passos já estão "resolvidos"; o passo `done` atual pode estar rodando
  const [done, setDone] = useState(0);
  const [running, setRunning] = useState(false);
  const [frame, setFrame] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const next = () => {
      if (i >= script.length) { i = 0; setDone(0); setRunning(false); t = setTimeout(next, 600); return; }
      const step = script[i];
      if (step.kind === "test") {
        setRunning(true);
        t = setTimeout(() => { setRunning(false); i++; setDone(i); t = setTimeout(next, 120); }, step.run);
      } else {
        i++; setDone(i);
        t = setTimeout(next, step.wait);
      }
    };
    t = setTimeout(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setReduced(true); setDone(script.length); return; }
      next();
    }, 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setFrame(f => (f + 1) % SPINNER.length), 80);
    return () => clearInterval(t);
  }, [running]);

  const visible = script.slice(0, running ? done + 1 : done);
  const finished = done >= script.length;
  const passed = script.filter((s, i) => i < done && s.kind === "test" && !s.fail).length;

  return (
    <div className="hero-terminal" aria-hidden="true">
      {/* barra do "editor" */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderBottom: "1px solid var(--border)" }}>
        {["#ff5f57", "#febc2e", "#28c840"].map(c => <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.85 }} />)}
        <span style={{ marginLeft: 8, fontSize: 11, color: "var(--text-3)", letterSpacing: "0.04em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>regressao.spec.ts — Selenium · Java</span>
        <span style={{ marginLeft: "auto", flexShrink: 0, fontSize: 10, color: finished ? "#34d399" : "var(--purple-light)", fontWeight: 600 }}>
          {finished ? "● APROVADO" : "● RODANDO"}
        </span>
      </div>

      <div style={{ padding: "14px 16px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12, lineHeight: 1.9, minHeight: 268 }}>
        {visible.map((step, i) => {
          const isRunning = running && i === visible.length - 1;
          if (step.kind === "cmd") return (
            <div key={i} style={{ color: "var(--text-1)" }}><span style={{ color: "var(--purple-light)" }}>$</span> {step.text}</div>
          );
          if (step.kind === "info") return (
            <div key={i} style={{ color: step.color, paddingLeft: 22 }}>{step.text}</div>
          );
          if (step.kind === "done") return (
            <div key={i} style={{ marginTop: 8, paddingTop: 8, borderTop: "1px dashed var(--border-2)", display: "flex", justifyContent: "space-between", color: "var(--text-2)" }}>
              <span><span style={{ color: "#34d399", fontWeight: 700 }}>{passed} passed</span> · <span style={{ color: "#fbbf24" }}>1 bug encontrado</span></span>
              <span>2.4s</span>
            </div>
          );
          // test
          const color = isRunning ? "var(--text-2)" : step.fail ? "#f87171" : "#34d399";
          const mark = isRunning ? SPINNER[frame] : step.fail ? "✗" : "✓";
          return (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline", opacity: isRunning ? 0.7 : 1, transition: "opacity 0.2s" }}>
              <span style={{ color, width: 12, fontWeight: 700 }}>{mark}</span>
              <span style={{ color: isRunning ? "var(--text-2)" : "var(--text-1)", flex: 1 }}>{step.text}</span>
              <span style={{ color: step.fail && !isRunning ? "#f87171" : "var(--text-3)", fontSize: 11 }}>
                {isRunning ? "…" : step.fail ? "FAIL" : `${step.ms}ms`}
              </span>
            </div>
          );
        })}
        {!finished && !reduced && <span className="term-caret" />}
      </div>
    </div>
  );
}
