"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Page from "@/features/beranda/index"

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return <Page />;
}

