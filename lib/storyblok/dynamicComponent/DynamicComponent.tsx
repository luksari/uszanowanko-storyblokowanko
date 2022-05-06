import { sbRootComponents } from 'lib/storyblok/componentsMap/componentsMap';
import { useSbEditableComponent } from 'hooks/useSbEditableComponent/useSbEditableComponent';

import { DynamicComponentProps } from './DynamicComponent.types';

export const DynamicComponent = ({ blok }: DynamicComponentProps) => {
  const { getSbEditableComponent } = useSbEditableComponent(sbRootComponents);

  if (!blok) {
    return null;
  }

  return getSbEditableComponent(blok);
};
