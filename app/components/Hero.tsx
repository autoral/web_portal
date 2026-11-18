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
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

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
  const { lang, setLang } = useLanguage();
  const t = translations.hero;

  const toBnNum = (n: number | string) => {
    if (lang !== "bn") return String(n);
    const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return String(n).replace(/\d/g, (d) => bnDigits[Number(d)]);
  };

  const getRoomName = (room: string) => {
    if (room === "Living room") return t.phone.rooms.living[lang];
    if (room === "Bedroom") return t.phone.rooms.bedroom[lang];
    if (room === "Kitchen") return t.phone.rooms.kitchen[lang];
    if (room === "Kids room") return t.phone.rooms.kids[lang];
    if (room === "Veranda") return t.phone.rooms.veranda[lang];
    return room;
  };

  const getRoomTabLabel = (tab: string) => {
    if (tab === "All") return t.phone.rooms.all[lang];
    return getRoomName(tab);
  };

  const getApplianceName = (app: Appliance) => {
    const key = app.id as keyof typeof t.phone.appliances;
    return t.phone.appliances[key]?.[lang] || app.name;
  };

  const [appliances, setAppliances] = useState<Appliance[]>(INITIAL_APPLIANCES);
  const [selectedRoom, setSelectedRoom] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"home" | "appliances" | "schedules" | "account">("home");
  const [islandToast, setIslandToast] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [appliancesSegment, setAppliancesSegment] = useState<"appliances" | "devices">("appliances");
  const [applianceFilter, setApplianceFilter] = useState<"all" | "on" | "lighting" | "cooling" | "media" | "climate">("all");
  const [appliancesSearchQuery, setAppliancesSearchQuery] = useState<string>("");
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);

  const [scheduleFilter, setScheduleFilter] = useState<"next" | "running" | "failed" | "paused">("next");
  const [scheduleSearchQuery, setScheduleSearchQuery] = useState<string>("");
  const [showScheduleSearch, setShowScheduleSearch] = useState<boolean>(false);
  const [autoUpdate, setAutoUpdate] = useState<boolean>(true);

  interface ScheduleItem {
    id: string;
    title: string;
    applianceType: ApplianceType;
    meta: string;
    status: string;
    category: "next" | "running" | "failed" | "paused";
    active: boolean;
  }

  const [schedulesList, setSchedulesList] = useState<ScheduleItem[]>([
    {
      id: "ceiling-fan-sched",
      title: "Ceiling fan",
      applianceType: "cooling",
      meta: "Every day · On 7:00 AM · Off 8:00 AM",
      status: "Next: today 7:00 AM, turn on",
      category: "next",
      active: true,
    },
    {
      id: "water-pump-sched",
      title: "Water pump",
      applianceType: "water",
      meta: "Sat · On 8:00 AM · Off 2:00 PM",
      status: "Next: Saturday 8:00 AM, turn on",
      category: "next",
      active: true,
    },
    {
      id: "living-light-sched",
      title: "Living room Light",
      applianceType: "lighting",
      meta: "Every day · On 6:30 PM · Off 11:30 PM",
      status: "Running now: scheduled until 11:30 PM",
      category: "running",
      active: true,
    },
    {
      id: "kids-ac-sched",
      title: "Kids room AC",
      applianceType: "climate",
      meta: "Mon - Fri · On 2:00 PM · Off 5:00 PM",
      status: "Paused by user",
      category: "paused",
      active: false,
    },
  ]);

  const toggleScheduleItem = (id: string) => {
    setSchedulesList((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const nextState = !s.active;
          triggerIslandToast(
            nextState
              ? (lang === "bn" ? `${s.title} শিডিউল চালু করা হয়েছে` : `${s.title} schedule enabled`)
              : (lang === "bn" ? `${s.title} শিডিউল বন্ধ করা হয়েছে` : `${s.title} schedule disabled`)
          );
          return {
            ...s,
            active: nextState,
            category: nextState ? (s.category === "paused" ? "next" : s.category) : "paused",
            status: nextState ? "Next: upcoming automated run" : "Paused by user",
          };
        }
        return s;
      })
    );
  };

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
          const appName = getApplianceName(app);
          triggerIslandToast(
            lang === "bn"
              ? `${appName} ${next ? "চালু করা হয়েছে" : "বন্ধ করা হয়েছে"}`
              : `${app.name} turned ${next ? "On" : "Off"}`
          );
          return { ...app, on: next };
        }
        return app;
      })
    );
  };

  const turnAllOn = () => {
    setAppliances((prev) => prev.map((app) => ({ ...app, on: true })));
    triggerIslandToast(lang === "bn" ? "সব যন্ত্র চালু করা হয়েছে" : "All appliances turned on");
  };

  const turnAllOff = () => {
    setAppliances((prev) => prev.map((app) => ({ ...app, on: false })));
    triggerIslandToast(lang === "bn" ? "সব যন্ত্র বন্ধ করা হয়েছে" : "All appliances turned off");
  };

  const toggleRoom = (roomName: string, shouldTurnOn: boolean) => {
    setAppliances((prev) =>
      prev.map((app) => (app.room === roomName ? { ...app, on: shouldTurnOn } : app))
    );
    const localizedRoom = getRoomName(roomName);
    triggerIslandToast(
      lang === "bn"
        ? `${localizedRoom}: ${shouldTurnOn ? "সব চালু" : "সব বন্ধ"}`
        : `${roomName}: ${shouldTurnOn ? "All on" : "All off"}`
    );
  };

  // Live counts for dynamic state
  const totalCount = appliances.length;
  const activeCount = appliances.filter((a) => a.on).length;
  const offCount = totalCount - activeCount;

  // Synced state for the floating Ceiling Light quick tile
  const ceilingLight = appliances.find((a) => a.id === "living-ceiling-light");
  const ceilingLightOn = ceilingLight ? ceilingLight.on : true;

  // Filtered rooms (when "All" is active, displays Living room at top and enables scrolling down through all rooms)
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
              {t.eyebrow[lang]}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-[#0e1726] dark:text-[#edf2f8] tracking-[-1.5px] leading-[1.12]">
            {t.headlineLine1[lang]}<br />{t.headlineLine2[lang]}
          </h1>

          {/* Lead Paragraph */}
          <p className="text-lg lg:text-[18px] text-[#4a5a70] dark:text-[#b4c1d1] leading-[28px] max-w-[540px] mx-auto lg:mx-0">
            {t.lead[lang]}
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
              {t.seeHowItWorks[lang]}
            </a>

            <div className="inline-flex items-center gap-2 text-[#4a5a70] dark:text-[#b4c1d1] text-[14px]">
              <IconCheckCircle className="w-[18px] h-[18px] text-[#187a43] dark:text-[#5cc98a]" />
              <span>
                {t.freeAppNote[lang]}
              </span>
            </div>
          </div>
        </div>

        {/* Right Hero Visual Stage (Figma 4238:661: 540px wide by 680px tall) */}
        <div className="relative w-full max-w-[540px] h-[680px] shrink-0 select-none">
          {/* Subtle Ambient Radial Ring */}
          <div className="absolute left-[30px] top-[100px] w-[480px] h-[480px] rounded-full border border-[#4c8dff]/25 bg-gradient-to-tr from-[#4c8dff]/15 via-blue-200/10 to-transparent blur-2xl pointer-events-none" />

          {/* 1. Floating Card: Left - Autoral MH-8 Device */}
          <div
            onClick={() => setShowAddModal(true)}
            className="hidden lg:flex absolute left-[-115px] top-[392px] z-30 w-[265px] bg-white dark:bg-[#151d29] rounded-[20px] p-3.5 items-center gap-3 shadow-[0px_16px_40px_rgba(10,42,92,0.18)] border border-[#e8effc] dark:border-[#2a3546] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          >
            <div className="w-11 h-11 rounded-[13px] bg-[#eaf3ff] dark:bg-[#0b2a55] flex items-center justify-center text-[#0066db] dark:text-[#84beff] shrink-0">
              <IconRouter className="w-6 h-6 text-[#0066db] dark:text-[#84beff]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold text-[#0e1726] dark:text-[#edf2f8] truncate">
                {t.floatingDevice.title[lang]}
              </div>
              <div className="text-[12px] text-[#5e6e84] dark:text-[#8b9aae] truncate">
                {t.floatingDevice.subtitle[lang]}
              </div>
              <div className="flex items-center gap-1.5 text-[11.5px] mt-0.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#0e1726] dark:bg-white text-white dark:text-[#0e1726] flex items-center justify-center text-[9px] font-bold">
                  ✓
                </span>
                <span className="text-[#0e1726] dark:text-[#edf2f8] font-medium">
                  {t.floatingDevice.online[lang]}
                </span>
              </div>
            </div>
            <div className="text-[#8798ad] dark:text-[#8b9aae] shrink-0 pr-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>

          {/* 2. Floating Card: Right - Ceiling Light Quick Tile */}
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
                {t.floatingTile.title[lang]}
              </div>
              <div className="text-[12px] opacity-80 mt-0.5">
                {ceilingLightOn ? t.floatingTile.on[lang] : t.floatingTile.off[lang]}
              </div>
            </div>
          </div>

          {/* 3. Floating Badge: Right - On home Wi-Fi */}
          <div className="hidden lg:flex absolute left-[408px] top-[396px] z-30 h-[38px] bg-white/85 dark:bg-[#151d29]/90 backdrop-blur-md border border-white/90 dark:border-[#2a3546] rounded-full px-3.5 items-center gap-2 shadow-[0px_12px_32px_rgba(10,42,92,0.16)] transition-all duration-300 hover:-translate-y-0.5 cursor-default">
            <IconWifi className="w-4 h-4 text-[#0e1726] dark:text-[#edf2f8]" />
            <span className="text-[13px] font-medium text-[#0e1726] dark:text-[#edf2f8] whitespace-nowrap">
              {t.floatingConnection.label[lang]}
            </span>
          </div>

          {/* iPhone 17 Pro Mockup Frame */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:left-[104px] lg:translate-x-0 top-0 z-20 w-[333px] h-[681px]">
            {/* Interactive Phone Screen */}
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

              {/* Status Bar */}
              <div className="absolute top-0 inset-x-0 h-[44px] px-4.5 flex items-center justify-between z-20 pointer-events-none text-[#0e1726] dark:text-white pt-1.5">
                <div className="w-12 text-[13px] font-semibold tracking-tight text-center">
                  9:41
                </div>
                <div className="w-[92px] h-[26px]" />
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
                          {t.phone.greeting[lang]}
                        </div>
                        <div className="text-[18px] font-semibold text-[#0e1726] dark:text-white leading-tight">
                          {t.phone.userName[lang]}
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
                            <div className="text-[9px] text-[#4a5a70] dark:text-[#8b9aae] leading-none">
                              {t.phone.connection[lang]}
                            </div>
                            <div className="text-[10px] font-semibold text-[#0e1726] dark:text-white flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#187a43] dark:bg-[#5cc98a]" />
                              <span className="truncate">{t.phone.homeWifi[lang]}</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f7f7f7] dark:bg-[#192433] rounded-[10px] p-1.5 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#e3f5ea] dark:bg-[#103024] flex items-center justify-center text-[#187a43] dark:text-[#5cc98a] shrink-0">
                            <IconRouter className="w-3 h-3 text-[#187a43] dark:text-[#5cc98a]" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[9px] text-[#4a5a70] dark:text-[#8b9aae] leading-none">
                              {t.phone.devices[lang]}
                            </div>
                            <div className="text-[10px] font-semibold text-[#0e1726] dark:text-white flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#187a43] dark:bg-[#5cc98a]" />
                              <span className="truncate">
                                {lang === "bn" ? `${toBnNum(2)}টির ${toBnNum(2)}টি সচল` : "2 of 2 online"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Headline & live count */}
                      <div className="flex items-center justify-between pt-0.5">
                        <div>
                          <div className="text-[20px] font-bold text-[#0e1726] dark:text-white tracking-tight leading-none">
                            {lang === "bn"
                              ? `${toBnNum(activeCount)}টি যন্ত্র চালু`
                              : `${activeCount} appliances on`}
                          </div>
                          <div className="text-[10.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-1">
                            {lang === "bn"
                              ? `${toBnNum(offCount)}টি বন্ধ · মোট ${toBnNum(totalCount)}টি`
                              : `${offCount} off · ${totalCount} appliances`}
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
                          {t.phone.allOn[lang]}
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
                          {t.phone.allOff[lang]}
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
                            {getRoomTabLabel(tab)}
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
                      const localizedRoom = getRoomName(roomName);

                      return (
                        <div key={roomName} className="space-y-1.5">
                          {/* Room Header */}
                          <div className="flex items-center justify-between px-1">
                            <div className="flex items-center gap-1.5">
                              <RoomIcon room={roomName} className="w-3.5 h-3.5 text-[#4a5a70] dark:text-[#8b9aae]" />
                              <span className="text-[13px] font-semibold text-[#0e1726] dark:text-white">
                                {localizedRoom}
                              </span>
                              <span className="bg-[#edf2f8] dark:bg-[#192433] text-[#0e1726] dark:text-[#84beff] text-[9.5px] px-1.5 py-0.5 rounded-full font-medium">
                                {lang === "bn" ? `${toBnNum(roomActiveCount)}টি চালু` : `${roomActiveCount} on`}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => toggleRoom(roomName, !hasActive)}
                              className="text-[11px] font-semibold text-[#0052b3] dark:text-[#84beff] hover:underline cursor-pointer"
                            >
                              {hasActive
                                ? (lang === "bn" ? "সব বন্ধ করুন" : "Turn all off")
                                : (lang === "bn" ? "সব চালু করুন" : "Turn all on")}
                            </button>
                          </div>

                          {/* Device Tiles Grid */}
                          <div className="grid grid-cols-2 gap-2">
                            {roomApps.map((device) => {
                              const localizedDeviceName = getApplianceName(device);
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
                                      {localizedDeviceName}
                                    </div>
                                    <div className={subTextClass}>
                                      {device.on
                                        ? (lang === "bn" ? "চালু" : "On")
                                        : (lang === "bn" ? "বন্ধ" : "Off")}
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

                {/* VIEW 2: APPLIANCES TAB (Figma Home-Automation-Final-4.2 node-id 4173:13341 / 4173:13368) */}
                {activeTab === "appliances" && (
                  <div className="space-y-3">
                    {/* Top Bar with Title and Circular Action Buttons */}
                    <div className="px-1 flex items-center justify-between">
                      <div>
                        <div className="text-[18px] font-bold text-[#0e1726] dark:text-white leading-tight">
                          {lang === "bn" ? "যন্ত্রপাতি" : "Appliances"}
                        </div>
                        <div className="text-[11px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5">
                          {activeCount} {lang === "bn" ? "টি চালু · মোট লোড: ~" : "active · Load: ~"}{activeCount * 45 + 15}W
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setShowSearchInput(!showSearchInput)}
                          aria-label="Search appliances"
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer shadow-xs ${
                            showSearchInput
                              ? "bg-[#0066db] text-white border-[#0066db]"
                              : "bg-white dark:bg-[#131d2a] border-[#d8e1ec] dark:border-[#233144] text-[#4a5a70] dark:text-[#8b9aae] hover:text-[#0e1726] dark:hover:text-white"
                          }`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowAddModal(true)}
                          aria-label="Add device"
                          className="w-8 h-8 rounded-full bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] flex items-center justify-center text-[#4a5a70] dark:text-[#8b9aae] hover:text-[#0e1726] dark:hover:text-white transition-all shadow-xs cursor-pointer text-lg leading-none font-light"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Search Bar Input (toggled) */}
                    {showSearchInput && (
                      <div className="px-1 animate-in fade-in duration-200">
                        <div className="relative flex items-center">
                          <input
                            type="text"
                            value={appliancesSearchQuery}
                            onChange={(e) => setAppliancesSearchQuery(e.target.value)}
                            placeholder={lang === "bn" ? "যন্ত্র বা ঘরের নাম দিয়ে খুঁজুন..." : "Filter appliances by name..."}
                            className="w-full h-8 pl-8 pr-7 rounded-full bg-white dark:bg-[#131d2a] border border-[#0066db] text-[11.5px] text-[#0e1726] dark:text-white placeholder-[#8b9aae] focus:outline-none shadow-xs"
                            autoFocus
                          />
                          <svg className="w-3.5 h-3.5 text-[#0066db] absolute left-2.5 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                          {appliancesSearchQuery && (
                            <button
                              type="button"
                              onClick={() => setAppliancesSearchQuery("")}
                              className="absolute right-2 text-neutral-400 hover:text-neutral-600 text-xs font-bold"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Segmented Switch: [ ✓ Appliances | Devices ] (Figma 5142:20065) */}
                    <div className="bg-white/80 dark:bg-[#131d2a] p-1 rounded-full border border-[#d8e1ec] dark:border-[#233144] flex items-center shadow-xs">
                      <button
                        type="button"
                        onClick={() => setAppliancesSegment("appliances")}
                        className={`flex-1 h-7.5 rounded-full flex items-center justify-center gap-1.5 text-[11.5px] font-semibold transition-all cursor-pointer ${
                          appliancesSegment === "appliances"
                            ? "bg-[#eaf3ff] dark:bg-[#1b2f4c] text-[#0066db] dark:text-[#84beff] shadow-xs"
                            : "text-[#4a5a70] dark:text-[#8b9aae] hover:text-[#0e1726] dark:hover:text-white"
                        }`}
                      >
                        {appliancesSegment === "appliances" && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                        <span>{lang === "bn" ? "যন্ত্রপাতি" : "Appliances"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setAppliancesSegment("devices")}
                        className={`flex-1 h-7.5 rounded-full flex items-center justify-center gap-1.5 text-[11.5px] font-semibold transition-all cursor-pointer ${
                          appliancesSegment === "devices"
                            ? "bg-[#eaf3ff] dark:bg-[#1b2f4c] text-[#0066db] dark:text-[#84beff] shadow-xs"
                            : "text-[#4a5a70] dark:text-[#8b9aae] hover:text-[#0e1726] dark:hover:text-white"
                        }`}
                      >
                        {appliancesSegment === "devices" && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                        <span>{lang === "bn" ? "মডিউল / হাব" : "Devices"}</span>
                      </button>
                    </div>

                    {/* SECTION 1: APPLIANCES VIEW */}
                    {appliancesSegment === "appliances" && (
                      <div className="space-y-2.5">
                        {/* Subheader Row: All appliances · 10 | Manage rooms */}
                        <div className="px-1 flex items-center justify-between text-[11.5px]">
                          <span className="text-[#4a5a70] dark:text-[#8b9aae] font-medium">
                            {lang === "bn" ? `সব যন্ত্রপাতি · ${appliances.length}` : `All appliances · ${appliances.length}`}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveTab("home");
                              triggerIslandToast(lang === "bn" ? "রুম ভিউতে যাওয়া হয়েছে" : "Switched to room management");
                            }}
                            className="font-semibold text-[#0066db] dark:text-[#84beff] hover:underline cursor-pointer"
                          >
                            {lang === "bn" ? "রুম ম্যানেজ" : "Manage rooms"}
                          </button>
                        </div>

                        {/* Filter Chips Horizontal Carousel (Figma 4184:11782) */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                          {/* All Chip */}
                          <button
                            type="button"
                            onClick={() => setApplianceFilter("all")}
                            className={`h-7 px-3 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer shadow-xs ${
                              applianceFilter === "all"
                                ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726]"
                                : "bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433]"
                            }`}
                          >
                            {lang === "bn" ? `সব ${appliances.length}` : `All ${appliances.length}`}
                          </button>

                          {/* On now Chip */}
                          <button
                            type="button"
                            onClick={() => setApplianceFilter("on")}
                            className={`h-7 px-3 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer shadow-xs flex items-center gap-1.5 ${
                              applianceFilter === "on"
                                ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726]"
                                : "bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433]"
                            }`}
                          >
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                              <line x1="12" y1="2" x2="12" y2="12" />
                            </svg>
                            <span>{lang === "bn" ? `চালু ${activeCount}` : `On now ${activeCount}`}</span>
                          </button>

                          {/* Lights Chip */}
                          <button
                            type="button"
                            onClick={() => setApplianceFilter("lighting")}
                            className={`h-7 px-3 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer shadow-xs flex items-center gap-1.5 ${
                              applianceFilter === "lighting"
                                ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726]"
                                : "bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433]"
                            }`}
                          >
                            <IconLightbulb className="w-3.5 h-3.5" />
                            <span>{lang === "bn" ? `লাইট ${appliances.filter((a) => a.type === "lighting").length}` : `Lights ${appliances.filter((a) => a.type === "lighting").length}`}</span>
                          </button>

                          {/* Cooling Chip */}
                          <button
                            type="button"
                            onClick={() => setApplianceFilter("cooling")}
                            className={`h-7 px-3 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer shadow-xs flex items-center gap-1.5 ${
                              applianceFilter === "cooling"
                                ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726]"
                                : "bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433]"
                            }`}
                          >
                            <IconFan className="w-3.5 h-3.5" />
                            <span>{lang === "bn" ? `ফ্যান ${appliances.filter((a) => a.type === "cooling").length}` : `Cooling ${appliances.filter((a) => a.type === "cooling").length}`}</span>
                          </button>

                          {/* Media Chip */}
                          <button
                            type="button"
                            onClick={() => setApplianceFilter("media")}
                            className={`h-7 px-3 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer shadow-xs flex items-center gap-1.5 ${
                              applianceFilter === "media"
                                ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726]"
                                : "bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433]"
                            }`}
                          >
                            <IconTv className="w-3.5 h-3.5" />
                            <span>{lang === "bn" ? `টিভি ${appliances.filter((a) => a.type === "media").length}` : `Media ${appliances.filter((a) => a.type === "media").length}`}</span>
                          </button>

                          {/* Climate Chip */}
                          <button
                            type="button"
                            onClick={() => setApplianceFilter("climate")}
                            className={`h-7 px-3 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer shadow-xs flex items-center gap-1.5 ${
                              applianceFilter === "climate"
                                ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726]"
                                : "bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433]"
                            }`}
                          >
                            <span>❄️</span>
                            <span>{lang === "bn" ? `এসি ${appliances.filter((a) => a.type === "climate").length}` : `Climate ${appliances.filter((a) => a.type === "climate").length}`}</span>
                          </button>
                        </div>

                        {/* List of Appliances (Figma 4173:13354 / 4173:13381) */}
                        <div className="space-y-1.5">
                          {appliances
                            .filter((a) => {
                              if (applianceFilter === "on" && !a.on) return false;
                              if (applianceFilter === "lighting" && a.type !== "lighting") return false;
                              if (applianceFilter === "cooling" && a.type !== "cooling") return false;
                              if (applianceFilter === "media" && a.type !== "media") return false;
                              if (applianceFilter === "climate" && a.type !== "climate") return false;
                              if (appliancesSearchQuery.trim()) {
                                const q = appliancesSearchQuery.toLowerCase();
                                const name = getApplianceName(a).toLowerCase();
                                const room = a.room.toLowerCase();
                                return name.includes(q) || room.includes(q);
                              }
                              return true;
                            })
                            .map((app, index) => {
                              // Dynamic category icon background matching Figma design tokens
                              let iconBg = "bg-[#f1f5f9] dark:bg-[#1c293a] text-neutral-400 dark:text-[#8b9aae]";
                              if (app.on) {
                                if (app.type === "lighting") {
                                  iconBg = "bg-[#ffedbf] dark:bg-[#52330a] text-[#4a310d] dark:text-[#fde68a]";
                                } else if (app.type === "cooling") {
                                  iconBg = "bg-[#d4f3f7] dark:bg-[#06404a] text-[#06404a] dark:text-[#a5f3fc]";
                                } else if (app.type === "media") {
                                  iconBg = "bg-[#fbddeb] dark:bg-[#5a1236] text-[#5a1236] dark:text-[#fbcfe8]";
                                } else if (app.type === "climate") {
                                  iconBg = "bg-[#e4e2ff] dark:bg-[#2a2170] text-[#2a2170] dark:text-[#ddd6fe]";
                                } else {
                                  iconBg = "bg-[#d9eaff] dark:bg-[#0c3566] text-[#0c3566] dark:text-[#bfdbfe]";
                                }
                              }

                              return (
                                <div
                                  key={app.id}
                                  onClick={() => toggleAppliance(app.id)}
                                  className={`p-2.5 rounded-[16px] border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                                    app.on
                                      ? "bg-white dark:bg-[#131d2a] border-[#0066db]/35 dark:border-[#84beff]/35 shadow-xs"
                                      : "bg-white/80 dark:bg-[#131d2a]/80 border-[#d8e1ec] dark:border-[#233144] hover:bg-white dark:hover:bg-[#131d2a]"
                                  }`}
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${iconBg}`}>
                                      <ApplianceIcon type={app.type} className="w-4.5 h-4.5" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-[13px] font-semibold text-[#0e1726] dark:text-white truncate">
                                        {getApplianceName(app)}
                                      </div>
                                      <div className="text-[10.5px] text-[#4a5a70] dark:text-[#8b9aae] flex items-center gap-1.5 mt-0.5">
                                        <span>{getRoomName(app.room)}</span>
                                        <span>·</span>
                                        <span className="font-mono text-[9.5px] font-semibold text-[#0066db] dark:text-[#84beff]">
                                          CH-{index + 1}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ToggleSwitch
                                    checked={app.on}
                                    onChange={() => toggleAppliance(app.id)}
                                    size="small"
                                  />
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}

                    {/* SECTION 2: DEVICES / HUBS VIEW (Figma Segment 2) */}
                    {appliancesSegment === "devices" && (
                      <div className="space-y-2.5">
                        <div className="px-1 flex items-center justify-between text-[11.5px]">
                          <span className="text-[#4a5a70] dark:text-[#8b9aae] font-medium">
                            {lang === "bn" ? "সংযুক্ত হার্ডওয়্যার মডিউল" : "Connected Edge Modules"}
                          </span>
                          <span className="text-[10.5px] text-[#187a43] dark:text-[#5cc98a] font-semibold bg-[#e3f5ea] dark:bg-[#103024] px-2 py-0.5 rounded-full">
                            2 {lang === "bn" ? "অনলাইন" : "online"}
                          </span>
                        </div>

                        {/* Hub 1: Autoral MH-8 */}
                        <div className="bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] rounded-[18px] p-3 shadow-xs space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-full bg-[#eaf3ff] dark:bg-[#0b2a55] flex items-center justify-center text-[#0066db] dark:text-[#84beff]">
                                <IconRouter className="w-4.5 h-4.5" />
                              </div>
                              <div>
                                <div className="text-[13px] font-semibold text-[#0e1726] dark:text-white flex items-center gap-1.5">
                                  <span>Autoral MH-8</span>
                                  <span className="text-[9px] font-medium px-1.5 py-0.2 rounded-full bg-[#e3f5ea] dark:bg-[#103024] text-[#187a43] dark:text-[#5cc98a]">
                                    Primary Hub
                                  </span>
                                </div>
                                <div className="text-[10px] text-[#4a5a70] dark:text-[#8b9aae]">
                                  6 of 8 channels in use · 192.168.1.105
                                </div>
                              </div>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#187a43] dark:text-[#5cc98a] bg-[#e3f5ea] dark:bg-[#103024] px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#187a43] dark:bg-[#5cc98a] animate-pulse" />
                              Online
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-neutral-100 dark:border-[#233144] text-[10px] text-[#4a5a70] dark:text-[#8b9aae]">
                            <div className="flex justify-between">
                              <span>Control:</span>
                              <span className="font-medium text-[#0e1726] dark:text-white">Direct LAN HTTP</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Signal:</span>
                              <span className="font-medium text-[#0e1726] dark:text-white">-48 dBm</span>
                            </div>
                          </div>
                        </div>

                        {/* Hub 2: Autoral MH-4 */}
                        <div className="bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] rounded-[18px] p-3 shadow-xs space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-full bg-[#eaf3ff] dark:bg-[#0b2a55] flex items-center justify-center text-[#0066db] dark:text-[#84beff]">
                                <IconRouter className="w-4.5 h-4.5" />
                              </div>
                              <div>
                                <div className="text-[13px] font-semibold text-[#0e1726] dark:text-white flex items-center gap-1.5">
                                  <span>Autoral MH-4</span>
                                  <span className="text-[9px] font-medium px-1.5 py-0.2 rounded-full bg-[#eaf3ff] dark:bg-[#0b2a55] text-[#0066db] dark:text-[#84beff]">
                                    Sub-module
                                  </span>
                                </div>
                                <div className="text-[10px] text-[#4a5a70] dark:text-[#8b9aae]">
                                  4 of 4 channels in use · 192.168.1.106
                                </div>
                              </div>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#187a43] dark:text-[#5cc98a] bg-[#e3f5ea] dark:bg-[#103024] px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#187a43] dark:bg-[#5cc98a] animate-pulse" />
                              Online
                            </span>
                          </div>
                        </div>

                        {/* Add Device Button */}
                        <button
                          type="button"
                          onClick={() => setShowAddModal(true)}
                          className="w-full h-8 rounded-full border border-dashed border-[#0066db]/50 hover:border-[#0066db] bg-[#eaf3ff]/50 dark:bg-[#0b2a55]/30 text-[#0066db] dark:text-[#84beff] text-[11px] font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:bg-[#eaf3ff]"
                        >
                          <span>+</span>
                          <span>{lang === "bn" ? "নতুন হাব / মডিউল যুক্ত করুন" : "Add New Hub / Module"}</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* VIEW 3: SCHEDULES TAB (Figma Home-Automation-Final-4.2 node-id 5039:16216) */}
                {activeTab === "schedules" && (
                  <div className="space-y-3">
                    {/* Top App Bar with Back Button, Title and Action Buttons (Figma 5039:16235) */}
                    <div className="px-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveTab("home")}
                          aria-label="Back to Home"
                          className="w-8 h-8 rounded-full bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] flex items-center justify-center text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433] transition-all shadow-xs cursor-pointer"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                          </svg>
                        </button>
                        <h2 className="text-[18px] font-bold text-[#0e1726] dark:text-white leading-tight">
                          {lang === "bn" ? "সময়সূচি" : "Schedules"}
                        </h2>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {/* History Button (Clock with circular arrow) */}
                        <button
                          type="button"
                          onClick={() => triggerIslandToast(lang === "bn" ? "ইতিহাস: সমস্ত লোকাল শিডিউল সফলভাবে কার্যকর হয়েছে" : "History: 14 automated routines executed locally")}
                          aria-label="Schedule history"
                          className="w-8 h-8 rounded-full bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] flex items-center justify-center text-[#4a5a70] dark:text-[#8b9aae] hover:text-[#0e1726] dark:hover:text-white transition-all shadow-xs cursor-pointer"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <polyline points="3 3 3 8 8 8" />
                            <polyline points="12 7 12 12 15 15" />
                          </svg>
                        </button>

                        {/* Search Button */}
                        <button
                          type="button"
                          onClick={() => setShowScheduleSearch(!showScheduleSearch)}
                          aria-label="Search schedules"
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer shadow-xs ${
                            showScheduleSearch
                              ? "bg-[#0066db] text-white border-[#0066db]"
                              : "bg-white dark:bg-[#131d2a] border-[#d8e1ec] dark:border-[#233144] text-[#4a5a70] dark:text-[#8b9aae] hover:text-[#0e1726] dark:hover:text-white"
                          }`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        </button>

                        {/* Add Button */}
                        <button
                          type="button"
                          onClick={() => triggerIslandToast(lang === "bn" ? "নতুন সময়সূচি যুক্ত করার অপশন" : "Add Schedule: Select appliance")}
                          aria-label="Add schedule"
                          className="w-8 h-8 rounded-full bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] flex items-center justify-center text-[#4a5a70] dark:text-[#8b9aae] hover:text-[#0e1726] dark:hover:text-white transition-all shadow-xs cursor-pointer text-lg leading-none font-light"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Inline Search (toggled) */}
                    {showScheduleSearch && (
                      <div className="px-1 animate-in fade-in duration-200">
                        <div className="relative flex items-center">
                          <input
                            type="text"
                            value={scheduleSearchQuery}
                            onChange={(e) => setScheduleSearchQuery(e.target.value)}
                            placeholder={lang === "bn" ? "সময়সূচি খুঁজুন..." : "Search schedules..."}
                            className="w-full h-8 pl-8 pr-7 rounded-full bg-white dark:bg-[#131d2a] border border-[#0066db] text-[11.5px] text-[#0e1726] dark:text-white placeholder-[#8b9aae] focus:outline-none shadow-xs"
                            autoFocus
                          />
                          <svg className="w-3.5 h-3.5 text-[#0066db] absolute left-2.5 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                          {scheduleSearchQuery && (
                            <button
                              type="button"
                              onClick={() => setScheduleSearchQuery("")}
                              className="absolute right-2 text-neutral-400 hover:text-neutral-600 text-xs font-bold"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Status Filter Chips (Figma 5121:19661 status-filter) */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                      {(["next", "running", "failed", "paused"] as const).map((filterKey) => {
                        const isSelected = scheduleFilter === filterKey;
                        const labels = {
                          next: lang === "bn" ? "পরবর্তী" : "Next",
                          running: lang === "bn" ? "চলমান" : "Running",
                          failed: lang === "bn" ? "ব্যর্থ" : "Failed",
                          paused: lang === "bn" ? "স্থগিত" : "Paused",
                        };
                        return (
                          <button
                            key={filterKey}
                            type="button"
                            onClick={() => setScheduleFilter(filterKey)}
                            className={`h-7 px-3.5 rounded-full text-[11.5px] font-semibold whitespace-nowrap transition-all cursor-pointer shadow-xs ${
                              isSelected
                                ? "bg-[#0e1726] text-white dark:bg-white dark:text-[#0e1726]"
                                : "bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433]"
                            }`}
                          >
                            {labels[filterKey]}
                          </button>
                        );
                      })}
                    </div>

                    {/* Schedule Rows List (Figma 5102:19124 list · Upcoming) */}
                    <div className="space-y-3">
                      {schedulesList
                        .filter((sched) => {
                          if (scheduleFilter !== "failed" && sched.category !== scheduleFilter && scheduleFilter !== "next") {
                            return false;
                          }
                          if (scheduleFilter === "failed") return false; // Handled below
                          if (scheduleSearchQuery.trim()) {
                            const q = scheduleSearchQuery.toLowerCase();
                            return (
                              sched.title.toLowerCase().includes(q) ||
                              sched.meta.toLowerCase().includes(q) ||
                              sched.status.toLowerCase().includes(q)
                            );
                          }
                          return true;
                        })
                        .map((sched) => {
                          // Icon container styling matching Figma variable tokens
                          let iconBg = "bg-[#d4f3f7] dark:bg-[#06404a] text-[#06404a] dark:text-[#a5f3fc]";
                          if (sched.applianceType === "water") {
                            iconBg = "bg-[#d9eaff] dark:bg-[#0c3566] text-[#0c3566] dark:text-[#bfdbfe]";
                          } else if (sched.applianceType === "lighting") {
                            iconBg = "bg-[#ffedbf] dark:bg-[#52330a] text-[#4a310d] dark:text-[#fde68a]";
                          } else if (sched.applianceType === "climate") {
                            iconBg = "bg-[#e4e2ff] dark:bg-[#2a2170] text-[#2a2170] dark:text-[#ddd6fe]";
                          }

                          return (
                            <div
                              key={sched.id}
                              className="bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] rounded-[24px] p-4 shadow-xs space-y-3 transition-all hover:shadow-md"
                            >
                              {/* Top Row: Icon + Title & Meta + Toggle (Figma 5038:16226) */}
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
                                    <ApplianceIcon type={sched.applianceType} className="w-5 h-5" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-[15px] font-semibold text-[#0e1726] dark:text-white truncate">
                                      {sched.title}
                                    </div>
                                    <div className="text-[12.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5 leading-snug">
                                      {sched.meta}
                                    </div>
                                  </div>
                                </div>
                                <div className="shrink-0 pt-0.5">
                                  <ToggleSwitch
                                    checked={sched.active}
                                    onChange={() => toggleScheduleItem(sched.id)}
                                    size="small"
                                  />
                                </div>
                              </div>

                              {/* Status Line: Clock Icon + Status Text (Figma 5038:16235) */}
                              <div className="flex items-center gap-1.5 pt-2.5 border-t border-neutral-100 dark:border-[#233144] text-[11.5px] text-[#4a5a70] dark:text-[#8b9aae]">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                  <circle cx="12" cy="12" r="9" />
                                  <polyline points="12 7 12 12 15 14.5" />
                                </svg>
                                <span className="truncate">{sched.status}</span>
                              </div>
                            </div>
                          );
                        })}

                      {/* Empty State for Failed or zero results */}
                      {scheduleFilter === "failed" && (
                        <div className="p-6 text-center rounded-[20px] bg-white/60 dark:bg-[#131d2a]/60 border border-neutral-200/80 dark:border-[#233144] space-y-2">
                          <div className="w-10 h-10 mx-auto rounded-full bg-[#e3f5ea] dark:bg-[#103024] flex items-center justify-center text-[#187a43] dark:text-[#5cc98a]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <div className="text-[13px] font-semibold text-[#0e1726] dark:text-white">
                            {lang === "bn" ? "কোনো ত্রুটি নেই" : "No Failed Schedules"}
                          </div>
                          <p className="text-[11px] text-[#4a5a70] dark:text-[#8b9aae] max-w-xs mx-auto leading-relaxed">
                            {lang === "bn" ? "সব অটোমেশন রুটিন স্থানীয় হাবে স্বাভাবিকভাবে চলছে।" : "All automated timer schedules executed successfully on local hub."}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* VIEW 4: ACCOUNT TAB (Figma Home-Automation-Final-4.2 node-id 4173:14000 10.01 Account / Signed out) */}
                {activeTab === "account" && (
                  <div className="space-y-4">
                    {/* Top App Bar with Back Button & Title */}
                    <div className="px-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveTab("home")}
                          aria-label="Back to Home"
                          className="w-8 h-8 rounded-full bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] flex items-center justify-center text-[#0e1726] dark:text-white hover:bg-neutral-50 dark:hover:bg-[#192433] transition-all shadow-xs cursor-pointer"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                          </svg>
                        </button>
                        <h2 className="text-[18px] font-bold text-[#0e1726] dark:text-white leading-tight">
                          {lang === "bn" ? "আমার অ্যাকাউন্ট" : "My account"}
                        </h2>
                      </div>
                    </div>

                    {/* SECTION 1: ACCOUNT (Figma 4173:14005) */}
                    <div className="space-y-1.5">
                      <div className="px-1 text-[12.5px] font-medium text-[#4a5a70] dark:text-[#8b9aae]">
                        {lang === "bn" ? "অ্যাকাউন্ট" : "Account"}
                      </div>
                      <div className="rounded-[24px] bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] shadow-xs divide-y divide-neutral-100 dark:divide-[#233144] overflow-hidden">
                        {/* Row 1: Sign in for remote access */}
                        <div
                          onClick={() => triggerIslandToast(lang === "bn" ? "রিমোট অ্যাক্সেস: ক্লাউড কানেকশন প্রয়োজন" : "Sign in: Connect cloud account")}
                          className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-[#182333] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <circle cx="12" cy="12" r="9" />
                                <circle cx="12" cy="9.5" r="2.8" />
                                <path d="M7 18c.8-2.5 2.7-3.5 5-3.5s4.2 1 5 3.5" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "রিমোট অ্যাক্সেসের জন্য সাইন ইন করুন" : "Sign in for remote access"}
                              </div>
                              <div className="text-[11.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5 truncate">
                                {lang === "bn" ? "যেকোনো স্থান থেকে বাসা নিয়ন্ত্রণ করুন" : "Control your home from anywhere"}
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b9aae] shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>

                        {/* Row 2: Remote access */}
                        <div
                          onClick={() => triggerIslandToast(lang === "bn" ? "রিমোট অ্যাক্সেস বন্ধ · লোকাল ওয়াই-ফাই সক্রিয়" : "Remote access: Off (Local Wi-Fi only)")}
                          className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-[#182333] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "রিমোট এক্সেস" : "Remote access"}
                              </div>
                              <div className="text-[11.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5 truncate">
                                {lang === "bn" ? "বন্ধ" : "Off"}
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b9aae] shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2: HOME (Figma 4173:14010) */}
                    <div className="space-y-1.5">
                      <div className="px-1 text-[12.5px] font-medium text-[#4a5a70] dark:text-[#8b9aae]">
                        {lang === "bn" ? "বাসা" : "Home"}
                      </div>
                      <div className="rounded-[24px] bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] shadow-xs divide-y divide-neutral-100 dark:divide-[#233144] overflow-hidden">
                        {/* Row 1: Home name */}
                        <div
                          onClick={() => triggerIslandToast("Home: Molla Home (Stored in local SQLite)")}
                          className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-[#182333] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10.8 2.8a2 2 0 0 1 2.4 0l6.3 4.8c.7.5 1 1.3 1 2.1v9.8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V9.7c0-.8.4-1.6 1-2.1l6.3-4.8z" />
                                <path d="M9.5 13.6c.7 1.2 3.3 1.2 4 0" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "বাসার নাম" : "Home name"}
                              </div>
                              <div className="text-[11.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5 truncate">
                                Molla Home
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b9aae] shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>

                        {/* Row 2: Rooms */}
                        <div
                          onClick={() => {
                            setActiveTab("home");
                            triggerIslandToast(lang === "bn" ? "রুম ভিউতে যাওয়া হয়েছে" : "Opened Rooms view");
                          }}
                          className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-[#182333] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
                                <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0z" />
                                <path d="M4 18v2" />
                                <path d="M20 18v2" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "রুম সমূহ" : "Rooms"}
                              </div>
                              <div className="text-[11.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5 truncate">
                                {lang === "bn" ? "৫টি রুম" : "5 rooms"}
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b9aae] shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>

                        {/* Row 3: Devices */}
                        <div
                          onClick={() => {
                            setActiveTab("appliances");
                            triggerIslandToast(lang === "bn" ? "ডিভাইস ভিউতে যাওয়া হয়েছে" : "Opened Devices view");
                          }}
                          className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-[#182333] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <IconRouter className="w-4.5 h-4.5" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "ডিভাইস" : "Devices"}
                              </div>
                              <div className="text-[11.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5 truncate">
                                {lang === "bn" ? "২টি ডিভাইস অনলাইন" : "2 devices"}
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b9aae] shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3: SETTINGS (Figma 4173:14016) */}
                    <div className="space-y-1.5 pb-6">
                      <div className="px-1 text-[12.5px] font-medium text-[#4a5a70] dark:text-[#8b9aae]">
                        {lang === "bn" ? "সেটিংস" : "Settings"}
                      </div>
                      <div className="rounded-[24px] bg-white dark:bg-[#131d2a] border border-[#d8e1ec] dark:border-[#233144] shadow-xs divide-y divide-neutral-100 dark:divide-[#233144] overflow-hidden">
                        {/* Row 1: Appearance */}
                        <div
                          onClick={() => triggerIslandToast("Theme: System mode active")}
                          className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-[#182333] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" opacity="0.3" />
                                <line x1="12" y1="3" x2="12" y2="21" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "অ্যাপিয়ারেন্স" : "Appearance"}
                              </div>
                              <div className="text-[11.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5 truncate">
                                System
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b9aae] shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>

                        {/* Row 2: Language */}
                        <div
                          onClick={() => setLang(lang === "en" ? "bn" : "en")}
                          className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-[#182333] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "ভাষা" : "Language"}
                              </div>
                              <div className="text-[11.5px] text-[#0066db] dark:text-[#84beff] font-medium mt-0.5 truncate">
                                {lang === "bn" ? "বাংলা" : "English"}
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b9aae] shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>

                        {/* Row 3: Automatic update */}
                        <div className="p-3 flex items-center justify-between">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "স্বয়ংক্রিয় আপডেট" : "Automatic update"}
                              </div>
                              <div className="text-[11.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5 truncate">
                                {lang === "bn" ? "ডিভাইস ও অ্যাপ আপডেট" : "Device and app updates"}
                              </div>
                            </div>
                          </div>
                          <ToggleSwitch
                            checked={autoUpdate}
                            onChange={(val) => {
                              setAutoUpdate(val);
                              triggerIslandToast(val ? "Automatic update enabled" : "Automatic update paused");
                            }}
                            size="small"
                          />
                        </div>

                        {/* Row 4: Activity log */}
                        <div
                          onClick={() => triggerIslandToast("Activity Log: All 24 events successful")}
                          className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-[#182333] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                <polyline points="3 3 3 8 8 8" />
                                <polyline points="12 7 12 12 15 15" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "অ্যাক্টিভিটি লগ" : "Activity log"}
                              </div>
                              <div className="text-[11.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5 truncate">
                                {lang === "bn" ? "কী চলেছে এবং কী ব্যর্থ হয়েছে" : "What ran and what failed"}
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b9aae] shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>

                        {/* Row 5: Help & support */}
                        <div
                          onClick={() => triggerIslandToast("Support: Call 01770-066585 or WhatsApp")}
                          className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-[#182333] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "সহায়তা ও সাপোর্ট" : "Help & support"}
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b9aae] shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>

                        {/* Row 6: About & legal */}
                        <div
                          onClick={() => triggerIslandToast("Autoral Home v1.0.0 (Local-First Edge OS)")}
                          className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-[#182333] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#edf2f8] dark:bg-[#1c293a] text-[#4a5a70] dark:text-[#8b9aae] flex items-center justify-center shrink-0">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" strokeWidth="2" />
                                <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="3" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13.5px] font-semibold text-[#0e1726] dark:text-white truncate">
                                {lang === "bn" ? "তথ্য ও আইনি শর্তাবলী" : "About & legal"}
                              </div>
                              <div className="text-[11.5px] text-[#4a5a70] dark:text-[#8b9aae] mt-0.5 truncate">
                                Version 1.0.0
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b9aae] shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </div>
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

              {/* 5. Fixed Glass Bottom Nav Pill (Figma Home-Automation-Final-4.2 node-id 4173:10964) */}
              <div className="absolute bottom-2 inset-x-2 z-30 pointer-events-auto">
                <div className="bg-white/80 dark:bg-[#141b24]/85 backdrop-blur-[24px] border border-white/80 dark:border-white/10 rounded-full py-1 px-1 shadow-[0px_6px_20px_rgba(20,27,52,0.14),inset_0px_1px_0px_rgba(255,255,255,0.7)] dark:shadow-[0px_8px_24px_rgba(0,0,0,0.5),inset_0px_1px_0px_rgba(255,255,255,0.12)] flex items-center justify-between">
                  {/* Tab 1: Home */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("home")}
                    aria-label="Home Tab"
                    className="flex-1 flex flex-col items-center justify-center py-0.5 group cursor-pointer transition-all"
                  >
                    <div className={`w-[52px] sm:w-[58px] h-[28px] rounded-full flex items-center justify-center transition-all duration-200 ${
                      activeTab === "home"
                        ? "bg-[#eaf3ff] dark:bg-[#1b2f4c] text-[#0066db] dark:text-[#5299f7]"
                        : "bg-transparent text-[#4a5a70] dark:text-[#8b9aae] group-hover:text-[#0e1726] dark:group-hover:text-white"
                    }`}>
                      {activeTab === "home" ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10.8 2.8a2 2 0 0 1 2.4 0l6.3 4.8c.7.5 1 1.3 1 2.1v9.8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V9.7c0-.8.4-1.6 1-2.1l6.3-4.8z" />
                          <path
                            d="M9.5 13.6c.7 1.2 3.3 1.2 4 0"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path
                            d="M10.8 2.8a2 2 0 0 1 2.4 0l6.3 4.8c.7.5 1 1.3 1 2.1v9.8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V9.7c0-.8.4-1.6 1-2.1l6.3-4.8z"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.5 13.6c.7 1.2 3.3 1.2 4 0"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[10px] font-semibold leading-[12px] mt-0.5 tracking-tight transition-colors duration-200 ${
                      activeTab === "home"
                        ? "text-[#0066db] dark:text-[#5299f7]"
                        : "text-[#4a5a70] dark:text-[#8b9aae] group-hover:text-[#0e1726] dark:group-hover:text-white"
                    }`}>
                      {t.phone.nav.home[lang]}
                    </span>
                  </button>

                  {/* Tab 2: Appliances */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("appliances")}
                    aria-label="Appliances Tab"
                    className="flex-1 flex flex-col items-center justify-center py-0.5 group cursor-pointer transition-all"
                  >
                    <div className={`w-[52px] sm:w-[58px] h-[28px] rounded-full flex items-center justify-center transition-all duration-200 ${
                      activeTab === "appliances"
                        ? "bg-[#eaf3ff] dark:bg-[#1b2f4c] text-[#0066db] dark:text-[#5299f7]"
                        : "bg-transparent text-[#4a5a70] dark:text-[#8b9aae] group-hover:text-[#0e1726] dark:group-hover:text-white"
                    }`}>
                      {activeTab === "appliances" ? (
                        <svg width="22" height="22" viewBox="0 0 24 24">
                          <rect x="4" y="2.5" width="11" height="17" rx="2.5" fill="currentColor" />
                          <circle cx="9.5" cy="16.5" r="0.75" fill="white" />
                          <rect x="11.5" y="11.5" width="8.5" height="8" rx="2" fill="white" className="dark:fill-[#1b2f4c]" />
                          <rect x="12" y="12" width="7.5" height="7" rx="1.6" fill="currentColor" />
                          <path
                            d="M14 12V9.5a1.75 1.75 0 0 1 3.5 0V12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <circle cx="15.75" cy="15.5" r="0.7" fill="white" />
                        </svg>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 7.5V4.5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5" />
                          <circle cx="9.5" cy="16.5" r="0.5" fill="currentColor" />
                          <path d="M14 12V9.5a1.75 1.75 0 0 1 3.5 0V12" />
                          <rect x="12" y="12" width="7.5" height="7" rx="1.6" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[10px] font-semibold leading-[12px] mt-0.5 tracking-tight transition-colors duration-200 ${
                      activeTab === "appliances"
                        ? "text-[#0066db] dark:text-[#5299f7]"
                        : "text-[#4a5a70] dark:text-[#8b9aae] group-hover:text-[#0e1726] dark:group-hover:text-white"
                    }`}>
                      {t.phone.nav.appliances[lang]}
                    </span>
                  </button>

                  {/* Tab 3: Schedules */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("schedules")}
                    aria-label="Schedules Tab"
                    className="flex-1 flex flex-col items-center justify-center py-0.5 group cursor-pointer transition-all"
                  >
                    <div className={`w-[52px] sm:w-[58px] h-[28px] rounded-full flex items-center justify-center transition-all duration-200 ${
                      activeTab === "schedules"
                        ? "bg-[#eaf3ff] dark:bg-[#1b2f4c] text-[#0066db] dark:text-[#5299f7]"
                        : "bg-transparent text-[#4a5a70] dark:text-[#8b9aae] group-hover:text-[#0e1726] dark:group-hover:text-white"
                    }`}>
                      {activeTab === "schedules" ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="9.5" />
                          <line x1="12" y1="12" x2="12" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                          <line x1="12" y1="12" x2="15.2" y2="14.8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                          <circle cx="12" cy="12" r="9" />
                          <polyline points="12 7 12 12 15 14.5" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[10px] font-semibold leading-[12px] mt-0.5 tracking-tight transition-colors duration-200 ${
                      activeTab === "schedules"
                        ? "text-[#0066db] dark:text-[#5299f7]"
                        : "text-[#4a5a70] dark:text-[#8b9aae] group-hover:text-[#0e1726] dark:group-hover:text-white"
                    }`}>
                      {t.phone.nav.schedules[lang]}
                    </span>
                  </button>

                  {/* Tab 4: Account */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("account")}
                    aria-label="Account Tab"
                    className="flex-1 flex flex-col items-center justify-center py-0.5 group cursor-pointer transition-all"
                  >
                    <div className={`w-[52px] sm:w-[58px] h-[28px] rounded-full flex items-center justify-center transition-all duration-200 ${
                      activeTab === "account"
                        ? "bg-[#eaf3ff] dark:bg-[#1b2f4c] text-[#0066db] dark:text-[#5299f7]"
                        : "bg-transparent text-[#4a5a70] dark:text-[#8b9aae] group-hover:text-[#0e1726] dark:group-hover:text-white"
                    }`}>
                      {activeTab === "account" ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="9.5" />
                          <circle cx="12" cy="9.5" r="2.8" fill="white" />
                          <path
                            d="M7 18.2c.8-2.6 2.8-3.7 5-3.7s4.2 1.1 5 3.7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="9.5" r="2.8" />
                          <path d="M7 18c.8-2.5 2.7-3.5 5-3.5s4.2 1 5 3.5" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[10px] font-semibold leading-[12px] mt-0.5 tracking-tight transition-colors duration-200 ${
                      activeTab === "account"
                        ? "text-[#0066db] dark:text-[#5299f7]"
                        : "text-[#4a5a70] dark:text-[#8b9aae] group-hover:text-[#0e1726] dark:group-hover:text-white"
                    }`}>
                      {t.phone.nav.account[lang]}
                    </span>
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
