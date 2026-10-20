import Image from "next/image";

function StoreBadge({ store }: { store: "Google Play" | "App Store" }) {
  const isGoogle = store === "Google Play";
  return (
    <a
      href="#download"
      className="inline-flex items-center rounded-[14px] shrink-0 transition-opacity hover:opacity-80"
      style={{ background: "var(--surface-inverse)", gap: 12, padding: "10px 20px" }}
      aria-label={`Download on ${store}`}
    >
      <Image
        src={isGoogle ? "/icons/icon-googleplay.svg" : "/icons/icon-apple.svg"}
        alt={store}
        width={28}
        height={28}
      />
      <div className="flex flex-col overflow-hidden whitespace-nowrap" style={{ color: "var(--text-on-inverse)" }}>
        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.4px", lineHeight: "normal" }}>
          {isGoogle ? "GET IT ON" : "Download on the"}
        </span>
        <span style={{ fontSize: 19, fontWeight: 600, lineHeight: "22px" }}>{store}</span>
      </div>
    </a>
  );
}

function PhoneMockup() {
  // Figma phone is 300×642. We render at 260×556 (scale ≈ 0.867).
  const S = 260 / 300;
  const s = (n: number) => Math.round(n * S);

  const tiles = [
    { name: "Ceiling Light", state: "On",  on: true  },
    { name: "Wall Light",    state: "Off", on: false },
    { name: "Ceiling Fan",   state: "On",  on: true  },
    { name: "TV Light",      state: "Off", on: false },
  ];

  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{
        width: s(300), height: s(642),
        borderRadius: s(46),
        background: "var(--surface-inverse)",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.14)",
      }}
    >
      {/* screen inset */}
      <div
        className="absolute overflow-hidden flex flex-col"
        style={{
          inset: s(10), borderRadius: s(36),
          background: "var(--bg-default)",
        }}
      >
        {/* status bar */}
        <div className="flex items-center justify-between shrink-0"
          style={{ height: s(25), paddingInline: s(16), background: "var(--bg-default)" }}>
          <span style={{ fontSize: s(11), fontWeight: 500, color: "var(--text-primary)" }}>9:41</span>
          <div className="flex items-center" style={{ gap: s(3) }}>
            {[0,1,2].map(i => <div key={i} style={{ width: s(12), height: s(12), background: "var(--text-primary)", borderRadius: 2 }} />)}
          </div>
        </div>

        {/* home header */}
        <div className="flex items-center shrink-0"
          style={{ paddingLeft: s(12), paddingRight: s(6), paddingBlock: s(6), gap: s(3) }}>
          <div className="flex-1 flex flex-col" style={{ gap: s(5) }}>
            <span style={{ fontSize: s(17), fontWeight: 600, lineHeight: 1.2, color: "var(--text-primary)" }}>
              Good evening, Nusrat
            </span>
            <div className="inline-flex items-center w-fit"
              style={{ background: "var(--tile-off)", borderRadius: s(14), padding: `${s(3)}px ${s(8)}px`, gap: s(5) }}>
              <div style={{ width: s(12), height: s(12), borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ fontSize: s(9), color: "var(--text-primary)" }}>On home Wi-Fi</span>
            </div>
          </div>
          {[0,1].map(i => (
            <div key={i} className="flex items-center justify-center"
              style={{ width: s(37), height: s(37), borderRadius: s(24) }}>
              <div style={{ width: s(19), height: s(19), background: "var(--tile-off)", borderRadius: 4 }} />
            </div>
          ))}
        </div>

        {/* room chips */}
        <div className="flex items-center shrink-0 overflow-hidden"
          style={{ paddingInline: s(12), paddingBottom: s(15), gap: s(6) }}>
          {["All","Living room","Bedroom","Kitchen"].map((r, i) => (
            <div key={r} className="shrink-0 flex items-center whitespace-nowrap"
              style={{
                height: s(28), paddingInline: s(12), borderRadius: s(18),
                fontSize: s(11), fontWeight: 500,
                background: i === 0 ? "var(--tile-on)" : "transparent",
                color: i === 0 ? "var(--tile-on-content)" : "var(--text-primary)",
                border: i === 0 ? "none" : `0.8px solid var(--border-default)`,
              }}>
              {r}
            </div>
          ))}
        </div>

        {/* room content */}
        <div className="flex-1 overflow-hidden" style={{ paddingInline: s(12) }}>
          <div className="flex items-center justify-between" style={{ marginBottom: s(8) }}>
            <span style={{ fontSize: s(11), fontWeight: 600, color: "var(--text-primary)" }}>Living room</span>
            <div className="flex items-center" style={{ gap: s(5) }}>
              <span style={{ fontSize: s(9), padding: `${s(2)}px ${s(6)}px`, borderRadius: s(11), background: "var(--tile-off)", color: "var(--text-secondary)" }}>
                2 on
              </span>
              <span style={{ fontSize: s(11), fontWeight: 500, color: "var(--text-primary)" }}>Turn all off</span>
            </div>
          </div>
          <div className="grid grid-cols-2" style={{ gap: s(9) }}>
            {tiles.map(tile => (
              <div key={tile.name} className="flex flex-col justify-between"
                style={{ height: s(87), padding: s(11), borderRadius: s(16), background: tile.on ? "var(--tile-on)" : "var(--tile-off)" }}>
                <div style={{ width: s(22), height: s(22), borderRadius: 4, background: tile.on ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)" }} />
                <div className="flex flex-col" style={{ gap: s(2) }}>
                  <span style={{ fontSize: s(12), fontWeight: 500, lineHeight: 1.4, color: tile.on ? "var(--tile-on-content)" : "var(--text-primary)" }}>
                    {tile.name}
                  </span>
                  <span style={{ fontSize: s(9), color: tile.on ? "rgba(255,255,255,0.6)" : "var(--text-secondary)" }}>
                    {tile.state}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom nav */}
        <div className="flex shrink-0 border-t"
          style={{ height: s(62), borderColor: "var(--border-default)", background: "var(--bg-default)" }}>
          {["Home","Devices","Settings"].map((tab, i) => (
            <div key={tab} className="flex-1 flex flex-col items-center justify-center" style={{ gap: s(3) }}>
              <div className="flex items-center justify-center"
                style={{ width: s(50), height: s(25), borderRadius: s(16), background: i === 0 ? "var(--tile-off)" : "transparent" }}>
                <div style={{ width: s(19), height: s(19), borderRadius: 4, background: i === 0 ? "var(--text-primary)" : "var(--text-disabled)" }} />
              </div>
              <span style={{ fontSize: s(11), fontWeight: 500, color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)" }}>
                {tab}
              </span>
            </div>
          ))}
        </div>

        {/* home indicator */}
        <div className="flex items-center justify-center shrink-0"
          style={{ height: s(19), background: "var(--bg-default)" }}>
          <div style={{ width: s(93), height: s(3), borderRadius: 2, background: "var(--text-primary)" }} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section aria-label="Hero" style={{ width: "100%", display: "block", background: "var(--bg-subtle)" }}>
      <div className="container-inner section-py flex flex-col lg:flex-row items-center gap-10 lg:gap-[64px]">

        {/* ── Copy ── */}
        <div className="flex flex-col w-full lg:w-[600px] shrink-0 gap-5 lg:gap-[28px]">

          {/* Eyebrow */}
          <div className="inline-flex items-center self-start border rounded-full"
            style={{ gap: 8, padding: "8px 14px", background: "var(--bg-default)", borderColor: "var(--border-default)" }}>
            <Image src="/icons/icon-family-home.svg" alt="" width={18} height={18} />
            <span className="uppercase whitespace-nowrap"
              style={{ fontSize: 12, fontWeight: 600, lineHeight: "16px", letterSpacing: "0.96px", color: "var(--text-primary)" }}>
              Smart home for Bangladesh
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[40px] leading-[48px] lg:text-[64px] lg:leading-[72px]"
            style={{ fontWeight: 600, letterSpacing: "-1.5px", color: "var(--text-primary)" }}>
            Your whole home,<br />one tap away.
          </h1>

          {/* Body */}
          <p style={{ fontSize: 18, lineHeight: "28px", color: "var(--text-secondary)" }}>
            Control lights, fans, AC, TV, water pump and more from one app. It works on your home Wi-Fi, even when the internet is down.
          </p>

          {/* Store badges */}
          <div className="flex flex-wrap" style={{ gap: 12 }}>
            <StoreBadge store="Google Play" />
            <StoreBadge store="App Store" />
          </div>

          {/* Ghost CTA + note */}
          <div className="flex flex-wrap items-center" style={{ gap: 24 }}>
            <a href="#how-it-works"
              className="inline-flex items-center rounded-full border transition-opacity hover:opacity-70 whitespace-nowrap"
              style={{ padding: "11px 20px", fontSize: 15, fontWeight: 500, lineHeight: "22px", borderColor: "var(--border-default)", color: "var(--text-primary)" }}>
              See how it works
            </a>
            <div className="inline-flex items-center" style={{ gap: 8 }}>
              <Image src="/icons/icon-check-circle.svg" alt="" width={18} height={18} />
              <span style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)" }}>
                Free app · English &amp; <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>বাংলা</span>
              </span>
            </div>
          </div>
        </div>

        {/* ── Visual — hidden on small screens ── */}
        {/* Figma: container 536×680. Phone: left-150 top-10 w-300 h-642. Hub card: left-0 top-430. Status: left-360 top-120 */}
        <div className="relative hidden lg:block shrink-0" style={{ width: 536, height: 680 }}>
          {/* backdrop */}
          <div className="absolute rounded-full" style={{ left: 40, top: 100, width: 480, height: 480, background: "radial-gradient(circle, #e3e3e3 0%, #ebebeb 45%, transparent 72%)" }} />

          {/* phone */}
          <div className="absolute" style={{ left: 150, top: 10 }}>
            <PhoneMockup />
          </div>

          {/* Hub card */}
          <div className="absolute flex flex-col"
            style={{ left: 0, top: 430, width: 236, padding: 18, borderRadius: 20, background: "var(--bg-default)", boxShadow: "0px 4px 12px rgba(0,0,0,0.10)", gap: 12 }}>
            <div className="flex flex-col" style={{ background: "var(--tile-off)", borderRadius: 14, padding: 14, gap: 10 }}>
              <div className="flex items-center justify-between">
                <Image src="/icons/icon-router.svg" alt="" width={22} height={22} />
                <span style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)" }}>MH-8</span>
              </div>
              <div className="flex" style={{ gap: 5 }}>
                {Array(8).fill(0).map((_, i) => (
                  <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: i < 6 ? "var(--text-primary)" : "var(--border-default)" }} />
                ))}
              </div>
            </div>
            <p style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px", color: "var(--text-primary)" }}>Autoral Hub</p>
            <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)" }}>6 of 8 channels in use · Online</p>
          </div>

          {/* Status card */}
          <div className="absolute inline-flex items-center"
            style={{ left: 360, top: 120, padding: "12px 16px", borderRadius: 16, background: "var(--bg-default)", boxShadow: "0px 4px 12px rgba(0,0,0,0.10)", gap: 10 }}>
            <Image src="/icons/icon-wifi.svg" alt="" width={20} height={20} />
            <span className="whitespace-nowrap" style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-primary)" }}>
              Works on home Wi-Fi
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
