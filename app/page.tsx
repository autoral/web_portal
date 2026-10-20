import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import WhatYouCanControl from "./components/WhatYouCanControl";
import AppFeatures from "./components/AppFeatures";
import MollaHub from "./components/MollaHub";
import HowItWorks from "./components/HowItWorks";
import Download from "./components/Download";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WhatYouCanControl />
        <AppFeatures />
        <MollaHub />
        <HowItWorks />
        <Download />
        <AboutUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
