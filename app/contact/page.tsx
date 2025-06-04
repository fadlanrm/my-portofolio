export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 flex flex-col items-center">
      <section className="w-full bg-black/30 p-8 rounded-xl flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Contact Me</h2>
        <hr className="w-24 border-t border-white/40 mb-6" />
        <div className="space-y-4 text-center mb-8">
          <p className="text-white/90">
            Email: <a href="mailto:your.email@email.com" className="underline hover:text-pink-400">your.email@email.com</a>
          </p>
          <p className="text-white/90">
            LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" className="underline hover:text-pink-400">linkedin.com/in/yourprofile</a>
          </p>
          <p className="text-white/90">
            WhatsApp: <a href="https://wa.me/6281234567890" target="_blank" className="underline hover:text-pink-400">+62 812-3456-7890</a>
          </p>
        </div>
        {/* Tombol Kontak */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            LinkedIn
          </a>
          <a
            href="tel:+6281234567890"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Telepon
          </a>
          <a
            href="mailto:your.email@email.com"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Email
          </a>
        </div>
      </section>
    </main>
  );
}