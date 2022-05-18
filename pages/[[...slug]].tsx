import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';

import { PageParams, PageProps } from '@/types/page';
import { AppPage } from '@/templates/AppPage';
import { i18nToStoryblokMap, storyblokToi18nMap } from '@/i18n/i18n.utils';
import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';
import { PreviewPage } from '@/templates/PreviewPage';
import { useLocale } from '@/hooks/useLocale/useLocale';
import { removeRootAndLocaleCatalog, removeRootCatalog } from '@/lib/storyblok/link/link.utils';
import { getAllStories, getLinks } from '@/integration/stories/stories';

const SluggedPage = (props: PageProps) => {
  const { setAltSlugs, setLocale } = useLocale();

  useEffect(() => {
    setAltSlugs(props.alternativeSlugs);
    setLocale(props.locale);
  }, [props.alternativeSlugs, props.locale, setAltSlugs, setLocale]);

  return <>{props.preview ? <PreviewPage {...props} /> : <AppPage {...props} />}</>;
};

export default SluggedPage;

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
  locales,
  locale,
  defaultLocale,
  params,
  preview,
}) => {
  const root = process.env.NEXT_PUBLIC_APP_CATALOG;

  const { data: storiesData } = await getAllStories(i18nToStoryblokMap[locale as I18nLanguage]);
  const { data: linksData } = await getLinks();
  const { slug: slugArr } = params as PageParams;

  const joinedSlug = slugArr?.join('/') || '';
  const slugWithLocale = locale === I18nLanguage.Pl ? `${root}/${joinedSlug}` : `${locale}/${root}/${joinedSlug}`;

  const story = storiesData.stories.find((story) => {
    return story.full_slug === slugWithLocale;
  });

  if (!story) {
    return {
      notFound: true,
    };
  }

  const links = Object.values(linksData.links)
    .map((link) => {
      if (link.is_folder) {
        return;
      }

      return { ...link, slug: `/${removeRootCatalog(link.slug)}` };
    })
    .filter(Boolean);

  const altSlugs = locales?.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: `/${joinedSlug}`,
    };
  }, {});

  return {
    props: {
      story: story,
      key: story.id,
      locale: storyblokToi18nMap[story.lang],
      locales: locales ?? [],
      defaultLocale: defaultLocale ?? I18nLanguage.Pl,
      preview: !!preview,
      alternativeSlugs: altSlugs,
      links,
    } as PageProps,
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths<PageParams> = async ({ locales }) => {
  const { data } = await getLinks();
  const paths: { params: PageParams; locale: I18nLanguage }[] = [];

  Object.keys(data.links).forEach((linkKey) => {
    const link = data.links[linkKey];
    for (const locale of locales as I18nLanguage[]) {
      if (link.is_folder) {
        return;
      }
      const slug = removeRootAndLocaleCatalog(link.slug, locale)?.split('/');

      if (!slug) {
        return;
      }

      paths.push({
        params: { slug },
        locale,
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};
