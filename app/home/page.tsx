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
          as Administrator, Network Designer, and Creative Maker
          located in Tangerang-Indonesia, looking for working around the globe.
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold w-fit hover:bg-pink-700 transition">
          Download CV
        </button>
      </div>
      {/* Kanan: Gambar */}
      <div className="flex-1 flex justify-center items-end relative min-h-[600px]">
        {/* Coretan SVG di belakang gambar */}
        <svg
          className="absolute w-[480px] h-[540px] left-1/2 -translate-x-1/2 bottom-0 z-0"
          viewBox="0 0 480 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 120 Q240 20 420 120 Q480 270 240 520 Q0 270 60 120 Z"
            fill="#e5e7eb"
            opacity="0.6"
          />
        </svg>
        {/* Gambar profil tanpa border, besar dan rata bawah */}
        <img
          src="/profile.png"
          alt="Profile"
          className="w-[420px] h-[520px] object-cover grayscale relative z-10"
        />
      </div>
    </main>
  );
}