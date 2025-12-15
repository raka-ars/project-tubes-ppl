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
            Temukan jawaban atas pertanyaan umum tentang acara ini.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              Kapan acara dimulai?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Acara dimulai sesuai waktu yang tertera di atas. Kami menyarankan
              peserta tiba 15 menit lebih awal untuk registrasi dan persiapan.
              Lokasi acara mudah diakses dengan berbagai moda transportasi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              Apakah ada biaya pendaftaran?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Informasi biaya pendaftaran akan dijelaskan saat proses
              registrasi. Beberapa acara gratis untuk civitas akademika,
              sementara acara tertentu mungkin memiliki biaya khusus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              Siapa saja yang bisa hadir?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Acara ini terbuka untuk mahasiswa, dosen, tenaga kependidikan,
              alumni, dan masyarakat umum. Silakan periksa persyaratan khusus
              jika ada di deskripsi acara.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              Bagaimana cara mendaftar?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Anda dapat mendaftar melalui tombol daftar di halaman ini. Ikuti
              instruksi pendaftaran dan lengkapi data pribadi Anda dengan benar
              untuk memastikan konfirmasi diterima.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              Apakah ada sertifikat?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Peserta yang hadir penuh akan mendapatkan sertifikat kehadiran.
              Sertifikat akan dikirimkan sesuai dengan prosedur yang telah
              ditentukan oleh penyelenggara.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Masih ada pertanyaan?
          </h4>
          <p className="text-medium">
            Hubungi kami untuk informasi lebih lanjut.
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
