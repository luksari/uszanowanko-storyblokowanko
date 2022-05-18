import React, { useState } from 'react';
import { storyblokEditable, useStoryblokBridge } from '@storyblok/js';

import { SbPage } from 'lib/storyblok/sbPage/SbPage';
import { useLocale } from '@/hooks/useLocale/useLocale';
import { SbLanguage, SbPageModel } from '@/lib/storyblok/storyblok.types';
import { storyblokToi18nMap } from '@/i18n/i18n.utils';
import { PageProps } from '@/types/page';

export const PreviewPage = (props: PageProps) => {
  const { setLocale } = useLocale();
  const [story, setStory] = useState<SbPageModel | null>(props.story);

  /** @TODO Refactor */
  useStoryblokBridge(story?.id || 0, (story) => {
    setStory(story as any);
    // '' empty string is default language
    setLocale(storyblokToi18nMap[(story.lang || SbLanguage.Pl) as SbLanguage]);
  });

  if (!story) {
    return null;
  }
  return <SbPage story={story} links={props.links} editable={storyblokEditable(story.content)} />;
};
