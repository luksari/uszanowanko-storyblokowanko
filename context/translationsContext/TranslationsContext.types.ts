import { ReactNode } from 'react';

import pl from '@/i18n/translations/pl.json';

export type Translations = typeof pl;

export type TranslatingFunction = (key: keyof Translations) => string;

export type TranslationsContextState = {
  t: TranslatingFunction;
};

export type TranslationsContextControllerProps = {
  children: ReactNode;
};
