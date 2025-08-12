import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Ghina",
  description: "My personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-gray-800">
        {/* Navbar */}
        <nav className="bg-pink-500 text-white p-4 flex justify-center gap-6 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <main className="min-h-screen p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-pink-500 text-white p-4 text-center">
          © {new Date().getFullYear()} Ghina Salwa Fajriani
        </footer>
      </body>
    </html>
  );
}
