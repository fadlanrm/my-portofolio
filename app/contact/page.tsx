export default function ContactPage() {
  return (
    <main className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-white overflow-hidden">
      {/* SVG Abstract Lines Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <polyline
          points="0,900 300,600 600,100 1200,0"
          stroke="#f472b6"
          strokeWidth="3"
          strokeOpacity="0.11"
          fill="none"
          style={{
            strokeDasharray: 2000,
            strokeDashoffset: 2000,
            animation: "dash-move 4s linear infinite"
          }}
        />
        <polyline
          points="1440,900 1140,600 900,100 300,0"
          stroke="#f472b6"
          strokeWidth="3"
          strokeOpacity="0.11"
          fill="none"
          style={{
            strokeDasharray: 2000,
            strokeDashoffset: 2000,
            animation: "dash-move 4s linear infinite"
          }}
        />
        <polyline
          points="0,900 400,700 800,200 1440,0"
          stroke="#444"
          strokeWidth="2"
          strokeOpacity="0.11"
          fill="none"
          style={{
            strokeDasharray: 2000,
            strokeDashoffset: 2000,
            animation: "dash-move 4s linear infinite"
          }}
        />
      </svg>

      {/* Main Content with blurred glass background */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto">
        <div className="backdrop-blur-md bg-white/70 rounded-2xl shadow-lg px-8 py-10 w-full">
          <h2 className="text-2xl font-bold mb-6 text-center animate-shake-interval delay-0">
            Contact Details
          </h2>
          <div className="font-semibold text-center mb-8">Looking forward to working with me!</div>
          <div className="flex flex-col gap-7">
            {/* Email */}
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-8 h-8">
                {/* Envelope SVG */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#000" strokeWidth="2" d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zm0 0 9 6 9-6" /></svg>
              </span>
              <div className="flex flex-col">
                <span className="text-black text-sm">fadlanmuhammad163@gmail.com</span>
                <a
                  href="mailto:fadlanmuhammad163@gmail.com"
                  className="inline-block mt-1 bg-pink-400 text-white text-xs px-5 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-fit"
                >
                  EMAIL
                </a>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-8 h-8">
                {/* Custom Phone SVG agar sejajar */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="6" width="4" height="4" rx="1" stroke="#000" strokeWidth="2" />
                  <rect x="4" y="14" width="4" height="4" rx="1" stroke="#000" strokeWidth="2" />
                  <rect x="16" y="6" width="4" height="4" rx="1" stroke="#000" strokeWidth="2" />
                  <rect x="16" y="14" width="4" height="4" rx="1" stroke="#000" strokeWidth="2" />
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-black text-sm">+62 889-212-7289</span>
                <a
                  href="tel:+628892127289"
                  className="inline-block mt-1 bg-pink-400 text-white text-xs px-5 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-fit"
                >
                  PHONE
                </a>
              </div>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-8 h-8">
                {/* LinkedIn SVG */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="#000" strokeWidth="2" />
                  <path stroke="#000" strokeWidth="2" d="M7 10v6m0-6V8a1 1 0 1 1 2 0v2m0 0v6m4-6v6m0-6a2 2 0 0 1 4 0v6" />
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-black text-sm">https://www.linkedin.com/in/fadlanrm/</span>
                <a
                  href="https://www.linkedin.com/in/fadlanrm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 bg-pink-400 text-white text-xs px-5 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-fit"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}