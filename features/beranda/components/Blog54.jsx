"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog54() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative">
      <div className="container relative z-10">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4 text-blue-300">Berita</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6 text-white text-3xl md:text-4xl">
              Liputan terkini
            </h2>
            <p className="text-medium text-slate-300">
              Baca cerita-cerita terbaru dari kampus
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          <Card className="flex size-full flex-col items-center justify-start overflow-hidden bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
            <a href="#" className="w-full group">
              <div className="overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6 w-full">
              <div className="mb-4 flex w-full items-center justify-start">
                <Badge className="mr-4 bg-blue-600 hover:bg-blue-700 text-white border-0">Akademik</Badge>
                <p className="text-small inline font-semibold text-slate-400">3 menit baca</p>
              </div>
              <a className="mb-2 block w-full" href="#">
                <h2 className="heading-h5 font-bold text-white hover:text-blue-300 transition-colors">
                  Mahasiswa TEL-U raih penghargaan internasional
                </h2>
              </a>
              <p className="text-slate-300">
                Prestasi gemilang dalam kompetisi riset global menunjukkan
                kualitas akademik.
              </p>
              <Button
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-start gap-x-2 text-white hover:text-blue-300 p-0"
              >
                Baca selengkapnya
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start overflow-hidden bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
            <a href="#" className="w-full group">
              <div className="overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6 w-full">
              <div className="mb-4 flex w-full items-center justify-start">
                <Badge className="mr-4 bg-purple-600 hover:bg-purple-700 text-white border-0">Penelitian</Badge>
                <p className="text-small inline font-semibold text-slate-400">4 menit baca</p>
              </div>
              <a className="mb-2 block w-full" href="#">
                <h2 className="heading-h5 font-bold text-white hover:text-purple-300 transition-colors">
                  Inovasi teknologi dari laboratorium kampus
                </h2>
              </a>
              <p className="text-slate-300">
                Dosen dan mahasiswa mengembangkan solusi praktis untuk industri
                modern.
              </p>
              <Button
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-start gap-x-2 text-white hover:text-purple-300 p-0"
              >
                Baca selengkapnya
              </Button>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-end">
          <div className="mt-10 md:mt-14 lg:mt-16">
            <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-200">Lihat semua</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
