import svgPaths from "../../imports/svgPaths";
import { macaHeadingMd, gothamBody } from "../../styles/typography";

export function ContactSection() {
  return (
    <section id="contato" className="bg-[#f5e6dd] relative py-20 md:py-28 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Tomato-branch sketch — sticks out to the right of the content, like Figma */}
        <div className="absolute -z-10 right-0 -top-6 pointer-events-none opacity-90 hidden lg:block"
          style={{ width: "clamp(260px,36vw,500px)", transform: "translateX(58%) rotate(9.4deg)" }}>
          <svg viewBox="0 0 693.652 368.426" fill="none" className="w-full">
            <g clipPath="url(#contact-sketch-clip)">
              <path d={svgPaths.p10d35300} fill="black" />
              <path d={svgPaths.p39deba00} fill="black" />
              <path d={svgPaths.p3ff04340} fill="black" />
            </g>
            <defs>
              <clipPath id="contact-sketch-clip">
                <rect fill="white" height="368.426" width="693.652" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
          <div>
            <h3
              className="text-[#1e1e1e] mb-4 uppercase"
              style={macaHeadingMd}
            >
              Endereço
            </h3>
            <p
              className="text-black leading-relaxed"
              style={gothamBody}
            >
              Rua Ferreira de Araújo, 320 e 322
              <br />
              Pinheiros, São Paulo, SP
            </p>
          </div>

          <div>
            <h3
              className="text-[#1e1e1e] mb-4 uppercase"
              style={macaHeadingMd}
            >
              Horários
            </h3>
            <p
              className="text-black leading-relaxed"
              style={gothamBody}
            >
              Segunda a sexta: 7h às 23h
              <br />
              Sábados, domingos e feriados: 7h às 22h
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] overflow-hidden w-full aspect-[1320/458] shadow-md">
          <iframe
            title="Localização Gael Restaurante"
            src="https://www.google.com/maps?q=Rua+Ferreira+de+Araújo,+320,+Pinheiros,+São+Paulo,+SP,+Brasil&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
