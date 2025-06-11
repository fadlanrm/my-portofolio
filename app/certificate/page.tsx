const certificates = [
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    description: "has a foundation in switching operations, wired and wireless LAN configuration using security best practices, redundancy protocols, and developed problem-solving skills.",
    year: "2023",
    credential: "https://www.credly.com/badges/0159a272-1d50-4a50-83f8-c5715c8533dd/public_url",
    file: null,
    logo: "/logo-cisco.png",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation)",
    description: "has a foundation in scalable network architectures, dynamic routing, mitigation of security threats, wide-area networks, virtualization, automation of programmable networks.",
    year: "2023",
    credential: "https://www.credly.com/badges/48cc1186-68d5-4269-8fd3-642c5e97aeb2/public_url",
    file: null,
    logo: "/logo-cisco.png",
  },
  {
    name: "CyberOps Associate",
    description: "has a broad understanding of Security Operations.",
    year: "2024",
    credential: "https://www.credly.com/badges/7d62f830-4a87-4e8d-9d98-72484ffee33c",
    file: null,
    logo: "/logo-cisco.png",
  },
  {
    name: "Network Security",
    description: "understands network security and has skills in threat mitigation measures to protect data assets and network systems from attack, such as configuring device hardening, firewalls, intrusion prevention systems, and virtual private networks.",
    year: "2024",
    credential: "https://www.credly.com/badges/9e59cefd-b842-48bf-a241-3d0fd3a012b3",
    file: null,
    logo: "/logo-cisco.png",
  },
  {
    name: "Junior Network Administration",
    description: "Lembaga Sertifikasi Profesi Teknologi Digital",
    year: "2024",
    credential: "https://www.comptia.org/certifications/network-plus-example",
    pdf: "/certificate/junior-network-administration.pdf",
    logo: "/logo-lsp.png",
  },
  {
    name: "Internship Certificate - Network Administrator",
    description: "Awarded for successfully completing an internship as a Network Administrator.",
    year: "2023",
    pdf: "/Sertifikat Magang - M. Fadlan.pdf", // tambahkan properti pdf
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
                  {cert.pdf ? (
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 mt-2"
                    >
                      View Certificate
                    </a>
                  ) : (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 mt-2"
                    >
                      View Credential
                    </a>
                  )}
                </div>
                {/* Hanya tampilkan gambar jika ada file dan bukan internship */}
                {cert.file && !cert.pdf && (
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
          </div>
        ))}
      </div>
    </main>
  );
}