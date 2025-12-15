"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import React from "react";
import { BiCalendarAlt, BiMap, BiUser } from "react-icons/bi";

export function EventItemHeader6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <Breadcrumb className="flex w-full items-center">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Agenda</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Detail acara</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="heading-h2 mt-8 font-bold">
              Seminar internasional riset berkelanjutan
            </h1>
            <p className="text-medium mt-5 md:mt-6">
              Bergabunglah dengan para peneliti dan akademisi dalam diskusi
              mendalam tentang inovasi dan keberlanjutan.
            </p>
            <div className="text-small mt-5 flex flex-wrap gap-4 md:mt-6">
              <div className="flex items-center gap-2">
                <BiCalendarAlt className="size-6 flex-none" />
                Jum 15 Mar 2024
              </div>
              <div className="flex items-center gap-2">
                <BiMap className="size-6 flex-none" />
                <span>Auditorium utama</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 items-center">
                  <BiUser size={23} />
                </div>
                <span>5 pembicara</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Daftar sekarang">Daftar sekarang</Button>
              <Button title="Bagikan acara" variant="secondary">
                Bagikan acara
              </Button>
            </div>
          </div>
          <div>
            <div className="relative aspect-square">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full rounded-image object-cover"
                alt="Relume placeholder image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
