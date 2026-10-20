import Image from "next/image";

// Figma: bg-default, px-120 py-112, section-head max-w-760 (no body text, only h2)
// Step cards: p-32 rounded-[24px] bg-subtle gap-20
// Step number: 64px/600/72px tracking-[-1.5px] color #dadada (border-default)
// Icon badge: 56×56 rounded-[16px] icon 28×28
// H3: 24px/600/32px/tracking-[-0.2px]. Body: 16px/400/26px. Text gap: 8px
const steps = [
  { num: "01", icon: "/icons/icon-install.svg",  title: "Install the hub",      desc: "A trained Autoral installer fits the hub behind your switchboard in about 30 minutes." },
  { num: "02", icon: "/icons/icon-connect.svg",  title: "Connect in the app",   desc: "Open the app, find the hub, join your home Wi-Fi and name each room and device." },
  { num: "03", icon: "/icons/icon-one-tap.svg",  title: "Control anywhere",     desc: "Tap to switch at home. Sign in to control your home from the office or on holiday." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ width: "100%", display: "block", background: "var(--bg-default)" }}
      aria-labelledby="how-heading">
      <div className="container-inner flex flex-col items-center gap-14 section-py">

        {/* Section head */}
        <div className="flex flex-col items-center text-center w-full max-w-[760px]" style={{ gap: 16 }}>
          <p className="uppercase" style={{ fontSize: 12, fontWeight: 600, lineHeight: "16px", letterSpacing: "0.96px", color: "var(--text-secondary)" }}>
            How it works
          </p>
          <h2 id="how-heading" style={{ fontSize: 44, fontWeight: 600, lineHeight: "52px", letterSpacing: "-1px", color: "var(--text-primary)" }}>
            From switchboard to smartphone in three steps
          </h2>
        </div>

        {/* Steps grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map(step => (
            <div key={step.num} className="flex flex-col" style={{ gap: 20, padding: 32, borderRadius: 24, background: "var(--bg-subtle)" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center" style={{ width: 56, height: 56, borderRadius: 16, background: "var(--tile-off)" }}>
                  <Image src={step.icon} alt="" width={28} height={28} />
                </div>
                <span style={{ fontSize: 64, fontWeight: 600, lineHeight: "72px", letterSpacing: "-1.5px", color: "var(--border-default)" }}>
                  {step.num}
                </span>
              </div>
              <div className="flex flex-col" style={{ gap: 8 }}>
                <h3 style={{ fontSize: 24, fontWeight: 600, lineHeight: "32px", letterSpacing: "-0.2px", color: "var(--text-primary)" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--text-secondary)" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
