import React, { useMemo } from 'react';
import Image from 'next/image';

import { SbImageProps } from 'components/sbImage/SbImage.types';
import { buildImageServiceSrc } from 'components/sbImage/SbImage.utils';
export const SbImage = ({ src = '', options, ...rest }: SbImageProps) => {
  const source = useMemo(() => buildImageServiceSrc(src, options), [src, options]);

  return (
    <Image
      title={rest.title}
      className={rest.className}
      alt={rest.alt}
      src={source}
      layout={'fill'}
      objectFit={'cover'}
    />
  );
};
