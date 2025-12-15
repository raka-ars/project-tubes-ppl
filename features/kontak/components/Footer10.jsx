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
        <Card className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 p-8 md:gap-y-16 md:p-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4">
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-4">
            <a
              href="#"
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
              />
            </a>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Jelajahi</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Beranda
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Tentang kami
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Berita
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Prestasi
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Agenda
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Terhubung</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Kontak
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Publikasi
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Galeri
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Arsip
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Informasi
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Kebijakan</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Syarat
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Pengaturan
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Berlangganan
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Dapatkan update terbaru tentang berita kampus, agenda
                    akademik, dan prestasi mahasiswa langsung ke email Anda.
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Masukkan email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-3 font-semibold md:mb-4">Daftar</h1>
            <p className="text-small mb-3 md:mb-4">
              Dengan berlangganan, Anda menyetujui kebijakan privasi kami dan
              memberikan persetujuan untuk menerima pembaruan dari TEL-U News.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Terima kasih telah berlangganan TEL-U News."
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button
                  title="Terjadi kesalahan saat memproses langganan Anda."
                  variant="secondary"
                  size="sm"
                >
                  Terjadi kesalahan saat memproses langganan Anda.
                </Button>
              </form>
              <p className="text-tiny">
                © 2025 TEL-U News. Semua hak dilindungi.
              </p>
            </div>
          </div>
        </Card>
        <div className="text-small flex flex-col-reverse items-start pt-6 pb-4 md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0">
                © 2024 Relume. All rights reserved.
              </p>
              <a href="#" className="underline">
                Privacy Policy
              </a>
              <a href="#" className="underline">
                Terms of Service
              </a>
              <a href="#" className="underline">
                Cookies Settings
              </a>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            <a href="#">
              <BiLogoFacebookCircle className="size-6" />
            </a>
            <a href="#">
              <BiLogoInstagram className="size-6" />
            </a>
            <a href="#">
              <FaXTwitter className="size-6 p-0.5" />
            </a>
            <a href="#">
              <BiLogoLinkedinSquare className="size-6" />
            </a>
            <a href="#">
              <BiLogoYoutube className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
