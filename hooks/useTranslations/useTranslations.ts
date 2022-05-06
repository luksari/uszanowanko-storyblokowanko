import { useContext } from 'react';

import { TranslationsContext } from 'context/translationsContext/TranslationsContext';

export const useTranslations = () => {
  const ctx = useContext(TranslationsContext);

  if (!ctx) {
    throw Error('Translations context must be used within TranslationsContextController');
  }

  return ctx;
};
