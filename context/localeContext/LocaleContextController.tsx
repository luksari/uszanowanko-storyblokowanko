import React, { useMemo } from 'react';

import { LocaleContext } from 'context/localeContext/LocaleContext';
import {
  LocaleContextControllerProps,
  LocaleContextState
} from 'context/localeContext/LocaleContext.types';


export const LocaleContextController = ({ children, locale, alternativeSlugs }: LocaleContextControllerProps) => {
  const ctxValue = useMemo<LocaleContextState>(() => ({ locale, alternativeSlugs }), [locale, alternativeSlugs]);

  return <LocaleContext.Provider value={ctxValue}>{children}</LocaleContext.Provider>;
};
