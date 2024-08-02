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
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const loadDictionary = async () => {
      setLoading(true);
      const dict = await getDictionary(language);
      setDictionary(dict);
      setLoading(false);
    };
    loadDictionary();
  }, [language]);

  const changeLanguage = async (newLanguage: string) => {
    setLanguage(newLanguage);
    setLoading(true);
    const dict = await getDictionary(newLanguage);
    setDictionary(dict);
    setLoading(false);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, dictionary }}>
      {loading ? <p></p> : children}
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
