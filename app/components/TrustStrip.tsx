import React from "react";
import { IconWifi, IconSmartphone, IconLightning, IconTools } from "./Icons";

export default function TrustStrip() {
  const trustItems = [
    {
      icon: <IconWifi className="w-5 h-5 text-[#0066db]" />,
      title: "Works without internet",
      desc: "Control at home on Wi-Fi",
    },
    {
      icon: <IconSmartphone className="w-5 h-5 text-[#0066db]" />,
      title: "Wall switches still work",
      desc: "No need to change habits",
    },
    {
      icon: <IconLightning className="w-5 h-5 text-[#0066db]" />,
      title: "Ready for load-shedding",
      desc: "Restores the last state",
    },
    {
      icon: <IconTools className="w-5 h-5 text-[#0066db]" />,
      title: "Local installation",
      desc: "Trained Autoral installers",
    },
  ];

  return (
    <section className="border-y border-[#d8e1ec] bg-white/60 backdrop-blur-xs py-6 sm:py-7">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 group transition-transform hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-[14px] bg-[#eaf3ff] flex items-center justify-center shrink-0 border border-blue-100/60 shadow-2xs group-hover:bg-[#0066db] group-hover:text-white transition-colors">
                <span className="group-hover:text-white transition-colors">
                  {item.icon}
                </span>
              </div>
              <div>
                <div className="font-semibold text-[15px] sm:text-[16px] text-[#0e1726] leading-tight">
                  {item.title}
                </div>
                <div className="text-[13px] sm:text-[14px] text-[#4a5a70] mt-0.5">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
