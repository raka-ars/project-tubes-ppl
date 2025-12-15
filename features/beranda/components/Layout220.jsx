"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout220() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  Tetap terhubung
                </h3>
                <p>
                  Mahasiswa mendapat akses cepat ke informasi akademik dan
                  kegiatan kampus terbaru.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  Dosen berbagi penelitian
                </h3>
                <p>
                  Platform menyediakan ruang publikasi untuk menyebarkan hasil
                  riset dan inovasi.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  Alumni terhubung
                </h3>
                <p>
                  Jejak perkembangan kampus dapat diikuti melalui arsip digital
                  yang komprehensif.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  Masyarakat mengerti
                </h3>
                <p>
                  Transparansi informasi kampus membangun kepercayaan dengan
                  publik eksternal.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Daftar" variant="secondary">
                Daftar
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
      </div>
    </section>
  );
}
