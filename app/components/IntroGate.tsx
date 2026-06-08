"use client";
import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

// ─── Substitua pelo Video ID do Cloudflare Stream após o upload ───────────────
const CLOUDFLARE_VIDEO_ID = "TODO_STORYTELLING_ID";
// ─────────────────────────────────────────────────────────────────────────────

export default function IntroGate({ onComplete }: { onComplete: () => void }) {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isReady = !CLOUDFLARE_VIDEO_ID.startsWith("TODO");

  // Cloudflare Stream player API via postMessage
  useEffect(() => {
    if (!started || !isReady) return;

    function handleMessage(e: MessageEvent) {
      if (!e.data || typeof e.data !== "object") return;
      const { type, ...data } = e.data;

      if (type === "timeupdate" && data.duration > 0) {
        const pct = Math.round((data.currentTime / data.duration) * 100);
        setProgress(pct);
      }
      if (type === "ended") {
        setFinished(true);
        setTimeout(onComplete, 800);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [started, isReady, onComplete]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#000",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      transition: finished ? "opacity 0.8s ease" : "none",
      opacity: finished ? 0 : 1,
    }}>
      <style>{`body { overflow: hidden; }`}</style>

      {/* Logo */}
      <div style={{ position: "absolute", top: 24, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
        <img src="/logo.png" alt="Instituto Hands On" style={{ height: 44, objectFit: "contain" }} />
      </div>

      {/* Tela inicial — antes de dar play */}
      {!started && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", textAlign: "center", padding: "0 1.5rem" }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--purple), var(--pink))",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 48px rgba(124,58,237,0.5)",
            animation: "pulse 2s ease infinite",
          }}>
            <Play size={32} fill="#fff" color="#fff" style={{ marginLeft: 4 }} />
          </div>
          <div>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 800, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.1,
            }}>
              Uma mensagem do Sostenes<br />
              <span style={{ color: "var(--purple-light)" }}>antes de começar</span>
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 340 }}>
              Assista até o final para acessar o site
            </p>
          </div>
          <button
            onClick={() => setStarted(true)}
            style={{
              padding: "14px 36px", borderRadius: 100,
              background: "var(--pink)", border: "none", color: "#fff",
              fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 15,
              cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 0 32px rgba(192,38,211,0.4)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            <Play size={16} fill="#fff" /> Assistir agora
          </button>
        </div>
      )}

      {/* Player */}
      {started && (
        <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isReady ? (
            <iframe
              ref={iframeRef}
              src={`https://iframe.videodelivery.net/${CLOUDFLARE_VIDEO_ID}?autoplay=true&controls=false&loop=false`}
              style={{ width: "100%", height: "100%", border: "none", position: "absolute", inset: 0 }}
              allow="accelerometer; autoplay; encrypted-media; gyroscope"
              allowFullScreen={false}
            />
          ) : (
            // Placeholder enquanto o vídeo não está configurado
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, color: "rgba(255,255,255,0.4)" }}>
              <Play size={64} strokeWidth={1} />
              <p style={{ fontSize: 14 }}>Aguardando Video ID do Cloudflare Stream</p>
              <button onClick={onComplete} style={{
                marginTop: 8, padding: "10px 24px", borderRadius: 100,
                background: "var(--purple)", border: "none", color: "#fff",
                fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer",
              }}>
                Pular (dev mode)
              </button>
            </div>
          )}

          {/* Barra de progresso */}
          {isReady && (
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "rgba(255,255,255,0.1)" }}>
              <div style={{
                height: "100%", background: "var(--purple)",
                width: `${progress}%`, transition: "width 0.5s linear",
              }} />
            </div>
          )}

          {/* Texto bloqueio */}
          {isReady && progress < 95 && (
            <div style={{
              position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
              borderRadius: 100, padding: "6px 16px",
              fontSize: 12, color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap",
            }}>
              Assista até o final para continuar
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 48px rgba(124,58,237,0.5); }
          50% { box-shadow: 0 0 72px rgba(192,38,211,0.7); }
        }
      `}</style>
    </div>
  );
}
