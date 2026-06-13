import { scrollTo } from "../../utils/scroll";

const imgAmbientes17 = "/images/figma/imgAmbientes17.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gray-800">
      <div className="absolute inset-0 z-0">
        <img src={imgAmbientes17} alt="Restaurante Gael" className="w-full h-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 z-[1] bg-[rgba(30,30,30,0.37)]" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pb-24 pt-36">
        <h1
          className="text-white text-center max-w-4xl mx-auto"
          style={{
            fontFamily: "'Maca'",
            fontSize: "clamp(2.5rem, 7.4vw, 6.625rem)",
            fontWeight: 700,
            lineHeight: 0.75,
          }}
        >
          Cozinha autoral, sem rótulos
          <br />
          e no seu ritmo
        </h1>

        <div className="mt-12 flex flex-col items-center gap-2">
          <button
            onClick={() => scrollTo("contato")}
            className="text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{
              fontFamily: "'Maca'",
              fontSize: "clamp(1.2rem, 2.9vw, 2.625rem)",
              fontWeight: 700,
            }}
          >
            Peça pelo Delivery
          </button>
          <div className="h-px w-52 bg-white opacity-80" />
        </div>
      </div>
    </section>
  );
}
