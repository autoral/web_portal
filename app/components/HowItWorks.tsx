import React from "react";
import { IconTools, IconSmartphone, IconGlobe } from "./Icons";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Install the device",
      desc: "A trained Autoral installer fits the device behind your switchboard in about 30 minutes.",
      icon: <IconTools className="w-6 h-6 text-white" />,
    },
    {
      num: "02",
      title: "Connect in the app",
      desc: "Open the app, find the device, join your home Wi-Fi and name each room and appliance.",
      icon: <IconSmartphone className="w-6 h-6 text-white" />,
    },
    {
      num: "03",
      title: "Control anywhere",
      desc: "Tap to switch at home. Sign in to control your home from the office or on holiday.",
      icon: <IconGlobe className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#f5f8fc]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Section Heading */}
        <div className="text-center max-w-[760px] mx-auto mb-14 lg:mb-16">
          <div className="text-[12px] font-semibold text-[#0066db] tracking-[0.96px] uppercase mb-3">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0e1726] tracking-[-1px] leading-[1.18]">
            From switchboard to smartphone in three steps
          </h2>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-8 border border-[#d8e1ec] shadow-[0px_2px_12px_rgba(10,42,92,0.04)] hover:shadow-[0px_8px_24px_rgba(10,42,92,0.08)] transition-all group flex flex-col justify-between min-h-[288px] relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-13 h-13 rounded-[18px] bg-[#0066db] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>
                <span className="text-[48px] font-bold text-[#eaf3ff] group-hover:text-blue-100 transition-colors select-none font-sans leading-none">
                  {step.num}
                </span>
              </div>
              <div>
                <h3 className="text-[22px] font-semibold text-[#0e1726] mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#4a5a70] leading-[26px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
