export default function AboutPage() {
  return (
    <main className="relative min-h-[70vh] flex flex-col justify-center px-0 py-0 overflow-hidden bg-white">
      {/* Grid pattern background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-15" style={{ position: 'absolute', left: 0, top: 0 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f3f4f6" strokeWidth="1" />
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
      <div className="relative z-10 max-w-7xl mx-auto min-h-[80vh] px-2 sm:px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-2 sm:gap-4 md:gap-8">
        {/* Kiri: Profil & Pendidikan */}
        <section className="flex-1">
          <div className="mt-8 mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 animate-shake-interval delay-0">
              So Who Am I?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4">
              I'm a professional <span className="text-pink-600 font-semibold">administrator</span> with a background as a PPNPN Government Contract Staff in Indonesia.
            </p>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              I have experience in handling administrative and official tasks, I’ve developed a strong ability to write clear, structured, and informative content — especially on topics related to government, education, public policy, and organizational matters.<br />
              I offer well-researched, original articles in Indonesian or English that suit your target audience — whether for blogs, websites, internal documents, or other platforms.
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Let’s work together to bring your ideas into words with clarity and impact!
            </p>
            <hr className="border-t-2 border-pink-500 w-full mt-8 mb-8" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 animate-shake-interval delay-1">
              My Education
            </h2>
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <img
                src="/logo-umb.png"
                alt="Universitas Mercu Buana"
                className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain rounded bg-white border"
              />
              <div>
                <div className="font-bold text-sm sm:text-base">Universitas Mercu Buana</div>
                <div className="text-gray-500 text-xs sm:text-sm">Bachelor's degree | Informatics Engineering</div>
                <div className="text-gray-500 text-xs sm:text-sm">2021 - 2025</div>
              </div>
            </div>
          </div>
        </section>
        {/* Kanan: Pengalaman */}
        <aside className="w-full lg:w-[420px] min-w-0 lg:min-w-[320px] border-t lg:border-t-0 lg:border-l border-black mt-8 lg:mt-0 pt-8 lg:pt-0 lg:pl-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 animate-shake-interval delay-2">
            My Experience
          </h2>
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <img
              src="/logo-kemdikbud.png"
              alt="Kemendikbud"
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain rounded bg-white border"
            />
            <div>
              <div className="font-bold leading-tight text-sm sm:text-base">
                Kementerian Pendidikan Dasar dan Menengah Republik Indonesia
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">Jakarta, Indonesia | On-site</div>
            </div>
          </div>
          {/* Timeline */}
          <div className="relative pl-2 sm:pl-4 lg:pl-8 mt-6">
            {/* Administrator */}
            <div className="relative mb-8 md:mb-12 z-10">
              <span className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-pink-500"></span>
              <div className="font-bold text-sm sm:text-base">Administrator</div>
              <div className="text-gray-600 text-xs sm:text-sm mb-1">Full-time</div>
              <div className="text-gray-500 text-xs sm:text-sm mb-1">Sept. 2020 - Present</div>
              <ul className="list-decimal ml-5 text-xs sm:text-sm text-gray-700 mb-2">
                <li>Administrative personnel management tasks, such as:</li>
                <li>Recording information for incoming and outgoing document</li>
                <li>Compiling the list of outgoing document deliveries</li>
                <li>Managing Google Drive documents for document receipts</li>
                <li>Organizing document archives, monitoring all document-related activities, and ensuring everything runs smoothly</li>
                <li>Performing or assisting with other requested tasks</li>
              </ul>
            </div>
            {/* Network Administrator */}
            <div className="relative mb-4 z-10">
              <span className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-pink-500"></span>
              <div className="font-bold text-sm sm:text-base">Network Administrator</div>
              <div className="text-gray-600 text-xs sm:text-sm mb-1">Internship</div>
              <div className="text-gray-500 text-xs sm:text-sm mb-1">Sep. 2023 - Des. 2023</div>
              <ul className="list-decimal ml-5 text-xs sm:text-sm text-gray-700 mb-2">
                <li>Performing network tasks such as:</li>
                <li>Assisting with the installation and configuration of network devices, such as routers, switches, and access points.</li>
                <li>Monitoring network traffic and performance to detect and report issues or disruptions.</li>
                <li>Implementing and managing network security rules, including firewalls, VLANs, and ACLs.</li>
                <li>Providing technical support to end users regarding network and connectivity issues.</li>
                <li>Assisting in documenting network configurations and creating updated network topology documentation.</li>
              </ul>
              <a
                href="/certificate/cert-birosdm-magang.pdf"
                target="_blank"
                className="inline-block bg-pink-400 hover:bg-pink-700 text-white px-4 py-1 rounded-lg font-semibold text-xs sm:text-sm transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </aside>
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