"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IconFamilyHome,
  IconCheckCircle,
  IconWifi,
  IconRouter,
  IconLightbulb,
  IconFan,
  IconTv,
} from "./Icons";

// Appliance data definitions matching Figma design system
type ApplianceType = "lighting" | "cooling" | "climate" | "media" | "water";

interface Appliance {
  id: string;
  name: string;
  room: "Living room" | "Bedroom" | "Kitchen" | "Kids room" | "Veranda";
  type: ApplianceType;
  on: boolean;
}

const INITIAL_APPLIANCES: Appliance[] = [
  // Living room (matches Figma hero screen default)
  { id: "living-ceiling-light", name: "Ceiling Light", room: "Living room", type: "lighting", on: true },
  { id: "living-wall-light", name: "Wall Light", room: "Living room", type: "lighting", on: false },
  { id: "living-ceiling-fan", name: "Ceiling Fan", room: "Living room", type: "cooling", on: true },
  { id: "living-tv", name: "TV", room: "Living room", type: "media", on: false },
  // Bedroom
  { id: "bedroom-light", name: "Bedroom Light", room: "Bedroom", type: "lighting", on: false },
  { id: "bedroom-fan", name: "Bedroom Fan", room: "Bedroom", type: "cooling", on: true },
  // Kitchen
  { id: "kitchen-light", name: "Kitchen Light", room: "Kitchen", type: "lighting", on: true },
  // Kids room
  { id: "study-light", name: "Study Light", room: "Kids room", type: "lighting", on: false },
  { id: "kids-ac", name: "Kids room AC", room: "Kids room", type: "climate", on: false },
  // Veranda
  { id: "water-pump", name: "Water pump", room: "Veranda", type: "water", on: false },
];

const ROOM_TABS = ["All", "Living room", "Bedroom", "Kitchen", "Kids room", "Veranda"] as const;

function StoreBadge({ store }: { store: "Google Play" | "App Store" }) {
  const isGoogle = store === "Google Play";
  return (
    <a
      href="#download"
      className="inline-flex items-center bg-black hover:bg-neutral-800 active:scale-98 transition-all duration-200 rounded-[14px] shrink-0 text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
      style={{
        gap: 10,
        padding: "10px 16px 10px 14px",
        height: 62,
        width: isGoogle ? 168 : 161,
      }}
      aria-label={`Download on ${store}`}
    >
      <Image
        src={isGoogle ? "/icons/icon-googleplay.svg" : "/icons/icon-apple.svg"}
        alt={store}
        width={24}
        height={24}
        className="w-6 h-6 shrink-0"
      />
      <div className="flex flex-col overflow-hidden whitespace-nowrap text-left text-white">
        <span className="text-[11px] font-normal leading-[14px] text-neutral-300">
          {isGoogle ? "GET IT ON" : "Download on the"}
        </span>
        <span className="text-[18px] font-semibold leading-[24px] text-white">
          {store}
        </span>
      </div>
    </a>
  );
}

// Interactive Toggle Switch (exact Figma 4173:11056 dimensions: 43x26 on small, 52x32 on normal)
function ToggleSwitch({
  checked,
  onChange,
  size = "small",
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: "small" | "normal";
}) {
  const isSmall = size === "small";
  const trackW = isSmall ? "w-[43px]" : "w-[52px]";
  const trackH = isSmall ? "h-[26px]" : "h-[32px]";
  const knobSize = isSmall ? "size-[20px]" : "size-[24px]";
  const knobTranslate = isSmall
    ? checked
      ? "translate-x-[17px]"
      : "translate-x-0"
    : checked
    ? "translate-x-[20px]"
    : "translate-x-0";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={(e) => {
        e.stopPropagation();
        onChange(!checked);
      }}
      className={`${trackW} ${trackH} rounded-full p-[3px] transition-colors duration-200 cursor-pointer flex items-center shrink-0 ${
        checked ? "bg-[#0066db]" : "bg-[#5e6e84]"
      }`}
    >
      <span
        className={`${knobSize} rounded-full bg-white shadow-[0px_1px_3px_rgba(15,23,41,0.24)] transition-transform duration-200 ease-out transform ${knobTranslate}`}
      />
    </button>
  );
}

