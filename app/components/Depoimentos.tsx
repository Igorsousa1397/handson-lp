"use client";
import { useEffect, useState } from "react";
import { Play, X, Star } from "lucide-react";
import Reveal from "./Reveal";

// ─── Vídeos em public/videos/ (verticais 9:16, comprimidos com ffmpeg) ───
const videos = [
  {
    id: 1,
    src: "/videos/luana.mp4",
    poster: "/videos/luana.jpg",
    duracao: "3:16",
    nome: "Luana",
    role: "QA",
    empresa: "Sicredi",
    cor: "var(--purple-light)",
  },
  {
    id: 2,
    src: "/videos/natan.mp4",
    poster: "/videos/natan.jpg",
    duracao: "1:29",
    nome: "Natan",
    role: "QA",
    empresa: "Santander",
    cor: "var(--cyan)",
  },
];

type Video = typeof videos[0];

function Thumbnail({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <button className="depo-thumb" onClick={onClick} aria-label={`Assistir depoimento de ${video.nome}, ${video.role} na ${video.empresa}`}>
      <img src={video.poster} alt="" loading="lazy" />

      {/* Overlay escuro */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,16,0.92) 0%, rgba(8,8,16,0.2) 45%, transparent 70%)" }} />

      {/* Duração */}
      <span style={{
        position: "absolute", top: 10, right: 10, padding: "3px 8px", borderRadius: 100,
        background: "rgba(8,8,16,0.7)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)",
        fontSize: 11, fontWeight: 600, color: "#fff", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      }}>{video.duracao}</span>

      {/* Botão play */}
      <div className="depo-play">
        <Play size={20} fill="#fff" color="#fff" style={{ marginLeft: 3 }} />
      </div>

      {/* Info rodapé */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px", textAlign: "left" }}>
        <div style={{ display: "flex", gap: 2, marginBottom: 6 }}>
          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={11} fill="#fbbf24" color="#fbbf24" />)}
        </div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{video.nome}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: video.cor }} />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>{video.role} · {video.empresa}</span>
        </div>
      </div>
    </button>
  );
}

function Modal({ video, onClose }: { video: Video; onClose: () => void }) {
  // Fecha com Esc e trava o scroll da página enquanto o modal está aberto
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  return (
    <div onClick={onClose} role="dialog" aria-modal="true" aria-label={`Depoimento de ${video.nome}`} style={{
      position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
    }}>
      <div onClick={e => e.stopPropagation()} style={{ position: "relative", height: "min(86vh, 760px)", aspectRatio: "9/16", maxWidth: "100%" }}>
        {/* Fechar */}
        <button onClick={onClose} aria-label="Fechar" style={{
          position: "absolute", top: 10, right: 10, zIndex: 2, width: 36, height: 36, borderRadius: "50%",
          background: "rgba(8,8,16,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <X size={16} />
        </button>

        {/* Player */}
        <video
          src={video.src}
          poster={video.poster}
          autoPlay
          controls
          playsInline
          style={{ width: "100%", height: "100%", borderRadius: 16, background: "#000", objectFit: "cover", display: "block", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
        />
      </div>
    </div>
  );
}

export default function Depoimentos() {
  const [modalVideo, setModalVideo] = useState<Video | null>(null);

  return (
    <section id="resultados" style={{ padding: "5rem 0", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", position: "relative", zIndex: 2 }}>
      <div className="container">
        <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="tag tag-purple" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Transformações reais</span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.01em", lineHeight: 1.05 }}>
            O que nossos alunos dizem
          </h2>
          <p style={{ color: "var(--text-3)", marginTop: "0.5rem", fontSize: 13 }}>depoimentos reais em vídeo</p>
        </Reveal>

        {/* Grid de thumbnails verticais */}
        <div className="depo-grid">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 120}>
              <Thumbnail video={v} onClick={() => setModalVideo(v)} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalVideo && <Modal video={modalVideo} onClose={() => setModalVideo(null)} />}
    </section>
  );
}
