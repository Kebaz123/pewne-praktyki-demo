import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { type Language, languages } from '@/locales';

type AppSettings = {
  theme: 'light' | 'dark';
  language: Language;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: Language) => void;
};

const defaultSettings: AppSettings = {
  theme: 'dark',
  language: 'pl',
  setTheme: () => {},
  setLanguage: () => {},
};

const SettingsContext = createContext<AppSettings>(defaultSettings);

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<'light' | 'dark'>('dark');
  const [language, setLanguageState] = useState<Language>('pl');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const savedLanguage = localStorage.getItem('language');
    if (savedTheme) setThemeState(savedTheme);

    if (savedLanguage && languages.includes(savedLanguage as Language))
      setLanguageState(savedLanguage as Language);
  }, []);

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <SettingsContext.Provider
      value={{ theme, language, setTheme, setLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
