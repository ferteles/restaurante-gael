import svgPaths from "../../imports/svg-oj8mr5v7qc";
const imgAmbientesMgl90352 = "/images/figma/imgAmbientesMgl90352.png";


export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#ac8401] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-luminosity pointer-events-none">
        <img src={imgAmbientesMgl90352} alt="" className="w-full h-full object-cover" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <div className="flex flex-col gap-6">
            <div className="w-20 h-20">
              <svg viewBox="0 0 223.73 222.62" fill="none" className="w-full h-full">
                <g clipPath="url(#footer-logo-clip)">
                  <path d={svgPaths.pad86300} fill="white" />
                  <path d={svgPaths.p229c5990} fill="white" />
                  <path d={svgPaths.pcee3b00} fill="white" />
                  <path d={svgPaths.p2312f600} fill="white" />
                  <path d={svgPaths.p1d44d980} fill="white" />
                  <path d={svgPaths.p329ef880} fill="white" />
                  <path d={svgPaths.p260fc800} fill="white" />
                  <path d={svgPaths.p1aefdd70} fill="white" />
                  <path d={svgPaths.p1d6ff780} fill="white" />
                  <path d={svgPaths.p2a3e5a00} fill="white" />
                  <path d={svgPaths.p870700} fill="white" />
                  <path d={svgPaths.p1420d600} fill="white" />
                  <path d={svgPaths.p1c2c5500} fill="white" />
                  <path d={svgPaths.p1699f700} fill="white" />
                  <path d={svgPaths.p2f3baa80} fill="white" />
                  <path d={svgPaths.p32026a80} fill="white" />
                  <path d={svgPaths.p3b42b300} fill="white" />
                  <path d={svgPaths.p379bbf00} fill="white" />
                  <path d={svgPaths.p12cfbf00} fill="white" />
                </g>
                <defs>
                  <clipPath id="footer-logo-clip">
                    <rect fill="white" height="222.62" width="223.73" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <nav className="flex flex-col gap-3">
              {[
                { label: "O jeito Gael", id: "jeito-gael" },
                { label: "Cardápio", id: "nosso-proposito" },
                { label: "Ambiente", id: "nossa-casa" },
                { label: "Contato", id: "contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-white uppercase text-left hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)", fontWeight: 700, letterSpacing: "0.06em" }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 justify-center">
            <button
              onClick={() => scrollTo("contato")}
              className="text-white uppercase hover:opacity-70 transition-opacity text-left"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)", fontWeight: 700, letterSpacing: "0.06em" }}
            >
              Peça pelo Delivery
            </button>
          </div>

          <div>
            <p className="text-white uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)", fontWeight: 700, letterSpacing: "0.06em" }}>Endereço</p>
            <p className="text-white leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontSize: "clamp(0.82rem, 1.3vw, 1rem)" }}>
              Rua Ferreira de Araújo, 320 e 322<br />Pinheiros, São Paulo, SP
            </p>
          </div>

          <div>
            <p className="text-white uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)", fontWeight: 700, letterSpacing: "0.06em" }}>Horários</p>
            <p className="text-white leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontSize: "clamp(0.82rem, 1.3vw, 1rem)" }}>
              Seg à sexta: 7h às 23h<br />Sáb, dom e feriados: 7h às 22h
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/50 text-center" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} Gael Restaurante — Pinheiros, São Paulo — por{" "}
            <a
              href="https://tauatech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/80 transition-colors"
            >
              tauatech.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
