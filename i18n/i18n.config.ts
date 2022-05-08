import locales from 'i18n/locales.json';
import {SbLanguage} from "@/lib/storyblok/storyblok.types";

export const i18nConfig = {
  defaultLocale: SbLanguage.Pl,
  locales: locales.map((locale) => locale as SbLanguage),
  cookie: {
    name: 'lang',
    defaultExpirationInDays: 365,
  },
};
