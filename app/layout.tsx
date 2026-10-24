import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autoral Home – Smart Home Automation for Bangladesh",
  description:
    "Control lights, fans, AC, TV, water pump and more from one app. Works on your home Wi-Fi, even when the internet is down. Designed for Bangladesh.",
  keywords: [
    "smart home Bangladesh",
    "home automation Dhaka",
    "smart switch Bangladesh",
    "Autoral Home",
    "অটোরাল হোম",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${hindSiliguri.variable}`}>
      <body className="min-h-screen bg-[#f5f8fc] text-[#0e1726] selection:bg-[#0066db] selection:text-white">
        {children}
      </body>
    </html>
  );
}
