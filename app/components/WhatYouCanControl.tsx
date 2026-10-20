import Image from "next/image";

// Figma section: px-120 py-112, section-head max-w-760 centered
// Cards: p-28 rounded-[24px] bg-subtle. Icon badge: 56×56 rounded-[16px]. Icon: 28×28
// H3: 24px/600/32px/tracking-[-0.2px]. Body: 16px/400/26px
const categories = [
  { icon: "/icons/icon-lightbulb.svg",     title: "Lighting",           desc: "Ceiling lights, lamps, strip lights" },
  { icon: "/icons/icon-cooling.svg",       title: "Cooling",            desc: "Fans, AC, air cooler, exhaust fan" },
  { icon: "/icons/icon-water.svg",         title: "Water & heating",    desc: "Water pump, geyser, room heater" },
  { icon: "/icons/icon-entertainment.svg", title: "Entertainment",      desc: "TV, set-top box, speaker" },
  { icon: "/icons/icon-power.svg",         title: "Power & appliances", desc: "Smart plugs, fridge, washing machine, IPS" },
  { icon: "/icons/icon-security.svg",      title: "Security",           desc: "Door lock, camera, gas & motion sensors", comingSoon: true },
];

export default function WhatYouCanControl() {
  return (
    <section id="features" style={{ width: "100%", display: "block", background: "var(--bg-default)" }}
      aria-labelledby="control-heading">
      <div className="container-inner flex flex-col items-center gap-14 section-py">

        {/* Section head — Figma: max-w-760 centered, gap-16 */}
        <div className="flex flex-col items-center text-center w-full max-w-[760px]" style={{ gap: 16 }}>
          <p className="uppercase" style={{ fontSize: 12, fontWeight: 600, lineHeight: "16px", letterSpacing: "0.96px", color: "var(--text-secondary)" }}>
            What you can control
          </p>
          <h2 id="control-heading" style={{ fontSize: 44, fontWeight: 600, lineHeight: "52px", letterSpacing: "-1px", color: "var(--text-primary)" }}>
            One app for every room
          </h2>
          <p style={{ fontSize: 18, lineHeight: "28px", color: "var(--text-secondary)" }}>
            Autoral Home brings every switch in your home into one place, grouped by room the way your family lives.
          </p>
        </div>

        {/* Grid — Figma: 2 rows × 3 cols, gap-24 between cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <div key={cat.title} className="flex flex-col" style={{ gap: 20, padding: 28, borderRadius: 24, background: "var(--bg-subtle)" }}>
              {/* top: icon + optional tag */}
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center" style={{ width: 56, height: 56, borderRadius: 16, background: "var(--tile-off)" }}>
                  <Image src={cat.icon} alt="" width={28} height={28} />
                </div>
                {cat.comingSoon && (
                  <span className="border rounded-full" style={{ fontSize: 14, lineHeight: "20px", padding: "5px 10px", borderColor: "var(--border-default)", color: "var(--text-secondary)" }}>
                    Coming soon
                  </span>
                )}
              </div>
              {/* text */}
              <div className="flex flex-col" style={{ gap: 6 }}>
                <h3 style={{ fontSize: 24, fontWeight: 600, lineHeight: "32px", letterSpacing: "-0.2px", color: "var(--text-primary)" }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-secondary)" }}>
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)", textAlign: "center" }}>
          AC, TV and security devices connect through matching Autoral modules.
        </p>
      </div>
    </section>
  );
}
