"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { IconHomeFill, IconClose, IconAddHomeFill } from "./Icons";

interface GetAppSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetAppSheet({ isOpen, onClose }: GetAppSheetProps) {
  // Prevent background scrolling when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop Scrim (Figma: scrim-tap) */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0a0f17]/40 backdrop-blur-xs transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Bottom Sheet Card (Figma: sheet) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="get-app-title"
        className="relative z-10 w-full max-w-[440px] bg-white dark:bg-[#151d29] border-t border-[#d8e1ec] dark:border-[#2a3546] rounded-t-[28px] px-4 pt-2 pb-6 flex flex-col gap-5 shadow-[0px_-8px_32px_rgba(10,42,92,0.18)] dark:shadow-none animate-in slide-in-from-bottom duration-300"
      >
        {/* Drag Handle */}
        <div className="w-full flex items-center justify-center pt-1">
          <div className="w-9 h-[5px] rounded-[3px] bg-[#d8e1ec] dark:bg-[#2a3546]" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-3 w-full">
          <div className="flex flex-col gap-1 text-left flex-1 min-w-0">
            <h2
              id="get-app-title"
              className="text-[24px] font-semibold leading-[32px] tracking-[-0.2px] text-[#0e1726] dark:text-[#edf2f8]"
            >
              Get Autoral Home
            </h2>
            <p className="text-[14px] font-normal leading-[20px] text-[#4a5a70] dark:text-[#b4c1d1]">
              Free on Android and iPhone · Setup takes about 5 minutes
            </p>
          </div>

          {/* Close Button (44x44 circular button) */}
          <button
            type="button"
            onClick={onClose}
            className="size-[44px] rounded-full bg-[#edf2f8] dark:bg-[#1e2836] border border-[#d8e1ec] dark:border-[#2a3546] flex items-center justify-center text-[#0066db] dark:text-[#84beff] hover:bg-[#e4ebf5] dark:hover:bg-[#2a3546] active:scale-95 transition-all shrink-0 cursor-pointer"
            aria-label="Close dialog"
          >
            <IconClose className="size-[20px]" />
          </button>
        </div>

        {/* App Info Card */}
        <div className="bg-[#edf2f8] dark:bg-[#1e2836] rounded-[20px] p-4 flex items-center gap-4 w-full">
          <div className="size-[56px] rounded-[16px] bg-[#0066db] flex items-center justify-center text-white shrink-0 shadow-xs">
            <IconHomeFill className="size-7 text-white" />
          </div>
          <div className="flex flex-col gap-0.5 items-start text-left flex-1 min-w-0">
            <h3 className="text-[18px] font-semibold leading-[26px] text-[#0e1726] dark:text-[#edf2f8] truncate w-full">
              Autoral Home
            </h3>
            <p className="text-[14px] font-normal leading-[20px] text-[#4a5a70] dark:text-[#b4c1d1]">
              Control every switch at home · English &amp;{" "}
              <span className="font-bengali font-medium text-[#0e1726] dark:text-[#edf2f8]">বাংলা</span>
            </p>
          </div>
        </div>

        {/* Store Badges Row */}
        <div className="flex gap-3 items-center justify-center w-full">
          {/* Google Play */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-black hover:bg-neutral-800 active:scale-98 transition-all rounded-[14px] pl-[14px] pr-[16px] py-[10px] flex items-center gap-[10px] text-white shadow-xs cursor-pointer"
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
            href="https://apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-black hover:bg-neutral-800 active:scale-98 transition-all rounded-[14px] pl-[14px] pr-[16px] py-[10px] flex items-center gap-[10px] text-white shadow-xs cursor-pointer"
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

        {/* Divider */}
        <div className="h-px w-full bg-[#d8e1ec] dark:bg-[#2a3546]" />

        {/* PWA / Add to Home Screen Section */}
        <div className="flex flex-col gap-3 items-start w-full">
          <div className="flex gap-3 items-start w-full">
            <div className="size-[44px] rounded-[12px] bg-[#eaf3ff] dark:bg-[#0b2a55] text-[#0066db] dark:text-[#84beff] flex items-center justify-center shrink-0">
              <IconAddHomeFill className="size-[22px] text-[#0066db] dark:text-[#84beff]" />
            </div>
            <div className="flex flex-col gap-0.5 items-start text-left flex-1 min-w-0">
              <h4 className="text-[15px] font-medium leading-[22px] text-[#0e1726] dark:text-[#edf2f8]">
                Or add this site to your Home Screen
              </h4>
              <p className="text-[14px] font-normal leading-[20px] text-[#4a5a70] dark:text-[#b4c1d1]">
                Opens full screen like an app, with setup guides, FAQ and support even when you are offline.
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="pl-[56px] flex flex-col gap-1.5 text-[12px] text-[#5e6e84] dark:text-[#8b9aae] leading-[16px] text-left w-full">
            <p>iPhone: tap Share, then Add to Home Screen</p>
            <p>Android: tap Install app when your browser asks</p>
          </div>

          {/* Install Button */}
          <button
            type="button"
            onClick={() => {
              // Trigger browser PWA install prompt if available, or notify user
              alert("Tap Share in your browser menu, then select 'Add to Home Screen'");
            }}
            className="w-full h-12 rounded-[24px] bg-white dark:bg-[#0e1726] border border-[#d8e1ec] dark:border-[#2a3546] hover:border-[#0066db] dark:hover:border-[#84beff] hover:bg-[#eaf3ff]/30 dark:hover:bg-[#0b2a55]/30 active:scale-98 text-[#0066db] dark:text-[#84beff] font-semibold text-[16px] leading-[24px] flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <IconAddHomeFill className="size-5 text-[#0066db] dark:text-[#84beff]" />
            <span>Add to Home Screen</span>
          </button>
        </div>

        {/* Home Indicator */}
        <div className="w-full flex items-center justify-center pt-2">
          <div className="w-[120px] h-[4px] bg-[#0e1726] dark:bg-white rounded-[2px] opacity-80" />
        </div>
      </div>
    </div>
  );
}
