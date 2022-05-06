import { SbPageModel } from 'lib/storyblok/storyblok.types';

export type StoryblokContextState = {
  story: SbPageModel | null;
  setStory: (story: SbPageModel) => void;
};

