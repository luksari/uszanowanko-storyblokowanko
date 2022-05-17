import React from 'react';

import { SbPage } from 'lib/storyblok/sbPage/SbPage';
import { PageProps } from '@/types/page';

export const AppPage = (props: PageProps) => {
  if (!props.story) {
    return null;
  }

  return <SbPage story={props.story} links={props.links} />;
};
