import React from "react";
import { IconWifi, IconUsers, IconSupport } from "./Icons";

export default function AboutUs() {
  const values = [
    {
      title: "Local first",
      desc: "Your home works on your own Wi-Fi. Internet is only needed when you are away.",
      icon: <IconWifi className="w-6 h-6 text-[#0066db]" />,
    },
    {
      title: "Made for families",
      desc: "Big tiles, clear words and full Bangla, so everyone at home can use it.",
      icon: <IconUsers className="w-6 h-6 text-[#0066db]" />,
    },
    {
      title: "Honest support",
      desc: "Real people on the phone, WhatsApp and Messenger, and installers who come to your home.",
      icon: <IconSupport className="w-6 h-6 text-[#0066db]" />,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f5f8fc]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Copy & Mission */}
          <div className="w-full lg:w-[540px] flex flex-col items-start gap-6">
            <div>
              <div className="text-[12px] font-semibold text-[#0066db] tracking-[0.96px] uppercase mb-3">
                ABOUT US
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0e1726] tracking-[-1px] leading-[1.18] mb-6">
                Built for homes in Bangladesh
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#4a5a70] leading-[28px]">
                <p>
                  Autoral Home Automation started with a simple idea: a smart
                  home shouldn&apos;t need new wiring, strong internet or
                  English.
                </p>
                <p>
                  We design our device and app around the switchboards, power cuts
                  and families of Bangladesh, and we support every customer with
                  a local team.
                </p>
              </div>
            </div>

            {/* Mission Box */}
            <div className="w-full bg-[#eaf3ff] rounded-[24px] p-6 flex items-start gap-4 border border-blue-100/80 mt-2">
              <div className="w-1.5 h-16 rounded-full bg-[#0066db] shrink-0 mt-0.5" />
              <div>
                <div className="text-[18px] font-semibold text-[#0052b3] mb-1">
                  Our mission
                </div>
                <div className="text-[16px] text-[#0e1726] font-medium leading-[26px]">
                  Make every home in Bangladesh easier and safer to run, one
                  switch at a time.
                </div>
              </div>
            </div>
          </div>

          {/* Right Values Cards */}
          <div className="w-full lg:w-[600px] flex flex-col gap-4">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#d8e1ec] shadow-[0px_2px_12px_rgba(10,42,92,0.04)] hover:shadow-[0px_8px_24px_rgba(10,42,92,0.08)] transition-all flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-[16px] bg-[#eaf3ff] flex items-center justify-center shrink-0 border border-blue-100/50 group-hover:scale-105 transition-transform">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-[19px] font-semibold text-[#0e1726] mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-[15px] text-[#4a5a70] leading-[24px]">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
