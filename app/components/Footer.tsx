import Image from "next/image";

const links = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Autoral device", href: "#device" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Download the app", href: "#download" },
  ],
  Company: [
    { label: "About us", href: "#about" },
    { label: "Partner with us", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Installation guide", href: "#how-it-works" },
    { label: "Privacy policy", href: "#" },
    { label: "Terms of use", href: "#" },
  ],
};

const socials = [
  { icon: "/icons/icon-facebook.svg", href: "#", label: "Facebook" },
  { icon: "/icons/icon-messenger.svg", href: "#", label: "Messenger" },
  { icon: "/icons/icon-youtube.svg", href: "#", label: "YouTube" },
  { icon: "/icons/icon-whatsapp-footer.svg", href: "https://wa.me/8801770066585", label: "WhatsApp" },
];

export default function Footer() {
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
              Your whole home, one tap away. Smart home automation designed for Bangladesh.
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
            {Object.entries(links).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-4">
                <span style={{ fontSize: 15, fontWeight: 500, color: "#ffffff" }}>
                  {category}
                </span>
                <div className="flex flex-col gap-3">
                  {items.map((item) => (
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
            © 2026 Autoral Home Automation. All rights reserved.
          </p>
          <p style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.75)" }}>
            English · <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>বাংলা</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
