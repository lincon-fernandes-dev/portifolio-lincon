import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/Header/Header";
import FooterComponent from "@/components/Footer/Footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "../../../i18n/routing";
import { notFound } from "next/navigation";

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
  description:
    "Portifólio Lincon Pietrochinski Fernandes - Desenvolvedor full stack, focado em soluções de aplicações web. especialista em Next.js, com experiencia também em React.js, Node.js, Express, SQL, C#, .NET, entre outras tecnologias.",
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800 text-white min-h-screen max-w-full`}
      >
        <NextIntlClientProvider>
          <HeaderComponent />
          {children}
          <FooterComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
