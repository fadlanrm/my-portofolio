const certificatesLeft = [
  // ...data seperti sebelumnya...
];

const certificatesRight = [
  // ...data seperti sebelumnya...
];

const publications = [
  // ...data seperti sebelumnya...
];

export default function CertificatePage() {
  return (
    <main className="max-w-6xl mx-auto min-h-[80vh] px-2 sm:px-4 md:px-8 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 lg:gap-10">
        {/* Left Section */}
        <section className="flex-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-gray-900 mb-6 animate-shake-interval delay-0">
            CERTIFICATIONS AND LICENSES
          </h2>
          {certificatesLeft.map((cert) => (
            <div key={cert.name} className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
              <img src={cert.logo} alt={cert.org} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain rounded bg-white border" />
              <div>
                <div className="font-bold text-sm sm:text-base md:text-lg text-black leading-tight">{cert.name}</div>
                <div className="text-gray-700 text-xs sm:text-sm">{cert.org}</div>
                <div className="text-gray-500 text-xs mb-2">Issued {cert.issued}</div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-24 sm:w-28 text-center"
                  >
                    Credentials
                  </a>
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-24 sm:w-28 text-center"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
        {/* Vertical Divider */}
        <div className="hidden lg:block w-px bg-pink-300 mx-2" />
        {/* Right Section */}
        <section className="flex-1 mt-8 lg:mt-0">
          {certificatesRight.map((cert) => (
            <div key={cert.name} className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
              <img src={cert.logo} alt={cert.org} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain rounded bg-white border" />
              <div>
                <div className="font-bold text-sm sm:text-base md:text-lg text-black leading-tight">{cert.name}</div>
                <div className="text-gray-700 text-xs sm:text-sm">{cert.org}</div>
                <div className="text-gray-500 text-xs mb-2">Issued {cert.issued}</div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-24 sm:w-28 text-center"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Publication Section */}
          <div className="mt-8 md:mt-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 animate-shake-interval delay-1">
              MY PUBLICATION
            </h2>
            {publications.map((pub) => (
              <div key={pub.title} className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
                <img src={pub.logo} alt="Journal Logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain rounded bg-white border" />
                <div>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="font-bold text-xs sm:text-sm md:text-base text-black leading-tight hover:underline">
                    {pub.title}
                  </a>
                  <div className="text-gray-700 text-xs sm:text-sm">{pub.journal}</div>
                  <div className="text-gray-500 text-xs mb-2">Published {pub.published}</div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-24 sm:w-28 text-center inline-block mt-2"
                  >
                    Article
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}