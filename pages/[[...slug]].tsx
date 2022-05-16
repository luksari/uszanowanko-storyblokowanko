import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';

import { PageParams, PageProps } from '@/types/page';
import { AppPage } from '@/templates/AppPage';
import { getAllStories, getLinks } from '@/services/storyblok/storyblok';
import { i18nToStoryblokMap, storyblokToi18nMap } from '@/i18n/i18n.utils';
import { I18nLanguage } from '@/context/localeContext/LocaleContext.types';
import { PreviewPage } from '@/templates/PreviewPage';
import { useLocale } from '@/hooks/useLocale/useLocale';

const SluggedPage = (props: PageProps) => {
  const { setAltSlugs, setLocale } = useLocale();

  useEffect(() => {
    setAltSlugs(props.alternativeSlugs);
    setLocale(props.locale);
  }, [props.alternativeSlugs, props.locale, setAltSlugs, setLocale]);

  return <>{props.preview ? <PreviewPage /> : <AppPage ctx={props} />}</>;
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

  const joinedSlug: string = slugArr.join('/');
  const slugWithLocale = locale === I18nLanguage.Pl ? `${root}/${joinedSlug}` : `${locale}/${root}/${joinedSlug}`;

  const links = Object.values(linksData.links).map((link) => {
    if (link.is_folder) {
      return;
    }
    const newSlug = locale === I18nLanguage.Pl ? link.slug : `${locale}/${link.slug}`;

    return { ...link, slug: newSlug };
  });

  const story = storiesData.stories.find((story) => {
    return story.full_slug === slugWithLocale;
  });

  const altSlugs = locales?.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: `/${joinedSlug}`,
    };
  }, {});

  if (!story) {
    return {
      notFound: true,
    };
  }

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
    if (link.is_folder) {
      return;
    }

    // Create mapping for every language
    // it has to be formatted like this, because of docs requirements
    const splitSlugRaw = link.slug.split('/');
    const [, ...splitWithoutPrefix] = splitSlugRaw;
    const splitSlug = splitSlugRaw[0] === process.env.NEXT_PUBLIC_APP_CATALOG ? splitWithoutPrefix : splitSlugRaw;

    for (const locale of locales as I18nLanguage[]) {
      paths.push({
        params: { slug: splitSlug },
        locale,
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};
