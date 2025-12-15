"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Event7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">Acara</h4>
            <h1 className="heading-h2 mt-3 font-bold md:mt-4">Agenda</h1>
            <p className="text-medium mt-5 md:mt-6">
              Jangan lewatkan kegiatan penting di kampus
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full rounded-image object-cover"
              />
              <div className="text-small absolute top-4 right-4 flex min-w-28 flex-col items-center bg-scheme-foreground px-1 py-3 text-scheme-text">
                <span>Jum</span>
                <span className="heading-h4 font-bold">15</span>
                <span>Feb 2024</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4">Seminar</Badge>
            <a href="#">
              <h2 className="heading-h5 font-bold">Diskusi industri 4.0</h2>
            </a>
            <p className="mb-2">Auditorium</p>
            <p>
              Para ahli berbagi wawasan tentang transformasi digital dan peluang
              karir.
            </p>
            <Button
              title="Lihat acara"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              Lihat acara
            </Button>
          </div>
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full rounded-image object-cover"
              />
              <div className="text-small absolute top-4 right-4 flex min-w-28 flex-col items-center bg-scheme-foreground px-1 py-3 text-scheme-text">
                <span>Sab</span>
                <span className="heading-h4 font-bold">16</span>
                <span>Feb 2024</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4">Workshop</Badge>
            <a href="#">
              <h2 className="heading-h5 font-bold">
                Pelatihan keterampilan digital
              </h2>
            </a>
            <p className="mb-2">Lab komputer</p>
            <p>
              Sesi interaktif untuk meningkatkan kemampuan teknis mahasiswa
              dalam coding.
            </p>
            <Button
              title="Lihat acara"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              Lihat acara
            </Button>
          </div>
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full rounded-image object-cover"
              />
              <div className="text-small absolute top-4 right-4 flex min-w-28 flex-col items-center bg-scheme-foreground px-1 py-3 text-scheme-text">
                <span>Min</span>
                <span className="heading-h4 font-bold">17</span>
                <span>Feb 2024</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4">Pameran</Badge>
            <a href="#">
              <h2 className="heading-h5 font-bold">Pameran karya mahasiswa</h2>
            </a>
            <p className="mb-2">Galeri kampus</p>
            <p>
              Apresiasi terhadap kreativitas dan inovasi dari berbagai program
              studi.
            </p>
            <Button
              title="Lihat acara"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              Lihat acara
            </Button>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button variant="secondary" title="Lihat semua">
            Lihat semua
          </Button>
        </div>
      </div>
    </section>
  );
}
