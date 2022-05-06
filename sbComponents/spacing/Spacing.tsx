import React from 'react';

import { SpacingProps } from 'sbComponents/spacing/Spacing.types';
import { getColor } from 'lib/storyblok/storyblok.helpers';

export const Spacing = ({ blok, ...rest }: SpacingProps) => {
  return (
    <div
      {...rest}
      style={{ width: '100%', height: Number(blok.size), backgroundColor: getColor(blok.background_color) }}
    />
  );
};
