import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { GaelSection } from "./components/GaelSection";
import { CozinhaSection } from "./components/CozinhaSection";
import { CasaSection } from "./components/CasaSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="bg-[#f5e6dd] min-h-screen">
      <Navbar />
      <Hero />
      <GaelSection />
      <CozinhaSection />
      <CasaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
