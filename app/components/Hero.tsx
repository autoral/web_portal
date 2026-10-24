"use client";

import React from "react";
import Image from "next/image";
import {
  IconFamilyHome,
  IconCheckCircle,
} from "./Icons";

function StoreBadge({ store }: { store: "Google Play" | "App Store" }) {
  const isGoogle = store === "Google Play";
  return (
    <a
      href="#download"
      className="inline-flex items-center bg-black hover:bg-neutral-800 active:scale-98 transition-all rounded-[14px] shrink-0 text-white shadow-md"
      style={{
        gap: 10,
        padding: "10px 16px 10px 14px",
        height: 62,
        width: isGoogle ? 168 : 161,
      }}
      aria-label={`Download on ${store}`}
    >
      <Image
        src={isGoogle ? "/icons/icon-googleplay.svg" : "/icons/icon-apple.svg"}
        alt={store}
        width={24}
        height={24}
        className="w-6 h-6 shrink-0"
      />
      <div className="flex flex-col overflow-hidden whitespace-nowrap text-left text-white">
        <span className="text-[11px] font-normal leading-[14px] text-neutral-300">
          {isGoogle ? "GET IT ON" : "Download on the"}
        </span>
        <span className="text-[18px] font-semibold leading-[24px]">
          {store}
        </span>
      </div>
    </a>
  );
}

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #eaf3ff 0%, rgba(234, 243, 255, 0.7) 35%, rgba(245, 248, 252, 0) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Copy Column (Figma: 600px width max) */}
        <div className="w-full lg:w-[580px] flex flex-col items-start gap-7 shrink-0">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#d8e1ec] rounded-full px-3.5 py-2 shadow-xs">
            <IconFamilyHome className="w-[18px] h-[18px] text-[#0066db]" />
            <span className="text-[12px] font-semibold text-[#0052b3] tracking-[0.96px] uppercase">
              SMART HOME FOR BANGLADESH
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-[#0e1726] tracking-[-1.5px] leading-[1.12]">
            Your whole home,<br />one tap away.
          </h1>

          {/* Lead Paragraph */}
          <p className="text-lg lg:text-[18px] text-[#4a5a70] leading-[28px] max-w-[540px]">
            Control lights, fans, AC, TV, water pump and more from one app. It
            works on your home Wi-Fi, even when the internet is down.
          </p>

          {/* Store Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <StoreBadge store="Google Play" />
            <StoreBadge store="App Store" />
          </div>

          {/* Secondary Actions Row */}
          <div className="flex flex-wrap items-center gap-6 pt-1">
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border rounded-full transition-all hover:bg-white active:scale-98 shadow-xs hover:shadow"
              style={{
                height: 48,
                paddingLeft: 24,
                paddingRight: 24,
                background: "rgba(255, 255, 255, 0.72)",
                borderColor: "#d8e1ec",
                backdropFilter: "blur(24px)",
                color: "#0066db",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>See how it works</span>
            </a>

            <div className="inline-flex items-center gap-2 text-[#4a5a70] text-[14px]">
              <IconCheckCircle className="w-[18px] h-[18px] text-[#187a43]" />
              <span>
                Free app · English &amp;{" "}
                <span className="font-bengali font-medium">বাংলা</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual Column (Figma node 4238:661 exact 540x680 render) */}
        <div className="relative shrink-0 flex items-center justify-center w-full lg:w-[540px]">
          <Image
            src="/images/hero-visual.png"
            alt="Autoral Home app interface showing real-time lighting, fan, and appliance controls on home Wi-Fi"
            width={540}
            height={680}
            priority
            className="w-full h-auto object-contain max-w-[540px] drop-shadow-[0_20px_40px_rgba(10,42,92,0.12)]"
          />
        </div>
      </div>
    </section>
  );
}
