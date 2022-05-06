import { SbBlok, SbComponentName } from 'lib/storyblok/storyblok.types';

export type DynamicComponentProps = {
  blok: SbBlok<SbComponentName, SbBlok<SbComponentName, SbBlok<SbComponentName, Record<string, unknown>>>>;
};
