import React from "react";

export default function DinoFooter() {
  // Satu obstacle, sinkron dengan lompatan dino
  const obstacles = [
    { type: "rock", delay: "0s" },
    { type: "tree", delay: "3s" },
  ];

  return (
    <footer className="w-full border-t border-black bg-white py-1 mt-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex flex-col items-center">
        <div className="w-full flex justify-center items-end h-10 sm:h-14 relative">
          {/* Garis jalur */}
          <div className="absolute left-0 bottom-1 sm:bottom-2 w-full h-0.5">
            <div className="w-full h-0.5 bg-gray-300 rounded-full" />
          </div>
          {/* Obstacles berjalan */}
          {obstacles.map((obs, idx) => (
            <div
              key={idx}
              className="absolute obstacle-anim"
              style={{
                animationDelay: obs.delay,
                bottom: "0.5rem",
                zIndex: 1,
              }}
            >
              {obs.type === "rock" ? (
                <svg width="14" height="8" viewBox="0 0 28 18" fill="none">
                  <ellipse cx="14" cy="12" rx="12" ry="6" fill="#6b7280" />
                  <ellipse cx="8" cy="14" rx="4" ry="2" fill="#9ca3af" />
                </svg>
              ) : (
                <svg width="10" height="14" viewBox="0 0 22 32" fill="none">
                  <rect x="9" y="10" width="4" height="18" rx="2" fill="#4b5563" />
                  <rect x="2" y="18" width="4" height="8" rx="2" fill="#4b5563" />
                  <rect x="16" y="14" width="4" height="8" rx="2" fill="#4b5563" />
                </svg>
              )}
            </div>
          ))}
          {/* Dino Chrome-style */}
          <div className="absolute left-0 bottom-1 sm:bottom-2 w-full h-0 pointer-events-none">
            <div
              className="dino-anim w-8 sm:w-12 h-6 sm:h-8 absolute"
              style={{ animation: "dino-walk-jump 6s linear infinite" }}
            >
              <svg viewBox="0 0 88 60" fill="none" className="w-full h-full">
                <rect x="18" y="20" width="32" height="18" fill="#9ca3af" />
                <rect x="50" y="10" width="18" height="14" fill="#9ca3af" />
                <rect x="46" y="20" width="4" height="8" fill="#9ca3af" />
                <rect x="48" y="34" width="6" height="3" fill="#9ca3af" />
                <rect x="24" y="34" width="6" height="3" fill="#9ca3af" />
                <rect x="28" y="38" width="5" height="14" fill="#9ca3af" className="dino-leg dino-leg-front" />
                <rect x="40" y="38" width="5" height="14" fill="#9ca3af" className="dino-leg dino-leg-back" />
                <rect x="10" y="32" width="12" height="4" fill="#9ca3af" transform="rotate(-20 10 32)" />
                <rect x="62" y="14" width="2" height="2" fill="#222" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        /* Dino lompat tepat di tengah (saat obstacle lewat) */
        @keyframes dino-walk-jump {
          0%   { left: -20%; bottom: 0; }
          45%  { bottom: 0; }
          50%  { bottom: 12px; }
          55%  { bottom: 0; }
          100% { left: 100%; bottom: 0; }
        }
        .dino-leg-front {
          animation: leg-front 0.5s infinite alternate;
        }
        .dino-leg-back {
          animation: leg-back 0.5s infinite alternate;
        }
        @keyframes leg-front {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        @keyframes leg-back {
          0% { transform: translateY(4px); }
          100% { transform: translateY(0); }
        }
        /* Obstacle bergerak dari kanan ke kiri, sinkron dengan dino */
        .obstacle-anim {
          left: 100%;
          animation: obstacle-move 6s linear infinite;
        }
        @keyframes obstacle-move {
          0% { left: 100%; }
          50% { left: 40%; } /* posisi tengah, sejajar dino */
          100% { left: -10%; }
        }
        /* Delay obstacle kedua agar dino lompat dua kali */
        .obstacle-anim:nth-child(2) {
          animation-delay: 3s !important;
        }
      `}</style>
    </footer>
  );
}