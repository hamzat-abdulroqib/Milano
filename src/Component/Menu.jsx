import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Montserrat:wght@300;400;700&display=swap');
        .font-serif-display { font-family: 'Italiana', serif; }
        .font-sans-body { font-family: 'Montserrat', sans-serif; }

        @keyframes float-slow {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(20px, -30px) rotate(10deg); }
        }
        @keyframes float-medium {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-15px, 20px) rotate(-15deg); }
        }
      `}</style>

      <section className="relative h-[70vh] md:h-screen w-full overflow-hidden bg-black font-sans text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://tattu.co.uk/wp-content/uploads/2023/12/Tattu-London-March-Menu-8694-1200x1315.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
          <h4 className="font-sans-body mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-200 md:text-sm">
            Our Menus
          </h4>

          <h2 className="font-serif-display mb-12 text-5xl leading-none text-white md:text-7xl lg:text-8xl">
            À La Carte
          </h2>

          <Link
            to="milano"
            className="font-sans-body rounded-sm bg-[#E8E8E8] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] transition-colors hover:bg-white md:text-sm"
          >
            View All Menus
          </Link>
        </div>

        <div
          className="pointer-events-none absolute left-[10%] top-[10%] z-10 h-16 w-16 opacity-80 md:h-24 md:w-24"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            animation: "float-slow 15s ease-in-out infinite",
          }}
        />

        <div
          className="pointer-events-none absolute right-[15%] bottom-[20%] z-10 h-12 w-12 opacity-70 md:h-20 md:w-20"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            animation: "float-medium 12s ease-in-out infinite",
            transform: "rotate(90deg)",
          }}
        />
      </section>

      <section className="relative h-[70vh] md:h-screen w-full overflow-hidden bg-black font-sans text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://tattu.co.uk/wp-content/uploads/2025/01/Celestial-Dragon-1200x1799.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
          <h4 className="font-sans-body mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-200 md:text-sm">
            Our Menus
          </h4>

          <h2 className="font-serif-display mb-12 text-5xl leading-none text-white md:text-7xl lg:text-8xl">
            Drinks
          </h2>

          <Link
            to="/milano"
            className="font-sans-body rounded-sm bg-[#E8E8E8] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] transition-colors hover:bg-white md:text-sm"
          >
            View All Menus
          </Link>
        </div>

        <div
          className="pointer-events-none absolute left-[10%] top-[10%] z-10 h-16 w-16 opacity-80 md:h-24 md:w-24"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            animation: "float-slow 15s ease-in-out infinite",
          }}
        />

        <div
          className="pointer-events-none absolute right-[15%] bottom-[20%] z-10 h-12 w-12 opacity-70 md:h-20 md:w-20"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            animation: "float-medium 12s ease-in-out infinite",
            transform: "rotate(90deg)",
          }}
        />
      </section>
    </div>
  );
};

export default Menu;
