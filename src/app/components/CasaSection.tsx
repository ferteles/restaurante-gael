import svgPaths from "../../imports/svgPaths";
import { macaHeading, gothamBody } from "../../styles/typography";

const imgAmbiente17 = "/images/figma/imgAmbiente17.webp";
const imgAmbientesMgl90921 = "/images/figma/imgAmbientesMgl90921.webp";
const imgAmbientes161 = "/images/figma/imgAmbientes161.webp";
const imgAmbientesMgl90101 = "/images/figma/imgAmbientesMgl90101.webp";
const imgAmbiente15 = "/images/figma/imgAmbiente15.webp";
const imgAmbientesMgl90721 = "/images/figma/imgAmbientesMgl90721.webp";

export function CasaSection() {
  return (
    <section id="nossa-casa" className="bg-[#f5e6dd] relative overflow-hidden py-24 md:py-36">

      {/* Garlic left */}
      <div className="absolute left-0 pointer-events-none opacity-90 block top-[490px] lg:top-[clamp(120px,34vw,495px)]"
        style={{ width: "clamp(48px,10vw,160px)", transform: "translateX(-30%) rotate(125.91deg)" }}>
        <svg viewBox="0 0 195.885 555.823" fill="none" className="w-full">
          <g clipPath="url(#casa-garlic-left-clip)">
            <path d={svgPaths.p21c2c000} fill="black" />
          </g>
          <defs>
            <clipPath id="casa-garlic-left-clip">
              <rect fill="white" height="555.823" width="195.885" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Garlic / vegetable right */}
      <div className="absolute right-0 pointer-events-none opacity-90 block top-[490px] lg:top-[clamp(130px,37vw,537px)]"
        style={{ width: "clamp(55px,14vw,220px)", transform: "translateX(30%) rotate(-84.87deg)" }}>
        <svg viewBox="0 0 315.946 563.889" fill="none" className="w-full">
          <g clipPath="url(#casa-garlic-right-clip)">
            <path d={svgPaths.pddf8740} fill="black" />
            <path d={svgPaths.pa4ccec0} fill="black" />
            <path d={svgPaths.p8228700} fill="black" />
            <path d={svgPaths.pf476a00} fill="black" />
            <path d={svgPaths.p1413f480} fill="black" />
          </g>
          <defs>
            <clipPath id="casa-garlic-right-clip">
              <rect fill="white" height="563.889" width="315.946" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2
          className="text-[#1e1e1e] uppercase text-center mb-12 md:mb-16"
          style={macaHeading}
        >
          Nossa Casa
        </h2>

        <div className="max-w-xl mx-auto mb-16 md:mb-24">
          <p className="text-black leading-relaxed mb-6" style={gothamBody}>
            O Gael faz parte da rotina. Um restaurante que acompanha o ritmo da semana, dos horários
            e das pessoas que passam por aqui. Cada visita acontece de um jeito, mas sempre com a
            mesma sensação de familiaridade e conforto.
          </p>
          <p className="text-black leading-relaxed" style={gothamBody}>
            O espaço é um jardim, leve e acolhedor, com a cara de Pinheiros. Funciona bem para
            almoço, jantar ou encontros sem pressa. O foco está na comida, na conversa e no tempo
            bem aproveitado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 items-start">
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[407/610] bg-gray-300">
              <img src={imgAmbientes161} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden aspect-[415/501] bg-gray-300">
              <img src={imgAmbientesMgl90721} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="rounded-[2.25rem] overflow-hidden aspect-[423/465] bg-gray-300">
              <img src={imgAmbientesMgl90101} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2.25rem] overflow-hidden aspect-[423/634] bg-gray-300">
              <img src={imgAmbiente15} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:flex md:flex-col gap-4 md:gap-5">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[427/700] bg-gray-300">
              <img src={imgAmbiente17} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2.25rem] overflow-hidden aspect-[428/410] bg-gray-300">
              <img src={imgAmbientesMgl90921} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

