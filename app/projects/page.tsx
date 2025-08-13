export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Project 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">
            Media Pembelajaran Anak
          </h2>
          <p className="text-gray-700 mb-4">
            Media edukasi interaktif untuk anak usia dini mengenal huruf abjad 
            dan hewan. Dibuat dengan Canva, menonjolkan warna cerah dan desain ramah anak.
          </p>
          <a
            href="https://www.canva.com/design/DAGrb8jq_9Y/WUDmbE5us3KjK4JcHEh4CA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Lihat di Canva
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">
            Desain Website Perusahaan Sumber Pasir
          </h2>
          <p className="text-gray-700 mb-4">
            Desain UI perusahaan penyedia pasir dan batu menggunakan Figma.  
            Mencakup halaman utama, produk, kontak, dan galeri dengan konsep 
            sederhana namun profesional.
          </p>
          <a
            href="https://www.figma.com/proto/3UNNHKlKL7kPf1TFljFE7A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Lihat di Figma
          </a>
        </div>
      </div>
    </div>
  );
}
