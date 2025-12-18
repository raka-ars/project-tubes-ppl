"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/login";

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Cek status login dari localStorage setiap ganti halaman
  useEffect(() => {
    const authStatus = typeof window !== "undefined"
      ? localStorage.getItem("isAuthenticated")
      : "false";
    setIsAuthenticated(authStatus === "true");
  }, [pathname]);

  // Fungsi logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <html lang="en">
      <body>
        {/* Navbar disembunyikan khusus di halaman login */}
        {!isLoginPage && (
          <nav className="nav-modern flex items-center justify-between px-6 py-4 border-b bg-white">
            {/* Kiri: Brand */}
            <div className="text-2xl font-bold">IM NTT</div>

            {/* Tengah: Menu utama */}
            <div className="flex items-center space-x-6">
              <a href="/" className="hover:text-blue-600 transition-colors">
                Beranda
              </a>
              <a
                href="/tentang-kami"
                className="hover:text-blue-600 transition-colors"
              >
                Tentang kami
              </a>
              <a
                href="/berita"
                className="hover:text-blue-600 transition-colors"
              >
                Berita
              </a>

              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <span>Lainnya</span>
                  <span className="text-xs">▼</span>
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute right-0 mt-2 w-44 rounded-md border bg-white shadow-lg z-50">
                  <a
                    href="/agenda-kampus"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-left"
                  >
                    Agenda kampus
                  </a>
                  <a
                    href="/prestasi"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-left"
                  >
                    Prestasi
                  </a>
                  <a
                    href="/kontak"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-left"
                  >
                    Kontak
                  </a>
                </div>
              </div>
            </div>

            {/* Kanan: jika login -> profil + logout, jika tidak -> tombol login */}
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <a
                    href="/profile"
                    className="block h-10 w-10 overflow-hidden rounded-full border border-neutral-200"
                  >
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </a>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <a
                  href="/login"
                  className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  Login
                </a>
              )}
            </div>
          </nav>
        )}

        {children}
      </body>
    </html>
  );
}
