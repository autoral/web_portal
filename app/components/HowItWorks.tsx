"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// Exact vector icons from Figma (28x28 viewBox 0 0 28 28)
function IconHandyman({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21.9625 25.6083C21.8653 25.5694 21.7681 25.5014 21.6708 25.4042L14.6125 18.3458C14.5153 18.2486 14.4472 18.1514 14.4083 18.0542C14.3694 17.9569 14.35 17.85 14.35 17.7333C14.35 17.6167 14.3694 17.5097 14.4083 17.4125C14.4472 17.3153 14.5153 17.2181 14.6125 17.1208L17.0917 14.6417C17.1889 14.5444 17.2861 14.4764 17.3833 14.4375C17.4806 14.3986 17.5875 14.3792 17.7042 14.3792C17.8208 14.3792 17.9278 14.3986 18.025 14.4375C18.1222 14.4764 18.2194 14.5444 18.3167 14.6417L25.375 21.7C25.4722 21.7972 25.5403 21.8944 25.5792 21.9917C25.6181 22.0889 25.6375 22.1958 25.6375 22.3125C25.6375 22.4292 25.6181 22.5361 25.5792 22.6333C25.5403 22.7306 25.4722 22.8278 25.375 22.925L22.8958 25.4042C22.7986 25.5014 22.7014 25.5694 22.6042 25.6083C22.5069 25.6472 22.4 25.6667 22.2833 25.6667C22.1667 25.6667 22.0597 25.6472 21.9625 25.6083ZM22.2833 23.5667L23.5375 22.3125L17.7042 16.4792L16.45 17.7333L22.2833 23.5667ZM5.36667 25.6083C5.25 25.5694 5.14306 25.5014 5.04583 25.4042L2.59583 22.9542C2.49861 22.8569 2.43056 22.7597 2.39167 22.6625C2.35278 22.5653 2.33333 22.4486 2.33333 22.3125C2.33333 22.1764 2.35278 22.0694 2.39167 21.9917C2.43056 21.9139 2.49861 21.8167 2.59583 21.7L9.15833 15.1375H11.6375L12.7458 14.0292L7.64167 8.925H5.97917L2.33333 5.27917L5.22083 2.39167L8.86667 6.0375V7.7L13.9708 12.8042L17.7625 9.0125L15.8083 7.05833L17.4417 5.425H14.1458L13.6208 4.9L17.3542 1.16667L17.8792 1.69167V4.9875L19.5125 3.35417L24.4417 8.28333C24.7333 8.575 24.9667 8.91528 25.1417 9.30417C25.3167 9.69306 25.3944 10.0917 25.375 10.5C25.375 10.8889 25.3167 11.2681 25.2 11.6375C25.0833 12.0069 24.8986 12.3278 24.6458 12.6L22.1667 10.1208L20.5333 11.7542L19.0167 10.2375L12.8625 16.3917V18.8417L6.3 25.4042C6.20278 25.5014 6.10556 25.5694 6.00833 25.6083C5.91111 25.6472 5.80417 25.6667 5.6875 25.6667C5.57083 25.6667 5.46389 25.6472 5.36667 25.6083ZM5.6875 23.5667L11.5208 17.7333V16.4792H10.2667L4.43333 22.3125L5.6875 23.5667ZM5.6875 23.5667L4.43333 22.3125L5.075 22.925L5.6875 23.5667Z"
        fill="white"
      />
    </svg>
  );
}

function IconStepSmartphone({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.58333 26.8333C7.09722 26.8333 6.68889 26.6583 6.35833 26.3083C6.00833 25.9778 5.83333 25.5694 5.83333 25.0833V2.91667C5.83333 2.45 6.00833 2.04167 6.35833 1.69167C6.70833 1.34167 7.11667 1.16667 7.58333 1.16667H20.3583C20.8444 1.16667 21.2528 1.34167 21.5833 1.69167C21.9333 2.02222 22.1083 2.43056 22.1083 2.91667V7.29167C22.4583 7.35 22.75 7.51528 22.9833 7.7875C23.2167 8.05972 23.3333 8.37083 23.3333 8.72083V10.8792C23.3333 11.2486 23.2167 11.5694 22.9833 11.8417C22.75 12.1139 22.4583 12.2792 22.1083 12.3375V25.0833C22.1083 25.5694 21.9333 25.9778 21.5833 26.3083C21.2528 26.6583 20.8444 26.8333 20.3583 26.8333H7.58333ZM7.58333 25.0833H20.3583V2.91667H7.58333V25.0833ZM14.5833 6.7375C14.7583 6.5625 14.8458 6.35833 14.8458 6.125C14.8458 5.89167 14.7583 5.6875 14.5833 5.5125C14.4083 5.3375 14.2042 5.25 13.9708 5.25C13.7375 5.25 13.5333 5.3375 13.3583 5.5125C13.1833 5.6875 13.0958 5.89167 13.0958 6.125C13.0958 6.35833 13.1833 6.5625 13.3583 6.7375C13.5333 6.9125 13.7375 7 13.9708 7C14.2042 7 14.4083 6.9125 14.5833 6.7375Z"
        fill="white"
      />
    </svg>
  );
}

