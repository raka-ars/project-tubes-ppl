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
            Panduan lengkap untuk mengirimkan konten publikasi ke TEL-U News
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              Siapa yang bisa publikasi?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Setiap fakultas, program studi, dan unit kampus memiliki hak untuk
              mempublikasikan informasi resmi. Kami menerima konten dari semua
              bagian organisasi akademik yang ingin berbagi berita dengan
              civitas akademika.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              Bagaimana cara mengirim konten?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Hubungi tim redaksi kami melalui formulir pengajuan atau email
              resmi. Kami akan memandu proses publikasi dari awal hingga konten
              Anda tampil di portal berita kampus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              Berapa lama proses publikasi?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Waktu publikasi tergantung pada jenis konten dan kelengkapan
              dokumen yang Anda kirimkan. Umumnya, konten akan diproses dalam
              waktu satu hingga dua hari kerja.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              Apa saja jenis konten yang diterima?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Kami menerima berita akademik, pengumuman resmi, rilis penelitian,
              laporan kegiatan, dan informasi penting lainnya yang relevan
              dengan kehidupan kampus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              Apakah ada biaya publikasi?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Tidak ada biaya untuk mempublikasikan konten di TEL-U News.
              Layanan publikasi ini disediakan gratis untuk semua unit kampus
              sebagai bagian dari komitmen kami terhadap transparansi informasi.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Masih ada pertanyaan lain?
          </h4>
          <p className="text-medium">Hubungi tim redaksi kami sekarang</p>
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
