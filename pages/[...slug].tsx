import { GetStaticPaths, GetStaticProps } from 'next';

import { sbClient } from '@/context/storyblokContext/StoryblokContextController';
import { PageParams, PageProps } from '@/types/page';
import { AppPage } from '@/templates/AppPage';
import { getStory, getLinks } from '@/services/storyblok/storyblok';
import { SbLanguage } from '@/lib/storyblok/storyblok.types';
import { i18nConfig } from '@/i18n/i18n.config';

const SluggedPage = (props: PageProps) => {
  return <AppPage ctx={props} />;
};

export default SluggedPage;

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async (ctx) => {
  const { slug } = ctx.params as PageParams;
  const joinedSlug: string = slug ? slug.join('/') : 'home';

  const res = await getStory(joinedSlug, SbLanguage.Pl);

  return {
    props: {
      story: res.data.story,
      key: res.data.story.id,
    } as PageProps,
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const { data } = await getLinks();
  const paths: { params: PageParams; locale: SbLanguage }[] = [];
  Object.keys(data.links).forEach((linkKey) => {
    i18nConfig.locales.forEach((locale) => {
      if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
        return null;
      }

      const slug: string = data.links[linkKey].slug;

      // Create mapping for every language
      // it has to be formatted like this, because of docs requirements
      const splittedSlug = slug.split('/');

      paths.push({
        params: { slug: splittedSlug },
        locale,
      });
    });
  });
  return {
    paths,
    fallback: false,
  };
};
