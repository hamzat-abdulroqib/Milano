import React from "react";

import image1 from "../assets/1.png";

const MilaonVenueSection = () => {
  return (
    <div className="bg-black text-white font-sans milano">
      <section className="relative w-full py-20 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <Petal className="top-10 left-10 w-12 h-12 md:w-16 md:h-16 animate-float-1" />
        <Petal
          className="top-1/4 right-20 w-8 h-8 md:w-12 md:h-12 animate-float-2"
          style={{ animationDelay: "-5s" }}
        />
        <Petal
          className="bottom-20 left-1/3 w-10 h-10 md:w-14 md:h-14 animate-float-3"
          style={{ animationDelay: "-2s" }}
        />
        <Petal
          className="bottom-10 right-10 w-16 h-16 md:w-24 md:h-24 animate-float-1"
          style={{ animationDelay: "-7s", transform: "rotate(90deg)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h4 className="font-sans-body text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">
            Private Hire
          </h4>

          <h2 className="font-serif-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-10">
            Opulent surroundings suitable for a range of events and exclusive
            private hires.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#">View Brochure</Button>
            <Button href="#">Enquire</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const Petal = ({ className, style }) => (
  <div
    className={`absolute bg-contain bg-no-repeat bg-center opacity-80 ${className}`}
    style={{
      backgroundImage: `url(${image1})`,
      ...style,
    }}
  />
);

const Button = ({ href, children }) => (
  <a
    href={href}
    className="font-sans-body bg-[#E8E8E8] text-[#1A1A1A] text-xs md:text-sm font-medium uppercase tracking-wider py-3 px-8 rounded-sm hover:bg-white transition-colors duration-300"
  >
    {children}
  </a>
);

export default MilaonVenueSection;
