function Newsletter() {
  return (
    <>
      <section className="relative w-full py-24 px-6 md:px-16 bg-[#ebdcd9] text-[#0f3a2c] overflow-hidden">
        <FloatingPetal
          className="top-10 left-[20%] w-16 md:w-20 rotate-12"
          animation="floatTwo 14s ease-in-out infinite"
        />
        <FloatingPetal
          className="top-20 right-[20%] w-16 md:w-24 -rotate-12"
          animation="floatOne 16s ease-in-out infinite"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-end relative z-10">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
              Please sign up for exclusive updates.
            </h2>

            <div className="flex items-center gap-3 mt-8">
              <input
                type="checkbox"
                id="privacy"
                className="w-5 h-5 border border-[#0f3a2c] bg-transparent rounded-sm cursor-pointer accent-[#0f3a2c]"
              />
              <label
                htmlFor="privacy"
                className="text-sm md:text-base font-light"
              >
                I agree to the <u className="cursor-pointer">privacy policy</u>{" "}
                & opt in to marketing
              </label>
            </div>
          </div>

          <div className="w-full">
            <div className="relative w-full group">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-[#0f3a2c] py-4 font-serif text-5xl md:text-7xl placeholder-[#0f3a2c] focus:outline-none focus:border-b-2 transition-all"
              />

              <button className="absolute right-0 bottom-6 text-[#0f3a2c] hover:translate-x-2 transition-transform">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
