"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter, usePathname } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { LanguageProvider } from "@/components/language-context"; // Importuj LanguageProvider

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  initialLanguage: string; // Dodaj initialLanguage jako prop
}

const getInitialLanguage = (pathname: string) => {
  return pathname.split('/')[1] || 'en';
};

export function Providers({ children, themeProps, initialLanguage }: ProvidersProps) {
  const router = useRouter();
  const pathname = usePathname()
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <LanguageProvider initialLanguage={getInitialLanguage(pathname)}> {/* Przekaż initialLanguage */}
          {children}
        </LanguageProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
