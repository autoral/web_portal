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
    <footer className="bg-[#0e1726] text-white pt-14 sm:pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-14 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col items-start gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-[12px] bg-[#0066db] flex items-center justify-center text-white shadow-sm">
                <IconHomeFill className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-[18px] text-white tracking-tight">
                Autoral Home
              </span>
            </Link>

            <p className="text-[15px] text-neutral-400 leading-[26px] max-w-sm">
              Your whole home, one tap away. Smart home automation designed for
              Bangladesh.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700/80 bg-neutral-900/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all"
                aria-label="Facebook"
              >
                <IconFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://m.me"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700/80 bg-neutral-900/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all"
                aria-label="Messenger"
              >
                <IconMessenger className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700/80 bg-neutral-900/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all"
                aria-label="YouTube"
              >
                <IconYouTube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801770066585"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700/80 bg-neutral-900/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-800 transition-all"
                aria-label="WhatsApp"
              >
                <IconWhatsApp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[15px] font-semibold text-white tracking-wide">
              Product
            </h4>
            <a
              href="#features"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#device"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              Autoral device
            </a>
            <a
              href="#how-it-works"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              How it works
            </a>
            <a
              href="#download"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              Download the app
            </a>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[15px] font-semibold text-white tracking-wide">
              Company
            </h4>
            <a
              href="#about"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              About us
            </a>
            <a
              href="#contact"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              Partner with us
            </a>
            <a
              href="#contact"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-[15px] font-semibold text-white tracking-wide">
              Support
            </h4>
            <a
              href="#about"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a
              href="#how-it-works"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              Installation guide
            </a>
            <a
              href="#contact"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              Privacy policy
            </a>
            <a
              href="#contact"
              className="text-[14px] text-neutral-400 hover:text-white transition-colors"
            >
              Terms of use
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-neutral-400">
          <div>© 2026 Autoral Home Automation. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <span>English</span>
            <span>·</span>
            <span className="font-bengali">বাংলা</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
