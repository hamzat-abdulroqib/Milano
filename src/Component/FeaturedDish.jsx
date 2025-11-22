import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";

const FeaturedDish = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black font-sans">
      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, -20px) rotate(8deg);
          }
        }
        @keyframes floatMedium {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-15px, 25px) rotate(-10deg);
          }
        }
      `}</style>

      <div
        className="relative min-h-[60vh] w-full bg-cover bg-center md:h-screen"
        style={{
          backgroundImage: `url('https://tattu.co.uk/wp-content/uploads/2024/10/O.K-SPICED-PORK-BELLY-September-2024-7-1500x900.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div
          className="pointer-events-none absolute left-[5%] top-[40%] z-10 opacity-90 md:left-[15%]"
          style={{ animation: "floatMedium 16s ease-in-out infinite" }}
        >
          <img
            src={image1}
            alt="Blue Petal"
            className="w-20 -rotate-12 md:w-32"
          />
        </div>

        <div
          className="pointer-events-none absolute right-[8%] top-[10%] z-10 opacity-85 md:right-[20%] md:top-[15%]"
          style={{ animation: "floatSlow 14s ease-in-out infinite" }}
        >
          <img
            src={image2}
            alt="Blue Petal"
            className="w-16 rotate-45 md:w-24"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedDish;
