"use client";

import { usePathname } from "next/navigation";
import LanguageOption from "@/components/language-option";

const LanguageSelector = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const handleLanguageChange = (locale) => {
    document.cookie = `locale=${locale}; path=/`;
    const newPath = `/${locale}${pathname.replace(/^\/(en|pl)/, "")}`;

    window.location.href = newPath;
  };

  return (
    <div className="flex gap-2">
      <LanguageOption
        locale="pl"
        currentLocale={currentLocale}
        onLanguageChange={handleLanguageChange}
        label="PL"
      />
      |
      <LanguageOption
        locale="en"
        currentLocale={currentLocale}
        onLanguageChange={handleLanguageChange}
        label="EN"
      />
    </div>
  );
};

export default LanguageSelector;
