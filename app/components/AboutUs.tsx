import Image from "next/image";

// Figma: bg-subtle, px-120 py-112, gap-80 between copy and values
// Left copy: w-520. Section-head gap-16. Overline 12/600/16/tracking-0.96. H2 44/600/52/tracking-[-1px]
// Body Large 18/400/28 (first para). Body 16/400/26 gray-secondary (second para)
// Mission card: p-24 rounded-[20px] border bg-default, gap-16, bar w-4 rounded-[2px] bg-inverse
//   Mission label: 15/500/22 secondary. Mission text: 18/600/26 primary
// Right value cards: gap-16, each p-28 rounded-[24px] bg-default, gap-20 between icon+text
//   Icon badge: 56×56 rounded-[16px] bg-tile-off. Icon: 28×28
//   Card title: 18/600/26. Card body: 16/400/26. Text gap: 6px

const values = [
  { icon: "/icons/icon-local.svg",   title: "Local first",       desc: "Your home works on your own Wi-Fi. Internet is only needed when you are away." },
  { icon: "/icons/icon-family.svg",  title: "Made for families", desc: "Big tiles, clear words and full Bangla, so everyone at home can use it." },
  { icon: "/icons/icon-support.svg", title: "Honest support",    desc: "Real people on the phone and WhatsApp, and installers who come to your home." },
];

export default function AboutUs() {
  return (
    <section id="about" style={{ width: "100%", display: "block", background: "var(--bg-subtle)" }}
      aria-labelledby="about-heading">
      <div className="container-inner flex flex-col lg:flex-row items-start gap-12 lg:gap-[80px] section-py">

        {/* Left copy — Figma: w-520 */}
        <div className="flex flex-col w-full lg:w-[520px] shrink-0" style={{ gap: 24 }}>
          {/* section-head */}
          <div className="flex flex-col" style={{ gap: 16 }}>
            <p className="uppercase" style={{ fontSize: 12, fontWeight: 600, lineHeight: "16px", letterSpacing: "0.96px", color: "var(--text-secondary)" }}>
              About us
            </p>
            <h2 id="about-heading" style={{ fontSize: 44, fontWeight: 600, lineHeight: "52px", letterSpacing: "-1px", color: "var(--text-primary)" }}>
              Built for homes in Bangladesh
            </h2>
          </div>

          {/* Body Large */}
          <p style={{ fontSize: 18, lineHeight: "28px", color: "var(--text-primary)" }}>
            Autoral Home Automation started with a simple idea: a smart home shouldn&apos;t need new wiring, strong internet or English.
          </p>

          {/* Body */}
          <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-secondary)" }}>
            We design our hub and app around the switchboards, power cuts and families of Bangladesh, and we support every customer with a local team.
          </p>

          {/* Mission card — Figma: p-24 rounded-[20px] border bg-default gap-16, bar 4×80 rounded-[2px] */}
          <div className="flex items-start border" style={{ gap: 16, padding: 24, borderRadius: 20, background: "var(--bg-default)", borderColor: "var(--border-default)" }}>
            <div className="shrink-0 self-stretch" style={{ width: 4, borderRadius: 2, background: "var(--surface-inverse)" }} />
            <div className="flex flex-col" style={{ gap: 6 }}>
              <p style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-secondary)" }}>Our mission</p>
              <p style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px", color: "var(--text-primary)" }}>
                Make every home in Bangladesh easier and safer to run, one switch at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Right value cards — Figma: flex-1 gap-16 */}
        <div className="flex flex-col flex-1 w-full" style={{ gap: 16 }}>
          {values.map(v => (
            <div key={v.title} className="flex items-start"
              style={{ gap: 20, padding: 28, borderRadius: 24, background: "var(--bg-default)" }}>
              <div className="flex items-center justify-center shrink-0"
                style={{ width: 56, height: 56, borderRadius: 16, background: "var(--tile-off)" }}>
                <Image src={v.icon} alt="" width={28} height={28} />
              </div>
              <div className="flex flex-col" style={{ gap: 6 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px", color: "var(--text-primary)" }}>{v.title}</h3>
                <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-secondary)" }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
