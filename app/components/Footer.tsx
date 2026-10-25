"use client";

import React from "react";
import Link from "next/link";
import {
  IconHomeFill,
  IconFacebook,
  IconMessenger,
  IconYouTube,
  IconWhatsApp,
} from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Footer() {
  const { setLang, isBN } = useLanguage();
  const t = translations.footer;
  const lKey = isBN ? "bn" : "en";

  return (
    <footer
      id="footer"
      className="w-full bg-[#0e1726] text-white pt-16 lg:pt-[80px] pb-10 transition-colors duration-200"
      data-node-id="4440:18901"
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
              aria-label={t.brandName[lKey]}
            >
              <div className="size-10 rounded-[12px] bg-[#0066db] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform group-hover:scale-105">
                <IconHomeFill className="size-6 text-white" />
              </div>
              <span className="text-[18px] font-semibold leading-[26px] text-white whitespace-nowrap">
                {t.brandName[lKey]}
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-[16px] leading-[26px] font-normal text-white/72 max-w-[360px]">
              {t.tagline[lKey]}
            </p>

            {/* Social Icon Buttons */}
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
                {t.colProduct[lKey]}
              </h3>
              <a
                href="#features"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.features[lKey]}
              </a>
              <a
                href="#device"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.device[lKey]}
              </a>
              <a
                href="#how-it-works"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.howItWorks[lKey]}
              </a>
              <a
                href="#download"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.download[lKey]}
              </a>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col items-start w-full sm:w-[140px] lg:w-[180px]">
              <h3 className="text-[15px] font-medium leading-[22px] text-white pb-[2px]">
                {t.colCompany[lKey]}
              </h3>
              <a
                href="#about"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.about[lKey]}
              </a>
              <a
                href="#contact"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.partner[lKey]}
              </a>
              <a
                href="#contact"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.contact[lKey]}
              </a>
            </div>

            {/* Column 3: Support */}
            <div className="flex flex-col items-start w-full sm:w-[140px] lg:w-[180px]">
              <h3 className="text-[15px] font-medium leading-[22px] text-white pb-[2px]">
                {t.colSupport[lKey]}
              </h3>
              <a
                href="#faq"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.faq[lKey]}
              </a>
              <a
                href="#how-it-works"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.guide[lKey]}
              </a>
              <a
                href="#contact"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.privacy[lKey]}
              </a>
              <a
                href="#contact"
                className="h-[44px] flex items-center text-[14px] font-normal leading-[20px] text-white/64 hover:text-white transition-colors duration-150"
              >
                {t.links.terms[lKey]}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-[24px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full text-left">
          <p className="text-[14px] leading-[20px] text-white/56">
            {t.copyright[lKey]}
          </p>
          <div className="text-[14px] leading-[20px] text-white/56 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`cursor-pointer transition-colors ${
                !isBN ? "text-white font-medium underline" : "text-white/60 hover:text-white"
              }`}
            >
              English
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setLang("bn")}
              className={`font-bengali cursor-pointer transition-colors ${
                isBN ? "text-white font-medium underline" : "text-white/60 hover:text-white"
              }`}
            >
              বাংলা
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
