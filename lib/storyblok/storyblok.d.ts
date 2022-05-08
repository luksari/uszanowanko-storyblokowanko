import { SbEditable } from './storyblok.types';

declare module '@storyblok/storyblok-editable' {
  import { SbBlok } from './storyblok.types';
  export function sbEditable(blok?: SbBlok<any, any>): SbEditable;
}
