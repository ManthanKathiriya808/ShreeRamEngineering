const HeroSection = () => {
  return (
    <section
      className="relative  h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://unitekvalves.com/img/sections/slider/valves-manufacturer.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 "></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
         Industrial Valves
        </h1>
        <p className="mb-6">
          Ullamcorper fring tortor consec adipis elit sed do eiusmod tempor.
        </p>
        <button className="bg-[var(--blue)] px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-500 transition">
          Check Our Valves →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
