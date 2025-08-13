import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 flex flex-col items-center justify-center px-6">
      <div className="relative">
        <Image
          src="/profil.jpg"
          alt="Foto Profil"
          width={200}
          height={200}
          className="rounded-full border-4 border-pink-500 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h1 className="text-4xl font-extrabold text-pink-600 mt-6 animate-fadeIn">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl leading-relaxed">
        Halo, saya <span className="font-bold text-pink-500">Ghina Salwa Fajriani</span>.  
        Saya adalah mahasiswa Semester 6 Jurusan Sistem Informasi, Program Studi S1 Teknik Informatika.
      </p>

      <a
        href="/projects"
        className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md transition duration-300"
      >
        Lihat Proyek Saya
      </a>
    </div>
  );
}
