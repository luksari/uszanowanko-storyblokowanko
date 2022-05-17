import React, { ComponentType } from 'react';
import { useCallback } from 'react';
import { storyblokEditable } from '@storyblok/js';

import { SbBlok, SbComponentsMap } from '@/lib/storyblok/storyblok.types';
import { NotDefined } from '@/lib/storyblok/notDefined/NotDefined';

export const useSbEditableComponent = <ComponentNames extends string>(
  componentWhitelist: SbComponentsMap<ComponentNames>,
) => {
  const getSbEditableComponent = useCallback(
    <TExtraProps extends Record<string, any>>(
      blok: SbBlok<ComponentNames, Record<string, unknown>, ComponentNames>,
      extraProps?: TExtraProps,
    ) => {
      const componentName = blok.component as ComponentNames;
      if (componentWhitelist[componentName]) {
        const Component: ComponentType<any> = componentWhitelist[componentName];
        const editable = storyblokEditable(blok);
        return <Component {...editable} {...extraProps} blok={blok} key={blok._uid} />;
      } else {
        return <NotDefined componentName={componentName} />;
      }
    },
    [componentWhitelist],
  );

  return { getSbEditableComponent };
};
