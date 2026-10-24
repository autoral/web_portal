"use client";

import React from "react";
import Image from "next/image";
import { IconHomeFill, IconWifi } from "./Icons";

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
  return (
    <section
      id="download"
      className="w-full bg-[#f5f8fc] py-16 sm:py-20 lg:py-[112px]"
      data-node-id="4239:1197"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Blue Banner Card (Figma 4239:1198: 1200x564, rounded-[40px], bg-[#0066db]) */}
        <div className="bg-[#0066db] rounded-[40px] overflow-hidden text-white relative flex flex-col lg:flex-row items-center justify-between pl-6 sm:pl-10 lg:pl-[72px] pr-6 sm:pr-10 lg:pr-0 shadow-[0px_20px_50px_rgba(0,102,219,0.22)] lg:h-[564px]">
          {/* Left: Copy & Actions (Figma 4239:1199: w-648, py-72) */}
          <div className="flex flex-col gap-6 items-start py-10 sm:py-14 lg:py-0 w-full lg:max-w-[580px] z-10">
            {/* Overline */}
            <p className="text-[12px] font-semibold leading-[16px] tracking-[0.96px] uppercase text-white">
              DOWNLOAD
            </p>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] lg:leading-[52px] tracking-[-1px] text-white">
              Get the Autoral Home app
            </h2>

            {/* Body */}
            <p className="text-[16px] sm:text-[18px] font-normal leading-[28px] text-white/95">
              Free on Android and iPhone. Setup takes about 5 minutes.
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
                  Scan to download
                </span>
                <span className="text-[14px] font-normal leading-[20px] text-white/90">
                  Opens the right store for your phone
                </span>
              </div>
            </div>

            {/* Platform Requirements */}
            <p className="text-[14px] font-normal leading-[20px] text-white/85 pt-1">
              Android 8 or later · iOS 15 or later
            </p>
          </div>

          {/* Right: iPhone Mockup with Ambient Halo (Figma 4239:1224: w-440, h-560) */}
          <div className="w-full lg:w-[440px] h-[520px] lg:h-[564px] relative shrink-0 overflow-hidden">
            {/* Ambient Halo Circle (Figma 4239:1225: smooth circular halo wrapping phone) */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:left-[-30px] lg:translate-x-0 top-1/2 -translate-y-1/2 size-[520px] rounded-full bg-white/[0.18] pointer-events-none" />

            {/* iPhone 17 Pro Silver Titanium Chassis (Figma 4271:13498: left 71px, top 79px, width 297.48px x 646.76px) */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:left-[71px] lg:translate-x-0 top-[79px] z-10">
              {/* Outer Metallic Silver Titanium Bezel */}
              <div className="relative rounded-[48px] p-[5px] bg-gradient-to-b from-[#ffffff] via-[#d6dce6] to-[#9aa4b4] shadow-[0px_20px_50px_rgba(10,42,92,0.2),0px_0px_0px_1px_rgba(255,255,255,0.95)_inset,0px_1px_3px_rgba(0,0,0,0.18)] ring-1 ring-black/15">
                {/* Hardware buttons simulation on Silver Titanium */}
                <div className="absolute -left-[2.5px] top-24 w-[2.5px] h-6 bg-gradient-to-b from-[#f5f7fa] to-[#b8c0cc] border border-[#c4ccd8] rounded-l-xs shadow-xs" />
                <div className="absolute -left-[2.5px] top-36 w-[2.5px] h-11 bg-gradient-to-b from-[#f5f7fa] to-[#b8c0cc] border border-[#c4ccd8] rounded-l-xs shadow-xs" />
                <div className="absolute -left-[2.5px] top-52 w-[2.5px] h-11 bg-gradient-to-b from-[#f5f7fa] to-[#b8c0cc] border border-[#c4ccd8] rounded-l-xs shadow-xs" />
                <div className="absolute -right-[2.5px] top-40 w-[2.5px] h-14 bg-gradient-to-b from-[#f5f7fa] to-[#b8c0cc] border border-[#c4ccd8] rounded-r-xs shadow-xs" />

                {/* iPhone Inner Glass Screen */}
                <div className="relative w-[298px] h-[648px] rounded-[43px] overflow-hidden bg-[#f5f8fc] border-[2.5px] border-[#0c1017] flex flex-col justify-between isolate">
                  {/* Status Bar (Figma 4438:28568) */}
                  <div className="h-[44px] px-4 flex items-center justify-between z-30 pointer-events-none text-[#0e1726] pt-1 bg-[#f5f8fc]">
                    {/* Time */}
                    <div className="w-12 text-[13px] font-semibold tracking-tight text-center">
                      9:41
                    </div>

                    {/* Dynamic Island */}
                    <div className="w-[96px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-xs">
                      <div className="size-2.5 rounded-full bg-[#181a20] border border-neutral-800" />
                      <div className="size-2 rounded-full bg-[#0a1128] border border-blue-950/60" />
                    </div>

                    {/* Trailing: Cellular, Wi-Fi, Battery */}
                    <div className="w-12 flex items-center justify-end gap-1.5">
                      <div className="flex items-end gap-[1px] h-2.5">
                        <span className="w-[2px] h-1 bg-[#0e1726] rounded-2xs" />
                        <span className="w-[2px] h-1.5 bg-[#0e1726] rounded-2xs" />
                        <span className="w-[2px] h-2 bg-[#0e1726] rounded-2xs" />
                        <span className="w-[2px] h-2.5 bg-[#0e1726] rounded-2xs" />
                      </div>
                      <IconWifi className="w-3.5 h-3.5 text-[#0e1726]" />
                      <div className="w-[18px] h-[9px] rounded-[3px] border border-[#0e1726] p-[1px] flex items-center relative">
                        <div className="w-full h-full bg-[#0e1726] rounded-2xs" />
                        <div className="w-[1px] h-[3px] bg-[#0e1726] rounded-r-2xs absolute -right-[2px] top-[2px]" />
                      </div>
                    </div>
                  </div>

                  {/* Splash Screen Body (Figma Node 4438:28569 / 4438:28570: starts on Splash) */}
                  <div className="flex flex-col items-center justify-center my-auto w-full px-4 py-8">
                    {/* App Logo Mark Tile */}
                    <div className="w-[80px] h-[80px] rounded-[28px] bg-[#0066db] flex items-center justify-center text-white shadow-[0px_12px_28px_rgba(0,102,219,0.35)] transition-transform duration-300 hover:scale-105">
                      <IconHomeFill className="w-[46px] h-[46px] text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-[23px] font-semibold leading-[30px] text-[#0e1726] text-center mt-3 tracking-tight">
                      Autoral Home
                    </h3>

                    {/* Bengali Subtitle */}
                    <p className="text-[12px] font-medium leading-[17px] text-[#4a5a70] text-center mt-1 font-bengali">
                      অটোরাল হোম অটোমেশন
                    </p>
                  </div>

                  {/* Footer & Version Info (Figma 4438:28575) */}
                  <div className="flex flex-col items-center gap-2 w-full pb-2 z-20">
                    <p className="text-[10px] font-normal leading-[13px] text-[#4a5a70]">
                      Version 1.0.0
                    </p>
                    {/* Home Gesture Bar */}
                    <div className="w-[100px] h-[3.5px] bg-[#0e1726] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
