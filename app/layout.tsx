import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import "./globals.css";

// Noto Serif: Excellent Vietnamese diacritic support for headings
const notoSerif = Noto_Serif({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-serif',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

// Noto Sans: Clean, highly readable for Vietnamese body text
const notoSans = Noto_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Mùa Chay",
  description: 'Báo cáo Nghiên cứu: Động Năng Tâm Linh Và Thực Hành Trong Giáo Hội Công Giáo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
