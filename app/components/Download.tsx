import React from "react";
import { IconGooglePlay, IconApple, IconHomeFill } from "./Icons";

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
        {/* Main Blue Banner Card */}
        <div className="bg-[#0066db] rounded-[40px] overflow-hidden text-white relative flex flex-col lg:flex-row items-center justify-between pl-6 sm:pl-10 lg:pl-[72px] pr-6 sm:pr-10 lg:pr-0 shadow-[0px_20px_50px_rgba(0,102,219,0.22)]">
          {/* Left: Copy & Actions */}
          <div className="flex flex-col gap-6 items-start py-10 sm:py-14 lg:py-[72px] w-full lg:max-w-[580px] z-10">
            {/* Overline */}
            <p className="text-[12px] font-semibold leading-[16px] tracking-[0.96px] uppercase text-white/90">
              DOWNLOAD
            </p>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] lg:leading-[52px] tracking-[-1px] text-white">
              Get the Autoral Home app
            </h2>

            {/* Body */}
            <p className="text-[16px] sm:text-[18px] font-normal leading-[28px] text-white/90">
              Free on Android and iPhone. Setup takes about 5 minutes.
            </p>

            {/* Store Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Google Play */}
              <a
                href="#download"
                className="store-badge rounded-[14px] pl-[14px] pr-[16px] py-[10px] flex items-center gap-[10px] shrink-0 cursor-pointer"
                aria-label="Get it on Google Play"
              >
                <div className="size-6 shrink-0 flex items-center justify-center">
                  <IconGooglePlay className="size-6 text-white" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[12px] font-normal leading-[16px] text-white/80">
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
                className="store-badge rounded-[14px] pl-[14px] pr-[16px] py-[10px] flex items-center gap-[10px] shrink-0 cursor-pointer"
                aria-label="Download on the App Store"
              >
                <div className="size-6 shrink-0 flex items-center justify-center">
                  <IconApple className="size-6 text-white" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[12px] font-normal leading-[16px] text-white/80">
                    Download on the
                  </span>
                  <span className="text-[18px] font-semibold leading-[26px] text-white">
                    App Store
                  </span>
                </div>
              </a>
            </div>

            {/* QR Code Container */}
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

          {/* Right: iPhone Mockup with Ambient Halo */}
          <div className="w-full lg:w-[440px] h-[480px] sm:h-[520px] lg:h-[560px] relative shrink-0 flex items-end justify-center overflow-hidden">
            {/* Ambient Halo Circle */}
            <div
              className="absolute size-[440px] rounded-full pointer-events-none top-[80px] left-[10px] lg:left-0 opacity-80"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 70%)",
              }}
            />

            {/* iPhone 17 Pro Silver Chassis */}
            <div className="relative z-10 w-[297px] h-[647px] top-[40px] lg:top-[79px] shrink-0">
              {/* Outer Metallic Bezel */}
              <div className="w-full h-full rounded-[44px] bg-[#1a2230] p-[3px] shadow-[0px_20px_60px_rgba(10,42,92,0.45)] ring-1 ring-white/30 border border-[#8fa0b5]/40 flex flex-col overflow-hidden">
                {/* Screen Content - Light Splash Screen */}
                <div className="w-full h-full bg-[#f5f8fc] rounded-[41px] overflow-hidden flex flex-col justify-between relative px-4 pt-3 pb-3">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between w-full px-2 pt-1 z-20">
                    <span className="text-[14px] font-semibold tracking-tight text-[#0e1726]">
                      9:41
                    </span>

                    {/* Dynamic Island */}
                    <div className="w-[102px] h-[28px] bg-black rounded-full flex items-center justify-end px-2.5 shadow-xs">
                      <div className="size-2.5 rounded-full bg-[#1c1c1e] ring-1 ring-neutral-800" />
                    </div>

                    {/* Trailing Icons: Cellular, Wifi, Battery */}
                    <div className="flex items-center gap-1.5 text-[#0e1726]">
                      {/* Cellular 4 bars */}
                      <svg width="15" height="10" viewBox="0 0 16 10" fill="currentColor">
                        <rect x="0" y="7" width="2.5" height="3" rx="0.5" />
                        <rect x="4.5" y="5" width="2.5" height="5" rx="0.5" />
                        <rect x="9" y="3" width="2.5" height="7" rx="0.5" />
                        <rect x="13.5" y="1" width="2.5" height="9" rx="0.5" />
                      </svg>
                      {/* Wi-Fi */}
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                        <path d="M7 1.5C9.5 1.5 11.7 2.4 13.4 3.9L7 10 0.6 3.9C2.3 2.4 4.5 1.5 7 1.5Z" />
                      </svg>
                      {/* Battery */}
                      <div className="w-[21px] h-[11px] rounded-[3px] border border-[#0e1726] p-[1.5px] flex items-center relative">
                        <div className="w-[14px] h-full bg-[#0e1726] rounded-[1.5px]" />
                        <div className="absolute -right-[3px] top-[3px] w-[1.5px] h-[3px] bg-[#0e1726] rounded-r-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Centered Splash Lockup */}
                  <div className="flex flex-col items-center justify-center my-auto">
                    {/* App Mark Squircle */}
                    <div className="size-[80px] rounded-[28px] bg-[#0066db] flex items-center justify-center text-white shadow-xl shadow-blue-500/25 mb-3.5 transition-transform hover:scale-105">
                      <IconHomeFill className="size-[46px] text-white" />
                    </div>

                    {/* Brand Name */}
                    <h3 className="text-[23px] font-semibold leading-[30px] text-[#0e1726] tracking-tight">
                      Autoral Home
                    </h3>

                    {/* Bengali Tagline */}
                    <p className="text-[12px] font-normal leading-[17px] text-[#4a5a70] font-bengali mt-1">
                      অটোরাল হোম অটোমেশন
                    </p>
                  </div>

                  {/* Splash Footer: Version & Home Indicator */}
                  <div className="flex flex-col items-center gap-2 w-full pb-1 z-20">
                    <span className="text-[10px] font-normal text-[#4a5a70]">
                      Version 1.0.0
                    </span>
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
