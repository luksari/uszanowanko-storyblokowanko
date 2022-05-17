import { SbEditableAttrs, SbPageModel } from 'lib/storyblok/storyblok.types';

export type StoryblokPageProps = {
  story: SbPageModel;
  editable?: SbEditableAttrs;
};
