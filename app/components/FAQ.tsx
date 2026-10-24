"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="w-full"
      style={{ background: "var(--bg-white)" }}
      aria-labelledby="faq-heading"
    >
      <div className="container-inner flex flex-col lg:flex-row items-start justify-between section-py gap-12 lg:gap-20">
        {/* Left Intro Column (Figma: w-400, gap-32) */}
        <div className="flex flex-col w-full lg:w-[400px] shrink-0" style={{ gap: 32 }}>
          <div className="flex flex-col gap-4">
            <p
              className="uppercase tracking-widest font-semibold"
              style={{ fontSize: 12, lineHeight: "16px", color: "var(--primary)" }}
            >
              {t.faq.eyebrow}
            </p>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-[44px]"
              style={{
                fontWeight: 600,
                lineHeight: "52px",
                letterSpacing: "-1px",
                color: "var(--text-primary)",
              }}
            >
              {t.faq.title}
            </h2>
          </div>

          {/* Help Card in #eaf3ff */}
          <div
            className="flex flex-col rounded-[24px] p-7 gap-3.5"
            style={{ background: "var(--primary-subtle)" }}
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full"
              style={{ background: "rgba(0, 102, 219, 0.12)" }}
            >
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 21L3.82083 24.1792C3.54861 24.4514 3.2375 24.5097 2.8875 24.3542C2.51806 24.2181 2.33333 23.9556 2.33333 23.5667V4.08333C2.33333 3.61667 2.50833 3.20833 2.85833 2.85833C3.20833 2.50833 3.61667 2.33333 4.08333 2.33333H23.9167C24.3833 2.33333 24.7917 2.50833 25.1417 2.85833C25.4917 3.20833 25.6667 3.61667 25.6667 4.08333V19.25C25.6667 19.7167 25.4917 20.125 25.1417 20.475C24.7917 20.825 24.3833 21 23.9167 21H7ZM6.24167 19.25H23.9167V4.08333H4.08333V21.5833L6.24167 19.25ZM7.875 16.3625H15.2542C15.5069 16.3625 15.7111 16.275 15.8667 16.1C16.0417 15.9444 16.1292 15.7403 16.1292 15.4875C16.1292 15.2347 16.0417 15.0208 15.8667 14.8458C15.6917 14.6708 15.4875 14.5931 15.2542 14.6125H7.875C7.62222 14.6125 7.41806 14.7 7.2625 14.875C7.0875 15.0306 7 15.2347 7 15.4875C7 15.7403 7.0875 15.9542 7.2625 16.1292C7.4375 16.3042 7.64167 16.3819 7.875 16.3625ZM7.875 12.5708H20.125C20.3778 12.5708 20.5819 12.4833 20.7375 12.3083C20.9125 12.1528 21 11.9486 21 11.6958C21 11.4431 20.9125 11.2389 20.7375 11.0833C20.5819 10.9083 20.3778 10.8208 20.125 10.8208H7.875C7.62222 10.8208 7.41806 10.9083 7.2625 11.0833C7.0875 11.2389 7 11.4431 7 11.6958C7 11.9486 7.0875 12.1528 7.2625 12.3083C7.4375 12.4833 7.62222 12.5708 7.875 12.5708ZM7.875 8.77917H20.125C20.3778 8.77917 20.5819 8.69167 20.7375 8.51667C20.9125 8.36111 21 8.15694 21 7.90417C21 7.65139 20.9125 7.44722 20.7375 7.29167C20.5819 7.11667 20.3778 7.02917 20.125 7.02917H7.875C7.62222 7.02917 7.41806 7.11667 7.2625 7.29167C7.0875 7.44722 7 7.65139 7 7.90417C7 8.15694 7.0875 8.36111 7.2625 8.51667C7.41806 8.69167 7.62222 8.77917 7.875 8.77917Z"
                  fill="#0066DB"
                />
              </svg>
            </div>
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                lineHeight: "26px",
                color: "var(--primary-hover)",
              }}
            >
              {t.faq.helpTitle}
            </span>
            <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-secondary)" }}>
              {t.faq.helpDesc}
            </p>
            <a
              href="https://wa.me/8801770066585"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white mt-1 transition-opacity hover:opacity-90 w-fit"
              style={{
                height: 48,
                paddingLeft: 24,
                paddingRight: 24,
                background: "var(--primary)",
                fontSize: 16,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <Image src="/icons/icon-whatsapp.svg" alt="" width={18} height={18} className="brightness-0 invert" />
              <span>{t.faq.chatWhatsApp}</span>
            </a>
          </div>
        </div>

        {/* Right Accordion Column (Figma: w-720, gap-12) */}
        <div className="flex flex-col flex-1 w-full lg:max-w-[720px] gap-3">
          {t.faq.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="flex flex-col rounded-[20px] border transition-all"
                style={{
                  background: "var(--bg-white)",
                  borderColor: isOpen ? "var(--primary)" : "var(--border-default)",
                  padding: "22px 24px",
                  boxShadow: isOpen ? "0 4px 16px rgba(0, 102, 219, 0.08)" : "none",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between text-left w-full gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      lineHeight: "26px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="flex items-center justify-center shrink-0 w-9 h-9 rounded-full transition-colors"
                    style={{
                      background: isOpen ? "var(--primary)" : "var(--bg-subtle)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? "#ffffff" : "var(--text-primary)"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <p
                    className="pt-3"
                    style={{
                      fontSize: 16,
                      lineHeight: "26px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