function IconStepGlobe({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9.45 24.7625C8.03056 24.1403 6.79583 23.3042 5.74583 22.2542C4.69583 21.2042 3.86944 19.9694 3.26667 18.55C2.66389 17.1306 2.35278 15.6139 2.33333 14C2.31389 12.3861 2.625 10.8694 3.26667 9.45C3.90833 8.03056 4.73472 6.79583 5.74583 5.74583C6.75694 4.69583 7.99167 3.86944 9.45 3.26667C10.9083 2.66389 12.425 2.35278 14 2.33333C15.575 2.31389 17.0917 2.625 18.55 3.26667C20.0083 3.90833 21.2431 4.73472 22.2542 5.74583C23.2653 6.75694 24.1014 7.99167 24.7625 9.45C25.4236 10.9083 25.725 12.425 25.6667 14C25.6083 15.575 25.3069 17.0917 24.7625 18.55C24.2181 20.0083 23.3819 21.2431 22.2542 22.2542C21.1264 23.2653 19.8917 24.1014 18.55 24.7625C17.2083 25.4236 15.6917 25.725 14 25.6667C12.3083 25.6083 10.7917 25.3069 9.45 24.7625ZM12.7458 23.8875V21.4958C12.0653 21.4958 11.4917 21.2431 11.025 20.7375C10.5583 20.2319 10.325 19.6389 10.325 18.9583V17.675L4.34583 11.6958C4.24861 12.0847 4.18056 12.4736 4.14167 12.8625C4.10278 13.2514 4.08333 13.6306 4.08333 14C4.08333 16.5278 4.90972 18.7347 6.5625 20.6208C8.21528 22.5069 10.2764 23.5958 12.7458 23.8875ZM21.3208 20.7375C22.1764 19.8042 22.8278 18.7639 23.275 17.6167C23.7222 16.4694 23.9361 15.2639 23.9167 14C23.9167 11.9389 23.3528 10.0722 22.225 8.4C21.0972 6.72778 19.5903 5.49306 17.7042 4.69583V5.22083C17.7042 5.90139 17.4708 6.49444 17.0042 7C16.5375 7.50556 15.9639 7.75833 15.2833 7.75833H12.7458V10.2958C12.7458 10.6264 12.6194 10.8986 12.3667 11.1125C12.1139 11.3264 11.8125 11.4333 11.4625 11.4333H9.04167V14H16.5667C16.8972 14 17.1694 14.1264 17.3833 14.3792C17.5972 14.6319 17.7042 14.9236 17.7042 15.2542V18.9583H18.9583C19.5222 18.9583 20.0181 19.1236 20.4458 19.4542C20.8736 19.7847 21.1653 20.2125 21.3208 20.7375Z"
        fill="white"
      />
    </svg>
  );
}

export default function HowItWorks() {
  const { lang } = useLanguage();
  const t = translations.howItWorks;

  const icons = [
    <IconHandyman key="0" className="size-7 text-white" />,
    <IconStepSmartphone key="1" className="size-7 text-white" />,
    <IconStepGlobe key="2" className="size-7 text-white" />,
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-white dark:bg-[#0a0f17] py-16 sm:py-20 lg:py-[112px] transition-colors duration-200"
      data-node-id="4239:1161"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-12 lg:gap-[56px] items-center">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 items-center text-center max-w-[760px] w-full">
          <p className="text-[12px] font-semibold leading-[16px] text-[#0066db] dark:text-[#84beff] tracking-[0.96px] uppercase">
            {t.overline[lang]}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.18] lg:leading-[52px] tracking-[-1px] text-[#0e1726] dark:text-[#edf2f8]">
            {t.title[lang]}
          </h2>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="card-interactive group relative bg-[#f5f8fc] dark:bg-[#151d29] rounded-[24px] border border-[#d8e1ec] dark:border-[#2a3546] p-8 flex flex-col justify-between gap-8 min-h-[288px] cursor-default hover:bg-white dark:hover:bg-[#1c283e] transition-colors duration-200"
            >
              {/* Top: Icon Badge & Number */}
              <div className="flex items-center justify-between w-full">
                <div className="size-[56px] rounded-[16px] bg-[#0066db] dark:bg-[#0b2a55] flex items-center justify-center text-white dark:text-[#84beff] shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0px_6px_20px_rgba(0,102,219,0.35)]">
                  {icons[idx]}
                </div>
                <span className="text-[64px] font-semibold leading-[72px] tracking-[-1.5px] text-[#0066db]/16 dark:text-[#84beff]/25 select-none transition-colors duration-300 group-hover:text-[#0066db]/35 dark:group-hover:text-[#84beff]/50 font-bengali">
                  {step.num[lang]}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 w-full text-left">
                <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-0.2px] text-[#0e1726] dark:text-[#edf2f8] group-hover:text-[#0066db] dark:group-hover:text-[#84beff] transition-colors duration-200">
                  {step.title[lang]}
                </h3>
                <p className="text-[16px] font-normal leading-[26px] text-[#4a5a70] dark:text-[#b4c1d1]">
                  {step.desc[lang]}
                </p>
              </div>

              {/* Subtle top inner light border */}
              <div className="absolute inset-0 pointer-events-none rounded-[24px] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] dark:shadow-[inset_0px_1px_0px_rgba(255,255,255,0.08)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
