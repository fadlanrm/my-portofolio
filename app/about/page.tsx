export default function AboutPage() {
  return (
<<<<<<< HEAD
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
          <span className="text-gray-900">About</span> <span className="text-pink-600">Me</span>
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
=======
    <main className="max-w-7xl mx-auto min-h-[80vh] px-8 py-8 flex gap-8">
      {/* Kiri: Profil & Pendidikan */}
      <section className="flex-1">
        <div className="mt-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 animate-shake-interval delay-0">
            So Who Am I?
          </h2>
          
          <p className="text-lg mb-4">
            I'm a proffesional <span className="text-pink-600 font-semibold">administrator</span> with a background as a PPNPN Government Contract Staff in Indonesia.
          </p>
          <p className="mb-4">
            I have experience in handling administrative and official tasks, I’ve developed a strong ability to write clear, structured, and informative content — especially on topics related to government, education, public policy, and organizational matters.<br />
            I offer well-researched, original articles in Indonesian or English that suit your target audience — whether for blogs, websites, internal documents, or other platforms.
          </p>
          <p>
            Let’s work together to bring your ideas into words with clarity and impact!
          </p>
          <hr className="border-t-2 border-pink-500 w-full mt-8 mb-8" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 animate-shake-interval delay-1">
            My Education
          </h2>
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/logo-umb.png"
              alt="Universitas Mercu Buana"
              className="h-10 w-10 object-contain rounded bg-white border"
            />
            <div>
              <div className="font-bold">Universitas Mercu Buana</div>
              <div className="text-gray-500 text-sm">Bachelor's degree | Informatics Engineering</div>
              <div className="text-gray-500 text-sm">2021 - 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kanan: Pengalaman */}
      <aside className="w-[420px] min-w-[320px] border-l border-black pl-8">
        <h2 className="text-2xl font-bold mb-6 animate-shake-interval delay-2">
          My Experience
        </h2>
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/logo-kemdikbud.png"
            alt="Kemendikbud"
            className="h-10 w-10 object-contain rounded bg-white border"
          />
          <div>
            <div className="font-bold leading-tight">
              Kementerian Pendidikan Dasar dan Menengah Republik Indonesia
            </div>
            <div className="text-gray-500 text-sm">Jakarta, Indonesia | On-site</div>
          </div>
        </div>
        {/* Timeline */}
        <div className="relative pl-8 mt-6">
          {/* Garis vertikal timeline */}
          {/* <div className="absolute left-1.5 top-3 h-[260px] w-1 bg-pink-500 z-0"></div> */}
          {/* Administrator */}
          <div className="relative mb-12 z-10">
            <span className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-pink-500"></span>
            <div className="font-bold">Administrator</div>
            <div className="text-gray-600 text-sm mb-1">Full-time</div>
            <div className="text-gray-500 text-sm mb-1">Sept. 2020 - Present</div>
            <ul className="list-decimal ml-5 text-sm text-gray-700 mb-2">
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
            <div className="font-bold">Network Administrator</div>
            <div className="text-gray-600 text-sm mb-1">Internship</div>
            <div className="text-gray-500 text-sm mb-1">Sep. 2023 - Des. 2023</div>
            <ul className="list-decimal ml-5 text-sm text-gray-700 mb-2">
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
              className="inline-block bg-pink-400 hover:bg-pink-700 text-white px-4 py-1 rounded-lg font-semibold text-sm transition"
            >
              View Certificate
            </a>
          </div>
        </div>
      </aside>
>>>>>>> 35b1c93 (feat: update tampilan landing page)
    </main>
  );
}