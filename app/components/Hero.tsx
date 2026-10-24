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

  const activeCount =
    (lightOn ? 1 : 0) +
    (fanOn ? 1 : 0) +
    (wallLightOn ? 1 : 0) +
    (tvOn ? 1 : 0) +
    2;

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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf3ff] via-[#eaf3ff]/70 via-[35%] to-[#f5f8fc]/0 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Copy */}
        <div className="w-full lg:w-[580px] flex flex-col items-start gap-7">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#d8e1ec] rounded-full px-3.5 py-2 shadow-xs">
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
              className="h-12 px-6 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-[#d8e1ec] text-[#0066db] font-semibold text-[16px] flex items-center justify-center shadow-xs hover:shadow transition-all active:scale-98"
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
        <div className="relative w-full max-w-[500px] lg:w-[540px] h-[660px] sm:h-[700px] flex items-center justify-center">
          {/* Subtle Ambient Ring & Glow */}
          <div className="absolute w-[440px] sm:w-[480px] h-[440px] sm:h-[480px] rounded-full border border-[#4c8dff]/20 bg-gradient-to-tr from-[#4c8dff]/15 to-transparent blur-xl pointer-events-none" />
          <div className="absolute w-[320px] h-[320px] rounded-full bg-blue-400/15 blur-3xl pointer-events-none" />

          {/* Floating Card: Left (MH-8 Device Status) */}
          <div className="absolute -left-3 sm:-left-6 lg:-left-12 bottom-24 z-20 bg-white/95 backdrop-blur-xl border border-white/80 rounded-[22px] p-3.5 pr-5 flex items-center gap-3.5 shadow-[0px_8px_28px_rgba(10,42,92,0.14)] transition-transform hover:scale-102">
            <div className="w-12 h-12 rounded-[14px] bg-[#eaf3ff] flex items-center justify-center text-[#0066db] shrink-0 shadow-2xs">
              <IconRouter className="w-6 h-6 text-[#0066db]" />
            </div>
            <div>
              <div className="text-[15px] font-semibold text-[#0e1726]">
                Autoral MH-8
              </div>
              <div className="text-[12px] text-[#4a5a70]">
                6 of 8 channels in use
              </div>
              <div className="flex items-center gap-1.5 text-[12px] mt-0.5">
                <span className="w-2 h-2 rounded-full bg-[#187a43]" />
                <span className="text-[#187a43] font-semibold">Online</span>
              </div>
            </div>
            <div className="ml-2 text-neutral-400">
              <svg className="w-5 h-5 -rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Floating Card: Top Right (Ceiling Light Quick Tile) */}
          <div className="absolute -right-2 sm:-right-4 lg:-right-8 top-16 z-20 bg-[#ffedbf] border border-amber-300/60 rounded-[20px] p-4 flex flex-col justify-between w-[158px] h-[120px] shadow-[0px_8px_32px_rgba(10,42,92,0.14)] transition-transform hover:scale-102">
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-amber-900 shadow-2xs">
                <IconLightbulb className="w-5 h-5 text-amber-900" />
              </div>
              <button
                type="button"
                onClick={() => setLightOn(!lightOn)}
                className={`w-[48px] h-[28px] rounded-full p-1 transition-colors cursor-pointer ${
                  lightOn ? "bg-[#0066db]" : "bg-neutral-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                    lightOn ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            <div>
              <div className="text-[15px] font-semibold text-[#4a310d]">
                Ceiling Light
              </div>
              <div className="text-[12px] text-[#4a310d]/80">
                {lightOn ? "On" : "Off"}
              </div>
            </div>
          </div>

          {/* Floating Card: Bottom Right (Wi-Fi Badge) */}
          <div className="absolute -right-2 sm:right-2 lg:-right-4 bottom-36 z-20 bg-white/90 backdrop-blur-xl border border-white/90 rounded-full px-4 py-2 flex items-center gap-2 shadow-[0px_6px_20px_rgba(10,42,92,0.12)]">
            <IconWifi className="w-4 h-4 text-[#0066db]" />
            <span className="text-[14px] font-medium text-[#0e1726]">
              On home Wi-Fi
            </span>
          </div>

          {/* iPhone Mockup Frame */}
          <div className="relative z-10 w-[297px] h-[646px] bg-[#1a1c20] rounded-[48px] p-2.5 shadow-[0px_20px_50px_rgba(10,42,92,0.24)] border-[3.5px] border-neutral-700/80 ring-1 ring-white/20 select-none">
            {/* Screen */}
            <div className="w-full h-full bg-[#f5f8fc] rounded-[40px] overflow-hidden flex flex-col relative text-[#0e1726]">
              {/* Dynamic Island & Status Bar */}
              <div className="pt-2 px-6 flex items-center justify-between text-[11px] font-semibold text-neutral-800 shrink-0">
                <span>9:41</span>
                <div className="w-22 h-4.5 bg-black rounded-full flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-neutral-900 border border-neutral-800" />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-end gap-0.5 h-2.5">
                    <span className="w-0.5 h-1 bg-neutral-800 rounded-2xs" />
                    <span className="w-0.5 h-1.5 bg-neutral-800 rounded-2xs" />
                    <span className="w-0.5 h-2 bg-neutral-800 rounded-2xs" />
                    <span className="w-0.5 h-2.5 bg-neutral-800 rounded-2xs" />
                  </div>
                  <IconWifi className="w-3.5 h-3.5 text-neutral-800" />
                  <div className="w-4 h-2 rounded-xs border border-neutral-800 flex items-center p-0.5">
                    <div className="w-full h-full bg-neutral-800 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* In-app header */}
              <div className="px-3.5 pt-3 pb-2 flex items-center justify-between shrink-0">
                <div>
                  <div className="text-[11px] text-[#4a5a70]">Good evening</div>
                  <div className="text-[17px] font-bold text-[#0e1726]">
                    Abu Taher Molla
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    className="w-7 h-7 rounded-full bg-white/80 border border-white flex items-center justify-center text-xs font-semibold shadow-2xs hover:bg-white"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 rounded-full bg-white/80 border border-white flex items-center justify-center text-xs text-neutral-700 shadow-2xs hover:bg-white"
                  >
                    👤
                  </button>
                </div>
              </div>

              {/* Status pills */}
              <div className="px-3.5 flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 bg-[#f7f7f7] rounded-xl px-2.5 py-1.5 text-[11px] font-medium border border-neutral-200/60 flex-1">
                  <span className="w-5 h-5 rounded-lg bg-[#e3f5ea] flex items-center justify-center text-[#187a43] text-xs">
                    <IconWifi className="w-3 h-3 text-[#187a43]" />
                  </span>
                  <div>
                    <div className="text-[9px] text-[#4a5a70] leading-none">Connection</div>
                    <div className="text-[11px] font-semibold text-[#0e1726] leading-tight flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#187a43]" />
                      Home Wi-Fi
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-[#f7f7f7] rounded-xl px-2.5 py-1.5 text-[11px] font-medium border border-neutral-200/60 flex-1">
                  <span className="w-5 h-5 rounded-lg bg-[#e3f5ea] flex items-center justify-center text-[#187a43] text-xs">
                    <IconRouter className="w-3 h-3 text-[#187a43]" />
                  </span>
                  <div>
                    <div className="text-[9px] text-[#4a5a70] leading-none">Devices</div>
                    <div className="text-[11px] font-semibold text-[#0e1726] leading-tight flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#187a43]" />
                      2 of 2 online
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary card */}
              <div className="mx-3.5 mt-2 p-3 rounded-2xl bg-white border border-neutral-200/80 shadow-xs shrink-0">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[15px] font-bold text-[#0e1726]">
                      {activeCount} appliances on
                    </div>
                    <div className="text-[10px] text-[#4a5a70]">
                      {10 - activeCount} off · 10 appliances
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded-lg bg-[#ffedbf] text-amber-800 flex items-center justify-center text-xs">
                      💡
                    </span>
                    <span className="w-6 h-6 rounded-lg bg-[#d4f3f7] text-cyan-800 flex items-center justify-center text-xs">
                      💨
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2.5">
                  <button
                    type="button"
                    onClick={turnAllOn}
                    className="py-1.5 rounded-full bg-[#eaf3ff] text-[#0052b3] text-[11px] font-semibold hover:bg-blue-100 transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>☀️</span> All on
                  </button>
                  <button
                    type="button"
                    onClick={turnAllOff}
                    className="py-1.5 rounded-full bg-[#eaf3ff] text-[#0052b3] text-[11px] font-semibold hover:bg-blue-100 transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>⏻</span> All off
                  </button>
                </div>
              </div>

              {/* Room tabs */}
              <div className="px-3.5 mt-2 flex items-center gap-1.5 overflow-x-hidden shrink-0">
                <div className="px-3 py-1 bg-[#0e1726] text-white rounded-full text-[10px] font-semibold">
                  All
                </div>
                <div className="px-3 py-1 bg-white text-[#4a5a70] border border-neutral-200/80 rounded-full text-[10px] font-medium">
                  Living room
                </div>
                <div className="px-3 py-1 bg-white text-[#4a5a70] border border-neutral-200/80 rounded-full text-[10px] font-medium">
                  Bedroom
                </div>
                <div className="px-3 py-1 bg-white text-[#4a5a70] border border-neutral-200/80 rounded-full text-[10px] font-medium">
                  Kitchen
                </div>
              </div>

              {/* Living room section */}
              <div className="px-3.5 mt-2 flex items-center justify-between text-[11px] shrink-0">
                <div className="font-semibold text-[#0e1726] flex items-center gap-1">
                  <span>🛋️ Living room</span>
                  <span className="bg-[#edf2f8] text-[#0e1726] text-[9px] px-1.5 py-0.5 rounded-full font-medium">
                    {(lightOn ? 1 : 0) + (wallLightOn ? 1 : 0) + (fanOn ? 1 : 0) + (tvOn ? 1 : 0)} on
                  </span>
                </div>
                <button
                  type="button"
                  onClick={turnAllOff}
                  className="text-[10px] text-[#0052b3] font-semibold cursor-pointer hover:underline"
                >
                  Turn all off
                </button>
              </div>

              {/* Appliance Grid in Phone */}
              <div className="grid grid-cols-2 gap-2 px-3.5 mt-1.5 flex-1 overflow-hidden">
                {/* Ceiling Light */}
                <div
                  onClick={() => setLightOn(!lightOn)}
                  className={`p-2.5 rounded-[16px] border transition-all cursor-pointer flex flex-col justify-between h-[88px] ${
                    lightOn
                      ? "bg-[#ffedbf] border-amber-300 shadow-2xs"
                      : "bg-[#edf2f8] border-neutral-200/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs shadow-2xs">
                      💡
                    </span>
                    <div
                      className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                        lightOn ? "bg-[#0066db]" : "bg-[#5e6e84]"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white shadow-2xs transition-transform ${
                          lightOn ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className={`text-[12px] font-bold leading-tight ${
                        lightOn ? "text-[#4a310d]" : "text-[#0e1726]"
                      }`}
                    >
                      Ceiling Light
                    </div>
                    <div
                      className={`text-[9px] leading-tight ${
                        lightOn ? "text-[#4a310d]/80" : "text-[#4a5a70]"
                      }`}
                    >
                      {lightOn ? "On" : "Off"}
                    </div>
                  </div>
                </div>

                {/* Wall Light */}
                <div
                  onClick={() => setWallLightOn(!wallLightOn)}
                  className={`p-2.5 rounded-[16px] border transition-all cursor-pointer flex flex-col justify-between h-[88px] ${
                    wallLightOn
                      ? "bg-[#ffedbf] border-amber-300 shadow-2xs"
                      : "bg-[#edf2f8] border-neutral-200/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs shadow-2xs">
                      🏮
                    </span>
                    <div
                      className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                        wallLightOn ? "bg-[#0066db]" : "bg-[#5e6e84]"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white shadow-2xs transition-transform ${
                          wallLightOn ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className={`text-[12px] font-bold leading-tight ${
                        wallLightOn ? "text-[#4a310d]" : "text-[#0e1726]"
                      }`}
                    >
                      Wall Light
                    </div>
                    <div
                      className={`text-[9px] leading-tight ${
                        wallLightOn ? "text-[#4a310d]/80" : "text-[#4a5a70]"
                      }`}
                    >
                      {wallLightOn ? "On" : "Off"}
                    </div>
                  </div>
                </div>

                {/* Ceiling Fan */}
                <div
                  onClick={() => setFanOn(!fanOn)}
                  className={`p-2.5 rounded-[16px] border transition-all cursor-pointer flex flex-col justify-between h-[88px] ${
                    fanOn
                      ? "bg-[#d4f3f7] border-cyan-300 shadow-2xs"
                      : "bg-[#edf2f8] border-neutral-200/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs shadow-2xs ${
                        fanOn ? "animate-spin" : ""
                      }`}
                    >
                      🌀
                    </span>
                    <div
                      className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                        fanOn ? "bg-[#0066db]" : "bg-[#5e6e84]"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white shadow-2xs transition-transform ${
                          fanOn ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className={`text-[12px] font-bold leading-tight ${
                        fanOn ? "text-[#06404a]" : "text-[#0e1726]"
                      }`}
                    >
                      Ceiling Fan
                    </div>
                    <div
                      className={`text-[9px] leading-tight ${
                        fanOn ? "text-[#06404a]/80" : "text-[#4a5a70]"
                      }`}
                    >
                      {fanOn ? "On" : "Off"}
                    </div>
                  </div>
                </div>

                {/* TV */}
                <div
                  onClick={() => setTvOn(!tvOn)}
                  className={`p-2.5 rounded-[16px] border transition-all cursor-pointer flex flex-col justify-between h-[88px] ${
                    tvOn
                      ? "bg-[#fbddeb] border-pink-300 shadow-2xs"
                      : "bg-[#edf2f8] border-neutral-200/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs shadow-2xs">
                      📺
                    </span>
                    <div
                      className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                        tvOn ? "bg-[#0066db]" : "bg-[#5e6e84]"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white shadow-2xs transition-transform ${
                          tvOn ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className={`text-[12px] font-bold leading-tight ${
                        tvOn ? "text-[#5a1236]" : "text-[#0e1726]"
                      }`}
                    >
                      TV
                    </div>
                    <div
                      className={`text-[9px] leading-tight ${
                        tvOn ? "text-[#5a1236]/80" : "text-[#4a5a70]"
                      }`}
                    >
                      {tvOn ? "On" : "Off"}
                    </div>
                  </div>
                </div>
              </div>

              {/* In-app floating bottom navigation bar */}
              <div className="mx-3 mb-2 mt-auto p-1 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-sm flex items-center justify-between text-[10px] shrink-0">
                <div className="flex-1 py-1.5 rounded-full bg-[#eaf3ff] text-[#0066db] font-semibold flex items-center justify-center gap-1 shadow-2xs">
                  <IconHomeFill className="w-3.5 h-3.5 text-[#0066db]" />
                  <span>Home</span>
                </div>
                <div className="flex-1 py-1.5 text-[#4a5a70] font-medium flex items-center justify-center gap-1">
                  <IconRouter className="w-3.5 h-3.5" />
                  <span>Appliances</span>
                </div>
                <div className="flex-1 py-1.5 text-[#4a5a70] font-medium flex items-center justify-center gap-1">
                  <IconTools className="w-3.5 h-3.5" />
                  <span>Settings</span>
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="w-24 h-1 bg-neutral-900 rounded-full mx-auto mb-1 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
