import React, { useState } from "react";

const TatuHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 font-sans text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://tattu.co.uk/wp-content/uploads/2023/11/P10631-039-2-1500x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="absolute top-8 left-1/2 z-20 -translate-x-1/2 text-center">
        <h1 className="text-2xl md:text-3xl font-light uppercase tracking-[0.5em] md:tracking-[0.8em] text-white drop-shadow-lg">
          M I L A N O
        </h1>
      </div>

      <div
        className={`fixed inset-0 z-30 flex items-center justify-center bg-black/95 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-8 text-center text-2xl font-light uppercase tracking-widest text-white">
          <li>
            <a href="#" className="hover:text-gray-400">
              Locations
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Our Story
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Careers
            </a>
          </li>
        </ul>
      </div>

      <div className="fixed bottom-8 left-1/2 z-50 w-[90%] max-w-[400px] -translate-x-1/2 transform">
        <div className="flex items-center justify-between rounded-sm bg-[#e0e0e0] px-6 py-4 shadow-2xl transition-transform hover:-translate-y-1">
          <button className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600">
            Menus
          </button>

          <button
            onClick={toggleMenu}
            className="group flex h-4 w-6 flex-col justify-between cursor-pointer"
          >
            <span
              className={`h-px w-full bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-px w-full bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-px w-full bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            ></span>
          </button>

          <button className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TatuHero;
