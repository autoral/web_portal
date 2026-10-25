"use client";

import React, { useState } from "react";
import {
  IconPhone,
  IconWhatsApp,
  IconMessenger,
  IconMail,
  IconLocation,
  IconClock,
  IconCheckCircle,
} from "./Icons";

export default function Contact() {
  const [selectedInterest, setSelectedInterest] =
    useState<string>("Buying a device");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      label: "Phone",
      val: "01770-066585",
      href: "tel:01770066585",
      icon: <IconPhone className="size-[22px]" />,
    },
    {
      label: "WhatsApp",
      val: "01770-066585",
      href: "https://wa.me/8801770066585",
      icon: <IconWhatsApp className="size-[22px]" />,
    },
    {
      label: "Messenger",
      val: "Autoral Home on Facebook",
      href: "https://m.me",
      icon: <IconMessenger className="size-[22px]" />,
    },
    {
      label: "Email",
      val: "molla.ux@gmail.com",
      href: "mailto:molla.ux@gmail.com",
      icon: <IconMail className="size-[22px]" />,
    },
    {
      label: "Office",
      val: "Dhaka, Bangladesh",
      icon: <IconLocation className="size-[22px]" />,
    },
    {
      label: "Hours",
      val: "Sat–Thu, 10:00 AM – 7:00 PM",
      icon: <IconClock className="size-[22px]" />,
    },
  ];

  const chips = ["Buying a device", "Installation", "Partnership", "Other"];

  return (
    <section
      id="contact"
      className="w-full bg-[#f5f8fc] dark:bg-[#0a0f17] py-16 sm:py-20 lg:py-[112px] transition-colors duration-200"
      data-node-id="4239:1331"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[64px]">
          {/* Left Column: Contact Info & Office Map */}
          <div className="w-full lg:w-[480px] flex flex-col gap-8 shrink-0">
            {/* Header */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="text-[12px] font-semibold leading-[16px] text-[#0066db] dark:text-[#84beff] tracking-[0.96px] uppercase">
                CONTACT
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] lg:leading-[52px] tracking-[-1px] text-[#0e1726] dark:text-[#edf2f8]">
                Talk to an Autoral expert
              </h2>
              <p className="text-[18px] font-normal leading-[28px] text-[#4a5a70] dark:text-[#b4c1d1]">
                Ask for a price, book an installation or become a partner
                installer.
              </p>
            </div>

            {/* Contact Rows List */}
            <div className="flex flex-col gap-4 w-full">
              {contactItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-4 p-2 -m-2 rounded-[16px] hover:bg-white dark:hover:bg-[#151d29] hover:shadow-xs transition-all duration-200 cursor-default"
                >
                  {/* Circular Badge */}
                  <div className="size-[48px] rounded-full bg-[#eaf3ff] dark:bg-[#0b2a55] text-[#0066db] dark:text-[#84beff] flex items-center justify-center shrink-0 group-hover:bg-[#0066db] group-hover:text-white group-hover:scale-105 transition-all duration-200 shadow-xs">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-start leading-[20px]">
                    <span className="text-[14px] font-normal text-[#4a5a70] dark:text-[#8b9aae]">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noreferrer"
                        className="text-[15px] font-medium leading-[22px] text-[#0e1726] dark:text-[#edf2f8] group-hover:text-[#0066db] dark:group-hover:text-[#84beff] transition-colors duration-200"
                      >
                        {item.val}
                      </a>
                    ) : (
                      <span className="text-[15px] font-medium leading-[22px] text-[#0e1726] dark:text-[#edf2f8] group-hover:text-[#0066db] dark:group-hover:text-[#84beff] transition-colors duration-200">
                        {item.val}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Map Card */}
            <div className="bg-[#eaf3ff] dark:bg-[#151d29] border border-[#d8e1ec] dark:border-[#2a3546] hover:border-[#0066db]/30 dark:hover:border-[#84beff]/40 hover:shadow-md rounded-[24px] h-[180px] flex flex-col gap-2 items-center justify-center w-full text-center transition-all duration-300 cursor-default group">
              <div className="size-8 flex items-center justify-center text-[#0066db] dark:text-[#84beff] group-hover:scale-110 transition-transform duration-200">
                <IconLocation className="size-8 text-[#0066db] dark:text-[#84beff]" />
              </div>
              <span className="text-[14px] font-normal leading-[20px] text-[#0052b3] dark:text-[#84beff] group-hover:underline">
                Office map · Dhaka
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="w-full lg:w-[620px] flex-1 bg-white dark:bg-[#151d29] border border-[#d8e1ec] dark:border-[#2a3546] rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col gap-6 items-start shadow-[0px_2px_12px_rgba(10,42,92,0.06)] dark:shadow-none relative">
            {/* Form Head */}
            <div className="flex flex-col gap-1.5 items-start text-left w-full">
              <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-0.2px] text-[#0e1726] dark:text-[#edf2f8]">
                Send us a message
              </h3>
              <p className="text-[16px] font-normal leading-[26px] text-[#4a5a70] dark:text-[#b4c1d1]">
                We usually call back within 1 working day.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 w-full flex flex-col items-center text-center gap-3">
                <div className="size-14 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-[#187a43] dark:text-emerald-400">
                  <IconCheckCircle className="size-8 text-[#187a43] dark:text-emerald-400" />
                </div>
                <h4 className="text-[20px] font-semibold text-[#0e1726] dark:text-[#edf2f8]">
                  Thank you!
                </h4>
                <p className="text-[15px] text-[#4a5a70] dark:text-[#b4c1d1] max-w-sm">
                  We have received your message. An Autoral team member will reach
                  out to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-[14px] text-[#0066db] dark:text-[#84beff] font-semibold hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                {/* Row 1: Your Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col gap-1.5 items-start w-full">
                    <label className="text-[14px] font-medium leading-[20px] text-[#0e1726] dark:text-[#edf2f8]">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abu Taher Molla"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full h-[52px] rounded-[26px] border border-[#d8e1ec] dark:border-[#2a3546] bg-white dark:bg-[#0e1726] px-4 text-[16px] text-[#0e1726] dark:text-[#edf2f8] placeholder:text-[#4a5a70] dark:placeholder:text-[#8b9aae] focus:outline-none focus:border-[#0066db] dark:focus:border-[#84beff] focus:ring-2 focus:ring-[#0066db]/20 dark:focus:ring-[#84beff]/20 transition-all shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 items-start w-full">
                    <label className="text-[14px] font-medium leading-[20px] text-[#0e1726] dark:text-[#edf2f8]">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="017XX-XXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full h-[52px] rounded-[26px] border border-[#d8e1ec] dark:border-[#2a3546] bg-white dark:bg-[#0e1726] px-4 text-[16px] text-[#0e1726] dark:text-[#edf2f8] placeholder:text-[#4a5a70] dark:placeholder:text-[#8b9aae] focus:outline-none focus:border-[#0066db] dark:focus:border-[#84beff] focus:ring-2 focus:ring-[#0066db]/20 dark:focus:ring-[#84beff]/20 transition-all shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-none"
                    />
                  </div>
                </div>

                {/* Row 2: Email (optional) */}
                <div className="flex flex-col gap-1.5 items-start w-full">
                  <label className="text-[14px] font-medium leading-[20px] text-[#0e1726] dark:text-[#edf2f8]">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-[52px] rounded-[26px] border border-[#d8e1ec] dark:border-[#2a3546] bg-white dark:bg-[#0e1726] px-4 text-[16px] text-[#0e1726] dark:text-[#edf2f8] placeholder:text-[#4a5a70] dark:placeholder:text-[#8b9aae] focus:outline-none focus:border-[#0066db] dark:focus:border-[#84beff] focus:ring-2 focus:ring-[#0066db]/20 dark:focus:ring-[#84beff]/20 transition-all shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-none"
                  />
                </div>

                {/* Row 3: I'm interested in */}
                <div className="flex flex-col gap-3 items-start w-full">
                  <span className="text-[15px] font-medium leading-[22px] text-[#0e1726] dark:text-[#edf2f8]">
                    I&apos;m interested in
                  </span>
                  <div className="flex flex-wrap gap-2 w-full">
                    {chips.map((chip, idx) => {
                      const isSelected = selectedInterest === chip;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedInterest(chip)}
                          className={`h-[36px] px-4 rounded-[18px] text-[14px] font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726] shadow-xs scale-[1.02]"
                              : "bg-white dark:bg-[#0e1726] border border-[#d8e1ec] dark:border-[#2a3546] text-[#0e1726] dark:text-[#edf2f8] hover:border-[#0066db] dark:hover:border-[#84beff] hover:text-[#0066db] dark:hover:text-[#84beff] hover:-translate-y-0.5 hover:shadow-xs"
                          }`}
                        >
                          {isSelected && (
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                          <span>{chip}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="flex flex-col gap-1.5 items-start w-full">
                  <label className="text-[14px] font-medium leading-[20px] text-[#0e1726] dark:text-[#edf2f8]">
                    Message
                  </label>
                  <input
                    type="text"
                    placeholder="Tell us about your home, e.g. 3-bedroom flat in Mirpur"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full h-[52px] rounded-[26px] border border-[#d8e1ec] dark:border-[#2a3546] bg-white dark:bg-[#0e1726] px-4 text-[16px] text-[#0e1726] dark:text-[#edf2f8] placeholder:text-[#4a5a70] dark:placeholder:text-[#8b9aae] focus:outline-none focus:border-[#0066db] dark:focus:border-[#84beff] focus:ring-4 focus:ring-[#0066db]/10 dark:focus:ring-[#84beff]/10 transition-all shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-primary w-full h-[48px] rounded-[24px] font-semibold text-[16px] flex items-center justify-center gap-2 cursor-pointer mt-1"
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
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  <span>Send message</span>
                </button>

                {/* Disclaimer */}
                <p className="text-[14px] font-normal leading-[20px] text-[#5e6e84] dark:text-[#8b9aae] text-left">
                  By sending this form you agree to be contacted about Autoral
                  Home.
                </p>
              </form>
            )}

            {/* Subtle top inner light border */}
            <div className="absolute inset-0 pointer-events-none rounded-[32px] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-[inset_0px_1px_0px_rgba(255,255,255,0.05)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
