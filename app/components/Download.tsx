"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// High-fidelity QR Code Icon matching Figma 76x76 size
function IconQrCodeDetailed({ className = "size-full" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top Left Finder */}
      <rect x="4" y="4" width="22" height="22" rx="4" fill="#0e1726" />
      <rect x="8" y="8" width="14" height="14" rx="2" fill="white" />
      <rect x="11" y="11" width="8" height="8" rx="1.5" fill="#0e1726" />

      {/* Top Right Finder */}
      <rect x="50" y="4" width="22" height="22" rx="4" fill="#0e1726" />
      <rect x="54" y="8" width="14" height="14" rx="2" fill="white" />
      <rect x="57" y="11" width="8" height="8" rx="1.5" fill="#0e1726" />

      {/* Bottom Left Finder */}
      <rect x="4" y="50" width="22" height="22" rx="4" fill="#0e1726" />
      <rect x="8" y="54" width="14" height="14" rx="2" fill="white" />
      <rect x="11" y="57" width="8" height="8" rx="1.5" fill="#0e1726" />

      {/* Data Modules */}
      <rect x="30" y="6" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="38" y="6" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="42" y="10" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="30" y="14" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="34" y="18" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="42" y="18" width="4" height="4" rx="1" fill="#0e1726" />

      <rect x="6" y="30" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="14" y="30" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="10" y="38" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="18" y="42" width="4" height="4" rx="1" fill="#0e1726" />

      {/* Center cluster */}
      <rect x="28" y="28" width="6" height="6" rx="1" fill="#0e1726" />
      <rect x="38" y="28" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="46" y="28" width="6" height="6" rx="1" fill="#0e1726" />
      <rect x="34" y="36" width="6" height="6" rx="1" fill="#0e1726" />
      <rect x="44" y="38" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="28" y="44" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="38" y="44" width="6" height="6" rx="1" fill="#0e1726" />

      {/* Right / Bottom Data */}
      <rect x="54" y="30" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="62" y="34" width="6" height="4" rx="1" fill="#0e1726" />
      <rect x="54" y="40" width="4" height="6" rx="1" fill="#0e1726" />
      <rect x="66" y="42" width="4" height="4" rx="1" fill="#0e1726" />

      <rect x="30" y="54" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="38" y="54" width="4" height="6" rx="1" fill="#0e1726" />
      <rect x="46" y="54" width="6" height="4" rx="1" fill="#0e1726" />
      <rect x="34" y="62" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="44" y="62" width="6" height="6" rx="1" fill="#0e1726" />
      <rect x="54" y="52" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="62" y="56" width="6" height="4" rx="1" fill="#0e1726" />
      <rect x="56" y="64" width="4" height="4" rx="1" fill="#0e1726" />
      <rect x="66" y="64" width="4" height="4" rx="1" fill="#0e1726" />
    </svg>
  );
}

