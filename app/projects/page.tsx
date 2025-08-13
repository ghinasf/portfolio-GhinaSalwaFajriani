export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-pink-500 mb-4">Projects</h1>
      <ul className="list-disc pl-5 mb-6">
        <li>Website Portfolio dengan Next.js</li>
        <li>Aplikasi Antrian Klinik</li>
        <li>Sistem Rekomendasi Makanan</li>
        <li>Desain Canva</li>
      </ul>

      {/* Preview Canva */}
      <div className="border rounded-lg shadow-lg p-4 bg-pink-50">
        <h2 className="text-xl font-semibold text-pink-600 mb-2">Proyek Canva</h2>
        <p className="mb-4">Lihat desain Canva saya di bawah ini:</p>

        {/* Gunakan iframe untuk menampilkan langsung Canva */}
        <iframe
          src="https://www.canva.com/design/abc123456789/view?embed"
          width="100%"
          height="500"
          style={{ border: "none" }}
          allowFullScreen
        ></iframe>

        {/* Link tombol buka di tab baru */}
        <div className="mt-4">
          <a
            href="https://www.canva.com/design/abc123456789/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
          >
            Lihat di Canva
          </a>
        </div>
      </div>
    </div>
  );
}
