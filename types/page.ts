import { ParsedUrlQuery } from 'querystring';

import { SbLanguage, SbPageModel } from '@/lib/storyblok/storyblok.types';
import { AlternativeSlugs } from '@/context/localeContext/LocaleContext.types';

export type PageProps = {
  story: SbPageModel;
  lang: SbLanguage;
  key: number;
  alternativeSlugs?: AlternativeSlugs;
};

export interface PageParams extends ParsedUrlQuery {
  slug: string[];
}
