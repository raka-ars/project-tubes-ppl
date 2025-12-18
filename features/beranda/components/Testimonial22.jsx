"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Testimonial22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Suara mereka</h2>
          <p className="text-medium">Apa yang dikatakan civitas akademika</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <img
                  src=""
                  alt=""
                  className="max-h-12"
                />
              </div>
              <blockquote className="text-medium">
                "TEL-U News membantu saya tetap update dengan semua kegiatan
                kampus dan peluang yang ada."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Rina Wijaya</p>
                  <p>Mahasiswa, Teknik Informatika</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Baca kisahnya
              </Button>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <img
                  src=""
                  alt=""
                  className="max-h-12"
                />
              </div>
              <blockquote className="text-medium">
                "Platform ini sangat memudahkan saya mempublikasikan hasil
                penelitian kepada audiens yang lebih luas."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Dr. Bambang Sutrisno</p>
                  <p>Dosen, Fakultas Teknik</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Baca kisahnya
              </Button>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <img
                  src=""
                  alt=""
                  className="max-h-12"
                />
              </div>
              <blockquote className="text-medium">
                "Sebagai alumni, saya senang bisa mengikuti perkembangan kampus
                melalui berita yang berkualitas."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Ahmad Pratama</p>
                  <p>Alumni, Angkatan 2020</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Baca kisahnya
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
