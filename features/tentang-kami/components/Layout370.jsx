"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout370() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Keunggulan</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Apa yang membuat kami berbeda
            </h2>
            <p className="text-medium">
              Tiga pilar utama mendorong setiap keputusan kami
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="flex flex-col">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="text-small mb-2 font-semibold">Redaksi</p>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Tim profesional berpengalaman
                  </h3>
                  <p>
                    Jurnalis dan editor terlatih menjaga standar kualitas
                    tertinggi
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            </Card>
            <Card className="flex flex-col">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="text-small mb-2 font-semibold">Redaksi</p>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Tim profesional berpengalaman
                  </h3>
                  <p>
                    Jurnalis dan editor terlatih menjaga standar kualitas
                    tertinggi
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            </Card>
            <Card className="grid grid-cols-1 sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="text-small mb-2 font-semibold">Publikasi</p>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Ruang untuk suara unit kampus
                  </h3>
                  <p>
                    Setiap fakultas dan program studi memiliki kesempatan
                    berbagi
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
