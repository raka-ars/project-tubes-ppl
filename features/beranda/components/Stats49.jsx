"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats49() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-blue-300">Angka</p>
            <h2 className="heading-h2 font-bold text-3xl md:text-4xl text-white">
              Dampak nyata dari TEL-U News
            </h2>
          </div>
          <div>
            <p className="text-medium text-slate-300">
              Setiap hari kami menyajikan berita yang diverifikasi dengan
              standar jurnalistik tinggi. Ribuan pembaca mempercayai kami
              sebagai sumber informasi utama kampus.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Jelajahi" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-200">
                Jelajahi
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
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <Card className="p-8 text-center bg-white/5 border-white/10 backdrop-blur-sm text-white hover:bg-white/10 transition-colors">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem] text-blue-400">
              500+
            </p>
            <h3 className="heading-h6 font-bold text-slate-200">Berita dipublikasikan</h3>
          </Card>
          <Card className="p-8 text-center bg-white/5 border-white/10 backdrop-blur-sm text-white hover:bg-white/10 transition-colors">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem] text-indigo-400">
              200+
            </p>
            <h3 className="heading-h6 font-bold text-slate-200">Agenda tercatat</h3>
          </Card>
          <Card className="p-8 text-center bg-white/5 border-white/10 backdrop-blur-sm text-white hover:bg-white/10 transition-colors">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem] text-purple-400">
              1000+
            </p>
            <h3 className="heading-h6 font-bold text-slate-200">Prestasi dirayakan</h3>
          </Card>
        </div>
      </div>
    </section>
  );
}
