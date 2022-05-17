import { SbLanguage } from '@/lib/storyblok/storyblok.types';
import { GetLinksRes, GetStoriesRes } from '@/services/storyblok/storyblok.types';
import { storyblokApi } from '@/pages/_app';

export const getAllStories = async (language = SbLanguage.Pl): Promise<GetStoriesRes> => {
  const localeToQuery = language === 'default' ? '[default]' : language;

  const sbParams = {
    version: process.env.NEXT_PUBLIC_SB_VERSION,
    resolve_links: 'url',
    starts_with: `${localeToQuery}/${process.env.NEXT_PUBLIC_APP_CATALOG}`,
  };

  return await storyblokApi.get(`cdn/stories`, sbParams);
};

export const getLinks = async (): Promise<GetLinksRes> => {
  const sbParams = {
    version: process.env.NEXT_PUBLIC_SB_VERSION,
  };

  return await storyblokApi.get(`cdn/links`, sbParams);
};
