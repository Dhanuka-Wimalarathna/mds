import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from '../translations/en.json';
import si from '../translations/si.json';

const resources = {
  en: { translation: en },
  si: { translation: si },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.getLocales()?.[0]?.languageCode ?? 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => Promise<void>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLangState] = useState(i18n.language);

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLang = await AsyncStorage.getItem('user-language');
      if (savedLang) {
        i18n.changeLanguage(savedLang);
        setLangState(savedLang);
      }
    };
    loadLanguage();
  }, []);

  const setLanguage = async (lang: string) => {
    await AsyncStorage.setItem('user-language', lang);
    i18n.changeLanguage(lang);
    setLangState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
