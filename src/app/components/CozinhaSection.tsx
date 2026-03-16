import svgPaths from "../../imports/svg-oj8mr5v7qc";
const imgPizzas1971 = "/images/unsplash/imgPizzas1971.jpg";
const imgSushi1 = "/images/unsplash/imgSushi1.jpg";
const imgUramakiCaliforniaMenu1 = "/images/unsplash/imgUramakiCaliforniaMenu1.jpg";
const imgMassasCardapio541 = "/images/unsplash/imgMassasCardapio541.jpg";
const imgCarpaccioMenu661 = "/images/unsplash/imgCarpaccioMenu661.jpg";
const imgCevicheDeSalmaoComManga1 = "/images/unsplash/imgCevicheDeSalmaoComManga1.jpg";
const imgEntradasMenu711 = "/images/unsplash/imgEntradasMenu711.jpg";
const imgPeixesCardapio501 = "/images/unsplash/imgPeixesCardapio501.jpg";
const imgMousseDeChocolatePadocaGael1 = "/images/unsplash/imgMousseDeChocolatePadocaGael1.jpg";
const imgFraldinha1 = "/images/unsplash/imgFraldinha1.jpg";

export function CozinhaSection() {
  return (
    <section id="nossa-cozinha" className="bg-[#f5e6dd] relative overflow-hidden py-24 md:py-36">

      {/* Cooking pot illustration — left, upper area */}
      <div className="absolute left-0 top-8 w-[clamp(220px,36vw,500px)] pointer-events-none opacity-90 hidden lg:block"
        style={{ transform: "translateX(-16%) scaleY(-1) rotate(180deg)" }}>
        <svg viewBox="0 0 723 630" fill="none" className="w-full">
          <g clipPath="url(#coz-pot-clip)">
            <path d={svgPaths.p1693c600} fill="black" />
            <path d={svgPaths.p9dc23f0} fill="black" />
            <path d={svgPaths.p313547c0} fill="black" />
            <path d={svgPaths.p28b99000} fill="black" />
            <path d={svgPaths.p2509c380} fill="black" />
            <path d={svgPaths.p22c1f700} fill="black" />
            <path d={svgPaths.p10f49b00} fill="black" />
            <path d={svgPaths.p1895ba00} fill="black" />
            <path d={svgPaths.p2b74c900} fill="black" />
            <path d={svgPaths.p37878980} fill="black" />
            <path d={svgPaths.p3cc56f80} fill="black" />
            <path d={svgPaths.p545280} fill="black" />
            <path d={svgPaths.pc639a80} fill="black" />
            <path d={svgPaths.p37bbe800} fill="black" />
            <path d={svgPaths.p3c206380} fill="black" />
            <path d={svgPaths.p3d301a00} fill="black" />
            <path d={svgPaths.p28f84300} fill="black" />
            <path d={svgPaths.p10d1400} fill="black" />
            <path d={svgPaths.p1c4e4ec0} fill="black" />
            <path d={svgPaths.p1116a480} fill="black" />
            <path d={svgPaths.p1598c200} fill="black" />
            <path d={svgPaths.p13fcf0} fill="black" />
          </g>
          <defs>
            <clipPath id="coz-pot-clip">
              <rect fill="white" height="630" width="723" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Thin decoration — right side, upper */}
      <div className="absolute right-8 top-16 w-[clamp(60px,9vw,130px)] pointer-events-none opacity-90 hidden lg:block"
        style={{ transform: "rotate(-140.45deg)" }}>
        <svg viewBox="0 0 133.956 380.102" fill="none" className="w-full">
          <g clipPath="url(#coz-thin-clip)">
            <path d={svgPaths.p38eb78c0} fill="black" />
          </g>
          <defs>
            <clipPath id="coz-thin-clip">
              <rect fill="white" height="380.102" width="133.956" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Leaf — bottom left */}
      <div className="absolute left-4 pointer-events-none opacity-90 hidden lg:block"
        style={{ top: "clamp(500px,52vw,900px)", width: "clamp(120px,18vw,260px)" }}>
        <svg viewBox="0 0 306 169" fill="none" className="w-full">
          <g clipPath="url(#coz-leaf-clip)">
            <path d={svgPaths.p3d174700} fill="black" />
          </g>
          <defs>
            <clipPath id="coz-leaf-clip">
              <rect fill="white" height="169" width="306" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Large plant right */}
      <div className="absolute right-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ top: "clamp(340px,38vw,680px)", width: "clamp(140px,22vw,320px)", transform: "translateX(10%)" }}>
        <svg viewBox="0 0 347 330" fill="none" className="w-full">
          <g clipPath="url(#coz-plant-right-clip)">
            <path d={svgPaths.p3fe80500} fill="black" />
            <path d={svgPaths.p1a5a2d80} fill="black" />
            <path d={svgPaths.p1e74b380} fill="black" />
            <path d={svgPaths.p3b58ee80} fill="black" />
          </g>
          <defs>
            <clipPath id="coz-plant-right-clip">
              <rect fill="white" height="330" width="347" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Very large floral — mid section background */}
      <div className="absolute pointer-events-none opacity-[0.07] hidden lg:block"
        style={{ left: "18%", top: "clamp(600px,62vw,1200px)", width: "clamp(500px,72vw,1100px)", transform: "scaleY(-1) rotate(11.45deg)" }}>
        <svg viewBox="0 0 1107.06 1069.21" fill="none" className="w-full">
          <g clipPath="url(#coz-floral-clip)">
            <path d={svgPaths.p2547b300} fill="black" />
          </g>
          <defs>
            <clipPath id="coz-floral-clip">
              <rect fill="white" height="1069.21" width="1107.06" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2
          className="text-[#1e1e1e] text-center mb-12"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 8vw, 8rem)",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          Nossa Cozinha
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-16 items-start">
          <div className="hidden lg:block lg:flex-1" />
          <div className="lg:flex-1">
            <p className="text-black leading-relaxed mb-4" style={{ fontFamily: "'Lato', sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              Mudamos com frequência e valorizamos ingredientes frescos. Há pratos para compartilhar,
              opções individuais e preparos que equilibram conforto e surpresa, mantendo uma linguagem
              direta e acessível.
            </p>
            <p className="text-black leading-relaxed mb-4" style={{ fontFamily: "'Lato', sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              A cozinha trabalha com um cardápio variado, que abrange diferentes tipos de comida e
              acompanha os vários momentos do dia. As referências convivem no mesmo menu de forma
              natural, com atenção ao preparo, ao equilíbrio e à constância.
            </p>
            <p className="text-black leading-relaxed mb-8" style={{ fontFamily: "'Lato', sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              Com opções que transitam entre o conforto e a variedade. Há escolhas para qualquer
              horário, com a mesma lógica de simplicidade e cuidado.
            </p>
            <div className="flex flex-col items-start gap-1">
              <span className="text-black uppercase tracking-widest" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.9rem, 2vw, 1.4rem)", fontWeight: 700 }}>
                Confira o nosso cardápio
              </span>
              <div className="h-px w-60 bg-black" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          <div className="rounded-[2rem] overflow-hidden aspect-[3/4] bg-gray-300">
            <img src={imgSushi1} alt="Sushi" className="w-full h-full object-cover" />
          </div>
          <div className="row-span-2 rounded-[2rem] overflow-hidden bg-gray-300" style={{ aspectRatio: "2/3" }}>
            <img src={imgPizzas1971} alt="Pizza" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2rem] overflow-hidden aspect-[3/4] bg-gray-300">
            <img src={imgUramakiCaliforniaMenu1} alt="Uramaki California" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2rem] overflow-hidden aspect-[3/4] bg-gray-300">
            <img src={imgCevicheDeSalmaoComManga1} alt="Ceviche de Salmão com Manga" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2rem] overflow-hidden aspect-[3/4] bg-gray-300">
            <img src={imgMassasCardapio541} alt="Massas" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2rem] overflow-hidden aspect-[3/4] bg-gray-300">
            <img src={imgEntradasMenu711} alt="Entradas" className="w-full h-full object-cover" />
          </div>
          <div className="row-span-2 rounded-[2rem] overflow-hidden bg-gray-300" style={{ aspectRatio: "2/3" }}>
            <img src={imgCarpaccioMenu661} alt="Carpaccio" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2rem] overflow-hidden aspect-[3/4] bg-gray-300">
            <img src={imgMousseDeChocolatePadocaGael1} alt="Mousse de Chocolate" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2rem] overflow-hidden aspect-[3/4] bg-gray-300">
            <img src={imgPeixesCardapio501} alt="Peixes" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block" />
          <div className="col-span-2 md:col-span-3 rounded-[2rem] overflow-hidden aspect-[16/6] bg-gray-300">
            <img src={imgFraldinha1} alt="Fraldinha" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
