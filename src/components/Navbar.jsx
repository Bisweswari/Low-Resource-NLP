import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 
        ${
          scrolled
            ? "bg-black py-4 shadow-lg"
            : "bg-black/50 backdrop-blur-md py-3"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/kiit logo enlarged.png"
            alt="Logo"
            className={`object-contain transition-all duration-500 
              ${scrolled ? "h-12" : "h-20"}
            `}
          />
        </div>

        {/* Button */}
        <Link
          to="registration"
          smooth={true}
          duration={800}
          offset={-80}
          className={`group inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer
    ${
      scrolled
        ? "px-5 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
        : "px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-xl"
    }
  `}
        >
          KNOW MORE
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
