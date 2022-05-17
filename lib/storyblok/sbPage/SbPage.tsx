import React from 'react';

import { DynamicComponent } from 'lib/storyblok/dynamicComponent/DynamicComponent';
import { Layout } from '@/components/layout/Layout';

import { StoryblokPageProps } from './SbPage.types';

export const SbPage = ({ story, editable, links }: StoryblokPageProps) => {
  return (
    <Layout story={story} links={links}>
      <div {...editable}>
        {story.content.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </Layout>
  );
};
