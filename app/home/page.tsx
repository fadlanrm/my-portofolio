export default function HomePage() {
  return (

    <main className="max-w-7xl mx-auto flex items-center min-h-[80vh] px-8">
      {/* Kiri: Teks */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <span className="uppercase text-gray-400 tracking-widest text-sm">Hello</span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          I’m <span className="text-pink-600">Muhammad Fadlan Ramadhan</span>
        </h1>
        <p className="text-gray-600 max-w-xl">
          Administrator, Network Designer, Freelance Writer, and Creative Maker.
          <br />located in Tangerang-Indonesia, looking for working around the globe.
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold w-fit hover:bg-pink-700 transition">
          Download CV
        </button>
      </div>
      {/* Kanan: Gambar */}
      <div className="flex-1 flex justify-center items-end relative min-h-[600px]">
        {/* Abstrak: 3 kubus besar sebagai background */}
        {/* Kubus pink 1 */}
        <svg
          className="absolute left-[-60px] top-10 w-[180px] h-[180px] z-0 opacity-30"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="180" height="180" rx="32" fill="#f472b6" />
        </svg>
        {/* Kubus pink 2 */}
        <svg
          className="absolute right-[-40px] top-40 w-[140px] h-[140px] z-0 opacity-20"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="140" height="140" rx="24" fill="#f472b6" />
        </svg>
        {/* Kubus hitam transparan */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[220px] h-[220px] z-0 opacity-15"
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="220" height="220" rx="40" fill="#000000" />
        </svg>
        {/* Gambar profil tetap di atas background */}
        <img
          src="/profile.png"
          alt="Profile"
          className="w-[420px] h-[520px] object-cover grayscale relative z-10"

    <main className="max-w-7xl mx-auto min-h-[80vh] flex items-center px-8">
      {/* Kiri: Teks */}
      <div className="flex-1 flex flex-col justify-center gap-4">
        <span className="uppercase text-gray-600 tracking-widest text-sm mb-2 animate-shake-interval">
          Hello
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-2">
          I’m <span className="text-pink-600">Muhammad<br />Fadlan Ramadhan</span>
        </h1>
        <p className="text-gray-700 max-w-xl mb-4">
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
      <div className="flex-1 flex justify-center items-end relative min-h-[520px]">
        {/* Kotak & lingkaran dinamis */}
        {/* Kotak pink besar */}
        <div className="absolute left-8 top-8 w-36 h-36 rounded-xl bg-pink-400 opacity-30 z-0 animate-floatY"></div>
        {/* Kotak abu-abu besar */}
        <div className="absolute right-8 top-20 w-28 h-28 rounded-xl bg-gray-300 opacity-30 z-0 animate-floatY2"></div>
        {/* Kotak pink kecil */}
        <div className="absolute left-24 bottom-32 w-16 h-16 rounded-lg bg-pink-300 opacity-50 z-0 animate-floatY"></div>
        {/* Kotak abu-abu kecil */}
        <div className="absolute right-32 bottom-40 w-12 h-12 rounded-lg bg-gray-200 opacity-50 z-0 animate-floatY2"></div>
        {/* Lingkaran abu-abu besar */}
        <div className="absolute left-40 top-60 w-24 h-24 rounded-full bg-gray-200 opacity-40 z-0 animate-floatY"></div>
        {/* Lingkaran pink besar */}
        <div className="absolute right-24 top-8 w-20 h-20 rounded-full bg-pink-200 opacity-40 z-0 animate-floatY2"></div>
        {/* Lingkaran abu-abu kecil */}
        <div className="absolute left-56 bottom-10 w-10 h-10 rounded-full bg-gray-300 opacity-50 z-0"></div>
        {/* Lingkaran pink kecil */}
        <div className="absolute right-40 bottom-16 w-8 h-8 rounded-full bg-pink-300 opacity-50 z-0"></div>
        {/* Lingkaran pink sangat kecil */}
        <div className="absolute left-1/2 top-10 w-5 h-5 rounded-full bg-pink-400 opacity-60 z-0"></div>
        {/* Lingkaran abu-abu sangat kecil */}
        <div className="absolute right-1/2 bottom-8 w-4 h-4 rounded-full bg-gray-400 opacity-60 z-0"></div>
        {/* Gambar profil tetap di atas */}
        <img
          src="/profile.png"
          alt="Profile"
          className="w-[340px] h-[440px] object-cover grayscale relative z-10 shadow-xl"

        />
      </div>
    </main>
  );
}