import React from "react";

const Findus = () => {
  return (
    <section className="w-full bg-black text-white py-20 md:py-32 flex flex-col items-center justify-center px-4 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Montserrat:wght@300;400;700&display=swap');
        .font-serif-display { font-family: 'Italiana', serif; }
        .font-sans-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="text-center mb-12">
        <h4 className="font-sans-body text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-gray-300 mb-4">
          Location
        </h4>
        <h2 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-none">
          Find Us
        </h2>
      </div>

      <div className="relative w-full max-w-6xl h-[400px] md:h-[500px] bg-[#F0F0F0] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.78528039638!2d8.560214373754851!3d11.989354188242956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81006ccd58b5%3A0x22139d6704c7add!2sMilano%20bistro!5e0!3m2!1sen!2sng!4v1763761532074!5m2!1sen!2sng"
          title="Tattu Birmingham Map"
          className="w-full h-full block opacity-80 hover:opacity-100 transition-opacity duration-500"
          style={{ border: 0, filter: "grayscale(100%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black z-10">
          <span className="font-serif-display text-4xl md:text-6xl font-bold">
            T
          </span>
        </div>
      </div>
    </section>
  );
};

export default Findus;
