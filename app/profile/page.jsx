import React from "react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-100 h-32"></div>
                <div className="px-6 py-4 -mt-12 relative">
                    <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white overflow-hidden">
                        <img
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="mt-4">
                        <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
                        <p className="text-gray-600">Mahasiswa</p>
                    </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-200">
                    <h2 className="text-xl font-semibold mb-4">Informasi Pribadi</h2>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-500">Email</label>
                            <p className="text-gray-800">user@example.com</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">NIM</label>
                            <p className="text-gray-800">1234567890</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button>Edit Profile</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
