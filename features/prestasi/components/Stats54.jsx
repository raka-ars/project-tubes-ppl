"use client";

import { Card } from "@/components/ui/card";
import React, { Fragment } from "react";

export function Stats54() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-start">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h1 className="heading-h3 font-bold">
            Pencapaian yang terus bertambah setiap tahun
          </h1>
          <p className="text-medium">
            TEL-U terus membuktikan keunggulannya melalui ratusan prestasi yang
            diraih oleh mahasiswa, dosen, dan unit kampus. Dari kompetisi
            nasional hingga penghargaan internasional, setiap pencapaian
            mencerminkan dedikasi dan kerja keras civitas akademika.
          </p>
        </div>
        <div className="grid w-full auto-cols-fr grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Fragment>
            <Card className="flex w-full flex-col items-center justify-center p-8 text-center md:col-span-2 lg:col-span-1 lg:row-span-2">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                450+
              </p>
              <h2 className="heading-h6 font-bold">Prestasi terdokumentasi</h2>
            </Card>
            <div className="">
              <img
                src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </div>
          </Fragment>
          <Fragment>
            <Card className="flex w-full flex-col items-center justify-center p-8 text-center">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                450+
              </p>
              <h2 className="heading-h6 font-bold">Prestasi terdokumentasi</h2>
            </Card>
            <div className="order-1 md:order-2">
              <img
                src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </div>
          </Fragment>
          <Fragment>
            <Card className="flex w-full flex-col items-center justify-center p-8 text-center order-2 md:order-1">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                450+
              </p>
              <h2 className="heading-h6 font-bold">Prestasi terdokumentasi</h2>
            </Card>
          </Fragment>
        </div>
      </div>
    </section>
  );
}
