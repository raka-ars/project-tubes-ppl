"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        if (email && password) {
            localStorage.setItem("isAuthenticated", "true");
            router.push("/");
            router.refresh();
        } else {
            alert("Please enter email and password");
            setIsLoading(false);
        }
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-5 py-12">

            {/* Background Decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl filter"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-purple-600 opacity-20 blur-3xl filter"
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-md ring-1 ring-black/5"
            >
                <div className="mb-8 text-center">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white/10 shadow-inner backdrop-blur-sm p-4"
                    >
                        <img
                            src="/logo.png"
                            alt="Logo App"
                            className="h-full w-full object-contain drop-shadow-lg"
                        />
                    </motion.div>
                    <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-md">Selamat Datang</h1>
                    <p className="mt-2 text-sm text-blue-100/70">
                        Masuk untuk memulai sesi Anda
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-blue-50">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="nama@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-white/10 bg-black/20 text-white placeholder:text-white/20 focus:border-blue-400 focus:ring-blue-400/50 hover:bg-black/30 transition-all duration-300"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="text-blue-50">Password</Label>
                            <a href="#" className="text-xs text-blue-300 hover:text-blue-100 hover:underline transition-colors">
                                Lupa sandi?
                            </a>
                        </div>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border-white/10 bg-black/20 pr-10 text-white placeholder:text-white/20 focus:border-blue-400 focus:ring-blue-400/50 hover:bg-black/30 transition-all duration-300"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25 border-0 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <FaSpinner className="animate-spin" />
                                <span>Memverifikasi...</span>
                            </div>
                        ) : (
                            "Masuk Sekarang"
                        )}
                    </Button>
                </form>
            </motion.div>

            <div className="absolute bottom-6 text-center text-xs text-blue-200/30">
                &copy; 2024 Portal Berita NTT. All rights reserved.
            </div>
        </section>
    );
}
