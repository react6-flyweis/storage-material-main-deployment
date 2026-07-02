import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steel Building Depot",
  description:
    "Engineered Steel Buildings Built for Strength, Style & Longevity.",
  icons: [
    {
      url: "/android_chrome_192X192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android_chrome_512X512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      url: "/apple_touch_icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      url: "/icon.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/icon.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/icon.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      url: "/mstile_150X150.png",
      sizes: "150x150",
      type: "image/png",
    },
    {
      url: "/safari_pinned_tab.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${workSans.variable} antialiased`}>
        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
