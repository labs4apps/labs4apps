'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const LanguageSelector = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';
  
  const handleLanguageChange = (locale) => {
    document.cookie = `locale=${locale}; path=/`;
    const newPath = `/${locale}${pathname.replace(/^\/(en|pl)/, '')}`;
    window.location.href = newPath;
  };

  return (
    <div className="flex gap-2">
      <span
        className={clsx('cursor-pointer', { 'text-primary font-bold': currentLocale === 'pl', 'text-default': currentLocale !== 'pl' })}
        onClick={() => handleLanguageChange('pl')}
      >
        PL
      </span>
      /
      <span
        className={clsx('cursor-pointer', { 'text-primary font-bold': currentLocale === 'en', 'text-default': currentLocale !== 'en' })}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </span>
    </div>
  );
};

export default LanguageSelector;
