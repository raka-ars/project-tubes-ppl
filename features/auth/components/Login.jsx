"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock authentication
        if (email && password) {
            localStorage.setItem("isAuthenticated", "true");
            router.push("/");
        } else {
            alert("Please enter email and password");
        }
    };

    return (
        <section className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-6 text-center">
                    <img
                        src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                        alt="Logo"
                        className="mx-auto h-12"
                    />
                    <h1 className="mt-4 text-2xl font-bold text-gray-900">Masuk Akun</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Silakan masuk untuk mengakses portal berita
                    </p>
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="nama@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Masuk
                    </Button>
                </form>
            </div>
        </section>
    );
}
