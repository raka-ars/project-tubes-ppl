"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog54() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Berita</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Liputan terkini
            </h2>
            <p className="text-medium">
              Baca cerita-cerita terbaru dari kampus
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-video size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-4 flex w-full items-center justify-start">
                <Badge className="mr-4">Akademik</Badge>
                <p className="text-small inline font-semibold">3 menit baca</p>
              </div>
              <a className="mb-2 block" href="#">
                <h2 className="heading-h5 font-bold">
                  Mahasiswa TEL-U raih penghargaan internasional
                </h2>
              </a>
              <p>
                Prestasi gemilang dalam kompetisi riset global menunjukkan
                kualitas akademik.
              </p>
              <Button
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Baca selengkapnya
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-video size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-4 flex w-full items-center justify-start">
                <Badge className="mr-4">Penelitian</Badge>
                <p className="text-small inline font-semibold">4 menit baca</p>
              </div>
              <a className="mb-2 block" href="#">
                <h2 className="heading-h5 font-bold">
                  Inovasi teknologi dari laboratorium kampus
                </h2>
              </a>
              <p>
                Dosen dan mahasiswa mengembangkan solusi praktis untuk industri
                modern.
              </p>
              <Button
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Baca selengkapnya
              </Button>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-end">
          <div className="mt-10 md:mt-14 lg:mt-16">
            <Button variant="secondary">Lihat semua</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
