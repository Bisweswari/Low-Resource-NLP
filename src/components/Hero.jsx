import { Link } from "react-scroll";
import { useEffect, useState } from "react";
// import ParticlesBackground from "./ParticlesBackground";

function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth > 768) {
      const handleMouseMove = (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;
        setPosition({ x, y });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden pt-20 md:pt-24 w-full"
      style={{
        backgroundImage: "url('/KIIT.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <ParticlesBackground /> */}

      {/* Professional Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-4 md:px-6 pt-20 md:pt-28 transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {/* Small Heading */}

        {/* Main Heading */}
        <h1 className="text-gray-200 text-3xl md:text-4xl font-extrabold leading-tight mb-6 animate-slideUp">
          {" "}
          5-Day Workshop on{" "}
        </h1>

        <h3 className="text-white font-extrabold tracking-[3px] md:tracking-[5px] text-3xl md:text-6xl font-bold mb-4 md:mb-6 animate-fadeIn">
          Low-Resource NLP:
          <br /> Techniques and Applications with LLMs
        </h3>

        <div className="mt-6 animate-fadeIn delay-200">
          <span
            className="inline-block px-6 py-2 
                   text-white text-lg md:text-xl font-medium
                   bg-white/[0.03] border-white/5 backdrop-blur-sm 
                   border border-white/5
                   rounded-full"
          >
            6th June – 10th June 2026 (ONLINE)
          </span>
        </div>
        {/* Button */}
        <div className="mt-10">
          <Link
            to="registration"
            smooth={true}
            duration={800}
            className="inline-block px-8 md:px-10 py-3 md:py-4 text-base md:text-lg 
                       bg-white text-black
                       rounded-full font-semibold 
                       shadow-lg hover:scale-105 
                       transition duration-300 cursor-pointer"
          >
            More Information
          </Link>
        </div>
        {/* Scroll Indicator */}
        <div className="mt-12 md:mt-16 flex flex-col items-center">
          <span className="text-gray-400 text-sm tracking-wider mb-3">
            SCROLL DOWN
          </span>

          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
