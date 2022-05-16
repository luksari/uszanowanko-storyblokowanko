import React, { useMemo, useState } from 'react';

import { LocaleContext } from 'context/localeContext/LocaleContext';
import {
  I18nLanguage,
  LocaleContextControllerProps,
  LocaleContextDispatch,
  LocaleContextState,
} from 'context/localeContext/LocaleContext.types';

export const LocaleContextController = ({ children }: LocaleContextControllerProps) => {
  const [alternativeSlugs, setAlternativeSlugs] = useState<LocaleContextState['alternativeSlugs']>(null);
  const [locale, setLocale] = useState<LocaleContextState['locale']>(I18nLanguage.Pl);

  const ctxValue = useMemo<LocaleContextState & LocaleContextDispatch>(
    () => ({ locale, alternativeSlugs, setLocale, setAltSlugs: setAlternativeSlugs }),
    [locale, alternativeSlugs],
  );

  return <LocaleContext.Provider value={ctxValue}>{children}</LocaleContext.Provider>;
};
