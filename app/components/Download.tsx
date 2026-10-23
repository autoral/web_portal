import Image from "next/image";

function StoreBadge({ store }: { store: "Google Play" | "App Store" }) {
  const isGoogle = store === "Google Play";
  return (
    <a
      href={isGoogle ? "https://play.google.com" : "https://apps.apple.com"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-[14px] shrink-0 transition-opacity hover:opacity-90"
      style={{
        background: "#000000",
        gap: 10,
        padding: "10px 16px 10px 14px",
        height: 62,
        width: isGoogle ? 168 : 161,
      }}
      aria-label={`Download on ${store}`}
    >
      <Image
        src={isGoogle ? "/icons/icon-googleplay.svg" : "/icons/icon-apple.svg"}
        alt={store}
        width={24}
        height={24}
      />
      <div className="flex flex-col overflow-hidden whitespace-nowrap text-left text-white">
        <span style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0px", lineHeight: "14px" }}>
          {isGoogle ? "GET IT ON" : "Download on the"}
        </span>
        <span style={{ fontSize: 18, fontWeight: 600, lineHeight: "24px" }}>{store}</span>
      </div>
    </a>
  );
}

export default function Download() {
  return (
    <section id="download" className="w-full" aria-labelledby="download-heading">
      <div className="container-inner section-py">
        {/* Main Blue Download Banner (Figma 4239:1198: 1200x564 in #0066db, radius 40px, overflow-hidden) */}
        <div
          className="relative w-full rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-center"
          style={{
            background: "var(--primary)",
            minHeight: 564,
          }}
        >
          {/* Left Copy Stack (Figma 4239:1199: 648x564, pad top/bottom 72px, pad left 72px) */}
          <div
            className="flex flex-col w-full lg:max-w-[648px] text-white z-10 px-8 py-10 lg:pl-[72px] lg:pr-0 lg:py-[72px]"
            style={{ gap: 24 }}
          >
            <p
              className="uppercase tracking-widest font-semibold"
              style={{ fontSize: 12, lineHeight: "16px", color: "rgba(255,255,255,0.85)" }}
            >
              DOWNLOAD
            </p>
            <h2
              id="download-heading"
              className="text-3xl sm:text-4xl lg:text-[44px]"
              style={{
                fontWeight: 600,
                lineHeight: "52px",
                letterSpacing: "-1px",
              }}
            >
              Get the Autoral Home app
            </h2>
            <p style={{ fontSize: 18, lineHeight: "28px", color: "rgba(255,255,255,0.9)" }}>
              Free on Android and iPhone. Setup takes about 5 minutes.
            </p>

            {/* Store Badges (Figma 4239:1203) */}
            <div className="flex flex-wrap items-center gap-3">
              <StoreBadge store="Google Play" />
              <StoreBadge store="App Store" />
            </div>

            {/* QR Card (Figma 4239:1216) */}
            <div
              className="flex items-center rounded-[24px] border border-white/90"
              style={{
                background: "rgba(255, 255, 255, 0.28)",
                backdropFilter: "blur(16px)",
                padding: "12px 24px 12px 12px",
                gap: 20,
                maxWidth: 420,
              }}
            >
              <div className="flex items-center justify-center shrink-0 w-24 h-24 rounded-[16px] bg-white p-2 shadow-sm">
                <Image src="/icons/icon-qrcode.svg" alt="Scan QR code" width={76} height={76} />
              </div>
              <div className="flex flex-col gap-1 text-white">
                <span style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px" }}>
                  Scan to download
                </span>
                <span style={{ fontSize: 14, lineHeight: "20px", color: "rgba(255,255,255,0.9)" }}>
                  Opens the right store for your phone
                </span>
              </div>
            </div>

            {/* Requirements (Figma 4239:1223) */}
            <p style={{ fontSize: 14, lineHeight: "20px", color: "rgba(255,255,255,0.85)" }}>
              Android 8 or later · iOS 15 or later
            </p>
          </div>

          {/* Right Phone Visual (Figma 4239:1224: 440px wide at right: 0, 54px space on right, bottom clipped) */}
          <div
            className="hidden lg:block absolute pointer-events-none select-none z-10"
            style={{
              right: 0,
              top: 0,
              width: 440,
            }}
          >
            <Image
              src="/images/download-visual.png"
              alt="Autoral Home App Splash Screen on iPhone"
              width={440}
              height={733}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
