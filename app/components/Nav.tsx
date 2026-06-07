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
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8, flexShrink: 0,
            background: "linear-gradient(135deg, var(--purple), var(--pink))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 14, color: "#fff"
          }}>H</div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>
            Hands On <span style={{ color: "var(--text-3)", fontWeight: 400 }}>Instituto</span>
          </span>
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
          <button className="btn-primary" style={{ padding: "9px 20px", fontSize: 13 }} onClick={() => scroll("planos")}>
            Tenho interesse!
          </button>
        </div>
      </div>
    </nav>
  );
}
