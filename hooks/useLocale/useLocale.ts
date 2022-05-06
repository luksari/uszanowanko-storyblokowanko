import { useContext } from 'react';

import { LocaleContext } from '@/context/localeContext/LocaleContext';

export const useLocale = () => {
  const ctx = useContext(LocaleContext);

  if (!ctx) {
    throw new Error('useLocale must be used in scope of LocaleContextController');
  }

  return ctx;
};
