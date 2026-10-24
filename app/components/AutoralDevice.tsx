"use client";

import React, { useState } from "react";
import {
  IconRouter,
  IconWifi,
  IconCheckCircle,
  IconArrowRight,
  IconWhatsApp,
} from "./Icons";

export default function AutoralDevice() {
  const [selectedModel, setSelectedModel] = useState<"MH-4" | "MH-8">("MH-8");

  // Allow clicking on channel LEDs to toggle them in real-time!
  const [channels, setChannels] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
  ]);

  const toggleChannel = (index: number) => {
    const updated = [...channels];
    updated[index] = !updated[index];
    setChannels(updated);
  };

  const usedCount = channels.filter(Boolean).length;

  return (
    <section id="device" className="py-20 lg:py-28 bg-[#f5f8fc]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Device Illustration */}
          <div className="w-full lg:w-[500px] flex flex-col items-center">
            <div className="w-full bg-[#0e1726] rounded-[36px] p-8 sm:p-10 shadow-[0px_20px_50px_rgba(10,42,92,0.18)] border border-neutral-800">
              {/* Device Physical Enclosure */}
              <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-inner border border-neutral-200">
                {/* Device Header */}
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0066db] flex items-center justify-center text-white shadow-sm">
                      <IconRouter className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#0e1726] tracking-wider uppercase">
                        AUTORAL DEVICE · {selectedModel}
                      </div>
                      <div className="text-[11px] text-[#4a5a70]">
                        Local-First Smart Switch Controller
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#187a43]">
                    <span className="w-2 h-2 rounded-full bg-[#187a43] animate-pulse" />
                    <IconWifi className="w-5 h-5 text-[#187a43]" />
                  </div>
                </div>

                {/* 8 Channels / LEDs */}
                <div className="py-6">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#4a5a70] mb-3">
                    <span>CHANNEL RELAY STATUS</span>
                    <span className="text-[10px] text-neutral-400">Click LED to test</span>
                  </div>
                  <div className="grid grid-cols-8 gap-2 text-center">
                    {channels.map((active, idx) => (
                      <div
                        key={idx}
                        onClick={() => toggleChannel(idx)}
                        className="flex flex-col items-center gap-1.5 cursor-pointer group"
                      >
                        <div
                          className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            active
                              ? "bg-[#187a43] shadow-[0px_0px_10px_#187a43] scale-110"
                              : "bg-[#d8e1ec]"
                          } group-hover:ring-2 ring-blue-400`}
                        />
                        <span
                          className={`text-[10px] font-bold ${
                            active ? "text-[#0e1726]" : "text-neutral-400"
                          }`}
                        >
                          CH{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Terminal screw blocks */}
                  <div className="grid grid-cols-8 gap-2 mt-4 pt-3 border-t border-dashed border-neutral-200">
                    {channels.map((_, idx) => (
                      <div
                        key={idx}
                        className="h-4 bg-neutral-200 rounded-xs flex items-center justify-center shadow-2xs"
                      >
                        <div className="w-2 h-0.5 bg-neutral-400 rotate-45" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capacity Meter */}
                <div className="pt-4 border-t border-neutral-100">
                  <div className="flex items-center justify-between text-[13px] mb-2 font-medium">
                    <span className="text-[#4a5a70]">Channels used</span>
                    <span className="font-bold text-[#0e1726]">
                      {usedCount} of {selectedModel === "MH-8" ? 8 : 4}
                    </span>
                  </div>
                  <div className="flex gap-1.5 h-2">
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 rounded-full transition-colors ${
                          idx < usedCount ? "bg-[#0066db]" : "bg-[#d8e1ec]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="text-center text-[14px] text-neutral-400 mt-6 font-medium">
                Fits behind your existing switchboard
              </div>
            </div>
          </div>

          {/* Right Copy & Features */}
          <div className="w-full lg:w-[620px] flex flex-col items-start gap-7">
            {/* Heading */}
            <div>
              <div className="text-[12px] font-semibold text-[#0066db] tracking-[0.96px] uppercase mb-3">
                AUTORAL DEVICE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0e1726] tracking-[-1px] leading-[1.15] mb-4">
                The small box that makes your home smart
              </h2>
              <p className="text-base sm:text-lg text-[#4a5a70] leading-[28px]">
                The Autoral device sits behind the switchboard you already have.
                Your electrician connects it in about 30 minutes, with no new
                wiring in the walls.
              </p>
            </div>

            {/* Checklist items */}
            <div className="flex flex-col gap-3.5 w-full">
              {[
                "Your wall switches keep working as normal",
                "Wi-Fi 2.4 GHz with easy Bluetooth setup",
                "Remembers every state after a power cut",
                "Local control first, encrypted remote access",
                "Add more devices any time as your home grows",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <IconCheckCircle className="w-5 h-5 text-[#187a43] shrink-0" />
                  <span className="text-[16px] text-[#0e1726] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Model Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              {/* MH-4 */}
              <div
                onClick={() => setSelectedModel("MH-4")}
                className={`p-5 rounded-[20px] border cursor-pointer transition-all ${
                  selectedModel === "MH-4"
                    ? "bg-white border-[#0066db] ring-2 ring-blue-500/20 shadow-md"
                    : "bg-white/80 border-[#d8e1ec] hover:border-neutral-400"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[17px] text-[#0e1726]">
                    Autoral MH-4
                  </span>
                </div>
                <div className="text-[14px] font-semibold text-[#0066db] mb-1">
                  4 channels
                </div>
                <div className="text-[13px] text-[#4a5a70]">
                  For a bedroom or a small flat
                </div>
              </div>

              {/* MH-8 */}
              <div
                onClick={() => setSelectedModel("MH-8")}
                className={`p-5 rounded-[20px] border cursor-pointer transition-all relative ${
                  selectedModel === "MH-8"
                    ? "bg-[#eaf3ff]/50 border-[#0066db] ring-2 ring-blue-500/20 shadow-md"
                    : "bg-white/80 border-[#d8e1ec] hover:border-neutral-400"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[17px] text-[#0e1726]">
                    Autoral MH-8
                  </span>
                  <span className="text-[11px] font-bold text-white bg-[#0066db] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Popular
                  </span>
                </div>
                <div className="text-[14px] font-semibold text-[#0066db] mb-1">
                  8 channels
                </div>
                <div className="text-[13px] text-[#4a5a70]">
                  For living rooms and busy switchboards
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#contact"
                className="h-12 px-7 rounded-full bg-[#0066db] hover:bg-[#0052b3] active:scale-98 text-white font-semibold text-[16px] flex items-center gap-2 transition-all shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)] shadow-blue-500/10"
              >
                <span>Ask for a price</span>
                <IconArrowRight className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://wa.me/8801770066585"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-full bg-white hover:bg-neutral-50 active:scale-98 border border-[#d8e1ec] text-[#0e1726] font-semibold text-[16px] flex items-center gap-2 transition-all shadow-sm"
              >
                <IconWhatsApp className="w-5 h-5 text-[#25D366]" />
                <span>Book installation</span>
              </a>
            </div>

            {/* Disclaimer */}
            <p className="text-[13px] text-[#4a5a70]">
              Specifications are indicative and may change before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
