"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  IconHomeFill,
  IconDarkMode,
  IconLightMode,
  IconMenuBars,
  IconChevronRight,
  IconClose,
} from "./Icons";
import GetAppSheet from "./GetAppSheet";
import ContactSheet from "./ContactSheet";
import BookInstallationSheet from "./BookInstallationSheet";

const themeListeners = new Set<() => void>();

const subscribeTheme = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  themeListeners.add(callback);

  const observer = new MutationObserver(() => {
    callback();
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  const handleStorage = () => callback();
  const handleCustom = () => callback();

  window.addEventListener("storage", handleStorage);
  window.addEventListener("theme-change", handleCustom);

  return () => {
    themeListeners.delete(callback);
    observer.disconnect();
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("theme-change", handleCustom);
  };
};

const getThemeSnapshot = () => {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const getServerSnapshot = () => "light";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Header() {
  const { setLang, isBN } = useLanguage();
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerSnapshot);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [getAppSheetOpen, setGetAppSheetOpen] = useState(false);
  const [contactSheetOpen, setContactSheetOpen] = useState(false);
  const [bookInstallationOpen, setBookInstallationOpen] = useState(false);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextDark = !isCurrentlyDark;
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      // ignore
    }
    // Synchronously notify all useSyncExternalStore subscribers across the app
    themeListeners.forEach((fn) => {
      try {
        fn();
      } catch {}
    });
    window.dispatchEvent(new Event("theme-change"));
  };

  // Listen for global modal open events from mobile buttons
  useEffect(() => {
    const handleOpenGetApp = () => setGetAppSheetOpen(true);
    const handleOpenContact = () => setContactSheetOpen(true);
    const handleOpenBook = () => setBookInstallationOpen(true);
    window.addEventListener("open-get-app", handleOpenGetApp);
    window.addEventListener("open-contact-sheet", handleOpenContact);
    window.addEventListener("open-book-installation", handleOpenBook);
    return () => {
      window.removeEventListener("open-get-app", handleOpenGetApp);
      window.removeEventListener("open-contact-sheet", handleOpenContact);
      window.removeEventListener("open-book-installation", handleOpenBook);
    };
  }, []);

  const tHeader = translations.header;
  const lKey = isBN ? "bn" : "en";

  const navLinks = [
    { label: tHeader.features[lKey], href: "#features", key: "features" },
    { label: tHeader.device[lKey], href: "#device", key: "device" },
    { label: tHeader.howItWorks[lKey], href: "#how-it-works", key: "howItWorks" },
    { label: tHeader.download[lKey], href: "#download", key: "download" },
    { label: tHeader.about[lKey], href: "#about", key: "about" },
    { label: tHeader.faq[lKey], href: "#faq", key: "faq" },
    { label: tHeader.contact[lKey], href: "#contact", key: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 dark:bg-[#0c1523]/90 backdrop-blur-xl border-b border-[#d8e1ec] dark:border-[#2a3546] transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-[69px] lg:h-[85px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-[10px] group transition-transform active:scale-95 shrink-0"
        >
          <div className="w-10 h-10 rounded-[12px] bg-[#0066db] flex items-center justify-center text-white shadow-xs group-hover:scale-105 group-hover:shadow-[0px_4px_14px_rgba(0,102,219,0.35)] transition-all duration-200 shrink-0">
            <IconHomeFill className="w-6 h-6 text-white" />
          </div>
          <div className="font-semibold text-[18px] text-[#0e1726] dark:text-[#edf2f8] tracking-tight group-hover:text-[#0066db] dark:group-hover:text-[#84beff] transition-colors duration-200 text-left">
            <span className="hidden sm:inline whitespace-nowrap leading-[26px]">
              {tHeader.brandName[lKey]}
            </span>
            <div className="sm:hidden flex flex-col leading-[18px]">
              {isBN ? (
                <span>{tHeader.brandName.bn}</span>
              ) : (
                <>
                  <span>Autoral</span>
                  <span>Home</span>
                </>
              )}
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[36px]">
          {navLinks
            .filter((l) => l.key !== "faq")
            .map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[15px] font-medium leading-[22px] text-[#4a5a70] dark:text-[#b4c1d1] hover:text-[#0e1726] dark:hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0066db] dark:after:bg-[#84beff] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-[8px] sm:gap-[12px] lg:gap-[16px] shrink-0">
          {/* Language Toggle */}
          <div className="bg-[#edf2f8] dark:bg-[#151d29] border border-[#d8e1ec] dark:border-[#2a3546] rounded-full p-[4px] flex items-center gap-[2px] shadow-xs transition-colors">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-[12px] sm:px-[14px] py-[5px] sm:py-[6px] text-[14px] sm:text-[15px] font-medium leading-[20px] sm:leading-[22px] rounded-full transition-all duration-200 cursor-pointer ${
                !isBN
                  ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726] shadow-xs"
                  : "text-[#4a5a70] dark:text-[#b4c1d1] hover:text-[#0e1726] dark:hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("bn")}
              className={`px-[12px] sm:px-[14px] py-[5px] sm:py-[6px] text-[14px] sm:text-[15px] font-medium leading-[20px] sm:leading-[22px] font-bengali rounded-full transition-all duration-200 cursor-pointer ${
                isBN
                  ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726] shadow-xs"
                  : "text-[#4a5a70] dark:text-[#b4c1d1] hover:text-[#0e1726] dark:hover:text-white"
              }`}
            >
              বাংলা
            </button>
          </div>

          {/* Theme Toggle (Figma 4501:15237 / 4438:94891: 44x44 circular button on desktop, tablet, and mobile) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center size-[44px] rounded-full bg-[#edf2f8] dark:bg-[#151d29] border border-[#d8e1ec] dark:border-[#2a3546] text-[#0066db] dark:text-[#84beff] hover:bg-[#e4ebf5] dark:hover:bg-[#1e2836] transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? (
              <IconLightMode className="size-[22px]" />
            ) : (
              <IconDarkMode className="size-[22px]" />
            )}
          </button>

          {/* Tablet & Mobile Menu Button (Figma 4237:608 / 4251:12601) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden items-center justify-center size-[44px] rounded-full bg-[#edf2f8] dark:bg-[#151d29] border border-[#d8e1ec] dark:border-[#2a3546] text-[#0066db] dark:text-[#84beff] hover:bg-[#e4ebf5] dark:hover:bg-[#1e2836] transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <IconClose className="size-[20px]" />
            ) : (
              <IconMenuBars className="size-[22px]" />
            )}
          </button>

          {/* Desktop CTA */}
          <a
            href="#download"
            className="hidden lg:flex h-[48px] px-[24px] rounded-[24px] bg-[#0066db] hover:bg-[#0052b3] dark:bg-[#84beff] dark:hover:bg-[#a6d2ff] active:scale-98 text-white dark:text-[#071d3d] font-semibold text-[16px] leading-[24px] items-center justify-center transition-all duration-200 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)] hover:shadow-[0px_4px_16px_rgba(0,102,219,0.35)] hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            {tHeader.getTheApp[lKey]}
          </a>
        </div>
      </div>

      {/* Mobile Menu Panel (Figma Mobile 4251:12570) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0c1523] border-b border-[#d8e1ec] dark:border-[#2a3546] rounded-b-[24px] shadow-[0px_20px_40px_rgba(10,42,92,0.15)] overflow-hidden animate-in slide-in-from-top-2 duration-200">
          {/* Navigation Links */}
          <div className="flex flex-col items-start px-4 pt-2 w-full">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (item.key === "contact") {
                    e.preventDefault();
                    setContactSheetOpen(true);
                  }
                }}
                className="w-full py-4 border-b border-[#d8e1ec] dark:border-[#2a3546] flex items-center justify-between group cursor-pointer transition-colors"
              >
                <span className="text-[18px] font-semibold leading-[26px] text-[#0e1726] dark:text-[#edf2f8] group-hover:text-[#0066db] dark:group-hover:text-[#84beff] transition-colors">
                  {item.label}
                </span>
                <IconChevronRight className="size-6 text-[#0066db] dark:text-[#84beff] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            ))}

            {/* Theme Toggle in Mobile Menu */}
            <div className="w-full py-4 border-b border-[#d8e1ec] dark:border-[#2a3546] flex items-center justify-between">
              <span className="text-[18px] font-semibold leading-[26px] text-[#0e1726] dark:text-[#edf2f8]">
                {isBN ? "থিম" : "Theme"}
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf2f8] dark:bg-[#151d29] border border-[#d8e1ec] dark:border-[#2a3546] text-[#0066db] dark:text-[#84beff] text-[14px] font-medium transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                {theme === "dark" ? (
                  <>
                    <IconLightMode className="size-[18px]" />
                    <span>{isBN ? "লাইট মোড" : "Light Mode"}</span>
                  </>
                ) : (
                  <>
                    <IconDarkMode className="size-[18px]" />
                    <span>{isBN ? "ডার্ক মোড" : "Dark Mode"}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-5 px-4 pb-6 w-full">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setGetAppSheetOpen(true);
              }}
              className="btn-primary w-full h-12 rounded-full font-semibold text-[16px] leading-[24px] flex items-center justify-center shadow-md active:scale-98 transition-all cursor-pointer dark:bg-[#84beff] dark:text-[#071d3d] dark:hover:bg-[#a6d2ff]"
            >
              {tHeader.getTheApp[lKey]}
            </button>
          </div>
        </div>
      )}

      {/* Mobile / Get App Sheet (Figma 4279:13237) */}
      <GetAppSheet
        isOpen={getAppSheetOpen}
        onClose={() => setGetAppSheetOpen(false)}
      />

      {/* Mobile / Contact Sheet (Figma 4279:13293) */}
      <ContactSheet
        isOpen={contactSheetOpen}
        onClose={() => setContactSheetOpen(false)}
      />

      {/* Mobile / Book Installation Sheet (Figma 4444:19412) */}
      <BookInstallationSheet
        isOpen={bookInstallationOpen}
        onClose={() => setBookInstallationOpen(false)}
      />
    </header>
  );
}
