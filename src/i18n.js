import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: {
        globalError: 'An error has occured, please hold on while our Allstar is looking to resolve it for you!.',
        loading: 'Loading...',
      },
      appbar: {
        title: 'Sample React App',
      },
    },
    ms: {
      common: {
        loading: 'Sedang Memuatkan...',
      },
      appbar: {
        title: 'Tajuk',
      },
    },
  },
  lng: sessionStorage.language || 'en',
  fallbackLng: 'en',
  debug: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
