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
      data-node-id="4239:1457"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 lg:gap-[56px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12 w-full">
          {/* Brand Column */}
          <div className="flex flex-col gap-5 items-start w-full lg:w-[360px] shrink-0">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
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

            {/* Social Icon Buttons (44x44px rounded-full with 20px icons) */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="size-[44px] rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/50 hover:bg-white/10 active:scale-95 transition-all"
                aria-label="Facebook"
              >
                <IconFacebook className="size-5" />
              </a>
              <a
                href="https://m.me"
                target="_blank"
                rel="noreferrer"
                className="size-[44px] rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/50 hover:bg-white/10 active:scale-95 transition-all"
                aria-label="Messenger"
              >
                <IconMessenger className="size-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="size-[44px] rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/50 hover:bg-white/10 active:scale-95 transition-all"
                aria-label="YouTube"
              >
                <IconYouTube className="size-5" />
              </a>
              <a
                href="https://wa.me/8801770066585"
                target="_blank"
                rel="noreferrer"
                className="size-[44px] rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/50 hover:bg-white/10 active:scale-95 transition-all"
                aria-label="WhatsApp"
              >
                <IconWhatsApp className="size-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 w-full lg:w-auto">
            {/* Column 1: Product */}
            <div className="flex flex-col items-start w-full sm:w-[140px] lg:w-[180px]">
              <h3 className="text-[15px] font-medium leading-[22px] text-white pb-2">
                Product
              </h3>
              <a
                href="#features"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#device"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                Autoral device
              </a>
              <a
                href="#how-it-works"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                How it works
              </a>
              <a
                href="#download"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                Download the app
              </a>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col items-start w-full sm:w-[140px] lg:w-[180px]">
              <h3 className="text-[15px] font-medium leading-[22px] text-white pb-2">
                Company
              </h3>
              <a
                href="#about"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                About us
              </a>
              <a
                href="#contact"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                Partner with us
              </a>
              <a
                href="#contact"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Column 3: Support */}
            <div className="flex flex-col items-start w-full sm:w-[140px] lg:w-[180px]">
              <h3 className="text-[15px] font-medium leading-[22px] text-white pb-2">
                Support
              </h3>
              <a
                href="#faq"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <a
                href="#how-it-works"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                Installation guide
              </a>
              <a
                href="#contact"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                Privacy policy
              </a>
              <a
                href="#contact"
                className="py-2.5 text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors"
              >
                Terms of use
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
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
