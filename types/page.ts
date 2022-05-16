import { ParsedUrlQuery } from 'querystring';

import { SbLinkModel, SbPageModel } from '@/lib/storyblok/storyblok.types';
import { AlternativeSlugs, I18nLanguage } from '@/context/localeContext/LocaleContext.types';

export type PageProps = {
  story: SbPageModel;
  key: number;
  alternativeSlugs: AlternativeSlugs | null;
  locale: I18nLanguage;
  locales: I18nLanguage[];
  defaultLocale: I18nLanguage;
  preview: boolean;
  links: SbLinkModel[];
};

export interface PageParams extends ParsedUrlQuery {
  slug: string[];
}
