import { GetStaticProps } from 'next';

import { PageParams, PageProps } from '@/types/page';
import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';
import { removeRootCatalog } from '@/lib/storyblok/link/link.utils';
import { NotFound } from '@/containers/404/404';

import { getLinks } from '@/integration/stories/stories';

export default (props: PageProps) => {
  return <NotFound {...props} />;
};

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({ locales, defaultLocale, preview }) => {
  const { data: linksData } = await getLinks();

  const links = Object.values(linksData.links)
    .map((link) => {
      if (link.is_folder) {
        return;
      }

      return { ...link, slug: `/${removeRootCatalog(link.slug)}` };
    })
    .filter(Boolean);

  return {
    props: {
      story: null,
      key: 420,
      locale: I18nLanguage.Pl,
      locales: locales ?? [],
      defaultLocale: defaultLocale ?? I18nLanguage.Pl,
      preview: !!preview,
      alternativeSlugs: {
        [I18nLanguage.Pl]: '/',
        [I18nLanguage.Es]: '/es',
        [I18nLanguage.En]: '/en',
      },
      links,
    } as PageProps,
  };
};
