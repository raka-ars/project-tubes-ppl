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
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQ</h2>
          <p className="text-medium">
            Temukan jawaban atas pertanyaan umum tentang berita dan publikasi
            kampus
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              Bagaimana cara mengirim berita?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Unit atau organisasi kampus dapat mengirimkan berita melalui
              formulir publikasi di halaman Publikasi. Tim redaksi kami akan
              meninjau dan menerbitkan konten yang sesuai dengan standar
              editorial TEL-U News dalam waktu 1-2 hari kerja.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              Siapa yang dapat menerbitkan di portal ini?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Mahasiswa, dosen, tenaga kependidikan, unit akademik, dan
              organisasi kampus dapat menerbitkan berita. Semua konten harus
              melalui proses verifikasi untuk memastikan akurasi dan relevansi
              dengan kehidupan kampus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              Berapa lama proses publikasi berita?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Berita yang masuk akan diproses dalam waktu 1-2 hari kerja. Untuk
              berita yang bersifat urgent atau resmi dari kampus, kami
              memprioritaskan penerbitan dalam waktu lebih cepat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              Apakah ada biaya untuk mempublikasikan berita?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Tidak ada biaya untuk mempublikasikan berita di TEL-U News.
              Layanan publikasi ini tersedia gratis bagi seluruh civitas
              akademika dan unit kampus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              Bagaimana cara menghubungi tim redaksi?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Anda dapat menghubungi tim redaksi melalui halaman Kontak atau
              mengirim email langsung ke alamat yang tersedia. Kami siap
              membantu pertanyaan atau masukan terkait berita dan publikasi.
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
            <Button title="Kontak" variant="secondary">
              Kontak
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
