import Image from "next/image";

// Figma: px-120 py-36, gap-24 between items, icon 44×44 rounded-[22px], icon inside 22×22
// title: 15px/Medium/22px  desc: 14px/Regular/20px  gap between title+desc: 2px
const items = [
  { icon: "/icons/icon-wifi-trust.svg", title: "Works without internet", desc: "Control at home on Wi-Fi" },
  { icon: "/icons/icon-switch.svg",     title: "Wall switches still work", desc: "No need to change habits" },
  { icon: "/icons/icon-bolt.svg",       title: "Ready for load-shedding",  desc: "Restores the last state" },
  { icon: "/icons/icon-handyman.svg",   title: "Local installation",        desc: "Trained Autoral installers" },
];

export default function TrustStrip() {
  return (
    <section className="border-b" style={{ width: "100%", display: "block", background: "var(--bg-default)", borderColor: "var(--border-default)" }}
      aria-label="Trust indicators">
      <div className="container-inner" style={{ paddingTop: 36, paddingBottom: 36 }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[24px]">
          {items.map(item => (
            <div key={item.title} className="flex items-center" style={{ gap: 14 }}>
              {/* icon container: Figma 44×44 rounded-[22px] */}
              <div className="flex items-center justify-center shrink-0"
                style={{ width: 44, height: 44, borderRadius: 22, background: "var(--tile-off)" }}>
                <Image src={item.icon} alt="" width={22} height={22} />
              </div>
              <div className="flex flex-col" style={{ gap: 2 }}>
                <p style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-primary)" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
