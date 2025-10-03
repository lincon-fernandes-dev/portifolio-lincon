import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/Header/Header";
import FooterComponent from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portifólio Lincon Pietrochinski Fernandes",
  description: "Portifólio Lincon Pietrochinski Fernandes - Desenvolvedor full stack, focado em soluções de aplicações web. especialista em Next.js, com experiencia também em React.js, Node.js, Express, SQL, C#, .NET, entre outras tecnologias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800 text-white min-h-screen max-w-full`}
      >
        <HeaderComponent />
          {children}
        <FooterComponent />
      </body>
    </html>
  );
}
