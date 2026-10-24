"use client";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "../i18n/LanguageContext";

function StoreBadge({ store, getLabel, downloadLabel }: { store: "Google Play" | "App Store"; getLabel: string; downloadLabel: string }) {
  const isGoogle = store === "Google Play";
  return (
    <a
      href="#download"
      className="inline-flex items-center rounded-[14px] shrink-0 transition-opacity hover:opacity-90"
      style={{
        background: "#000000",
        gap: 10,
        padding: "10px 16px 10px 14px",
        height: 62,
        width: isGoogle ? 168 : 161,
      }}
      aria-label={`Download on ${store}`}
    >
      <Image
        src={isGoogle ? "/icons/icon-googleplay.svg" : "/icons/icon-apple.svg"}
        alt={store}
        width={24}
        height={24}
      />
      <div className="flex flex-col overflow-hidden whitespace-nowrap text-left text-white">
        <span style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0px", lineHeight: "14px" }}>
          {isGoogle ? getLabel : downloadLabel}
        </span>
        <span style={{ fontSize: 18, fontWeight: 600, lineHeight: "24px" }}>{store}</span>
      </div>
    </a>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <section
      aria-label="Hero"
      className="relative w-full overflow-hidden"
      style={{
        background: "var(--hero-bg-gradient)",
      }}
    >
      <div className="container-inner pt-12 pb-16 lg:pt-[72px] lg:pb-[88px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
        {/* Left Copy Column (Figma: 600px width) */}
        <div className="flex flex-col w-full lg:w-[600px] shrink-0" style={{ gap: 28 }}>
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center self-start border rounded-full shadow-xs"
            style={{
              gap: 8,
              padding: "8px 16px 8px 12px",
              background: "var(--bg-white)",
              borderColor: "var(--border-default)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span
              className="uppercase tracking-wider font-semibold"
              style={{ fontSize: 12, lineHeight: "16px", color: "var(--primary-hover)" }}
            >
              {t.hero.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-[40px] leading-[48px] lg:text-[64px] lg:leading-[72px]"
            style={{
              fontWeight: 600,
              letterSpacing: "-1.5px",
              color: "var(--text-primary)",
            }}
          >
            {t.hero.headlinePart1}<br />{t.hero.headlinePart2}
          </h1>

          {/* Lead Paragraph */}
          <p
            style={{
              fontSize: 18,
              lineHeight: "28px",
              color: "var(--text-secondary)",
            }}
          >
            {t.hero.description}
          </p>

          {/* Store Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <StoreBadge store="Google Play" getLabel={t.hero.getItOn} downloadLabel={t.hero.downloadOn} />
            <StoreBadge store="App Store" getLabel={t.hero.getItOn} downloadLabel={t.hero.downloadOn} />
          </div>

          {/* Secondary Actions Row */}
          <div className="flex flex-wrap items-center gap-6 pt-1">
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border rounded-full transition-all hover:opacity-90"
              style={{
                height: 48,
                paddingLeft: 24,
                paddingRight: 24,
                background: "var(--hero-btn-bg)",
                borderColor: "var(--border-default)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 8px 32px rgba(10, 42, 92, 0.08)",
                color: "var(--primary)",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>{t.hero.seeHowItWorks}</span>
            </a>

            <div className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--status-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)" }}>
                {t.hero.freeAppLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual Column (Figma: 540x680 exact exported high-res render) */}
        <div className="relative shrink-0 flex items-center justify-center w-full lg:w-[540px]">
          {/* Light Theme Phone Mockup */}
          <Image
            src="/images/hero-visual.svg"
            alt="Autoral Home app interface with phone and smart device controls"
            width={750}
            height={900}
            priority
            className={`w-full h-auto object-contain max-w-[540px] transition-opacity duration-300 ${
              isDark ? "opacity-0 absolute pointer-events-none" : "opacity-100"
            }`}
          />
          {/* Dark Theme Phone Mockup (Figma node 4438:94698) */}
          <Image
            src="/images/hero-visual-dark.svg"
            alt="Autoral Home app interface with phone and smart device controls (Dark mode)"
            width={750}
            height={900}
            priority
            className={`w-full h-auto object-contain max-w-[540px] transition-opacity duration-300 ${
              isDark ? "opacity-100" : "opacity-0 absolute pointer-events-none"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
