import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// O Next.js já otimiza a fonte do Google automaticamente
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empresa de RH | Soluções Corporativas",
  description:
    "Site corporativo profissional para soluções em Recursos Humanos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
