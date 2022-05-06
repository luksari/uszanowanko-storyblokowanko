import { SbEditableResult } from '@storyblok/storyblok-editable';

import { SbPageModel } from 'lib/storyblok/storyblok.types';

export type BreadcrumbsAllowedComponent = 'breadcrumbs-bar';

export type StoryblokPageProps = {
  story: SbPageModel;
  editable?: SbEditableResult;
};
