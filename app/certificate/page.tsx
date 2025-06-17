const certificatesLeft = [
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    org: "Cisco Networking Academy",
    issued: "Mar. 2023",
    credential: "https://www.credly.com/badges/0159a272-1d50-4a50-83f8-c5715c8533dd/public_url",
    certificate: "/certificate/cert-ccna-enterprisenetworking.pdf",
    logo: "/logo-cisco.png",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    org: "Cisco Networking Academy",
    issued: "Aug. 2023",
    credential: "https://www.credly.com/badges/48cc1186-68d5-4269-8fd3-642c5e97aeb2/public_url",
    certificate: "/certificate/cert-ccna-enterprisenetworking1.pdf",
    logo: "/logo-cisco.png",
  },
  {
    name: "CyberOps Associate",
    org: "Cisco Networking Academy",
    issued: "Jul. 2024",
    credential: "https://www.credly.com/badges/7d62f830-4a87-4e8d-9d98-72484ffee33c",
    certificate: "/certificate/cert-ccna-cyberops.pdf",
    logo: "/logo-cisco.png",
  },
  {
    name: "Network Security",
    org: "Cisco Networking Academy",
    issued: "Sep. 2024",
    credential: "https://www.credly.com/badges/9e59cefd-b842-48bf-a241-3d0fd3a012b3",
    certificate: "/certificate/cert-ccna-networksecurity.pdf",
    logo: "/logo-cisco.png",
  },
];

const certificatesRight = [
  {
    name: "Junior Network Administration",
    org: "Lembaga Sertifikasi Profesi Teknologi Digital",
    issued: "May. 2024",
    certificate: "/certificate/cert-lsp-jna.pdf",
    logo: "/logo-lsp.png",
  },
  {
    name: "Oracle Database 11g: Program with PL/SQL",
    org: "Oracle",
    issued: "May. 2022",
    certificate: "/certificate/cert-oracle-plsql.pdf",
    logo: "/logo-oracle.png",
  },
];

const publications = [
  {
    title: "Rancangan Manajemen Jaringan dengan Integrasi Otomatisasi Menggunakan Internet of Things",
    journal: "TAMIKA: Jurnal Tugas Akhir Manajemen Informatika & Komputerisasi Akuntansi",
    published: "Des. 2024",
    link: "https://ejurnal.methodist.ac.id/index.php/tamika/article/view/3067",
    logo: "/logo-tamika.png",
  },
];

export default function CertificatePage() {
  return (
    <main className="max-w-6xl mx-auto min-h-[80vh] px-8 py-12">
      <div className="flex items-center mb-10">
        <h2 className="text-2xl font-semibold tracking-wide text-gray-900 mb-2 animate-shake-interval delay-0">
          CERTIFICATIONS AND LICENSES
        </h2>
      </div>
      <div className="flex gap-10">
        {/* Left Section */}
        <section className="flex-1">
          {certificatesLeft.map((cert) => (
            <div key={cert.name} className="flex items-start gap-4 mb-8">
              <img src={cert.logo} alt={cert.org} className="h-12 w-12 object-contain rounded bg-white border" />
              <div>
                <div className="font-bold text-lg text-black leading-tight">{cert.name}</div>
                <div className="text-gray-700 text-sm">{cert.org}</div>
                <div className="text-gray-500 text-xs mb-2">Issued {cert.issued}</div>
                <div className="flex gap-2">
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-28 text-center"
                  >
                    Credentials
                  </a>
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-28 text-center"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
        {/* Vertical Divider */}
        <div className="w-px bg-pink-300 mx-2" />
        {/* Right Section */}
        <section className="flex-1">
          {certificatesRight.map((cert) => (
            <div key={cert.name} className="flex items-start gap-4 mb-8">
              <img src={cert.logo} alt={cert.org} className="h-12 w-12 object-contain rounded bg-white border" />
              <div>
                <div className="font-bold text-lg text-black leading-tight">{cert.name}</div>
                <div className="text-gray-700 text-sm">{cert.org}</div>
                <div className="text-gray-500 text-xs mb-2">Issued {cert.issued}</div>
                <div className="flex gap-2">
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-28 text-center"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Publication Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 animate-shake-interval delay-1">
              MY PUBLICATION
            </h2>
            {publications.map((pub) => (
              <div key={pub.title} className="flex items-start gap-4 mb-6">
                <img src={pub.logo} alt="Journal Logo" className="h-12 w-12 object-contain rounded bg-white border" />
                <div>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="font-bold text-base text-black leading-tight hover:underline">
                    {pub.title}
                  </a>
                  <div className="text-gray-700 text-sm">{pub.journal}</div>
                  <div className="text-gray-500 text-xs mb-2">Published {pub.published}</div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full font-semibold shadow hover:bg-pink-500 transition w-28 text-center inline-block mt-2"
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