import Image from "next/image";

const checkItems = [
  "Your wall switches keep working as normal",
  "Wi-Fi 2.4 GHz with easy Bluetooth setup",
  "Remembers every state after a power cut",
  "Local control first, encrypted remote access",
  "Add more devices any time as your home grows",
];

export default function MollaHub() {
  return (
    <section id="device" className="w-full" aria-labelledby="device-heading">
      <div className="container-inner flex flex-col lg:flex-row items-center section-py gap-12 lg:gap-20">
        {/* Device Illustration Image (Figma 4239:1048: 500x414 high-res render) */}
        <div className="relative shrink-0 flex items-center justify-center w-full lg:w-[500px]">
          <Image
            src="/images/device-illustration.png"
            alt="Autoral Device MH-8"
            width={500}
            height={414}
            className="w-full h-auto object-contain rounded-[32px]"
          />
        </div>

        {/* Copy Column (Figma 4239:1106: 620x768) */}
        <div className="flex flex-col flex-1 max-w-[620px] w-full" style={{ gap: 32 }}>
          {/* Section Head (Figma 4239:1107: gap-4) */}
          <div className="flex flex-col gap-4">
            <p
              className="uppercase font-semibold tracking-[0.08em]"
              style={{ fontSize: 12, lineHeight: "16px", color: "var(--primary)" }}
            >
              AUTORAL DEVICE
            </p>
            <h2
              id="device-heading"
              className="text-3xl sm:text-4xl lg:text-[44px]"
              style={{
                fontWeight: 600,
                lineHeight: "52px",
                letterSpacing: "-1px",
                color: "var(--text-primary)",
              }}
            >
              The small box that makes your home smart
            </h2>
            <p style={{ fontSize: 18, lineHeight: "28px", color: "var(--text-secondary)" }}>
              The Autoral device sits behind the switchboard you already have. Your electrician connects it in about 30 minutes, with no new wiring in the walls.
            </p>
          </div>

          {/* Checklist (Figma 4239:1111: gap-3.5 / 14px) */}
          <div className="flex flex-col gap-[14px]">
            {checkItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--status-green)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span
                  style={{
                    fontSize: 18,
                    lineHeight: "28px",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Model Cards (Figma 4239:1132: 620x140, gap-4 / 16px) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* MH-4 (Figma 4239:1133: 301x140, pad 20, rounded 20, 1px border #D8E1EC, bg-white) */}
            <div
              className="flex flex-col rounded-[20px] border h-[140px] bg-white"
              style={{
                borderColor: "var(--border-default)",
                padding: 20,
                gap: 4,
              }}
            >
              <div className="flex items-center justify-between" style={{ height: 26 }}>
                <span
                  style={{
                    fontSize: 18,
                    lineHeight: "26px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  Autoral MH-4
                </span>
              </div>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "22px",
                  fontWeight: 500,
                  color: "var(--primary)",
                }}
              >
                4 channels
              </span>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                }}
              >
                For a bedroom or a small flat
              </p>
            </div>

            {/* MH-8 (Figma 4239:1140: 303x140, pad 20, rounded 20, 2px border #0066DB, bg-#EAF3FF) */}
            <div
              className="flex flex-col rounded-[20px] border-2 h-[140px]"
              style={{
                background: "var(--primary-subtle)",
                borderColor: "var(--primary)",
                padding: 20,
                gap: 4,
              }}
            >
              <div className="flex items-center justify-between" style={{ height: 26 }}>
                <span
                  style={{
                    fontSize: 18,
                    lineHeight: "26px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  Autoral MH-8
                </span>
                <span
                  className="inline-flex items-center justify-center rounded-full text-white"
                  style={{
                    height: 24,
                    paddingLeft: 10,
                    paddingRight: 10,
                    background: "var(--primary)",
                    fontSize: 12,
                    lineHeight: "16px",
                    fontWeight: 500,
                  }}
                >
                  Popular
                </span>
              </div>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "22px",
                  fontWeight: 500,
                  color: "var(--primary)",
                }}
              >
                8 channels
              </span>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                }}
              >
                For living rooms and busy switchboards
              </p>
            </div>
          </div>

          {/* CTAs (Figma 4239:1147: h-48, gap-3 / 12px) */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                height: 48,
                paddingLeft: 24,
                paddingRight: 24,
                background: "var(--primary)",
                fontSize: 16,
                lineHeight: "24px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Ask for a price</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full font-semibold border transition-all hover:bg-white/80"
              style={{
                height: 48,
                paddingLeft: 24,
                paddingRight: 24,
                background: "rgba(255, 255, 255, 0.72)",
                borderColor: "var(--border-default)",
                color: "var(--primary)",
                fontSize: 16,
                lineHeight: "24px",
                backdropFilter: "blur(24px)",
                boxShadow: "0 8px 32px rgba(10, 42, 92, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <span>Book installation</span>
            </a>
          </div>

          {/* Disclaimer (Figma 4239:1160: 14/20px, #5E6E84) */}
          <p style={{ fontSize: 14, lineHeight: "20px", color: "var(--text-muted)" }}>
            Specifications are indicative and may change before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
