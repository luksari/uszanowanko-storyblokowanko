import React, { useCallback } from 'react';

import { TranslationsContext } from 'context/translationsContext/TranslationsContext';
import {
  TranslatingFunction,
  Translations,
  TranslationsContextControllerProps,
} from 'context/translationsContext/TranslationsContext.types';
import { useLocale } from 'hooks/useLocale/useLocale';
import pl from '@/i18n/translations/pl.json';
import es from '@/i18n/translations/es.json';
import en from '@/i18n/translations/en.json';
import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';

const resources: Record<I18nLanguage, Translations> = {
  [I18nLanguage.En]: pl,
  [I18nLanguage.Es]: es,
  [I18nLanguage.Pl]: en,
};

export const TranslationsContextController = ({ children }: TranslationsContextControllerProps) => {
  const { locale } = useLocale();
  const t = useCallback<TranslatingFunction>((key) => resources[locale][key], [locale]);
  return <TranslationsContext.Provider value={{ t }}>{children}</TranslationsContext.Provider>;
};
