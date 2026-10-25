"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// Exact vector icons from Figma (28x28 viewBox 0 0 28 28)
function IconWifiValue({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5.5 13.5a13 13 0 0 1 17 0" />
      <path d="M2 9.5a18.5 18.5 0 0 1 24 0" />
      <path d="M9.5 17.5a7.5 7.5 0 0 1 9 0" />
      <circle cx="14" cy="22" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconGroupsValue({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Center Person */}
      <circle cx="14" cy="8" r="3.5" />
      <path d="M8.5 21v-1.5a5.5 5.5 0 0 1 11 0V21" />
      {/* Left Person */}
      <circle cx="6" cy="11.5" r="2.5" />
      <path d="M2 21v-1a4 4 0 0 1 4.5-3.8" />
      {/* Right Person */}
      <circle cx="22" cy="11.5" r="2.5" />
      <path d="M21.5 16.2a4 4 0 0 1 4.5 3.8v1" />
    </svg>
  );
}

function IconSupportValue({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 14.5v-2a10 10 0 0 1 20 0v2" />
      <rect x="3" y="14.5" width="4" height="6.5" rx="2" fill="currentColor" />
      <rect x="21" y="14.5" width="4" height="6.5" rx="2" fill="currentColor" />
      <path d="M23 21v1.5a3.5 3.5 0 0 1-3.5 3.5H16" />
      <circle cx="14" cy="26" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function AboutUs() {
  const { lang } = useLanguage();
  const t = translations.about;

  const valueIcons = [
    <IconWifiValue key="0" className="size-7" />,
    <IconGroupsValue key="1" className="size-7" />,
    <IconSupportValue key="2" className="size-7" />,
  ];

  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-[#0a0f17] py-16 sm:py-20 lg:py-[112px] transition-colors duration-200"
      data-node-id="4239:1242"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[80px]">
          {/* Left Column: Copy & Mission */}
          <div className="w-full lg:w-[520px] flex flex-col gap-6 items-start shrink-0">
            {/* Header */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="text-[12px] font-semibold leading-[16px] text-[#0066db] dark:text-[#84beff] tracking-[0.96px] uppercase">
                {t.overline[lang]}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] lg:leading-[52px] tracking-[-1px] text-[#0e1726] dark:text-[#edf2f8]">
                {t.title[lang]}
              </h2>
              <p className="text-[18px] font-normal leading-[28px] text-[#4a5a70] dark:text-[#b4c1d1]">
                {t.lead[lang]}
              </p>
            </div>

            {/* Paragraph 2 */}
            <p className="text-[16px] font-normal leading-[26px] text-[#4a5a70] dark:text-[#b4c1d1]">
              {t.body[lang]}
            </p>

            {/* Mission Box */}
            <div className="w-full bg-[#eaf3ff] dark:bg-[#0b2a55] border border-transparent dark:border-[#2a3546] hover:border-[#0066db]/25 hover:shadow-md rounded-[20px] p-6 flex gap-5 items-start mt-2 transition-all duration-300">
              <div className="w-1 self-stretch rounded-[2px] bg-[#0066db] dark:bg-[#84beff] shrink-0" />
              <div className="flex flex-col gap-1.5 items-start leading-[26px] text-[#0052b3] dark:text-[#b5d8ff]">
                <p className="text-[18px] font-semibold leading-[26px]">
                  {t.missionTitle[lang]}
                </p>
                <p className="text-[16px] font-normal leading-[26px] text-[#0052b3]/85 dark:text-[#b5d8ff]/85">
                  {t.missionBody[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Value Cards */}
          <div className="flex flex-col gap-4 items-start w-full flex-1 min-w-0">
            {t.values.map((val, idx) => (
              <div
                key={idx}
                className="card-interactive group relative bg-white dark:bg-[#151d29] rounded-[20px] border border-[#d8e1ec] dark:border-[#2a3546] p-6 flex gap-5 items-start w-full cursor-default hover:bg-white dark:hover:bg-[#1c283e] transition-colors duration-200"
              >
                {/* Badge */}
                <div className="size-[56px] rounded-[16px] bg-[#eaf3ff] dark:bg-[#0b2a55] text-[#0066db] dark:text-[#84beff] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0066db] dark:group-hover:bg-[#84beff] group-hover:text-white dark:group-hover:text-[#071d3d] group-hover:shadow-[0px_6px_20px_rgba(0,102,219,0.3)]">
                  {valueIcons[idx]}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 items-start leading-[26px] text-left">
                  <h3 className="text-[18px] font-semibold text-[#0e1726] dark:text-[#edf2f8] group-hover:text-[#0066db] dark:group-hover:text-[#84beff] transition-colors duration-200">
                    {val.title[lang]}
                  </h3>
                  <p className="text-[16px] font-normal text-[#4a5a70] dark:text-[#b4c1d1]">
                    {val.desc[lang]}
                  </p>
                </div>

                {/* Subtle top inner light border */}
                <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
