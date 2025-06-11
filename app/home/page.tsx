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
        />
      </div>
    </main>
  );
}