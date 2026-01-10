"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Testimonial22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative">
      <div className="container relative z-10">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6 text-white text-3xl md:text-4xl">Suara mereka</h2>
          <p className="text-medium text-slate-300">Apa yang dikatakan civitas akademika</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                {/* Replaced placeholder with generic star icons for rating */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-yellow-400 text-xl">★</span>)}
                </div>
              </div>
              <blockquote className="text-medium text-slate-200">
                "TEL-U News membantu saya tetap update dengan semua kegiatan
                kampus dan peluang yang ada."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Rina Wijaya</p>
                  <p className="text-slate-400 text-sm">Mahasiswa, Teknik Informatika</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />} className="text-blue-300 hover:text-white p-0">
                Baca kisahnya
              </Button>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-yellow-400 text-xl">★</span>)}
                </div>
              </div>
              <blockquote className="text-medium text-slate-200">
                "Platform ini sangat memudahkan saya mempublikasikan hasil
                penelitian kepada audiens yang lebih luas."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Dr. Bambang Sutrisno</p>
                  <p className="text-slate-400 text-sm">Dosen, Fakultas Teknik</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />} className="text-blue-300 hover:text-white p-0">
                Baca kisahnya
              </Button>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-yellow-400 text-xl">★</span>)}
                </div>
              </div>
              <blockquote className="text-medium text-slate-200">
                "Sebagai alumni, saya senang bisa mengikuti perkembangan kampus
                melalui berita yang berkualitas."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Ahmad Pratama</p>
                  <p className="text-slate-400 text-sm">Alumni, Angkatan 2020</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />} className="text-blue-300 hover:text-white p-0">
                Baca kisahnya
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
