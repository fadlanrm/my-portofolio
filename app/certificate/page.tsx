const certificates = [
  {
    name: "Cisco Certified Network Associate (CCNA)",
    description: "Credential that validates the ability to install, configure, operate, and troubleshoot medium-size routed and switched networks.",
    year: "2022",
    credential: "https://www.credly.com/badges/ccna-example",
    file: null,
    logo: "/logo-cisco.png",
  },
  {
    name: "MikroTik Certified Network Associate (MTCNA)",
    description: "Certification for basic knowledge and skills in MikroTik RouterOS and networking.",
    year: "2021",
    credential: "https://mikrotik.com/certificates/mtcna-example",
    file: null,
    logo: "/logo-mikrotik.png",
  },
  {
    name: "Ubiquiti Broadband Wireless Admin (UBWA)",
    description: "Demonstrates proficiency in Ubiquiti wireless networking solutions and deployments.",
    year: "2021",
    credential: "https://ui.com/training/certificates/ubwa-example",
    file: null,
    logo: "/logo-ubiquiti.png",
  },
  {
    name: "Google IT Support Professional Certificate",
    description: "Covers troubleshooting, customer service, networking, operating systems, and security.",
    year: "2020",
    credential: "https://coursera.org/verify/google-it-support-example",
    file: null,
    logo: "/logo-google.png",
  },
  {
    name: "CompTIA Network+",
    description: "Validates essential knowledge and skills in networking concepts, infrastructure, and operations.",
    year: "2019",
    credential: "https://www.comptia.org/certifications/network-plus-example",
    file: null,
    logo: "/logo-comptia.png",
  },
  {
    name: "Internship Certificate - Network Administrator",
    description: "Awarded for successfully completing an internship as a Network Administrator.",
    year: "2023",
    credential: "/Sertifikat Magang - M. Fadlan.pdf",
    file: "/sertifikat-magang.png",
    logo: "/logo-kemdikbud.png",
  },
];

export default function CertificatePage() {
  return (
    <main className="max-w-3xl mx-auto min-h-[70vh] px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        <span className="text-pink-600">My</span> Certificates
      </h1>
      <div className="relative border-l-2 border-pink-200 pl-12">
        {certificates.map((cert, idx) => (
          <div key={idx} className="mb-12 last:mb-0 relative group">
            {/* Dot penanda di garis */}
            <span className="absolute -left-6 top-6 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow"></span>
            <div className="flex flex-col md:flex-row md:items-center gap-4 ml-2">
              <div className="flex-1 flex items-center gap-4">
                {/* Logo instansi sebelum judul */}
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt="Institution Logo"
                    className="w-10 h-10 object-contain rounded-md bg-white border"
                  />
                )}
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500 bg-pink-50 px-2 py-0.5 rounded font-semibold w-fit">{cert.year}</span>
                    <span className="text-sm text-blue-700 font-medium">{cert.description}</span>
                  </div>
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 mt-2"
                  >
                    View Credential
                  </a>
                </div>
              </div>
              {/* Hanya tampilkan gambar jika bukan internship */}
              {cert.file && cert.name !== "Internship Certificate - Network Administrator" && (
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={cert.file}
                    alt={cert.name}
                    className="w-40 h-24 object-contain rounded-lg border shadow"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}