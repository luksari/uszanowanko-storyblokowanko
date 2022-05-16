import React, { ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';

import { getPathPrefixedWithLocale } from 'lib/storyblok/link/link.utils';
import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';

export const InternalLink = ({ href, locale: linkLocale, children, ...rest }: LinkProps & { children?: ReactNode }) => {
  return (
    <NextLink
      passHref
      href={getPathPrefixedWithLocale(linkLocale as I18nLanguage, href)}
      locale={linkLocale}
      lang={linkLocale as string}
      hrefLang={linkLocale as string}
      {...rest}
    >
      <a
        href={getPathPrefixedWithLocale(linkLocale as I18nLanguage, href)}
        lang={linkLocale as string}
        hrefLang={linkLocale as string}
      >
        {children}
      </a>
    </NextLink>
  );
};
