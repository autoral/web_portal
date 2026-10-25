"use client";

import React, { useState } from "react";
import { IconWhatsApp } from "./Icons";

function IconChatBubble({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      stroke="#0066db"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M24.5 13.5a9.5 9.5 0 0 1-10.5 9.4 9.8 9.8 0 0 1-4.2 1.1c-1.5 0-3-.5-4.3-1.5L3.5 24l1.5-3.8A9.5 9.5 0 1 1 24.5 13.5z" />
      <path d="M9.5 11.5h9" />
      <path d="M9.5 15.5h6" />
    </svg>
  );
}

function IconFaqChevron({
  className = "size-5",
  isOpen = false,
}: {
  className?: string;
  isOpen?: boolean;
}) {
  return (
    <svg
      className={`${className} transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will my normal wall switches still work?",
      answer:
        "Yes. The device works alongside your switches, and the app updates when someone uses a switch on the wall.",
    },
    {
      question: "What happens during load-shedding?",
      answer:
        "The hub remembers every channel. When power comes back, each device returns to the state it was in.",
    },
    {
      question: "Do I need internet for Autoral Home?",
      answer:
        "No. At home everything runs on your Wi-Fi. Internet is only needed to control your home from outside.",
    },
    {
      question: "Who installs the device?",
      answer:
        "A trained Autoral installer fits and tests it behind your switchboard, usually in about 30 minutes.",
    },
    {
      question: "Is my home data safe?",
      answer:
        "Control at home stays on your local network, and remote access is encrypted end to end.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="w-full bg-white dark:bg-[#0a0f17] py-16 sm:py-20 lg:py-[112px] transition-colors duration-200"
      data-node-id="4239:1279"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[80px]">
          {/* Left Column: FAQ Intro & Help Card (Desktop) */}
          <div className="w-full lg:w-[400px] flex flex-col gap-8 shrink-0">
            {/* Header */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="text-[12px] font-semibold leading-[16px] text-[#0066db] dark:text-[#84beff] tracking-[0.96px] uppercase">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] lg:leading-[52px] tracking-[-1px] text-[#0e1726] dark:text-[#edf2f8]">
                Questions people ask before buying
              </h2>
            </div>

            {/* Help Card (Desktop) */}
            <div className="hidden lg:flex bg-[#eaf3ff] dark:bg-[#0b2a55] rounded-[24px] p-7 flex-col gap-3 items-start w-full border border-transparent dark:border-[#2a3546] hover:border-[#0066db]/25 hover:shadow-md transition-all duration-300">
              <div className="size-7 flex items-center justify-center">
                <IconChatBubble className="size-7 text-[#0066db] dark:text-[#84beff]" />
              </div>
              <h3 className="text-[18px] font-semibold leading-[26px] text-[#0052b3] dark:text-[#b5d8ff]">
                Still have a question?
              </h3>
              <p className="text-[16px] font-normal leading-[26px] text-[#4a5a70] dark:text-[#b4c1d1]">
                Call, WhatsApp or Messenger. An Autoral expert will reply.
              </p>
              <a
                href="https://wa.me/8801770066585"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary h-12 px-6 rounded-full font-semibold text-[16px] flex items-center gap-2 cursor-pointer mt-1 dark:bg-[#84beff] dark:text-[#071d3d] dark:hover:bg-[#a6d2ff]"
              >
                <IconWhatsApp className="size-5 text-white dark:text-[#071d3d]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Items & Mobile Help Card */}
          <div className="flex flex-col gap-3 items-start w-full flex-1 min-w-0">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggle(idx)}
                  className={`group w-full px-5 sm:px-6 py-[20px] sm:py-[22px] rounded-[20px] transition-all duration-200 text-left flex flex-col gap-3 relative cursor-pointer ${
                    isOpen
                      ? "bg-white dark:bg-[#151d29] border-2 border-[#0066db] dark:border-[#84beff] shadow-[0px_4px_16px_rgba(0,102,219,0.12)]"
                      : "bg-white dark:bg-[#151d29] border border-[#d8e1ec] dark:border-[#2a3546] hover:border-[#0066db] dark:hover:border-[#84beff] hover:-translate-y-0.5 hover:shadow-elevation-soft"
                  }`}
                >
                  {/* Question & Chevron Button */}
                  <div className="flex items-center justify-between gap-4 w-full">
                    <span className={`text-[17px] sm:text-[18px] font-semibold leading-[24px] sm:leading-[26px] transition-colors duration-200 ${
                      isOpen ? "text-[#0066db] dark:text-[#84beff]" : "text-[#0e1726] dark:text-[#edf2f8] group-hover:text-[#0066db] dark:group-hover:text-[#84beff]"
                    }`}>
                      {faq.question}
                    </span>
                    <div
                      className={`size-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? "bg-[#0066db] dark:bg-[#84beff] text-white dark:text-[#071d3d]"
                          : "bg-[#edf2f8] dark:bg-[#1e2836] text-[#4a5a70] dark:text-[#b4c1d1] group-hover:bg-[#eaf3ff] dark:group-hover:bg-[#0b2a55] group-hover:text-[#0066db] dark:group-hover:text-[#84beff]"
                      }`}
                    >
                      <IconFaqChevron className="size-5" isOpen={isOpen} />
                    </div>
                  </div>

                  {/* Answer (Expanded) */}
                  {isOpen && (
                    <p className="text-[15px] sm:text-[16px] font-normal leading-[24px] sm:leading-[26px] text-[#4a5a70] dark:text-[#b4c1d1] text-left animate-in fade-in duration-200">
                      {faq.answer}
                    </p>
                  )}

                  {/* Subtle top inner light border on open item */}
                  {isOpen && (
                    <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08)]" />
                  )}
                </button>
              );
            })}

            {/* Help Card (Mobile & Tablet: positioned below FAQs) */}
            <div className="flex lg:hidden bg-[#eaf3ff] dark:bg-[#0b2a55] rounded-[24px] p-6 sm:p-7 flex-col gap-3 items-start w-full border border-transparent dark:border-[#2a3546] hover:border-[#0066db]/25 hover:shadow-md transition-all duration-300 mt-4">
              <div className="size-7 flex items-center justify-center">
                <IconChatBubble className="size-7 text-[#0066db] dark:text-[#84beff]" />
              </div>
              <h3 className="text-[18px] font-semibold leading-[26px] text-[#0052b3] dark:text-[#b5d8ff]">
                Still have a question?
              </h3>
              <p className="text-[15px] sm:text-[16px] font-normal leading-[24px] sm:leading-[26px] text-[#4a5a70] dark:text-[#b4c1d1]">
                Call, WhatsApp or Messenger. An Autoral expert will reply.
              </p>
              <a
                href="https://wa.me/8801770066585"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary h-12 px-6 rounded-full font-semibold text-[16px] flex items-center justify-center gap-2 cursor-pointer mt-1 w-full sm:w-auto dark:bg-[#84beff] dark:text-[#071d3d] dark:hover:bg-[#a6d2ff]"
              >
                <IconWhatsApp className="size-5 text-white dark:text-[#071d3d]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
