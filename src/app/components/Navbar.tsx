import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-oj8mr5v7qc";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const textColor = scrolled ? "text-[#1e1e1e]" : "text-white";
  const logoFill = scrolled ? "#1e1e1e" : "white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f5e6dd] shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center justify-between px-8 md:px-16">
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <button
            onClick={() => scrollTo("jeito-gael")}
            className={`font-['Cormorant_Garamond',serif] text-sm lg:text-base uppercase tracking-widest ${textColor} hover:opacity-60 transition-all`}
          >
            O Jeito Gael
          </button>
          <button
            onClick={() => scrollTo("nossa-cozinha")}
            className={`font-['Cormorant_Garamond',serif] text-sm lg:text-base uppercase tracking-widest ${textColor} hover:opacity-60 transition-all`}
          >
            Nossa Cozinha
          </button>
        </div>

        <div className="flex-1 md:flex-none flex justify-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block">
            <svg width="72" height="72" viewBox="0 0 164.27 163.455" fill="none">
              <g clipPath="url(#nav-logo-clip)">
                <path d={svgPaths.pb132580} fill={logoFill} />
                <path d={svgPaths.p32e17800} fill={logoFill} />
                <path d={svgPaths.p96cf100} fill={logoFill} />
                <path d={svgPaths.p18391dc0} fill={logoFill} />
                <path d={svgPaths.p311ba000} fill={logoFill} />
                <path d={svgPaths.p2cb1d180} fill={logoFill} />
                <path d={svgPaths.p96c1900} fill={logoFill} />
                <path d={svgPaths.p385d8380} fill={logoFill} />
                <path d={svgPaths.p1abfb7f0} fill={logoFill} />
                <path d={svgPaths.pfc60680} fill={logoFill} />
                <path d={svgPaths.p32c6cb00} fill={logoFill} />
                <path d={svgPaths.p2a667700} fill={logoFill} />
                <path d={svgPaths.p6c52900} fill={logoFill} />
                <path d={svgPaths.p3d88ed00} fill={logoFill} />
                <path d={svgPaths.p2a839400} fill={logoFill} />
                <path d={svgPaths.p18378680} fill={logoFill} />
                <path d={svgPaths.p1228c880} fill={logoFill} />
                <path d={svgPaths.p18103040} fill={logoFill} />
                <path d={svgPaths.p3844b700} fill={logoFill} />
              </g>
              <defs>
                <clipPath id="nav-logo-clip">
                  <rect fill="white" height="163.455" width="164.27" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <button
            onClick={() => scrollTo("nossa-casa")}
            className={`font-['Cormorant_Garamond',serif] text-sm lg:text-base uppercase tracking-widest ${textColor} hover:opacity-60 transition-all`}
          >
            Nossa Casa
          </button>
          <button
            onClick={() => scrollTo("contato")}
            className={`font-['Cormorant_Garamond',serif] text-sm lg:text-base uppercase tracking-widest ${textColor} hover:opacity-60 transition-all`}
          >
            Contato
          </button>
        </div>

        <button
          className={`md:hidden ${textColor} transition-all`}
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div
          className={`md:hidden ${
            scrolled ? "bg-[#f5e6dd]" : "bg-black/80"
          } py-6 flex flex-col items-center gap-5 border-t border-white/10`}
        >
          {[
            { label: "O Jeito Gael", id: "jeito-gael" },
            { label: "Nossa Cozinha", id: "nossa-cozinha" },
            { label: "Nossa Casa", id: "nossa-casa" },
            { label: "Contato", id: "contato" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-['Cormorant_Garamond',serif] text-base uppercase tracking-widest ${
                scrolled ? "text-[#1e1e1e]" : "text-white"
              } hover:opacity-60 transition-all`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
