"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconHomeFill } from "./Icons";

export default function Header() {
  const [lang, setLang] = useState<"EN" | "BN">("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-[#d8e1ec] transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px] h-[85px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-[10px] group transition-transform active:scale-95 shrink-0"
        >
          <div className="w-10 h-10 rounded-[12px] bg-[#0066db] flex items-center justify-center text-white shadow-xs group-hover:scale-105 group-hover:shadow-[0px_4px_14px_rgba(0,102,219,0.35)] transition-all duration-200 shrink-0">
            <IconHomeFill className="w-6 h-6 text-white" />
          </div>
          <span className="font-semibold text-[18px] leading-[26px] text-[#0e1726] tracking-tight group-hover:text-[#0066db] transition-colors duration-200 whitespace-nowrap">
            Autoral Home
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[36px]">
          <a
            href="#features"
            className="text-[15px] font-medium leading-[22px] text-[#4a5a70] hover:text-[#0e1726] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0066db] hover:after:w-full after:transition-all after:duration-200"
          >
            Features
          </a>
          <a
            href="#device"
            className="text-[15px] font-medium leading-[22px] text-[#4a5a70] hover:text-[#0e1726] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0066db] hover:after:w-full after:transition-all after:duration-200"
          >
            Autoral device
          </a>
          <a
            href="#how-it-works"
            className="text-[15px] font-medium leading-[22px] text-[#4a5a70] hover:text-[#0e1726] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0066db] hover:after:w-full after:transition-all after:duration-200"
          >
            How it works
          </a>
          <a
            href="#download"
            className="text-[15px] font-medium leading-[22px] text-[#4a5a70] hover:text-[#0e1726] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0066db] hover:after:w-full after:transition-all after:duration-200"
          >
            Download
          </a>
          <a
            href="#about"
            className="text-[15px] font-medium leading-[22px] text-[#4a5a70] hover:text-[#0e1726] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0066db] hover:after:w-full after:transition-all after:duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[15px] font-medium leading-[22px] text-[#4a5a70] hover:text-[#0e1726] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0066db] hover:after:w-full after:transition-all after:duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-[16px] shrink-0">
          {/* Language Toggle */}
          <div className="bg-[#edf2f8] border border-[#d8e1ec] rounded-full p-[4px] flex items-center gap-[2px] shadow-xs">
            <button
              type="button"
              onClick={() => setLang("EN")}
              className={`px-[14px] py-[6px] text-[15px] font-medium leading-[22px] rounded-full transition-all duration-200 cursor-pointer ${
                lang === "EN"
                  ? "bg-[#0e1726] text-white shadow-xs"
                  : "text-[#4a5a70] hover:text-[#0e1726]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("BN")}
              className={`px-[14px] py-[6px] text-[15px] font-medium leading-[22px] font-bengali rounded-full transition-all duration-200 cursor-pointer ${
                lang === "BN"
                  ? "bg-[#0e1726] text-white shadow-xs"
                  : "text-[#4a5a70] hover:text-[#0e1726]"
              }`}
            >
              বাংলা
            </button>
          </div>

          {/* CTA */}
          <a
            href="#download"
            className="h-[48px] px-[24px] rounded-[24px] bg-[#0066db] hover:bg-[#0052b3] active:scale-98 text-white font-semibold text-[16px] leading-[24px] flex items-center justify-center transition-all duration-200 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)] hover:shadow-[0px_4px_16px_rgba(0,102,219,0.35)] hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Get the app
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0e1726] rounded-xl hover:bg-black/5"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#d8e1ec] px-6 py-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-200">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium text-[#4a5a70] py-2"
          >
            Features
          </a>
          <a
            href="#device"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium text-[#4a5a70] py-2"
          >
            Autoral device
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium text-[#4a5a70] py-2"
          >
            How it works
          </a>
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium text-[#4a5a70] py-2"
          >
            Download
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium text-[#4a5a70] py-2"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium text-[#4a5a70] py-2"
          >
            Contact
          </a>

          <div className="pt-4 border-t border-[#d8e1ec] flex flex-col gap-3">
            <div className="bg-[#edf2f8] border border-[#d8e1ec] rounded-full p-1 flex items-center w-fit">
              <button
                type="button"
                onClick={() => setLang("EN")}
                className={`px-4 py-1.5 text-[14px] font-medium rounded-full ${
                  lang === "EN" ? "bg-[#0e1726] text-white" : "text-[#4a5a70]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("BN")}
                className={`px-4 py-1.5 text-[14px] font-medium font-bengali rounded-full ${
                  lang === "BN" ? "bg-[#0e1726] text-white" : "text-[#4a5a70]"
                }`}
              >
                বাংলা
              </button>
            </div>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="h-12 w-full rounded-full bg-[#0066db] text-white font-semibold text-[16px] flex items-center justify-center"
            >
              Get the app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
