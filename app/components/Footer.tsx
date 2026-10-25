import React from "react";
import Link from "next/link";
import {
  IconHomeFill,
  IconFacebook,
  IconMessenger,
  IconYouTube,
  IconWhatsApp,
} from "./Icons";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-[#0e1726] text-white pt-16 lg:pt-[80px] pb-10"
      data-node-id="4438:94890"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px] flex flex-col gap-12 lg:gap-[56px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12 w-full">
          {/* Brand Column */}
          <div className="flex flex-col gap-5 items-start w-full lg:w-[360px] shrink-0">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-[10px] group"
              aria-label="Autoral Home"
            >
              <div className="size-10 rounded-[12px] bg-[#0066db] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform group-hover:scale-105">
                <IconHomeFill className="size-6 text-white" />
              </div>
              <span className="text-[18px] font-semibold leading-[26px] text-white whitespace-nowrap">
                Autoral Home
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-[16px] leading-[26px] font-normal text-white/72 max-w-[360px]">
              Your whole home, one tap away. Smart home automation designed for
              Bangladesh.
            </p>

            {/* Social Icon Buttons (44x44px rounded-full with 20px icons, gap 12px) */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="size-[44px] rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:text-[#0e1726] hover:bg-white hover:border-white hover:scale-105 active:scale-95 shadow-xs transition-all duration-200 cursor-pointer"
                aria-label="Facebook"
              >
                <IconFacebook className="size-5" />
              </a>
              <a
                href="https://m.me"
                target="_blank"
                rel="noreferrer"
                className="size-[44px] rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:text-[#0e1726] hover:bg-white hover:border-white hover:scale-105 active:scale-95 shadow-xs transition-all duration-200 cursor-pointer"
                aria-label="Messenger"
              >
                <IconMessenger className="size-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="size-[44px] rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:text-[#0e1726] hover:bg-white hover:border-white hover:scale-105 active:scale-95 shadow-xs transition-all duration-200 cursor-pointer"
                aria-label="YouTube"
              >
                <IconYouTube className="size-5" />
              </a>
              <a
                href="https://wa.me/8801770066585"
                target="_blank"
                rel="noreferrer"
                className="size-[44px] rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:text-[#0e1726] hover:bg-white hover:border-white hover:scale-105 active:scale-95 shadow-xs transition-all duration-200 cursor-pointer"
                aria-label="WhatsApp"
              >
                <IconWhatsApp className="size-5" />
              </a>
            </div>
          </div>

          {/* Links Columns (gap 64px on desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-8 sm:gap-12 lg:gap-[64px] w-full lg:w-auto">
            {/* Column 1: Product */}
            <div className="flex flex-col items-start w-full sm:w-[140px] lg:w-[180px]">
              <h3 className="text-[15px] font-medium leading-[22px] text-white pb-[2px]">
                Product
              </h3>
              <a
                href="#features"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                Features
              </a>
              <a
                href="#device"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                Autoral device
              </a>
              <a
                href="#how-it-works"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                How it works
              </a>
              <a
                href="#download"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                Download the app
              </a>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col items-start w-full sm:w-[140px] lg:w-[180px]">
              <h3 className="text-[15px] font-medium leading-[22px] text-white pb-[2px]">
                Company
              </h3>
              <a
                href="#about"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                About us
              </a>
              <a
                href="#contact"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                Partner with us
              </a>
              <a
                href="#contact"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                Contact
              </a>
            </div>

            {/* Column 3: Support */}
            <div className="flex flex-col items-start w-full sm:w-[140px] lg:w-[180px]">
              <h3 className="text-[15px] font-medium leading-[22px] text-white pb-[2px]">
                Support
              </h3>
              <a
                href="#faq"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                FAQ
              </a>
              <a
                href="#how-it-works"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                Installation guide
              </a>
              <a
                href="#contact"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                Privacy policy
              </a>
              <a
                href="#contact"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                Terms of use
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-[24px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full text-left">
          <p className="text-[14px] leading-[20px] text-white/56">
            © 2026 Autoral Home Automation. All rights reserved.
          </p>
          <p className="text-[14px] leading-[20px] text-white/56 flex items-center gap-1.5">
            <span>English</span>
            <span>·</span>
            <span className="font-bengali font-medium text-white">বাংলা</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
