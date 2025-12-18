"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
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
    isMobile,
  };
};

export function Navbar2() {
  const useActive = useRelume();

  return (
    <section className="z-[999] flex w-full items-center bg-scheme-background px-[5%]">
      <div className="mx-auto flex w-full items-center justify-between">
        {/* Logo kiri */}
        <a href="/">
          <img
          />
        </a>

        {/* Profil kanan (desktop & mobile) */}
        <div className="flex items-center gap-4">
          <a
          >
            <img
            />
          </a>
        </div>
      </div>
    </section>
  );
}
