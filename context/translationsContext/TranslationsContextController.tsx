import React, { FC, useCallback } from 'react';

import { TranslationsContext } from 'context/translationsContext/TranslationsContext';
import {
  TranslatingFunction,
  Translations,
  TranslationsContextControllerProps
} from 'context/translationsContext/TranslationsContext.types';
import { useLocale } from 'hooks/useLocale/useLocale';
import pl from 'i18n/translations/default.json';
import {SbLanguage} from "@/lib/storyblok/storyblok.types";

const resources: Record<SbLanguage, Translations> = {
  [SbLanguage.En]: pl,
  [SbLanguage.Es]: pl,
  [SbLanguage.Pl]: pl,
};

export const TranslationsContextController = ({ children }: TranslationsContextControllerProps) => {
  const { locale } = useLocale();
  const t = useCallback<TranslatingFunction>((key) => resources[locale][key], [locale]);
  return <TranslationsContext.Provider value={{ t }}>{children}</TranslationsContext.Provider>;
};
