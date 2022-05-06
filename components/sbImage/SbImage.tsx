import React, { useMemo } from 'react';

import { SbImageProps } from 'components/sbImage/SbImage.types';
import { buildImageServiceSrc } from 'components/sbImage/SbImage.utils';

export const SbImage = ({ src = '', options, ...rest }: SbImageProps) => {
  const source = useMemo(() => buildImageServiceSrc(src, options), [src, options]);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img {...rest} src={source} />
  );
};
