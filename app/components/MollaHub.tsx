import Image from "next/image";

// Figma: bg-surface-inverse (#1a1a1a), px-120 py-112, gap-80 between illustration and copy
// Illustration container: 500×(auto) rounded-[32px] bg-gray-800 (#2e2e2e)
// Device card inside: p-28 rounded-[28px] bg-gray-700 (#4a4a4a) shadow Elevation/3
// Checklist icon: 22×22. Checklist text: 16px/400/26px gray-100
// Model cards: border gray-700 p-20 rounded-[20px]. Title 18/600, channels 15/500, desc 14/400
// CTAs: px-28 py-16 rounded-[999px]. Primary: bg-white. Secondary: border-[1.5px] border-gray-500
// Overline: 12/600/16/tracking-[0.96px] gray-400. H2: 44/600/52/tracking-[-1px] white
// Body: 18/400/28 gray-300. Spec note: 14/400 gray-500
const checkItems = [
  "Your wall switches keep working as normal",
  "Wi-Fi 2.4 GHz with easy Bluetooth setup",
  "Remembers every state after a power cut",
  "Local control first, encrypted remote access",
  "Add more hubs any time as your home grows",
];

const models = [
  { name: "Autoral Hub MH-4", channels: "4 channels", desc: "For a bedroom or a small flat" },
  { name: "Autoral Hub MH-8", channels: "8 channels", desc: "For living rooms and busy switchboards" },
];

function HubIllustration() {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-[500px] shrink-0"
      style={{ gap: 28, padding: 40, borderRadius: 32, background: "var(--gray-800)", minHeight: 420 }}>
      {/* device card */}
      <div className="flex flex-col w-full" style={{ gap: 22, padding: 28, borderRadius: 28, background: "var(--gray-700)", boxShadow: "0px 8px 24px rgba(0,0,0,0.14)" }}>
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 10 }}>
            <div className="flex items-center justify-center" style={{ width: 34, height: 34, borderRadius: 10, background: "white" }}>
              <Image src="/icons/icon-home-hub.svg" alt="" width={20} height={20} />
            </div>
            <span className="uppercase whitespace-nowrap"
              style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.96px", lineHeight: "16px", color: "white" }}>
              AUTORAL HUB
            </span>
          </div>
          <Image src="/icons/icon-wifi-fill.svg" alt="Wi-Fi" width={20} height={20} />
        </div>
        {/* channel LEDs */}
        <div className="flex items-start justify-between">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col items-center" style={{ gap: 6 }}>
              <Image src={i < 6 ? "/icons/led-on.svg" : "/icons/led-off.svg"} alt="" width={14} height={14} />
              <span style={{ fontSize: 10, color: "var(--gray-400)" }}>CH{i+1}</span>
            </div>
          ))}
        </div>
        {/* terminals */}
        <div className="flex" style={{ gap: 6 }}>
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="flex-1" style={{ height: 14, borderRadius: 3, background: "var(--gray-900)" }} />
          ))}
        </div>
      </div>
      <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--gray-400)", textAlign: "center" }}>
        Fits behind your existing switchboard
      </p>
    </div>
  );
}

export default function MollaHub() {
  return (
    <section id="hub" style={{ width: "100%", display: "block", background: "var(--surface-inverse)" }}
      aria-labelledby="hub-heading">
      <div className="container-inner flex flex-col lg:flex-row items-center gap-12 lg:gap-[80px] section-py">

        <HubIllustration />

        {/* Copy */}
        <div className="flex flex-col flex-1" style={{ gap: 28 }}>
          <p className="uppercase" style={{ fontSize: 12, fontWeight: 600, lineHeight: "16px", letterSpacing: "0.96px", color: "var(--gray-400)" }}>
            Autoral Hub
          </p>
          <h2 id="hub-heading" style={{ fontSize: 44, fontWeight: 600, lineHeight: "52px", letterSpacing: "-1px", color: "white" }}>
            The small box that makes your home smart
          </h2>
          <p style={{ fontSize: 18, lineHeight: "28px", color: "var(--gray-300)" }}>
            Autoral Hub sits behind the switchboard you already have. Your electrician connects it in about 30 minutes, with no new wiring in the walls.
          </p>

          {/* checklist */}
          <div className="flex flex-col" style={{ gap: 14 }}>
            {checkItems.map(item => (
              <div key={item} className="flex items-start" style={{ gap: 12 }}>
                <Image src="/icons/icon-check-circle-white.svg" alt="" width={22} height={22} className="shrink-0 mt-[2px]" />
                <span style={{ fontSize: 16, lineHeight: "26px", color: "var(--gray-100)" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* model cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
            {models.map(m => (
              <div key={m.name} className="flex flex-col border"
                style={{ gap: 6, padding: 20, borderRadius: 20, borderColor: "var(--gray-700)" }}>
                <p style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px", color: "white" }}>{m.name}</p>
                <p style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--gray-300)" }}>{m.channels}</p>
                <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--gray-400)" }}>{m.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap" style={{ gap: 12 }}>
            <a href="#contact" className="inline-flex items-center rounded-full transition-opacity hover:opacity-80"
              style={{ gap: 8, padding: "16px 28px", fontSize: 15, fontWeight: 500, lineHeight: "22px", background: "white", color: "var(--gray-900)" }}>
              Ask for a price
              <Image src="/icons/icon-arrow-forward-dark.svg" alt="" width={18} height={18} />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border-[1.5px] transition-opacity hover:opacity-70"
              style={{ gap: 8, padding: "16px 28px", fontSize: 15, fontWeight: 500, lineHeight: "22px", borderColor: "var(--gray-500)", color: "white" }}>
              Book installation
              <Image src="/icons/icon-whatsapp.svg" alt="" width={18} height={18} />
            </a>
          </div>

          <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--gray-500)" }}>
            Specifications are indicative and may change before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
