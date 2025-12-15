"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Galeri</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Jelajahi semua prestasi
          </h2>
          <p className="text-medium">
            Temukan pencapaian luar biasa dari berbagai kategori dan tingkat
            kompetisi
          </p>
        </div>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Juara robotika Asia</a>
              </h3>
              <p>Kompetisi internasional tingkat Asia Tenggara</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Robotika</a>
                </Badge>
                <Badge>
                  <a href="#">Mahasiswa</a>
                </Badge>
                <Badge>
                  <a href="#">Internasional</a>
                </Badge>
              </div>
              <Button
                title="Lihat detail"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">Lihat detail</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Publikasi jurnal global</a>
              </h3>
              <p>
                Penelitian tentang energi terbarukan dipublikasikan di jurnal
                internasional
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Penelitian</a>
                </Badge>
                <Badge>
                  <a href="#">Dosen</a>
                </Badge>
                <Badge>
                  <a href="#">Internasional</a>
                </Badge>
              </div>
              <Button
                title="Lihat detail"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">Lihat detail</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Pemenang kompetisi bisnis</a>
              </h3>
              <p>
                Mahasiswa meraih juara pertama dalam kompetisi rencana bisnis
                nasional
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Bisnis</a>
                </Badge>
                <Badge>
                  <a href="#">Mahasiswa</a>
                </Badge>
                <Badge>
                  <a href="#">Nasional</a>
                </Badge>
              </div>
              <Button
                title="Lihat detail"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">Lihat detail</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Penghargaan seni digital</a>
              </h3>
              <p>
                Karya seni digital mahasiswa diakui dalam festival internasional
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Seni</a>
                </Badge>
                <Badge>
                  <a href="#">Mahasiswa</a>
                </Badge>
                <Badge>
                  <a href="#">Internasional</a>
                </Badge>
              </div>
              <Button
                title="Lihat detail"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">Lihat detail</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Inovasi teknologi hijau</a>
              </h3>
              <p>
                Proyek inovasi teknologi ramah lingkungan memenangkan
                penghargaan kampus
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Teknologi</a>
                </Badge>
                <Badge>
                  <a href="#">Mahasiswa</a>
                </Badge>
                <Badge>
                  <a href="#">Kampus</a>
                </Badge>
              </div>
              <Button
                title="Lihat detail"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">Lihat detail</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="heading-h5 mb-2 font-bold">
                <a href="#">Beasiswa akademik</a>
              </h3>
              <p>
                Dosen menerima beasiswa riset dari lembaga internasional
                terkemuka
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Akademik</a>
                </Badge>
                <Badge>
                  <a href="#">Dosen</a>
                </Badge>
                <Badge>
                  <a href="#">Internasional</a>
                </Badge>
              </div>
              <Button
                title="Lihat detail"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">Lihat detail</a>
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-8 flex justify-center md:mt-18 lg:mt-20">
          <Button title="Lihat semua" variant="secondary">
            Lihat semua
          </Button>
        </div>
      </div>
    </section>
  );
}
