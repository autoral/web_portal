import Image from "next/image";

// Figma: bg-default outer, inner card bg-subtle rounded-[40px] overflow-hidden
// Card: pt-72 px-72, copy pb-72. Phone visual: 420×470 cropped by overflow-hidden
// Overline 12/600/16. H2: 44/600/52/tracking-[-1px]. Body: 18/400/28
// Store badges: gap-12. QR card: p-12 rounded-[20px] border, QR container: p-13 rounded-[12px] border 96×96, QR icon: 80×80
// Scan text: 15/500/22. Scan desc: 14/400/20. Footer note: 14/400/20

function StoreBadge({ store }: { store: "Google Play" | "App Store" }) {
  const isGoogle = store === "Google Play";
  return (
    <a href={isGoogle ? "https://play.google.com" : "https://apps.apple.com"}
      target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center rounded-[14px] shrink-0 transition-opacity hover:opacity-80"
      style={{ background: "var(--surface-inverse)", gap: 12, padding: "10px 20px" }}
      aria-label={`Download on ${store}`}>
      <Image src={isGoogle ? "/icons/icon-googleplay.svg" : "/icons/icon-apple.svg"} alt={store} width={28} height={28} />
      <div className="flex flex-col overflow-hidden whitespace-nowrap" style={{ color: "var(--text-on-inverse)" }}>
        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.4px", lineHeight: "normal" }}>
          {isGoogle ? "GET IT ON" : "Download on the"}
        </span>
        <span style={{ fontSize: 19, fontWeight: 600, lineHeight: "22px" }}>{store}</span>
      </div>
    </a>
  );
}

function DownloadPhone() {
  // Figma phone: 300×642, rendered proportionally within 420×470 (cropped at bottom by overflow-hidden)
  return (
    <div className="relative shrink-0 overflow-hidden"
      style={{ width: 300, height: 642, borderRadius: 46, background: "var(--surface-inverse)", boxShadow: "0 8px 24px rgba(0,0,0,0.14)" }}>
      <div className="absolute overflow-hidden flex flex-col" style={{ inset: 10, borderRadius: 36, background: "var(--bg-default)" }}>
        {/* status bar */}
        <div className="flex items-center justify-between shrink-0" style={{ height: 25, paddingInline: 16 }}>
          <span style={{ fontSize: 11, fontWeight: 500, color: "var(--text-primary)" }}>9:41</span>
        </div>
        {/* language screen content */}
        <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: "28px 12px 0", gap: 20 }}>
          <div className="flex flex-col" style={{ gap: 6 }}>
            <div className="flex items-center justify-center" style={{ width: 25, height: 25, borderRadius: 6, background: "var(--tile-off)" }}>
              <span style={{ fontSize: 14 }}>🌐</span>
            </div>
            <p style={{ fontSize: 17, fontWeight: 600, lineHeight: "22px", color: "var(--text-primary)", marginTop: 4 }}>
              Choose your language
            </p>
            <p style={{ fontFamily: "'Hind Siliguri', sans-serif", fontSize: 12, color: "var(--text-secondary)" }}>
              ভাষা বেছে নিন
            </p>
          </div>
          <div className="flex flex-col" style={{ gap: 9 }}>
            {/* English — selected */}
            <div className="flex items-center justify-between border-2 rounded-[16px]"
              style={{ padding: 12, borderColor: "var(--text-primary)" }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 500, color: "var(--text-primary)" }}>English</p>
                <p style={{ fontSize: 9, color: "var(--text-secondary)" }}>English</p>
              </div>
              <div className="flex items-center justify-center" style={{ width: 19, height: 19, borderRadius: "50%", background: "var(--text-primary)" }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "white" }} />
              </div>
            </div>
            {/* Bangla */}
            <div className="flex items-center justify-between border rounded-[16px]"
              style={{ padding: 12, borderColor: "var(--border-default)" }}>
              <div>
                <p style={{ fontFamily: "'Hind Siliguri', sans-serif", fontSize: 10, fontWeight: 500, color: "var(--text-primary)" }}>বাংলা</p>
                <p style={{ fontSize: 9, color: "var(--text-secondary)" }}>Bangla</p>
              </div>
              <div className="border rounded-full" style={{ width: 19, height: 19, borderColor: "var(--border-default)" }} />
            </div>
          </div>
          <p style={{ fontSize: 9, color: "var(--text-secondary)" }}>You can change this later in Settings.</p>
        </div>
        {/* footer: continue button + indicator */}
        <div className="flex flex-col items-center shrink-0" style={{ padding: "9px 12px 12px", gap: 6 }}>
          <div className="flex items-center justify-center w-full"
            style={{ height: 37, borderRadius: 24, background: "var(--surface-inverse)" }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: "white" }}>Continue</span>
          </div>
          <div style={{ width: 93, height: 3, borderRadius: 2, background: "var(--text-primary)" }} />
        </div>
      </div>
    </div>
  );
}

export default function Download() {
  return (
    <section id="download" style={{ width: "100%", display: "block", background: "var(--bg-default)" }}
      aria-labelledby="download-heading">
      <div className="container-inner" style={{ paddingBottom: 64 }}>
        {/* inner card — overflow-hidden so phone gets cropped at bottom like Figma */}
        <div className="flex flex-col lg:flex-row items-end overflow-hidden"
          style={{ borderRadius: 40, background: "var(--bg-subtle)", paddingTop: 72, paddingLeft: 72, paddingRight: 0 }}>

          {/* Copy */}
          <div className="flex flex-col flex-1 pb-[72px] pr-[48px]" style={{ gap: 24 }}>
            <p className="uppercase" style={{ fontSize: 12, fontWeight: 600, lineHeight: "16px", letterSpacing: "0.96px", color: "var(--text-secondary)" }}>
              Download
            </p>
            <h2 id="download-heading" style={{ fontSize: 44, fontWeight: 600, lineHeight: "52px", letterSpacing: "-1px", color: "var(--text-primary)" }}>
              Get the Autoral Home app
            </h2>
            <p style={{ fontSize: 18, lineHeight: "28px", color: "var(--text-secondary)" }}>
              Free on Android and iPhone. Setup takes about 5 minutes.
            </p>
            <div className="flex flex-wrap" style={{ gap: 12 }}>
              <StoreBadge store="Google Play" />
              <StoreBadge store="App Store" />
            </div>
            {/* QR card */}
            <div className="inline-flex items-center border w-fit" style={{ gap: 16, padding: 12, borderRadius: 20, background: "var(--bg-default)", borderColor: "var(--border-default)" }}>
              <div className="flex items-center justify-center shrink-0 border"
                style={{ width: 96, height: 96, borderRadius: 12, borderColor: "var(--border-default)" }}>
                <Image src="/icons/icon-qrcode.svg" alt="QR code" width={80} height={80} />
              </div>
              <div className="flex flex-col" style={{ gap: 4 }}>
                <p style={{ fontSize: 15, fontWeight: 500, lineHeight: "22px", color: "var(--text-primary)" }}>Scan to download</p>
                <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)" }}>Opens the right store for your phone</p>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-secondary)" }}>
              Android 8 or later · iOS 15 or later
            </p>
          </div>

          {/* Phone — cropped at bottom by overflow-hidden on parent */}
          <div className="shrink-0 self-end hidden lg:block" style={{ marginRight: 60 }}>
            <DownloadPhone />
          </div>
        </div>
      </div>
    </section>
  );
}
