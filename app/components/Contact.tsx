"use client";

import React, { useState } from "react";
import {
  IconPhone,
  IconWhatsApp,
  IconMessenger,
  IconMail,
  IconLocation,
  IconClock,
  IconArrowRight,
  IconCheckCircle,
} from "./Icons";

export default function Contact() {
  const [selectedInterest, setSelectedInterest] = useState<string>("Buying a device");
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
      icon: <IconPhone className="w-5 h-5 text-[#0066db]" />,
    },
    {
      label: "WhatsApp",
      val: "01770-066585",
      href: "https://wa.me/8801770066585",
      icon: <IconWhatsApp className="w-5 h-5 text-[#0066db]" />,
    },
    {
      label: "Messenger",
      val: "Autoral Home on Facebook",
      href: "https://m.me",
      icon: <IconMessenger className="w-5 h-5 text-[#0066db]" />,
    },
    {
      label: "Email",
      val: "molla.ux@gmail.com",
      href: "mailto:molla.ux@gmail.com",
      icon: <IconMail className="w-5 h-5 text-[#0066db]" />,
    },
    {
      label: "Office",
      val: "Dhaka, Bangladesh",
      icon: <IconLocation className="w-5 h-5 text-[#0066db]" />,
    },
    {
      label: "Hours",
      val: "Sat–Thu, 10:00 AM – 7:00 PM",
      icon: <IconClock className="w-5 h-5 text-[#0066db]" />,
    },
  ];

  const chips = ["Buying a device", "Installation", "Partnership", "Other"];

  return (
    <section id="contact" className="py-14 sm:py-16 lg:py-20 bg-[#f5f8fc]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Contact Info */}
          <div className="w-full lg:w-[480px] flex flex-col gap-8 shrink-0">
            <div>
              <div className="text-[12px] font-semibold text-[#0066db] tracking-[0.96px] uppercase mb-3">
                CONTACT
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0e1726] tracking-[-1px] leading-[1.18] mb-4">
                Talk to an Autoral expert
              </h2>
              <p className="text-base sm:text-lg text-[#4a5a70] leading-[28px]">
                Ask for a price, book an installation or become a partner installer.
              </p>
            </div>

            {/* Contact Rows List */}
            <div className="flex flex-col gap-4">
              {contactItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-[14px] bg-white border border-[#d8e1ec] flex items-center justify-center shrink-0 shadow-2xs">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[12px] text-[#4a5a70] font-medium">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-[15px] font-semibold text-[#0e1726] hover:text-[#0066db] transition-colors"
                      >
                        {item.val}
                      </a>
                    ) : (
                      <div className="text-[15px] font-semibold text-[#0e1726]">
                        {item.val}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Map Card */}
            <div className="bg-[#eaf3ff] rounded-[24px] p-8 border border-blue-100 flex flex-col items-center justify-center gap-2.5 text-center min-h-[160px] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0066db] shadow-xs">
                <IconLocation className="w-5 h-5 text-[#0066db]" />
              </div>
              <span className="text-[15px] font-semibold text-[#0066db]">
                Office map · Dhaka
              </span>
            </div>
          </div>

          {/* Right Contact Form Card */}
          <div className="w-full lg:w-[620px] bg-white rounded-[28px] p-8 sm:p-10 border border-[#d8e1ec] shadow-[0px_8px_32px_rgba(10,42,92,0.06)]">
            <div className="mb-7">
              <h3 className="text-[24px] font-semibold text-[#0e1726] mb-1">
                Send us a message
              </h3>
              <p className="text-[15px] text-[#4a5a70]">
                We usually call back within 1 working day.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-[#187a43]">
                  <IconCheckCircle className="w-8 h-8 text-[#187a43]" />
                </div>
                <h4 className="text-[20px] font-semibold text-[#0e1726]">
                  Thank you!
                </h4>
                <p className="text-[15px] text-[#4a5a70] max-w-sm">
                  We have received your message. An Autoral team member will reach
                  out to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-[14px] text-[#0066db] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#0e1726]">
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
                      className="h-12 px-4 rounded-[14px] border border-[#d8e1ec] text-[15px] text-[#0e1726] placeholder:text-[#5e6e84]/60 focus:outline-hidden focus:border-[#0066db] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#0e1726]">
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
                      className="h-12 px-4 rounded-[14px] border border-[#d8e1ec] text-[15px] text-[#0e1726] placeholder:text-[#5e6e84]/60 focus:outline-hidden focus:border-[#0066db] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#0e1726]">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12 px-4 rounded-[14px] border border-[#d8e1ec] text-[15px] text-[#0e1726] placeholder:text-[#5e6e84]/60 focus:outline-hidden focus:border-[#0066db] focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Interest chips */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-medium text-[#0e1726]">
                    I&apos;m interested in
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {chips.map((chip, idx) => {
                      const isSelected = selectedInterest === chip;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedInterest(chip)}
                          className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#0e1726] text-white shadow-xs"
                              : "bg-white border border-[#d8e1ec] text-[#4a5a70] hover:border-neutral-400"
                          }`}
                        >
                          {isSelected && <span className="mr-1">✓</span>}
                          {chip}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#0e1726]">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your home, e.g. 3-bedroom flat in Mirpur"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="p-4 rounded-[14px] border border-[#d8e1ec] text-[15px] text-[#0e1726] placeholder:text-[#5e6e84]/60 focus:outline-hidden focus:border-[#0066db] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="h-12 w-full rounded-full bg-[#0066db] hover:bg-[#0052b3] active:scale-98 text-white font-semibold text-[16px] flex items-center justify-center gap-2 transition-all shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)] shadow-blue-500/20 cursor-pointer mt-1"
                >
                  <span>Send message</span>
                  <IconArrowRight className="w-4 h-4 text-white" />
                </button>

                {/* Consent */}
                <p className="text-[12px] text-[#5e6e84] text-center">
                  By sending this form you agree to be contacted about Autoral Home.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
