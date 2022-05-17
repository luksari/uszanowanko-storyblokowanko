import React from 'react';
import { storyblokEditable } from '@storyblok/js';

import { SbPage } from 'lib/storyblok/sbPage/SbPage';
import { useStoryblokContext } from 'hooks/useStoryblokContext/useStoryblokContext';

export const PreviewPage = () => {
  const { story } = useStoryblokContext();

  if (!story) {
    return null;
  }

  return <SbPage story={story} editable={storyblokEditable(story.content)} />;
};
