"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

export function Layout394() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-blue-300 md:mb-4 tracking-wider uppercase text-sm">Fitur Unggulan</p>
          <h1 className="heading-h2 mb-5 font-bold text-3xl md:text-4xl text-white md:mb-6 drop-shadow-md">
            Apa yang kami tawarkan
          </h1>
          <p className="text-slate-300 text-lg">
            Informasi kampus diperbarui setiap hari dengan standar jurnalistik
            profesional
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid auto-cols-fr grid-cols-1 gap-8 md:gap-10 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col h-full overflow-hidden border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/20 rounded-2xl group">
              <div className="relative h-48 w-full overflow-hidden bg-blue-900/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500" />
                <img
                  src="/images/news-header.jpg"
                  alt="Berita"
                  className="h-full w-full object-cover opacity-60 mix-blend-overlay group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-[2px]">
                  <Button variant="secondary" size="sm" className="bg-white/90 text-blue-900 hover:bg-white border-0 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Jelajahi
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div>
                  <p className="mb-2 text-sm font-bold text-blue-300 uppercase tracking-wide">Berita</p>
                  <h2 className="mb-3 text-xl font-bold text-white md:mb-4">
                    Berita terkini dari seluruh kampus
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    Liputan lengkap tentang perkembangan akademik, penelitian, dan
                    kegiatan mahasiswa yang inspiratif.
                  </p>
                </div>
                <div className="mt-6 md:mt-8 pt-4 border-t border-white/10">
                  <Button
                    title="Baca"
                    variant="link"
                    size="sm"
                    className="p-0 text-blue-300 hover:text-white font-semibold group/btn"
                  >
                    Baca Selengkapnya
                    <RxChevronRight className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col h-full overflow-hidden border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/20 rounded-2xl group">
              <div className="relative h-48 w-full overflow-hidden bg-indigo-900/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 group-hover:scale-105 transition-transform duration-500" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Agenda"
                  className="h-full w-full object-cover opacity-60 mix-blend-overlay group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-[2px]">
                  <Button variant="secondary" size="sm" className="bg-white/90 text-indigo-900 hover:bg-white border-0 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Jelajahi
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div>
                  <p className="mb-2 text-sm font-bold text-indigo-300 uppercase tracking-wide">Agenda</p>
                  <h2 className="mb-3 text-xl font-bold text-white md:mb-4">
                    Jadwal acara dan kegiatan kampus
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    Pantau semua agenda resmi, seminar nasional, dan acara penting di
                    lingkungan kampus.
                  </p>
                </div>
                <div className="mt-6 md:mt-8 pt-4 border-t border-white/10">
                  <Button
                    title="Lihat"
                    variant="link"
                    size="sm"
                    className="p-0 text-indigo-300 hover:text-white font-semibold group/btn"
                  >
                    Lihat Jadwal
                    <RxChevronRight className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col h-full overflow-hidden border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/20 rounded-2xl group">
              <div className="relative h-48 w-full overflow-hidden bg-purple-900/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 group-hover:scale-105 transition-transform duration-500" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Prestasi"
                  className="h-full w-full object-cover opacity-60 mix-blend-overlay group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-[2px]">
                  <Button variant="secondary" size="sm" className="bg-white/90 text-purple-900 hover:bg-white border-0 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Jelajahi
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div>
                  <p className="mb-2 text-sm font-bold text-purple-300 uppercase tracking-wide">Prestasi</p>
                  <h2 className="mb-3 text-xl font-bold text-white md:mb-4">
                    Pencapaian mahasiswa dan dosen
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    Rayakan prestasi akademik, kemenangan kompetisi, dan inovasi membanggakan dari civitas akademika.
                  </p>
                </div>
                <div className="mt-6 md:mt-8 pt-4 border-t border-white/10">
                  <Button
                    title="Saksikan"
                    variant="link"
                    size="sm"
                    className="p-0 text-purple-300 hover:text-white font-semibold group/btn"
                  >
                    Lihat Prestasi
                    <RxChevronRight className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
