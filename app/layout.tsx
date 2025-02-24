import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";

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
      <body>
        <div className="h-screen overflow-scroll border-[10px] md:border-[20px] hide-scrollbar border-[#EDEDED] rounded-b-3xl">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
