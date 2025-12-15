"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";

export function Faq2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Tanya jawab</h2>
          <p className="text-medium">
            Pertanyaan umum mengenai pengelolaan dan publikasi agenda kampus
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              Bagaimana cara mendaftar acara?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Hubungi tim redaksi TEL-U News melalui halaman Kontak dengan
              detail acara, tanggal, waktu, dan lokasi. Tim kami akan
              memverifikasi dan mempublikasikan agenda dalam sistem.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              Apakah ada biaya publikasi acara?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Tidak ada biaya untuk mempublikasikan acara kampus. Layanan
              publikasi agenda terbuka untuk semua unit akademik dan organisasi
              di kampus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              Berapa lama proses publikasi agenda?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Biasanya agenda akan dipublikasikan dalam waktu satu hingga dua
              hari kerja setelah verifikasi. Untuk acara mendadak, hubungi tim
              redaksi langsung.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              Dapatkah agenda diubah setelah dipublikasikan?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Ya, perubahan dapat dilakukan dengan menghubungi tim redaksi. Kami
              akan memperbarui informasi dan memberitahu perubahan kepada
              pembaca.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              Apakah acara online bisa didaftarkan?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Tentu saja. Acara online, hybrid, maupun tatap muka dapat
              didaftarkan dengan mencantumkan format dan link atau lokasi acara.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Masih ada pertanyaan lain?
          </h4>
          <p className="text-medium">
            Hubungi tim kami untuk informasi lebih lanjut
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Hubungi" variant="secondary">
              Hubungi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
