import React, { ReactNode, useMemo, useState } from 'react';
import { storyblokInit, useStoryblokBridge, apiPlugin } from '@storyblok/js';

import { SbLinkModel, SbPageModel, StoryblokClient } from 'lib/storyblok/storyblok.types';

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
  const [story, setStory] = useState<SbPageModel | null>(null);
  /** @TODO Move links out of this controller */
  const [links, setLinks] = useState<SbLinkModel[] | null>(null);

  /** @TODO Refactor */
  useStoryblokBridge(story?.id || 0, (story) => {
    setStory(story as any);
  });

  const ctxValue = useMemo<StoryblokContextState>(() => ({ story, setStory, setLinks, links }), [links, story]);

  return <StoryblokContext.Provider value={ctxValue}>{children}</StoryblokContext.Provider>;
};
