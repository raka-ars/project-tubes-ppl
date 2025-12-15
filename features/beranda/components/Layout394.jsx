"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout394() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Fitur</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Apa yang kami tawarkan
          </h1>
          <p className="text-medium">
            Informasi kampus diperbarui setiap hari dengan standar jurnalistik
            profesional
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Berita</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Berita terkini dari seluruh kampus
                </h2>
                <p>
                  Liputan lengkap tentang perkembangan akademik, penelitian, dan
                  kegiatan mahasiswa
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Baca"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Baca
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Agenda</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Jadwal acara dan kegiatan kampus
                </h2>
                <p>
                  Pantau semua agenda resmi, seminar, dan acara penting di
                  lingkungan kampus
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Lihat"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Prestasi</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Pencapaian mahasiswa dan dosen
                </h2>
                <p>
                  Rayakan prestasi akademik, kompetisi, dan inovasi dari civitas
                  akademika
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Saksikan"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Saksikan
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
