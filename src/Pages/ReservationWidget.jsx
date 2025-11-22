import React, { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
const availabilityData = [
  {
    date: "Sat, 22 Nov",
    slots: [
      { time: "12:00", label: "Brunch at Tattu" },
      { time: "12:00", label: "Yang" },
      { time: "12:00", label: "Yin" },
      { time: "12:15", label: "Brunch at Tattu" },
      { time: "12:15", label: "Yang" },
    ],
  },
  {
    date: "Sun, 23 Nov",
    slots: [
      { time: "12:00", label: "Yang" },
      { time: "12:00", label: "Yin" },
      { time: "12:15", label: "Yang" },
      { time: "12:15", label: "Yin" },
      { time: "12:30", label: "Yang" },
    ],
  },
  {
    date: "Mon, 24 Nov",
    slots: [
      { time: "12:00", label: "Yin" },
      { time: "12:15", label: "Yin" },
      { time: "12:30", label: "Yin" },
      { time: "12:45", label: "Yin" },
      { time: "13:00", label: "Yin" },
    ],
  },
  {
    date: "Tue, 25 Nov",
    slots: [
      { time: "12:00", label: "Yin" },
      { time: "12:15", label: "Yin" },
      { time: "12:30", label: "Yin" },
      { time: "12:45", label: "Yin" },
      { time: "13:00", label: "Yin" },
    ],
  },
];

const FilterButton = ({ label, value, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-start justify-center w-full h-14 px-4 border rounded-sm transition-colors relative ${
      isActive
        ? "border-black ring-1 ring-black z-20 bg-white"
        : "border-gray-300 bg-white hover:border-gray-400"
    }`}
  >
    <span className="text-[10px] text-gray-500 uppercase tracking-wide">
      {label}
    </span>
    <div className="flex items-center justify-between w-full">
      <span className="text-sm font-medium text-gray-900">{value}</span>
      <ChevronDown
        size={16}
        className={`text-gray-500 transition-transform ${
          isActive ? "rotate-180" : ""
        }`}
      />
    </div>
  </button>
);

const TimeSlot = ({ time, label }) => (
  <button className="flex flex-col items-center justify-center w-full py-3 border border-gray-800 rounded-sm hover:bg-black hover:text-white transition-colors group">
    <span className="text-sm font-bold mb-1">{time}</span>
    <span className="text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-gray-300">
      {label}
    </span>
  </button>
);

const ReservationWidget = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState("All Times");
  const [date, setDate] = useState("Today, 21 Nov");

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
        .font-sans { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="h-48 md:h-64 w-full bg-gray-900 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
          alt="Restaurant Interior"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-30 mb-8 shadow-sm">
            <div className="relative">
              <FilterButton
                label="Guests"
                value={guests}
                isActive={activeDropdown === "guests"}
                onClick={() => toggleDropdown("guests")}
              />

              {activeDropdown === "guests" && (
                <div className="absolute top-full left-0 w-full md:w-64 bg-white border border-gray-200 shadow-xl max-h-60 overflow-y-auto mt-1 rounded-sm z-40 animate-in fade-in zoom-in-95 duration-100">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setGuests(num);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-6 py-3 hover:bg-gray-100 text-sm font-medium"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <FilterButton
                label="Time"
                value={time}
                isActive={activeDropdown === "time"}
                onClick={() => toggleDropdown("time")}
              />

              {activeDropdown === "time" && (
                <div className="absolute top-full left-0 w-full md:w-72 bg-white border border-gray-200 shadow-xl h-96 flex flex-col mt-1 rounded-sm z-40 animate-in fade-in zoom-in-95 duration-100">
                  <div className="p-3 border-b flex justify-between items-center bg-gray-50">
                    <span className="font-bold text-sm">Time</span>
                    <button onClick={() => setActiveDropdown(null)}>
                      <X size={16} />
                    </button>
                  </div>
                  <div className="overflow-y-auto flex-1 p-2">
                    <button
                      onClick={() => {
                        setTime("All Times");
                        setActiveDropdown(null);
                      }}
                      className="w-full py-2 px-4 text-left font-bold border border-black mb-2 rounded-sm"
                    >
                      All Times
                    </button>
                    {[
                      "12:00",
                      "12:30",
                      "13:00",
                      "13:30",
                      "14:00",
                      "14:30",
                      "15:00",
                      "15:30",
                      "16:00",
                      "16:30",
                      "17:00",
                      "17:30",
                      "18:00",
                      "18:30",
                      "19:00",
                      "19:30",
                    ].map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setTime(t);
                          setActiveDropdown(null);
                        }}
                        className="w-full py-2 px-4 text-left hover:bg-gray-100 text-sm"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <div className="p-3 border-t bg-gray-50">
                    <button className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-wider rounded-sm">
                      Search All Times
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <FilterButton
                label="Date"
                value={date}
                isActive={activeDropdown === "date"}
                onClick={() => toggleDropdown("date")}
              />

              {activeDropdown === "date" && (
                <div className="absolute top-full right-0 md:left-0 w-full md:w-[600px] bg-white border border-gray-200 shadow-xl mt-1 rounded-sm z-40 p-4 animate-in fade-in zoom-in-95 duration-100">
                  <div className="flex justify-between items-center mb-4">
                    <button className="p-1 border rounded hover:bg-gray-100">
                      <ChevronLeft size={16} />
                    </button>
                    <div className="flex gap-8 font-bold text-sm">
                      <span>November 2025</span>
                      <span className="hidden md:block">December 2025</span>
                    </div>
                    <button className="p-1 border rounded hover:bg-gray-100">
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="grid grid-cols-7 text-center text-[10px] text-gray-500 mb-2">
                        <div>Su</div>
                        <div>Mo</div>
                        <div>Tu</div>
                        <div>We</div>
                        <div>Th</div>
                        <div>Fr</div>
                        <div>Sa</div>
                      </div>
                      <div className="grid grid-cols-7 text-center text-sm gap-y-2">
                        <div className="col-span-6"></div>
                        <div className="p-1 hover:bg-gray-100 cursor-pointer">
                          1
                        </div>
                        {[
                          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                          17, 18, 19, 20,
                        ].map((d) => (
                          <div
                            key={d}
                            className="p-1 hover:bg-gray-100 cursor-pointer text-gray-400"
                          >
                            {d}
                          </div>
                        ))}
                        <div className="p-1 bg-black text-white rounded-sm cursor-pointer font-bold">
                          21
                        </div>
                        {[22, 23, 24, 25, 26, 27, 28, 29, 30].map((d) => (
                          <div
                            key={d}
                            onClick={() => {
                              setDate(`Today, ${d} Nov`);
                              setActiveDropdown(null);
                            }}
                            className="p-1 hover:bg-gray-100 cursor-pointer font-medium"
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <div className="grid grid-cols-7 text-center text-[10px] text-gray-500 mb-2">
                        <div>Su</div>
                        <div>Mo</div>
                        <div>Tu</div>
                        <div>We</div>
                        <div>Th</div>
                        <div>Fr</div>
                        <div>Sa</div>
                      </div>
                      <div className="grid grid-cols-7 text-center text-sm gap-y-2">
                        <div className="col-span-1"></div>
                        {[
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                          17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                          30, 31,
                        ].map((d) => (
                          <div
                            key={d}
                            className="p-1 hover:bg-gray-100 cursor-pointer font-medium"
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-4 text-center text-xs text-gray-500">
              We are closed on Fri, 21 Nov. Book one of these upcoming dates.
            </div>

            {availabilityData.map((day, index) => (
              <div key={index} className="border-b pb-8 last:border-0">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-sm underline underline-offset-4 decoration-gray-300 decoration-1">
                    {day.date}
                  </h3>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-black">
                      <ChevronLeft size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-black">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {day.slots.map((slot, i) => (
                    <TimeSlot key={i} time={slot.time} label={slot.label} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-80 shrink-0">
          <div className="sticky top-8">
            <h2 className="text-xl font-bold mb-4">Milano Bistro</h2>

            <div className="space-y-4 text-xs text-gray-600 leading-relaxed mb-6">
              <p>
                Situated in the heart of Kano, in what was once the basement of
                the Grand Hotel.
              </p>
              <p>
                Interpreting our 'Modern Chinese' concept into this special
                building allowed us to look at new avenues of design and led to
                the exploration of the ancient Chinese philosophy of Yin Yang...
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View More
              </a>
            </div>

            <div className="w-full h-40 bg-gray-200 rounded-md overflow-hidden relative mb-4 group cursor-pointer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.78528039638!2d8.560214373754851!3d11.989354188242956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81006ccd58b5%3A0x22139d6704c7add!2sMilano%20bistro!5e0!3m2!1sen!2sng!4v1763761532074!5m2!1sen!2sng"
                title="Milano Bistro Map"
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-3 py-1 rounded shadow text-xs font-bold flex items-center gap-1 text-blue-600">
                  <MapPin size={12} /> View larger map
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500">
              <p>No 8 Lafiya Road Nassarawa GRA Kano,</p>
              <p>09033333302</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationWidget;
