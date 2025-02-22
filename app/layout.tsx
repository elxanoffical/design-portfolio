import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import '../app/globals.css'

export const metadata: Metadata = {
  title: "Elxan Meherremli",
  description: "Fuad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-scroll border-[22px] hide-scrollbar border-[#EDEDED]">
        <div>
          <Header />

          <div>{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
