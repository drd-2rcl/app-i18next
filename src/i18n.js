import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(detector)
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en", 

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;