import { GetStaticPaths, GetStaticProps } from 'next';

import { sbClient } from '@/context/storyblokContext/StoryblokContextController';
import { PageParams, PageProps } from '@/types/page';
import { AppPage } from '@/templates/AppPage';
import { getStories } from '@/services/storyblok/getStories';
import { SbLanguage } from '@/lib/storyblok/storyblok.types';

const SluggedPage = (props: PageProps) => {
  return <AppPage ctx={props} />;
};

export default SluggedPage;

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async (ctx) => {
  const { slug } = ctx.params as PageParams;
  const joinedSlug: string = slug ? slug.join('/') : 'home';

  const { data } = await getStories(joinedSlug, SbLanguage.Pl);
  console.log(data);

  return {
    props: {
      story: data.story,
      key: data.story.id,
      lang: ctx.params?.lang,
    } as PageProps,
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const { data } = await sbClient.get('cdn/links/');

  const paths = Object.keys(data.links)
    .map((linkKey) => {
      if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
        return null;
      }

      const slug: string = data.links[linkKey].slug;
      const splittedSlug = slug.split('/');

      return { params: { slug: splittedSlug, lang: 'pl' } };
    })
    .filter(Boolean) as { params: PageParams }[];

  return {
    paths,
    fallback: false,
  };
};
