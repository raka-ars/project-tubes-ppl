"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Event7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative">
      <div className="container relative z-10">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold text-blue-300">Acara</h4>
            <h1 className="heading-h2 mt-3 font-bold md:mt-4 text-white text-3xl md:text-4xl">Agenda</h1>
            <p className="text-medium mt-5 md:mt-6 text-slate-300">
              Jangan lewatkan kegiatan penting di kampus
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex flex-col items-start group">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6 overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="text-small absolute top-4 right-4 flex min-w-28 flex-col items-center bg-white/90 backdrop-blur-md px-1 py-3 text-slate-900 rounded-lg shadow-lg">
                <span className="font-bold">Jum</span>
                <span className="heading-h4 font-extrabold text-2xl">15</span>
                <span className="font-medium">Feb 2024</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4 bg-orange-500 hover:bg-orange-600 text-white border-0">Seminar</Badge>
            <a href="#">
              <h2 className="heading-h5 font-bold text-white hover:text-blue-300 transition-colors">Diskusi industri 4.0</h2>
            </a>
            <p className="mb-2 text-blue-200 font-medium">Auditorium</p>
            <p className="text-slate-400">
              Para ahli berbagi wawasan tentang transformasi digital dan peluang
              karir.
            </p>
            <Button
              title="Lihat acara"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6 text-white hover:text-blue-300 p-0"
            >
              Lihat acara
            </Button>
          </div>
          <div className="flex flex-col items-start group">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6 overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="text-small absolute top-4 right-4 flex min-w-28 flex-col items-center bg-white/90 backdrop-blur-md px-1 py-3 text-slate-900 rounded-lg shadow-lg">
                <span className="font-bold">Sab</span>
                <span className="heading-h4 font-extrabold text-2xl">16</span>
                <span className="font-medium">Feb 2024</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4 bg-green-500 hover:bg-green-600 text-white border-0">Workshop</Badge>
            <a href="#">
              <h2 className="heading-h5 font-bold text-white hover:text-blue-300 transition-colors">
                Pelatihan keterampilan digital
              </h2>
            </a>
            <p className="mb-2 text-blue-200 font-medium">Lab komputer</p>
            <p className="text-slate-400">
              Sesi interaktif untuk meningkatkan kemampuan teknis mahasiswa
              dalam coding.
            </p>
            <Button
              title="Lihat acara"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6 text-white hover:text-blue-300 p-0"
            >
              Lihat acara
            </Button>
          </div>
          <div className="flex flex-col items-start group">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6 overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="text-small absolute top-4 right-4 flex min-w-28 flex-col items-center bg-white/90 backdrop-blur-md px-1 py-3 text-slate-900 rounded-lg shadow-lg">
                <span className="font-bold">Min</span>
                <span className="heading-h4 font-extrabold text-2xl">17</span>
                <span className="font-medium">Feb 2024</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4 bg-pink-500 hover:bg-pink-600 text-white border-0">Pameran</Badge>
            <a href="#">
              <h2 className="heading-h5 font-bold text-white hover:text-blue-300 transition-colors">Pameran karya mahasiswa</h2>
            </a>
            <p className="mb-2 text-blue-200 font-medium">Galeri kampus</p>
            <p className="text-slate-400">
              Apresiasi terhadap kreativitas dan inovasi dari berbagai program
              studi.
            </p>
            <Button
              title="Lihat acara"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6 text-white hover:text-blue-300 p-0"
            >
              Lihat acara
            </Button>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button variant="secondary" title="Lihat semua" className="bg-white text-slate-900 hover:bg-slate-200">
            Lihat semua
          </Button>
        </div>
      </div>
    </section>
  );
}
