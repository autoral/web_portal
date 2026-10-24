"use client";

import React, { useState } from "react";
import {
  IconChat,
  IconWhatsApp,
  IconChevronDown,
  IconChevronUp,
} from "./Icons";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Will my normal wall switches still work?",
      a: "Yes. The device works alongside your switches, and the app updates when someone uses a switch on the wall.",
    },
    {
      q: "What happens during load-shedding?",
      a: "The hub remembers every channel. When power comes back, each device returns to the state it was in.",
    },
    {
      q: "Do I need internet for Autoral Home?",
      a: "No. At home everything runs on your Wi-Fi. Internet is only needed to control your home from outside.",
    },
    {
      q: "Who installs the device?",
      a: "A trained Autoral installer fits and tests it behind your switchboard, usually in about 30 minutes.",
    },
    {
      q: "Is my home data safe?",
      a: "Control at home stays on your local network, and remote access is encrypted end to end.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-[#d8e1ec]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Intro & WhatsApp Help Card */}
          <div className="w-full lg:w-[400px] flex flex-col gap-8 shrink-0">
            <div>
              <div className="text-[12px] font-semibold text-[#0066db] tracking-[0.96px] uppercase mb-3">
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0e1726] tracking-[-1px] leading-[1.18]">
                Questions people ask before buying
              </h2>
            </div>

            {/* Help Card */}
            <div className="bg-[#eaf3ff] rounded-[24px] p-7 border border-blue-100 flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0066db] shadow-xs">
                <IconChat className="w-6 h-6 text-[#0066db]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#0052b3]">
                Still have a question?
              </h3>
              <p className="text-[15px] text-[#4a5a70] leading-[24px] mb-2">
                Call, WhatsApp or Messenger. An Autoral expert will reply.
              </p>
              <a
                href="https://wa.me/8801770066585"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-full bg-[#0066db] hover:bg-[#0052b3] active:scale-98 text-white font-semibold text-[15px] flex items-center gap-2.5 transition-all shadow-md shadow-blue-500/20"
              >
                <IconWhatsApp className="w-5 h-5 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="w-full flex-1 flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggle(idx)}
                  className={`border rounded-[20px] transition-all cursor-pointer p-6 ${
                    isOpen
                      ? "bg-white border-[#0066db] shadow-[0px_4px_16px_rgba(10,42,92,0.06)]"
                      : "bg-white border-[#d8e1ec] hover:border-neutral-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#0e1726]">
                      {faq.q}
                    </h3>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#0066db] text-white"
                          : "bg-[#edf2f8] text-[#4a5a70]"
                      }`}
                    >
                      {isOpen ? (
                        <IconChevronUp className="w-4 h-4 text-white" />
                      ) : (
                        <IconChevronDown className="w-4 h-4 text-[#4a5a70]" />
                      )}
                    </div>
                  </div>

                  {isOpen && (
                    <p className="text-[15px] sm:text-[16px] text-[#4a5a70] leading-[26px] mt-3.5 pt-3 border-t border-neutral-100 animate-in fade-in duration-200">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
