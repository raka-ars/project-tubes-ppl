"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";

  return {
    toggleMobileMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
  };
};

export function Navbar2() {
  const useActive = useRelume();

  return (
    <section className="z-[999] flex w-full items-center bg-scheme-background px-[5%]">
      <div className="mx-auto flex w-full items-center justify-between">
        {/* Kiri: Logo */}
        <a href="/">
          <img
          />
        </a>

        {/* Kanan: Tombol Publikasi (desktop) */}
        <div className="hidden lg:block">
          <Button className="px-6 py-2" title="Publikasi" size="sm">
            Publikasi
          </Button>
        </div>

        {/* Kanan: Tombol Publikasi + Hamburger (mobile) */}
        <div className="flex items-center gap-4 lg:hidden">
          <Button className="w-full px-4 py-1" title="Publikasi" size="sm">
            Publikasi
          </Button>

          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu dikosongkan (tidak ada item navigasi) */}
      <AnimatePresence>
        <motion.div
          variants={{
            open: { height: "100dvh" },
            close: { height: 0 },
          }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="absolute left-0 top-16 w-full overflow-hidden bg-scheme-background px-[5%] text-center lg:hidden"
        />
      </AnimatePresence>
    </section>
  );
}
