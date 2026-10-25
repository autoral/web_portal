"use client";

import React, { useState, useEffect } from "react";
import { IconClose, IconHandyman, IconCheckCircle } from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

interface BookInstallationSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookInstallationSheet({
  isOpen,
  onClose,
}: BookInstallationSheetProps) {
  const { lang } = useLanguage();
  const t = translations.modals.book;
  const f = translations.contact.form;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [selectedInterestKey, setSelectedInterestKey] = useState<"buying" | "installation" | "partner" | "other">("installation");
  const [submitted, setSubmitted] = useState(false);

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

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  const chips: Array<{ key: "buying" | "installation" | "partner" | "other"; label: string }> = [
    { key: "buying", label: f.chips.buying[lang] },
    { key: "installation", label: f.chips.installation[lang] },
    { key: "partner", label: f.chips.partner[lang] },
    { key: "other", label: f.chips.other[lang] },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop Scrim (Figma: scrim-tap) */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-[#0a0f17]/40 backdrop-blur-xs transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Bottom Sheet Card (Figma: sheet) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-installation-title"
        className="relative z-10 w-full max-w-[440px] max-h-[92vh] bg-white dark:bg-[#151d29] border-t border-[#d8e1ec] dark:border-[#2a3546] rounded-t-[28px] px-4 pt-2 pb-6 flex flex-col gap-4 shadow-[0px_-8px_32px_rgba(10,42,92,0.18)] dark:shadow-none animate-in slide-in-from-bottom duration-300 overflow-hidden"
      >
        {/* Drag Handle */}
        <div className="w-full flex items-center justify-center pt-1 shrink-0">
          <div className="w-9 h-[5px] rounded-[3px] bg-[#d8e1ec] dark:bg-[#2a3546]" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-3 w-full shrink-0">
          <div className="flex flex-col gap-1 text-left flex-1 min-w-0">
            <h2
              id="book-installation-title"
              className="text-[24px] font-semibold leading-[32px] tracking-[-0.2px] text-[#0e1726] dark:text-[#edf2f8]"
            >
              {t.title[lang]}
            </h2>
            <p className="text-[14px] font-normal leading-[20px] text-[#4a5a70] dark:text-[#b4c1d1]">
              {t.subtitle[lang]}
            </p>
          </div>

          {/* Close Button (44x44 circular button) */}
          <button
            type="button"
            onClick={handleClose}
            className="size-[44px] rounded-full bg-[#edf2f8] dark:bg-[#1e2836] border border-[#d8e1ec] dark:border-[#2a3546] flex items-center justify-center text-[#0066db] dark:text-[#84beff] hover:bg-[#e4ebf5] dark:hover:bg-[#2a3546] active:scale-95 transition-all shrink-0 cursor-pointer"
            aria-label="Close dialog"
          >
            <IconClose className="size-[20px]" />
          </button>
        </div>

        {/* Content / Form */}
        {submitted ? (
          <div className="py-12 w-full flex flex-col items-center text-center gap-3 animate-in fade-in duration-200">
            <div className="size-14 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-[#187a43] dark:text-emerald-400">
              <IconCheckCircle className="size-8 text-[#187a43] dark:text-emerald-400" />
            </div>
            <h3 className="text-[20px] font-semibold text-[#0e1726] dark:text-[#edf2f8]">
              Request Received!
            </h3>
            <p className="text-[15px] text-[#4a5a70] dark:text-[#b4c1d1] max-w-xs leading-relaxed">
              Thank you, {formData.name || "Taher"}. An Autoral specialist will call you within 1 working day to confirm your visit time.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="btn-primary mt-4 h-12 px-8 rounded-full font-semibold text-[16px] cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex-1 overflow-y-auto flex flex-col gap-4 pr-0.5"
          >
            {/* Field: Your name */}
            <div className="flex flex-col gap-1.5 items-start w-full">
              <label className="text-[14px] font-medium leading-[20px] text-[#0e1726] dark:text-[#edf2f8]">
                {f.nameLabel[lang]}
              </label>
              <input
                type="text"
                required
                placeholder={f.namePlaceholder[lang]}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full h-[52px] rounded-[26px] border border-[#d8e1ec] dark:border-[#2a3546] bg-white dark:bg-[#0e1726] px-4 text-[16px] text-[#0e1726] dark:text-[#edf2f8] placeholder:text-[#4a5a70] dark:placeholder:text-[#8b9aae] focus:outline-none focus:border-[#0066db] dark:focus:border-[#84beff] focus:ring-2 focus:ring-[#0066db]/20 dark:focus:ring-[#84beff]/20 transition-all shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-none"
              />
            </div>

            {/* Field: Phone number */}
            <div className="flex flex-col gap-1.5 items-start w-full">
              <label className="text-[14px] font-medium leading-[20px] text-[#0e1726] dark:text-[#edf2f8]">
                {f.phoneLabel[lang]}
              </label>
              <input
                type="tel"
                required
                placeholder={f.phonePlaceholder[lang]}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full h-[52px] rounded-[26px] border border-[#d8e1ec] dark:border-[#2a3546] bg-white dark:bg-[#0e1726] px-4 text-[16px] text-[#0e1726] dark:text-[#edf2f8] placeholder:text-[#4a5a70] dark:placeholder:text-[#8b9aae] focus:outline-none focus:border-[#0066db] dark:focus:border-[#84beff] focus:ring-2 focus:ring-[#0066db]/20 dark:focus:ring-[#84beff]/20 transition-all shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-none"
              />
            </div>

            {/* Field: Email (optional) */}
            <div className="flex flex-col gap-1.5 items-start w-full">
              <label className="text-[14px] font-medium leading-[20px] text-[#0e1726] dark:text-[#edf2f8]">
                {f.emailLabel[lang]}
              </label>
              <input
                type="email"
                placeholder={f.emailPlaceholder[lang]}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full h-[52px] rounded-[26px] border border-[#d8e1ec] dark:border-[#2a3546] bg-white dark:bg-[#0e1726] px-4 text-[16px] text-[#0e1726] dark:text-[#edf2f8] placeholder:text-[#4a5a70] dark:placeholder:text-[#8b9aae] focus:outline-none focus:border-[#0066db] dark:focus:border-[#84beff] focus:ring-2 focus:ring-[#0066db]/20 dark:focus:ring-[#84beff]/20 transition-all shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-none"
              />
            </div>

            {/* Field: I'm interested in */}
            <div className="flex flex-col gap-2.5 items-start w-full">
              <span className="text-[15px] font-medium leading-[22px] text-[#0e1726] dark:text-[#edf2f8]">
                {f.interestLabel[lang]}
              </span>
              <div className="flex flex-wrap gap-2 w-full">
                {chips.map((chip) => {
                  const isSelected = selectedInterestKey === chip.key;
                  return (
                    <button
                      key={chip.key}
                      type="button"
                      onClick={() => setSelectedInterestKey(chip.key)}
                      className={`h-[36px] px-4 rounded-[18px] text-[14px] font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726] shadow-xs scale-[1.02]"
                          : "bg-white dark:bg-[#0e1726] border border-[#d8e1ec] dark:border-[#2a3546] text-[#0e1726] dark:text-[#edf2f8] hover:border-[#0066db] dark:hover:border-[#84beff]"
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
                      <span>{chip.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Field: Message */}
            <div className="flex flex-col gap-1.5 items-start w-full">
              <label className="text-[14px] font-medium leading-[20px] text-[#0e1726] dark:text-[#edf2f8]">
                {f.messageLabel[lang]}
              </label>
              <textarea
                rows={3}
                placeholder={f.messagePlaceholder[lang]}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-[20px] border border-[#d8e1ec] dark:border-[#2a3546] bg-white dark:bg-[#0e1726] p-4 text-[16px] text-[#0e1726] dark:text-[#edf2f8] placeholder:text-[#4a5a70] dark:placeholder:text-[#8b9aae] focus:outline-none focus:border-[#0066db] dark:focus:border-[#84beff] focus:ring-2 focus:ring-[#0066db]/20 dark:focus:ring-[#84beff]/20 transition-all resize-none shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-none"
              />
            </div>

            {/* Consent Disclaimer */}
            <p className="text-[14px] font-normal leading-[20px] text-[#5e6e84] dark:text-[#8b9aae] text-left pt-1">
              {f.consent[lang]}
            </p>

            {/* Submit Button */}
            <div className="pt-2 pb-1 w-full">
              <button
                type="submit"
                className="btn-primary w-full h-12 rounded-[24px] font-semibold text-[16px] leading-[24px] flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98 transition-all"
              >
                <IconHandyman className="size-5 text-white" />
                <span>{lang === "bn" ? "ইনস্টলেশন অনুরোধ করুন" : "Request installation"}</span>
              </button>
            </div>
          </form>
        )}

        {/* Home Indicator */}
        <div className="w-full flex items-center justify-center pt-1 shrink-0">
          <div className="w-[120px] h-[4px] bg-[#0e1726] dark:bg-white rounded-[2px] opacity-80" />
        </div>
      </div>
    </div>
  );
}
