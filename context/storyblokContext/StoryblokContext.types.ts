import { Dispatch, SetStateAction } from 'react';

import { SbLinkModel, SbPageModel } from 'lib/storyblok/storyblok.types';

export type StoryblokContextState = {
  story: SbPageModel | null;
  setStory: (story: SbPageModel) => void;
  links: SbLinkModel[];
  setLinks: Dispatch<SetStateAction<SbLinkModel[]>>;
};
