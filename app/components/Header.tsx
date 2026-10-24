"use client";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [activeNav, setActiveNav] = useState("#features");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.features,   href: "#features" },
    { label: t.nav.device,     href: "#device" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.download,   href: "#download" },
    { label: t.nav.about,      href: "#about" },
    { label: t.nav.contact,    href: "#contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all"
      style={{
        background: "var(--header-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border-default)",
      }}
    >
      <div className="container-inner flex items-center justify-between" style={{ height: 85 }}>
        {/* Logo */}
        <a href="/" className="flex items-center gap-[10px] shrink-0" aria-label="Autoral Home">
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: "var(--primary)",
            }}
          >
            <Image src="/icons/icon-home.svg" alt="" width={22} height={22} className="brightness-0 invert" />
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              lineHeight: "26px",
              color: "var(--text-primary)",
              letterSpacing: "0px",
            }}
          >
            Autoral Home
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center" style={{ gap: 36 }} aria-label="Main navigation">
          {navLinks.map((item) => {
            const isActive = activeNav === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveNav(item.href)}
                className="relative flex flex-col items-center py-1 transition-colors hover:text-[#0066db]"
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  lineHeight: "22px",
                  color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 w-full"
                    style={{
                      height: 2,
                      borderRadius: 1,
                      background: "var(--primary)",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center" style={{ gap: 14 }}>
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Language Toggle */}
          <div
            className="flex items-center border"
            style={{
              padding: 4,
              gap: 2,
              borderRadius: 999,
              background: "var(--bg-subtle)",
              borderColor: "var(--border-default)",
            }}
          >
            <button
              type="button"
              onClick={() => setLang("EN")}
              className="transition-colors cursor-pointer"
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 500,
                lineHeight: "22px",
                background: lang === "EN" ? "var(--lang-active-bg)" : "transparent",
                color: lang === "EN" ? "var(--lang-active-color)" : "var(--text-secondary)",
              }}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("BN")}
              className="transition-colors cursor-pointer"
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                fontFamily: "'Hind Siliguri', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                lineHeight: "22px",
                background: lang === "BN" ? "var(--lang-active-bg)" : "transparent",
                color: lang === "BN" ? "var(--lang-active-color)" : "var(--text-secondary)",
              }}
            >
              বাংলা
            </button>
          </div>

          {/* Primary CTA */}
          <a
            href="#download"
            className="inline-flex items-center gap-2 transition-transform active:scale-[0.98] hover:opacity-95"
            style={{
              height: 48,
              paddingLeft: 24,
              paddingRight: 24,
              borderRadius: 24,
              background: "var(--primary)",
              color: "var(--text-white)",
              fontSize: 16,
              fontWeight: 600,
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{t.nav.getApp}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg transition-colors hover:bg-[var(--bg-subtle)]"
          style={{ color: "var(--text-primary)" }}
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t px-6 py-6 flex flex-col gap-4 bg-[var(--bg-white)]" style={{ borderColor: "var(--border-default)" }}>
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveNav(item.href);
                setMobileOpen(false);
              }}
              className="text-base font-medium py-1"
              style={{ color: "var(--text-primary)" }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-4 border-t gap-3" style={{ borderColor: "var(--border-default)" }}>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <div className="flex border rounded-full p-1" style={{ borderColor: "var(--border-default)", background: "var(--bg-subtle)" }}>
                <button
                  type="button"
                  onClick={() => setLang("EN")}
                  className="px-4 py-1 rounded-full text-sm font-medium"
                  style={{
                    background: lang === "EN" ? "var(--lang-active-bg)" : "transparent",
                    color: lang === "EN" ? "var(--lang-active-color)" : "var(--text-secondary)",
                  }}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("BN")}
                  className="px-4 py-1 rounded-full text-sm font-medium"
                  style={{
                    fontFamily: "'Hind Siliguri', sans-serif",
                    background: lang === "BN" ? "var(--lang-active-bg)" : "transparent",
                    color: lang === "BN" ? "var(--lang-active-color)" : "var(--text-secondary)",
                  }}
                >
                  বাংলা
                </button>
              </div>
            </div>
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white shrink-0"
              style={{ background: "var(--primary)" }}
            >
              {t.nav.getApp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
