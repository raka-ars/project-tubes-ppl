"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

export function Event31() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">Jadwal</h4>
            <h1 className="heading-h2 mt-3 font-bold md:mt-4">Jadwal</h1>
            <p className="text-medium mt-5 md:mt-6">
              Lihat urutan lengkap acara kampus sepanjang minggu ini
            </p>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0" className="first:border-t-0">
            <AccordionTrigger className="heading-h4 md:py-5">
              Jumat 09 Feb
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-0">
              <div className="grid grid-cols-1 items-center gap-4 border-t border-scheme-border py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-large">08:00 pagi</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="heading-h5 font-bold">
                      Seminar riset terapan
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>Tatap muka</Badge>
                      <Badge>Daring</Badge>
                    </div>
                  </div>
                  <div>Dr. Bambang Sutrisno</div>
                  <div>Auditorium utama</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Lihat detail"
                    asChild={true}
                  >
                    <a href="#">Lihat detail</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-scheme-border py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-large">09:00 pagi</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="heading-h5 font-bold">
                      Workshop desain grafis
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>Daring</Badge>
                    </div>
                  </div>
                  <div>Tim kreatif studio</div>
                  <div>Platform Zoom</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Lihat detail"
                    asChild={true}
                  >
                    <a href="#">Lihat detail</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-scheme-border py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-large">10:00 pagi</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="heading-h5 font-bold">
                      Diskusi forum mahasiswa
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>Daring</Badge>
                    </div>
                  </div>
                  <div>Moderator BEM</div>
                  <div>Ruang virtual</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Lihat detail"
                    asChild={true}
                  >
                    <a href="#">Lihat detail</a>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1" className="first:border-t-0">
            <AccordionTrigger className="heading-h4 md:py-5">
              Sabtu 10 Feb
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-0">
              <div className="grid grid-cols-1 items-center gap-4 border-t border-scheme-border py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-large">08:00 pagi</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="heading-h5 font-bold">
                      Pelatihan kepemimpinan
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>Tatap muka</Badge>
                      <Badge>Daring</Badge>
                    </div>
                  </div>
                  <div>Konsultan pengembangan</div>
                  <div>Ruang B201</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Lihat detail"
                    asChild={true}
                  >
                    <a href="#">Lihat detail</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-scheme-border py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-large">09:00 pagi</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="heading-h5 font-bold">
                      Sesi mentoring karir
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>Daring</Badge>
                    </div>
                  </div>
                  <div>Alumni profesional</div>
                  <div>Ruang meeting</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Lihat detail"
                    asChild={true}
                  >
                    <a href="#">Lihat detail</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-scheme-border py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-large">10:00 pagi</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="heading-h5 font-bold">
                      Kelas tambahan matematika
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>Daring</Badge>
                    </div>
                  </div>
                  <div>Dosen pengampu</div>
                  <div>Ruang kelas virtual</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Lihat detail"
                    asChild={true}
                  >
                    <a href="#">Lihat detail</a>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="first:border-t-0">
            <AccordionTrigger className="heading-h4 md:py-5">
              Minggu 11 Feb
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-0">
              <div className="grid grid-cols-1 items-center gap-4 border-t border-scheme-border py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-large">08:00 pagi</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="heading-h5 font-bold">
                      Pameran inovasi mahasiswa
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>Tatap muka</Badge>
                      <Badge>Daring</Badge>
                    </div>
                  </div>
                  <div>Panitia acara</div>
                  <div>Halaman utama kampus</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Lihat detail"
                    asChild={true}
                  >
                    <a href="#">Lihat detail</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-scheme-border py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-large">09:00 pagi</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="heading-h5 font-bold">
                      Pertandingan olahraga
                    </h5>
                    <div className="flex items-center gap-2">
                      <Badge>Daring</Badge>
                    </div>
                  </div>
                  <div>Panitia UKM olahraga</div>
                  <div>Lapangan kampus</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Lihat detail"
                    asChild={true}
                  >
                    <a href="#">Lihat detail</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 items-center gap-4 border-t border-scheme-border py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-large">10:00 pagi</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="heading-h5 font-bold">Kuliah umum tamu</h5>
                    <div className="flex items-center gap-2">
                      <Badge>Daring</Badge>
                    </div>
                  </div>
                  <div>Pembicara undangan</div>
                  <div>Auditorium</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Lihat detail"
                    asChild={true}
                  >
                    <a href="#">Lihat detail</a>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
