import { ParsedUrlQuery } from 'querystring';

import { SbPageModel } from '@/lib/storyblok/storyblok.types';
import { AlternativeSlugs, I18nLocale } from '@/context/localeContext/LocaleContext.types';

export type PageProps = {
  story: SbPageModel;
  key: number;
  alternativeSlugs?: AlternativeSlugs;
  locale: I18nLocale;
  locales: I18nLocale[];
  defaultLocale: I18nLocale;
  preview: boolean;
};

export interface PageParams extends ParsedUrlQuery {
  slug: string[];
}
