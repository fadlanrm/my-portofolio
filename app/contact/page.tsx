export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 flex flex-col items-center">
      <section className="w-full bg-transparent p-8 rounded-xl flex flex-col items-center border-l-4 border-r-4 border-pink-600">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Contact <span className="text-pink-600">Me</span>
        </h2>
        <hr className="w-24 border-t border-pink-200 mb-6" />
        <div className="space-y-4 text-center mb-8">
          <p className="text-gray-900">
            Email: <a href="mailto:privatemailfadlan@gmail.com" className="underline hover:text-pink-600">privatemailfadlan@gmail.com</a>
          </p>
          <p className="text-gray-900">
            LinkedIn: <a href="https://www.linkedin.com/in/fadlanrm/" target="_blank" className="underline hover:text-pink-600">Muhammad Fadlan Ramadhan</a>
          </p>
          <p className="text-gray-900">
            WhatsApp: <a href="https://wa.me/628892127289" target="_blank" className="underline hover:text-pink-600">+62 889-212-7289</a>
          </p>
        </div>
        {/* Tombol Kontak */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:privatemailfadlan@gmail.com"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/fadlanrm/"
            target="_blank"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/628892127289"
            target="_blank"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Whatsapp
          </a>
        </div>
      </section>
    </main>
  );
}