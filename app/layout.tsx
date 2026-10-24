import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Autoral Home – Smart Home Automation for Bangladesh",
  description:
    "Control lights, fans, AC, TV, water pump and more from one app. Works on your home Wi-Fi, even when the internet is down. Designed for Bangladesh.",
  keywords: [
    "smart home Bangladesh",
    "home automation Dhaka",
    "smart switch Bangladesh",
    "Autoral Home",
    "home control app",
    "স্মার্ট হোম",
  ],
  openGraph: {
    title: "Autoral Home – Smart Home Automation for Bangladesh",
    description:
      "Control your whole home from one app. Works on Wi-Fi, even offline.",
    type: "website",
    locale: "en_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoral Home – Smart Home Automation for Bangladesh",
    description: "Control your whole home from one app.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning style={{ width: "100%" }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("autoral-theme");if(s==="dark"){document.documentElement.classList.add("dark");document.documentElement.setAttribute("data-theme","dark");}else{document.documentElement.classList.remove("dark");document.documentElement.setAttribute("data-theme","light");}}catch(e){}})();`,
          }}
        />
      </head>
      <body style={{ width: "100%", margin: 0 }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
