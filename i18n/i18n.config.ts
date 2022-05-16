import locales from 'i18n/locales.json';
import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';

export const i18nConfig = {
  defaultLocale: I18nLanguage.Pl,
  locales: locales.map((locale) => locale as I18nLanguage),
};
