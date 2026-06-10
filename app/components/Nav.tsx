"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="Instituto Hands On"
            style={{ height: 48, width: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="nav-links">
          {[["Módulos","modulos"],["Resultados","resultados"],["Planos","planos"]].map(([l, id]) => (
            <a key={id} onClick={() => scroll(id)} style={{
              fontSize: 13, color: "var(--text-2)", textDecoration: "none",
              cursor: "none", transition: "color 0.2s"
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-1)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
            >{l}</a>
          ))}
          <button className="btn-primary" style={{ padding: "9px 20px", fontSize: 13 }} onClick={() => window.open("https://pay.kiwify.com.br/oS1SdyF", "_blank")}>
            Tenho interesse!
          </button>
        </div>
      </div>
    </nav>
  );
}
