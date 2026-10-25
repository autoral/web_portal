"use client";

import React, { useState } from "react";
import {
  IconRouter,
  IconWifi,
  IconWhatsApp,
} from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// Exact green checkmark circle from Figma WebCheckItem
function IconCheck({ className = "w-[22px] h-[22px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10" fill="#187a43" />
      <path
        d="M7 11.2L9.6 13.8L15 8.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
function toBnNum(num: number): string {
  return String(num)
    .split("")
    .map((d) => BN_DIGITS[parseInt(d, 10)] ?? d)
    .join("");
}

export default function AutoralDevice() {
  const { isBN } = useLanguage();
  const lKey = isBN ? "bn" : "en";
  const t = translations.device;

  const [selectedModel, setSelectedModel] = useState<"MH-4" | "MH-8">("MH-8");

  // Dynamic interactive channels:
  const [activeMH8, setActiveMH8] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);
  const [activeMH4, setActiveMH4] = useState<number[]>([1, 2, 3, 4]);

  const isMH8 = selectedModel === "MH-8";
  const totalChannels = isMH8 ? 8 : 4;
  const activeList = isMH8 ? activeMH8 : activeMH4;
  const setActiveList = isMH8 ? setActiveMH8 : setActiveMH4;
  const activeCount = activeList.length;

  const toggleChannel = (chNumber: number) => {
    setActiveList((prev) =>
      prev.includes(chNumber) ? prev.filter((c) => c !== chNumber) : [...prev, chNumber].sort((a, b) => a - b)
    );
  };

  return (
    <section
      id="device"
      aria-label="Autoral device"
      className="py-16 sm:py-20 lg:py-28 bg-[#f5f8fc] dark:bg-[#0a0f17] w-full transition-colors duration-200"
      data-node-id="4440:18758"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Device Illustration Box */}
          <div className="w-full max-w-[500px] md:max-w-[680px] lg:max-w-[500px] bg-[#0e1726] dark:bg-[#0c1523] border border-transparent dark:border-[#2a3546] rounded-[32px] px-6 sm:px-12 pt-12 sm:pt-16 pb-10 sm:pb-14 flex flex-col gap-7 items-center shrink-0 shadow-[0px_20px_50px_rgba(10,42,92,0.18)]">
            {/* White Hardware Enclosure Card */}
            <div className="w-full bg-white dark:bg-[#151d29] border border-transparent dark:border-[#2a3546] rounded-[24px] p-6 sm:p-7 shadow-[0px_8px_24px_rgba(10,42,92,0.14)] flex flex-col gap-6 transition-colors">
              {/* Head: Router Icon, Title, and Wi-Fi */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-[34px] h-[34px] rounded-[10px] bg-[#0066db] flex items-center justify-center text-white shrink-0">
                    <IconRouter className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[12px] font-semibold leading-[16px] text-[#5e6e84] dark:text-[#8b9aae] tracking-[0.96px] uppercase whitespace-nowrap">
                    {t.badgeSub[lKey]} {selectedModel}
                  </span>
                </div>
                <div className="text-[#0066db] dark:text-[#84beff]">
                  <IconWifi className="w-5 h-5 text-[#0066db] dark:text-[#84beff]" />
                </div>
              </div>

              {/* Channel LEDs */}
              <div className="flex items-start justify-between w-full">
                {Array.from({ length: totalChannels }).map((_, idx) => {
                  const chNumber = idx + 1;
                  const isActive = activeList.includes(chNumber);

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleChannel(chNumber)}
                      className="flex flex-col gap-1.5 items-center group cursor-pointer transition-transform active:scale-95"
                      title={`CH${chNumber}: ${isActive ? "Active (click to toggle)" : "Inactive (click to toggle)"}`}
                    >
                      <div
                        className={`w-[14px] h-[14px] rounded-full transition-all duration-200 ${
                          isActive
                            ? "bg-[#187a43] dark:bg-[#5cc98a] shadow-[0px_0px_8px_rgba(24,122,67,0.5)] group-hover:scale-110"
                            : "bg-[#d8e1ec] dark:bg-[#2a3546] group-hover:bg-[#b0c0d4]"
                        }`}
                      />
                      <span className="text-[12px] font-normal leading-[16px] text-[#5e6e84] dark:text-[#8b9aae]">
                        {isBN ? toBnNum(chNumber) : `CH${chNumber}`}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Screw Terminal Blocks */}
              <div className="flex items-start justify-between w-full">
                {Array.from({ length: totalChannels }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-[28px] h-[14px] bg-[#edf2f8] dark:bg-[#1e2836] border border-[#d8e1ec] dark:border-[#2a3546] rounded-[4px] shrink-0"
                  />
                ))}
              </div>

              {/* Capacity Meter */}
              <div className="flex flex-col gap-2 w-full pt-1">
                <div className="flex items-center justify-between text-[14px] font-medium leading-[20px]">
                  <span className="text-[#4a5a70] dark:text-[#b4c1d1]">{t.meterLabel[lKey]}</span>
                  <span className="text-[#0e1726] dark:text-[#edf2f8] font-semibold">
                    {isBN ? (
                      `${toBnNum(totalChannels)}টির মধ্যে ${toBnNum(activeCount)}`
                    ) : (
                      `${activeCount} of ${totalChannels}`
                    )}
                  </span>
                </div>
                <div className="flex gap-1 h-[6px] w-full">
                  {Array.from({ length: totalChannels }).map((_, idx) => {
                    const isFilled = idx < activeCount;
                    return (
                      <div
                        key={idx}
                        className={`flex-1 h-[6px] rounded-[3px] transition-colors ${
                          isFilled ? "bg-[#0066db] dark:bg-[#84beff]" : "bg-[#dadada] dark:bg-[#2a3546]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Caption underneath card */}
            <p className="text-[14px] font-normal leading-[20px] text-white whitespace-nowrap text-center">
              {t.caption[lKey]}
            </p>
          </div>

          {/* Right Copy Column */}
          <div className="flex-1 flex flex-col gap-8 items-start w-full">
            {/* Section Heading */}
            <div className="flex flex-col gap-4 items-start">
              <p className="text-[12px] font-semibold leading-[16px] text-[#0066db] dark:text-[#84beff] tracking-[0.96px] uppercase">
                {t.badge[lKey]}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] sm:leading-[52px] text-[#0e1726] dark:text-[#edf2f8] tracking-[-1px]">
                {t.title[lKey]}
              </h2>
              <p className="text-base sm:text-lg text-[#4a5a70] dark:text-[#b4c1d1] leading-[28px]">
                {t.subtitle[lKey]}
              </p>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-3.5 w-full">
              {t.checklist.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <IconCheck className="w-[22px] h-[22px] shrink-0 mt-0.5" />
                  <p className="text-base sm:text-[18px] text-[#0e1726] dark:text-[#edf2f8] font-normal leading-[28px]">
                    {item[lKey]}
                  </p>
                </div>
              ))}
            </div>

            {/* Model Selector Cards (MH-4 & MH-8) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* MH-4 Card */}
              <button
                type="button"
                onClick={() => setSelectedModel("MH-4")}
                className={`p-5 rounded-[20px] flex flex-col gap-1 items-start text-left bg-white dark:bg-[#151d29] transition-all duration-200 cursor-pointer relative ${
                  selectedModel === "MH-4"
                    ? "border-2 border-[#0066db] dark:border-[#84beff] shadow-[0px_4px_20px_rgba(0,102,219,0.12)]"
                    : "border-2 border-[#d8e1ec] dark:border-[#2a3546] hover:border-[#0066db] dark:hover:border-[#84beff] hover:shadow-[0px_8px_24px_rgba(0,102,219,0.12)] shadow-[0px_2px_6px_rgba(10,42,92,0.04)]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[18px] font-semibold leading-[26px] text-[#0e1726] dark:text-[#edf2f8]">
                    {t.mh4.title[lKey]}
                  </span>
                </div>
                <span className="text-[15px] font-medium leading-[22px] text-[#0066db] dark:text-[#84beff]">
                  {t.mh4.channels[lKey]}
                </span>
                <span className="text-[14px] font-normal leading-[20px] text-[#4a5a70] dark:text-[#b4c1d1]">
                  {t.mh4.desc[lKey]}
                </span>
              </button>

              {/* MH-8 Card (Popular) */}
              <button
                type="button"
                onClick={() => setSelectedModel("MH-8")}
                className={`p-5 rounded-[20px] flex flex-col gap-1 items-start text-left bg-white dark:bg-[#151d29] transition-all duration-200 cursor-pointer relative ${
                  selectedModel === "MH-8"
                    ? "border-2 border-[#0066db] dark:border-[#84beff] shadow-[0px_4px_20px_rgba(0,102,219,0.12)]"
                    : "border-2 border-[#d8e1ec] dark:border-[#2a3546] hover:border-[#0066db] dark:hover:border-[#84beff] hover:shadow-[0px_8px_24px_rgba(0,102,219,0.12)] shadow-[0px_2px_6px_rgba(10,42,92,0.04)]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[18px] font-semibold leading-[26px] text-[#0e1726] dark:text-[#edf2f8]">
                    {t.mh8.title[lKey]}
                  </span>
                  <span className="bg-[#0066db] dark:bg-[#84beff] text-white dark:text-[#071d3d] text-[12px] font-semibold leading-[16px] px-2.5 py-1 rounded-full shadow-xs">
                    {t.mh8.popular[lKey]}
                  </span>
                </div>
                <span className="text-[15px] font-medium leading-[22px] text-[#0066db] dark:text-[#84beff]">
                  {t.mh8.channels[lKey]}
                </span>
                <span className="text-[14px] font-normal leading-[20px] text-[#4a5a70] dark:text-[#b4c1d1]">
                  {t.mh8.desc[lKey]}
                </span>
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full">
              {/* Ask for a price */}
              <a
                href="#contact"
                onClick={(e) => {
                  if (typeof window !== "undefined" && window.innerWidth < 768) {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent("open-contact-sheet"));
                  }
                }}
                className="btn-primary h-12 px-6 rounded-full font-semibold text-[16px] flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto dark:bg-[#84beff] dark:text-[#071d3d] dark:hover:bg-[#a6d2ff]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <span>{t.checkPricing[lKey]}</span>
              </a>

              {/* Book installation */}
              <a
                href="https://wa.me/8801770066585"
                onClick={(e) => {
                  if (typeof window !== "undefined" && window.innerWidth < 768) {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent("open-book-installation"));
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary h-12 px-6 rounded-full font-semibold text-[16px] flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto dark:bg-[#151d29] dark:border-[#2a3546] dark:text-[#edf2f8] dark:hover:bg-[#1e2836]"
              >
                <IconWhatsApp className="w-5 h-5 text-[#25D366]" />
                <span>{t.bookInstallation[lKey]}</span>
              </a>
            </div>

            {/* Disclaimer */}
            <p className="text-[14px] font-normal leading-[20px] text-[#5e6e84] dark:text-[#8b9aae]">
              {t.disclaimer[lKey]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
