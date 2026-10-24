"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, Translations } from "./types";
import { translations } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("EN");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("autoral-lang") as Language | null;
      if (saved === "EN" || saved === "BN") {
        setLangState(saved);
        document.documentElement.lang = saved === "BN" ? "bn" : "en";
      }
    } catch {
      // LocalStorage access may fail in private mode
    }
  }, []);

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    try {
      localStorage.setItem("autoral-lang", nextLang);
    } catch {
      // ignore
    }
    document.documentElement.lang = nextLang === "BN" ? "bn" : "en";
  };

  const toggleLang = () => {
    setLang(lang === "EN" ? "BN" : "EN");
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

