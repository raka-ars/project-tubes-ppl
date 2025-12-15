"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout136() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <div className="flex flex-col items-center justify-start">
          <div className="mb-5 md:mb-6">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
              className="size-20"
              alt="Relume logo"
            />
          </div>
          <p className="mb-3 font-semibold md:mb-4">Kepercayaan</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Kami membangun fondasi informasi kampus
          </h2>
          <p className="text-medium">
            TEL-U News lahir dari kebutuhan sederhana namun mendesak. Kampus
            memerlukan suara yang jelas, akurat, dan dapat dipercaya untuk
            menyampaikan cerita-ceritanya kepada dunia.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="Jelajahi" variant="secondary">
              Jelajahi
            </Button>
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
      </div>
    </section>
  );
}
