import React from 'react';

import { DynamicComponent } from 'lib/storyblok/dynamicComponent/DynamicComponent';

import { StoryblokPageProps } from './SbPage.types';

export const SbPage = ({ story, editable }: StoryblokPageProps) => {
  return (
    <>
      <div {...editable}>
        {story.content.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </>
  );
};
