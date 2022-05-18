import React from 'react';

import { SpacingProps } from 'sbComponents/spacing/Spacing.types';

export const Spacing = ({ blok, ...rest }: SpacingProps) => {
  return <div {...rest} style={{ width: '100%', height: Number(blok.size) }} />;
};
