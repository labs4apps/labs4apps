"use client";

import clsx from "clsx";

const LanguageOption = ({ locale, currentLocale, onLanguageChange, label }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      onLanguageChange(locale);
    }
  };

  return (
    <span
      role="button"
      tabIndex="0"
      aria-label={`Switch to ${label}`}
      className={clsx("cursor-pointer", {
        "text-inherit": currentLocale === locale,
        "text-default": currentLocale !== locale,
      })}
      onClick={() => onLanguageChange(locale)}
      onKeyPress={handleKeyPress}
    >
      {label}
    </span>
  );
};

export default LanguageOption;
