import React from "react";
import {
  IconGooglePlay,
  IconApple,
  IconQrCode,
  IconHomeFill,
  IconWifi,
} from "./Icons";

export default function Download() {
  return (
    <section id="download" className="py-20 lg:py-28 bg-[#f5f8fc]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Main Blue Banner Container */}
        <div className="bg-[#0066db] rounded-[36px] overflow-hidden text-white shadow-[0px_24px_60px_rgba(0,102,219,0.25)] relative">
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 gap-12 lg:gap-8 relative z-10">
            {/* Left Content */}
            <div className="w-full lg:w-[600px] flex flex-col items-start gap-6">
              <span className="text-[12px] font-bold text-white/80 tracking-[1px] uppercase">
                DOWNLOAD
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-[-1px] leading-[1.15]">
                Get the Autoral Home app
              </h2>
              <p className="text-lg text-white/85 leading-[28px]">
                Free on Android and iPhone. Setup takes about 5 minutes.
              </p>

              {/* Store Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#download"
                  className="bg-black hover:bg-neutral-900 active:scale-95 transition-all text-white rounded-[14px] px-4 py-2.5 flex items-center gap-3 shadow-md"
                >
                  <IconGooglePlay className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wide text-neutral-300 leading-none">
                      GET IT ON
                    </div>
                    <div className="text-[16px] font-semibold text-white leading-tight">
                      Google Play
                    </div>
                  </div>
                </a>

                <a
                  href="#download"
                  className="bg-black hover:bg-neutral-900 active:scale-95 transition-all text-white rounded-[14px] px-4 py-2.5 flex items-center gap-3 shadow-md"
                >
                  <IconApple className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <div className="text-[10px] tracking-wide text-neutral-300 leading-none">
                      Download on the
                    </div>
                    <div className="text-[16px] font-semibold text-white leading-tight">
                      App Store
                    </div>
                  </div>
                </a>
              </div>

              {/* QR Code Container */}
              <div className="mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-[22px] p-3.5 pr-6 flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-[16px] p-2 flex items-center justify-center text-black shadow-sm shrink-0">
                  <IconQrCode className="w-full h-full text-[#0e1726]" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-white">
                    Scan to download
                  </div>
                  <div className="text-[13px] text-white/80 mt-0.5">
                    Opens the right store for your phone
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="text-[13px] text-white/70 pt-1">
                Android 8 or later · iOS 15 or later
              </div>
            </div>

            {/* Right iPhone Mockup with Splash Screen */}
            <div className="w-full max-w-[340px] lg:w-[440px] flex items-center justify-center relative">
              {/* Soft Ambient Halo */}
              <div className="absolute w-[360px] h-[360px] rounded-full bg-white/15 blur-2xl pointer-events-none" />

              {/* iPhone Frame */}
              <div className="relative z-10 w-[270px] sm:w-[285px] h-[540px] sm:h-[570px] bg-black rounded-[46px] p-2.5 shadow-[0px_20px_50px_rgba(0,0,0,0.4)] border-[3px] border-neutral-700 ring-1 ring-white/20">
                <div className="w-full h-full bg-white rounded-[38px] overflow-hidden flex flex-col items-center justify-center relative p-6 text-center">
                  {/* Status Bar */}
                  <div className="absolute top-2.5 px-6 w-full flex items-center justify-between text-[11px] font-semibold text-neutral-800">
                    <span>9:41</span>
                    <div className="w-20 h-4 bg-black rounded-full" />
                    <div className="flex items-center gap-1">
                      <IconWifi className="w-3 h-3 text-neutral-800" />
                      <div className="w-4 h-2 rounded-xs border border-neutral-800 flex items-center p-0.5">
                        <div className="w-full h-full bg-neutral-800 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* Splash Logo Lockup */}
                  <div className="w-16 h-16 rounded-[22px] bg-[#0066db] flex items-center justify-center text-white shadow-lg shadow-blue-500/30 mb-4">
                    <IconHomeFill className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-[22px] font-bold text-[#0e1726] tracking-tight">
                    Autoral Home
                  </h3>
                  <p className="text-[14px] text-[#4a5a70] font-bengali font-medium mt-1">
                    অটোরাল হোম অটোমেশন
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
