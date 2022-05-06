import { useContext } from 'react';

import { StoryblokContext } from 'context/storyblokContext/StoryblokContext';

export const useStoryblokContext = () => {
  const ctx = useContext(StoryblokContext);

  if (!ctx) {
    throw new Error('useStoryblokContext must be used in scope of StoryblokContextController');
  }

  return ctx;
};
