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

export default function Home() {
  return (
    <>
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
