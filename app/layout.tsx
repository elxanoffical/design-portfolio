import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elxan Meherremli Portfolio",
  description: "ELxan Meherremli Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-scroll border-[22px] hide-scrollbar border-[#EDEDED]">
        {children}
      </body>
    </html>
  );
}
