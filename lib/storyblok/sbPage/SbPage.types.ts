import { SbEditableAttrs, SbLinkModel, SbPageModel } from 'lib/storyblok/storyblok.types';

export type StoryblokPageProps = {
  story: SbPageModel;
  links: SbLinkModel[];
  editable?: SbEditableAttrs;
};
