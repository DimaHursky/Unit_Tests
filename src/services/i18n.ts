import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import resources from '../locales';
import { TLocaleOptions } from '../types/locale';

const i18nInitOptions: InitOptions = {
  lng: 'ua',
  fallbackLng: 'en',
  resources,
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
  },
  partialBundledLanguages: true,
};

const initI18nInstance =
  (options: InitOptions) => (backendOptions?: TLocaleOptions) => {
    const i18nInstance = i18n.use(initReactI18next);

    if (backendOptions) {
      i18nInstance.use(HttpApi);
    }
    i18nInstance.init({ ...options, ...backendOptions });
    return i18nInstance;
  };

export default initI18nInstance(i18nInitOptions);
