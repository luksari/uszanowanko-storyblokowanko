import React, { ReactNode, useMemo, useState } from 'react';
import { apiPlugin, storyblokInit, useStoryblokBridge } from '@storyblok/js';

import { SbLanguage, SbLinkModel, SbPageModel, StoryblokClient } from 'lib/storyblok/storyblok.types';
import { useLocale } from '@/hooks/useLocale/useLocale';
import { storyblokToi18nMap } from '@/i18n/i18n.utils';

import { StoryblokContext } from './StoryblokContext';
import { StoryblokContextState } from './StoryblokContext.types';

const sb: any = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
  bridge: process.env.NODE_ENV !== 'production',
  use: [apiPlugin] as any,
  apiOptions: {
    cache: {
      clear: 'auto',
      type: 'memory',
    },
  },
});

export const storyblokApi: StoryblokClient = sb.storyblokApi;

export const StoryblokContextController = ({ children }: { children: ReactNode }) => {
  const { setLocale } = useLocale();
  const [story, setStory] = useState<SbPageModel | null>(null);
  /** @TODO Move links out of this controller */
  const [links, setLinks] = useState<SbLinkModel[] | null>(null);

  /** @TODO Refactor */
  useStoryblokBridge(story?.id || 0, (story) => {
    setStory(story as any);
    // '' empty string is default language
    setLocale(storyblokToi18nMap[(story.lang || SbLanguage.Pl) as SbLanguage]);
  });

  const ctxValue = useMemo<StoryblokContextState>(() => ({ story, setStory, setLinks, links }), [links, story]);

  return <StoryblokContext.Provider value={ctxValue}>{children}</StoryblokContext.Provider>;
};
