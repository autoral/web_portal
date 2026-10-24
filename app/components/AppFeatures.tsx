import React from "react";
import {
  IconHomeFill,
  IconGlobe,
  IconWifi,
  IconTranslate,
  IconPower,
} from "./Icons";

// Exact vector icon from Figma for One-tap touch_app
function IconOneTap({ className = "w-[28px] h-[28px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="currentColor">
      <path d="M12.9792 25.6667C12.4153 25.6667 11.8708 25.55 11.3458 25.3167C10.8208 25.0833 10.3833 24.7431 10.0333 24.2958L4.17083 16.8292C4.03472 16.6542 3.96667 16.4597 3.96667 16.2458C3.96667 16.0319 4.04444 15.8472 4.2 15.6917L4.31667 15.575C4.58889 15.2833 4.92917 15.1083 5.3375 15.05C5.74583 14.9917 6.11528 15.05 6.44583 15.225L9.33333 16.7708V6.125C9.33333 5.87222 9.42083 5.66806 9.59583 5.5125C9.75139 5.3375 9.95556 5.25 10.2083 5.25C10.4611 5.25 10.675 5.3375 10.85 5.5125C11.025 5.6875 11.1028 5.89167 11.0833 6.125V18.2292C11.0833 18.5597 10.9472 18.8125 10.675 18.9875C10.4028 19.1625 10.1111 19.1625 9.8 18.9875L6.88333 17.4417L11.4333 23.2167C11.6278 23.45 11.8611 23.625 12.1333 23.7417C12.4056 23.8583 12.6875 23.9167 12.9792 23.9167H18.9583C19.6972 23.9167 20.3194 23.6639 20.825 23.1583C21.3306 22.6528 21.5833 22.0306 21.5833 21.2917V16.3333C21.5833 15.8472 21.4181 15.4292 21.0875 15.0792C20.7569 14.7292 20.3389 14.5639 19.8333 14.5833H14.2917C14.0389 14.5833 13.8347 14.4958 13.6792 14.3208C13.5042 14.1653 13.4167 13.9611 13.4167 13.7083C13.4167 13.4556 13.5042 13.2417 13.6792 13.0667C13.8542 12.8917 14.0583 12.8139 14.2917 12.8333H19.8333C20.8056 12.8333 21.6319 13.1736 22.3125 13.8542C22.9931 14.5347 23.3333 15.3611 23.3333 16.3333V21.2917C23.3333 22.5167 22.9153 23.5569 22.0792 24.4125C21.2431 25.2681 20.2028 25.6861 18.9583 25.6667H12.9792ZM13.7375 9.04167C13.4847 9.04167 13.2806 8.95417 13.125 8.77917C12.95 8.62361 12.8625 8.41944 12.8625 8.16667L12.9792 7.72917C13.1153 7.49583 13.2222 7.24306 13.3 6.97083C13.3778 6.69861 13.4167 6.41667 13.4167 6.125C13.4167 5.23056 13.1056 4.47222 12.4833 3.85C11.8611 3.22778 11.1028 2.91667 10.2083 2.91667C9.31389 2.91667 8.55556 3.22778 7.93333 3.85C7.31111 4.47222 7 5.23056 7 6.125C7 6.41667 7.03889 6.69861 7.11667 6.97083C7.19444 7.24306 7.30139 7.49583 7.4375 7.72917L7.525 7.93333L7.55417 8.16667C7.55417 8.41944 7.46667 8.62361 7.29167 8.77917C7.13611 8.95417 6.93194 9.04167 6.67917 9.04167C6.50417 9.04167 6.34861 9.00278 6.2125 8.925C6.07639 8.84722 5.96944 8.73056 5.89167 8.575C5.67778 8.20556 5.52222 7.81667 5.425 7.40833C5.30833 7 5.25 6.57222 5.25 6.125C5.25 4.74444 5.73611 3.56806 6.70833 2.59583C7.68056 1.62361 8.84722 1.14722 10.2083 1.16667C11.5694 1.18611 12.7458 1.67222 13.7375 2.625C14.7292 3.57778 15.2056 4.74444 15.1667 6.125C15.1667 6.57222 15.1083 7 14.9917 7.40833C14.8944 7.81667 14.7389 8.20556 14.525 8.575C14.4472 8.73056 14.3403 8.84722 14.2042 8.925C14.0681 9.00278 13.9125 9.04167 13.7375 9.04167Z" />
    </svg>
  );
}

export default function AppFeatures() {
  const features = [
    {
      title: "One-tap control",
      desc: "Switch any appliance from the Home screen. The tile shows its state instantly.",
      icon: <IconOneTap className="w-[28px] h-[28px] text-[#0066db]" />,
    },
    {
      title: "Organised by room",
      desc: "Name rooms and appliances the way your family talks about them.",
      icon: <IconHomeFill className="w-[28px] h-[28px] text-[#0066db]" />,
    },
    {
      title: "Control from anywhere",
      desc: "Sign in with Google, Apple or email to reach your home from outside.",
      icon: <IconGlobe className="w-[28px] h-[28px] text-[#0066db]" />,
    },
    {
      title: "Works offline at home",
      desc: "No internet? Everything still works on your home Wi-Fi.",
      icon: <IconWifi className="w-[28px] h-[28px] text-[#0066db]" />,
    },
    {
      title: (
        <>
          English &amp; <span className="font-bengali font-medium">বাংলা</span>
        </>
      ),
      desc: "Every screen, button and message works in both languages, in light or dark mode.",
      icon: <IconTranslate className="w-[28px] h-[28px] text-[#0066db]" />,
    },
    {
      title: "Everything off, one tap",
      desc: "Leaving home? Turn off every light and fan in one go.",
      icon: <IconPower className="w-[28px] h-[28px] text-[#0066db]" />,
    },
  ];

  return (
    <section
      id="app-features"
      aria-label="App features"
      className="bg-white py-16 sm:py-20 lg:py-28 w-full border-b border-[#d8e1ec]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14 items-center">
        {/* Section Heading (WebSectionHead) */}
        <div className="flex flex-col gap-4 items-center text-center max-w-[760px] mx-auto">
          <p className="text-[12px] font-semibold leading-[16px] text-[#0066db] tracking-[0.96px] uppercase">
            APP FEATURES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] sm:leading-[52px] text-[#0e1726] tracking-[-1px]">
            Simple enough for the whole family
          </h2>
          <p className="text-base sm:text-lg text-[#4a5a70] leading-[28px]">
            Designed with parents, kids and grandparents in mind. Every screen
            works in English and Bangla.
          </p>
        </div>

        {/* 6 Feature Cards Grid (3x2 Desktop, 2x3 Tablet, 1x6 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f5f8fc] rounded-[24px] p-[28px] border border-[#d8e1ec] drop-shadow-[0px_2px_6px_rgba(10,42,92,0.06)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] hover:bg-white hover:border-[#0066db]/40 hover:shadow-md transition-all group flex flex-col justify-between min-h-[224px]"
            >
              {/* Badge: 56x56, rounded-[16px], bg-[#eaf3ff] */}
              <div className="w-[56px] h-[56px] rounded-[16px] bg-[#eaf3ff] flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                {item.icon}
              </div>

              {/* Text Block: Title 18px semibold, Body 16px regular */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-semibold leading-[26px] text-[#0e1726]">
                  {item.title}
                </h3>
                <p className="text-[16px] font-normal leading-[26px] text-[#4a5a70]">
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
