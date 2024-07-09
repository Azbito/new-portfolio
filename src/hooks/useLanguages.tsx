import { useState, useEffect } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState<string>("pt");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("lang");
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }
  }, []);

  const setLanguageToEnglish = () => {
    setLanguage("en");
    localStorage.setItem("lang", "en");
  };

  const setLanguageToPortuguese = () => {
    setLanguage("pt");
    localStorage.setItem("lang", "pt");
  };

  return {
    language,
    setLanguageToEnglish,
    setLanguageToPortuguese,
  };
}
