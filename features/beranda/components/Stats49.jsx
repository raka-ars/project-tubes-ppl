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
            <p className="mb-3 font-semibold md:mb-4">Angka</p>
            <h2 className="heading-h2 font-bold">
              Dampak nyata dari TEL-U News
            </h2>
          </div>
          <div>
            <p className="text-medium">
              Setiap hari kami menyajikan berita yang diverifikasi dengan
              standar jurnalistik tinggi. Ribuan pembaca mempercayai kami
              sebagai sumber informasi utama kampus.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Jelajahi" variant="secondary">
                Jelajahi
              </Button>
              <Button
                title="Selengkapnya"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Selengkapnya
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <Card className="p-8 text-center">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              500+
            </p>
            <h3 className="heading-h6 font-bold">Berita dipublikasikan</h3>
          </Card>
          <Card className="p-8 text-center">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              200+
            </p>
            <h3 className="heading-h6 font-bold">Agenda tercatat</h3>
          </Card>
          <Card className="p-8 text-center">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              1000+
            </p>
            <h3 className="heading-h6 font-bold">Prestasi dirayakan</h3>
          </Card>
        </div>
      </div>
    </section>
  );
}
