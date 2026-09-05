import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../data/translations';

/**
 * Contexte global de langue (FR / EN).
 * Fournit :
 *  - language      : la langue active ('fr' | 'en')
 *  - setLanguage   : change explicitement la langue
 *  - toggleLanguage : bascule instantanément FR <-> EN
 *  - t             : le dictionnaire de traductions de la langue active
 */
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const t = useMemo(() => translations[language], [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, toggleLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage doit être utilisé à l'intérieur d'un LanguageProvider.");
  }
  return context;
}
