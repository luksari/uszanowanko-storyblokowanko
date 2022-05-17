import { Dispatch, SetStateAction } from 'react';

import { SbLinkModel, SbPageModel } from 'lib/storyblok/storyblok.types';

export type StoryblokContextState = {
  story: SbPageModel | null;
  setStory: Dispatch<SetStateAction<SbPageModel | null>>;
  links: SbLinkModel[] | null;
  setLinks: Dispatch<SetStateAction<SbLinkModel[] | null>>;
};
