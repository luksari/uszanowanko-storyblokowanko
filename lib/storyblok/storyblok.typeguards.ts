import { SbAsset, MaybeSbAsset } from 'lib/storyblok/storyblok.types';

export const isCorrectImageAsset = (asset: MaybeSbAsset): asset is SbAsset => {
  return asset.filename !== null && asset.alt !== '' && asset.title !== '';
};

export const isCorrectVideoAsset = (asset: MaybeSbAsset): asset is SbAsset => {
  return asset.filename !== null;
};

export const areNotEmpty = (...args: Array<string | '' | unknown>) => {
  return !args.includes('') && !args.includes(undefined);
};

export const isValidColor = (color: string) => color.match(/^#[0-9a-f]{3,6}$/gim);
