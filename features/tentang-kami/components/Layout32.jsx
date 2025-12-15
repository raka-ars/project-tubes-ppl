"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout32() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h1 className="heading-h5 mb-3 font-bold md:mb-4">
                    Informasi terpercaya
                  </h1>
                  <p>
                    Civitas akademika mendapatkan akses ke berita yang akurat,
                    cepat, dan bertanggung jawab setiap hari
                  </p>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h1 className="heading-h5 mb-3 font-bold md:mb-4">
                    Dokumentasi lengkap
                  </h1>
                  <p>
                    Arsip digital kami menyimpan setiap momen penting dalam
                    perjalanan panjang institusi
                  </p>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h1 className="heading-h5 mb-3 font-bold md:mb-4">
                    Komunikasi efektif
                  </h1>
                  <p>
                    Kami menjadi jembatan yang menghubungkan kampus dengan
                    masyarakat luas secara transparan
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Mulai" variant="secondary">
                Mulai
              </Button>
              <Button
                title="Pelajari"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Pelajari
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
