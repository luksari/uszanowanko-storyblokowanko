import { SbEditable } from './storyblok.types';

declare module '@storyblok/storyblok-editable' {
  import { SbBlok } from './storyblok.types';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function sbEditable(blok?: SbBlok<any, any>): SbEditable;
}
