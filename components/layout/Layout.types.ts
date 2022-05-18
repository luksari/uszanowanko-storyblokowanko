import { ReactNode } from 'react';

import { SbLinkModel, SbPageModel } from '@/lib/storyblok/storyblok.types';

export type LayoutProps = {
  children: ReactNode;
  story: SbPageModel | null;
  links: SbLinkModel[];
};
