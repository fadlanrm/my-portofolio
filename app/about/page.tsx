export default function AboutPage() {
  return (
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
    </main>
  );
}