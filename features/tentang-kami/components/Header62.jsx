"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Informasi</p>
        <h1 className="heading-h1 mb-5 font-bold md:mb-6">Jantung kampus</h1>
        <p className="text-medium">
          Kami menghadirkan berita terpercaya dari setiap sudut kehidupan
          akademik anda
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Baca">Baca</Button>
          <Button title="Pelajari" variant="secondary">
            Pelajari
          </Button>
        </div>
      </div>
    </section>
  );
}
