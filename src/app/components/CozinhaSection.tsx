import svgPaths from "../../imports/svg-oj8mr5v7qc";
const imgPizzas1971 = "/images/figma/imgPizzas1971.png";
const imgSushi1 = "/images/figma/imgSushi1.png";
const imgUramakiCaliforniaMenu1 = "/images/figma/imgUramakiCaliforniaMenu1.png";
const imgMassasCardapio541 = "/images/figma/imgMassasCardapio541.png";
const imgCarpaccioMenu661 = "/images/figma/imgCarpaccioMenu661.png";
const imgCevicheDeSalmaoComManga1 = "/images/figma/imgCevicheDeSalmaoComManga1.png";
const imgEntradasMenu711 = "/images/figma/imgEntradasMenu711.png";
const imgPeixesCardapio501 = "/images/figma/imgPeixesCardapio501.png";
const imgMousseDeChocolatePadocaGael1 = "/images/figma/imgMousseDeChocolatePadocaGael1.png";
const imgFraldinha2 = "/images/figma/imgFraldinha2.png";
const decoProposito = "/images/figma/decoProposito.svg";

export function CozinhaSection() {
  return (
    <section id="nosso-proposito" className="bg-[#f5e6dd] relative overflow-hidden py-24 md:py-36">

      {/* Sketch — above the title, center */}
      <div className="absolute pointer-events-none hidden lg:block"
        style={{ left: "45%", top: "0", width: "clamp(140px,16.4vw,236px)", transform: "rotate(11.45deg) scaleY(-1)" }}>
        <img src={decoProposito} alt="" className="w-full" />
      </div>

      {/* Thin decoration — right edge, beside the text */}
      <div className="absolute right-0 w-[clamp(60px,9vw,130px)] pointer-events-none opacity-90 hidden lg:block"
        style={{ top: "clamp(10px,3vw,50px)", transform: "translateX(30%) rotate(-140.45deg)" }}>
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
        style={{ top: "clamp(760px,78vw,1125px)", width: "clamp(120px,18vw,260px)" }}>
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
        style={{ top: "clamp(420px,49vw,710px)", width: "clamp(140px,22vw,320px)", transform: "translateX(10%)" }}>
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

      {/* Very large floral — behind the menu photo grid */}
      <div className="absolute pointer-events-none hidden lg:block"
        style={{ left: "22%", top: "clamp(750px,80vw,1150px)", width: "clamp(600px,90vw,1300px)", transform: "scaleY(-1) rotate(11.45deg)" }}>
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

      {/* Ladle — bottom left, beside the wide photo */}
      <div className="absolute left-0 bottom-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ width: "clamp(160px,30vw,440px)", transform: "translateX(-28%) scaleY(-1) rotate(-91.24deg)" }}>
        <svg viewBox="0 0 441.716 426.615" fill="none" className="w-full">
          <g clipPath="url(#coz-ladle-clip)">
            <path d={svgPaths.p9656e40} fill="black" />
          </g>
          <defs>
            <clipPath id="coz-ladle-clip">
              <rect fill="white" height="426.615" width="441.716" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Pepper branch — bottom right, beside the wide photo */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ width: "clamp(100px,17vw,250px)", transform: "translateX(20%) rotate(-146.37deg)" }}>
        <svg viewBox="0 0 250.908 711.951" fill="none" className="w-full">
          <g clipPath="url(#coz-pepper-clip)">
            <path d={svgPaths.pb702200} fill="black" />
          </g>
          <defs>
            <clipPath id="coz-pepper-clip">
              <rect fill="white" height="711.951" width="250.908" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 lg:pt-24">
        <h2
          className="text-[#1e1e1e] uppercase text-center mb-16 md:mb-24"
          style={{
            fontFamily: "'Maca'",
            fontSize: "clamp(3rem, 8.3vw, 7.45rem)",
            fontWeight: 700,
            lineHeight: 0.75,
          }}
        >
          Nosso Propósito
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-16 items-start">
          {/* Cooking pot illustration — fills the left column, like the Figma layout */}
          <div className="hidden lg:block lg:flex-1">
            <div className="w-full max-w-[620px]" style={{ marginLeft: "-12%", transform: "scaleY(-1) rotate(180deg)" }}>
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
          </div>
          <div className="lg:flex-1">
            <p className="text-black leading-relaxed mb-4" style={{ fontFamily: "'Gotham'", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              O nome GAEL tem muitos significados e sua origem está presente em várias culturas, mas
              basicamente significa generoso, belo, e abençoado que protege.
            </p>
            <p className="text-black leading-relaxed mb-4" style={{ fontFamily: "'Gotham'", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              Por isso somos um restaurante de ideias e propostas do bem viver. Queremos ser
              autênticos, democráticos, fartos e acessíveis. Tudo muito simples, feliz e gostoso.
            </p>
            <p className="text-black leading-relaxed mb-4" style={{ fontFamily: "'Gotham'", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              Como em um manual de "estilo de vida saudável" flertamos com soluções gastronômicas
              que se preocupam com o sabor de fazer casa com ingredientes naturais e na comunhão
              das pessoas em volta de uma boa e confortável mesa.
            </p>
            <p className="text-black leading-relaxed mb-8" style={{ fontFamily: "'Gotham'", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              O fazer com capricho, com qualidade e alma, formam a essência conceitual do GAEL e
              nossa comida busca a miscigenação de varias culturas e origens onde a escolha
              determinante dos pratos é ser basicamente, muito saboroso. Por isso chamamos de
              cozinha mestiça: não descendemos de nenhum lugar. Temos o compromisso de servir um
              belo, apetitoso e generoso prato de onde quer que esteja sua origem.
            </p>
            <div className="flex flex-col items-start gap-1">
              <span className="text-black uppercase" style={{ fontFamily: "'Maca'", fontSize: "clamp(1.2rem, 2.9vw, 2.625rem)", fontWeight: 700 }}>
                Confira o nosso cardápio
              </span>
              <div className="h-px w-72 bg-black" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-[1.7fr_2fr_1fr] gap-4 md:gap-5 items-start">
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="rounded-[2.25rem] overflow-hidden aspect-[404/607] bg-gray-300">
              <img src={imgSushi1} alt="Sushi" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2.25rem] overflow-hidden aspect-[402/474] bg-gray-300">
              <img src={imgCevicheDeSalmaoComManga1} alt="Ceviche de Salmão com Manga" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2.25rem] overflow-hidden aspect-[404/477] bg-gray-300">
              <img src={imgPeixesCardapio501} alt="Peixes" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="rounded-[2.75rem] overflow-hidden aspect-[477/716] bg-gray-300">
              <img src={imgPizzas1971} alt="Pizza" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2.75rem] overflow-hidden aspect-[474/712] bg-gray-300">
              <img src={imgCarpaccioMenu661} alt="Carpaccio" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:flex md:flex-col gap-4 md:gap-5">
            <div className="rounded-[2.25rem] overflow-hidden aspect-[227/340] bg-gray-300">
              <img src={imgUramakiCaliforniaMenu1} alt="Uramaki California" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2.25rem] overflow-hidden aspect-[235/352] bg-gray-300">
              <img src={imgMassasCardapio541} alt="Massas" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[1.25rem] overflow-hidden aspect-[228/342] bg-gray-300">
              <img src={imgEntradasMenu711} alt="Entradas" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[1rem] overflow-hidden aspect-[227/170] bg-gray-300">
              <img src={imgMousseDeChocolatePadocaGael1} alt="Mousse de Chocolate" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="hidden md:block" />
          <div className="col-span-2 rounded-[2.5rem] overflow-hidden aspect-[720/400] bg-gray-300">
            <img src={imgFraldinha2} alt="Fraldinha" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
