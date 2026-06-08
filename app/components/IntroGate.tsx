"use client";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const CLOUDFLARE_VIDEO_ID = "TODO_STORYTELLING_ID";

export default function IntroGate({ onClose }: { onClose: () => void }) {
  const [canClose, setCanClose] = useState(false);
  const [closing, setClosing] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const isReady = !CLOUDFLARE_VIDEO_ID.startsWith("TODO");

  // Countdown para mostrar o botão fechar
  useEffect(() => {
    const t = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) {
          clearInterval(t);
          setCanClose(true);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  function handleClose() {
    setClosing(true);
    setTimeout(onClose, 400);
  }

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.82)",
      display: "flex", alignItems: "center", justifyContent: "center",
      opacity: closing ? 0 : 1,
      transition: "opacity 0.4s ease",
      backdropFilter: "blur(4px)",
    }}>

      {/* Botão fechar — aparece após 5s */}
      <div style={{
        position: "absolute", top: 20, right: 20, zIndex: 2,
        opacity: canClose ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: canClose ? "auto" : "none",
      }}>
        <button onClick={handleClose} style={{
          display: "flex", alignItems: "center", gap: 6,
          background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100,
          color: "#fff", padding: "8px 16px", cursor: "pointer",
          fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 500,
          transition: "background 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}>
          <X size={14} /> Fechar
        </button>
      </div>

      {/* Countdown antes de mostrar fechar */}
      {!canClose && (
        <div style={{
          position: "absolute", top: 20, right: 20, zIndex: 2,
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.5)",
        }}>
          {countdown}
        </div>
      )}

      {/* Container do vídeo */}
      <div style={{
        width: "min(85vw, 900px)",
        aspectRatio: "16/9",
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        transform: closing ? "scale(0.95)" : "scale(1)",
        transition: "transform 0.4s ease",
      }}>
        {isReady ? (
          <iframe
            src={`https://iframe.videodelivery.net/${CLOUDFLARE_VIDEO_ID}?autoplay=true&muted=false&controls=true`}
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope"
            allowFullScreen
          />
        ) : (
          // Placeholder dev
          <div style={{
            width: "100%", height: "100%", background: "#111",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: 12,
          }}>
            <img src="/logo.png" alt="Hands On" style={{ height: 56, objectFit: "contain", opacity: 0.6 }} />
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}>
              Vídeo do Sostenes — aguardando Cloudflare Video ID
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
