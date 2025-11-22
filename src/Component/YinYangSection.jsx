import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

const YinYangSection = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden font-sans text-white"
      style={{ backgroundColor: "#0f3a2c" }} // Your Brand Color
    >
      {/* --- CSS for Floating Animations --- */}
      <style>{`
        @keyframes floatOne {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(15px, -20px) rotate(10deg); }
            66% { transform: translate(-10px, 15px) rotate(-5deg); }
        }
        @keyframes floatTwo {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -30px) rotate(-15deg); }
        }
        @keyframes floatThree {
             0%, 100% { transform: translate(0, 0) rotate(0deg); }
             50% { transform: translate(15px, 25px) rotate(12deg); }
         }

        .animate-float-1 { animation: floatOne 14s ease-in-out infinite; }
        .animate-float-2 { animation: floatTwo 18s ease-in-out infinite; animation-delay: 1s; }
        .animate-float-3 { animation: floatThree 20s ease-in-out infinite; animation-delay: 2s; }
      `}</style>

      <div className="absolute left-[5%] top-[8%] z-0 animate-float-1 opacity-80">
        <img
          src={image1}
          alt="Petal"
          className="w-16 rotate-12 opacity-80 md:w-24"
        />
      </div>

      <div className="absolute right-[10%] top-[15%] z-0 animate-float-2 opacity-90">
        <img
          src={image2}
          alt="Petal"
          className="w-12 -rotate-45 opacity-70 md:w-20"
        />
      </div>

      <div className="absolute bottom-[15%] left-[15%] z-0 animate-float-3 opacity-85">
        <img
          src={image3}
          alt="Petal"
          className="w-24 rotate-120 opacity-60 md:w-40"
        />
      </div>

      <div className="absolute right-[30%] -top-[5%] z-0 animate-float-1 opacity-50">
        <img src={image3} alt="Petal" className="w-10 rotate-90 md:w-16" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-300 md:text-xs">
          Modern Asian Restaurant & Bar
        </h2>

        <h1 className="font-serif text-6xl italic leading-none text-white md:text-8xl lg:text-9xl">
          A Yin Yang
          <br />
          Experience
        </h1>
      </div>
    </section>
  );
};

export default YinYangSection;
