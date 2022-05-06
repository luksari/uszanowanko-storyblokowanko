import React, {ReactNode} from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme/theme';
import { Layout } from 'components/layout/Layout';
import {StoryblokContextController} from 'context/storyblokContext/StoryblokContextController';
import { LocaleContextController } from 'context/localeContext/LocaleContextController';
import { TranslationsContextController } from 'context/translationsContext/TranslationsContextController';

import { AppRootStyles } from './AppProviders.styles';
import {SbLanguage} from "@/lib/storyblok/storyblok.types";
import {useRouter} from "next/router";


// eslint-disable-next-line import/no-default-export
export const AppProviders = ({ children }: { children: ReactNode }) => {
  const { } = useRouter()
  return (
    <LocaleContextController
      locale={SbLanguage.Pl}
      alternativeSlugs={null}
    >
      <TranslationsContextController>
          <StoryblokContextController>
            <ThemeProvider theme={theme}>
              <AppRootStyles />
              <Layout>{children}</Layout>
            </ThemeProvider>
          </StoryblokContextController>
      </TranslationsContextController>
    </LocaleContextController>
  );
};