export default function Download() {
  const { lang } = useLanguage();
  const t = translations.download;

  const [phoneStep, setPhoneStep] = useState<"splash" | "language">("splash");
  const [selectedLang, setSelectedLang] = useState<"en" | "bn">("en");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Cycle between Flow 01 splash screen (with loading) and language selector screen
  const activeStep = phoneStep;

  useEffect(() => {
    if (isPaused) return;

    let timer: NodeJS.Timeout;

    if (phoneStep === "splash") {
      timer = setTimeout(() => {
        setPhoneStep("language");
      }, 2400);
    } else {
      timer = setTimeout(() => {
        setPhoneStep("splash");
      }, 6500);
    }

    return () => clearTimeout(timer);
  }, [phoneStep, isPaused]);

  // Restart from splash when scrolled into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPhoneStep("splash");
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="download"
      ref={sectionRef}
      className="w-full bg-[#f5f8fc] dark:bg-[#0a0f17] py-16 sm:py-20 lg:py-[112px] transition-colors duration-200"
      data-node-id="4239:1197"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Blue Banner Card (Figma 4239:1198: 1200x564, rounded-[40px], bg-[#0066db]) */}
        <div className="bg-[#0066db] rounded-[40px] overflow-hidden text-white relative flex flex-col lg:flex-row items-center justify-between pl-6 sm:pl-10 lg:pl-[72px] pr-6 sm:pr-10 lg:pr-0 shadow-[0px_20px_50px_rgba(0,102,219,0.22)] lg:h-[564px]">
          {/* Left: Copy & Actions */}
          <div className="flex flex-col gap-6 items-start py-10 sm:py-14 lg:py-0 w-full lg:max-w-[580px] z-10">
            {/* Overline */}
            <p className="text-[12px] font-semibold leading-[16px] tracking-[0.96px] uppercase text-white">
              {t.overline[lang]}
            </p>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] lg:leading-[52px] tracking-[-1px] text-white">
              {t.title[lang]}
            </h2>

            {/* Body */}
            <p className="text-[16px] sm:text-[18px] font-normal leading-[28px] text-white/95">
              {t.body[lang]}
            </p>

            {/* Store Badges - Official Black Pill Buttons from Figma */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Google Play */}
              <a
                href="#download"
                className="bg-black hover:bg-neutral-800 active:scale-98 transition-all duration-200 rounded-[14px] pl-[14px] pr-[16px] py-[10px] flex items-center gap-[10px] shrink-0 text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                aria-label="Get it on Google Play"
              >
                <div className="size-6 shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/icon-googleplay.svg"
                    alt="Google Play"
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[12px] font-normal leading-[16px] text-white">
                    GET IT ON
                  </span>
                  <span className="text-[18px] font-semibold leading-[26px] text-white">
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#download"
                className="bg-black hover:bg-neutral-800 active:scale-98 transition-all duration-200 rounded-[14px] pl-[14px] pr-[16px] py-[10px] flex items-center gap-[10px] shrink-0 text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                aria-label="Download on the App Store"
              >
                <div className="size-6 shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/icon-apple.svg"
                    alt="App Store"
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[12px] font-normal leading-[16px] text-white">
                    Download on the
                  </span>
                  <span className="text-[18px] font-semibold leading-[26px] text-white">
                    App Store
                  </span>
                </div>
              </a>
            </div>

            {/* QR Code Container (Figma 4239:1216) */}
            <div className="bg-white/[0.28] hover:bg-white/[0.36] border border-white/90 backdrop-blur-md rounded-[24px] pl-[12px] pr-[24px] py-[12px] flex items-center gap-[20px] shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full max-w-[396px] group cursor-pointer">
              <div className="size-[96px] rounded-[16px] bg-white flex items-center justify-center shrink-0 p-2 shadow-xs transition-transform duration-300 group-hover:scale-105">
                <div className="size-[76px] flex items-center justify-center">
                  <IconQrCodeDetailed className="size-full" />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start text-left text-white">
                <span className="text-[18px] font-semibold leading-[26px] group-hover:translate-x-0.5 transition-transform duration-200">
                  {t.qrTitle[lang]}
                </span>
                <span className="text-[14px] font-normal leading-[20px] text-white/90">
                  {t.qrBody[lang]}
                </span>
              </div>
            </div>

            {/* Platform Requirements */}
            <p className="text-[14px] font-normal leading-[20px] text-white/85 pt-1">
              {t.req[lang]}
            </p>
          </div>

          {/* Right: iPhone Mockup with Ambient Halo (Figma Desktop 4239:1224: w-440, h-564; Hidden on Tablet & Mobile Figma 4438:93742) */}
          <div className="hidden lg:flex w-[440px] h-[564px] relative shrink-0 items-end justify-start">
            {/* Ambient Halo Circle (Figma 4239:1225: smooth circular halo wrapping phone, clipped by outer card rounded-40px) */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:left-[-22px] lg:translate-x-0 top-1/2 -translate-y-1/2 size-[520px] rounded-full bg-white/[0.18] pointer-events-none" />

            {/* iPhone 17 Pro Cropped Mockup with Flow 01 Splash -> Language Transition */}
            <div
              className="absolute left-1/2 -translate-x-1/2 lg:left-[71px] lg:translate-x-0 bottom-0 z-10 w-[333px] h-[501px] overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Inner Phone Screen Content */}
              <div
                className="absolute overflow-hidden bg-white dark:bg-[#0a0f17] rounded-[42px] flex flex-col justify-start transition-colors duration-200"
                style={{
                  top: "17px",
                  left: "17.8px",
                  width: "297.5px",
                  height: "646.8px",
                }}
              >
                {/* Status Bar (44px at Top - Shared by both views) */}
                <div className="w-full h-[44px] px-4.5 flex items-center justify-between z-20 pointer-events-none text-[#0e1726] dark:text-white pt-1.5 shrink-0">
                  {/* Time */}
                  <div className="w-12 text-[13px] font-semibold tracking-tight text-center">
                    9:41
                  </div>

                  {/* Dynamic Island Spacer */}
                  <div className="w-[92px] h-[26px]" />

                  {/* Cellular, Wi-Fi, Battery */}
                  <div className="w-12 flex items-center justify-end gap-1.5">
                    <div className="flex items-end gap-[1px] h-2.5">
                      <span className="w-[2px] h-1 bg-[#0e1726] dark:bg-white rounded-2xs" />
                      <span className="w-[2px] h-1.5 bg-[#0e1726] dark:bg-white rounded-2xs" />
                      <span className="w-[2px] h-2 bg-[#0e1726] dark:bg-white rounded-2xs" />
                      <span className="w-[2px] h-2.5 bg-[#0e1726] dark:bg-white rounded-2xs" />
                    </div>
                    <svg className="w-3.5 h-3.5 text-[#0e1726] dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                    <div className="w-[18px] h-[9px] rounded-[3px] border border-[#0e1726] dark:border-white p-[1px] flex items-center relative">
                      <div className="w-full h-full bg-[#0e1726] dark:bg-white rounded-2xs" />
                      <div className="w-[1px] h-[3px] bg-[#0e1726] dark:bg-white rounded-r-2xs absolute -right-[2px] top-[2px]" />
                    </div>
                  </div>
                </div>

                {/* VIEW 1: FLOW 01 SPLASH SCREEN WITH LOGO */}
                <div
                  className={`absolute inset-0 pt-[44px] flex flex-col items-center justify-center transition-all duration-600 ease-in-out ${
                    activeStep === "splash"
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col items-center text-center -mt-16">
                    {/* App Icon: Light (Blue squircle with white home) / Dark (White squircle with blue home as in reference image) */}
                    <div className="size-[78px] dark:size-[86px] rounded-[24px] dark:rounded-[28px] bg-[#0066db] dark:bg-white flex items-center justify-center shadow-lg shadow-[#0066db]/25 dark:shadow-[0px_8px_32px_rgba(0,0,0,0.5)] transition-all">
                      <svg width="36" height="38" viewBox="150 287 33 36" fill="none">
                        <path
                          d="M151.075 319.12V300.321C151.075 299.871 151.171 299.437 151.364 299.019C151.589 298.601 151.878 298.264 152.232 298.007L164.765 288.607C165.279 288.222 165.857 288.029 166.5 288.029C167.143 288.029 167.721 288.222 168.235 288.607L180.768 298.007C181.121 298.264 181.411 298.601 181.636 299.019C181.828 299.437 181.925 299.871 181.925 300.321V319.12C181.925 319.923 181.636 320.598 181.057 321.144C180.511 321.723 179.836 322.012 179.033 322.012H171.802C171.384 322.012 171.047 321.867 170.79 321.578C170.501 321.321 170.356 320.983 170.356 320.566V309.961C170.356 309.543 170.211 309.206 169.922 308.949C169.665 308.66 169.328 308.515 168.91 308.515H164.09C163.672 308.515 163.335 308.66 163.077 308.949C162.788 309.206 162.644 309.543 162.644 309.961V320.566C162.644 320.983 162.499 321.321 162.21 321.578C161.953 321.867 161.615 322.012 161.198 322.012H153.967C153.164 322.012 152.489 321.723 151.943 321.144C151.364 320.598 151.075 319.923 151.075 319.12Z"
                          className="fill-white dark:fill-[#0066db] transition-colors"
                        />
                      </svg>
                    </div>

                    {/* App Title & Bengali Subtitle */}
                    <h3 className="text-[20px] dark:text-[24px] font-semibold dark:font-bold text-[#0e1726] dark:text-white tracking-tight mt-3.5 dark:mt-5 transition-all">
                      Autoral Home
                    </h3>
                    <p className="text-[12.5px] dark:text-[14px] font-normal text-[#4a5a70] dark:text-white/80 mt-1 dark:mt-2 transition-all">
                      অটোরাল হোম অটোমেশন
                    </p>

                    {/* Animated Loading Spinner */}
                    <div className="mt-8 flex flex-col items-center gap-2.5">
                      <div className="size-6 border-[2.5px] border-[#0066db]/20 dark:border-white/25 border-t-[#0066db] dark:border-t-white rounded-full animate-spin" />
                      <span className="text-[11px] font-medium text-[#4a5a70] dark:text-[#8b9aae] tracking-wide">
                        Loading...
                      </span>
                    </div>
                  </div>
                </div>

                {/* VIEW 2: FLOW 01 CHOOSE YOUR LANGUAGE SCREEN */}
                <div
                  className={`absolute inset-0 pt-[44px] flex flex-col justify-start transition-all duration-600 ease-in-out ${
                    activeStep === "language"
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <div className="px-5 pt-4 pb-8 flex flex-col items-start text-left">
                    {/* Translation Icon 文A */}
                    <div className="size-7 mb-3 text-[#1a1a1a] dark:text-white dark:invert">
                      <Image
                        src="/icons/icon-language.svg"
                        alt="Language"
                        width={28}
                        height={28}
                        className="size-7"
                      />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-[18px] font-semibold text-[#0e1726] dark:text-white leading-tight mb-1">
                      Choose your language
                    </h3>
                    <p className="text-[13px] text-[#4a5a70] dark:text-[#8b9aae] leading-none mb-5">
                      ভাষা বেছে নিন
                    </p>

                    {/* Language Selection Cards */}
                    <div className="w-full space-y-2.5 relative z-30">
                      {/* English Option */}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLang("en");
                          setIsPaused(true);
                        }}
                        className={`w-full rounded-[14px] px-3.5 py-3 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                          selectedLang === "en"
                            ? "bg-white dark:bg-[#131d2a] border-2 border-[#0066db] dark:border-[#84beff] shadow-[0px_4px_16px_rgba(0,102,219,0.08)]"
                            : "bg-white dark:bg-[#131d2a] border-2 border-[#d8e1ec] dark:border-[#233144] hover:border-[#0066db]/50"
                        }`}
                      >
                        <div>
                          <div className="text-[15px] font-semibold text-[#0e1726] dark:text-white leading-tight">
                            English
                          </div>
                          <div className="text-[12px] text-[#64748b] dark:text-[#8b9aae] leading-tight mt-0.5">
                            English
                          </div>
                        </div>
                        <div
                          className={`size-5 rounded-full flex items-center justify-center transition-all ${
                            selectedLang === "en"
                              ? "border-2 border-[#0066db] dark:border-[#84beff]"
                              : "border-2 border-[#cbd5e1] dark:border-[#233144]"
                          }`}
                        >
                          {selectedLang === "en" && (
                            <div className="size-2.5 rounded-full bg-[#0066db] dark:bg-[#84beff]" />
                          )}
                        </div>
                      </button>

                      {/* Bangla Option */}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLang("bn");
                          setIsPaused(true);
                        }}
                        className={`w-full rounded-[14px] px-3.5 py-3 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                          selectedLang === "bn"
                            ? "bg-white dark:bg-[#131d2a] border-2 border-[#0066db] dark:border-[#84beff] shadow-[0px_4px_16px_rgba(0,102,219,0.08)]"
                            : "bg-white dark:bg-[#131d2a] border-2 border-[#d8e1ec] dark:border-[#233144] hover:border-[#0066db]/50"
                        }`}
                      >
                        <div>
                          <div className="text-[15px] font-semibold text-[#0e1726] dark:text-white leading-tight">
                            বাংলা
                          </div>
                          <div className="text-[12px] text-[#64748b] dark:text-[#8b9aae] leading-tight mt-0.5">
                            Bangla
                          </div>
                        </div>
                        <div
                          className={`size-5 rounded-full flex items-center justify-center transition-all ${
                            selectedLang === "bn"
                              ? "border-2 border-[#0066db] dark:border-[#84beff]"
                              : "border-2 border-[#cbd5e1] dark:border-[#233144]"
                          }`}
                        >
                          {selectedLang === "bn" && (
                            <div className="size-2.5 rounded-full bg-[#0066db] dark:bg-[#84beff]" />
                          )}
                        </div>
                      </button>
                    </div>

                    {/* Footnote */}
                    <p className="text-[11px] text-[#64748b] dark:text-[#8b9aae] mt-5 leading-normal">
                      You can change this later in Settings.
                    </p>
                  </div>
                </div>
              </div>

              {/* iPhone 17 Pro Overlay Frame */}
              <Image
                src="/images/iphone-17-pro.svg"
                alt="Autoral Home app on iPhone 17 Pro"
                width={333}
                height={681}
                priority
                unoptimized
                className="absolute top-0 left-0 w-[333px] h-[681px] max-w-none pointer-events-none select-none z-20 drop-shadow-[0px_20px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
