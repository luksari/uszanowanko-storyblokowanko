import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export type ImageServiceOptions = {
  quality?: number;
  crop?: Crop;
};

export type Crop = {
  focus: Coords;
  dimensions: Dimensions;
};

export type SbImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  options?: ImageServiceOptions;
};

export type Dimensions = {
  width: number;
  height: number;
};

export type Coords = {
  x: number;
  y: number;
};
