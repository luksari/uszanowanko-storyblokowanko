import { GetStaticPaths, GetStaticProps } from 'next';

import { PageParams, PageProps } from '@/types/page';
import { AppPage } from '@/templates/AppPage';
import { getLinks, getStory } from '@/services/storyblok/storyblok';
import { i18nToStoryblokMap } from '@/i18n/i18n.utils';
import { I18nLocale } from '@/context/localeContext/LocaleContext.types';
import { PreviewPage } from '@/templates/PreviewPage';

const SluggedPage = (props: PageProps) => {
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
  const { slug } = params as PageParams;
  const joinedSlug: string = slug.join('/');
  const res = await getStory(joinedSlug, i18nToStoryblokMap[locale as I18nLocale]);

  return {
    props: {
      story: res.data ? res.data.story : null,
      key: res.data ? res.data.story.id : null,
      locale: locale ?? I18nLocale.Pl,
      locales: locales ?? [],
      defaultLocale: defaultLocale ?? I18nLocale.Pl,
      preview: !!preview,
    } as PageProps,
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths<PageParams> = async ({ locales }) => {
  const { data } = await getLinks();
  const paths: { params: PageParams; locale: I18nLocale }[] = [];

  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    const slug: string = data.links[linkKey].slug;

    // Create mapping for every language
    // it has to be formatted like this, because of docs requirements
    const splittedSlug = slug.split('/');

    for (const locale of locales as I18nLocale[]) {
      paths.push({
        params: { slug: splittedSlug },
        locale,
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};
