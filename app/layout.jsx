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
          <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur-md transition-all duration-300">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">

              {/* Kiri: Brand / Logo */}
              <a href="/" className="flex items-center gap-3 group">
                <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110 border border-white/10">
                  <img
                    src="/logo.png"
                    alt="Logo IM NTT"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors drop-shadow-sm">
                  IM NTT
                </span>
              </a>

              {/* Tengah: Menu utama */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-sm font-medium text-slate-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all">
                  Beranda
                </a>
                <a href="/tentang-kami" className="text-sm font-medium text-slate-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all">
                  Tentang Kami
                </a>
                <a href="/berita" className="text-sm font-medium text-slate-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all">
                  Berita
                </a>

                <div className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all">
                    <span>Lainnya</span>
                    <span className="text-[10px] ml-1">▼</span>
                  </button>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 absolute right-0 mt-2 w-48 rounded-xl border border-white/10 bg-slate-800/90 backdrop-blur-xl shadow-xl p-2 z-50">
                    <a href="/agenda-kampus" className="block rounded-lg px-4 py-2 text-sm text-slate-200 hover:bg-white/10 hover:text-blue-400 transition-colors">
                      Agenda Kampus
                    </a>
                    <a href="/prestasi" className="block rounded-lg px-4 py-2 text-sm text-slate-200 hover:bg-white/10 hover:text-blue-400 transition-colors">
                      Prestasi
                    </a>
                    <a href="/kontak" className="block rounded-lg px-4 py-2 text-sm text-slate-200 hover:bg-white/10 hover:text-blue-400 transition-colors">
                      Kontak
                    </a>
                  </div>
                </div>
              </div>

              {/* Kanan: Authenticated User / Login */}
              <div className="flex items-center gap-4">
                {isAuthenticated ? (
                  <div className="flex items-center gap-3">
                    <a
                      href="/profile"
                      className="group relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/20 shadow-md ring-2 ring-transparent hover:ring-blue-400 transition-all"
                    >
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Profile"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                    <button
                      onClick={handleLogout}
                      className="hidden md:block px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500/80 to-red-600/80 hover:from-red-600 hover:to-red-700 rounded-full shadow-lg shadow-red-500/20 backdrop-blur-sm transition-all duration-300"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <a
                    href="/login"
                    className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-blue-500/40"
                  >
                    Login
                  </a>
                )}
              </div>
            </div>
          </nav>
        )}

        {children}
      </body>
    </html>
  );
}
