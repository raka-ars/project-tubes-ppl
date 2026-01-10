"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout220() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <img
              src="/beach-hero.jpg"
              className="relative w-full rounded-2xl object-cover border border-white/10 shadow-2xl"
              alt="Keindahan Alam NTT"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12 brightness-0 invert"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold text-white md:mb-4">
                  Tetap terhubung
                </h3>
                <p className="text-slate-300 text-sm">
                  Mahasiswa mendapat akses cepat ke informasi akademik dan
                  kegiatan kampus terbaru.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12 brightness-0 invert"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold text-white md:mb-4">
                  Dosen berbagi penelitian
                </h3>
                <p className="text-slate-300 text-sm">
                  Platform menyediakan ruang publikasi untuk menyebarkan hasil
                  riset dan inovasi.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12 brightness-0 invert"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold text-white md:mb-4">
                  Alumni terhubung
                </h3>
                <p className="text-slate-300 text-sm">
                  Jejak perkembangan kampus dapat diikuti melalui arsip digital
                  yang komprehensif.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12 brightness-0 invert"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold text-white md:mb-4">
                  Masyarakat mengerti
                </h3>
                <p className="text-slate-300 text-sm">
                  Transparansi informasi kampus membangun kepercayaan dengan
                  publik eksternal.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Daftar" variant="secondary" className="bg-white text-slate-900 same-hover">
                Daftar
              </Button>
              <Button
                title="Selengkapnya"
                variant="link"
                size="link"
                className="text-white hover:text-blue-300"
                iconRight={<RxChevronRight />}
              >
                Selengkapnya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
