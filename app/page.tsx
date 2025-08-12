import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <Image
        src="/profil.jpg" // nama file di folder public
        alt="Foto Profil"
        width={200}
        height={200}
        className="rounded-full mx-auto border-4 border-pink-500"
      />
      <h1 className="text-4xl font-bold text-pink-500 mt-6">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 text-lg">
        Halo, saya Ghina. Seorang Web Developer yang suka membuat aplikasi kreatif dan menarik.
      </p>
    </div>
  );
}
