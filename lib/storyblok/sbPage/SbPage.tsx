import React from 'react';

import { DynamicComponent } from 'lib/storyblok/dynamicComponent/DynamicComponent';
import { BreadcrumbsBar } from 'sbComponents/breadcrumbsBar/BreadcrumbsBar';
import { SbComponentsMap } from 'lib/storyblok/storyblok.types';
import { useSbEditableComponent } from 'hooks/useSbEditableComponent/useSbEditableComponent';
import { BreadcrumbsBarOwnProps } from 'sbComponents/breadcrumbsBar/BreadcrumbsBar.types';

import { BreadcrumbsAllowedComponent, StoryblokPageProps } from './SbPage.types';

const componentsMap: SbComponentsMap<BreadcrumbsAllowedComponent> = {
  'breadcrumbs-bar': BreadcrumbsBar,
};

export const SbPage = ({ story, editable }: StoryblokPageProps) => {
  const { getSbEditableComponent } = useSbEditableComponent(componentsMap);
  return (
    <>
      {getSbEditableComponent<BreadcrumbsBarOwnProps>(story.content.breadcrumbs_bar[0], {
        fullSlug: story.full_slug,
        locale: story.lang,
      })}
      <div {...editable}>
        {story.content.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </>
  );
};
