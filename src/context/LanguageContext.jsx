import { createContext, useState, useMemo,useEffect } from "react";
import en from "../locales/en";
import ar from "../locales/ar";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  
  const [language, setLanguage] = useState("en");

 
  // useMemo prevents recalculating on every render
  const t = useMemo(() => {
    return language === "ar" ? ar : en;
  }, [language]);

  function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  }

   // RTL / LTR support
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
