import type { Metadata } from "next";

import { Manrope, Markazi_Text } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400','500', '600', '700', '800'],
  variable: '--font-manrope',
});

const markaziText = Markazi_Text({
  subsets: ['latin'],
  weight: ['400','500', '600', '700'],
  variable: '--font-markazi',
});

export const metadata: Metadata = {
  title: "Test Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${markaziText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
