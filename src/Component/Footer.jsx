import React from "react";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0f3a2c] text-white font-sans pt-12 pb-6">
      <div className="absolute top-0 left-0 w-full h-6 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1,20 Q20,-15 39,20' fill='none' stroke='white' stroke-width='1'/%3E%3Cpath d='M-19,20 Q0,-15 19,20' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 flex flex-col justify-center">
            <p className="font-serif italic text-4xl md:text-2xl leading-tight">
              18 Barwick Street
              <br />
              Birmingham B3 2NT
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center">
            <p className="font-serif italic text-3xl md:text-xl mb-2">
              0121 236 5556
            </p>
            <p className="font-serif italic text-3xl md:text-xl">
              birmingham@tattu.co.uk
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col md:items-start gap-4 pt-2">
            <a
              href="#"
              className="flex items-center gap-3 hover:text-gray-400 transition-colors uppercase tracking-widest text-xs font-bold"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-3 hover:text-gray-400 transition-colors uppercase tracking-widest text-xs font-bold"
            >
              <Facebook size={18} /> Facebook
            </a>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2 pt-2">
            <h4 className="uppercase tracking-widest text-xs font-bold mb-2 text-gray-400">
              Locations
            </h4>
            <ul className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Manchester
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Leeds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Birmingham
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Edinburgh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  London
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Dubai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-20">
        <div className="mb-4">
          <p className="uppercase tracking-widest text-xs font-bold">
            Monday to Sunday – 12pm Till Late /
          </p>
        </div>

        <div className="w-full h-px bg-white/30 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
          <p>Site by Persona.Studio</p>
          <p>Policies Tattu ©2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
