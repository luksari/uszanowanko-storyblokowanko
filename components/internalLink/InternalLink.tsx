import React, { ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';

import { getPathPrefixedWithLocale, removeRootAndLocaleCatalog } from 'lib/storyblok/link/link.utils';
import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';

export const InternalLink = ({
  href,
  locale: linkLocale,
  children,
  ...rest
}: LinkProps & { children?: ReactNode; className?: string }) => {
  return (
    <NextLink
      passHref
      href={href}
      locale={linkLocale}
      lang={linkLocale as string}
      hrefLang={linkLocale as string}
      {...rest}
    >
      <a className={rest.className} href={href as string} lang={linkLocale as string} hrefLang={linkLocale as string}>
        {children}
      </a>
    </NextLink>
  );
};
