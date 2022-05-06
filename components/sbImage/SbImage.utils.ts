import { Coords, Crop, Dimensions, ImageServiceOptions } from 'components/sbImage/SbImage.types';

export const DIMENSIONS_AT_URL_PATTERN = /\/[0-9]{1,4}x[0-9]{1,4}\//gm;

export const buildImageServiceSrc = (originalSrc: string, options?: ImageServiceOptions) => {
  if (isImageSvg(originalSrc)) {
    return originalSrc;
  }

  let src = `${originalSrc}/m/`;

  if (options?.crop) {
    const originalDimensions = getOriginalDimensions(originalSrc);

    if (originalDimensions) {
      src += `${getCropString(options.crop, originalDimensions)}/`;
    }
  }

  // filters should go at the end, so any other modifications should be above this comment
  if (shouldApplyAnyFilter(options?.quality)) {
    src += 'filters';
  }

  if (isDefined(options?.quality)) {
    src += `:quality(${options?.quality})`;
  }

  return src;
};

export const getOriginalDimensions = (originalSrc: string) => {
  const sizes = originalSrc.match(DIMENSIONS_AT_URL_PATTERN);
  if (sizes && sizes.length) {
    const dimensions = sizes[0].replaceAll('/', '').split('x').map(Number);

    return {
      width: dimensions[0],
      height: dimensions[1],
    };
  }
};

export const getCropString = ({ focus, dimensions }: Crop, originalDimensions: Dimensions) => {
  const desiredHeight = Math.min(dimensions.height, originalDimensions.height);
  const desiredWidth = Math.min(dimensions.width, originalDimensions.width);

  const left = focus.x - desiredWidth / 2;
  const top = focus.y - desiredHeight / 2;
  const right = focus.x + desiredWidth / 2;
  const bottom = focus.y + desiredHeight / 2;

  const sides = {
    left,
    top,
    right,
    bottom,
  };

  if (top < 0) {
    sides.top = 0;
    sides.bottom = desiredHeight;
  }

  if (left < 0) {
    sides.left = 0;
    sides.right = desiredWidth;
  }

  if (right > originalDimensions.width) {
    sides.right = originalDimensions.width;
    sides.left = originalDimensions.width - desiredWidth;
  }

  if (bottom > originalDimensions.height) {
    sides.bottom = originalDimensions.height;
    sides.top = originalDimensions.height - desiredHeight;
  }

  return `${sides.left}x${sides.top}:${sides.right}x${sides.bottom}`;
};

export const getCoordsOfFocus = (focus: string | null): Coords | undefined => {
  if (!focus) return;

  const point = focus.split(':')[0];
  return {
    x: Number(point.split('x')[0]),
    y: Number(point.split('x')[1]),
  };
};

const isImageSvg = (src?: string) => src?.endsWith('.svg');

const isDefined = (prop: unknown) => typeof prop !== 'undefined';

const shouldApplyAnyFilter = (...filters: unknown[]) => {
  for (const filter of filters) {
    if (isDefined(filter)) {
      return true;
    }
  }
};
