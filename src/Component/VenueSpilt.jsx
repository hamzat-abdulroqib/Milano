import React from "react";
import { Link } from "react-router-dom";

const GeometricBorder = ({ className }) => (
  <div className={`h-8 w-full overflow-hidden ${className}`}>
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className="h-full w-full opacity-80"
    >
      <defs>
        <pattern
          id="archPattern"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M12,0 L24,24 L0,24 Z"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="opacity-50"
          />
          <path
            d="M12,4 L20,20 L4,20 Z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-30"
          />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#archPattern)" />
    </svg>
  </div>
);

const VenueSplit = () => {
  return (
    <div className=" venue min-h-screen bg-black font-sans text-white flex flex-col items-center justify-center p-0 relative">
      <div className="w-full bg-black pb-2">
        <GeometricBorder />
      </div>

      <div className="relative flex w-full flex-col md:flex-row">
        <div className="group relative flex min-h-[50vh] w-full flex-1 flex-col items-center justify-center border-b border-white/20 bg-black px-8 py-16 text-center transition-colors md:border-b-0 md:border-r">
          <div className="z-10 flex max-w-md flex-col items-center space-y-8">
            <h3 className="font-sans-display text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
              The Venue
            </h3>

            <p className="font-serif-display text-3xl leading-tight text-white md:text-4xl lg:text-5xl italic">
              Situated in what was once Birmingham’s Grand Hotel.
            </p>

            <Link
              to="/"
              className="mt-4 inline-block bg-white px-8 py-3 text-xs font-bold tracking-widest text-black transition-transform hover:scale-105 hover:bg-gray-200 uppercase"
            >
              Find Out More
            </Link>
          </div>
        </div>

        <div className="group relative flex min-h-[50vh] w-full flex-1 flex-col items-center justify-center bg-black px-8 py-16 text-center transition-colors">
          <div className="z-10 flex max-w-md flex-col items-center space-y-8">
            <h3 className="font-sans-display text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
              Bookings
            </h3>

            <p className="font-serif-display text-3xl leading-tight text-white md:text-4xl lg:text-5xl italic">
              Ready to book your modern Asian experience?
            </p>

            <Link
              to="/reseved"
              className="mt-4 inline-block bg-white px-8 py-3 text-xs font-bold tracking-widest text-black transition-transform hover:scale-105 hover:bg-gray-200 uppercase"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-white/20 md:block"></div>
      </div>

      <div className="w-full bg-black pt-2">
        <GeometricBorder className="rotate-180" />
      </div>
    </div>
  );
};

export default VenueSplit;
