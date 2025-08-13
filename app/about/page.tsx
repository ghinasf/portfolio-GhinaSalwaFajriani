import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">About Me</h1>

        {/* Foto Profil */}
        <div className="flex justify-center mb-6">
          <Image
            src="/pictabout.jpeg" // ganti sesuai nama file di folder public
            alt="Foto Ghina Salwa Fajriani"
            width={200}
            height={200}
            className="rounded-full border-4 border-pink-400 shadow-md"
          />
        </div>

        <p className="text-gray-700 leading-relaxed">
          Saya memiliki ketertarikan dalam mempelajari pengolahan data, pemodelan
          website, dan pengembangan aplikasi. Saya berpengalaman dalam proyek
          penelitian dan pengembangan aplikasi berbasis teknologi informasi.
          Berkomitmen untuk terus belajar dan berkontribusi pada industri teknologi
          melalui penerapan solusi berbasis data dan sistem yang inovatif.
        </p>
      </div>
    </div>
  );
}
