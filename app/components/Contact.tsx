"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [selectedInterestIndex, setSelectedInterestIndex] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const contactItems = [
    {
      icon: "/icons/icon-call.svg",
      label: t.contact.labels.phone,
      value: "01770-066585",
      href: "tel:01770066585",
    },
    {
      icon: "/icons/icon-whatsapp-dark.svg",
      label: t.contact.labels.whatsapp,
      value: "01770-066585",
      href: "https://wa.me/8801770066585",
    },
    {
      icon: "/icons/icon-messenger-contact.svg",
      label: t.contact.labels.messenger,
      value: "Autoral Home on Facebook",
      href: "https://m.me/autoralhome",
    },
    {
      icon: "/icons/icon-mail.svg",
      label: t.contact.labels.email,
      value: "molla.ux@gmail.com",
      href: "mailto:molla.ux@gmail.com",
    },
    {
      icon: "/icons/icon-location.svg",
      label: t.contact.labels.office,
      value: t.contact.labels.officeCity,
    },
    {
      icon: "/icons/icon-schedule.svg",
      label: t.contact.labels.hours,
      value: t.contact.labels.hoursTime,
    },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="w-full" aria-labelledby="contact-heading">
      <div className="container-inner flex flex-col lg:flex-row items-start justify-between section-py gap-12 lg:gap-16">
        {/* Left Contact Info Column (Figma: w-480, gap-32) */}
        <div className="flex flex-col w-full lg:w-[480px] shrink-0" style={{ gap: 32 }}>
          <div className="flex flex-col gap-4">
            <p
              className="uppercase tracking-widest font-semibold"
              style={{ fontSize: 12, lineHeight: "16px", color: "var(--primary)" }}
            >
              {t.contact.eyebrow}
            </p>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-[44px]"
              style={{
                fontWeight: 600,
                lineHeight: "52px",
                letterSpacing: "-1px",
                color: "var(--text-primary)",
              }}
            >
              {t.contact.title}
            </h2>
            <p style={{ fontSize: 18, lineHeight: "28px", color: "var(--text-secondary)" }}>
              {t.contact.description}
            </p>
          </div>

          {/* Contact List */}
          <div className="flex flex-col gap-5">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full"
                  style={{ background: "var(--primary-subtle)" }}
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={22}
                    height={22}
                    style={{ filter: "invert(24%) sepia(91%) saturate(2335%) hue-rotate(203deg) brightness(94%) contrast(102%)" }}
                  />
                </div>
                <div className="flex flex-col">
                  <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-medium text-[15px] hover:underline"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-medium text-[15px]" style={{ color: "var(--text-primary)" }}>
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Office Map Card (Figma: #eaf3ff card with location icon) */}
          <div
            className="flex flex-col items-center justify-center rounded-[24px] border p-8"
            style={{
              height: 180,
              background: "var(--primary-subtle)",
              borderColor: "var(--border-default)",
              gap: 8,
            }}
          >
            <Image
              src="/icons/icon-location-pin.svg"
              alt=""
              width={32}
              height={32}
              style={{ filter: "invert(24%) sepia(91%) saturate(2335%) hue-rotate(203deg) brightness(94%) contrast(102%)" }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--primary-hover)",
              }}
            >
              {t.contact.labels.officeMap}
            </span>
          </div>
        </div>

        {/* Right Contact Form Card (Figma: w-656, rounded-32, p-10) */}
        <div
          className="flex flex-1 flex-col w-full lg:max-w-[656px] rounded-[32px] border figma-card-shadow"
          style={{
            background: "var(--bg-white)",
            padding: 40,
            borderColor: "var(--border-default)",
            gap: 24,
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full"
                style={{ background: "var(--status-green-bg)" }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--status-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 600, color: "var(--text-primary)" }}>
                {t.contact.successTitle}
              </h3>
              <p style={{ fontSize: 16, color: "var(--text-secondary)" }}>
                {t.contact.successDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    lineHeight: "32px",
                    color: "var(--text-primary)",
                  }}
                >
                  {t.contact.formTitle}
                </h3>
                <p style={{ fontSize: 16, color: "var(--text-secondary)" }}>
                  {t.contact.formDesc}
                </p>
              </div>

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 rounded-[12px] border transition-colors text-base"
                    style={{
                      height: 52,
                      borderColor: "var(--border-default)",
                      background: "var(--bg-page)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>
                    {t.contact.phoneLabel}
                  </label>
                  <div
                    className="flex items-center rounded-[12px] border overflow-hidden"
                    style={{
                      height: 52,
                      borderColor: "var(--border-default)",
                      background: "var(--bg-page)",
                    }}
                  >
                    <span
                      className="px-3.5 text-sm font-medium border-r"
                      style={{ color: "var(--text-secondary)", borderColor: "var(--border-default)" }}
                    >
                      +880
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="1XXXXXXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="flex-1 px-3.5 bg-transparent border-none outline-none text-base"
                      style={{ color: "var(--text-primary)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>
                  {t.contact.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 rounded-[12px] border transition-colors text-base"
                  style={{
                    height: 52,
                    borderColor: "var(--border-default)",
                    background: "var(--bg-page)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {/* Interest Chips */}
              <div className="flex flex-col gap-2">
                <label style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>
                  {t.contact.interestLabel}
                </label>
                <div className="flex flex-wrap gap-2">
                  {t.contact.interests.map((int, idx) => {
                    const isSelected = selectedInterestIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedInterestIndex(idx)}
                        className="px-4 py-2 rounded-full border text-sm font-medium transition-colors cursor-pointer"
                        style={{
                          background: isSelected ? "var(--primary)" : "var(--bg-page)",
                          borderColor: isSelected ? "var(--primary)" : "var(--border-default)",
                          color: isSelected ? "#ffffff" : "var(--text-secondary)",
                        }}
                      >
                        {int}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-4 rounded-[12px] border transition-colors text-base resize-none"
                  style={{
                    borderColor: "var(--border-default)",
                    background: "var(--bg-page)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full rounded-full font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
                style={{
                  height: 48,
                  background: "var(--primary)",
                  fontSize: 16,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                {t.contact.submitBtn}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
