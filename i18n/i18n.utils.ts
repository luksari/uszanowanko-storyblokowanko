import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';
import { SbLanguage } from '@/lib/storyblok/storyblok.types';

export const storyblokToi18nMap = {
  [SbLanguage.Pl]: I18nLanguage.Pl,
  [SbLanguage.Es]: I18nLanguage.Es,
  [SbLanguage.En]: I18nLanguage.En,
};

export const i18nToStoryblokMap = {
  [I18nLanguage.Pl]: SbLanguage.Pl,
  [I18nLanguage.Es]: SbLanguage.Es,
  [I18nLanguage.En]: SbLanguage.En,
};
