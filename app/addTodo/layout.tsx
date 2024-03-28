"use client";

import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Navbar />
      <div className="mt-8">{children}</div>
    </div>
  );
}
