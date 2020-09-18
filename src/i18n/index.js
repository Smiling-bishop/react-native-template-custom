import React from 'react';
import dayjs from 'dayjs';
import de from './locales/de';
import en from './locales/en';
import fr from './locales/fr';

require('dayjs/locale/fr');
require('dayjs/locale/de');
require('dayjs/locale/en');

const defaultLocale = 'fr';

const I18n = {
  locale: defaultLocale,
  fallbackLocale: 'fr',
  dictionaries: {
    de,
    en,
    fr,
  },
  setLocale: (locale) => (I18n.locale = locale),
  t: (key) => {
    try {
      const word =
        I18n.dictionaries[I18n.locale][key] ||
        I18n.dictionaries[I18n.fallbackLocale][key];

      if (!word) {
        throw new Error(
          `${key} => ${I18n.language}: ${I18n.dictionaries[
            I18n.locale
          ].hasOwnProperty(key)} | ${I18n.language}: ${I18n.dictionaries[
            I18n.fallbackLocale
          ].hasOwnProperty(key)}`,
        );
      }

      return word;
    } catch (e) {
      console.debug(`I18n: ${key}`);
      return key;
    }
  },
};

dayjs.locale(defaultLocale);

export const I18nContext = React.createContext({});

export const I18nProvider = ({children}) => {
  const [locale, changeLocale] = React.useState(defaultLocale);
  const setLocale = React.useCallback((language) => {
    I18n.setLocale(language);
    changeLocale(language);
  }, []);

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
      }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => React.useContext(I18nContext);

export default I18n;
