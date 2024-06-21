"use client";

import * as React from "react";
import { getDictionary } from "@/components/dictionaries"; // Importuj funkcję do ładowania tłumaczeń

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  dictionary: Record<string, string> | null;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLanguage: string }> = ({ children, initialLanguage }) => {
  const [language, setLanguage] = React.useState<string>(initialLanguage);
  const [dictionary, setDictionary] = React.useState<Record<string, string> | null>(null);
  
  React.useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionary(initialLanguage);
      setDictionary(dict);
    };
    loadDictionary();
  }, [initialLanguage]);

  const changeLanguage = async (newLanguage: string) => {
    setLanguage(newLanguage);
    const dict = await getDictionary(newLanguage);
    setDictionary(dict);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
