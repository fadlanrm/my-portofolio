export default function AboutPage() {
  return (
    <main className="relative min-h-[70vh] flex flex-col justify-center px-0 py-0 overflow-hidden bg-white">
      {/* Grid pattern background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-15" style={{position: 'absolute', left: 0, top: 0}}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Wavy SVG accent */}
      <svg
        className="absolute top-0 left-0 w-full h-32 opacity-30 z-0"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f472b6"
          fillOpacity="0.13"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col justify-center px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-pink-600">About</span> Me
        </h1>
        <div className="rounded-2xl shadow-lg p-8 text-gray-700 leading-relaxed text-lg bg-white/90 backdrop-blur-md">
          <p className="mb-4">
            I am an <span className="font-semibold text-pink-600">Informatics Engineering</span> graduate with over 5 years of experience working as a Non-Civil Servant Government Employee (PPNPN) at the Ministry of Education, Culture, Research, and Technology, specifically in the Directorate General of Primary and Secondary Education.
          </p>
          <p className="mb-4">
            Since 2020, I have focused on <span className="font-semibold text-pink-600">Network Administration</span>, including network device configuration, network segmentation using VLANs, IP address and subnetting management, firewall and ACL implementation, and network performance monitoring to maintain the stability and security of internal systems.
          </p>
          <p className="mb-4">
            I am familiar with various network devices and tools such as <span className="font-semibold text-pink-600">Cisco, Mikrotik, and Ubiquiti</span>, and I also support technical documentation management and reporting related to network infrastructure.
          </p>
          <p>
            For me, technology is not just a work tool, but a solution that must continue to be developed and adapted to the needs of the times. I always strive to improve my technical skills and collaborative abilities in every project or task I undertake.
          </p>
        </div>
      </div>
      {/* Bottom wavy accent */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 opacity-20 z-0"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#a5b4fc"
          fillOpacity="0.13"
          d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,53.3C840,32,960,32,1080,53.3C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </main>
  );
}