import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme/theme';
import { LocaleContextController } from 'context/localeContext/LocaleContextController';
import { TranslationsContextController } from '@/context/translationsContext/TranslationsContextController';

import { AppRootStyles } from './AppProviders.styles';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <LocaleContextController>
      <TranslationsContextController>
        <ThemeProvider theme={theme}>
          <AppRootStyles />
          <>{children}</>
        </ThemeProvider>
      </TranslationsContextController>
    </LocaleContextController>
  );
};
