import locales from 'i18n/locales.json';
import { SbLanguage } from '@/lib/storyblok/storyblok.types';

export enum I18nLanguage {
  Pl = 'pl',
  Es = 'es',
  En = 'en',
}

export const i18nConfig = {
  defaultLocale: SbLanguage.Pl,
  locales: locales.map((locale) => locale as I18nLanguage),
};
