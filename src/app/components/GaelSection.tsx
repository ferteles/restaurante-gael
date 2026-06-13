import svgPaths from "../../imports/svg-oj8mr5v7qc";
const imgAmbientesMgl90521 = "/images/figma/imgAmbientesMgl90521.png";
const imgGaelMaio24611 = "/images/figma/imgGaelMaio24611.png";
const imgAmbientesMgl90352 = "/images/figma/imgAmbientesMgl90352.png";
const imgAmbientesMgl90951 = "/images/figma/imgAmbientesMgl90951.png";
const decoArrow = "/images/figma/decoArrow.svg";
const decoGaelTopLeft = "/images/figma/decoGaelTopLeft.svg";
const decoGaelTopCenter = "/images/figma/decoGaelTopCenter.svg";
const decoGaelTopRight = "/images/figma/decoGaelTopRight.svg";
const decoGaelMidLeft = "/images/figma/decoGaelMidLeft.svg";
const decoGaelMidCenter = "/images/figma/decoGaelMidCenter.svg";

export function GaelSection() {
  return (
    <section id="jeito-gael" className="bg-[#f5e6dd] relative overflow-hidden">

      {/* Hand-drawn arrow — across the top, right below the hero */}
      <div className="absolute left-[11%] top-0 w-[85%] pointer-events-none hidden md:block">
        <img src={decoArrow} alt="" className="w-full" />
      </div>

      {/* Sketch — top left edge */}
      <div className="absolute left-0 pointer-events-none hidden lg:block"
        style={{ top: "clamp(60px,9vw,125px)", width: "clamp(130px,17.5vw,252px)", transform: "translateX(-38%)" }}>
        <img src={decoGaelTopLeft} alt="" className="w-full" />
      </div>

      {/* Sketch — top center-left, rotated */}
      <div className="absolute pointer-events-none hidden lg:block"
        style={{ left: "33%", top: "clamp(60px,8vw,117px)", width: "clamp(100px,12.2vw,176px)", transform: "rotate(72.82deg) scaleY(-1)" }}>
        <img src={decoGaelTopCenter} alt="" className="w-full" />
      </div>

      {/* Sketch — top right edge */}
      <div className="absolute right-0 pointer-events-none hidden lg:block"
        style={{ top: "clamp(50px,7.6vw,110px)", width: "clamp(150px,21.5vw,309px)", transform: "translateX(15%)" }}>
        <img src={decoGaelTopRight} alt="" className="w-full" />
      </div>

      {/* Sketch — left edge, mid section, rotated */}
      <div className="absolute left-0 pointer-events-none hidden lg:block"
        style={{ top: "clamp(380px,49vw,709px)", width: "clamp(110px,13.8vw,199px)", transform: "translateX(-25%) rotate(72.82deg) scaleY(-1)" }}>
        <img src={decoGaelMidLeft} alt="" className="w-full" />
      </div>

      {/* Sketch — center-left, mid section */}
      <div className="absolute pointer-events-none hidden lg:block"
        style={{ left: "32%", top: "clamp(420px,55vw,798px)", width: "clamp(120px,16vw,232px)" }}>
        <img src={decoGaelMidCenter} alt="" className="w-full" />
      </div>

      {/* Bread / basket illustration — left */}
      <div className="absolute left-0 top-[clamp(120px,20vw,298px)] w-[clamp(260px,38vw,520px)] pointer-events-none opacity-90 hidden md:block" style={{ transform: "translateX(-18%)" }}>
        <svg viewBox="0 0 702 488" fill="none" className="w-full">
          <g clipPath="url(#gael-basket-clip)">
            <path d={svgPaths.p834cc00} fill="black" />
            <path d={svgPaths.pcb16800} fill="black" />
            <path d={svgPaths.p2bcd8e00} fill="black" />
            <path d={svgPaths.p3bcbd500} fill="black" />
            <path d={svgPaths.p1d4b9b00} fill="black" />
            <path d={svgPaths.p928c100} fill="black" />
            <path d={svgPaths.p1be3c000} fill="black" />
            <path d={svgPaths.p3886c140} fill="black" />
            <path d={svgPaths.p3d45ca00} fill="black" />
            <path d={svgPaths.p178b8280} fill="black" />
            <path d={svgPaths.p2addd400} fill="black" />
            <path d={svgPaths.p28869000} fill="black" />
            <path d={svgPaths.p187d2c00} fill="black" />
            <path d={svgPaths.p1b439080} fill="black" />
            <path d={svgPaths.p27f1b800} fill="black" />
            <path d={svgPaths.p1c816cb0} fill="black" />
            <path d={svgPaths.p1370fc00} fill="black" />
            <path d={svgPaths.p388a0c80} fill="black" />
            <path d={svgPaths.p7185000} fill="black" />
            <path d={svgPaths.p34fdf500} fill="black" />
            <path d={svgPaths.p348be800} fill="black" />
            <path d={svgPaths.p395a4000} fill="black" />
            <path d={svgPaths.p34512e00} fill="black" />
            <path d={svgPaths.p1e245b80} fill="black" />
            <path d={svgPaths.p18e6ba80} fill="black" />
            <path d={svgPaths.p35105380} fill="black" />
            <path d={svgPaths.p242f4400} fill="black" />
            <path d={svgPaths.p25331380} fill="black" />
            <path d={svgPaths.p3df5d8f0} fill="black" />
            <path d={svgPaths.p12c400} fill="black" />
            <path d={svgPaths.p19e9ae00} fill="black" />
            <path d={svgPaths.p1e081480} fill="black" />
            <path d={svgPaths.p961e400} fill="black" />
            <path d={svgPaths.p30d42d00} fill="black" />
            <path d={svgPaths.p20414500} fill="black" />
          </g>
          <defs>
            <clipPath id="gael-basket-clip">
              <rect fill="white" height="488" width="702" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Vine / fish SVG — right side, upper */}
      <div className="absolute right-0 top-[clamp(300px,46vw,667px)] w-[clamp(220px,32vw,420px)] pointer-events-none opacity-90 hidden lg:block" style={{ transform: "translateX(10%)" }}>
        <svg viewBox="0 0 600 318" fill="none" className="w-full">
          <g clipPath="url(#gael-vine-clip)">
            <path d={svgPaths.p373b1b00} fill="black" />
            <path d={svgPaths.pec7e00} fill="black" />
            <path d={svgPaths.p14418380} fill="black" />
          </g>
          <defs>
            <clipPath id="gael-vine-clip">
              <rect fill="white" height="318" width="600" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Large plant/leaf SVG — left mid */}
      <div className="absolute left-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ top: "clamp(680px,94vw,1364px)", width: "clamp(220px,35vw,460px)", transform: "translateX(-18%)" }}>
        <svg viewBox="0 0 599 602" fill="none" className="w-full">
          <g clipPath="url(#gael-plant-left-clip)">
            <path d={svgPaths.p29bcfc40} fill="black" />
            <path d={svgPaths.p2b1b511} fill="black" />
            <path d={svgPaths.p163e3380} fill="black" />
            <path d={svgPaths.p1393f900} fill="black" />
            <path d={svgPaths.p2dae2900} fill="black" />
            <path d={svgPaths.p274de880} fill="black" />
            <path d={svgPaths.p301bc800} fill="black" />
            <path d={svgPaths.p38931c00} fill="black" />
            <path d={svgPaths.p29ddc200} fill="black" />
            <path d={svgPaths.p36f10700} fill="black" />
            <path d={svgPaths.p32b12780} fill="black" />
            <path d={svgPaths.p297c6f80} fill="black" />
            <path d={svgPaths.p1223a300} fill="black" />
            <path d={svgPaths.pdd5c00} fill="black" />
            <path d={svgPaths.p174ae400} fill="black" />
            <path d={svgPaths.p15c10f00} fill="black" />
          </g>
          <defs>
            <clipPath id="gael-plant-left-clip">
              <rect fill="white" height="602" width="599" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Large tree SVG — right mid */}
      <div className="absolute right-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ top: "clamp(820px,113vw,1641px)", width: "clamp(260px,40vw,560px)", transform: "translateX(12%)" }}>
        <svg viewBox="0 0 727 731" fill="none" className="w-full">
          <g clipPath="url(#gael-tree-right-clip)">
            <path d={svgPaths.p17f59200} fill="black" />
            <path d={svgPaths.p1a9d800} fill="black" />
            <path d={svgPaths.p3e886a00} fill="black" />
            <path d={svgPaths.p295de500} fill="black" />
            <path d={svgPaths.p23c18a80} fill="black" />
            <path d={svgPaths.p61ba70} fill="black" />
            <path d={svgPaths.p1884e980} fill="black" />
            <path d={svgPaths.p1a9b9000} fill="black" />
            <path d={svgPaths.pb9a580} fill="black" />
            <path d={svgPaths.pe48bf80} fill="black" />
            <path d={svgPaths.p1eecce00} fill="black" />
            <path d={svgPaths.p18be27b2} fill="black" />
            <path d={svgPaths.pc1e7d80} fill="black" />
            <path d={svgPaths.p9564a80} fill="black" />
            <path d={svgPaths.p39e9c000} fill="black" />
            <path d={svgPaths.p1548fa80} fill="black" />
          </g>
          <defs>
            <clipPath id="gael-tree-right-clip">
              <rect fill="white" height="731" width="727" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Large rotated plant SVG — bottom-left */}
      <div className="absolute left-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ bottom: "-60px", width: "clamp(260px,42vw,580px)", transform: "translateX(-22%) rotate(57.79deg)" }}>
        <svg viewBox="0 0 620.479 623.893" fill="none" className="w-full">
          <g clipPath="url(#gael-big-plant-clip)">
            <path d={svgPaths.p1ce1b9f2} fill="black" />
            <path d={svgPaths.p224b9ef0} fill="black" />
            <path d={svgPaths.pea17a80} fill="black" />
            <path d={svgPaths.p1e4b4900} fill="black" />
            <path d={svgPaths.p245bc580} fill="black" />
            <path d={svgPaths.p257f1280} fill="black" />
            <path d={svgPaths.p3431480} fill="black" />
            <path d={svgPaths.p2b4d3780} fill="black" />
            <path d={svgPaths.p46cfcc0} fill="black" />
            <path d={svgPaths.p19bcdfc0} fill="black" />
            <path d={svgPaths.p32315280} fill="black" />
            <path d={svgPaths.p3596b760} fill="black" />
            <path d={svgPaths.p162d62c0} fill="black" />
            <path d={svgPaths.p27027680} fill="black" />
            <path d={svgPaths.p255f2ef0} fill="black" />
            <path d={svgPaths.p953a380} fill="black" />
          </g>
          <defs>
            <clipPath id="gael-big-plant-clip">
              <rect fill="white" height="623.893" width="620.479" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36">
        <div className="flex lg:justify-end mb-20 md:mb-32">
          <p className="text-black leading-relaxed lg:max-w-md" style={{ fontFamily: "'Gotham'", fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)" }}>
            Somos um restaurante em Pinheiros, São Paulo pensado para fazer parte do dia. Um lugar
            que abre cedo, acompanha o ritmo de quem passa e de quem fica, mantém uma relação
            próxima com a rotina do bairro, acompanhando o tempo, a estação e o movimento da
            cidade, com pratos que evoluem e se ajustam naturalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
          <h2
            className="text-[#1e1e1e] uppercase text-center lg:text-left whitespace-nowrap"
            style={{
              fontFamily: "'Maca'",
              fontSize: "clamp(3rem, 8.3vw, 7.45rem)",
              fontWeight: 700,
              lineHeight: 0.75,
            }}
          >
            O Jeito Gael
          </h2>
          <div>
            <p className="text-black leading-relaxed" style={{ fontFamily: "'Gotham'", fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)" }}>
              O Gael funciona do café da manhã ao jantar. Recebe quem chega para começar o dia, quem
              senta para almoçar com calma, quem volta para um café no meio da tarde ou escolhe ficar
              para um jantar tranquilo. A proposta é simples: ser um restaurante de dia a dia,
              presente em diferentes momentos.
            </p>
            <p className="text-black leading-relaxed mt-4" style={{ fontFamily: "'Gotham'", fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)" }}>
              O espaço é um jardim leve e acolhedor, com a cara de Pinheiros. Funciona bem para
              almoço, jantar ou encontros sem pressa. O foco está na comida, na conversa e no tempo
              bem aproveitado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.62fr_1fr] gap-5 items-start">
          <div className="rounded-[2.5rem] overflow-hidden aspect-[690/433] bg-gray-300">
            <img src={imgAmbientesMgl90521} alt="Ambiente Gael" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2.5rem] overflow-hidden aspect-[419/439] bg-gray-300">
            <img src={imgGaelMaio24611} alt="Interior do Gael" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2.5rem] overflow-hidden aspect-[681/581] bg-gray-300">
            <img src={imgAmbientesMgl90352} alt="Ambiente Gael" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2.5rem] overflow-hidden aspect-[414/559] bg-gray-300">
            <img src={imgAmbientesMgl90951} alt="Ambiente Gael" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
