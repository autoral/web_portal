"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

export type Language = "en" | "bn";

const langListeners = new Set<() => void>();

function subscribeLang(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  langListeners.add(callback);

  const handleStorage = (e: StorageEvent) => {
    if (e.key === "lang") callback();
  };
  const handleCustom = () => callback();

  window.addEventListener("storage", handleStorage);
  window.addEventListener("lang-change", handleCustom);

  return () => {
    langListeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("lang-change", handleCustom);
  };
}

function getLangSnapshot(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("lang")?.toLowerCase();
    if (saved === "bn" || saved === "en") return saved as Language;
  } catch {}
  return "en";
}

function getLangServerSnapshot(): Language {
  return "en";
}

export function setGlobalLanguage(newLang: "en" | "bn" | "EN" | "BN") {
  const normalized: Language = newLang.toLowerCase() === "bn" ? "bn" : "en";
  try {
    localStorage.setItem("lang", normalized);
  } catch {}
  if (typeof document !== "undefined") {
    document.documentElement.lang = normalized;
    document.documentElement.setAttribute("data-lang", normalized.toUpperCase());
  }
  langListeners.forEach((fn) => {
    try {
      fn();
    } catch {}
  });
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("lang-change"));
  }
}

interface LanguageContextType {
  lang: Language;
  setLang: (lang: "en" | "bn" | "EN" | "BN") => void;
  isBN: boolean;
  t: (en: string, bn: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  isBN: false,
  t: (en: string) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);
  const isBN = lang === "bn";

  const t = (en: string, bn: string) => (isBN ? bn : en);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: setGlobalLanguage,
        isBN,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
