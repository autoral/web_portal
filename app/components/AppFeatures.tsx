import React from "react";
import {
  IconTap,
  IconFamilyHome,
  IconGlobe,
  IconWifi,
  IconTranslate,
  IconPower,
} from "./Icons";

export default function AppFeatures() {
  const features = [
    {
      title: "One-tap control",
      desc: "Switch any appliance from the Home screen. The tile shows its state instantly.",
      icon: <IconTap className="w-6 h-6 text-[#0066db]" />,
    },
    {
      title: "Organised by room",
      desc: "Name rooms and appliances the way your family talks about them.",
      icon: <IconFamilyHome className="w-6 h-6 text-[#0066db]" />,
    },
    {
      title: "Control from anywhere",
      desc: "Sign in with Google, Apple or email to reach your home from outside.",
      icon: <IconGlobe className="w-6 h-6 text-[#0066db]" />,
    },
    {
      title: "Works offline at home",
      desc: "No internet? Everything still works on your home Wi-Fi.",
      icon: <IconWifi className="w-6 h-6 text-[#0066db]" />,
    },
    {
      title: "English & বাংলা",
      desc: "Every screen, button and message works in both languages, in light or dark mode.",
      icon: <IconTranslate className="w-6 h-6 text-[#0066db]" />,
    },
    {
      title: "Everything off, one tap",
      desc: "Leaving home? Turn off every light and fan in one go.",
      icon: <IconPower className="w-6 h-6 text-[#0066db]" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f5f8fc]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Section Heading */}
        <div className="text-center max-w-[760px] mx-auto mb-14 lg:mb-16">
          <div className="text-[12px] font-semibold text-[#0066db] tracking-[0.96px] uppercase mb-3">
            APP FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0e1726] tracking-[-1px] leading-[1.18] mb-4">
            Simple enough for the whole family
          </h2>
          <p className="text-base sm:text-lg text-[#4a5a70] leading-[28px]">
            Designed with parents, kids and grandparents in mind. Every screen
            works in English and Bangla.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-8 border border-[#d8e1ec] shadow-[0px_2px_12px_rgba(10,42,92,0.04)] hover:shadow-[0px_8px_24px_rgba(10,42,92,0.08)] transition-all group flex flex-col justify-between min-h-[224px]"
            >
              <div className="w-12 h-12 rounded-[16px] bg-[#eaf3ff] flex items-center justify-center mb-8 border border-blue-100/50 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[#0e1726] mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#4a5a70] leading-[24px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
