"use client";
import { useState } from "react";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Para from "./components/Para";
import Founders from "./components/Founders";
import Modulos from "./components/Modulos";
import Depoimentos from "./components/Depoimentos";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import IntroGate from "./components/IntroGate";

// Desligado até o vídeo de abertura do Sostenes existir — ligue quando tiver o ID no IntroGate.tsx
const INTRO_ENABLED = false;

export default function Home() {
  const [introClosed, setIntroClosed] = useState(false);

  return (
    <>
      {INTRO_ENABLED && !introClosed && <IntroGate onClose={() => setIntroClosed(true)} />}
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Para />
        <Founders />
        <Modulos />
        <Depoimentos />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
