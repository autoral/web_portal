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
      className="w-full bg-white py-16 sm:py-20 lg:py-[112px]"
      data-node-id="4239:1279"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[80px]">
          {/* Left Column: FAQ Intro & Help Card */}
          <div className="w-full lg:w-[400px] flex flex-col gap-8 shrink-0">
            {/* Header */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="text-[12px] font-semibold leading-[16px] text-[#0066db] tracking-[0.96px] uppercase">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] lg:leading-[52px] tracking-[-1px] text-[#0e1726]">
                Questions people ask before buying
              </h2>
            </div>

            {/* Help Card */}
            <div className="bg-[#eaf3ff] rounded-[24px] p-7 flex flex-col gap-3 items-start w-full border border-transparent hover:border-[#0066db]/25 hover:shadow-md transition-all duration-300">
              <div className="size-7 flex items-center justify-center">
                <IconChatBubble className="size-7 text-[#0066db]" />
              </div>
              <h3 className="text-[18px] font-semibold leading-[26px] text-[#0052b3]">
                Still have a question?
              </h3>
              <p className="text-[16px] font-normal leading-[26px] text-[#4a5a70]">
                Call, WhatsApp or Messenger. An Autoral expert will reply.
              </p>
              <a
                href="https://wa.me/8801770066585"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary h-12 px-6 rounded-full font-semibold text-[16px] flex items-center gap-2 cursor-pointer mt-1"
              >
                <IconWhatsApp className="size-5 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="flex flex-col gap-3 items-start w-full flex-1 min-w-0">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggle(idx)}
                  className={`group w-full px-6 py-[22px] rounded-[20px] transition-all duration-200 text-left flex flex-col gap-3 relative cursor-pointer ${
                    isOpen
                      ? "bg-white border-2 border-[#0066db] shadow-[0px_4px_16px_rgba(0,102,219,0.12)]"
                      : "bg-white border border-[#d8e1ec] hover:border-[#0066db] hover:-translate-y-0.5 hover:shadow-elevation-soft"
                  }`}
                >
                  {/* Question & Chevron Button */}
                  <div className="flex items-center justify-between gap-4 w-full">
                    <span className={`text-[18px] font-semibold leading-[26px] transition-colors duration-200 ${
                      isOpen ? "text-[#0066db]" : "text-[#0e1726] group-hover:text-[#0066db]"
                    }`}>
                      {faq.question}
                    </span>
                    <div
                      className={`size-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? "bg-[#0066db] text-white"
                          : "bg-[#edf2f8] text-[#4a5a70] group-hover:bg-[#eaf3ff] group-hover:text-[#0066db]"
                      }`}
                    >
                      <IconFaqChevron className="size-5" isOpen={isOpen} />
                    </div>
                  </div>

                  {/* Answer (Expanded) */}
                  {isOpen && (
                    <p className="text-[16px] font-normal leading-[26px] text-[#4a5a70] text-left animate-in fade-in duration-200">
                      {faq.answer}
                    </p>
                  )}

                  {/* Subtle top inner light border on open item */}
                  {isOpen && (
                    <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
