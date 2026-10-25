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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${hindSiliguri.variable}`}
    >
      <head>
        <script
          id="theme-lang-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');};var l=(localStorage.getItem('lang')||'').toLowerCase();if(l==='bn'){document.documentElement.lang='bn';document.documentElement.setAttribute('data-lang','BN');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#f5f8fc] dark:bg-[#0a0f17] text-[#0e1726] dark:text-[#edf2f8] selection:bg-[#0066db] selection:text-white transition-colors duration-200">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
