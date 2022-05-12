import { sbClient } from '@/context/storyblokContext/StoryblokContextController';
import { SbLanguage } from '@/lib/storyblok/storyblok.types';
import { GetLinksRes, GetStoryRes } from '@/services/storyblok/storyblok.types';

export const getStory = async (slug: string, language = SbLanguage.Pl): Promise<GetStoryRes> => {
  const sbParams = {
    version: process.env.NEXT_PUBLIC_SB_VERSION,
    resolve_links: 'url',
    language,
  };

  return await sbClient.get(`cdn/stories/${slug}`, sbParams);
};

export const getLinks = async (): Promise<GetLinksRes> => {
  const sbParams = {
    version: process.env.NEXT_PUBLIC_SB_VERSION,
  };

  return await sbClient.get(`cdn/links`, sbParams);
};
