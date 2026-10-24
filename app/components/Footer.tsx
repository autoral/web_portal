"use client";
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";

const socials = [
  { icon: "/icons/icon-facebook.svg", href: "#", label: "Facebook" },
  { icon: "/icons/icon-messenger.svg", href: "#", label: "Messenger" },
  { icon: "/icons/icon-youtube.svg", href: "#", label: "YouTube" },
  { icon: "/icons/icon-whatsapp-footer.svg", href: "https://wa.me/8801770066585", label: "WhatsApp" },
];

export default function Footer() {
  const { t } = useLanguage();

  const linkColumns = [
    {
      category: t.footer.columns.product,
      items: [
        { label: t.footer.links.features, href: "#features" },
        { label: t.footer.links.device, href: "#device" },
        { label: t.footer.links.howItWorks, href: "#how-it-works" },
        { label: t.footer.links.downloadApp, href: "#download" },
      ],
    },
    {
      category: t.footer.columns.company,
      items: [
        { label: t.footer.links.aboutUs, href: "#about" },
        { label: t.footer.links.partner, href: "#contact" },
        { label: t.footer.links.contact, href: "#contact" },
      ],
    },
    {
      category: t.footer.columns.support,
      items: [
        { label: t.footer.links.faq, href: "#faq" },
        { label: t.footer.links.installationGuide, href: "#how-it-works" },
        { label: t.footer.links.privacyPolicy, href: "#" },
        { label: t.footer.links.termsOfUse, href: "#" },
      ],
    },
  ];

  return (
    <footer
      className="w-full text-white"
      style={{
        background: "var(--surface-dark)",
      }}
      aria-label="Site footer"
    >
      <div className="container-inner pt-20 pb-10 flex flex-col gap-14">
        {/* Top Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          {/* Brand Stack (Figma: w-360) */}
          <div className="flex flex-col w-full lg:w-[360px] shrink-0 gap-5">
            <div className="flex items-center gap-2.5">
              <div
                className="flex items-center justify-center shrink-0 w-10 h-10 rounded-[12px]"
                style={{ background: "var(--primary)" }}
              >
                <Image src="/icons/icon-home.svg" alt="" width={22} height={22} className="brightness-0 invert" />
              </div>
              <span className="font-semibold text-lg text-white">Autoral Home</span>
            </div>

            <p style={{ fontSize: 16, lineHeight: "26px", color: "rgba(255, 255, 255, 0.85)" }}>
              {t.footer.brandDesc}
            </p>

            {/* Social Icons (4 circles) */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-full border transition-all hover:bg-white/10"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <Image src={s.icon} alt="" width={18} height={18} className="brightness-0 invert" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-14 flex-1 max-w-[680px]">
            {linkColumns.map((col) => (
              <div key={col.category} className="flex flex-col gap-4">
                <span style={{ fontSize: 15, fontWeight: 500, color: "#ffffff" }}>
                  {col.category}
                </span>
                <div className="flex flex-col gap-3">
                  {col.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm transition-opacity hover:opacity-100 opacity-80"
                      style={{ color: "#ffffff" }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t gap-3"
          style={{ borderColor: "rgba(255, 255, 255, 0.12)" }}
        >
          <p style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.6)" }}>
            {t.footer.copyright}
          </p>
          <p style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.75)" }}>
            {t.footer.builtWithPride}
          </p>
        </div>
      </div>
    </footer>
  );
}
