import "./globals.css"

export const metadata = {
  title: "TEL-U News",
  description: "Portal berita kampus TEL-U",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <nav className="nav-modern flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>

          <div className="flex space-x-6">
            <a href="/">Beranda</a>
            <a href="/tentang-kami">Tentang kami</a>
            <a href="/berita">Berita</a>
            <a href="/lainnya">Lainnya</a>
          </div>
          
        </nav>

        {children}
      </body>
    </html>
  );
}
