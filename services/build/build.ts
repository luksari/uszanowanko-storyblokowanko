import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';
import { SbLinkModel } from '@/lib/storyblok/storyblok.types';

const root = process.env.NEXT_PUBLIC_APP_CATALOG;

export const getPath = (link: SbLinkModel, locale: I18nLanguage) => {
  const stringToReplace = locale === I18nLanguage.Pl ? `${root}/` : `${locale}/${root}/`;
  console.log(`${locale}/${root}/`);
  let path = link.real_path.replace(stringToReplace, '');

  if (locale !== I18nLanguage.Pl) {
    path = `${locale}${path}`;
  }

  return path;
};
