"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer10() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <Card className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 p-8 md:gap-y-16 md:p-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 bg-white/5 border-white/10 backdrop-blur-md">
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-4">
            <a
              href="#"
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-10 w-10 object-contain brightness-0 invert"
                />
                <span className="text-xl font-bold text-white">IM NTT</span>
              </div>
            </a>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-blue-200">Jelajahi</h2>
              <ul className="text-slate-300">
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Beranda
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Tentang kami
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Berita
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Prestasi
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Agenda
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-blue-200">Terhubung</h2>
              <ul className="text-slate-300">
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Kontak
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Publikasi
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Galeri
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Arsip
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Informasi
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-blue-200">Kebijakan</h2>
              <ul className="text-slate-300">
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Syarat
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Pengaturan
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                    Berlangganan
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-3 font-semibold md:mb-4 text-white">Daftar</h1>
            <p className="text-small mb-3 md:mb-4 text-slate-300">
              Dengan berlangganan, Anda menyetujui kebijakan privasi kami dan
              memberikan persetujuan untuk menerima pembaruan dari TEL-U News.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input placeholder="Masukkan email anda" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                <Button type="submit" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-200">Langganan</Button>
              </form>
              <p className="text-tiny text-slate-400">
                © 2025 TEL-U News. Semua hak dilindungi.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
}
