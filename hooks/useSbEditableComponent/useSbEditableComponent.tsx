import React, { ComponentType } from 'react';
import { useCallback } from 'react';
import { sbEditable } from '@storyblok/storyblok-editable';

import { useBuildMode } from '@/hooks/useBuildMode/useBuildMode';
import { SbBlok, SbComponentsMap } from '@/lib/storyblok/storyblok.types';
import { NotDefined } from '@/lib/storyblok/notDefined/NotDefined';

export const useSbEditableComponent = <ComponentNames extends string>(
  componentWhitelist: SbComponentsMap<ComponentNames>,
) => {
  const { isPreview } = useBuildMode();

  const getSbEditableComponent = useCallback(
    <TExtraProps extends Record<string, any>>(
      blok: SbBlok<ComponentNames, Record<string, unknown>, ComponentNames>,
      extraProps?: TExtraProps,
    ) => {
      const componentName = blok.component as ComponentNames;
      if (componentWhitelist[componentName]) {
        const Component: ComponentType<any> = componentWhitelist[componentName];
        const editable = isPreview ? sbEditable(blok) : {};
        return <Component {...editable} {...extraProps} blok={blok} key={blok._uid} />;
      } else {
        return <NotDefined componentName={componentName} />;
      }
    },
    [componentWhitelist, isPreview],
  );

  return { getSbEditableComponent };
};
