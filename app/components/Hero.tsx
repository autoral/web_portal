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
  // Living room (matches screenshot: Ceiling Light On, Wall Light Off, Ceiling Fan On, TV Off)
  { id: "living-ceiling-light", name: "Ceiling Light", room: "Living room", type: "lighting", on: true },
  { id: "living-wall-light", name: "Wall Light", room: "Living room", type: "lighting", on: false },
  { id: "living-ceiling-fan", name: "Ceiling Fan", room: "Living room", type: "cooling", on: true },
  { id: "living-tv", name: "TV", room: "Living room", type: "media", on: false },
  // Bedroom (matches Image 4: Bedroom Light Off, Bedroom Fan On)
  { id: "bedroom-light", name: "Bedroom Light", room: "Bedroom", type: "lighting", on: false },
  { id: "bedroom-fan", name: "Bedroom Fan", room: "Bedroom", type: "cooling", on: true },
  // Kitchen (matches Image 4: Kitchen Light On)
  { id: "kitchen-light", name: "Kitchen Light", room: "Kitchen", type: "lighting", on: true },
  // Kids room (matches Image 4: Study Light Off, Kids room AC Off)
  { id: "study-light", name: "Study Light", room: "Kids room", type: "lighting", on: false },
  { id: "kids-ac", name: "Kids room AC", room: "Kids room", type: "climate", on: false },
  // Veranda (matches Image 4: Water pump Off)
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
        checked
          ? "bg-[#0066db] dark:bg-[#84beff]"
          : "bg-[#5e6e84] dark:bg-[#28384b]"
      }`}
    >
      <span
        className={`${knobSize} rounded-full shadow-[0px_1px_3px_rgba(15,23,41,0.24)] transition-transform duration-200 ease-out transform ${knobTranslate} ${
          checked
            ? "bg-white dark:bg-[#0d223f]"
            : "bg-white dark:bg-[#556c87]"
        }`}
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
  const [islandToast, setIslandToast] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [applianceCategoryFilter, setApplianceCategoryFilter] = useState<string>("All");
  const [lang, setLang] = useState<"en" | "bn">("en");

  const triggerIslandToast = (msg: string) => {
    setIslandToast(msg);
    setTimeout(() => {
      setIslandToast((current) => (current === msg ? null : current));
    }, 2200);
  };

  const toggleAppliance = (id: string) => {
    setAppliances((prev) =>
      prev.map((app) => {
        if (app.id === id) {
          const next = !app.on;
          triggerIslandToast(`${app.name} turned ${next ? "On" : "Off"}`);
          return { ...app, on: next };
        }
        return app;
      })
    );
  };

  const turnAllOn = () => {
    setAppliances((prev) => prev.map((app) => ({ ...app, on: true })));
    triggerIslandToast("All appliances turned on");
  };

  const turnAllOff = () => {
    setAppliances((prev) => prev.map((app) => ({ ...app, on: false })));
    triggerIslandToast("All appliances turned off");
  };

  const toggleRoom = (roomName: string, shouldTurnOn: boolean) => {
    setAppliances((prev) =>
      prev.map((app) => (app.room === roomName ? { ...app, on: shouldTurnOn } : app))
    );
    triggerIslandToast(`${roomName}: ${shouldTurnOn ? "All on" : "All off"}`);
  };

  // Live counts for dynamic state
  const totalCount = appliances.length;
  const activeCount = appliances.filter((a) => a.on).length;
  const offCount = totalCount - activeCount;

  // Synced state for the floating Ceiling Light quick tile
  const ceilingLight = appliances.find((a) => a.id === "living-ceiling-light");
  const ceilingLightOn = ceilingLight ? ceilingLight.on : true;

  // Filtered rooms (when "All" is active, displays Living room at top and enables scrolling down through all rooms, matching Image 3 & Image 4)
  const roomsToDisplay =
    selectedRoom === "All"
      ? (["Living room", "Bedroom", "Kitchen", "Kids room", "Veranda"] as const)
      : ([selectedRoom] as const);

  return (
    <section
      aria-label="Hero"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#eaf3ff] via-[#eaf3ff]/70 to-transparent dark:from-[#0b2244] dark:via-[#0c182c] dark:to-[#0a0f17] transition-colors duration-200"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-[72px] lg:pb-[88px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Copy Column (Figma: 600px width max) */}
        <div className="w-full lg:w-[600px] flex flex-col items-center lg:items-start text-center lg:text-left gap-7 shrink-0">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-[#151d29] border border-[#d8e1ec] dark:border-[#2a3546] rounded-full px-3.5 py-2 shadow-xs transition-colors">
            <IconFamilyHome className="w-[18px] h-[18px] text-[#0066db] dark:text-[#84beff]" />
            <span className="text-[12px] font-semibold text-[#0052b3] dark:text-[#84beff] tracking-[0.96px] uppercase">
              SMART HOME FOR BANGLADESH
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-[#0e1726] dark:text-[#edf2f8] tracking-[-1.5px] leading-[1.12]">
            Your whole home,<br />one tap away.
          </h1>

          {/* Lead Paragraph */}
          <p className="text-lg lg:text-[18px] text-[#4a5a70] dark:text-[#b4c1d1] leading-[28px] max-w-[540px] mx-auto lg:mx-0">
            Control lights, fans, AC, TV, water pump and more from one app. It
            works on your home Wi-Fi, even when the internet is down.
          </p>

          {/* Store Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            <StoreBadge store="Google Play" />
            <StoreBadge store="App Store" />
          </div>

          {/* Secondary Actions Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-1 w-full sm:w-auto">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center h-[48px] px-6 rounded-full bg-white/75 dark:bg-[#151d29]/85 backdrop-blur-md border border-white/90 dark:border-[#2a3546] shadow-[0px_8px_32px_rgba(10,42,92,0.12)] text-[#0066db] dark:text-[#84beff] font-semibold text-[16px] transition-all duration-200 hover:bg-white dark:hover:bg-[#1e2836] hover:border-[#0066db] dark:hover:border-[#84beff] hover:shadow-lg hover:-translate-y-0.5 active:scale-98 cursor-pointer w-full sm:w-auto"
            >
              See how it works
            </a>

            <div className="inline-flex items-center gap-2 text-[#4a5a70] dark:text-[#b4c1d1] text-[14px]">
              <IconCheckCircle className="w-[18px] h-[18px] text-[#187a43] dark:text-[#5cc98a]" />
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

          {/* 1. Floating Card: Left - Autoral MH-8 Device (Matches Figma/User reference image) */}
          <div
            onClick={() => setShowAddModal(true)}
            className="hidden lg:flex absolute left-[-115px] top-[392px] z-30 w-[265px] bg-white dark:bg-[#151d29] rounded-[20px] p-3.5 items-center gap-3 shadow-[0px_16px_40px_rgba(10,42,92,0.18)] border border-[#e8effc] dark:border-[#2a3546] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          >
            <div className="w-11 h-11 rounded-[13px] bg-[#eaf3ff] dark:bg-[#0b2a55] flex items-center justify-center text-[#0066db] dark:text-[#84beff] shrink-0">
              <IconRouter className="w-6 h-6 text-[#0066db] dark:text-[#84beff]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold text-[#0e1726] dark:text-[#edf2f8] truncate">
                Autoral MH-8
              </div>
              <div className="text-[12px] text-[#5e6e84] dark:text-[#8b9aae] truncate">
                6 of 8 channels in use
              </div>
              <div className="flex items-center gap-1.5 text-[11.5px] mt-0.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#0e1726] dark:bg-white text-white dark:text-[#0e1726] flex items-center justify-center text-[9px] font-bold">
                  ✓
                </span>
                <span className="text-[#0e1726] dark:text-[#edf2f8] font-medium">Online</span>
              </div>
            </div>
            <div className="text-[#8798ad] dark:text-[#8b9aae] shrink-0 pr-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>

          {/* 2. Floating Card: Right - Ceiling Light Quick Tile (Matches Figma/User reference image) */}
          <div
            onClick={() => toggleAppliance("living-ceiling-light")}
            className={`hidden lg:flex absolute left-[370px] top-[182px] z-30 w-[158px] h-[122px] rounded-[22px] p-3.5 flex-col justify-between shadow-[0px_16px_40px_rgba(10,42,92,0.18)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-98 ${
              ceilingLightOn
                ? "bg-[#ffedbf] dark:bg-[#4a310d] border border-[#fde49e] dark:border-[#694613] text-[#4a310d] dark:text-[#ffedbf]"
                : "bg-[#edf2f8] dark:bg-[#1e2836] border border-[#d8e1ec] dark:border-[#2a3546] text-[#0e1726] dark:text-[#edf2f8]"
            }`}
          >
            <div className="flex items-start justify-between w-full">
              <div className="w-9 h-9 rounded-full bg-white dark:bg-[#151d29] flex items-center justify-center shadow-xs">
                <IconLightbulb className={`w-5 h-5 ${ceilingLightOn ? "text-[#b45309] dark:text-[#ffedbf]" : "text-neutral-500 dark:text-neutral-400"}`} />
              </div>
              <ToggleSwitch
                checked={ceilingLightOn}
                onChange={() => toggleAppliance("living-ceiling-light")}
                size="normal"
              />
            </div>
            <div>
              <div className="text-[15px] font-semibold leading-tight">
                Ceiling Light
              </div>
              <div className="text-[12px] opacity-80 mt-0.5">
                {ceilingLightOn ? "On" : "Off"}
              </div>
            </div>
          </div>

          {/* 3. Floating Badge: Right - On home Wi-Fi (Matches Figma/User reference image) */}
          <div className="hidden lg:flex absolute left-[408px] top-[396px] z-30 h-[38px] bg-white/85 dark:bg-[#151d29]/90 backdrop-blur-md border border-white/90 dark:border-[#2a3546] rounded-full px-3.5 items-center gap-2 shadow-[0px_12px_32px_rgba(10,42,92,0.16)] transition-all duration-300 hover:-translate-y-0.5 cursor-default">
            <IconWifi className="w-4 h-4 text-[#0e1726] dark:text-[#edf2f8]" />
            <span className="text-[13px] font-medium text-[#0e1726] dark:text-[#edf2f8] whitespace-nowrap">
              On home Wi-Fi
            </span>
          </div>

          {/* iPhone 17 Pro Mockup Frame (Using official /images/iphone-17-pro.svg) */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:left-[104px] lg:translate-x-0 top-0 z-20 w-[333px] h-[681px]">
            {/* Interactive Phone Screen - Positioned under the transparent SVG screen cutout */}
            <div
              className="absolute overflow-hidden bg-[#f5f8fc] dark:bg-[#0a0f17] rounded-[42px] flex flex-col justify-between transition-colors duration-200"
              style={{
                top: "17px",
                left: "17.8px",
                width: "297.5px",
                height: "646.8px",
              }}
            >
              {/* Dynamic Island Expandable Toast Banner */}
              <div
                className={`absolute top-[7px] left-1/2 -translate-x-1/2 z-25 flex items-center justify-center pointer-events-none transition-all duration-300 ease-out ${
                  islandToast
                    ? "h-[30px] px-3.5 bg-black text-white rounded-full shadow-[0px_4px_16px_rgba(0,0,0,0.5)] opacity-100 scale-100"
                    : "h-[26px] w-[92px] bg-black opacity-0 scale-95"
                }`}
              >
                {islandToast && (
                  <div className="flex items-center gap-1.5 whitespace-nowrap text-[10.5px] font-medium text-white tracking-tight">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                    <span className="truncate max-w-[190px]">{islandToast}</span>
                  </div>
                )}
              </div>

              {/* Status Bar (Fixed at Top, exactly 44px, aligned around the SVG Dynamic Island) */}
              <div className="absolute top-0 inset-x-0 h-[44px] px-4.5 flex items-center justify-between z-20 pointer-events-none text-[#0e1726] dark:text-white pt-1.5">
                {/* Time */}
                <div className="w-12 text-[13px] font-semibold tracking-tight text-center">
                  9:41
                </div>

                {/* Empty Center Spacer reserved for SVG Dynamic Island (92px wide) */}
                <div className="w-[92px] h-[26px]" />

                {/* Trailing: Cellular, Wi-Fi, Battery */}
                <div className="w-12 flex items-center justify-end gap-1.5">
                  <div className="flex items-end gap-[1px] h-2.5">
                    <span className="w-[2px] h-1 bg-[#0e1726] dark:bg-white rounded-2xs" />
                    <span className="w-[2px] h-1.5 bg-[#0e1726] dark:bg-white rounded-2xs" />
                    <span className="w-[2px] h-2 bg-[#0e1726] dark:bg-white rounded-2xs" />
                    <span className="w-[2px] h-2.5 bg-[#0e1726] dark:bg-white rounded-2xs" />
                  </div>
                  <IconWifi className="w-3.5 h-3.5 text-[#0e1726] dark:text-white" />
                  <div className="w-[18px] h-[9px] rounded-[3px] border border-[#0e1726] dark:border-white p-[1px] flex items-center relative">
                    <div className="w-full h-full bg-[#0e1726] dark:bg-white rounded-2xs" />
                    <div className="w-[1px] h-[3px] bg-[#0e1726] dark:bg-white rounded-r-2xs absolute -right-[2px] top-[2px]" />
                  </div>
                </div>
              </div>

              {/* Scrollable Dynamic App Body Container */}
              <div className="flex-1 overflow-y-auto overscroll-contain pt-12 pb-24 px-3 space-y-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {/* VIEW 1: HOME TAB */}
                {activeTab === "home" && (
                  <>
                    {/* 1. Header: Salutation & User Actions */}
                    <div className="flex items-center justify-between px-1">
                      <div>
                        <div className="text-[12px] text-[#4a5a70] dark:text-[#8b9aae] leading-none mb-1">
                          Good evening
                        </div>
                        <div className="text-[18px] font-semibold text-[#0e1726] dark:text-white leading-tight">
                          Abu Taher Molla
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setShowAddModal(true)}
                          aria-label="Add device"
                          className="w-8 h-8 rounded-full bg-white/70 dark:bg-[#1a2332] hover:bg-white dark:hover:bg-[#222e40] border border-white/90 dark:border-[#2a3546] backdrop-blur-md flex items-center justify-center text-[#0e1726] dark:text-white shadow-xs cursor-pointer active:scale-95 transition-all"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowProfileModal(true)}
                          aria-label="User Profile"
                          className="w-8 h-8 rounded-full bg-white/70 dark:bg-[#1a2332] hover:bg-white dark:hover:bg-[#222e40] border border-white/90 dark:border-[#2a3546] backdrop-blur-md flex items-center justify-center text-[#0e1726] dark:text-white shadow-xs cursor-pointer active:scale-95 transition-all"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* 2. Frosted Summary Card */}
                    <div className="bg-white/75 dark:bg-[#131d2a] backdrop-blur-md border border-white/90 dark:border-[#233144] rounded-[20px] p-2.5 shadow-[0px_8px_24px_rgba(10,42,92,0.08)] dark:shadow-none flex flex-col gap-2">
                      {/* Status row: Connection & Devices */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#f7f7f7] dark:bg-[#192433] rounded-[10px] p-1.5 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#e3f5ea] dark:bg-[#103024] flex items-center justify-center text-[#187a43] dark:text-[#5cc98a] shrink-0">
                            <IconWifi className="w-3 h-3 text-[#187a43] dark:text-[#5cc98a]" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[9px] text-[#4a5a70] dark:text-[#8b9aae] leading-none">Connection</div>
                            <div className="text-[10px] font-semibold text-[#0e1726] dark:text-white flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#187a43] dark:bg-[#5cc98a]" />
                              <span className="truncate">Home Wi-Fi</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f7f7f7] dark:bg-[#192433] rounded-[10px] p-1.5 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#e3f5ea] dark:bg-[#103024] flex items-center justify-center text-[#187a43] dark:text-[#5cc98a] shrink-0">
                            <IconRouter className="w-3 h-3 text-[#187a43] dark:text-[#5cc98a]" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[9px] text-[#4a5a70] dark:text-[#8b9aae] leading-none">Devices</div>
                            <div className="text-[10px] font-semibold text-[#0e1726] dark:text-white flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#187a43] dark:bg-[#5cc98a]" />
                              <span className="truncate">2 of 2 online</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Headline & live count */}
                      <div className="flex items-center justify-between pt-0.5">
                        <div>
                          <div className="text-[20px] font-bold text-[#0e1726] dark:text-white tracking-tight leading-none">
                            {activeCount} appliances on
                          </div>
                          <div className="text-[10.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-1">
                            {offCount} off · {totalCount} appliances
                          </div>
                        </div>
                        {/* Active type indicators */}
                        <div className="flex items-center gap-1.5">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                            appliances.some((a) => a.type === "lighting" && a.on)
                              ? "bg-[#ffedbf] dark:bg-[#4d3209] text-amber-800 dark:text-[#fcd34d] shadow-2xs"
                              : "bg-neutral-100 dark:bg-[#1e293b] text-neutral-400 dark:text-[#64748b]"
                          }`}>
                            <IconLightbulb className="w-3.5 h-3.5" />
                          </div>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                            appliances.some((a) => a.type === "cooling" && a.on)
                              ? "bg-[#d4f3f7] dark:bg-[#0c3942] text-teal-800 dark:text-[#5eead4] shadow-2xs"
                              : "bg-neutral-100 dark:bg-[#1e293b] text-neutral-400 dark:text-[#64748b]"
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
                          className="h-7.5 rounded-full bg-[#eaf3ff] dark:bg-[#0b2a55] hover:bg-[#d8e8ff] dark:hover:bg-[#0f366c] dark:border dark:border-[#1a447c] active:scale-98 transition-all flex items-center justify-center gap-1.5 text-[#0052b3] dark:text-[#84beff] font-semibold text-[12px] cursor-pointer"
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
                          className="h-7.5 rounded-full bg-[#eaf3ff] dark:bg-[#0b2a55] hover:bg-[#d8e8ff] dark:hover:bg-[#0f366c] dark:border dark:border-[#1a447c] active:scale-98 transition-all flex items-center justify-center gap-1.5 text-[#0052b3] dark:text-[#84beff] font-semibold text-[12px] cursor-pointer"
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
                                ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726] shadow-xs"
                                : "bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433]"
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
                      const hasActive = roomActiveCount > 0;

                      return (
                        <div key={roomName} className="space-y-1.5">
                          {/* Room Header */}
                          <div className="flex items-center justify-between px-1">
                            <div className="flex items-center gap-1.5">
                              <RoomIcon room={roomName} className="w-3.5 h-3.5 text-[#4a5a70] dark:text-[#8b9aae]" />
                              <span className="text-[13px] font-semibold text-[#0e1726] dark:text-white">
                                {roomName}
                              </span>
                              <span className="bg-[#edf2f8] dark:bg-[#192433] text-[#0e1726] dark:text-[#84beff] text-[9.5px] px-1.5 py-0.5 rounded-full font-medium">
                                {roomActiveCount} on
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => toggleRoom(roomName, !hasActive)}
                              className="text-[11px] font-semibold text-[#0052b3] dark:text-[#84beff] hover:underline cursor-pointer"
                            >
                              {hasActive ? "Turn all off" : "Turn all on"}
                            </button>
                          </div>

                          {/* Device Tiles Grid (Exact 2-column Figma layout) */}
                          <div className="grid grid-cols-2 gap-2">
                            {roomApps.map((device) => {
                              let bgClass = "bg-[#edf2f8] dark:bg-[#131d2a] dark:border dark:border-[#233144] text-[#0e1726] dark:text-white";
                              let iconBgClass = "bg-white dark:bg-[#1c293a] text-[#0e1726] dark:text-[#8b9aae]";
                              let subTextClass = "text-[10px] opacity-80 mt-0.5 text-[#4a5a70] dark:text-[#8b9aae]";
                              let titleClass = "text-[12px] font-semibold leading-tight truncate text-[#0e1726] dark:text-white";

                              if (device.on) {
                                if (device.type === "lighting") {
                                  bgClass = "bg-[#ffedbf] dark:bg-[#38240a] dark:border dark:border-[#5c3c12] text-[#4a310d] dark:text-[#fde68a]";
                                  iconBgClass = "bg-white dark:bg-[#52330a] text-amber-900 dark:text-[#fbbf24]";
                                  subTextClass = "text-[10px] opacity-80 mt-0.5 text-amber-800 dark:text-[#d97706]";
                                  titleClass = "text-[12px] font-semibold leading-tight truncate text-[#4a310d] dark:text-[#fde68a]";
                                } else if (device.type === "cooling") {
                                  bgClass = "bg-[#d4f3f7] dark:bg-[#092930] dark:border dark:border-[#114b58] text-[#06404a] dark:text-[#a5f3fc]";
                                  iconBgClass = "bg-white dark:bg-[#0e3f4a] text-teal-900 dark:text-[#22d3ee]";
                                  subTextClass = "text-[10px] opacity-80 mt-0.5 text-teal-800 dark:text-[#2dd4bf]";
                                  titleClass = "text-[12px] font-semibold leading-tight truncate text-[#06404a] dark:text-[#a5f3fc]";
                                } else {
                                  bgClass = "bg-[#eaf3ff] dark:bg-[#0c2445] dark:border dark:border-[#163e72] text-[#0052b3] dark:text-[#93c5fd]";
                                  iconBgClass = "bg-white dark:bg-[#103666] text-[#0052b3] dark:text-[#60a5fa]";
                                  subTextClass = "text-[10px] opacity-80 mt-0.5 text-[#0052b3] dark:text-[#60a5fa]";
                                  titleClass = "text-[12px] font-semibold leading-tight truncate text-[#0052b3] dark:text-[#93c5fd]";
                                }
                              }

                              return (
                                <div
                                  key={device.id}
                                  onClick={() => toggleAppliance(device.id)}
                                  className={`rounded-[15px] p-2.5 flex flex-col justify-between h-[80px] transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] ${bgClass}`}
                                >
                                  <div className="flex items-start justify-between">
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shadow-xs ${iconBgClass}`}>
                                      <ApplianceIcon type={device.type} className="w-3.5 h-3.5" />
                                    </div>
                                    <ToggleSwitch
                                      checked={device.on}
                                      onChange={() => toggleAppliance(device.id)}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <div className={titleClass}>
                                      {device.name}
                                    </div>
                                    <div className={subTextClass}>
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
                  </>
                )}

                {/* VIEW 2: APPLIANCES TAB */}
                {activeTab === "appliances" && (
                  <div className="space-y-2.5">
                    {/* Header */}
                    <div className="px-1">
                      <div className="text-[18px] font-bold text-[#0e1726] dark:text-white leading-tight">
                        All Appliances
                      </div>
                      <div className="text-[11px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5">
                        {activeCount} active · Load: ~{activeCount * 45 + 15}W
                      </div>
                    </div>

                    {/* Category Filter Chips */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                      {(["All", "lighting", "cooling", "climate", "media", "water"] as const).map((cat) => {
                        const isSelected = applianceCategoryFilter === cat;
                        const label = cat === "All" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1);
                        return (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setApplianceCategoryFilter(cat)}
                            className={`h-6.5 px-2.5 rounded-full text-[10.5px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726] shadow-xs"
                                : "bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433]"
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Channels List */}
                    <div className="space-y-1.5">
                      {appliances
                        .filter((a) => applianceCategoryFilter === "All" || a.type === applianceCategoryFilter)
                        .map((app, index) => (
                          <div
                            key={app.id}
                            onClick={() => toggleAppliance(app.id)}
                            className={`p-2.5 rounded-[14px] border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                              app.on
                                ? "bg-white dark:bg-[#131d2a] border-[#0066db]/40 dark:border-[#84beff]/40 shadow-xs"
                                : "bg-white/60 dark:bg-[#131d2a]/60 border-neutral-200/80 dark:border-[#233144] hover:bg-white dark:hover:bg-[#131d2a]"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                                app.on
                                  ? "bg-[#eaf3ff] dark:bg-[#0b2a55] text-[#0066db] dark:text-[#84beff]"
                                  : "bg-neutral-100 dark:bg-[#1c293a] text-neutral-400 dark:text-[#8b9aae]"
                              }`}>
                                <ApplianceIcon type={app.type} className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[12px] font-semibold text-[#0e1726] dark:text-white truncate">
                                  {app.name}
                                </div>
                                <div className="text-[10px] text-[#4a5a70] dark:text-[#8b9aae] flex items-center gap-1.5">
                                  <span>{app.room}</span>
                                  <span>·</span>
                                  <span className="font-mono text-[9px] text-[#0052b3] dark:text-[#84beff]">CH-{index + 1}</span>
                                </div>
                              </div>
                            </div>
                            <ToggleSwitch
                              checked={app.on}
                              onChange={() => toggleAppliance(app.id)}
                              size="small"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* VIEW 3: SETTINGS TAB */}
                {activeTab === "settings" && (
                  <div className="space-y-2.5">
                    {/* Header */}
                    <div className="px-1">
                      <div className="text-[18px] font-bold text-[#0e1726] dark:text-white leading-tight">
                        Settings &amp; Network
                      </div>
                      <div className="text-[11px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5">
                        Local-First Automation Hub
                      </div>
                    </div>

                    {/* Local Network Info */}
                    <div className="bg-white/80 dark:bg-[#131d2a] border border-white/90 dark:border-[#233144] rounded-[16px] p-3 shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-semibold text-[#0e1726] dark:text-white">Local Wi-Fi Network</span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#187a43] dark:text-[#5cc98a] bg-[#e3f5ea] dark:bg-[#103024] px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#187a43] dark:bg-[#5cc98a]" />
                          Online (12ms)
                        </span>
                      </div>
                      <div className="text-[11px] text-[#4a5a70] dark:text-[#8b9aae] space-y-1">
                        <div className="flex justify-between">
                          <span>Hub Model</span>
                          <span className="font-medium text-[#0e1726] dark:text-white">Autoral MH-8 (ESP32)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Local IP Address</span>
                          <span className="font-mono text-[#0052b3] dark:text-[#84beff]">192.168.1.105</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Control Protocol</span>
                          <span className="font-medium text-[#0e1726] dark:text-white">Direct HTTP (LAN)</span>
                        </div>
                      </div>
                    </div>

                    {/* Mode & Privacy */}
                    <div className="bg-white/80 dark:bg-[#131d2a] border border-white/90 dark:border-[#233144] rounded-[16px] p-3 shadow-xs space-y-2">
                      <div className="text-[12px] font-semibold text-[#0e1726] dark:text-white">Operation &amp; Privacy</div>
                      <div className="flex items-center justify-between py-1 border-b border-neutral-100 dark:border-[#233144]">
                        <div>
                          <div className="text-[11.5px] font-medium text-[#0e1726] dark:text-white">Guest Mode</div>
                          <div className="text-[9.5px] text-[#4a5a70] dark:text-[#8b9aae]">Local control without sign-in</div>
                        </div>
                        <span className="text-[10.5px] font-semibold text-[#0066db] dark:text-[#84beff] bg-[#eaf3ff] dark:bg-[#0b2a55] px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div>
                          <div className="text-[11.5px] font-medium text-[#0e1726] dark:text-white">Language</div>
                          <div className="text-[9.5px] text-[#4a5a70] dark:text-[#8b9aae]">App interface language</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setLang(lang === "en" ? "bn" : "en")}
                          className="h-6 px-2.5 rounded-full bg-neutral-100 dark:bg-[#192433] hover:bg-neutral-200 dark:hover:bg-[#233144] text-[11px] font-semibold text-[#0e1726] dark:text-white transition-all cursor-pointer"
                        >
                          {lang === "en" ? "English" : "বাংলা"}
                        </button>
                      </div>
                    </div>

                    {/* Cloud Remote Access (Lazy Auth) */}
                    <div className="bg-[#eaf3ff] dark:bg-[#0b2a55]/60 border border-[#d8e8ff] dark:border-[#1a447c] rounded-[16px] p-3 text-center space-y-1.5">
                      <div className="text-[12px] font-semibold text-[#0052b3] dark:text-[#84beff]">Remote Cloud Access</div>
                      <p className="text-[10px] text-[#4a5a70] dark:text-[#b4c1d1] leading-relaxed">
                        Local Wi-Fi control works always. Sign in only if you need outside-home control.
                      </p>
                      <button
                        type="button"
                        onClick={() => triggerIslandToast("Guest Mode: Sign-in optional")}
                        className="w-full h-7 rounded-full bg-[#0066db] dark:bg-[#84beff] text-white dark:text-[#071d3d] text-[11px] font-semibold hover:bg-[#0052b3] dark:hover:bg-[#a6d2ff] active:scale-98 transition-all cursor-pointer shadow-xs"
                      >
                        Sign in for Remote Access
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* MODAL 1: Add New Device */}
              {showAddModal && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-35 flex flex-col justify-end p-2.5 animate-in fade-in duration-200">
                  <div className="bg-white dark:bg-[#151d29] rounded-[22px] p-3.5 shadow-xl border border-neutral-200 dark:border-[#2a3546] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#eaf3ff] dark:bg-[#0b2a55] flex items-center justify-center text-[#0066db] dark:text-[#84beff]">
                          <IconRouter className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[13px] font-bold text-[#0e1726] dark:text-white">Add Hub / Module</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowAddModal(false)}
                        className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-[#1e2836] flex items-center justify-center text-neutral-600 dark:text-[#8b9aae] hover:bg-neutral-200 dark:hover:bg-[#2a3546] text-xs font-bold cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="bg-[#f5f8fc] dark:bg-[#192433] rounded-[14px] p-2.5 flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#187a43]/15 dark:bg-[#5cc98a]/20 flex items-center justify-center text-[#187a43] dark:text-[#5cc98a] shrink-0 animate-pulse">
                        <IconWifi className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11.5px] font-semibold text-[#0e1726] dark:text-white">Autoral MH-8 Detected</div>
                        <div className="text-[9.5px] text-[#4a5a70] dark:text-[#8b9aae]">BLE Beacon · Signal: -48 dBm</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setShowAddModal(false);
                          triggerIslandToast("Autoral MH-8 paired successfully");
                        }}
                        className="h-8 rounded-full bg-[#0066db] hover:bg-[#0052b3] text-white text-[11.5px] font-semibold cursor-pointer shadow-xs transition-all active:scale-98"
                      >
                        Connect via BLE
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowAddModal(false)}
                        className="h-8 rounded-full bg-neutral-100 dark:bg-[#1e2836] hover:bg-neutral-200 dark:hover:bg-[#2a3546] text-[#0e1726] dark:text-white text-[11.5px] font-semibold cursor-pointer transition-all active:scale-98"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* MODAL 2: User Profile */}
              {showProfileModal && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-35 flex flex-col justify-end p-2.5 animate-in fade-in duration-200">
                  <div className="bg-white dark:bg-[#151d29] rounded-[22px] p-3.5 shadow-xl border border-neutral-200 dark:border-[#2a3546] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-bold text-[#0e1726] dark:text-white">User Account</span>
                      <button
                        type="button"
                        onClick={() => setShowProfileModal(false)}
                        className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-[#1e2836] flex items-center justify-center text-neutral-600 dark:text-[#8b9aae] hover:bg-neutral-200 dark:hover:bg-[#2a3546] text-xs font-bold cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="flex items-center gap-3 py-1">
                      <div className="w-10 h-10 rounded-full bg-[#eaf3ff] dark:bg-[#0b2a55] border border-[#d8e8ff] dark:border-[#1a447c] flex items-center justify-center text-[#0066db] dark:text-[#84beff] font-bold text-[14px]">
                        AT
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#0e1726] dark:text-white">Abu Taher Molla</div>
                        <div className="text-[10px] text-[#4a5a70] dark:text-[#8b9aae]">Local Administrator · Guest Mode</div>
                      </div>
                    </div>

                    <div className="text-[10.5px] text-[#4a5a70] dark:text-[#b4c1d1] bg-[#f5f8fc] dark:bg-[#192433] p-2.5 rounded-[12px] leading-relaxed">
                      All preferences and relays are stored locally on this phone via SQLite. Zero cloud dependency.
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowProfileModal(false)}
                      className="w-full h-8 rounded-full bg-[#0e1726] dark:bg-white hover:bg-black dark:hover:bg-neutral-100 text-white dark:text-[#0e1726] text-[11.5px] font-semibold cursor-pointer transition-all active:scale-98"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

              {/* 5. Fixed Glass Bottom Nav Pill */}
              <div className="absolute bottom-2.5 inset-x-2.5 z-30 pointer-events-auto">
                <div className="bg-white/85 dark:bg-[#101924]/95 backdrop-blur-xl border border-white/90 dark:border-[#233144] rounded-[28px] p-1 shadow-[0px_6px_20px_rgba(10,42,92,0.12)] dark:shadow-[0px_8px_24px_rgba(0,0,0,0.5)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveTab("home")}
                    className={`flex-1 h-8.5 rounded-[24px] flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                      activeTab === "home"
                        ? "bg-[#eaf3ff] dark:bg-[#24374a] text-[#0066db] dark:text-[#84beff]"
                        : "text-[#4a5a70] dark:text-[#8b9aae] hover:text-[#0e1726] dark:hover:text-white"
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
                        ? "bg-[#eaf3ff] dark:bg-[#24374a] text-[#0066db] dark:text-[#84beff]"
                        : "text-[#4a5a70] dark:text-[#8b9aae] hover:text-[#0e1726] dark:hover:text-white"
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
                        ? "bg-[#eaf3ff] dark:bg-[#24374a] text-[#0066db] dark:text-[#84beff]"
                        : "text-[#4a5a70] dark:text-[#8b9aae] hover:text-[#0e1726] dark:hover:text-white"
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
                <div className="w-20 h-[3px] bg-[#0e1726]/80 dark:bg-white/70 rounded-full" />
              </div>
            </div>

            {/* Authentic iPhone 17 Pro Frame SVG (with transparent screen cutout & real Dynamic Island optics) */}
            <Image
              src="/images/iphone-17-pro.svg"
              alt="iPhone 17 Pro Mockup Frame"
              width={333}
              height={681}
              priority
              unoptimized
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-20 drop-shadow-[0_20px_50px_rgba(10,42,92,0.22)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
