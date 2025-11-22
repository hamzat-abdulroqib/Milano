import React from "react";
import image1 from "../assets/1.png";

const FloatingPetal = ({ className, animation }) => (
  <div
    className={`pointer-events-none absolute z-10 opacity-80 ${className}`}
    style={{ animation }}
  >
    <img
      src={image1}
      alt="Blue Petal"
      className="w-full h-full object-contain"
    />
  </div>
);

const TattuSections = () => {
  return (
    <div className="w-full font-sans">
      <style>{`
        @keyframes floatOne {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(15px, -15px) rotate(10deg); }
        }
        @keyframes floatTwo {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-10px, 20px) rotate(-5deg); }
        }
      `}</style>

      <section className="relative w-full py-24 px-6 md:py-32 bg-[#0f3a2c] text-white overflow-hidden">
        <FloatingPetal
          className="bottom-0 left-0 w-24 md:w-40"
          animation="floatOne 12s ease-in-out infinite"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h6 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 text-gray-300">
            The Venue
          </h6>

          <h2 className="font-serif text-4xl md:text-2xl lg:text-3xl leading-tight mb-12">
            Situated in the heart of Birmingham,
            <br className="hidden md:block" />
            in what was once the basement of
            <br className="hidden md:block" />
            the Grand Hotel.
          </h2>

          <div className="max-w-2xl mx-auto text-xs md:text-sm leading-relaxed text-gray-200 mb-12 space-y-6 font-light tracking-wide">
            <p>
              Interpreting our ‘Modern Asian’ concept into this special building
              allowed us to look at new avenues of design and led to the
              exploration of the ancient Chinese philosophy of Yin Yang, the
              blending of contrary forces to create harmony.
            </p>
            <p>
              Yin is the dark element linked with femininity, shadows, and
              water. Much like all Tattu interiors, our main restaurant
              downstairs represents ‘Yin’, it is detailed in feminine finishes,
              including our salvaged cherry trees that are brought back to life
              by hand to create a canopy of blossom throughout the space.
            </p>
            <p>
              Our traditional wooden fretwork and carefully styled lighting
              casts shadows and creates the effect of waterfalls down our
              granite walls. Yang is the light element linked with masculinity,
              growth, and fire. This new design is featured in our ground floor
              bar and dining areas.
            </p>
          </div>

          <button className="bg-white text-[#0f3a2c] px-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            View our 3D Walkthrough
          </button>
        </div>
      </section>
    </div>
  );
};

export default TattuSections;
