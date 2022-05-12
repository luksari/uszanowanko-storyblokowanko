import { I18nLocale } from '@/context/localeContext/LocaleContext.types';
import { SbLanguage } from '@/lib/storyblok/storyblok.types';

export const storyblokToi18nMap = {
  [SbLanguage.Pl]: I18nLocale.Pl,
  [SbLanguage.Es]: I18nLocale.Es,
  [SbLanguage.En]: I18nLocale.En,
};

export const i18nToStoryblokMap = {
  [I18nLocale.Pl]: SbLanguage.Pl,
  [I18nLocale.Es]: SbLanguage.Es,
  [I18nLocale.En]: SbLanguage.En,
};
