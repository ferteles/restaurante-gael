import svgPaths from "../../imports/svg-oj8mr5v7qc";
const imgAmbientesMgl89971 = "/images/unsplash/imgAmbientesMgl89971.jpg";
const imgAmbientesMgl90921 = "/images/unsplash/imgAmbientesMgl90921.jpg";
const imgAmbientes161 = "/images/unsplash/imgAmbientes161.jpg";
const imgAmbientesMgl90101 = "/images/unsplash/imgAmbientesMgl90101.jpg";
const imgAmbientesMgl90221 = "/images/unsplash/imgAmbientesMgl90221.jpg";
const imgAmbientesMgl90721 = "/images/unsplash/imgAmbientesMgl90721.jpg";

export function CasaSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="nossa-casa" className="bg-[#f5e6dd] relative overflow-hidden py-24 md:py-36">

      {/* Tall pepper/branch SVG — right upper */}
      <div className="absolute right-0 top-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ width: "clamp(80px,14vw,200px)", transform: "translateX(20%) rotate(-146.37deg)" }}>
        <svg viewBox="0 0 250.908 711.951" fill="none" className="w-full">
          <g clipPath="url(#casa-pepper-clip)">
            <path d={svgPaths.pb702200} fill="black" />
          </g>
          <defs>
            <clipPath id="casa-pepper-clip">
              <rect fill="white" height="711.951" width="250.908" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Garlic left */}
      <div className="absolute left-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ top: "clamp(200px,22vw,420px)", width: "clamp(70px,10vw,160px)", transform: "translateX(-30%) rotate(125.91deg)" }}>
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
      <div className="absolute right-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ top: "clamp(360px,40vw,760px)", width: "clamp(80px,14vw,220px)", transform: "translateX(30%) rotate(-84.87deg)" }}>
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

      {/* Utensil / ladle left bottom */}
      <div className="absolute left-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ top: "clamp(500px,55vw,980px)", width: "clamp(120px,22vw,360px)", transform: "translateX(-28%) scaleY(-1) rotate(-91.24deg)" }}>
        <svg viewBox="0 0 441.716 426.615" fill="none" className="w-full">
          <g clipPath="url(#casa-ladle-clip)">
            <path d={svgPaths.p9656e40} fill="black" />
          </g>
          <defs>
            <clipPath id="casa-ladle-clip">
              <rect fill="white" height="426.615" width="441.716" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Bicycle SVG — bottom right */}
      <div className="absolute right-0 pointer-events-none opacity-90 hidden lg:block"
        style={{ bottom: "clamp(60px,8vw,180px)", width: "clamp(280px,44vw,620px)", transform: "translateX(6%) rotate(9.4deg)" }}>
        <svg viewBox="0 0 693.652 368.426" fill="none" className="w-full">
          <g clipPath="url(#casa-bike-clip)">
            <path d={svgPaths.p10d35300} fill="black" />
            <path d={svgPaths.p39deba00} fill="black" />
            <path d={svgPaths.p3ff04340} fill="black" />
          </g>
          <defs>
            <clipPath id="casa-bike-clip">
              <rect fill="white" height="368.426" width="693.652" />
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
          Nossa Casa
        </h2>

        <div className="max-w-2xl mx-auto lg:mx-0 mb-16">
          <p className="text-black leading-relaxed mb-6" style={{ fontFamily: "'Lato', sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
            O Gael faz parte da rotina. Um restaurante que acompanha o ritmo da semana, dos horários
            e das pessoas que passam por aqui. Cada visita acontece de um jeito, mas sempre com a
            mesma sensação de familiaridade e conforto.
          </p>
          <p className="text-black leading-relaxed mb-10" style={{ fontFamily: "'Lato', sans-serif", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
            O espaço é urbano, leve e acolhedor, com a cara de Pinheiros. Funciona bem para almoço,
            jantar ou encontros sem pressa. O foco está na comida, na conversa e no tempo bem
            aproveitado.
          </p>

          <div className="flex flex-col items-start gap-1">
            <button
              onClick={() => scrollTo("contato")}
              className="text-black uppercase tracking-widest hover:opacity-60 transition-opacity"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.9rem, 2vw, 1.4rem)", fontWeight: 700 }}
            >
              Faça sua reserva
            </button>
            <div className="h-px w-44 bg-black" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="rounded-[2rem] overflow-hidden aspect-square bg-gray-300">
              <img src={imgAmbientesMgl89971} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2rem] overflow-hidden aspect-[3/4] bg-gray-300">
              <img src={imgAmbientesMgl90921} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2rem] overflow-hidden aspect-square bg-gray-300">
              <img src={imgAmbientes161} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="rounded-[2rem] overflow-hidden bg-gray-300" style={{ aspectRatio: "3/4" }}>
              <img src={imgAmbientesMgl90101} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2rem] overflow-hidden aspect-square bg-gray-300">
              <img src={imgAmbientesMgl90221} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4 md:gap-5">
            <div className="rounded-[2rem] overflow-hidden bg-gray-300" style={{ aspectRatio: "3/5" }}>
              <img src={imgAmbientesMgl90721} alt="Ambiente Gael" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