// Appliance Icon Helper
function ApplianceIcon({ type, className = "size-[18px]" }: { type: ApplianceType; className?: string }) {
  if (type === "lighting") {
    return <IconLightbulb className={className} />;
  }
  if (type === "cooling") {
    return <IconFan className={className} />;
  }
  if (type === "media") {
    return <IconTv className={className} />;
  }
  if (type === "climate") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="12" rx="2" />
        <line x1="6" y1="12" x2="6.01" y2="12" strokeWidth="2.5" />
        <line x1="10" y1="12" x2="10.01" y2="12" strokeWidth="2.5" />
        <path d="M4 16c2 2 4 2 8 2s6 0 8-2" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

// Room Icon Helper
function RoomIcon({ room, className = "size-[14px]" }: { room: string; className?: string }) {
  if (room === "Living room") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
        <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0z" />
        <path d="M4 18v2" />
        <path d="M20 18v2" />
      </svg>
    );
  }
  if (room === "Bedroom") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
      </svg>
    );
  }
  if (room === "Kitchen") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2v20" />
        <path d="M6 2v20" />
        <path d="M6 12h12" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

export default function Hero() {
  const [appliances, setAppliances] = useState<Appliance[]>(INITIAL_APPLIANCES);
  const [selectedRoom, setSelectedRoom] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"home" | "appliances" | "settings">("home");

  const toggleAppliance = (id: string) => {
    setAppliances((prev) =>
      prev.map((app) => (app.id === id ? { ...app, on: !app.on } : app))
    );
  };

  const turnAllOn = () => {
    setAppliances((prev) => prev.map((app) => ({ ...app, on: true })));
  };

  const turnAllOff = () => {
    setAppliances((prev) => prev.map((app) => ({ ...app, on: false })));
  };

  const toggleRoom = (roomName: string, shouldTurnOn: boolean) => {
    setAppliances((prev) =>
      prev.map((app) => (app.room === roomName ? { ...app, on: shouldTurnOn } : app))
    );
  };

  // Live counts for dynamic state
  const totalCount = appliances.length;
  const activeCount = appliances.filter((a) => a.on).length;
  const offCount = totalCount - activeCount;

  // Synced state for the floating Ceiling Light quick tile
  const ceilingLight = appliances.find((a) => a.id === "living-ceiling-light");
  const ceilingLightOn = ceilingLight ? ceilingLight.on : true;

  // Filtered rooms
  const roomsToDisplay =
    selectedRoom === "All"
      ? (["Living room", "Bedroom", "Kitchen"] as const)
      : ([selectedRoom] as const);

  return (
    <section
      aria-label="Hero"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #eaf3ff 0%, rgba(234, 243, 255, 0.7) 35%, rgba(245, 248, 252, 0) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-[72px] lg:pb-[88px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Copy Column (Figma: 600px width max) */}
        <div className="w-full lg:w-[560px] flex flex-col items-start gap-7 shrink-0">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#d8e1ec] rounded-full px-3.5 py-2 shadow-xs">
            <IconFamilyHome className="w-[18px] h-[18px] text-[#0066db]" />
            <span className="text-[12px] font-semibold text-[#0052b3] tracking-[0.96px] uppercase">
              SMART HOME FOR BANGLADESH
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-[#0e1726] tracking-[-1.5px] leading-[1.12]">
            Your whole home,<br />one tap away.
          </h1>

          {/* Lead Paragraph */}
          <p className="text-lg lg:text-[18px] text-[#4a5a70] leading-[28px] max-w-[540px]">
            Control lights, fans, AC, TV, water pump and more from one app. It
            works on your home Wi-Fi, even when the internet is down.
          </p>

          {/* Store Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <StoreBadge store="Google Play" />
            <StoreBadge store="App Store" />
          </div>

          {/* Secondary Actions Row */}
          <div className="flex flex-wrap items-center gap-5 pt-1">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center h-[48px] px-6 rounded-full bg-white/75 backdrop-blur-md border border-white/90 shadow-[0px_8px_32px_rgba(10,42,92,0.12)] text-[#0066db] font-semibold text-[16px] transition-all duration-200 hover:bg-white hover:border-[#0066db] hover:shadow-lg hover:-translate-y-0.5 active:scale-98 cursor-pointer"
            >
              See how it works
            </a>

            <div className="inline-flex items-center gap-2 text-[#4a5a70] text-[14px]">
              <IconCheckCircle className="w-[18px] h-[18px] text-[#187a43]" />
              <span>
                Free app · English &amp;{" "}
                <span className="font-bengali font-medium">বাংলা</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Hero Visual Stage (Figma 4238:661: 540px wide by 680px tall) */}
        <div className="relative w-full max-w-[540px] h-[680px] shrink-0 select-none">
          {/* Subtle Ambient Radial Ring (Figma 4238:663: size 480px, left 30px, top 100px) */}
          <div className="absolute left-[30px] top-[100px] w-[480px] h-[480px] rounded-full border border-[#4c8dff]/25 bg-gradient-to-tr from-[#4c8dff]/15 via-blue-200/10 to-transparent blur-2xl pointer-events-none" />

          {/* 1. Floating Card: Left - Autoral MH-8 Device (Figma 4238:714: left -150px, top 430px, width 280px) */}
          <div className="hidden lg:flex absolute left-[-150px] top-[430px] z-30 w-[280px] bg-white rounded-[20px] p-4 items-center gap-3 shadow-[0px_8px_16px_rgba(10,42,92,0.12)] border border-[#e5edff] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default">
            <div className="w-12 h-12 rounded-[14px] bg-[#eaf3ff] flex items-center justify-center text-[#0066db] shrink-0">
              <IconRouter className="w-6 h-6 text-[#0066db]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[16px] font-medium text-[#0e1726] truncate">
                Autoral MH-8
              </div>
              <div className="text-[12px] text-[#4a5a70] truncate">
                {activeCount} of {totalCount} channels in use
              </div>
              <div className="flex items-center gap-1.5 text-[12px] mt-0.5">
                <span className="w-2 h-2 rounded-full bg-[#187a43]" />
                <span className="text-[#0e1726] font-medium">Online</span>
              </div>
            </div>
            <div className="text-[#4a5a70] shrink-0">
              <svg className="w-5 h-5 -rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* 2. Floating Card: Right - Ceiling Light Quick Tile (Figma 4238:730: left 400px, top 170px, width 158px, height 120px) */}
          <div
            onClick={() => toggleAppliance("living-ceiling-light")}
            className={`hidden lg:flex absolute left-[400px] top-[170px] z-30 w-[158px] h-[120px] rounded-[16px] p-3.5 flex-col justify-between shadow-[0px_8px_16px_rgba(10,42,92,0.12)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-98 ${
              ceilingLightOn
                ? "bg-[#ffedbf] border border-amber-300/80 text-[#4a310d]"
                : "bg-[#edf2f8] border border-[#d8e1ec] text-[#0e1726]"
            }`}
          >
            <div className="flex items-start justify-between w-full">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-xs">
                <IconLightbulb className={`w-5 h-5 ${ceilingLightOn ? "text-[#b45309]" : "text-neutral-500"}`} />
              </div>
              <ToggleSwitch
                checked={ceilingLightOn}
                onChange={() => toggleAppliance("living-ceiling-light")}
                size="normal"
              />
            </div>
            <div>
              <div className="text-[16px] font-semibold leading-tight">
                Ceiling Light
              </div>
              <div className="text-[12px] opacity-80 mt-0.5">
                {ceilingLightOn ? "On" : "Off"}
              </div>
            </div>
          </div>

          {/* 3. Floating Badge: Right - On home Wi-Fi (Figma 4238:742: left 396px, top 470px, height 35px) */}
          <div className="hidden lg:flex absolute left-[396px] top-[470px] z-30 h-[35px] bg-white/80 backdrop-blur-md border border-white/90 rounded-[14px] px-3.5 items-center gap-2 shadow-[0px_10px_30px_rgba(10,42,92,0.14)] transition-all duration-300 hover:-translate-y-0.5 cursor-default">
            <IconWifi className="w-4 h-4 text-[#0066db]" />
            <span className="text-[14px] font-medium text-[#0e1726] whitespace-nowrap">
              On home Wi-Fi
            </span>
          </div>

          {/* iPhone 17 Pro Mockup Frame (Figma 4271:13218: exact Silver Titanium chassis) */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:left-[118px] lg:translate-x-0 top-[15px] z-20">
            {/* Authentic Silver Titanium iPhone Chassis (5px polished titanium rim with specular reflection) */}
            <div className="relative rounded-[48px] p-[5px] bg-gradient-to-b from-[#ffffff] via-[#d6dce6] to-[#9aa4b4] shadow-[0px_20px_50px_rgba(10,42,92,0.2),0px_0px_0px_1px_rgba(255,255,255,0.95)_inset,0px_1px_3px_rgba(0,0,0,0.18)] ring-1 ring-black/15">
              {/* Hardware buttons simulation on Silver Titanium chassis */}
              <div className="absolute -left-[2.5px] top-24 w-[2.5px] h-6 bg-gradient-to-b from-[#f5f7fa] to-[#b8c0cc] border border-[#c4ccd8] rounded-l-xs shadow-xs" />
              <div className="absolute -left-[2.5px] top-36 w-[2.5px] h-11 bg-gradient-to-b from-[#f5f7fa] to-[#b8c0cc] border border-[#c4ccd8] rounded-l-xs shadow-xs" />
              <div className="absolute -left-[2.5px] top-52 w-[2.5px] h-11 bg-gradient-to-b from-[#f5f7fa] to-[#b8c0cc] border border-[#c4ccd8] rounded-l-xs shadow-xs" />
              <div className="absolute -right-[2.5px] top-40 w-[2.5px] h-14 bg-gradient-to-b from-[#f5f7fa] to-[#b8c0cc] border border-[#c4ccd8] rounded-r-xs shadow-xs" />

              {/* iPhone Inner Glass Screen (Exact Figma 298px x 648px) */}
              <div className="relative w-[298px] h-[648px] rounded-[43px] overflow-hidden bg-[#f5f8fc] border-[2.5px] border-[#0c1017] flex flex-col justify-between">
                {/* Dynamic Island & Status Bar (Fixed at Top, exact 44px) */}
                <div className="absolute top-0 inset-x-0 h-[44px] px-4 flex items-center justify-between z-30 pointer-events-none text-[#0e1726] pt-1 bg-[#f5f8fc]/85 backdrop-blur-md border-b border-[#0e1726]/5">
                  {/* Time */}
                  <div className="w-12 text-[13px] font-semibold tracking-tight text-center">
                    9:41
                  </div>

                  {/* Dynamic Island */}
                  <div className="w-[96px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-xs">
                    <div className="size-2.5 rounded-full bg-[#181a20] border border-neutral-800" />
                    <div className="size-2 rounded-full bg-[#0a1128] border border-blue-950/60" />
                  </div>

                  {/* Trailing: Cellular, Wi-Fi, Battery */}
                  <div className="w-12 flex items-center justify-end gap-1.5">
                    <div className="flex items-end gap-[1px] h-2.5">
                      <span className="w-[2px] h-1 bg-[#0e1726] rounded-2xs" />
                      <span className="w-[2px] h-1.5 bg-[#0e1726] rounded-2xs" />
                      <span className="w-[2px] h-2 bg-[#0e1726] rounded-2xs" />
                      <span className="w-[2px] h-2.5 bg-[#0e1726] rounded-2xs" />
                    </div>
                    <IconWifi className="w-3.5 h-3.5 text-[#0e1726]" />
                    <div className="w-[18px] h-[9px] rounded-[3px] border border-[#0e1726] p-[1px] flex items-center relative">
                      <div className="w-full h-full bg-[#0e1726] rounded-2xs" />
                      <div className="w-[1px] h-[3px] bg-[#0e1726] rounded-r-2xs absolute -right-[2px] top-[2px]" />
                    </div>
                  </div>
                </div>

                {/* Scrollable Dynamic App Body Container */}
                <div className="flex-1 overflow-y-auto overscroll-contain pt-12 pb-24 px-3 space-y-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {/* 1. Header: Salutation & User Actions */}
                  <div className="flex items-center justify-between px-1">
                    <div>
                      <div className="text-[12px] text-[#4a5a70] leading-none mb-1">
                        Good evening
                      </div>
                      <div className="text-[18px] font-semibold text-[#0e1726] leading-tight">
                        Abu Taher Molla
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        aria-label="Add device"
                        className="w-8 h-8 rounded-full bg-white/70 hover:bg-white border border-white/90 backdrop-blur-md flex items-center justify-center text-[#0e1726] shadow-xs cursor-pointer active:scale-95 transition-all"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label="User Profile"
                        className="w-8 h-8 rounded-full bg-white/70 hover:bg-white border border-white/90 backdrop-blur-md flex items-center justify-center text-[#0e1726] shadow-xs cursor-pointer active:scale-95 transition-all"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* 2. Frosted Summary Card */}
                  <div className="bg-white/75 backdrop-blur-md border border-white/90 rounded-[20px] p-2.5 shadow-[0px_8px_24px_rgba(10,42,92,0.08)] flex flex-col gap-2">
                    {/* Status row: Connection & Devices */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#f7f7f7] rounded-[10px] p-1.5 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#e3f5ea] flex items-center justify-center text-[#187a43] shrink-0">
                          <IconWifi className="w-3 h-3 text-[#187a43]" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] text-[#4a5a70] leading-none">Connection</div>
                          <div className="text-[10px] font-semibold text-[#0e1726] flex items-center gap-1 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#187a43]" />
                            <span className="truncate">Home Wi-Fi</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f7f7f7] rounded-[10px] p-1.5 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#e3f5ea] flex items-center justify-center text-[#187a43] shrink-0">
                          <IconRouter className="w-3 h-3 text-[#187a43]" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] text-[#4a5a70] leading-none">Devices</div>
                          <div className="text-[10px] font-semibold text-[#0e1726] flex items-center gap-1 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#187a43]" />
                            <span className="truncate">2 of 2 online</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Headline & live count */}
                    <div className="flex items-center justify-between pt-0.5">
                      <div>
                        <div className="text-[20px] font-bold text-[#0e1726] tracking-tight leading-none">
                          {activeCount} appliances on
                        </div>
                        <div className="text-[10.5px] text-[#4a5a70] mt-1">
                          {offCount} off · {totalCount} appliances
                        </div>
                      </div>
                      {/* Active type indicators */}
                      <div className="flex items-center gap-1.5">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          appliances.some((a) => a.type === "lighting" && a.on)
                            ? "bg-[#ffedbf] text-amber-800 shadow-2xs"
                            : "bg-neutral-100 text-neutral-400"
                        }`}>
                          <IconLightbulb className="w-3.5 h-3.5" />
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          appliances.some((a) => a.type === "cooling" && a.on)
                            ? "bg-[#d4f3f7] text-teal-800 shadow-2xs"
                            : "bg-neutral-100 text-neutral-400"
                        }`}>
                          <IconFan className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Global actions: All on / All off */}
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      <button
                        type="button"
                        onClick={turnAllOn}
                        className="h-7.5 rounded-full bg-[#eaf3ff] hover:bg-[#d8e8ff] active:scale-98 transition-all flex items-center justify-center gap-1.5 text-[#0052b3] font-semibold text-[12px] cursor-pointer"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="5" />
                          <line x1="12" y1="1" x2="12" y2="3" />
                          <line x1="12" y1="21" x2="12" y2="23" />
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                          <line x1="1" y1="12" x2="3" y2="12" />
                          <line x1="21" y1="12" x2="23" y2="12" />
                        </svg>
                        All on
                      </button>
                      <button
                        type="button"
                        onClick={turnAllOff}
                        className="h-7.5 rounded-full bg-[#eaf3ff] hover:bg-[#d8e8ff] active:scale-98 transition-all flex items-center justify-center gap-1.5 text-[#0052b3] font-semibold text-[12px] cursor-pointer"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                          <line x1="12" y1="2" x2="12" y2="12" />
                        </svg>
                        All off
                      </button>
                    </div>
                  </div>

                  {/* 3. Horizontal Room Filter Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {ROOM_TABS.map((tab) => {
                      const isSelected = selectedRoom === tab;
                      return (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setSelectedRoom(tab)}
                          className={`h-6.5 px-2.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#0e1726] text-white shadow-xs"
                              : "bg-white border border-[#d8e1ec] text-[#0e1726] hover:bg-neutral-50"
                          }`}
                        >
                          {tab}
                        </button>
                      );
                    })}
                  </div>

                  {/* 4. Room Sections with Device Grids */}
                  {roomsToDisplay.map((roomName) => {
                    const roomApps = appliances.filter((a) => a.room === roomName);
                    if (roomApps.length === 0) return null;
                    const roomActiveCount = roomApps.filter((a) => a.on).length;
                    const allRoomOn = roomActiveCount === roomApps.length;

                    return (
                      <div key={roomName} className="space-y-1.5">
                        {/* Room Header */}
                        <div className="flex items-center justify-between px-1">
                          <div className="flex items-center gap-1.5">
                            <RoomIcon room={roomName} className="w-3.5 h-3.5 text-[#4a5a70]" />
                            <span className="text-[13px] font-semibold text-[#0e1726]">
                              {roomName}
                            </span>
                            <span className="bg-[#edf2f8] text-[#0e1726] text-[9.5px] px-1.5 py-0.5 rounded-full font-medium">
                              {roomActiveCount} on
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleRoom(roomName, !allRoomOn)}
                            className="text-[11px] font-semibold text-[#0052b3] hover:underline cursor-pointer"
                          >
                            {allRoomOn ? "Turn all off" : "Turn all on"}
                          </button>
                        </div>

                        {/* Device Tiles Grid (Exact 2-column Figma layout) */}
                        <div className="grid grid-cols-2 gap-2">
                          {roomApps.map((device) => {
                            let bgClass = "bg-[#edf2f8] text-[#0e1726]";
                            if (device.on) {
                              if (device.type === "lighting") {
                                bgClass = "bg-[#ffedbf] text-[#4a310d]";
                              } else if (device.type === "cooling") {
                                bgClass = "bg-[#d4f3f7] text-[#06404a]";
                              } else if (device.type === "climate") {
                                bgClass = "bg-[#e0e7ff] text-[#1e1b4b]";
                              } else if (device.type === "media") {
                                bgClass = "bg-[#fce7f3] text-[#831843]";
                              } else if (device.type === "water") {
                                bgClass = "bg-[#dbeafe] text-[#1e3a8a]";
                              }
                            }

                            return (
                              <div
                                key={device.id}
                                onClick={() => toggleAppliance(device.id)}
                                className={`rounded-[14px] p-2 flex flex-col justify-between h-[82px] transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] ${bgClass}`}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center shadow-xs">
                                    <ApplianceIcon type={device.type} className="w-3.5 h-3.5 text-[#0e1726]" />
                                  </div>
                                  <ToggleSwitch
                                    checked={device.on}
                                    onChange={() => toggleAppliance(device.id)}
                                    size="small"
                                  />
                                </div>
                                <div>
                                  <div className="text-[11.5px] font-semibold leading-tight truncate">
                                    {device.name}
                                  </div>
                                  <div className="text-[9.5px] opacity-80 mt-0.5">
                                    {device.on ? "On" : "Off"}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 5. Fixed Glass Bottom Nav Pill */}
                <div className="absolute bottom-2.5 inset-x-2.5 z-30 pointer-events-auto">
                  <div className="bg-white/80 backdrop-blur-xl border border-white/90 rounded-[28px] p-1 shadow-[0px_6px_20px_rgba(10,42,92,0.12)] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveTab("home")}
                      className={`flex-1 h-8.5 rounded-[24px] flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                        activeTab === "home"
                          ? "bg-[#eaf3ff] text-[#0066db]"
                          : "text-[#4a5a70] hover:text-[#0e1726]"
                      }`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill={activeTab === "home" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                      <span className="text-[9.5px] font-semibold leading-none">Home</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("appliances")}
                      className={`flex-1 h-8.5 rounded-[24px] flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                        activeTab === "appliances"
                          ? "bg-[#eaf3ff] text-[#0066db]"
                          : "text-[#4a5a70] hover:text-[#0e1726]"
                      }`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill={activeTab === "appliances" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                      <span className="text-[9.5px] font-medium leading-none">Appliances</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("settings")}
                      className={`flex-1 h-8.5 rounded-[24px] flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                        activeTab === "settings"
                          ? "bg-[#eaf3ff] text-[#0066db]"
                          : "text-[#4a5a70] hover:text-[#0e1726]"
                      }`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                      <span className="text-[9.5px] font-medium leading-none">Settings</span>
                    </button>
                  </div>
                </div>

                {/* 6. Home Gesture Indicator Bar */}
                <div className="absolute bottom-1 inset-x-0 flex justify-center z-30 pointer-events-none">
                  <div className="w-20 h-[3px] bg-[#0e1726] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
