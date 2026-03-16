// import imgFraldinha1 from "figma:asset/b9881d13a823a6b975fc297ca9989bdc30e449fb.png";
// import imgRisotoComMignonAug231 from "figma:asset/512fad10318337c01802eef32de27f9bb9d9c528.png";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gray-800">
      {/* <div className="absolute inset-0 z-0">
        <img src={imgFraldinha1} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 z-[1]">
        <img src={imgRisotoComMignonAug231} alt="Prato do Gael" className="w-full h-full object-cover object-center" />
      </div> */}
      <div className="absolute inset-0 z-[2] bg-[rgba(30,30,30,0.37)]" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pb-24 pt-36">
        <h1
          className="text-white text-center max-w-4xl mx-auto"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            fontWeight: 700,
            fontStyle: "italic",
            lineHeight: 1.1,
          }}
        >
          Cozinha autoral, sem rótulos
          <br />
          e no ritmo da cidade
        </h1>

        <div className="mt-12 flex flex-col items-center gap-2">
          <button
            onClick={() => scrollTo("contato")}
            className="text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
              fontWeight: 700,
            }}
          >
            Reserve sua mesa
          </button>
          <div className="h-px w-52 bg-white opacity-80" />
        </div>
      </div>
    </section>
  );
}
