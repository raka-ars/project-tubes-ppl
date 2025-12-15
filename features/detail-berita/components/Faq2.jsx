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
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Tanya</h2>
          <p className="text-medium">
            Pertanyaan yang sering diajukan tentang berita ini
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              Apa inti dari berita ini?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Berita ini mengangkat topik penting yang mempengaruhi kehidupan
              kampus. Kami menyajikan fakta-fakta yang telah diverifikasi dan
              perspektif dari berbagai pihak yang terlibat langsung.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              Bagaimana cara mendapatkan informasi lebih lanjut?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Anda dapat menghubungi unit terkait di kampus atau mengunjungi
              halaman Agenda Kampus untuk jadwal acara dan pengumuman resmi
              terbaru.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              Apakah ada sumber tambahan yang direkomendasikan?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Kami menyediakan tautan ke dokumen resmi dan pernyataan dari
              pihak-pihak yang berwenang. Silakan periksa bagian referensi di
              akhir artikel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              Bagaimana cara memberikan tanggapan?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Kami menghargai masukan dari pembaca. Hubungi kami melalui halaman
              Kontak untuk berbagi pemikiran atau pertanyaan lebih lanjut
              tentang konten kami.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              Kapan berita ini diperbarui terakhir?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Tanggal publikasi dan pembaruan terakhir ditampilkan di bagian
              atas artikel. Kami secara rutin memperbarui informasi untuk
              memastikan akurasi dan relevansi.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Masih ada pertanyaan lain?
          </h4>
          <p className="text-medium">
            Hubungi tim kami untuk bantuan lebih lanjut
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
