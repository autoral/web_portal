import Image from "next/image";

// Figma: bg-subtle, px-120 py-112, section-head max-w-760
// Feature cards: p-28 rounded-[24px] border bg-default, gap-18 between icon and text stack
// Icon badge: 56×56 rounded-[16px]. Icon: 28×28
// H4: 18px/600/26px. Body: 16px/400/26px. Gap between title+body: 8px
const features = [
  { icon: "/icons/icon-one-tap.svg",  title: "One-tap control",       desc: "Switch any device from the Home screen. The tile shows its state instantly." },
  { icon: "/icons/icon-rooms.svg",    title: "Organised by room",      desc: "Name rooms and devices the way your family talks about them." },
  { icon: "/icons/icon-remote.svg",   title: "Control from anywhere",  desc: "Sign in with Google, Apple or email to reach your home from outside." },
  { icon: "/icons/icon-offline.svg",  title: "Works offline at home",  desc: "No internet? Everything still works on your home Wi-Fi." },
  {
    icon: "/icons/icon-language.svg",
    titleJsx: <>English &amp; <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>বাংলা</span></>,
    desc: "Every screen, button and message is available in both languages.",
  },
  { icon: "/icons/icon-alloff.svg",   title: "Everything off, one tap", desc: "Leaving home? Turn off every light and fan in one go." },
];

export default function AppFeatures() {
  return (
    <section id="app-features" style={{ width: "100%", display: "block", background: "var(--bg-subtle)" }}
      aria-labelledby="features-heading">
      <div className="container-inner flex flex-col items-center gap-14 section-py">

        {/* Section head */}
        <div className="flex flex-col items-center text-center w-full max-w-[760px]" style={{ gap: 16 }}>
          <p className="uppercase" style={{ fontSize: 12, fontWeight: 600, lineHeight: "16px", letterSpacing: "0.96px", color: "var(--text-secondary)" }}>
            App features
          </p>
          <h2 id="features-heading" style={{ fontSize: 44, fontWeight: 600, lineHeight: "52px", letterSpacing: "-1px", color: "var(--text-primary)" }}>
            Simple enough for the whole family
          </h2>
          <p style={{ fontSize: 18, lineHeight: "28px", color: "var(--text-secondary)" }}>
            Designed with parents, kids and grandparents in mind. Every screen works in English and Bangla.
          </p>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col border"
              style={{ gap: 18, padding: 28, borderRadius: 24, background: "var(--bg-default)", borderColor: "var(--border-default)" }}>
              <div className="flex items-center justify-center"
                style={{ width: 56, height: 56, borderRadius: 16, background: "var(--tile-off)" }}>
                <Image src={feat.icon} alt="" width={28} height={28} />
              </div>
              <div className="flex flex-col" style={{ gap: 8 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px", color: "var(--text-primary)" }}>
                  {feat.titleJsx ?? feat.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-secondary)" }}>
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
