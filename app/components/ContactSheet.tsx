"use client";

import React, { useEffect } from "react";
import {
  IconClose,
  IconPhone,
  IconWhatsApp,
  IconMessenger,
  IconMail,
  IconChevronRight,
  IconHandyman,
} from "./Icons";

interface ContactSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactSheet({ isOpen, onClose }: ContactSheetProps) {
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

  const channels = [
    {
      title: "Call us",
      value: "01770-066585",
      href: "tel:01770066585",
      icon: <IconPhone className="size-[22px]" />,
    },
    {
      title: "WhatsApp",
      value: "Chat with an expert",
      href: "https://wa.me/8801770066585",
      icon: <IconWhatsApp className="size-[22px]" />,
      target: "_blank",
    },
    {
      title: "Messenger",
      value: "Autoral Home on Facebook",
      href: "https://m.me",
      icon: <IconMessenger className="size-[22px]" />,
      target: "_blank",
    },
    {
      title: "Email",
      value: "molla.ux@gmail.com",
      href: "mailto:molla.ux@gmail.com",
      icon: <IconMail className="size-[22px]" />,
    },
  ];

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
        aria-labelledby="contact-sheet-title"
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
              id="contact-sheet-title"
              className="text-[24px] font-semibold leading-[32px] tracking-[-0.2px] text-[#0e1726] dark:text-[#edf2f8]"
            >
              Talk to an Autoral expert
            </h2>
            <p className="text-[14px] font-normal leading-[20px] text-[#4a5a70] dark:text-[#b4c1d1]">
              Sat–Thu, 10:00 AM – 7:00 PM · We reply within 1 working day
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

        {/* Contact Channels Container */}
        <div className="border border-[#d8e1ec] dark:border-[#2a3546] rounded-[20px] overflow-hidden flex flex-col w-full divide-y divide-[#d8e1ec] dark:divide-[#2a3546]">
          {channels.map((ch, idx) => (
            <a
              key={idx}
              href={ch.href}
              target={ch.target}
              rel={ch.target ? "noopener noreferrer" : undefined}
              className="pl-4 pr-3 py-3 flex items-center justify-between group hover:bg-[#f5f8fc] dark:hover:bg-[#1e2836] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="size-[48px] rounded-full bg-[#eaf3ff] dark:bg-[#0b2a55] text-[#0066db] dark:text-[#84beff] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0066db] group-hover:text-white transition-all shadow-xs">
                  {ch.icon}
                </div>
                <div className="flex flex-col gap-0.5 items-start text-left flex-1 min-w-0">
                  <span className="text-[14px] font-normal leading-[20px] text-[#4a5a70] dark:text-[#8b9aae]">
                    {ch.title}
                  </span>
                  <span className="text-[15px] font-medium leading-[22px] text-[#0e1726] dark:text-[#edf2f8] group-hover:text-[#0066db] dark:group-hover:text-[#84beff] transition-colors truncate w-full">
                    {ch.value}
                  </span>
                </div>
              </div>
              <div className="text-[#0066db] dark:text-[#84beff] shrink-0">
                <IconChevronRight className="size-6 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col gap-2.5 w-full pt-1">
          {/* Book installation (Primary CTA) */}
          <button
            type="button"
            onClick={() => {
              onClose();
              window.dispatchEvent(new CustomEvent("open-book-installation"));
            }}
            className="btn-primary w-full h-12 rounded-[24px] font-semibold text-[16px] leading-[24px] flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98 transition-all"
          >
            <IconHandyman className="size-5 text-white" />
            <span>Book installation</span>
          </button>

          {/* Ask for a price (Secondary CTA) */}
          <a
            href="#contact"
            onClick={onClose}
            className="w-full h-12 rounded-[24px] bg-white dark:bg-[#0e1726] border border-[#d8e1ec] dark:border-[#2a3546] hover:border-[#0066db] dark:hover:border-[#84beff] hover:bg-[#eaf3ff]/30 dark:hover:bg-[#0b2a55]/30 active:scale-98 text-[#0066db] dark:text-[#84beff] font-semibold text-[16px] leading-[24px] flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span>Ask for a price</span>
          </a>
        </div>

        {/* Home Indicator */}
        <div className="w-full flex items-center justify-center pt-2">
          <div className="w-[120px] h-[4px] bg-[#0e1726] dark:bg-white rounded-[2px] opacity-80" />
        </div>
      </div>
    </div>
  );
}
