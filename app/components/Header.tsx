"use client";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Features",     href: "#features" },
  { label: "Autoral Hub",  href: "#hub" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Download",     href: "#download" },
  { label: "About",        href: "#about" },
  { label: "Contact",      href: "#contact" },
];

export default function Header() {
  const [lang, setLang]         = useState<"EN" | "BN">("EN");
  const [mobileOpen, setMobile] = useState(false);

  return (
    <header
      style={{ position: "sticky", top: 0, zIndex: 50, width: "100%", display: "block", background: "var(--bg-default)", borderBottom: "1px solid var(--border-default)" }}
    >
      {/* ── Desktop / wide nav ── */}
      <div className="container-inner" style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <a href="/" className="flex items-center gap-[10px] shrink-0">
          <div
            className="flex items-center justify-center rounded-[10px] shrink-0"
            style={{ background: "var(--surface-inverse)", width: 36, height: 36 }}
          >
            <Image src="/icons/icon-home.svg" alt="" width={22} height={22} />
          </div>
          <div className="flex flex-col overflow-hidden whitespace-nowrap">
            <span
              className="font-semibold"
              style={{ fontSize: 18, lineHeight: "26px", color: "var(--text-primary)" }}
            >
              Autoral Home
            </span>
            <span
              style={{
                fontFamily: "'Hind Siliguri', sans-serif",
                fontSize: 11,
                lineHeight: "normal",
                color: "var(--text-secondary)",
              }}
            >
              অটোরাল হোম
            </span>
          </div>
        </a>

        {/* Nav — hidden on mobile */}
        <nav className="hidden lg:flex items-center" style={{ gap: 36 }} aria-label="Main navigation">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-opacity hover:opacity-60 whitespace-nowrap"
              style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-secondary)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center" style={{ gap: 16 }}>
          {/* Language toggle — Figma: border, p-[4px], inner px-[12px] py-[6px], text 14px */}
          <div
            className="flex items-start rounded-full border"
            style={{ padding: 4, borderColor: "var(--border-default)" }}
          >
            {(["EN", "BN"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="rounded-full transition-colors"
                style={{
                  padding: "6px 12px",
                  fontSize: 14,
                  lineHeight: "20px",
                  fontFamily: l === "BN" ? "'Hind Siliguri', sans-serif" : "inherit",
                  background: lang === l ? "var(--tile-off)" : "transparent",
                  color: lang === l ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                {l === "EN" ? "EN" : "বাংলা"}
              </button>
            ))}
          </div>

          {/* Primary CTA — Figma: px-[20px] py-[11px] rounded-[999px] text-15 Medium */}
          <a
            href="#download"
            className="flex items-center gap-2 rounded-full transition-opacity hover:opacity-80 whitespace-nowrap"
            style={{
              padding: "11px 20px",
              fontSize: 15,
              fontWeight: 500,
              lineHeight: "22px",
              background: "var(--surface-inverse)",
              color: "var(--text-on-inverse)",
            }}
          >
            Get the app
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobile(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen
              ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>
              : <><line x1="2" y1="5" x2="20" y2="5"/><line x1="2" y1="11" x2="20" y2="11"/><line x1="2" y1="17" x2="20" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="container-inner" style={{ borderTop: "1px solid var(--border-default)", display: "flex", flexDirection: "column", gap: 4, paddingTop: 16, paddingBottom: 16 }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobile(false)}
              className="py-3 border-b last:border-0 font-medium"
              style={{ fontSize: 15, color: "var(--text-primary)", borderColor: "var(--border-default)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobile(false)}
            className="mt-3 flex items-center justify-center py-3 rounded-full font-medium"
            style={{ fontSize: 15, background: "var(--surface-inverse)", color: "var(--text-on-inverse)" }}
          >
            Get the app
          </a>
        </div>
      )}
    </header>
  );
}
