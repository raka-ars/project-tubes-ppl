"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact17() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div>
            <div className="mb-5 lg:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold lg:mb-4">Email</h3>
            <p className="mb-5 md:mb-6">
              Kirimkan pertanyaan atau proposal anda melalui email resmi kami
            </p>
            <a className="underline" href="#">
              hello@relume.io
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold lg:mb-4">Telepon</h3>
            <p className="mb-5 md:mb-6">
              Hubungi tim kami untuk diskusi lebih lanjut
            </p>
            <a className="underline" href="#">
              +62 (21) 555-0100
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold lg:mb-4">Kantor</h3>
            <p className="mb-5 md:mb-6">
              Kunjungi lokasi kami di kampus untuk bertemu langsung
            </p>
            <a className="underline" href="#">
              Jalan Tanjungsari, Jakarta Selatan 12520
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
