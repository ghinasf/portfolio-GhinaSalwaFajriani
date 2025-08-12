"use client";

const EMAIL = "ghinasalwaf0812@gmail.com"; // ganti dengan emailmu

function buildGmailUrl(to: string, subject?: string, body?: string) {
  const base = "https://mail.google.com/mail/";
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
  });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `${base}?${params.toString()}`;
}

export default function ContactPage() {
  const subject = "Halo dari website portfolio";
  const body = "Hai, saya tertarik menghubungi Anda mengenai ...";

  const gmailUrl = buildGmailUrl(EMAIL, subject, body);

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-500 mb-6">Contact Me</h1>

      <div className="flex flex-col gap-4">
        <a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white px-4 py-2 rounded-lg text-center"
        >
          Email
        </a>

        <a
          href="https://linkedin.com/in/ghinasf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white px-4 py-2 rounded-lg text-center"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/ghinasf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white px-4 py-2 rounded-lg text-center"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
