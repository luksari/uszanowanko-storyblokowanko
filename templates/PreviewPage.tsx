import React from 'react';
import { sbEditable } from '@storyblok/storyblok-editable';

import { SbPage } from 'lib/storyblok/sbPage/SbPage';
import { useStoryblokContext } from 'hooks/useStoryblokContext/useStoryblokContext';

export const PreviewPage = () => {
  const { story } = useStoryblokContext();

  if (!story) {
    return null;
  }

  return <SbPage story={story} editable={sbEditable(story.content)} />;
};

