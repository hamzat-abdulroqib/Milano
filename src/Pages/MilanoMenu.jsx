import React, { useState } from "react";
import Footer from "../Component/Footer";
import VenueSplit from "../Component/VenueSpilt";

// Placeholder images - replace these with your actual image assets
const bgImages = {
  default:
    "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3", // General moody food background
  allday:
    "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3", // Dim sum style
  sushi:
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3", // Sushi
  evening:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3", // Dark restaurant interior
  a_la_carte:
    "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3", // Plated food
  dessert:
    "https://images.unsplash.com/photo-1563729768445-494608f3d2bf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3", // Dessert
};

const menuItems = [
  { id: 1, title: "All Day Set Menu", imageKey: "allday", link: "#" },
  { id: 2, title: "Sushi", imageKey: "sushi", link: "#" },
  { id: 3, title: "Evening Menu", imageKey: "evening", link: "#" },
  { id: 4, title: "A La Carte", imageKey: "a_la_carte", link: "#" },
  { id: 5, title: "Desserts", imageKey: "dessert", link: "#" },
];

const MilanoMenu = () => {
  const [currentBg, setCurrentBg] = useState(bgImages.default);

  React.useEffect(() => {
    Object.values(bgImages).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center transition-all duration-700 ease-in-out scale-105"
        style={{ backgroundImage: `url(${currentBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="pointer-events-none absolute top-20 left-10 z-20 h-12 w-12 rotate-45 rounded-tl-3xl rounded-br-3xl bg-blue-500/60 blur-sm hidden md:block animate-pulse"></div>
      <div className="pointer-events-none absolute top-10 right-20 z-20 h-16 w-16 -rotate-12 rounded-tr-3xl rounded-bl-3xl bg-blue-400/50 blur-md hidden md:block"></div>

      <div className="relative z-10 flex h-screen flex-col items-center justify-between py-8 px-4">
        <header className="flex flex-col items-center space-y-10 text-center">
          <h1 className="text-2xl font-light tracking-[0.3em] uppercase md:text-3xl">
            M I L A N O
          </h1>
          <h2 className="text-xs font-medium tracking-widest uppercase text-gray-300 md:text-sm">
            Milano Menus
          </h2>
        </header>

        <main className="flex flex-col items-center justify-center space-y-2 text-center">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group relative block p-2"
              onMouseEnter={() => setCurrentBg(bgImages[item.imageKey])}
              onMouseLeave={() => setCurrentBg(bgImages.default)}
            >
              <span className="font-serif text-2xl font-light group-hover:font-bold text-gray-200 transition-all duration-300 group-hover:text-white md:text-3xl lg:text-4xl">
                {item.title}
              </span>
            </a>
          ))}
        </main>
      </div>
      <VenueSplit />
      <Footer />
    </div>
  );
};

export default MilanoMenu;
