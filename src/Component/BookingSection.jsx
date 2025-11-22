import React from "react";
import { Link } from "react-router-dom";
const BookingsSection = () => {
  return (
    <section className="   bk relative w-full bg-[#0f3a2c] py-24 px-6 md:py-40 flex flex-col items-center justify-center text-center font-sans text-white">
      <h4 className="font-sans-body mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-300 md:text-xs md:mb-8">
        Bookings
      </h4>

      <h2 className="font-serif-display mx-auto mb-12 max-w-4xl text-4xl leading-none md:text-7xl lg:text-6xl">
        Book your modern Asian experience at Tattu Birmingham
      </h2>

      <Link
        to="/reseved"
        className="font-sans-body inline-block rounded-sm bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-gray-200 md:text-sm"
      >
        Click Here to Book
      </Link>
    </section>
  );
};

export default BookingsSection;
