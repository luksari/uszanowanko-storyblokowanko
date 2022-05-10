import { sbClient } from '@/context/storyblokContext/StoryblokContextController';
import { SbLanguage } from '@/lib/storyblok/storyblok.types';
import { GetStoriesRes } from '@/services/storyblok/getStories.types';

export const getStories = async (slug: string, language: SbLanguage): Promise<GetStoriesRes> => {
  const sbParams = {
    version: process.env.NEXT_SB_VERSION,
    resolve_links: 'url',
    language,
  };

  return await sbClient.get(`cdn/stories/${slug}`, sbParams);
};
