import React from "react";

const Booking = () => {
  return (
    <section className="relative w-full bg-black py-24 px-6 md:py-40 flex flex-col items-center justify-center text-center font-sans text-white booking">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Montserrat:wght@300;400;700&display=swap');
        .font-serif-display { font-family: 'Italiana', serif; }
        .font-sans-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <h4 className="font-sans-body mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-300 md:text-xs md:mb-8">
        Bookings
      </h4>

      <h2 className="font-serif-display mx-auto mb-12 max-w-4xl text-4xl leading-none md:text-7xl lg:text-8xl">
        Book your modern Asian experience at Tattu Birmingham
      </h2>

      <a
        href="#"
        className="font-sans-body inline-block rounded-sm bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-gray-200 md:text-sm"
      >
        Click Here to Book
      </a>
    </section>
  );
};

export default Booking;
