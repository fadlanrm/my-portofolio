export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto min-h-[80vh] flex flex-col md:flex-row items-center gap-8 px-4 md:px-8">
      {/* Kiri: Teks */}
      <div className="flex-1 flex flex-col justify-center gap-4 w-full md:w-auto">
        <span className="uppercase text-gray-600 tracking-widest text-sm mb-2 animate-shake-interval">
          Hello
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-tight mb-2">
          I’m <span className="text-pink-600">Muhammad<br />Fadlan Ramadhan</span>
        </h1>
        <p className="text-gray-700 max-w-xl mb-4 text-base sm:text-lg">
          Administrator, Network Designer, Freelance Writer, and Creative Maker.<br />
          located in Tangerang-Indonesia, looking for working around the globe.
        </p>
        <a
          href="/cv.pdf"
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold w-fit transition mb-2"
        >
          Download CV
        </a>
      </div>
      {/* Kanan: Gambar & Abstrak */}
      <div className="flex-1 flex justify-center items-end relative min-h-[320px] md:min-h-[520px] w-full md:w-auto">
        {/* Kotak & lingkaran dinamis */}
        <div className="absolute left-2 top-2 w-20 h-20 md:left-8 md:top-8 md:w-36 md:h-36 rounded-xl bg-pink-400 opacity-30 z-0 animate-floatY"></div>
        <div className="absolute right-2 top-10 w-16 h-16 md:right-8 md:top-20 md:w-28 md:h-28 rounded-xl bg-gray-300 opacity-30 z-0 animate-floatY2"></div>
        <div className="absolute left-8 bottom-16 w-10 h-10 md:left-24 md:bottom-32 md:w-16 md:h-16 rounded-lg bg-pink-300 opacity-50 z-0 animate-floatY"></div>
        <div className="absolute right-12 bottom-20 w-8 h-8 md:right-32 md:bottom-40 md:w-12 md:h-12 rounded-lg bg-gray-200 opacity-50 z-0 animate-floatY2"></div>
        <div className="absolute left-16 top-32 w-10 h-10 md:left-40 md:top-60 md:w-24 md:h-24 rounded-full bg-gray-200 opacity-40 z-0 animate-floatY"></div>
        <div className="absolute right-8 top-4 w-8 h-8 md:right-24 md:top-8 md:w-20 md:h-20 rounded-full bg-pink-200 opacity-40 z-0 animate-floatY2"></div>
        <div className="absolute left-24 bottom-4 w-6 h-6 md:left-56 md:bottom-10 md:w-10 md:h-10 rounded-full bg-gray-300 opacity-50 z-0"></div>
        <div className="absolute right-16 bottom-8 w-4 h-4 md:right-40 md:bottom-16 md:w-8 md:h-8 rounded-full bg-pink-300 opacity-50 z-0"></div>
        <div className="absolute left-1/2 top-4 w-3 h-3 md:top-10 md:w-5 md:h-5 rounded-full bg-pink-400 opacity-60 z-0"></div>
        <div className="absolute right-1/2 bottom-2 w-2 h-2 md:bottom-8 md:w-4 md:h-4 rounded-full bg-gray-400 opacity-60 z-0"></div>
        {/* Gambar profil tetap di atas */}
        <img
          src="/profile.png"
          alt="Profile"
          className="w-48 h-60 md:w-[340px] md:h-[440px] object-cover grayscale relative z-10 shadow-xl"
        />
      </div>
    </main>
  );
}