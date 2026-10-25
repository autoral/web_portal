import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import WhatYouCanControl from "./components/WhatYouCanControl";
import AppFeatures from "./components/AppFeatures";
import AutoralDevice from "./components/AutoralDevice";
import HowItWorks from "./components/HowItWorks";
import Download from "./components/Download";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] dark:bg-[#0a0f17] text-[#0e1726] dark:text-[#edf2f8] flex flex-col font-sans selection:bg-[#0066db] selection:text-white transition-colors duration-200">
      {/* 01 Header */}
      <Header />

      <main className="flex-1">
        {/* 02 Hero */}
        <Hero />

        {/* 03 Trust Strip */}
        <TrustStrip />

        {/* 04 What You Can Control */}
        <WhatYouCanControl />

        {/* 05 App Features */}
        <AppFeatures />

        {/* 06 Autoral Device */}
        <AutoralDevice />

        {/* 07 How It Works */}
        <HowItWorks />

        {/* 08 Download App */}
        <Download />

        {/* 09 About Us */}
        <AboutUs />

        {/* 10 FAQ */}
        <FAQ />

        {/* 11 Contact */}
        <Contact />
      </main>

      {/* 12 Footer */}
      <Footer />
    </div>
  );
}
