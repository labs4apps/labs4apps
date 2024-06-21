"use client";
const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  pl: () => import("../dictionaries/pl.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!dictionaries[locale]) {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }
  return dictionaries[locale]();
};
