// import imgRectangle3 from "figma:asset/2652d39d1070a50d42015155a64100e6eef9b7b6.png";

export function ContactSection() {
  return (
    <section id="contato" className="bg-[#f5e6dd] relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
          <div>
            <h3
              className="text-[#1e1e1e] mb-4 uppercase"
              style={{
                fontFamily: "'Maca'",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 700,
              }}
            >
              Endereço
            </h3>
            <p
              className="text-black leading-relaxed"
              style={{
                fontFamily: "'Gotham'",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              }}
            >
              Rua Ferreira de Araújo, 320 e 322
              <br />
              Pinheiros, São Paulo, SP
            </p>
          </div>

          <div>
            <h3
              className="text-[#1e1e1e] mb-4 uppercase"
              style={{
                fontFamily: "'Maca'",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 700,
              }}
            >
              Horários
            </h3>
            <p
              className="text-black leading-relaxed"
              style={{
                fontFamily: "'Gotham'",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              }}
            >
              Segunda a sexta: 7h às 23h
              <br />
              Sábados, domingos e feriados: 7h às 22h
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] overflow-hidden w-full aspect-[16/7] shadow-md">
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
