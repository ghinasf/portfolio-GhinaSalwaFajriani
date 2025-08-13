"use client";

const EMAIL = "ghinasalwaf0812@gmail.com";

function buildGmailUrl(to: string, subject?: string, body?: string) {
  const base = "https://mail.google.com/mail/";
  const params = new URLSearchParams({ view: "cm", fs: "1", to });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `${base}?${params.toString()}`;
}

export default function ContactPage() {
  const gmailUrl = buildGmailUrl(
    EMAIL,
    "Halo dari website portfolio",
    "Hai, saya tertarik menghubungi Anda mengenai ..."
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300">
        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">Contact Me</h1>
        <div className="flex flex-col gap-4">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-center shadow-md"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/ghinasf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-center shadow-md"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ghinasf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-center shadow-md"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
