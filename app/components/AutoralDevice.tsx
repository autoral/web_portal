"use client";

import React, { useState } from "react";
import {
  IconRouter,
  IconWifi,
  IconWhatsApp,
} from "./Icons";

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

export default function AutoralDevice() {
  const [selectedModel, setSelectedModel] = useState<"MH-4" | "MH-8">("MH-8");

  // Dynamic channels based on selected model
  // MH-8 default: 6 active, 2 inactive
  // MH-4 default: 4 active
  const isMH8 = selectedModel === "MH-8";
  const totalChannels = isMH8 ? 8 : 4;
  const activeChannels = isMH8 ? 6 : 4;

  return (
    <section
      id="device"
      aria-label="Autoral device"
      className="py-16 sm:py-20 lg:py-28 bg-[#f5f8fc] w-full"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Device Illustration Box (Figma: 500px width, #0e1726 surface/inverse) */}
          <div className="w-full max-w-[500px] bg-[#0e1726] rounded-[32px] px-6 sm:px-12 pt-12 sm:pt-16 pb-10 sm:pb-14 flex flex-col gap-7 items-center shrink-0 shadow-[0px_20px_50px_rgba(10,42,92,0.18)]">
            {/* White Hardware Enclosure Card */}
            <div className="w-full bg-white rounded-[24px] p-6 sm:p-7 shadow-[0px_8px_24px_rgba(10,42,92,0.14)] flex flex-col gap-6">
              {/* Head: Router Icon, Title, and Wi-Fi */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-[34px] h-[34px] rounded-[10px] bg-[#0066db] flex items-center justify-center text-white shrink-0">
                    <IconRouter className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[12px] font-semibold leading-[16px] text-[#5e6e84] tracking-[0.96px] uppercase whitespace-nowrap">
                    AUTORAL DEVICE · {selectedModel}
                  </span>
                </div>
                <div className="text-[#0066db]">
                  <IconWifi className="w-5 h-5 text-[#0066db]" />
                </div>
              </div>

              {/* Channel LEDs */}
              <div className="flex items-start justify-between w-full">
                {Array.from({ length: 8 }).map((_, idx) => {
                  const chNumber = idx + 1;
                  const isAvailable = chNumber <= totalChannels;
                  const isActive = chNumber <= activeChannels;

                  return (
                    <div key={idx} className="flex flex-col gap-1.5 items-center">
                      <div
                        className={`w-[14px] h-[14px] rounded-full transition-colors ${
                          !isAvailable
                            ? "bg-[#e5e7eb] opacity-40"
                            : isActive
                            ? "bg-[#187a43] shadow-[0px_0px_8px_rgba(24,122,67,0.5)]"
                            : "bg-[#d8e1ec]"
                        }`}
                      />
                      <span className="text-[12px] font-normal leading-[16px] text-[#5e6e84]">
                        CH{chNumber}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* 8 Screw Terminal Blocks */}
              <div className="flex items-start justify-between w-full">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-[28px] h-[14px] bg-[#edf2f8] border border-[#d8e1ec] rounded-[4px] shrink-0"
                  />
                ))}
              </div>

              {/* Capacity Meter */}
              <div className="flex flex-col gap-2 w-full pt-1">
                <div className="flex items-center justify-between text-[14px] font-medium leading-[20px]">
                  <span className="text-[#4a5a70]">Channels used</span>
                  <span className="text-[#0e1726]">
                    {activeChannels} of {totalChannels}
                  </span>
                </div>
                <div className="flex gap-1 h-[6px] w-full">
                  {Array.from({ length: 8 }).map((_, idx) => {
                    const isFilled = idx < activeChannels;
                    return (
                      <div
                        key={idx}
                        className={`flex-1 h-[6px] rounded-[3px] transition-colors ${
                          isFilled ? "bg-[#0066db]" : "bg-[#dadada]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Caption underneath card */}
            <p className="text-[14px] font-normal leading-[20px] text-white whitespace-nowrap text-center">
              Fits behind your existing switchboard
            </p>
          </div>

          {/* Right Copy Column (Figma: device-copy) */}
          <div className="flex-1 flex flex-col gap-8 items-start w-full">
            {/* Section Heading */}
            <div className="flex flex-col gap-4 items-start">
              <p className="text-[12px] font-semibold leading-[16px] text-[#0066db] tracking-[0.96px] uppercase">
                AUTORAL DEVICE
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] sm:leading-[52px] text-[#0e1726] tracking-[-1px]">
                The small box that makes your home smart
              </h2>
              <p className="text-base sm:text-lg text-[#4a5a70] leading-[28px]">
                The Autoral device sits behind the switchboard you already have.
                Your electrician connects it in about 30 minutes, with no new
                wiring in the walls.
              </p>
            </div>

            {/* Checklist (5 items from Figma) */}
            <div className="flex flex-col gap-3.5 w-full">
              {[
                "Your wall switches keep working as normal",
                "Wi-Fi 2.4 GHz with easy Bluetooth setup",
                "Remembers every state after a power cut",
                "Local control first, encrypted remote access",
                "Add more devices any time as your home grows",
              ].map((label, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <IconCheck className="w-[22px] h-[22px] shrink-0 mt-0.5" />
                  <p className="text-base sm:text-[18px] text-[#0e1726] font-normal leading-[28px]">
                    {label}
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
                className={`p-5 rounded-[20px] flex flex-col gap-1 items-start text-left transition-all duration-300 cursor-pointer ${
                  selectedModel === "MH-4"
                    ? "bg-[#eaf3ff] border-2 border-[#0066db] shadow-[0px_4px_16px_rgba(0,102,219,0.15)] scale-[1.01]"
                    : "bg-white border border-[#d8e1ec] hover:border-[#0066db] hover:-translate-y-1 hover:shadow-elevation-float"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[18px] font-semibold leading-[26px] text-[#0e1726]">
                    Autoral MH-4
                  </span>
                </div>
                <span className="text-[15px] font-medium leading-[22px] text-[#0066db]">
                  4 channels
                </span>
                <span className="text-[14px] font-normal leading-[20px] text-[#4a5a70]">
                  For a bedroom or a small flat
                </span>
              </button>

              {/* MH-8 Card (Popular) */}
              <button
                type="button"
                onClick={() => setSelectedModel("MH-8")}
                className={`p-5 rounded-[20px] flex flex-col gap-1 items-start text-left transition-all duration-300 cursor-pointer ${
                  selectedModel === "MH-8"
                    ? "bg-[#eaf3ff] border-2 border-[#0066db] shadow-[0px_4px_16px_rgba(0,102,219,0.15)] scale-[1.01]"
                    : "bg-white border border-[#d8e1ec] hover:border-[#0066db] hover:-translate-y-1 hover:shadow-elevation-float"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[18px] font-semibold leading-[26px] text-[#0e1726]">
                    Autoral MH-8
                  </span>
                  <span className="bg-[#0066db] text-white text-[12px] font-semibold leading-[16px] px-2.5 py-1 rounded-full shadow-xs">
                    Popular
                  </span>
                </div>
                <span className="text-[15px] font-medium leading-[22px] text-[#0066db]">
                  8 channels
                </span>
                <span className="text-[14px] font-normal leading-[20px] text-[#4a5a70]">
                  For living rooms and busy switchboards
                </span>
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Ask for a price (Primary CTA) */}
              <a
                href="#contact"
                className="btn-primary h-12 px-6 rounded-full font-semibold text-[16px] flex items-center gap-2 cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <span>Ask for a price</span>
              </a>

              {/* Book installation (WhatsApp CTA) */}
              <a
                href="https://wa.me/8801770066585"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary h-12 px-6 rounded-full font-semibold text-[16px] flex items-center gap-2 cursor-pointer"
              >
                <IconWhatsApp className="w-5 h-5 text-[#25D366]" />
                <span>Book installation</span>
              </a>
            </div>

            {/* Disclaimer */}
            <p className="text-[14px] font-normal leading-[20px] text-[#5e6e84]">
              Specifications are indicative and may change before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
