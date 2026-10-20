import Image from "next/image";

// Figma: bg-surface-inverse, px-120 pt-72 pb-32, top stack gap-64, bottom-bar pt-24 border-t
// Brand col: w-360 gap-16. Logo mark: 36×36 rounded-[10px] bg-white icon 22×22
//   Wordmark: 18/600/26 gray-0. Tagline: 16/400/26 gray-400
//   Social icons: gap-10, each 44×44 rounded-[22px] border-gray-700, icon 20×20
// Link cols: gap-36 between cols. Col header: 15/500/22 gray-0. Links: 14/400/20 gray-400 gap-14
// Bottom bar: 14/400/20. Copyright: gray-500. Lang: gray-400

const links = {
  Product: ["Features", "Autoral Hub", "How it works", "Download the app"],
  Company: ["About us", "Partner with us", "Contact"],
  Support: ["FAQ", "Installation guide", "Privacy policy", "Terms of use"],
};

const hrefs: Record<string, string> = {
  "Features": "#features", "Autoral Hub": "#hub", "How it works": "#how-it-works",
  "Download the app": "#download", "About us": "#about", "Contact": "#contact", "FAQ": "#faq",
};

const socials = [
  { icon: "/icons/icon-facebook.svg",       href: "#", label: "Facebook" },
  { icon: "/icons/icon-youtube.svg",        href: "#", label: "YouTube" },
  { icon: "/icons/icon-whatsapp-footer.svg",href: "#", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer style={{ width: "100%", display: "block", background: "var(--surface-inverse)" }} aria-label="Site footer">
      <div className="container-inner flex flex-col" style={{ paddingTop: 56, paddingBottom: 32, gap: 48 }}>

        {/* Top row — Figma: gap-64 */}
        <div className="flex flex-col lg:flex-row" style={{ gap: 64 }}>

          {/* Brand — Figma: w-360 gap-16 */}
          <div className="flex flex-col lg:w-[360px] shrink-0" style={{ gap: 16 }}>
            <div className="flex items-center" style={{ gap: 10 }}>
              <div className="flex items-center justify-center shrink-0"
                style={{ width: 36, height: 36, borderRadius: 10, background: "white" }}>
                <Image src="/icons/icon-home-footer.svg" alt="" width={22} height={22} />
              </div>
              <span className="whitespace-nowrap" style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px", color: "white" }}>
                Autoral Home
              </span>
            </div>
            <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--gray-400)" }}>
              Your whole home, one tap away. Smart home automation designed for Bangladesh.
            </p>
            <div className="flex items-center" style={{ gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="flex items-center justify-center border transition-opacity hover:opacity-70"
                  style={{ width: 44, height: 44, borderRadius: 22, borderColor: "var(--gray-700)" }}>
                  <Image src={s.icon} alt="" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 flex-1" style={{ gap: 36 }}>
            {(Object.entries(links) as [string, string[]][]).map(([group, items]) => (
              <div key={group} className="flex flex-col" style={{ gap: 14 }}>
                <p style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "white" }}>{group}</p>
                {items.map(item => (
                  <a key={item} href={hrefs[item] ?? "#"}
                    className="transition-opacity hover:opacity-70"
                    style={{ fontSize: 14, lineHeight: "20px", color: "var(--gray-400)" }}>
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar — Figma: border-t gray-800 pt-24 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t"
          style={{ paddingTop: 24, borderColor: "var(--gray-800)", gap: 8 }}>
          <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--gray-500)" }}>
            © 2026 Autoral Home Automation. All rights reserved.
          </p>
          <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--gray-400)" }}>
            English ·{" "}
            <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>বাংলা</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
