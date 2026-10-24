"use client";

import React, { useState } from "react";
import {
  IconFamilyHome,
  IconGooglePlay,
  IconApple,
  IconCheckCircle,
  IconWifi,
  IconRouter,
  IconLightbulb,
  IconHomeFill,
  IconTools,
} from "./Icons";

export default function Hero() {
  // Interactive state for the live phone preview
  const [lightOn, setLightOn] = useState(true);
  const [fanOn, setFanOn] = useState(true);
  const [wallLightOn, setWallLightOn] = useState(false);
  const [tvOn, setTvOn] = useState(false);

  const activeCount = (lightOn ? 1 : 0) + (fanOn ? 1 : 0) + (wallLightOn ? 1 : 0) + (tvOn ? 1 : 0) + 2;

  const turnAllOn = () => {
    setLightOn(true);
    setFanOn(true);
    setWallLightOn(true);
    setTvOn(true);
  };

  const turnAllOff = () => {
    setLightOn(false);
    setFanOn(false);
    setWallLightOn(false);
    setTvOn(false);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf3ff] via-[#eaf3ff]/70 via-[35%] to-[#f5f8fc]/0 pt-12 md:pt-16 lg:pt-[72px] pb-16 md:pb-20 lg:pb-[88px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Copy */}
        <div className="w-full lg:w-[600px] flex flex-col items-start gap-7">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#d8e1ec] rounded-full px-3.5 py-2 shadow-sm">
            <IconFamilyHome className="w-[18px] h-[18px] text-[#0066db]" />
            <span className="text-[12px] font-semibold text-[#0052b3] tracking-[0.96px] uppercase">
              SMART HOME FOR BANGLADESH
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-[#0e1726] tracking-[-1.5px] leading-[1.12]">
            Your whole home, <br className="hidden sm:inline" />
            one tap away.
          </h1>

          {/* Lead */}
          <p className="text-lg lg:text-[18px] text-[#4a5a70] leading-[28px] max-w-[540px]">
            Control lights, fans, AC, TV, water pump and more from one app. It
            works on your home Wi-Fi, even when the internet is down.
          </p>

          {/* Store Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* Google Play */}
            <a
              href="#download"
              className="bg-black hover:bg-neutral-800 active:scale-95 transition-all text-white rounded-[14px] px-4 py-2.5 flex items-center gap-3 shadow-md"
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

            {/* App Store */}
            <a
              href="#download"
              className="bg-black hover:bg-neutral-800 active:scale-95 transition-all text-white rounded-[14px] px-4 py-2.5 flex items-center gap-3 shadow-md"
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

          {/* Secondary CTA & Note */}
          <div className="flex flex-wrap items-center gap-5 pt-1">
            <a
              href="#how-it-works"
              className="h-12 px-6 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-[#d8e1ec] text-[#0066db] font-semibold text-[16px] flex items-center justify-center shadow-sm hover:shadow transition-all active:scale-98"
            >
              See how it works
            </a>
            <div className="flex items-center gap-1.5 text-[#4a5a70] text-[14px]">
              <IconCheckCircle className="w-[18px] h-[18px] text-[#187a43]" />
              <span>Free app · English &amp; </span>
              <span className="font-bengali font-medium">বাংলা</span>
            </div>
          </div>
        </div>

        {/* Right Hero Visual / Interactive Phone Mockup */}
        <div className="relative w-full max-w-[500px] lg:w-[540px] h-[640px] sm:h-[680px] flex items-center justify-center">
          {/* Ambient Glow Circles */}
          <div className="absolute w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full bg-[#4c8dff]/25 blur-3xl pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] rounded-full bg-blue-300/30 blur-2xl pointer-events-none" />

          {/* Floating Card: Left (MH-8 Device Status) */}
          <div className="absolute -left-2 sm:left-2 bottom-20 z-20 bg-white/95 backdrop-blur-xl border border-white/80 rounded-[20px] p-3.5 pr-5 flex items-center gap-3 shadow-[0px_8px_24px_rgba(10,42,92,0.12)] animate-bounce duration-1000">
            <div className="w-10 h-10 rounded-xl bg-[#eaf3ff] flex items-center justify-center text-[#0066db]">
              <IconRouter className="w-5 h-5 text-[#0066db]" />
            </div>
            <div>
              <div className="text-[14px] font-semibold text-[#0e1726]">Autoral MH-8</div>
              <div className="flex items-center gap-1.5 text-[12px] text-[#4a5a70]">
                <span>6 of 8 channels in use</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#187a43]" />
                <span className="text-[#187a43] font-medium">Online</span>
              </div>
            </div>
          </div>

          {/* Floating Card: Top Right (Ceiling Light Quick Tile) */}
          <div className="absolute -right-2 sm:right-4 top-20 z-20 bg-[#ffedbf] border border-amber-200/80 rounded-[22px] p-4 flex flex-col justify-between w-[150px] h-[115px] shadow-[0px_8px_24px_rgba(10,42,92,0.14)]">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-amber-400/30 flex items-center justify-center text-amber-900">
                <IconLightbulb className="w-4 h-4 text-amber-900" />
              </div>
              <button
                type="button"
                onClick={() => setLightOn(!lightOn)}
                className={`w-11 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                  lightOn ? "bg-[#0066db]" : "bg-neutral-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                    lightOn ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            <div>
              <div className="text-[14px] font-semibold text-[#0e1726]">Ceiling Light</div>
              <div className="text-[12px] text-[#4a5a70]">{lightOn ? "On" : "Off"}</div>
            </div>
          </div>

          {/* Floating Card: Bottom Right (Wi-Fi Badge) */}
          <div className="absolute right-0 sm:right-6 bottom-32 z-20 bg-white/95 backdrop-blur-xl border border-white/80 rounded-full px-4 py-2 flex items-center gap-2 shadow-[0px_6px_20px_rgba(10,42,92,0.12)]">
            <IconWifi className="w-4 h-4 text-[#0066db]" />
            <span className="text-[13px] font-medium text-[#0e1726]">On home Wi-Fi</span>
          </div>

          {/* iPhone Mockup Frame */}
          <div className="relative z-10 w-[285px] sm:w-[298px] h-[600px] sm:h-[630px] bg-black rounded-[48px] p-2.5 shadow-[0px_16px_48px_rgba(10,42,92,0.22)] border-[3px] border-neutral-700/80 ring-1 ring-white/20 select-none">
            {/* Screen */}
            <div className="w-full h-full bg-[#f5f8fc] rounded-[40px] overflow-hidden flex flex-col relative text-[#0e1726]">
              {/* Dynamic Island & Status Bar */}
              <div className="pt-2 px-6 flex items-center justify-between text-[11px] font-semibold text-neutral-800">
                <span>9:41</span>
                <div className="w-20 h-4 bg-black rounded-full" />
                <div className="flex items-center gap-1">
                  <IconWifi className="w-3 h-3 text-neutral-800" />
                  <div className="w-4 h-2 rounded-xs border border-neutral-800 flex items-center p-0.5">
                    <div className="w-full h-full bg-neutral-800 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* In-app header */}
              <div className="px-3.5 pt-3 pb-2 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-[#4a5a70]">Good evening</div>
                  <div className="text-[16px] font-bold text-[#0e1726]">Abu Taher Molla</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-white/80 border border-white flex items-center justify-center text-xs font-semibold shadow-xs">
                    +
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#0066db] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                    M
                  </div>
                </div>
              </div>

              {/* Status pills */}
              <div className="px-3.5 flex items-center gap-2">
                <div className="flex items-center gap-1 bg-white rounded-full px-2.5 py-1 text-[10px] font-medium border border-neutral-200/60 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#187a43]" />
                  <span className="text-[#4a5a70]">Home Wi-Fi</span>
                </div>
                <div className="flex items-center gap-1 bg-white rounded-full px-2.5 py-1 text-[10px] font-medium border border-neutral-200/60 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#187a43]" />
                  <span className="text-[#4a5a70]">2 of 2 online</span>
                </div>
              </div>

              {/* Summary card */}
              <div className="mx-3.5 mt-2.5 p-3 rounded-2xl bg-white border border-neutral-200/70 shadow-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[14px] font-bold text-[#0e1726]">
                      {activeCount} appliances on
                    </div>
                    <div className="text-[10px] text-[#4a5a70]">
                      {10 - activeCount} off · 10 appliances
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                      💡
                    </span>
                    <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center">
                      💨
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2.5">
                  <button
                    type="button"
                    onClick={turnAllOn}
                    className="py-1 rounded-full bg-[#eaf3ff] text-[#0066db] text-[11px] font-semibold hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    ☀️ All on
                  </button>
                  <button
                    type="button"
                    onClick={turnAllOff}
                    className="py-1 rounded-full bg-neutral-100 text-[#4a5a70] text-[11px] font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    ⏻ All off
                  </button>
                </div>
              </div>

              {/* Room tabs */}
              <div className="px-3.5 mt-2.5 flex items-center gap-1.5 overflow-x-hidden">
                <div className="px-3 py-1 bg-[#0e1726] text-white rounded-full text-[10px] font-medium">
                  All
                </div>
                <div className="px-3 py-1 bg-white text-[#4a5a70] border border-neutral-200/60 rounded-full text-[10px] font-medium">
                  Living room
                </div>
                <div className="px-3 py-1 bg-white text-[#4a5a70] border border-neutral-200/60 rounded-full text-[10px] font-medium">
                  Bedroom
                </div>
              </div>

              {/* Living room section */}
              <div className="px-3.5 mt-2.5 flex items-center justify-between text-[11px]">
                <div className="font-semibold text-[#0e1726] flex items-center gap-1">
                  <span>🛋️ Living room</span>
                  <span className="text-[10px] text-[#4a5a70] font-normal">
                    {((lightOn ? 1 : 0) + (wallLightOn ? 1 : 0) + (fanOn ? 1 : 0) + (tvOn ? 1 : 0))} on
                  </span>
                </div>
                <button
                  type="button"
                  onClick={turnAllOff}
                  className="text-[10px] text-[#0066db] font-medium cursor-pointer hover:underline"
                >
                  Turn all off
                </button>
              </div>

              {/* Appliance Grid in Phone */}
              <div className="grid grid-cols-2 gap-2 px-3.5 mt-1.5 flex-1 overflow-hidden">
                {/* Ceiling Light */}
                <div
                  onClick={() => setLightOn(!lightOn)}
                  className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    lightOn
                      ? "bg-[#ffedbf] border-amber-300 shadow-2xs"
                      : "bg-white border-neutral-200/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">💡</span>
                    <div
                      className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${
                        lightOn ? "bg-[#0066db]" : "bg-neutral-300"
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full bg-white shadow-2xs transition-transform ${
                          lightOn ? "translate-x-3.5" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#0e1726]">Ceiling Light</div>
                    <div className="text-[9px] text-[#4a5a70]">{lightOn ? "On" : "Off"}</div>
                  </div>
                </div>

                {/* Wall Light */}
                <div
                  onClick={() => setWallLightOn(!wallLightOn)}
                  className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    wallLightOn
                      ? "bg-[#ffedbf] border-amber-300 shadow-2xs"
                      : "bg-white border-neutral-200/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">🏮</span>
                    <div
                      className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${
                        wallLightOn ? "bg-[#0066db]" : "bg-neutral-300"
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full bg-white shadow-2xs transition-transform ${
                          wallLightOn ? "translate-x-3.5" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#0e1726]">Wall Light</div>
                    <div className="text-[9px] text-[#4a5a70]">{wallLightOn ? "On" : "Off"}</div>
                  </div>
                </div>

                {/* Ceiling Fan */}
                <div
                  onClick={() => setFanOn(!fanOn)}
                  className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    fanOn
                      ? "bg-[#d4f3f7] border-cyan-300 shadow-2xs"
                      : "bg-white border-neutral-200/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${fanOn ? "animate-spin" : ""}`}>🌀</span>
                    <div
                      className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${
                        fanOn ? "bg-[#0066db]" : "bg-neutral-300"
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full bg-white shadow-2xs transition-transform ${
                          fanOn ? "translate-x-3.5" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#0e1726]">Ceiling Fan</div>
                    <div className="text-[9px] text-[#4a5a70]">{fanOn ? "On" : "Off"}</div>
                  </div>
                </div>

                {/* TV */}
                <div
                  onClick={() => setTvOn(!tvOn)}
                  className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    tvOn
                      ? "bg-[#fbddeb] border-pink-300 shadow-2xs"
                      : "bg-white border-neutral-200/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">📺</span>
                    <div
                      className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${
                        tvOn ? "bg-[#0066db]" : "bg-neutral-300"
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full bg-white shadow-2xs transition-transform ${
                          tvOn ? "translate-x-3.5" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#0e1726]">TV</div>
                    <div className="text-[9px] text-[#4a5a70]">{tvOn ? "On" : "Off"}</div>
                  </div>
                </div>
              </div>

              {/* In-app bottom navigation bar */}
              <div className="mt-auto bg-white border-t border-neutral-200/60 px-5 py-2 flex items-center justify-around text-[10px] font-medium text-[#4a5a70]">
                <div className="flex flex-col items-center gap-0.5 text-[#0066db] font-semibold">
                  <IconHomeFill className="w-4 h-4 text-[#0066db]" />
                  <span>Home</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <IconRouter className="w-4 h-4" />
                  <span>Appliances</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <IconTools className="w-4 h-4" />
                  <span>Settings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
