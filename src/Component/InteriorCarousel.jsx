import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
// import c1 from "../assets/c1.jpg";
// import c2 from "../assets/c2.jpg";
// import c3 from "../assets/c3.jpg";
// import c4 from "../assets/c4.jpg";

const carouselImages = [
  {
    id: 1,
    img: "https://tattu.co.uk/wp-content/uploads/2022/10/Tattu-Birmingham-Bar-1-1500x900.jpg",
    alt: "Restaurant booth interior",
  },
  {
    id: 2,
    img: "https://tattu.co.uk/wp-content/uploads/2024/03/Tattu-Birmingham-Booth-area-1500x900.jpg",
    alt: "Dining area detail",
  },
  {
    id: 3,
    img: "https://tattu.co.uk/wp-content/uploads/2024/03/Birmingham-P10457-488-Final-Web-Use-JPG-2-1500x900.jpg",
    alt: "Bar area atmosphere",
  },
  {
    id: 4,
    img: "https://tattu.co.uk/wp-content/uploads/2022/10/P10609-199-1500x900.jpg",
    alt: "Bar area atmosphere",
  },
];

const InteriorCarousel = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0f3a2c]">
      <style jsx global>{`
        /* Custom Diamond Pagination Styles */
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: transparent !important;
          border: 1px solid white !important;
          opacity: 1 !important;
          border-radius: 0 !important;
          transform: rotate(45deg) !important;
          margin: 0 8px !important;
          transition: all 0.3s ease;
        }

        /* The active bullet gets filled white */
        .swiper-pagination-bullet-active {
          background: white !important;
        }

        /* Petal Animations (reused for consistency) */
        @keyframes driftSoft {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(10px, 15px) rotate(5deg);
          }
        }
        @keyframes driftWide {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-15px, 25px) rotate(-10deg);
          }
        }
      `}</style>

      <Swiper
        spaceBetween={0}
        effect={"fade"}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="h-full w-full"
      >
        {carouselImages.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-black/40 z-10"></div>

              <img
                src={slide.img}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="pointer-events-none absolute left-[15%] top-[10%] z-20 opacity-80"
        style={{ animation: "driftSoft 12s ease-in-out infinite" }}
      >
        <img src={image2} alt="petal" className="w-16 rotate-12 md:w-20" />
      </div>
      <div
        className="pointer-events-none absolute bottom-[20%] right-[20%] z-20 opacity-70"
        style={{ animation: "driftWide 15s ease-in-out infinite" }}
      >
        <img src={image3} alt="petal" className="w-12 -rotate-45 md:w-16" />
      </div>

      <div className="swiper-pagination absolute bottom-8 left-1/2 z-30 flex! -translate-x-1/2 items-center justify-center pb-4"></div>
    </section>
  );
};

export default InteriorCarousel;
