"use client";
import { useState } from "react";
import { Play, X, Star } from "lucide-react";

// ─── Substitua cloudflareId pelo Video ID do Cloudflare Stream após o upload ───
const videos = [
  {
    id: 1,
    cloudflareId: "08b78b236551e0c6a2c6fed1ae4dd3d5",
    thumbnail: null,
    nome: "Aluno empregado",
    role: "QA Analyst",
    empresa: "Sicredi",
    cor: "#5b21b6",
    initials: "A",
  },
  {
    id: 2,
    cloudflareId: "4adbc120b7d3ddb9b4f8a06ab15689e3",
    thumbnail: null,
    nome: "Aluno empregado",
    role: "QA Consultant",
    empresa: "Santander",
    cor: "#0e4f6e",
    initials: "M",
  },
  {
    id: 3,
    cloudflareId: "TODO_VIDEO_ID_3",
    thumbnail: null,
    nome: "Aluno empregado",
    role: "QA Engineer",
    empresa: "Tecnologia",
    cor: "#065f46",
    initials: "C",
  },
  {
    id: 4,
    cloudflareId: "TODO_VIDEO_ID_4",
    thumbnail: null,
    nome: "Aluno empregado",
    role: "QA Tester",
    empresa: "Consultoria",
    cor: "#7c2d12",
    initials: "R",
  },
];

function Thumbnail({ video, onClick }: { video: typeof videos[0]; onClick: () => void }) {
  const cfThumb = video.cloudflareId.startsWith("TODO")
    ? null
    : `https://videodelivery.net/${video.cloudflareId}/thumbnails/thumbnail.jpg?time=2s&width=640`;

  return (
    <button onClick={onClick} style={{
      position: "relative", width: "100%", aspectRatio: "16/9",
      borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)",
      cursor: "pointer", background: "var(--card)", padding: 0,
      transition: "transform 0.2s, box-shadow 0.2s",
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>

      {/* Thumbnail ou placeholder */}
      {cfThumb ? (
        <img src={cfThumb} alt={video.empresa} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <div style={{
          width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",
          background: `linear-gradient(135deg, ${video.cor}22, var(--card))`,
        }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: video.cor, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16 }}>
            {video.initials}
          </div>
        </div>
      )}

      {/* Overlay escuro */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />

      {/* Botão play */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Play size={18} fill="#fff" color="#fff" style={{ marginLeft: 2 }} />
      </div>

      {/* Info rodapé */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: video.cor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, flexShrink: 0 }}>
            {video.initials}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#fff", lineHeight: 1.2 }}>{video.role}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>{video.empresa}</div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 1 }}>
            {[1,2,3,4,5].map(s => <Star key={s} size={9} fill="#fbbf24" color="#fbbf24" />)}
          </div>
        </div>
      </div>
    </button>
  );
}

function Modal({ video, onClose }: { video: typeof videos[0]; onClose: () => void }) {
  const isReady = !video.cloudflareId.startsWith("TODO");

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.88)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
    }}>
      <div onClick={e => e.stopPropagation()} style={{ width: "100%", maxWidth: 800, position: "relative" }}>
        {/* Fechar */}
        <button onClick={onClose} style={{
          position: "absolute", top: -40, right: 0, background: "none", border: "none",
          color: "rgba(255,255,255,0.6)", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontSize: 13,
        }}>
          <X size={16} /> Fechar
        </button>

        {/* Player */}
        <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: "#000" }}>
          {isReady ? (
            <iframe
              src={`https://iframe.videodelivery.net/${video.cloudflareId}?autoplay=true&controls=true`}
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, color: "var(--text-3)" }}>
              <Play size={48} strokeWidth={1} />
              <span style={{ fontSize: 13 }}>Vídeo será exibido após o upload no Cloudflare Stream</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: video.cor, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
            {video.initials}
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{video.nome}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{video.role} · {video.empresa}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Depoimentos() {
  const [modalVideo, setModalVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section id="resultados" style={{ padding: "5rem 0", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="tag tag-purple" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>Transformações reais</span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, marginTop: "0.75rem", letterSpacing: "-0.01em", lineHeight: 1.05 }}>
            O que nossos alunos dizem
          </h2>
          <p style={{ color: "var(--text-3)", marginTop: "0.5rem", fontSize: 13 }}>depoimentos reais em vídeo</p>
        </div>

        {/* Grid de thumbnails */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1rem", maxWidth: 900, margin: "0 auto" }}>
          {videos.map(v => (
            <Thumbnail key={v.id} video={v} onClick={() => setModalVideo(v)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalVideo && <Modal video={modalVideo} onClose={() => setModalVideo(null)} />}
    </section>
  );
}
