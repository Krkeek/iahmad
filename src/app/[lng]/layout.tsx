import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { dir } from 'i18next'
import {languages} from "@/app/i18n/settings";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Hijazi",
  description: "Take a look!",
};



export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
params: {
    lng
}
}: Readonly<{
  children: React.ReactNode;
  params: any
}>) {


  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
