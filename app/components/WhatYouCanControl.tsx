import React from "react";
import {
  IconLightbulb,
  IconFan,
  IconWaterDrop,
  IconTv,
  IconPowerPlug,
  IconLock,
} from "./Icons";

export default function WhatYouCanControl() {
  const categories = [
    {
      title: "Lighting",
      desc: "Ceiling lights, lamps, strip lights",
      icon: <IconLightbulb className="w-6 h-6 text-[#4a310d]" />,
      bg: "bg-[#ffedbf]",
    },
    {
      title: "Cooling",
      desc: "Fans, AC, air cooler, exhaust fan",
      icon: <IconFan className="w-6 h-6 text-[#06404a]" />,
      bg: "bg-[#d4f3f7]",
    },
    {
      title: "Water & heating",
      desc: "Water pump, geyser, room heater",
      icon: <IconWaterDrop className="w-6 h-6 text-[#5c1d0c]" />,
      bg: "bg-[#ffe0d6]",
    },
    {
      title: "Entertainment",
      desc: "TV, set-top box, speaker",
      icon: <IconTv className="w-6 h-6 text-[#5a1236]" />,
      bg: "bg-[#fbddeb]",
    },
    {
      title: "Power & appliances",
      desc: "Smart plugs, fridge, washing machine, IPS",
      icon: <IconPowerPlug className="w-6 h-6 text-[#243d0b]" />,
      bg: "bg-[#e3f2c9]",
    },
    {
      title: "Security",
      desc: "Door lock, camera, gas & motion sensors",
      icon: <IconLock className="w-6 h-6 text-[#1c2360]" />,
      bg: "bg-[#dee1fb]",
      badge: "Coming soon",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#f5f8fc]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Section Heading */}
        <div className="text-center max-w-[760px] mx-auto mb-14 lg:mb-16">
          <div className="text-[12px] font-semibold text-[#0066db] tracking-[0.96px] uppercase mb-3">
            WHAT YOU CAN CONTROL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0e1726] tracking-[-1px] leading-[1.18] mb-4">
            One app for every room
          </h2>
          <p className="text-base sm:text-lg text-[#4a5a70] leading-[28px]">
            Autoral Home brings every switch in your home into one place,
            grouped by room the way your family lives.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-8 border border-[#d8e1ec] shadow-[0px_2px_12px_rgba(10,42,92,0.04)] hover:shadow-[0px_8px_24px_rgba(10,42,92,0.08)] transition-all group flex flex-col justify-between min-h-[206px]"
            >
              <div className="flex items-center justify-between mb-8">
                <div
                  className={`w-12 h-12 rounded-[16px] ${cat.bg} flex items-center justify-center transition-transform group-hover:scale-105`}
                >
                  {cat.icon}
                </div>
                {cat.badge && (
                  <span className="text-[12px] font-medium text-[#4a5a70] bg-[#edf2f8] px-3 py-1 rounded-full border border-neutral-200/50">
                    {cat.badge}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[#0e1726] mb-1.5">
                  {cat.title}
                </h3>
                <p className="text-[15px] text-[#4a5a70] leading-[22px]">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-[14px] text-[#4a5a70] mt-10">
          AC, TV and security appliances connect through matching Autoral modules.
        </p>
      </div>
    </section>
  );
}
